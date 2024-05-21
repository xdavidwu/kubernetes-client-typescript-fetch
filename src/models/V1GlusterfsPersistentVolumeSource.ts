/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
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
 * @interface V1GlusterfsPersistentVolumeSource
 */
export interface V1GlusterfsPersistentVolumeSource {
    /**
     * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof V1GlusterfsPersistentVolumeSource
     */
    endpoints: string;
    /**
     * endpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof V1GlusterfsPersistentVolumeSource
     */
    endpointsNamespace?: string;
    /**
     * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof V1GlusterfsPersistentVolumeSource
     */
    path: string;
    /**
     * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {boolean}
     * @memberof V1GlusterfsPersistentVolumeSource
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the V1GlusterfsPersistentVolumeSource interface.
 */
export function instanceOfV1GlusterfsPersistentVolumeSource(value: object): value is V1GlusterfsPersistentVolumeSource {
    if (!('endpoints' in value) || value['endpoints'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    return true;
}

export function V1GlusterfsPersistentVolumeSourceFromJSON(json: any): V1GlusterfsPersistentVolumeSource {
    return V1GlusterfsPersistentVolumeSourceFromJSONTyped(json, false);
}

export function V1GlusterfsPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GlusterfsPersistentVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'endpoints': json['endpoints'],
        'endpointsNamespace': json['endpointsNamespace'] == null ? undefined : json['endpointsNamespace'],
        'path': json['path'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
    };
}

export function V1GlusterfsPersistentVolumeSourceToJSON(value?: V1GlusterfsPersistentVolumeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'endpoints': value['endpoints'],
        'endpointsNamespace': value['endpointsNamespace'],
        'path': value['path'],
        'readOnly': value['readOnly'],
    };
}

