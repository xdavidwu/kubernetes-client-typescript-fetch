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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1PersistentVolumeSpec,
    V1PersistentVolumeSpecFromJSON,
    V1PersistentVolumeSpecFromJSONTyped,
    V1PersistentVolumeSpecToJSON,
    V1PersistentVolumeStatus,
    V1PersistentVolumeStatusFromJSON,
    V1PersistentVolumeStatusFromJSONTyped,
    V1PersistentVolumeStatusToJSON,
} from './';

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

export function V1PersistentVolumeFromJSON(json: any): V1PersistentVolume {
    return V1PersistentVolumeFromJSONTyped(json, false);
}

export function V1PersistentVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1PersistentVolumeSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1PersistentVolumeStatusFromJSON(json['status']),
    };
}

export function V1PersistentVolumeToJSON(value?: V1PersistentVolume | null): any {
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
        'spec': V1PersistentVolumeSpecToJSON(value.spec),
        'status': V1PersistentVolumeStatusToJSON(value.status),
    };
}


