exports.handler = async function (event, context) {
  const search = event.queryStringParameters.search;
  if (search) {
    // do something
    console.log("search " + search);
  }

  const mapData = [
    {
      storeName: "My Store",
      address: "123 Somewhere",
      city: "Winnipeg",
      state: "Manitoba",
      zipCode: "R3Y 0H0",
      phone: "222-2222",
      latitude: 49.84951,
      longitude: -97.13868,
    },
    {
      storeName: "Bell MTS Place",
      address: "345 Portage Ave",
      city: "Winnipeg",
      state: "Manitoba",
      zipCode: "R3C 5S4",
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(mapData),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
    },
  };
};
