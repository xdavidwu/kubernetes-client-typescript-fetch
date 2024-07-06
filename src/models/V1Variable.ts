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
 * Variable is the definition of a variable that is used for composition. A variable is defined as a named expression.
 * @export
 * @interface V1Variable
 */
export interface V1Variable {
    /**
     * Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
     * @type {string}
     * @memberof V1Variable
     */
    expression: string;
    /**
     * Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`
     * @type {string}
     * @memberof V1Variable
     */
    name: string;
}

/**
 * Check if a given object implements the V1Variable interface.
 */
export function instanceOfV1Variable(value: object): value is V1Variable {
    if (!('expression' in value) || value['expression'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1VariableFromJSON(json: any): V1Variable {
    return V1VariableFromJSONTyped(json, false);
}

export function V1VariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Variable {
    if (json == null) {
        return json;
    }
    return {
        
        'expression': json['expression'],
        'name': json['name'],
    };
}

export function V1VariableToJSON(value?: V1Variable | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expression': value['expression'],
        'name': value['name'],
    };
}

