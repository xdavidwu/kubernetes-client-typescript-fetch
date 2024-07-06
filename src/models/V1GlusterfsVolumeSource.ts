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
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1GlusterfsVolumeSource
 */
export interface V1GlusterfsVolumeSource {
    /**
     * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof V1GlusterfsVolumeSource
     */
    endpoints: string;
    /**
     * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof V1GlusterfsVolumeSource
     */
    path: string;
    /**
     * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {boolean}
     * @memberof V1GlusterfsVolumeSource
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the V1GlusterfsVolumeSource interface.
 */
export function instanceOfV1GlusterfsVolumeSource(value: object): value is V1GlusterfsVolumeSource {
    if (!('endpoints' in value) || value['endpoints'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    return true;
}

export function V1GlusterfsVolumeSourceFromJSON(json: any): V1GlusterfsVolumeSource {
    return V1GlusterfsVolumeSourceFromJSONTyped(json, false);
}

export function V1GlusterfsVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GlusterfsVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'endpoints': json['endpoints'],
        'path': json['path'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
    };
}

export function V1GlusterfsVolumeSourceToJSON(value?: V1GlusterfsVolumeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'endpoints': value['endpoints'],
        'path': value['path'],
        'readOnly': value['readOnly'],
    };
}

