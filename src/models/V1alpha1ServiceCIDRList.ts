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
import type { V1alpha1ServiceCIDR } from './V1alpha1ServiceCIDR';
import {
    V1alpha1ServiceCIDRFromJSON,
    V1alpha1ServiceCIDRFromJSONTyped,
    V1alpha1ServiceCIDRToJSON,
} from './V1alpha1ServiceCIDR';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ServiceCIDRList contains a list of ServiceCIDR objects.
 * @export
 * @interface V1alpha1ServiceCIDRList
 */
export interface V1alpha1ServiceCIDRList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1ServiceCIDRList
     */
    apiVersion?: string;
    /**
     * items is the list of ServiceCIDRs.
     * @type {Array<V1alpha1ServiceCIDR>}
     * @memberof V1alpha1ServiceCIDRList
     */
    items: Array<V1alpha1ServiceCIDR>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1ServiceCIDRList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1alpha1ServiceCIDRList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1alpha1ServiceCIDRList interface.
 */
export function instanceOfV1alpha1ServiceCIDRList(value: object): value is V1alpha1ServiceCIDRList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1alpha1ServiceCIDRListFromJSON(json: any): V1alpha1ServiceCIDRList {
    return V1alpha1ServiceCIDRListFromJSONTyped(json, false);
}

export function V1alpha1ServiceCIDRListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ServiceCIDRList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1ServiceCIDRFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1ServiceCIDRListToJSON(value?: V1alpha1ServiceCIDRList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1alpha1ServiceCIDRToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

