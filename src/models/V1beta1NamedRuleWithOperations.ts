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
 * NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.
 * @export
 * @interface V1beta1NamedRuleWithOperations
 */
export interface V1beta1NamedRuleWithOperations {
    /**
     * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof V1beta1NamedRuleWithOperations
     */
    apiGroups?: Array<string>;
    /**
     * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof V1beta1NamedRuleWithOperations
     */
    apiVersions?: Array<string>;
    /**
     * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof V1beta1NamedRuleWithOperations
     */
    operations?: Array<string>;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     * @type {Array<string>}
     * @memberof V1beta1NamedRuleWithOperations
     */
    resourceNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1beta1NamedRuleWithOperations
     */
    resources?: Array<string>;
    /**
     * scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".
     * @type {string}
     * @memberof V1beta1NamedRuleWithOperations
     */
    scope?: string;
}

/**
 * Check if a given object implements the V1beta1NamedRuleWithOperations interface.
 */
export function instanceOfV1beta1NamedRuleWithOperations(value: object): value is V1beta1NamedRuleWithOperations {
    return true;
}

export function V1beta1NamedRuleWithOperationsFromJSON(json: any): V1beta1NamedRuleWithOperations {
    return V1beta1NamedRuleWithOperationsFromJSONTyped(json, false);
}

export function V1beta1NamedRuleWithOperationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1NamedRuleWithOperations {
    if (json == null) {
        return json;
    }
    return {
        
        'apiGroups': json['apiGroups'] == null ? undefined : json['apiGroups'],
        'apiVersions': json['apiVersions'] == null ? undefined : json['apiVersions'],
        'operations': json['operations'] == null ? undefined : json['operations'],
        'resourceNames': json['resourceNames'] == null ? undefined : json['resourceNames'],
        'resources': json['resources'] == null ? undefined : json['resources'],
        'scope': json['scope'] == null ? undefined : json['scope'],
    };
}

export function V1beta1NamedRuleWithOperationsToJSON(value?: V1beta1NamedRuleWithOperations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiGroups': value['apiGroups'],
        'apiVersions': value['apiVersions'],
        'operations': value['operations'],
        'resourceNames': value['resourceNames'],
        'resources': value['resources'],
        'scope': value['scope'],
    };
}

