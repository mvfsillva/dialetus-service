import { config } from './config';
import { findRegions } from '../../components/dynamodb/querys/find-regions';
import { handlerSuccess } from '../../libs/http/response/handler-success';
import { handlerResponseError } from '../../libs/http/response/handler-error';
import { GetAllRegions } from './use-case';
import { adapterRegionsResponse } from './adapter';

async function handlerGetAllRegions(event, context) {
  try {
    const regions = await GetAllRegions({ findRegions, tableName: config.regionTableName });
    return handlerSuccess(adapterRegionsResponse(regions), context.awsRequestId);
  } catch (error) {
    return handlerResponseError(error, context.awsRequestId);
  }
}

export { handlerGetAllRegions };
