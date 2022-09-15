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
    V1LocalObjectReference,
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
} from './';

/**
 * Represents a source location of a volume to mount, managed by an external CSI driver
 * @export
 * @interface V1CSIVolumeSource
 */
export interface V1CSIVolumeSource {
    /**
     * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
     * @type {string}
     * @memberof V1CSIVolumeSource
     */
    driver: string;
    /**
     * fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
     * @type {string}
     * @memberof V1CSIVolumeSource
     */
    fsType?: string;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1CSIVolumeSource
     */
    nodePublishSecretRef?: V1LocalObjectReference;
    /**
     * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
     * @type {boolean}
     * @memberof V1CSIVolumeSource
     */
    readOnly?: boolean;
    /**
     * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
     * @type {{ [key: string]: string; }}
     * @memberof V1CSIVolumeSource
     */
    volumeAttributes?: { [key: string]: string; };
}

export function V1CSIVolumeSourceFromJSON(json: any): V1CSIVolumeSource {
    return V1CSIVolumeSourceFromJSONTyped(json, false);
}

export function V1CSIVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CSIVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'driver': json['driver'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'nodePublishSecretRef': !exists(json, 'nodePublishSecretRef') ? undefined : V1LocalObjectReferenceFromJSON(json['nodePublishSecretRef']),
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'volumeAttributes': !exists(json, 'volumeAttributes') ? undefined : json['volumeAttributes'],
    };
}

export function V1CSIVolumeSourceToJSON(value?: V1CSIVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'driver': value.driver,
        'fsType': value.fsType,
        'nodePublishSecretRef': V1LocalObjectReferenceToJSON(value.nodePublishSecretRef),
        'readOnly': value.readOnly,
        'volumeAttributes': value.volumeAttributes,
    };
}


