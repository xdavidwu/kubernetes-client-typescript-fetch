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
import type { V1PersistentVolumeClaim } from './V1PersistentVolumeClaim';
import {
    V1PersistentVolumeClaimFromJSON,
    V1PersistentVolumeClaimFromJSONTyped,
    V1PersistentVolumeClaimToJSON,
} from './V1PersistentVolumeClaim';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 * @export
 * @interface V1PersistentVolumeClaimList
 */
export interface V1PersistentVolumeClaimList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PersistentVolumeClaimList
     */
    apiVersion?: string;
    /**
     * items is a list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     * @type {Array<V1PersistentVolumeClaim>}
     * @memberof V1PersistentVolumeClaimList
     */
    items: Array<V1PersistentVolumeClaim>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PersistentVolumeClaimList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1PersistentVolumeClaimList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1PersistentVolumeClaimList interface.
 */
export function instanceOfV1PersistentVolumeClaimList(value: object): value is V1PersistentVolumeClaimList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1PersistentVolumeClaimListFromJSON(json: any): V1PersistentVolumeClaimList {
    return V1PersistentVolumeClaimListFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1PersistentVolumeClaimFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1PersistentVolumeClaimListToJSON(value?: V1PersistentVolumeClaimList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1PersistentVolumeClaimToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

