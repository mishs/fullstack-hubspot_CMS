import { BatchApi, TypesApi } from '../../../../codegen/crm/associations/index';
import IConfiguration from '../../../configuration/IConfiguration';
export default class AssociationsDiscovery {
    batchApi: BatchApi;
    typesApi: TypesApi;
    constructor(config: IConfiguration);
}
