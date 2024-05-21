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
import type { V1ReplicationController } from './V1ReplicationController';
import {
    V1ReplicationControllerFromJSON,
    V1ReplicationControllerFromJSONTyped,
    V1ReplicationControllerToJSON,
} from './V1ReplicationController';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ReplicationControllerList is a collection of replication controllers.
 * @export
 * @interface V1ReplicationControllerList
 */
export interface V1ReplicationControllerList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ReplicationControllerList
     */
    apiVersion?: string;
    /**
     * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     * @type {Array<V1ReplicationController>}
     * @memberof V1ReplicationControllerList
     */
    items: Array<V1ReplicationController>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ReplicationControllerList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ReplicationControllerList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1ReplicationControllerList interface.
 */
export function instanceOfV1ReplicationControllerList(value: object): value is V1ReplicationControllerList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1ReplicationControllerListFromJSON(json: any): V1ReplicationControllerList {
    return V1ReplicationControllerListFromJSONTyped(json, false);
}

export function V1ReplicationControllerListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicationControllerList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ReplicationControllerFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ReplicationControllerListToJSON(value?: V1ReplicationControllerList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1ReplicationControllerToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

