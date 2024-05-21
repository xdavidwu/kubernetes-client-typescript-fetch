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
import type { V1beta1TypeChecking } from './V1beta1TypeChecking';
import {
    V1beta1TypeCheckingFromJSON,
    V1beta1TypeCheckingFromJSONTyped,
    V1beta1TypeCheckingToJSON,
} from './V1beta1TypeChecking';
import type { V1Condition } from './V1Condition';
import {
    V1ConditionFromJSON,
    V1ConditionFromJSONTyped,
    V1ConditionToJSON,
} from './V1Condition';

/**
 * ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
 * @export
 * @interface V1beta1ValidatingAdmissionPolicyStatus
 */
export interface V1beta1ValidatingAdmissionPolicyStatus {
    /**
     * The conditions represent the latest available observations of a policy's current state.
     * @type {Array<V1Condition>}
     * @memberof V1beta1ValidatingAdmissionPolicyStatus
     */
    conditions?: Array<V1Condition>;
    /**
     * The generation observed by the controller.
     * @type {number}
     * @memberof V1beta1ValidatingAdmissionPolicyStatus
     */
    observedGeneration?: number;
    /**
     * 
     * @type {V1beta1TypeChecking}
     * @memberof V1beta1ValidatingAdmissionPolicyStatus
     */
    typeChecking?: V1beta1TypeChecking;
}

/**
 * Check if a given object implements the V1beta1ValidatingAdmissionPolicyStatus interface.
 */
export function instanceOfV1beta1ValidatingAdmissionPolicyStatus(value: object): value is V1beta1ValidatingAdmissionPolicyStatus {
    return true;
}

export function V1beta1ValidatingAdmissionPolicyStatusFromJSON(json: any): V1beta1ValidatingAdmissionPolicyStatus {
    return V1beta1ValidatingAdmissionPolicyStatusFromJSONTyped(json, false);
}

export function V1beta1ValidatingAdmissionPolicyStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ValidatingAdmissionPolicyStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1ConditionFromJSON)),
        'observedGeneration': json['observedGeneration'] == null ? undefined : json['observedGeneration'],
        'typeChecking': json['typeChecking'] == null ? undefined : V1beta1TypeCheckingFromJSON(json['typeChecking']),
    };
}

export function V1beta1ValidatingAdmissionPolicyStatusToJSON(value?: V1beta1ValidatingAdmissionPolicyStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1ConditionToJSON)),
        'observedGeneration': value['observedGeneration'],
        'typeChecking': V1beta1TypeCheckingToJSON(value['typeChecking']),
    };
}

