/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1beta3FlowSchema } from './V1beta3FlowSchema';
import {
    V1beta3FlowSchemaFromJSON,
    V1beta3FlowSchemaFromJSONTyped,
    V1beta3FlowSchemaToJSON,
} from './V1beta3FlowSchema';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * FlowSchemaList is a list of FlowSchema objects.
 * @export
 * @interface V1beta3FlowSchemaList
 */
export interface V1beta3FlowSchemaList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta3FlowSchemaList
     */
    apiVersion?: string;
    /**
     * `items` is a list of FlowSchemas.
     * @type {Array<V1beta3FlowSchema>}
     * @memberof V1beta3FlowSchemaList
     */
    items: Array<V1beta3FlowSchema>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta3FlowSchemaList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1beta3FlowSchemaList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1beta3FlowSchemaList interface.
 */
export function instanceOfV1beta3FlowSchemaList(value: object): value is V1beta3FlowSchemaList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1beta3FlowSchemaListFromJSON(json: any): V1beta3FlowSchemaList {
    return V1beta3FlowSchemaListFromJSONTyped(json, false);
}

export function V1beta3FlowSchemaListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3FlowSchemaList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta3FlowSchemaFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta3FlowSchemaListToJSON(value?: V1beta3FlowSchemaList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1beta3FlowSchemaToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

