async function handlerCreateNewRegion(event) {
  console.log('regionTableName', process.env.regionTableName);
  console.log('event.body', event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event.body,
      },
      null,
      2,
    ),
  };
}

export { handlerCreateNewRegion };
