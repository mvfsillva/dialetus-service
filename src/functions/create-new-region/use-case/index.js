async function createNewRegion({ uf, label, draft = true }, { saveNewRegion, tableName }) {
  return saveNewRegion(tableName, { uf: uf, label, draft });
}

export { createNewRegion };
