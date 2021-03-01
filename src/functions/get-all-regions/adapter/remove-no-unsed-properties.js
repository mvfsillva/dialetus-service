function removeNoUnsedProperties(regions) {
  return regions.map(({ uf, label }) => {
    return {
      uf,
      label,
    };
  });
}

export { removeNoUnsedProperties };
