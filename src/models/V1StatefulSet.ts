/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1StatefulSetSpec } from './V1StatefulSetSpec';
import {
    V1StatefulSetSpecFromJSON,
    V1StatefulSetSpecFromJSONTyped,
    V1StatefulSetSpecToJSON,
} from './V1StatefulSetSpec';
import type { V1StatefulSetStatus } from './V1StatefulSetStatus';
import {
    V1StatefulSetStatusFromJSON,
    V1StatefulSetStatusFromJSONTyped,
    V1StatefulSetStatusToJSON,
} from './V1StatefulSetStatus';

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @export
 * @interface V1StatefulSet
 */
export interface V1StatefulSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1StatefulSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1StatefulSet
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1StatefulSet
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1StatefulSetSpec}
     * @memberof V1StatefulSet
     */
    spec?: V1StatefulSetSpec;
    /**
     * 
     * @type {V1StatefulSetStatus}
     * @memberof V1StatefulSet
     */
    status?: V1StatefulSetStatus;
}

/**
 * Check if a given object implements the V1StatefulSet interface.
 */
export function instanceOfV1StatefulSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1StatefulSetFromJSON(json: any): V1StatefulSet {
    return V1StatefulSetFromJSONTyped(json, false);
}

export function V1StatefulSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatefulSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1StatefulSetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1StatefulSetStatusFromJSON(json['status']),
    };
}

export function V1StatefulSetToJSON(value?: V1StatefulSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1StatefulSetSpecToJSON(value.spec),
        'status': V1StatefulSetStatusToJSON(value.status),
    };
}

