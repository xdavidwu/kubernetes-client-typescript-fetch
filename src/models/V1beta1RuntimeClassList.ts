/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
    V1beta1RuntimeClass,
    V1beta1RuntimeClassFromJSON,
    V1beta1RuntimeClassFromJSONTyped,
    V1beta1RuntimeClassToJSON,
} from './';

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 * @export
 * @interface V1beta1RuntimeClassList
 */
export interface V1beta1RuntimeClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1RuntimeClassList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<V1beta1RuntimeClass>}
     * @memberof V1beta1RuntimeClassList
     */
    items: Array<V1beta1RuntimeClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1RuntimeClassList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1beta1RuntimeClassList
     */
    metadata?: V1ListMeta;
}

export function V1beta1RuntimeClassListFromJSON(json: any): V1beta1RuntimeClassList {
    return V1beta1RuntimeClassListFromJSONTyped(json, false);
}

export function V1beta1RuntimeClassListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1RuntimeClassList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta1RuntimeClassFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1RuntimeClassListToJSON(value?: V1beta1RuntimeClassList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1beta1RuntimeClassToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


