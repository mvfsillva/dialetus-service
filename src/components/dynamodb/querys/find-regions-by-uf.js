import AWS from 'aws-sdk';
import { convertRecordsToObject } from '../utils/convert-records-to-object';

const dynamoDB = new AWS.DynamoDB();

async function findRegionByUF(tableName, uf) {
  const statement = `SELECT * FROM "${tableName}" WHERE "uf" = '${uf}'`;
  const { Items } = await dynamoDB.executeStatement({ Statement: statement }).promise();
  return convertRecordsToObject(Items);
}

export { findRegionByUF };
