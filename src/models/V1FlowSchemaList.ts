/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1FlowSchema } from './V1FlowSchema';
import {
    V1FlowSchemaFromJSON,
    V1FlowSchemaFromJSONTyped,
    V1FlowSchemaToJSON,
} from './V1FlowSchema';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * FlowSchemaList is a list of FlowSchema objects.
 * @export
 * @interface V1FlowSchemaList
 */
export interface V1FlowSchemaList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1FlowSchemaList
     */
    apiVersion?: string;
    /**
     * `items` is a list of FlowSchemas.
     * @type {Array<V1FlowSchema>}
     * @memberof V1FlowSchemaList
     */
    items: Array<V1FlowSchema>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1FlowSchemaList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1FlowSchemaList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1FlowSchemaList interface.
 */
export function instanceOfV1FlowSchemaList(value: object): value is V1FlowSchemaList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1FlowSchemaListFromJSON(json: any): V1FlowSchemaList {
    return V1FlowSchemaListFromJSONTyped(json, false);
}

export function V1FlowSchemaListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FlowSchemaList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1FlowSchemaFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1FlowSchemaListToJSON(value?: V1FlowSchemaList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1FlowSchemaToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

