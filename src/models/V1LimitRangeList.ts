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
import type { V1LimitRange } from './V1LimitRange';
import {
    V1LimitRangeFromJSON,
    V1LimitRangeFromJSONTyped,
    V1LimitRangeToJSON,
} from './V1LimitRange';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * LimitRangeList is a list of LimitRange items.
 * @export
 * @interface V1LimitRangeList
 */
export interface V1LimitRangeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1LimitRangeList
     */
    apiVersion?: string;
    /**
     * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {Array<V1LimitRange>}
     * @memberof V1LimitRangeList
     */
    items: Array<V1LimitRange>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1LimitRangeList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1LimitRangeList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1LimitRangeList interface.
 */
export function instanceOfV1LimitRangeList(value: object): value is V1LimitRangeList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1LimitRangeListFromJSON(json: any): V1LimitRangeList {
    return V1LimitRangeListFromJSONTyped(json, false);
}

export function V1LimitRangeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LimitRangeList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1LimitRangeFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1LimitRangeListToJSON(value?: V1LimitRangeList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1LimitRangeToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

