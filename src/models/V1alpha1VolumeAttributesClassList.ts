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
import type { V1alpha1VolumeAttributesClass } from './V1alpha1VolumeAttributesClass';
import {
    V1alpha1VolumeAttributesClassFromJSON,
    V1alpha1VolumeAttributesClassFromJSONTyped,
    V1alpha1VolumeAttributesClassToJSON,
} from './V1alpha1VolumeAttributesClass';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * VolumeAttributesClassList is a collection of VolumeAttributesClass objects.
 * @export
 * @interface V1alpha1VolumeAttributesClassList
 */
export interface V1alpha1VolumeAttributesClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VolumeAttributesClassList
     */
    apiVersion?: string;
    /**
     * items is the list of VolumeAttributesClass objects.
     * @type {Array<V1alpha1VolumeAttributesClass>}
     * @memberof V1alpha1VolumeAttributesClassList
     */
    items: Array<V1alpha1VolumeAttributesClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VolumeAttributesClassList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1alpha1VolumeAttributesClassList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1alpha1VolumeAttributesClassList interface.
 */
export function instanceOfV1alpha1VolumeAttributesClassList(value: object): value is V1alpha1VolumeAttributesClassList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1alpha1VolumeAttributesClassListFromJSON(json: any): V1alpha1VolumeAttributesClassList {
    return V1alpha1VolumeAttributesClassListFromJSONTyped(json, false);
}

export function V1alpha1VolumeAttributesClassListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VolumeAttributesClassList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1VolumeAttributesClassFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1VolumeAttributesClassListToJSON(value?: V1alpha1VolumeAttributesClassList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1alpha1VolumeAttributesClassToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

