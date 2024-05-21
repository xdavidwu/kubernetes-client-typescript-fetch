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
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 * @export
 * @interface V1beta3FlowDistinguisherMethod
 */
export interface V1beta3FlowDistinguisherMethod {
    /**
     * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
     * @type {string}
     * @memberof V1beta3FlowDistinguisherMethod
     */
    type: string;
}

/**
 * Check if a given object implements the V1beta3FlowDistinguisherMethod interface.
 */
export function instanceOfV1beta3FlowDistinguisherMethod(value: object): value is V1beta3FlowDistinguisherMethod {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1beta3FlowDistinguisherMethodFromJSON(json: any): V1beta3FlowDistinguisherMethod {
    return V1beta3FlowDistinguisherMethodFromJSONTyped(json, false);
}

export function V1beta3FlowDistinguisherMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3FlowDistinguisherMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function V1beta3FlowDistinguisherMethodToJSON(value?: V1beta3FlowDistinguisherMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
    };
}

