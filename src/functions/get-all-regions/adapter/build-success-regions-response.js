function buildSuccessRegionsResponse(regions) {
  return {
    body: {
      regions,
    },
    statusCode: 200,
  };
}

export { buildSuccessRegionsResponse };
