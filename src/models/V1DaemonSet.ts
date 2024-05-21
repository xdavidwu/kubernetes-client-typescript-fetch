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
import type { V1DaemonSetSpec } from './V1DaemonSetSpec';
import {
    V1DaemonSetSpecFromJSON,
    V1DaemonSetSpecFromJSONTyped,
    V1DaemonSetSpecToJSON,
} from './V1DaemonSetSpec';
import type { V1DaemonSetStatus } from './V1DaemonSetStatus';
import {
    V1DaemonSetStatusFromJSON,
    V1DaemonSetStatusFromJSONTyped,
    V1DaemonSetStatusToJSON,
} from './V1DaemonSetStatus';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * DaemonSet represents the configuration of a daemon set.
 * @export
 * @interface V1DaemonSet
 */
export interface V1DaemonSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DaemonSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DaemonSet
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1DaemonSet
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1DaemonSetSpec}
     * @memberof V1DaemonSet
     */
    spec?: V1DaemonSetSpec;
    /**
     * 
     * @type {V1DaemonSetStatus}
     * @memberof V1DaemonSet
     */
    status?: V1DaemonSetStatus;
}

/**
 * Check if a given object implements the V1DaemonSet interface.
 */
export function instanceOfV1DaemonSet(value: object): value is V1DaemonSet {
    return true;
}

export function V1DaemonSetFromJSON(json: any): V1DaemonSet {
    return V1DaemonSetFromJSONTyped(json, false);
}

export function V1DaemonSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaemonSet {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1DaemonSetSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1DaemonSetStatusFromJSON(json['status']),
    };
}

export function V1DaemonSetToJSON(value?: V1DaemonSet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1DaemonSetSpecToJSON(value['spec']),
        'status': V1DaemonSetStatusToJSON(value['status']),
    };
}

