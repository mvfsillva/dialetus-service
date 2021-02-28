/* eslint-disable max-depth */
/* eslint-disable complexity */
/* eslint-disable max-statements */
function stringify(value) {
  const lastKey = Object.keys(value).pop();
  let objString = '';
  if (typeof value === 'object') {
    objString += '{';
    for (const key in value) {
      objString += `'${key}':${stringify(value[key])}`;
      if (key !== lastKey) {
        objString += ',';
      }
    }
    objString += '}';
  } else if (typeof value === 'string') {
    objString += `'${value.replace(/'/g, "''")}'`;
  } else if (typeof value === 'number') {
    objString += `${value}`;
  } else if (typeof value === 'boolean') {
    objString += `${value}`;
  }
  return objString;
}
export { stringify };
