"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSettingsExternalApi = exports.ObjectMarketingEventsExternalApi = exports.ObjectAttendanceSubscriberStateChangesApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectAttendanceSubscriberStateChangesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAttendanceSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }
    create(param, options) {
        return this.api.create(param.externalEventId, param.subscriberState, param.batchInputMarketingEventSubscriber, param.externalAccountId, options).toPromise();
    }
    createByEmail(param, options) {
        return this.api.createByEmail(param.externalEventId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber, param.externalAccountId, options).toPromise();
    }
}
exports.ObjectAttendanceSubscriberStateChangesApi = ObjectAttendanceSubscriberStateChangesApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectMarketingEventsExternalApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableMarketingEventsExternalApi(configuration, requestFactory, responseProcessor);
    }
    archive(param, options) {
        return this.api.archive(param.externalEventId, param.externalAccountId, options).toPromise();
    }
    archiveBatch(param, options) {
        return this.api.archiveBatch(param.batchInputMarketingEventExternalUniqueIdentifier, options).toPromise();
    }
    complete(param, options) {
        return this.api.complete(param.externalEventId, param.externalAccountId, param.marketingEventCompleteRequestParams, options).toPromise();
    }
    create(param, options) {
        return this.api.create(param.marketingEventCreateRequestParams, options).toPromise();
    }
    doCancel(param, options) {
        return this.api.doCancel(param.externalEventId, param.externalAccountId, options).toPromise();
    }
    doEmailUpsertById(param, options) {
        return this.api.doEmailUpsertById(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber, options).toPromise();
    }
    doSearch(param, options) {
        return this.api.doSearch(param.q, options).toPromise();
    }
    doUpsert(param, options) {
        return this.api.doUpsert(param.batchInputMarketingEventCreateRequestParams, options).toPromise();
    }
    doUpsertById(param, options) {
        return this.api.doUpsertById(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber, options).toPromise();
    }
    getById(param, options) {
        return this.api.getById(param.externalEventId, param.externalAccountId, options).toPromise();
    }
    replace(param, options) {
        return this.api.replace(param.externalEventId, param.marketingEventCreateRequestParams, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams, options).toPromise();
    }
}
exports.ObjectMarketingEventsExternalApi = ObjectMarketingEventsExternalApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectSettingsExternalApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableSettingsExternalApi(configuration, requestFactory, responseProcessor);
    }
    create(param, options) {
        return this.api.create(param.appId, param.eventDetailSettingsUrl, options).toPromise();
    }
    getAll(param, options) {
        return this.api.getAll(param.appId, options).toPromise();
    }
}
exports.ObjectSettingsExternalApi = ObjectSettingsExternalApi;
//# sourceMappingURL=ObjectParamAPI.js.map