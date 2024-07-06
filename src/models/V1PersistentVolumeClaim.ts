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
import type { V1PersistentVolumeClaimSpec } from './V1PersistentVolumeClaimSpec';
import {
    V1PersistentVolumeClaimSpecFromJSON,
    V1PersistentVolumeClaimSpecFromJSONTyped,
    V1PersistentVolumeClaimSpecToJSON,
} from './V1PersistentVolumeClaimSpec';
import type { V1PersistentVolumeClaimStatus } from './V1PersistentVolumeClaimStatus';
import {
    V1PersistentVolumeClaimStatusFromJSON,
    V1PersistentVolumeClaimStatusFromJSONTyped,
    V1PersistentVolumeClaimStatusToJSON,
} from './V1PersistentVolumeClaimStatus';

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 * @export
 * @interface V1PersistentVolumeClaim
 */
export interface V1PersistentVolumeClaim {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PersistentVolumeClaim
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PersistentVolumeClaim
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1PersistentVolumeClaim
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1PersistentVolumeClaimSpec}
     * @memberof V1PersistentVolumeClaim
     */
    spec?: V1PersistentVolumeClaimSpec;
    /**
     * 
     * @type {V1PersistentVolumeClaimStatus}
     * @memberof V1PersistentVolumeClaim
     */
    status?: V1PersistentVolumeClaimStatus;
}

/**
 * Check if a given object implements the V1PersistentVolumeClaim interface.
 */
export function instanceOfV1PersistentVolumeClaim(value: object): value is V1PersistentVolumeClaim {
    return true;
}

export function V1PersistentVolumeClaimFromJSON(json: any): V1PersistentVolumeClaim {
    return V1PersistentVolumeClaimFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaim {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1PersistentVolumeClaimSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1PersistentVolumeClaimStatusFromJSON(json['status']),
    };
}

export function V1PersistentVolumeClaimToJSON(value?: V1PersistentVolumeClaim | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1PersistentVolumeClaimSpecToJSON(value['spec']),
        'status': V1PersistentVolumeClaimStatusToJSON(value['status']),
    };
}

