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
    V1SecretReference,
    V1SecretReferenceFromJSON,
    V1SecretReferenceFromJSONTyped,
    V1SecretReferenceToJSON,
} from './';

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1CephFSPersistentVolumeSource
 */
export interface V1CephFSPersistentVolumeSource {
    /**
     * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {Array<string>}
     * @memberof V1CephFSPersistentVolumeSource
     */
    monitors: Array<string>;
    /**
     * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
     * @type {string}
     * @memberof V1CephFSPersistentVolumeSource
     */
    path?: string;
    /**
     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {boolean}
     * @memberof V1CephFSPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof V1CephFSPersistentVolumeSource
     */
    secretFile?: string;
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1CephFSPersistentVolumeSource
     */
    secretRef?: V1SecretReference;
    /**
     * user is Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof V1CephFSPersistentVolumeSource
     */
    user?: string;
}

export function V1CephFSPersistentVolumeSourceFromJSON(json: any): V1CephFSPersistentVolumeSource {
    return V1CephFSPersistentVolumeSourceFromJSONTyped(json, false);
}

export function V1CephFSPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CephFSPersistentVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'monitors': json['monitors'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretFile': !exists(json, 'secretFile') ? undefined : json['secretFile'],
        'secretRef': !exists(json, 'secretRef') ? undefined : V1SecretReferenceFromJSON(json['secretRef']),
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function V1CephFSPersistentVolumeSourceToJSON(value?: V1CephFSPersistentVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'monitors': value.monitors,
        'path': value.path,
        'readOnly': value.readOnly,
        'secretFile': value.secretFile,
        'secretRef': V1SecretReferenceToJSON(value.secretRef),
        'user': value.user,
    };
}


