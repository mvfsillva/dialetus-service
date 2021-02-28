import AWS from 'aws-sdk';

function unmarshall(data) {
  return AWS.DynamoDB.Converter.unmarshall(data);
}

function convertArray(data) {
  return data.map(item => unmarshall(item));
}

function convertRecordsToObject(data) {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return convertArray(data);
  }
  return unmarshall(data);
}

export { convertRecordsToObject };
