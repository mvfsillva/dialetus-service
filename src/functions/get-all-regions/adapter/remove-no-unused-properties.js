function removeNoUnusedProperties(regions) {
  return regions.map(({ uf, label }) => {
    return {
      uf,
      label,
    };
  });
}

export { removeNoUnusedProperties };
