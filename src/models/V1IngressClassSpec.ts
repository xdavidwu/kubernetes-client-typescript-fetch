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
import type { V1IngressClassParametersReference } from './V1IngressClassParametersReference';
import {
    V1IngressClassParametersReferenceFromJSON,
    V1IngressClassParametersReferenceFromJSONTyped,
    V1IngressClassParametersReferenceToJSON,
} from './V1IngressClassParametersReference';

/**
 * IngressClassSpec provides information about the class of an Ingress.
 * @export
 * @interface V1IngressClassSpec
 */
export interface V1IngressClassSpec {
    /**
     * controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
     * @type {string}
     * @memberof V1IngressClassSpec
     */
    controller?: string;
    /**
     * 
     * @type {V1IngressClassParametersReference}
     * @memberof V1IngressClassSpec
     */
    parameters?: V1IngressClassParametersReference;
}

/**
 * Check if a given object implements the V1IngressClassSpec interface.
 */
export function instanceOfV1IngressClassSpec(value: object): value is V1IngressClassSpec {
    return true;
}

export function V1IngressClassSpecFromJSON(json: any): V1IngressClassSpec {
    return V1IngressClassSpecFromJSONTyped(json, false);
}

export function V1IngressClassSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressClassSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'controller': json['controller'] == null ? undefined : json['controller'],
        'parameters': json['parameters'] == null ? undefined : V1IngressClassParametersReferenceFromJSON(json['parameters']),
    };
}

export function V1IngressClassSpecToJSON(value?: V1IngressClassSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'controller': value['controller'],
        'parameters': V1IngressClassParametersReferenceToJSON(value['parameters']),
    };
}

