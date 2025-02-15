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
import type { V1alpha1StorageVersion } from './V1alpha1StorageVersion';
import {
    V1alpha1StorageVersionFromJSON,
    V1alpha1StorageVersionFromJSONTyped,
    V1alpha1StorageVersionToJSON,
} from './V1alpha1StorageVersion';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * A list of StorageVersions.
 * @export
 * @interface V1alpha1StorageVersionList
 */
export interface V1alpha1StorageVersionList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1StorageVersionList
     */
    apiVersion?: string;
    /**
     * Items holds a list of StorageVersion
     * @type {Array<V1alpha1StorageVersion>}
     * @memberof V1alpha1StorageVersionList
     */
    items: Array<V1alpha1StorageVersion>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1StorageVersionList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1alpha1StorageVersionList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1alpha1StorageVersionList interface.
 */
export function instanceOfV1alpha1StorageVersionList(value: object): value is V1alpha1StorageVersionList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1alpha1StorageVersionListFromJSON(json: any): V1alpha1StorageVersionList {
    return V1alpha1StorageVersionListFromJSONTyped(json, false);
}

export function V1alpha1StorageVersionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1StorageVersionList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1StorageVersionFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1StorageVersionListToJSON(value?: V1alpha1StorageVersionList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1alpha1StorageVersionToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

