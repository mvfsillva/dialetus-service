import AWS from 'aws-sdk';
import { stringify } from '../utils/stringify-data-before-save';

const dynamoDB = new AWS.DynamoDB();

async function saveNewRegion(tableName, data) {
  const insertQuery = `INSERT INTO "${tableName}" VALUE ${stringify(data)}`;
  try {
    return dynamoDB
      .executeStatement({
        Statement: insertQuery,
      })
      .promise();
  } catch (error) {
    throw error;
  }
}

export { saveNewRegion };
