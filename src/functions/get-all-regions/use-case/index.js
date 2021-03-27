async function getAllRegions({ findRegions, tableName }) {
  return findRegions(tableName);
}

export { getAllRegions };
