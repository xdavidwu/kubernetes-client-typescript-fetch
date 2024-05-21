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
import type { V1Namespace } from './V1Namespace';
import {
    V1NamespaceFromJSON,
    V1NamespaceFromJSONTyped,
    V1NamespaceToJSON,
} from './V1Namespace';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * NamespaceList is a list of Namespaces.
 * @export
 * @interface V1NamespaceList
 */
export interface V1NamespaceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1NamespaceList
     */
    apiVersion?: string;
    /**
     * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     * @type {Array<V1Namespace>}
     * @memberof V1NamespaceList
     */
    items: Array<V1Namespace>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1NamespaceList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1NamespaceList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1NamespaceList interface.
 */
export function instanceOfV1NamespaceList(value: object): value is V1NamespaceList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1NamespaceListFromJSON(json: any): V1NamespaceList {
    return V1NamespaceListFromJSONTyped(json, false);
}

export function V1NamespaceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NamespaceList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1NamespaceFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1NamespaceListToJSON(value?: V1NamespaceList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1NamespaceToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

