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
import type { V1ReplicaSet } from './V1ReplicaSet';
import {
    V1ReplicaSetFromJSON,
    V1ReplicaSetFromJSONTyped,
    V1ReplicaSetToJSON,
} from './V1ReplicaSet';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ReplicaSetList is a collection of ReplicaSets.
 * @export
 * @interface V1ReplicaSetList
 */
export interface V1ReplicaSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ReplicaSetList
     */
    apiVersion?: string;
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     * @type {Array<V1ReplicaSet>}
     * @memberof V1ReplicaSetList
     */
    items: Array<V1ReplicaSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ReplicaSetList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ReplicaSetList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1ReplicaSetList interface.
 */
export function instanceOfV1ReplicaSetList(value: object): value is V1ReplicaSetList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1ReplicaSetListFromJSON(json: any): V1ReplicaSetList {
    return V1ReplicaSetListFromJSONTyped(json, false);
}

export function V1ReplicaSetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicaSetList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ReplicaSetFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ReplicaSetListToJSON(value?: V1ReplicaSetList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1ReplicaSetToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

