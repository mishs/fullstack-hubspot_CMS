import { AssociationsApi, BasicApi, BatchApi, PublicObjectApi, SearchApi } from '../../../../../codegen/crm/objects/feedback_submissions/index';
import IConfiguration from '../../../../configuration/IConfiguration';
export default class FeedbackSubmissionsDiscovery {
    associationsApi: AssociationsApi;
    basicApi: BasicApi;
    batchApi: BatchApi;
    publicObjectApi: PublicObjectApi;
    searchApi: SearchApi;
    constructor(config: IConfiguration);
}
