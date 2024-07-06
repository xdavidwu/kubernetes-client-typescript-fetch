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
import type { V2HPAScalingRules } from './V2HPAScalingRules';
import {
    V2HPAScalingRulesFromJSON,
    V2HPAScalingRulesFromJSONTyped,
    V2HPAScalingRulesToJSON,
} from './V2HPAScalingRules';

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 * @export
 * @interface V2HorizontalPodAutoscalerBehavior
 */
export interface V2HorizontalPodAutoscalerBehavior {
    /**
     * 
     * @type {V2HPAScalingRules}
     * @memberof V2HorizontalPodAutoscalerBehavior
     */
    scaleDown?: V2HPAScalingRules;
    /**
     * 
     * @type {V2HPAScalingRules}
     * @memberof V2HorizontalPodAutoscalerBehavior
     */
    scaleUp?: V2HPAScalingRules;
}

/**
 * Check if a given object implements the V2HorizontalPodAutoscalerBehavior interface.
 */
export function instanceOfV2HorizontalPodAutoscalerBehavior(value: object): value is V2HorizontalPodAutoscalerBehavior {
    return true;
}

export function V2HorizontalPodAutoscalerBehaviorFromJSON(json: any): V2HorizontalPodAutoscalerBehavior {
    return V2HorizontalPodAutoscalerBehaviorFromJSONTyped(json, false);
}

export function V2HorizontalPodAutoscalerBehaviorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HorizontalPodAutoscalerBehavior {
    if (json == null) {
        return json;
    }
    return {
        
        'scaleDown': json['scaleDown'] == null ? undefined : V2HPAScalingRulesFromJSON(json['scaleDown']),
        'scaleUp': json['scaleUp'] == null ? undefined : V2HPAScalingRulesFromJSON(json['scaleUp']),
    };
}

export function V2HorizontalPodAutoscalerBehaviorToJSON(value?: V2HorizontalPodAutoscalerBehavior | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'scaleDown': V2HPAScalingRulesToJSON(value['scaleDown']),
        'scaleUp': V2HPAScalingRulesToJSON(value['scaleUp']),
    };
}

