import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AssociationSpec } from '../models/AssociationSpec';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
export declare class AssociationsApiRequestFactory extends BaseAPIRequestFactory {
    archive(lineItemId: number, toObjectType: string, toObjectId: number, _options?: Configuration): Promise<RequestContext>;
    create(lineItemId: number, toObjectType: string, toObjectId: number, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<RequestContext>;
    getAll(lineItemId: number, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class AssociationsApiResponseProcessor {
    archive(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<LabelsBetweenObjectPair>;
    getAll(response: ResponseContext): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>;
}
