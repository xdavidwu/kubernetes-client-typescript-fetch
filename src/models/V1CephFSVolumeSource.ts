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
import type { V1LocalObjectReference } from './V1LocalObjectReference';
import {
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
} from './V1LocalObjectReference';

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1CephFSVolumeSource
 */
export interface V1CephFSVolumeSource {
    /**
     * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {Array<string>}
     * @memberof V1CephFSVolumeSource
     */
    monitors: Array<string>;
    /**
     * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
     * @type {string}
     * @memberof V1CephFSVolumeSource
     */
    path?: string;
    /**
     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {boolean}
     * @memberof V1CephFSVolumeSource
     */
    readOnly?: boolean;
    /**
     * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof V1CephFSVolumeSource
     */
    secretFile?: string;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1CephFSVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof V1CephFSVolumeSource
     */
    user?: string;
}

/**
 * Check if a given object implements the V1CephFSVolumeSource interface.
 */
export function instanceOfV1CephFSVolumeSource(value: object): value is V1CephFSVolumeSource {
    if (!('monitors' in value) || value['monitors'] === undefined) return false;
    return true;
}

export function V1CephFSVolumeSourceFromJSON(json: any): V1CephFSVolumeSource {
    return V1CephFSVolumeSourceFromJSONTyped(json, false);
}

export function V1CephFSVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CephFSVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'monitors': json['monitors'],
        'path': json['path'] == null ? undefined : json['path'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
        'secretFile': json['secretFile'] == null ? undefined : json['secretFile'],
        'secretRef': json['secretRef'] == null ? undefined : V1LocalObjectReferenceFromJSON(json['secretRef']),
        'user': json['user'] == null ? undefined : json['user'],
    };
}

export function V1CephFSVolumeSourceToJSON(value?: V1CephFSVolumeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'monitors': value['monitors'],
        'path': value['path'],
        'readOnly': value['readOnly'],
        'secretFile': value['secretFile'],
        'secretRef': V1LocalObjectReferenceToJSON(value['secretRef']),
        'user': value['user'],
    };
}

