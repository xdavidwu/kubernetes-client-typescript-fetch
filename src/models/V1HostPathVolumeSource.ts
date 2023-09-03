/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1HostPathVolumeSource
 */
export interface V1HostPathVolumeSource {
    /**
     * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     * @type {string}
     * @memberof V1HostPathVolumeSource
     */
    path: string;
    /**
     * type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     * @type {string}
     * @memberof V1HostPathVolumeSource
     */
    type?: string;
}

/**
 * Check if a given object implements the V1HostPathVolumeSource interface.
 */
export function instanceOfV1HostPathVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function V1HostPathVolumeSourceFromJSON(json: any): V1HostPathVolumeSource {
    return V1HostPathVolumeSourceFromJSONTyped(json, false);
}

export function V1HostPathVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostPathVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': json['path'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function V1HostPathVolumeSourceToJSON(value?: V1HostPathVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
        'type': value.type,
    };
}

