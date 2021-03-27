import { isRegionsEmpty } from './is-region-empty';
import { buildNoContentResponse } from './build-no-content-response';
import { removeNoUnusedProperties } from './remove-no-unused-properties';
import { buildSuccessRegionsResponse } from './build-success-regions-response';

function adapterRegionsResponse(data, cacheMaxAge) {
  if (isRegionsEmpty(data)) {
    return buildNoContentResponse();
  }
  return buildSuccessRegionsResponse(removeNoUnusedProperties(data), cacheMaxAge);
}

export { adapterRegionsResponse };
