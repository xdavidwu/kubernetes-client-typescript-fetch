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
import type { V1LocalObjectReference } from './V1LocalObjectReference';
import {
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
} from './V1LocalObjectReference';

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1CinderVolumeSource
 */
export interface V1CinderVolumeSource {
    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof V1CinderVolumeSource
     */
    fsType?: string;
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {boolean}
     * @memberof V1CinderVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1CinderVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof V1CinderVolumeSource
     */
    volumeID: string;
}

/**
 * Check if a given object implements the V1CinderVolumeSource interface.
 */
export function instanceOfV1CinderVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "volumeID" in value;

    return isInstance;
}

export function V1CinderVolumeSourceFromJSON(json: any): V1CinderVolumeSource {
    return V1CinderVolumeSourceFromJSONTyped(json, false);
}

export function V1CinderVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CinderVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : V1LocalObjectReferenceFromJSON(json['secretRef']),
        'volumeID': json['volumeID'],
    };
}

export function V1CinderVolumeSourceToJSON(value?: V1CinderVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': V1LocalObjectReferenceToJSON(value.secretRef),
        'volumeID': value.volumeID,
    };
}

