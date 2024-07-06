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
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 * @export
 * @interface V1PolicyRule
 */
export interface V1PolicyRule {
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. "" represents the core API group and "*" represents all API groups.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    apiGroups?: Array<string>;
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    nonResourceURLs?: Array<string>;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    resourceNames?: Array<string>;
    /**
     * Resources is a list of resources this rule applies to. '*' represents all resources.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    resources?: Array<string>;
    /**
     * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    verbs: Array<string>;
}

/**
 * Check if a given object implements the V1PolicyRule interface.
 */
export function instanceOfV1PolicyRule(value: object): value is V1PolicyRule {
    if (!('verbs' in value) || value['verbs'] === undefined) return false;
    return true;
}

export function V1PolicyRuleFromJSON(json: any): V1PolicyRule {
    return V1PolicyRuleFromJSONTyped(json, false);
}

export function V1PolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PolicyRule {
    if (json == null) {
        return json;
    }
    return {
        
        'apiGroups': json['apiGroups'] == null ? undefined : json['apiGroups'],
        'nonResourceURLs': json['nonResourceURLs'] == null ? undefined : json['nonResourceURLs'],
        'resourceNames': json['resourceNames'] == null ? undefined : json['resourceNames'],
        'resources': json['resources'] == null ? undefined : json['resources'],
        'verbs': json['verbs'],
    };
}

export function V1PolicyRuleToJSON(value?: V1PolicyRule | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiGroups': value['apiGroups'],
        'nonResourceURLs': value['nonResourceURLs'],
        'resourceNames': value['resourceNames'],
        'resources': value['resources'],
        'verbs': value['verbs'],
    };
}

