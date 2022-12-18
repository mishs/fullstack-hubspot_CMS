import { Configuration } from '../configuration';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';
import { AttendanceSubscriberStateChangesApiRequestFactory, AttendanceSubscriberStateChangesApiResponseProcessor } from "../apis/AttendanceSubscriberStateChangesApi";
export interface AttendanceSubscriberStateChangesApiCreateRequest {
    externalEventId: string;
    subscriberState: string;
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber;
    externalAccountId?: string;
}
export interface AttendanceSubscriberStateChangesApiCreateByEmailRequest {
    externalEventId: string;
    subscriberState: string;
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber;
    externalAccountId?: string;
}
export declare class ObjectAttendanceSubscriberStateChangesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AttendanceSubscriberStateChangesApiRequestFactory, responseProcessor?: AttendanceSubscriberStateChangesApiResponseProcessor);
    create(param: AttendanceSubscriberStateChangesApiCreateRequest, options?: Configuration): Promise<BatchResponseSubscriberVidResponse>;
    createByEmail(param: AttendanceSubscriberStateChangesApiCreateByEmailRequest, options?: Configuration): Promise<BatchResponseSubscriberEmailResponse>;
}
import { MarketingEventsExternalApiRequestFactory, MarketingEventsExternalApiResponseProcessor } from "../apis/MarketingEventsExternalApi";
export interface MarketingEventsExternalApiArchiveRequest {
    externalEventId: string;
    externalAccountId: string;
}
export interface MarketingEventsExternalApiArchiveBatchRequest {
    batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier;
}
export interface MarketingEventsExternalApiCompleteRequest {
    externalEventId: string;
    externalAccountId: string;
    marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams;
}
export interface MarketingEventsExternalApiCreateRequest {
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams;
}
export interface MarketingEventsExternalApiDoCancelRequest {
    externalEventId: string;
    externalAccountId: string;
}
export interface MarketingEventsExternalApiDoEmailUpsertByIdRequest {
    externalEventId: string;
    subscriberState: string;
    externalAccountId: string;
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber;
}
export interface MarketingEventsExternalApiDoSearchRequest {
    q: string;
}
export interface MarketingEventsExternalApiDoUpsertRequest {
    batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams;
}
export interface MarketingEventsExternalApiDoUpsertByIdRequest {
    externalEventId: string;
    subscriberState: string;
    externalAccountId: string;
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber;
}
export interface MarketingEventsExternalApiGetByIdRequest {
    externalEventId: string;
    externalAccountId: string;
}
export interface MarketingEventsExternalApiReplaceRequest {
    externalEventId: string;
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams;
}
export interface MarketingEventsExternalApiUpdateRequest {
    externalEventId: string;
    externalAccountId: string;
    marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams;
}
export declare class ObjectMarketingEventsExternalApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MarketingEventsExternalApiRequestFactory, responseProcessor?: MarketingEventsExternalApiResponseProcessor);
    archive(param: MarketingEventsExternalApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveBatch(param: MarketingEventsExternalApiArchiveBatchRequest, options?: Configuration): Promise<void>;
    complete(param: MarketingEventsExternalApiCompleteRequest, options?: Configuration): Promise<MarketingEventDefaultResponse>;
    create(param: MarketingEventsExternalApiCreateRequest, options?: Configuration): Promise<MarketingEventDefaultResponse>;
    doCancel(param: MarketingEventsExternalApiDoCancelRequest, options?: Configuration): Promise<MarketingEventDefaultResponse>;
    doEmailUpsertById(param: MarketingEventsExternalApiDoEmailUpsertByIdRequest, options?: Configuration): Promise<void>;
    doSearch(param: MarketingEventsExternalApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>;
    doUpsert(param: MarketingEventsExternalApiDoUpsertRequest, options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse>;
    doUpsertById(param: MarketingEventsExternalApiDoUpsertByIdRequest, options?: Configuration): Promise<void>;
    getById(param: MarketingEventsExternalApiGetByIdRequest, options?: Configuration): Promise<MarketingEventPublicReadResponse>;
    replace(param: MarketingEventsExternalApiReplaceRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse>;
    update(param: MarketingEventsExternalApiUpdateRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse>;
}
import { SettingsExternalApiRequestFactory, SettingsExternalApiResponseProcessor } from "../apis/SettingsExternalApi";
export interface SettingsExternalApiCreateRequest {
    appId: number;
    eventDetailSettingsUrl: EventDetailSettingsUrl;
}
export interface SettingsExternalApiGetAllRequest {
    appId: number;
}
export declare class ObjectSettingsExternalApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsExternalApiRequestFactory, responseProcessor?: SettingsExternalApiResponseProcessor);
    create(param: SettingsExternalApiCreateRequest, options?: Configuration): Promise<EventDetailSettings>;
    getAll(param: SettingsExternalApiGetAllRequest, options?: Configuration): Promise<EventDetailSettings>;
}
