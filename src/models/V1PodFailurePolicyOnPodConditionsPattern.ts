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
 * PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
 * @export
 * @interface V1PodFailurePolicyOnPodConditionsPattern
 */
export interface V1PodFailurePolicyOnPodConditionsPattern {
    /**
     * Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
     * @type {string}
     * @memberof V1PodFailurePolicyOnPodConditionsPattern
     */
    status: string;
    /**
     * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
     * @type {string}
     * @memberof V1PodFailurePolicyOnPodConditionsPattern
     */
    type: string;
}

/**
 * Check if a given object implements the V1PodFailurePolicyOnPodConditionsPattern interface.
 */
export function instanceOfV1PodFailurePolicyOnPodConditionsPattern(value: object): value is V1PodFailurePolicyOnPodConditionsPattern {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1PodFailurePolicyOnPodConditionsPatternFromJSON(json: any): V1PodFailurePolicyOnPodConditionsPattern {
    return V1PodFailurePolicyOnPodConditionsPatternFromJSONTyped(json, false);
}

export function V1PodFailurePolicyOnPodConditionsPatternFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodFailurePolicyOnPodConditionsPattern {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1PodFailurePolicyOnPodConditionsPatternToJSON(value?: V1PodFailurePolicyOnPodConditionsPattern | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'type': value['type'],
    };
}

