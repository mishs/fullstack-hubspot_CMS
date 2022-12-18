"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../../../../../codegen/crm/objects/feedback_submissions/configuration");
const index_1 = require("../../../../../codegen/crm/objects/feedback_submissions/index");
const rxjsStub_1 = require("../../../../../codegen/crm/objects/feedback_submissions/rxjsStub");
const ApiClientConfigurator_1 = require("../../../../configuration/ApiClientConfigurator");
class FeedbackSubmissionsDiscovery {
    constructor(config) {
        const configuration = (0, configuration_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.associationsApi = new index_1.AssociationsApi(configuration);
        this.basicApi = new index_1.BasicApi(configuration);
        this.batchApi = new index_1.BatchApi(configuration);
        this.publicObjectApi = new index_1.PublicObjectApi(configuration);
        this.searchApi = new index_1.SearchApi(configuration);
    }
}
exports.default = FeedbackSubmissionsDiscovery;
//# sourceMappingURL=FeedbackSubmissionsDiscovery.js.map