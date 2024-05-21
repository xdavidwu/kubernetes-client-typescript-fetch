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
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 * @export
 * @interface V1ScopedResourceSelectorRequirement
 */
export interface V1ScopedResourceSelectorRequirement {
    /**
     * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
     * @type {string}
     * @memberof V1ScopedResourceSelectorRequirement
     */
    operator: string;
    /**
     * The name of the scope that the selector applies to.
     * @type {string}
     * @memberof V1ScopedResourceSelectorRequirement
     */
    scopeName: string;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof V1ScopedResourceSelectorRequirement
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the V1ScopedResourceSelectorRequirement interface.
 */
export function instanceOfV1ScopedResourceSelectorRequirement(value: object): value is V1ScopedResourceSelectorRequirement {
    if (!('operator' in value) || value['operator'] === undefined) return false;
    if (!('scopeName' in value) || value['scopeName'] === undefined) return false;
    return true;
}

export function V1ScopedResourceSelectorRequirementFromJSON(json: any): V1ScopedResourceSelectorRequirement {
    return V1ScopedResourceSelectorRequirementFromJSONTyped(json, false);
}

export function V1ScopedResourceSelectorRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ScopedResourceSelectorRequirement {
    if (json == null) {
        return json;
    }
    return {
        
        'operator': json['operator'],
        'scopeName': json['scopeName'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}

export function V1ScopedResourceSelectorRequirementToJSON(value?: V1ScopedResourceSelectorRequirement | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'operator': value['operator'],
        'scopeName': value['scopeName'],
        'values': value['values'],
    };
}

