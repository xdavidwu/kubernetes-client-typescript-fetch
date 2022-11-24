/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 * @export
 * @interface V2HPAScalingPolicy
 */
export interface V2HPAScalingPolicy {
    /**
     * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
     * @type {number}
     * @memberof V2HPAScalingPolicy
     */
    periodSeconds: number;
    /**
     * Type is used to specify the scaling policy.
     * @type {string}
     * @memberof V2HPAScalingPolicy
     */
    type: string;
    /**
     * Value contains the amount of change which is permitted by the policy. It must be greater than zero
     * @type {number}
     * @memberof V2HPAScalingPolicy
     */
    value: number;
}

/**
 * Check if a given object implements the V2HPAScalingPolicy interface.
 */
export function instanceOfV2HPAScalingPolicy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "periodSeconds" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function V2HPAScalingPolicyFromJSON(json: any): V2HPAScalingPolicy {
    return V2HPAScalingPolicyFromJSONTyped(json, false);
}

export function V2HPAScalingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HPAScalingPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'periodSeconds': json['periodSeconds'],
        'type': json['type'],
        'value': json['value'],
    };
}

export function V2HPAScalingPolicyToJSON(value?: V2HPAScalingPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'periodSeconds': value.periodSeconds,
        'type': value.type,
        'value': value.value,
    };
}

