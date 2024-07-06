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
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 * @export
 * @interface V1FlowDistinguisherMethod
 */
export interface V1FlowDistinguisherMethod {
    /**
     * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
     * @type {string}
     * @memberof V1FlowDistinguisherMethod
     */
    type: string;
}

/**
 * Check if a given object implements the V1FlowDistinguisherMethod interface.
 */
export function instanceOfV1FlowDistinguisherMethod(value: object): value is V1FlowDistinguisherMethod {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1FlowDistinguisherMethodFromJSON(json: any): V1FlowDistinguisherMethod {
    return V1FlowDistinguisherMethodFromJSONTyped(json, false);
}

export function V1FlowDistinguisherMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FlowDistinguisherMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function V1FlowDistinguisherMethodToJSON(value?: V1FlowDistinguisherMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
    };
}

