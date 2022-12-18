"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseSettingsExternalApi = exports.PromiseMarketingEventsExternalApi = exports.PromiseAttendanceSubscriberStateChangesApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseAttendanceSubscriberStateChangesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAttendanceSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }
    create(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options) {
        const result = this.api.create(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);
        return result.toPromise();
    }
    createByEmail(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options) {
        const result = this.api.createByEmail(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);
        return result.toPromise();
    }
}
exports.PromiseAttendanceSubscriberStateChangesApi = PromiseAttendanceSubscriberStateChangesApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseMarketingEventsExternalApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableMarketingEventsExternalApi(configuration, requestFactory, responseProcessor);
    }
    archive(externalEventId, externalAccountId, _options) {
        const result = this.api.archive(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }
    archiveBatch(batchInputMarketingEventExternalUniqueIdentifier, _options) {
        const result = this.api.archiveBatch(batchInputMarketingEventExternalUniqueIdentifier, _options);
        return result.toPromise();
    }
    complete(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options) {
        const result = this.api.complete(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options);
        return result.toPromise();
    }
    create(marketingEventCreateRequestParams, _options) {
        const result = this.api.create(marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }
    doCancel(externalEventId, externalAccountId, _options) {
        const result = this.api.doCancel(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }
    doEmailUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options) {
        const result = this.api.doEmailUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);
        return result.toPromise();
    }
    doSearch(q, _options) {
        const result = this.api.doSearch(q, _options);
        return result.toPromise();
    }
    doUpsert(batchInputMarketingEventCreateRequestParams, _options) {
        const result = this.api.doUpsert(batchInputMarketingEventCreateRequestParams, _options);
        return result.toPromise();
    }
    doUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options) {
        const result = this.api.doUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);
        return result.toPromise();
    }
    getById(externalEventId, externalAccountId, _options) {
        const result = this.api.getById(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }
    replace(externalEventId, marketingEventCreateRequestParams, _options) {
        const result = this.api.replace(externalEventId, marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }
    update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options) {
        const result = this.api.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);
        return result.toPromise();
    }
}
exports.PromiseMarketingEventsExternalApi = PromiseMarketingEventsExternalApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseSettingsExternalApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableSettingsExternalApi(configuration, requestFactory, responseProcessor);
    }
    create(appId, eventDetailSettingsUrl, _options) {
        const result = this.api.create(appId, eventDetailSettingsUrl, _options);
        return result.toPromise();
    }
    getAll(appId, _options) {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }
}
exports.PromiseSettingsExternalApi = PromiseSettingsExternalApi;
//# sourceMappingURL=PromiseAPI.js.map