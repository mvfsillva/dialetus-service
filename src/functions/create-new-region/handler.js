import { config } from './config';
import { dynamoDBSaveItem } from '../../components/dynamodb/querys/save-item';
import { handlerSuccess } from '../../libs/http/response/handler-success';
import { handlerResponseError } from '../../libs/http/response/handler-error';
import { createNewRegion } from './use-case';

async function handlerCreateNewRegion(event) {
  const {
    body,
    requestContext: { requestId },
  } = event;
  try {
    const region = await createNewRegion(JSON.parse(body), {
      dynamoDBSaveItem,
      tableName: config.regionTableName,
    });
    return handlerSuccess({ body: region, statusCode: 201 }, requestId);
  } catch (error) {
    return handlerResponseError(error, requestId);
  }
}

export { handlerCreateNewRegion };
