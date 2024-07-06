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
import type { V1NetworkPolicySpec } from './V1NetworkPolicySpec';
import {
    V1NetworkPolicySpecFromJSON,
    V1NetworkPolicySpecFromJSONTyped,
    V1NetworkPolicySpecToJSON,
} from './V1NetworkPolicySpec';

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 * @export
 * @interface V1NetworkPolicy
 */
export interface V1NetworkPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1NetworkPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1NetworkPolicy
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1NetworkPolicy
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1NetworkPolicySpec}
     * @memberof V1NetworkPolicy
     */
    spec?: V1NetworkPolicySpec;
}

/**
 * Check if a given object implements the V1NetworkPolicy interface.
 */
export function instanceOfV1NetworkPolicy(value: object): value is V1NetworkPolicy {
    return true;
}

export function V1NetworkPolicyFromJSON(json: any): V1NetworkPolicy {
    return V1NetworkPolicyFromJSONTyped(json, false);
}

export function V1NetworkPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicy {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1NetworkPolicySpecFromJSON(json['spec']),
    };
}

export function V1NetworkPolicyToJSON(value?: V1NetworkPolicy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1NetworkPolicySpecToJSON(value['spec']),
    };
}

