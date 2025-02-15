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
 * AttachedVolume describes a volume attached to a node
 * @export
 * @interface V1AttachedVolume
 */
export interface V1AttachedVolume {
    /**
     * DevicePath represents the device path where the volume should be available
     * @type {string}
     * @memberof V1AttachedVolume
     */
    devicePath: string;
    /**
     * Name of the attached volume
     * @type {string}
     * @memberof V1AttachedVolume
     */
    name: string;
}

/**
 * Check if a given object implements the V1AttachedVolume interface.
 */
export function instanceOfV1AttachedVolume(value: object): value is V1AttachedVolume {
    if (!('devicePath' in value) || value['devicePath'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1AttachedVolumeFromJSON(json: any): V1AttachedVolume {
    return V1AttachedVolumeFromJSONTyped(json, false);
}

export function V1AttachedVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AttachedVolume {
    if (json == null) {
        return json;
    }
    return {
        
        'devicePath': json['devicePath'],
        'name': json['name'],
    };
}

export function V1AttachedVolumeToJSON(value?: V1AttachedVolume | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'devicePath': value['devicePath'],
        'name': value['name'],
    };
}

