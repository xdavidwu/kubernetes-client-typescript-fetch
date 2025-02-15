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
import type { V1ParamRef } from './V1ParamRef';
import {
    V1ParamRefFromJSON,
    V1ParamRefFromJSONTyped,
    V1ParamRefToJSON,
} from './V1ParamRef';
import type { V1MatchResources } from './V1MatchResources';
import {
    V1MatchResourcesFromJSON,
    V1MatchResourcesFromJSONTyped,
    V1MatchResourcesToJSON,
} from './V1MatchResources';

/**
 * ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.
 * @export
 * @interface V1ValidatingAdmissionPolicyBindingSpec
 */
export interface V1ValidatingAdmissionPolicyBindingSpec {
    /**
     * 
     * @type {V1MatchResources}
     * @memberof V1ValidatingAdmissionPolicyBindingSpec
     */
    matchResources?: V1MatchResources;
    /**
     * 
     * @type {V1ParamRef}
     * @memberof V1ValidatingAdmissionPolicyBindingSpec
     */
    paramRef?: V1ParamRef;
    /**
     * PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
     * @type {string}
     * @memberof V1ValidatingAdmissionPolicyBindingSpec
     */
    policyName?: string;
    /**
     * validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.
     * 
     * Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.
     * 
     * validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.
     * 
     * The supported actions values are:
     * 
     * "Deny" specifies that a validation failure results in a denied request.
     * 
     * "Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.
     * 
     * "Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{"message": "Invalid value", {"policy": "policy.example.com", {"binding": "policybinding.example.com", {"expressionIndex": "1", {"validationActions": ["Audit"]}]"`
     * 
     * Clients should expect to handle additional values by ignoring any values not recognized.
     * 
     * "Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.
     * 
     * Required.
     * @type {Array<string>}
     * @memberof V1ValidatingAdmissionPolicyBindingSpec
     */
    validationActions?: Array<string>;
}

/**
 * Check if a given object implements the V1ValidatingAdmissionPolicyBindingSpec interface.
 */
export function instanceOfV1ValidatingAdmissionPolicyBindingSpec(value: object): value is V1ValidatingAdmissionPolicyBindingSpec {
    return true;
}

export function V1ValidatingAdmissionPolicyBindingSpecFromJSON(json: any): V1ValidatingAdmissionPolicyBindingSpec {
    return V1ValidatingAdmissionPolicyBindingSpecFromJSONTyped(json, false);
}

export function V1ValidatingAdmissionPolicyBindingSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ValidatingAdmissionPolicyBindingSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'matchResources': json['matchResources'] == null ? undefined : V1MatchResourcesFromJSON(json['matchResources']),
        'paramRef': json['paramRef'] == null ? undefined : V1ParamRefFromJSON(json['paramRef']),
        'policyName': json['policyName'] == null ? undefined : json['policyName'],
        'validationActions': json['validationActions'] == null ? undefined : json['validationActions'],
    };
}

export function V1ValidatingAdmissionPolicyBindingSpecToJSON(value?: V1ValidatingAdmissionPolicyBindingSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'matchResources': V1MatchResourcesToJSON(value['matchResources']),
        'paramRef': V1ParamRefToJSON(value['paramRef']),
        'policyName': value['policyName'],
        'validationActions': value['validationActions'],
    };
}

