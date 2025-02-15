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
import type { V1Role } from './V1Role';
import {
    V1RoleFromJSON,
    V1RoleFromJSONTyped,
    V1RoleToJSON,
} from './V1Role';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * RoleList is a collection of Roles
 * @export
 * @interface V1RoleList
 */
export interface V1RoleList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1RoleList
     */
    apiVersion?: string;
    /**
     * Items is a list of Roles
     * @type {Array<V1Role>}
     * @memberof V1RoleList
     */
    items: Array<V1Role>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1RoleList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1RoleList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1RoleList interface.
 */
export function instanceOfV1RoleList(value: object): value is V1RoleList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1RoleListFromJSON(json: any): V1RoleList {
    return V1RoleListFromJSONTyped(json, false);
}

export function V1RoleListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RoleList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1RoleFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1RoleListToJSON(value?: V1RoleList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1RoleToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

