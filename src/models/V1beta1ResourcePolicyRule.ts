/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) either (d1) the request does not specify a namespace (i.e., `Namespace==""`) and clusterScope is true or (d2) the request specifies a namespace and least one member of namespaces matches the request's namespace.
 * @export
 * @interface V1beta1ResourcePolicyRule
 */
export interface V1beta1ResourcePolicyRule {
    /**
     * `apiGroups` is a list of matching API groups and may not be empty. "*" matches all API groups and, if present, must be the only entry. Required.
     * @type {Array<string>}
     * @memberof V1beta1ResourcePolicyRule
     */
    apiGroups: Array<string>;
    /**
     * `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.
     * @type {boolean}
     * @memberof V1beta1ResourcePolicyRule
     */
    clusterScope?: boolean;
    /**
     * `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains "*".  Note that "*" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.
     * @type {Array<string>}
     * @memberof V1beta1ResourcePolicyRule
     */
    namespaces?: Array<string>;
    /**
     * `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ "services", "nodes/status" ].  This list may not be empty. "*" matches all resources and, if present, must be the only entry. Required.
     * @type {Array<string>}
     * @memberof V1beta1ResourcePolicyRule
     */
    resources: Array<string>;
    /**
     * `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs and, if present, must be the only entry. Required.
     * @type {Array<string>}
     * @memberof V1beta1ResourcePolicyRule
     */
    verbs: Array<string>;
}

/**
 * Check if a given object implements the V1beta1ResourcePolicyRule interface.
 */
export function instanceOfV1beta1ResourcePolicyRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apiGroups" in value;
    isInstance = isInstance && "resources" in value;
    isInstance = isInstance && "verbs" in value;

    return isInstance;
}

export function V1beta1ResourcePolicyRuleFromJSON(json: any): V1beta1ResourcePolicyRule {
    return V1beta1ResourcePolicyRuleFromJSONTyped(json, false);
}

export function V1beta1ResourcePolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ResourcePolicyRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroups': json['apiGroups'],
        'clusterScope': !exists(json, 'clusterScope') ? undefined : json['clusterScope'],
        'namespaces': !exists(json, 'namespaces') ? undefined : json['namespaces'],
        'resources': json['resources'],
        'verbs': json['verbs'],
    };
}

export function V1beta1ResourcePolicyRuleToJSON(value?: V1beta1ResourcePolicyRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroups': value.apiGroups,
        'clusterScope': value.clusterScope,
        'namespaces': value.namespaces,
        'resources': value.resources,
        'verbs': value.verbs,
    };
}

