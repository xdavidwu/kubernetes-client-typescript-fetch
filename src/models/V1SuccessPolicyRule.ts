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
 * SuccessPolicyRule describes rule for declaring a Job as succeeded. Each rule must have at least one of the "succeededIndexes" or "succeededCount" specified.
 * @export
 * @interface V1SuccessPolicyRule
 */
export interface V1SuccessPolicyRule {
    /**
     * succeededCount specifies the minimal required size of the actual set of the succeeded indexes for the Job. When succeededCount is used along with succeededIndexes, the check is constrained only to the set of indexes specified by succeededIndexes. For example, given that succeededIndexes is "1-4", succeededCount is "3", and completed indexes are "1", "3", and "5", the Job isn't declared as succeeded because only "1" and "3" indexes are considered in that rules. When this field is null, this doesn't default to any value and is never evaluated at any time. When specified it needs to be a positive integer.
     * @type {number}
     * @memberof V1SuccessPolicyRule
     */
    succeededCount?: number;
    /**
     * succeededIndexes specifies the set of indexes which need to be contained in the actual set of the succeeded indexes for the Job. The list of indexes must be within 0 to ".spec.completions-1" and must not contain duplicates. At least one element is required. The indexes are represented as intervals separated by commas. The intervals can be a decimal integer or a pair of decimal integers separated by a hyphen. The number are listed in represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". When this field is null, this field doesn't default to any value and is never evaluated at any time.
     * @type {string}
     * @memberof V1SuccessPolicyRule
     */
    succeededIndexes?: string;
}

/**
 * Check if a given object implements the V1SuccessPolicyRule interface.
 */
export function instanceOfV1SuccessPolicyRule(value: object): value is V1SuccessPolicyRule {
    return true;
}

export function V1SuccessPolicyRuleFromJSON(json: any): V1SuccessPolicyRule {
    return V1SuccessPolicyRuleFromJSONTyped(json, false);
}

export function V1SuccessPolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SuccessPolicyRule {
    if (json == null) {
        return json;
    }
    return {
        
        'succeededCount': json['succeededCount'] == null ? undefined : json['succeededCount'],
        'succeededIndexes': json['succeededIndexes'] == null ? undefined : json['succeededIndexes'],
    };
}

export function V1SuccessPolicyRuleToJSON(value?: V1SuccessPolicyRule | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'succeededCount': value['succeededCount'],
        'succeededIndexes': value['succeededIndexes'],
    };
}

