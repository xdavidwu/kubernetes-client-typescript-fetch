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
import type { V1NamedRuleWithOperations } from './V1NamedRuleWithOperations';
import {
    V1NamedRuleWithOperationsFromJSON,
    V1NamedRuleWithOperationsFromJSONTyped,
    V1NamedRuleWithOperationsToJSON,
} from './V1NamedRuleWithOperations';
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
 * @export
 * @interface V1MatchResources
 */
export interface V1MatchResources {
    /**
     * ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
     * @type {Array<V1NamedRuleWithOperations>}
     * @memberof V1MatchResources
     */
    excludeResourceRules?: Array<V1NamedRuleWithOperations>;
    /**
     * matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     * 
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.
     * 
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.
     * 
     * Defaults to "Equivalent"
     * @type {string}
     * @memberof V1MatchResources
     */
    matchPolicy?: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1MatchResources
     */
    namespaceSelector?: V1LabelSelector;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1MatchResources
     */
    objectSelector?: V1LabelSelector;
    /**
     * ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.
     * @type {Array<V1NamedRuleWithOperations>}
     * @memberof V1MatchResources
     */
    resourceRules?: Array<V1NamedRuleWithOperations>;
}

/**
 * Check if a given object implements the V1MatchResources interface.
 */
export function instanceOfV1MatchResources(value: object): value is V1MatchResources {
    return true;
}

export function V1MatchResourcesFromJSON(json: any): V1MatchResources {
    return V1MatchResourcesFromJSONTyped(json, false);
}

export function V1MatchResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MatchResources {
    if (json == null) {
        return json;
    }
    return {
        
        'excludeResourceRules': json['excludeResourceRules'] == null ? undefined : ((json['excludeResourceRules'] as Array<any>).map(V1NamedRuleWithOperationsFromJSON)),
        'matchPolicy': json['matchPolicy'] == null ? undefined : json['matchPolicy'],
        'namespaceSelector': json['namespaceSelector'] == null ? undefined : V1LabelSelectorFromJSON(json['namespaceSelector']),
        'objectSelector': json['objectSelector'] == null ? undefined : V1LabelSelectorFromJSON(json['objectSelector']),
        'resourceRules': json['resourceRules'] == null ? undefined : ((json['resourceRules'] as Array<any>).map(V1NamedRuleWithOperationsFromJSON)),
    };
}

export function V1MatchResourcesToJSON(value?: V1MatchResources | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'excludeResourceRules': value['excludeResourceRules'] == null ? undefined : ((value['excludeResourceRules'] as Array<any>).map(V1NamedRuleWithOperationsToJSON)),
        'matchPolicy': value['matchPolicy'],
        'namespaceSelector': V1LabelSelectorToJSON(value['namespaceSelector']),
        'objectSelector': V1LabelSelectorToJSON(value['objectSelector']),
        'resourceRules': value['resourceRules'] == null ? undefined : ((value['resourceRules'] as Array<any>).map(V1NamedRuleWithOperationsToJSON)),
    };
}

