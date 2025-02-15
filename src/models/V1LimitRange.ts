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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1LimitRangeSpec } from './V1LimitRangeSpec';
import {
    V1LimitRangeSpecFromJSON,
    V1LimitRangeSpecFromJSONTyped,
    V1LimitRangeSpecToJSON,
} from './V1LimitRangeSpec';

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 * @export
 * @interface V1LimitRange
 */
export interface V1LimitRange {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1LimitRange
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1LimitRange
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1LimitRange
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1LimitRangeSpec}
     * @memberof V1LimitRange
     */
    spec?: V1LimitRangeSpec;
}

/**
 * Check if a given object implements the V1LimitRange interface.
 */
export function instanceOfV1LimitRange(value: object): value is V1LimitRange {
    return true;
}

export function V1LimitRangeFromJSON(json: any): V1LimitRange {
    return V1LimitRangeFromJSONTyped(json, false);
}

export function V1LimitRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LimitRange {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1LimitRangeSpecFromJSON(json['spec']),
    };
}

export function V1LimitRangeToJSON(value?: V1LimitRange | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1LimitRangeSpecToJSON(value['spec']),
    };
}

