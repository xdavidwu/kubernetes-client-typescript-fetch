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
import type { V1ResourceQuota } from './V1ResourceQuota';
import {
    V1ResourceQuotaFromJSON,
    V1ResourceQuotaFromJSONTyped,
    V1ResourceQuotaToJSON,
} from './V1ResourceQuota';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 * @export
 * @interface V1ResourceQuotaList
 */
export interface V1ResourceQuotaList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ResourceQuotaList
     */
    apiVersion?: string;
    /**
     * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     * @type {Array<V1ResourceQuota>}
     * @memberof V1ResourceQuotaList
     */
    items: Array<V1ResourceQuota>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ResourceQuotaList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ResourceQuotaList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1ResourceQuotaList interface.
 */
export function instanceOfV1ResourceQuotaList(value: object): value is V1ResourceQuotaList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1ResourceQuotaListFromJSON(json: any): V1ResourceQuotaList {
    return V1ResourceQuotaListFromJSONTyped(json, false);
}

export function V1ResourceQuotaListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceQuotaList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ResourceQuotaFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ResourceQuotaListToJSON(value?: V1ResourceQuotaList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1ResourceQuotaToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

