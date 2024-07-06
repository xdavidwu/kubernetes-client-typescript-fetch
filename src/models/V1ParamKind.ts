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
 * ParamKind is a tuple of Group Kind and Version.
 * @export
 * @interface V1ParamKind
 */
export interface V1ParamKind {
    /**
     * APIVersion is the API group version the resources belong to. In format of "group/version". Required.
     * @type {string}
     * @memberof V1ParamKind
     */
    apiVersion?: string;
    /**
     * Kind is the API kind the resources belong to. Required.
     * @type {string}
     * @memberof V1ParamKind
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1ParamKind interface.
 */
export function instanceOfV1ParamKind(value: object): value is V1ParamKind {
    return true;
}

export function V1ParamKindFromJSON(json: any): V1ParamKind {
    return V1ParamKindFromJSONTyped(json, false);
}

export function V1ParamKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ParamKind {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}

export function V1ParamKindToJSON(value?: V1ParamKind | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
    };
}

