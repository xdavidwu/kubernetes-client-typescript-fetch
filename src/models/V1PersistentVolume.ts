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
import type { V1PersistentVolumeSpec } from './V1PersistentVolumeSpec';
import {
    V1PersistentVolumeSpecFromJSON,
    V1PersistentVolumeSpecFromJSONTyped,
    V1PersistentVolumeSpecToJSON,
} from './V1PersistentVolumeSpec';
import type { V1PersistentVolumeStatus } from './V1PersistentVolumeStatus';
import {
    V1PersistentVolumeStatusFromJSON,
    V1PersistentVolumeStatusFromJSONTyped,
    V1PersistentVolumeStatusToJSON,
} from './V1PersistentVolumeStatus';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 * @export
 * @interface V1PersistentVolume
 */
export interface V1PersistentVolume {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PersistentVolume
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PersistentVolume
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1PersistentVolume
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1PersistentVolumeSpec}
     * @memberof V1PersistentVolume
     */
    spec?: V1PersistentVolumeSpec;
    /**
     * 
     * @type {V1PersistentVolumeStatus}
     * @memberof V1PersistentVolume
     */
    status?: V1PersistentVolumeStatus;
}

/**
 * Check if a given object implements the V1PersistentVolume interface.
 */
export function instanceOfV1PersistentVolume(value: object): value is V1PersistentVolume {
    return true;
}

export function V1PersistentVolumeFromJSON(json: any): V1PersistentVolume {
    return V1PersistentVolumeFromJSONTyped(json, false);
}

export function V1PersistentVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolume {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1PersistentVolumeSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1PersistentVolumeStatusFromJSON(json['status']),
    };
}

export function V1PersistentVolumeToJSON(value?: V1PersistentVolume | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1PersistentVolumeSpecToJSON(value['spec']),
        'status': V1PersistentVolumeStatusToJSON(value['status']),
    };
}

