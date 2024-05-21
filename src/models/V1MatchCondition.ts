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
 * MatchCondition represents a condition which must by fulfilled for a request to be sent to a webhook.
 * @export
 * @interface V1MatchCondition
 */
export interface V1MatchCondition {
    /**
     * Expression represents the expression which will be evaluated by CEL. Must evaluate to bool. CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:
     * 
     * 'object' - The object from the incoming request. The value is null for DELETE requests. 'oldObject' - The existing object. The value is null for CREATE requests. 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest). 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
     *   See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
     * 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
     *   request resource.
     * Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/
     * 
     * Required.
     * @type {string}
     * @memberof V1MatchCondition
     */
    expression: string;
    /**
     * Name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. A good name should be descriptive of the associated expression. Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')
     * 
     * Required.
     * @type {string}
     * @memberof V1MatchCondition
     */
    name: string;
}

/**
 * Check if a given object implements the V1MatchCondition interface.
 */
export function instanceOfV1MatchCondition(value: object): value is V1MatchCondition {
    if (!('expression' in value) || value['expression'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1MatchConditionFromJSON(json: any): V1MatchCondition {
    return V1MatchConditionFromJSONTyped(json, false);
}

export function V1MatchConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MatchCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'expression': json['expression'],
        'name': json['name'],
    };
}

export function V1MatchConditionToJSON(value?: V1MatchCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expression': value['expression'],
        'name': value['name'],
    };
}

