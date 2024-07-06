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
import type { V1ParamKind } from './V1ParamKind';
import {
    V1ParamKindFromJSON,
    V1ParamKindFromJSONTyped,
    V1ParamKindToJSON,
} from './V1ParamKind';
import type { V1AuditAnnotation } from './V1AuditAnnotation';
import {
    V1AuditAnnotationFromJSON,
    V1AuditAnnotationFromJSONTyped,
    V1AuditAnnotationToJSON,
} from './V1AuditAnnotation';
import type { V1Variable } from './V1Variable';
import {
    V1VariableFromJSON,
    V1VariableFromJSONTyped,
    V1VariableToJSON,
} from './V1Variable';
import type { V1MatchResources } from './V1MatchResources';
import {
    V1MatchResourcesFromJSON,
    V1MatchResourcesFromJSONTyped,
    V1MatchResourcesToJSON,
} from './V1MatchResources';
import type { V1Validation } from './V1Validation';
import {
    V1ValidationFromJSON,
    V1ValidationFromJSONTyped,
    V1ValidationToJSON,
} from './V1Validation';
import type { V1MatchCondition } from './V1MatchCondition';
import {
    V1MatchConditionFromJSON,
    V1MatchConditionFromJSONTyped,
    V1MatchConditionToJSON,
} from './V1MatchCondition';

/**
 * ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
 * @export
 * @interface V1ValidatingAdmissionPolicySpec
 */
export interface V1ValidatingAdmissionPolicySpec {
    /**
     * auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
     * @type {Array<V1AuditAnnotation>}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    auditAnnotations?: Array<V1AuditAnnotation>;
    /**
     * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.
     * 
     * A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.
     * 
     * failurePolicy does not define how validations that evaluate to false are handled.
     * 
     * When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.
     * 
     * Allowed values are Ignore or Fail. Defaults to Fail.
     * @type {string}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    failurePolicy?: string;
    /**
     * MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.
     * 
     * If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.
     * 
     * The exact matching logic is (in order):
     *   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.
     *   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.
     *   3. If any matchCondition evaluates to an error (but none are FALSE):
     *      - If failurePolicy=Fail, reject the request
     *      - If failurePolicy=Ignore, the policy is skipped
     * @type {Array<V1MatchCondition>}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    matchConditions?: Array<V1MatchCondition>;
    /**
     * 
     * @type {V1MatchResources}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    matchConstraints?: V1MatchResources;
    /**
     * 
     * @type {V1ParamKind}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    paramKind?: V1ParamKind;
    /**
     * Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
     * @type {Array<V1Validation>}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    validations?: Array<V1Validation>;
    /**
     * Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.
     * 
     * The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
     * @type {Array<V1Variable>}
     * @memberof V1ValidatingAdmissionPolicySpec
     */
    variables?: Array<V1Variable>;
}

/**
 * Check if a given object implements the V1ValidatingAdmissionPolicySpec interface.
 */
export function instanceOfV1ValidatingAdmissionPolicySpec(value: object): value is V1ValidatingAdmissionPolicySpec {
    return true;
}

export function V1ValidatingAdmissionPolicySpecFromJSON(json: any): V1ValidatingAdmissionPolicySpec {
    return V1ValidatingAdmissionPolicySpecFromJSONTyped(json, false);
}

export function V1ValidatingAdmissionPolicySpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ValidatingAdmissionPolicySpec {
    if (json == null) {
        return json;
    }
    return {
        
        'auditAnnotations': json['auditAnnotations'] == null ? undefined : ((json['auditAnnotations'] as Array<any>).map(V1AuditAnnotationFromJSON)),
        'failurePolicy': json['failurePolicy'] == null ? undefined : json['failurePolicy'],
        'matchConditions': json['matchConditions'] == null ? undefined : ((json['matchConditions'] as Array<any>).map(V1MatchConditionFromJSON)),
        'matchConstraints': json['matchConstraints'] == null ? undefined : V1MatchResourcesFromJSON(json['matchConstraints']),
        'paramKind': json['paramKind'] == null ? undefined : V1ParamKindFromJSON(json['paramKind']),
        'validations': json['validations'] == null ? undefined : ((json['validations'] as Array<any>).map(V1ValidationFromJSON)),
        'variables': json['variables'] == null ? undefined : ((json['variables'] as Array<any>).map(V1VariableFromJSON)),
    };
}

export function V1ValidatingAdmissionPolicySpecToJSON(value?: V1ValidatingAdmissionPolicySpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'auditAnnotations': value['auditAnnotations'] == null ? undefined : ((value['auditAnnotations'] as Array<any>).map(V1AuditAnnotationToJSON)),
        'failurePolicy': value['failurePolicy'],
        'matchConditions': value['matchConditions'] == null ? undefined : ((value['matchConditions'] as Array<any>).map(V1MatchConditionToJSON)),
        'matchConstraints': V1MatchResourcesToJSON(value['matchConstraints']),
        'paramKind': V1ParamKindToJSON(value['paramKind']),
        'validations': value['validations'] == null ? undefined : ((value['validations'] as Array<any>).map(V1ValidationToJSON)),
        'variables': value['variables'] == null ? undefined : ((value['variables'] as Array<any>).map(V1VariableToJSON)),
    };
}

