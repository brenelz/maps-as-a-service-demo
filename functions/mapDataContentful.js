const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

exports.handler = async function (event, context) {
  const locations = await client.getEntries({
    content_type: "locations",
  });

  const mapData = locations.items.map(function (entry) {
    let store = {
      storeName: entry.fields.storeName,
      address: entry.fields.address,
      city: entry.fields.city,
      state: entry.fields.state,
      zipCode: entry.fields.zipCode,
      phone: entry.fields.phone,
    };

    if (entry.fields.latitude != "" && entry.fields.longitude !== "") {
      store.latitude = entry.fields.latitude;
      store.longitude = entry.fields.longitude;
    }

    return store;
  });

  return {
    statusCode: 200,
    body: JSON.stringify(mapData),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
    },
  };
};
