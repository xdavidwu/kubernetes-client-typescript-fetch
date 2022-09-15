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
/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1NFSVolumeSource
 */
export interface V1NFSVolumeSource {
    /**
     * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     * @type {string}
     * @memberof V1NFSVolumeSource
     */
    path: string;
    /**
     * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     * @type {boolean}
     * @memberof V1NFSVolumeSource
     */
    readOnly?: boolean;
    /**
     * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     * @type {string}
     * @memberof V1NFSVolumeSource
     */
    server: string;
}

export function V1NFSVolumeSourceFromJSON(json: any): V1NFSVolumeSource {
    return V1NFSVolumeSourceFromJSONTyped(json, false);
}

export function V1NFSVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NFSVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': json['path'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'server': json['server'],
    };
}

export function V1NFSVolumeSourceToJSON(value?: V1NFSVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
        'readOnly': value.readOnly,
        'server': value.server,
    };
}


