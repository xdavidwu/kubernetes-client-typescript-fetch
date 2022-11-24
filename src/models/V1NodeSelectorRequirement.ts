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
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface V1NodeSelectorRequirement
 */
export interface V1NodeSelectorRequirement {
    /**
     * The label key that the selector applies to.
     * @type {string}
     * @memberof V1NodeSelectorRequirement
     */
    key: string;
    /**
     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
     * @type {string}
     * @memberof V1NodeSelectorRequirement
     */
    operator: string;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof V1NodeSelectorRequirement
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the V1NodeSelectorRequirement interface.
 */
export function instanceOfV1NodeSelectorRequirement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "operator" in value;

    return isInstance;
}

export function V1NodeSelectorRequirementFromJSON(json: any): V1NodeSelectorRequirement {
    return V1NodeSelectorRequirementFromJSONTyped(json, false);
}

export function V1NodeSelectorRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeSelectorRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'operator': json['operator'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function V1NodeSelectorRequirementToJSON(value?: V1NodeSelectorRequirement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'operator': value.operator,
        'values': value.values,
    };
}

