function buildSuccessRegionsResponse(regions, cacheMaxAge) {
  return {
    body: {
      regions,
    },
    statusCode: 200,
    headers: {
      maxAge: cacheMaxAge,
    },
  };
}

export { buildSuccessRegionsResponse };
