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
 * VolumeMount describes a mounting of a Volume within a container.
 * @export
 * @interface V1VolumeMount
 */
export interface V1VolumeMount {
    /**
     * Path within the container at which the volume should be mounted.  Must not contain ':'.
     * @type {string}
     * @memberof V1VolumeMount
     */
    mountPath: string;
    /**
     * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
     * @type {string}
     * @memberof V1VolumeMount
     */
    mountPropagation?: string;
    /**
     * This must match the Name of a Volume.
     * @type {string}
     * @memberof V1VolumeMount
     */
    name: string;
    /**
     * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
     * @type {boolean}
     * @memberof V1VolumeMount
     */
    readOnly?: boolean;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     * @type {string}
     * @memberof V1VolumeMount
     */
    subPath?: string;
    /**
     * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
     * @type {string}
     * @memberof V1VolumeMount
     */
    subPathExpr?: string;
}

/**
 * Check if a given object implements the V1VolumeMount interface.
 */
export function instanceOfV1VolumeMount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mountPath" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1VolumeMountFromJSON(json: any): V1VolumeMount {
    return V1VolumeMountFromJSONTyped(json, false);
}

export function V1VolumeMountFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeMount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mountPath': json['mountPath'],
        'mountPropagation': !exists(json, 'mountPropagation') ? undefined : json['mountPropagation'],
        'name': json['name'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'subPath': !exists(json, 'subPath') ? undefined : json['subPath'],
        'subPathExpr': !exists(json, 'subPathExpr') ? undefined : json['subPathExpr'],
    };
}

export function V1VolumeMountToJSON(value?: V1VolumeMount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mountPath': value.mountPath,
        'mountPropagation': value.mountPropagation,
        'name': value.name,
        'readOnly': value.readOnly,
        'subPath': value.subPath,
        'subPathExpr': value.subPathExpr,
    };
}

