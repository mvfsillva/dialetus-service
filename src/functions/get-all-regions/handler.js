import { config } from './config';
import { findRegions } from '../../components/dynamodb/queries/find-regions';
import { handlerSuccess } from '../../libs/http/response/handler-success';
import { handlerResponseError } from '../../libs/http/response/handler-error';
import { getAllRegions } from './use-case';
import { adapterRegionsResponse } from './adapter';

async function handlerGetAllRegions(event, context) {
  try {
    const regions = await getAllRegions({ findRegions, tableName: config.regionTableName });
    return handlerSuccess(
      adapterRegionsResponse(regions, config.cacheMaxAge),
      context.awsRequestId,
    );
  } catch (error) {
    return handlerResponseError(error, context.awsRequestId);
  }
}

export { handlerGetAllRegions };
