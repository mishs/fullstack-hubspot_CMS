"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingEventExternalUniqueIdentifier = void 0;
class MarketingEventExternalUniqueIdentifier {
    static getAttributeTypeMap() {
        return MarketingEventExternalUniqueIdentifier.attributeTypeMap;
    }
    constructor() {
    }
}
exports.MarketingEventExternalUniqueIdentifier = MarketingEventExternalUniqueIdentifier;
MarketingEventExternalUniqueIdentifier.discriminator = undefined;
MarketingEventExternalUniqueIdentifier.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "externalAccountId",
        "baseName": "externalAccountId",
        "type": "string",
        "format": ""
    },
    {
        "name": "externalEventId",
        "baseName": "externalEventId",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=MarketingEventExternalUniqueIdentifier.js.map