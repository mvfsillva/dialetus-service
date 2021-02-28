async function createNewRegion(
  { uf = '', label = '', draft = 'true' },
  { dynamoDBSaveItem, tableName },
) {
  return dynamoDBSaveItem(tableName, { uf: uf.toUpperCase(), label, draft });
}

export { createNewRegion };
