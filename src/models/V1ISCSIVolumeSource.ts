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
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1ISCSIVolumeSource
 */
export interface V1ISCSIVolumeSource {
    /**
     * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthDiscovery?: boolean;
    /**
     * chapAuthSession defines whether support iSCSI Session CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthSession?: boolean;
    /**
     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    fsType?: string;
    /**
     * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    initiatorName?: string;
    /**
     * iqn is the target iSCSI Qualified Name.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iqn: string;
    /**
     * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iscsiInterface?: string;
    /**
     * lun represents iSCSI Target Lun number.
     * @type {number}
     * @memberof V1ISCSIVolumeSource
     */
    lun: number;
    /**
     * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {Array<string>}
     * @memberof V1ISCSIVolumeSource
     */
    portals?: Array<string>;
    /**
     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1ISCSIVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    targetPortal: string;
}

/**
 * Check if a given object implements the V1ISCSIVolumeSource interface.
 */
export function instanceOfV1ISCSIVolumeSource(value: object): value is V1ISCSIVolumeSource {
    if (!('iqn' in value) || value['iqn'] === undefined) return false;
    if (!('lun' in value) || value['lun'] === undefined) return false;
    if (!('targetPortal' in value) || value['targetPortal'] === undefined) return false;
    return true;
}

export function V1ISCSIVolumeSourceFromJSON(json: any): V1ISCSIVolumeSource {
    return V1ISCSIVolumeSourceFromJSONTyped(json, false);
}

export function V1ISCSIVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ISCSIVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'chapAuthDiscovery': json['chapAuthDiscovery'] == null ? undefined : json['chapAuthDiscovery'],
        'chapAuthSession': json['chapAuthSession'] == null ? undefined : json['chapAuthSession'],
        'fsType': json['fsType'] == null ? undefined : json['fsType'],
        'initiatorName': json['initiatorName'] == null ? undefined : json['initiatorName'],
        'iqn': json['iqn'],
        'iscsiInterface': json['iscsiInterface'] == null ? undefined : json['iscsiInterface'],
        'lun': json['lun'],
        'portals': json['portals'] == null ? undefined : json['portals'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
        'secretRef': json['secretRef'] == null ? undefined : V1LocalObjectReferenceFromJSON(json['secretRef']),
        'targetPortal': json['targetPortal'],
    };
}

export function V1ISCSIVolumeSourceToJSON(value?: V1ISCSIVolumeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chapAuthDiscovery': value['chapAuthDiscovery'],
        'chapAuthSession': value['chapAuthSession'],
        'fsType': value['fsType'],
        'initiatorName': value['initiatorName'],
        'iqn': value['iqn'],
        'iscsiInterface': value['iscsiInterface'],
        'lun': value['lun'],
        'portals': value['portals'],
        'readOnly': value['readOnly'],
        'secretRef': V1LocalObjectReferenceToJSON(value['secretRef']),
        'targetPortal': value['targetPortal'],
    };
}

