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
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 * @export
 * @interface V1ResourceRule
 */
export interface V1ResourceRule {
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.
     * @type {Array<string>}
     * @memberof V1ResourceRule
     */
    apiGroups?: Array<string>;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.
     * @type {Array<string>}
     * @memberof V1ResourceRule
     */
    resourceNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ResourceRule
     */
    resources?: Array<string>;
    /**
     * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.
     * @type {Array<string>}
     * @memberof V1ResourceRule
     */
    verbs: Array<string>;
}

/**
 * Check if a given object implements the V1ResourceRule interface.
 */
export function instanceOfV1ResourceRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "verbs" in value;

    return isInstance;
}

export function V1ResourceRuleFromJSON(json: any): V1ResourceRule {
    return V1ResourceRuleFromJSONTyped(json, false);
}

export function V1ResourceRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'resourceNames': !exists(json, 'resourceNames') ? undefined : json['resourceNames'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'verbs': json['verbs'],
    };
}

export function V1ResourceRuleToJSON(value?: V1ResourceRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroups': value.apiGroups,
        'resourceNames': value.resourceNames,
        'resources': value.resources,
        'verbs': value.verbs,
    };
}

