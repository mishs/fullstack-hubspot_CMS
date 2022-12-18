import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';
export declare class MarketingEventsExternalApiRequestFactory extends BaseAPIRequestFactory {
    archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<RequestContext>;
    archiveBatch(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<RequestContext>;
    complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Promise<RequestContext>;
    create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<RequestContext>;
    doCancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<RequestContext>;
    doEmailUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<RequestContext>;
    doSearch(q: string, _options?: Configuration): Promise<RequestContext>;
    doUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<RequestContext>;
    doUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<RequestContext>;
    getById(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<RequestContext>;
    replace(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<RequestContext>;
    update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Promise<RequestContext>;
}
export declare class MarketingEventsExternalApiResponseProcessor {
    archive(response: ResponseContext): Promise<void>;
    archiveBatch(response: ResponseContext): Promise<void>;
    complete(response: ResponseContext): Promise<MarketingEventDefaultResponse>;
    create(response: ResponseContext): Promise<MarketingEventDefaultResponse>;
    doCancel(response: ResponseContext): Promise<MarketingEventDefaultResponse>;
    doEmailUpsertById(response: ResponseContext): Promise<void>;
    doSearch(response: ResponseContext): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>;
    doUpsert(response: ResponseContext): Promise<BatchResponseMarketingEventPublicDefaultResponse>;
    doUpsertById(response: ResponseContext): Promise<void>;
    getById(response: ResponseContext): Promise<MarketingEventPublicReadResponse>;
    replace(response: ResponseContext): Promise<MarketingEventPublicDefaultResponse>;
    update(response: ResponseContext): Promise<MarketingEventPublicDefaultResponse>;
}
