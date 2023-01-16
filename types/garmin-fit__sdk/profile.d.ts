export const Profile: {
    version: {
        major: number;
        minor: number;
        patch: number;
        type: string;
    };
    CommonFields: {
        PartIndex: number;
        Timestamp: number;
        MessageIndex: number;
    };
    messages: {
        readonly [index: number]: MessageDefinition;
    };
    types: {
        readonly [type: string]: TypeEnum;
    };
    MesgNum: {
        readonly [type: string]: number;
    };
};

export interface MessageDefinition {
    num: number;
    name: string;
    messagesKey: string;
    fields: {
        readonly [index: number]: FieldDefinition;
    };
}

export interface FieldDefinitionBase {
    name: string;
    type: string;
    array: 'false' | 'true' | '';
    scale: number | number[];
    offset: number | number[];
    units: string | string[];
    bits: number[];
    components: string[];
    hasComponents: boolean;
}

export interface FieldDefinition extends FieldDefinitionBase {
    num: number;
    isAccumulated: boolean;
    subfields: SubFieldDefinition[];
}

export interface SubFieldDefinition extends FieldDefinitionBase {
    map: Array<{ name: string; value: number }>;
}

export interface TypeEnum {
    readonly [index: number]: string;
}
