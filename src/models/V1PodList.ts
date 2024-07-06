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
import type { V1Pod } from './V1Pod';
import {
    V1PodFromJSON,
    V1PodFromJSONTyped,
    V1PodToJSON,
} from './V1Pod';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * PodList is a list of Pods.
 * @export
 * @interface V1PodList
 */
export interface V1PodList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PodList
     */
    apiVersion?: string;
    /**
     * List of pods. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     * @type {Array<V1Pod>}
     * @memberof V1PodList
     */
    items: Array<V1Pod>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PodList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1PodList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1PodList interface.
 */
export function instanceOfV1PodList(value: object): value is V1PodList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1PodListFromJSON(json: any): V1PodList {
    return V1PodListFromJSONTyped(json, false);
}

export function V1PodListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1PodFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1PodListToJSON(value?: V1PodList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1PodToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

