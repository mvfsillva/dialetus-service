const config = {
  regionTableName: process.env.regionTableName,
  cacheMaxAge: process.env.CACHE_MAX_AGE || 0,
};

export { config };
