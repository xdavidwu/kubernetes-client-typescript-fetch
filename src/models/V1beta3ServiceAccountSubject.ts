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
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 * @export
 * @interface V1beta3ServiceAccountSubject
 */
export interface V1beta3ServiceAccountSubject {
    /**
     * `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
     * @type {string}
     * @memberof V1beta3ServiceAccountSubject
     */
    name: string;
    /**
     * `namespace` is the namespace of matching ServiceAccount objects. Required.
     * @type {string}
     * @memberof V1beta3ServiceAccountSubject
     */
    namespace: string;
}

/**
 * Check if a given object implements the V1beta3ServiceAccountSubject interface.
 */
export function instanceOfV1beta3ServiceAccountSubject(value: object): value is V1beta3ServiceAccountSubject {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    return true;
}

export function V1beta3ServiceAccountSubjectFromJSON(json: any): V1beta3ServiceAccountSubject {
    return V1beta3ServiceAccountSubjectFromJSONTyped(json, false);
}

export function V1beta3ServiceAccountSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3ServiceAccountSubject {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function V1beta3ServiceAccountSubjectToJSON(value?: V1beta3ServiceAccountSubject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'namespace': value['namespace'],
    };
}

