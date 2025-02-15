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
/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1FCVolumeSource
 */
export interface V1FCVolumeSource {
    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     * @type {string}
     * @memberof V1FCVolumeSource
     */
    fsType?: string;
    /**
     * lun is Optional: FC target lun number
     * @type {number}
     * @memberof V1FCVolumeSource
     */
    lun?: number;
    /**
     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof V1FCVolumeSource
     */
    readOnly?: boolean;
    /**
     * targetWWNs is Optional: FC target worldwide names (WWNs)
     * @type {Array<string>}
     * @memberof V1FCVolumeSource
     */
    targetWWNs?: Array<string>;
    /**
     * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
     * @type {Array<string>}
     * @memberof V1FCVolumeSource
     */
    wwids?: Array<string>;
}

/**
 * Check if a given object implements the V1FCVolumeSource interface.
 */
export function instanceOfV1FCVolumeSource(value: object): value is V1FCVolumeSource {
    return true;
}

export function V1FCVolumeSourceFromJSON(json: any): V1FCVolumeSource {
    return V1FCVolumeSourceFromJSONTyped(json, false);
}

export function V1FCVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FCVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'fsType': json['fsType'] == null ? undefined : json['fsType'],
        'lun': json['lun'] == null ? undefined : json['lun'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
        'targetWWNs': json['targetWWNs'] == null ? undefined : json['targetWWNs'],
        'wwids': json['wwids'] == null ? undefined : json['wwids'],
    };
}

export function V1FCVolumeSourceToJSON(value?: V1FCVolumeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fsType': value['fsType'],
        'lun': value['lun'],
        'readOnly': value['readOnly'],
        'targetWWNs': value['targetWWNs'],
        'wwids': value['wwids'],
    };
}

