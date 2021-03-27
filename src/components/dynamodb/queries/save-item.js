import AWS from 'aws-sdk';

const dynaClient = new AWS.DynamoDB.DocumentClient();

async function dynamoDBSaveItem(tableName, data) {
  const params = {
    TableName: tableName,
    Item: {
      ...data,
    },
  };
  try {
    await dynaClient.put(params).promise();
    return data;
  } catch (error) {
    throw error;
  }
}

export { dynamoDBSaveItem };
