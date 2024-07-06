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
import type { V1ResourceRule } from './V1ResourceRule';
import {
    V1ResourceRuleFromJSON,
    V1ResourceRuleFromJSONTyped,
    V1ResourceRuleToJSON,
} from './V1ResourceRule';
import type { V1NonResourceRule } from './V1NonResourceRule';
import {
    V1NonResourceRuleFromJSON,
    V1NonResourceRuleFromJSONTyped,
    V1NonResourceRuleToJSON,
} from './V1NonResourceRule';

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 * @export
 * @interface V1SubjectRulesReviewStatus
 */
export interface V1SubjectRulesReviewStatus {
    /**
     * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
     * @type {string}
     * @memberof V1SubjectRulesReviewStatus
     */
    evaluationError?: string;
    /**
     * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
     * @type {boolean}
     * @memberof V1SubjectRulesReviewStatus
     */
    incomplete: boolean;
    /**
     * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
     * @type {Array<V1NonResourceRule>}
     * @memberof V1SubjectRulesReviewStatus
     */
    nonResourceRules: Array<V1NonResourceRule>;
    /**
     * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
     * @type {Array<V1ResourceRule>}
     * @memberof V1SubjectRulesReviewStatus
     */
    resourceRules: Array<V1ResourceRule>;
}

/**
 * Check if a given object implements the V1SubjectRulesReviewStatus interface.
 */
export function instanceOfV1SubjectRulesReviewStatus(value: object): value is V1SubjectRulesReviewStatus {
    if (!('incomplete' in value) || value['incomplete'] === undefined) return false;
    if (!('nonResourceRules' in value) || value['nonResourceRules'] === undefined) return false;
    if (!('resourceRules' in value) || value['resourceRules'] === undefined) return false;
    return true;
}

export function V1SubjectRulesReviewStatusFromJSON(json: any): V1SubjectRulesReviewStatus {
    return V1SubjectRulesReviewStatusFromJSONTyped(json, false);
}

export function V1SubjectRulesReviewStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SubjectRulesReviewStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'evaluationError': json['evaluationError'] == null ? undefined : json['evaluationError'],
        'incomplete': json['incomplete'],
        'nonResourceRules': ((json['nonResourceRules'] as Array<any>).map(V1NonResourceRuleFromJSON)),
        'resourceRules': ((json['resourceRules'] as Array<any>).map(V1ResourceRuleFromJSON)),
    };
}

export function V1SubjectRulesReviewStatusToJSON(value?: V1SubjectRulesReviewStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'evaluationError': value['evaluationError'],
        'incomplete': value['incomplete'],
        'nonResourceRules': ((value['nonResourceRules'] as Array<any>).map(V1NonResourceRuleToJSON)),
        'resourceRules': ((value['resourceRules'] as Array<any>).map(V1ResourceRuleToJSON)),
    };
}

