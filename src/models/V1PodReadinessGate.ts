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
 * PodReadinessGate contains the reference to a pod condition
 * @export
 * @interface V1PodReadinessGate
 */
export interface V1PodReadinessGate {
    /**
     * ConditionType refers to a condition in the pod's condition list with matching type.
     * @type {string}
     * @memberof V1PodReadinessGate
     */
    conditionType: string;
}

/**
 * Check if a given object implements the V1PodReadinessGate interface.
 */
export function instanceOfV1PodReadinessGate(value: object): value is V1PodReadinessGate {
    if (!('conditionType' in value) || value['conditionType'] === undefined) return false;
    return true;
}

export function V1PodReadinessGateFromJSON(json: any): V1PodReadinessGate {
    return V1PodReadinessGateFromJSONTyped(json, false);
}

export function V1PodReadinessGateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodReadinessGate {
    if (json == null) {
        return json;
    }
    return {
        
        'conditionType': json['conditionType'],
    };
}

export function V1PodReadinessGateToJSON(value?: V1PodReadinessGate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'conditionType': value['conditionType'],
    };
}

