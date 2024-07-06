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
import type { V1Ingress } from './V1Ingress';
import {
    V1IngressFromJSON,
    V1IngressFromJSONTyped,
    V1IngressToJSON,
} from './V1Ingress';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * IngressList is a collection of Ingress.
 * @export
 * @interface V1IngressList
 */
export interface V1IngressList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1IngressList
     */
    apiVersion?: string;
    /**
     * items is the list of Ingress.
     * @type {Array<V1Ingress>}
     * @memberof V1IngressList
     */
    items: Array<V1Ingress>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1IngressList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1IngressList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1IngressList interface.
 */
export function instanceOfV1IngressList(value: object): value is V1IngressList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1IngressListFromJSON(json: any): V1IngressList {
    return V1IngressListFromJSONTyped(json, false);
}

export function V1IngressListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1IngressFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1IngressListToJSON(value?: V1IngressList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1IngressToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

