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
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 * @export
 * @interface V1ResourceFieldSelector
 */
export interface V1ResourceFieldSelector {
    /**
     * Container name: required for volumes, optional for env vars
     * @type {string}
     * @memberof V1ResourceFieldSelector
     */
    containerName?: string;
    /**
     * Specifies the output format of the exposed resources, defaults to "1"
     * @type {string}
     * @memberof V1ResourceFieldSelector
     */
    divisor?: string;
    /**
     * Required: resource to select
     * @type {string}
     * @memberof V1ResourceFieldSelector
     */
    resource: string;
}

/**
 * Check if a given object implements the V1ResourceFieldSelector interface.
 */
export function instanceOfV1ResourceFieldSelector(value: object): value is V1ResourceFieldSelector {
    if (!('resource' in value) || value['resource'] === undefined) return false;
    return true;
}

export function V1ResourceFieldSelectorFromJSON(json: any): V1ResourceFieldSelector {
    return V1ResourceFieldSelectorFromJSONTyped(json, false);
}

export function V1ResourceFieldSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceFieldSelector {
    if (json == null) {
        return json;
    }
    return {
        
        'containerName': json['containerName'] == null ? undefined : json['containerName'],
        'divisor': json['divisor'] == null ? undefined : json['divisor'],
        'resource': json['resource'],
    };
}

export function V1ResourceFieldSelectorToJSON(value?: V1ResourceFieldSelector | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'containerName': value['containerName'],
        'divisor': value['divisor'],
        'resource': value['resource'],
    };
}

