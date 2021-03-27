import AWS from 'aws-sdk';
import { convertRecordsToObject } from '../utils/convert-records-to-object';

const dynamoDB = new AWS.DynamoDB();

async function findRegions(tableName) {
  const statement = `SELECT * FROM "${tableName}" WHERE "draft" = 'false'`;
  const { Items } = await dynamoDB.executeStatement({ Statement: statement }).promise();
  return convertRecordsToObject(Items);
}

export { findRegions };
