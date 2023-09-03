/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Variable is the definition of a variable that is used for composition.
 * @export
 * @interface V1alpha1Variable
 */
export interface V1alpha1Variable {
    /**
     * Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
     * @type {string}
     * @memberof V1alpha1Variable
     */
    expression: string;
    /**
     * Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`
     * @type {string}
     * @memberof V1alpha1Variable
     */
    name: string;
}

/**
 * Check if a given object implements the V1alpha1Variable interface.
 */
export function instanceOfV1alpha1Variable(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expression" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1alpha1VariableFromJSON(json: any): V1alpha1Variable {
    return V1alpha1VariableFromJSONTyped(json, false);
}

export function V1alpha1VariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1Variable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expression': json['expression'],
        'name': json['name'],
    };
}

export function V1alpha1VariableToJSON(value?: V1alpha1Variable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expression': value.expression,
        'name': value.name,
    };
}

