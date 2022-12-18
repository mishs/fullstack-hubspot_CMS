export declare class MarketingEventEmailSubscriber {
    'interactionDateTime': number;
    'properties'?: {
        [key: string]: string;
    };
    'email': string;
    'contactProperties'?: {
        [key: string]: string;
    };
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
