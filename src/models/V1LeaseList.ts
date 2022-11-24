/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Lease } from './V1Lease';
import {
    V1LeaseFromJSON,
    V1LeaseFromJSONTyped,
    V1LeaseToJSON,
} from './V1Lease';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * LeaseList is a list of Lease objects.
 * @export
 * @interface V1LeaseList
 */
export interface V1LeaseList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1LeaseList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<V1Lease>}
     * @memberof V1LeaseList
     */
    items: Array<V1Lease>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1LeaseList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1LeaseList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1LeaseList interface.
 */
export function instanceOfV1LeaseList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function V1LeaseListFromJSON(json: any): V1LeaseList {
    return V1LeaseListFromJSONTyped(json, false);
}

export function V1LeaseListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LeaseList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1LeaseFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1LeaseListToJSON(value?: V1LeaseList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1LeaseToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

