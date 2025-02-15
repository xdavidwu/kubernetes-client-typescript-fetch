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
 * VolumeNodeResources is a set of resource limits for scheduling of volumes.
 * @export
 * @interface V1VolumeNodeResources
 */
export interface V1VolumeNodeResources {
    /**
     * count indicates the maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.
     * @type {number}
     * @memberof V1VolumeNodeResources
     */
    count?: number;
}

/**
 * Check if a given object implements the V1VolumeNodeResources interface.
 */
export function instanceOfV1VolumeNodeResources(value: object): value is V1VolumeNodeResources {
    return true;
}

export function V1VolumeNodeResourcesFromJSON(json: any): V1VolumeNodeResources {
    return V1VolumeNodeResourcesFromJSONTyped(json, false);
}

export function V1VolumeNodeResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeNodeResources {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
    };
}

export function V1VolumeNodeResourcesToJSON(value?: V1VolumeNodeResources | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
    };
}

