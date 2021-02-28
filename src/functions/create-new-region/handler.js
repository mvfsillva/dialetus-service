import { config } from './config';
import { saveNewRegion } from '../../components/dynamodb/querys/save-new-region';
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
      saveNewRegion,
      tableName: config.regionTableName,
    });
    return handlerSuccess({ body: region, statusCode: 201 }, requestId);
  } catch (error) {
    return handlerResponseError(error, requestId);
  }
}

export { handlerCreateNewRegion };
