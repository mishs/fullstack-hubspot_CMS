"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchResponseSubscriberVidResponse = void 0;
class BatchResponseSubscriberVidResponse {
    static getAttributeTypeMap() {
        return BatchResponseSubscriberVidResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.BatchResponseSubscriberVidResponse = BatchResponseSubscriberVidResponse;
BatchResponseSubscriberVidResponse.discriminator = undefined;
BatchResponseSubscriberVidResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "BatchResponseSubscriberVidResponseStatusEnum",
        "format": ""
    },
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<SubscriberVidResponse>",
        "format": ""
    },
    {
        "name": "numErrors",
        "baseName": "numErrors",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<StandardError>",
        "format": ""
    },
    {
        "name": "requestedAt",
        "baseName": "requestedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "startedAt",
        "baseName": "startedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "completedAt",
        "baseName": "completedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
];
//# sourceMappingURL=BatchResponseSubscriberVidResponse.js.map