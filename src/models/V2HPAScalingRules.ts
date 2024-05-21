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
import type { V2HPAScalingPolicy } from './V2HPAScalingPolicy';
import {
    V2HPAScalingPolicyFromJSON,
    V2HPAScalingPolicyFromJSONTyped,
    V2HPAScalingPolicyToJSON,
} from './V2HPAScalingPolicy';

/**
 * HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
 * @export
 * @interface V2HPAScalingRules
 */
export interface V2HPAScalingRules {
    /**
     * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
     * @type {Array<V2HPAScalingPolicy>}
     * @memberof V2HPAScalingRules
     */
    policies?: Array<V2HPAScalingPolicy>;
    /**
     * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
     * @type {string}
     * @memberof V2HPAScalingRules
     */
    selectPolicy?: string;
    /**
     * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
     * @type {number}
     * @memberof V2HPAScalingRules
     */
    stabilizationWindowSeconds?: number;
}

/**
 * Check if a given object implements the V2HPAScalingRules interface.
 */
export function instanceOfV2HPAScalingRules(value: object): value is V2HPAScalingRules {
    return true;
}

export function V2HPAScalingRulesFromJSON(json: any): V2HPAScalingRules {
    return V2HPAScalingRulesFromJSONTyped(json, false);
}

export function V2HPAScalingRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HPAScalingRules {
    if (json == null) {
        return json;
    }
    return {
        
        'policies': json['policies'] == null ? undefined : ((json['policies'] as Array<any>).map(V2HPAScalingPolicyFromJSON)),
        'selectPolicy': json['selectPolicy'] == null ? undefined : json['selectPolicy'],
        'stabilizationWindowSeconds': json['stabilizationWindowSeconds'] == null ? undefined : json['stabilizationWindowSeconds'],
    };
}

export function V2HPAScalingRulesToJSON(value?: V2HPAScalingRules | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'policies': value['policies'] == null ? undefined : ((value['policies'] as Array<any>).map(V2HPAScalingPolicyToJSON)),
        'selectPolicy': value['selectPolicy'],
        'stabilizationWindowSeconds': value['stabilizationWindowSeconds'],
    };
}

