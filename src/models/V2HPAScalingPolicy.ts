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
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 * @export
 * @interface V2HPAScalingPolicy
 */
export interface V2HPAScalingPolicy {
    /**
     * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
     * @type {number}
     * @memberof V2HPAScalingPolicy
     */
    periodSeconds: number;
    /**
     * type is used to specify the scaling policy.
     * @type {string}
     * @memberof V2HPAScalingPolicy
     */
    type: string;
    /**
     * value contains the amount of change which is permitted by the policy. It must be greater than zero
     * @type {number}
     * @memberof V2HPAScalingPolicy
     */
    value: number;
}

/**
 * Check if a given object implements the V2HPAScalingPolicy interface.
 */
export function instanceOfV2HPAScalingPolicy(value: object): value is V2HPAScalingPolicy {
    if (!('periodSeconds' in value) || value['periodSeconds'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function V2HPAScalingPolicyFromJSON(json: any): V2HPAScalingPolicy {
    return V2HPAScalingPolicyFromJSONTyped(json, false);
}

export function V2HPAScalingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HPAScalingPolicy {
    if (json == null) {
        return json;
    }
    return {
        
        'periodSeconds': json['periodSeconds'],
        'type': json['type'],
        'value': json['value'],
    };
}

export function V2HPAScalingPolicyToJSON(value?: V2HPAScalingPolicy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'periodSeconds': value['periodSeconds'],
        'type': value['type'],
        'value': value['value'],
    };
}

