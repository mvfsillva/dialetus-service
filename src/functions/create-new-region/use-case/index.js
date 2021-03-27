async function createNewRegion(
  { uf = '', label = '', draft = 'true' },
  { dynamoDBSaveItem, findRegionByUF, ConflictError, tableName },
) {
  const region = await findRegionByUF(tableName, uf.toUpperCase());
  if (region) {
    throw new ConflictError(`The UF '${uf.toUpperCase()}' exists in table`);
  }
  return dynamoDBSaveItem(tableName, { uf: uf.toUpperCase(), label, draft });
}

export { createNewRegion };
