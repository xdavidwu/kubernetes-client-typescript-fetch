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
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 * @export
 * @interface V1NonResourceAttributes
 */
export interface V1NonResourceAttributes {
    /**
     * Path is the URL path of the request
     * @type {string}
     * @memberof V1NonResourceAttributes
     */
    path?: string;
    /**
     * Verb is the standard HTTP verb
     * @type {string}
     * @memberof V1NonResourceAttributes
     */
    verb?: string;
}

/**
 * Check if a given object implements the V1NonResourceAttributes interface.
 */
export function instanceOfV1NonResourceAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1NonResourceAttributesFromJSON(json: any): V1NonResourceAttributes {
    return V1NonResourceAttributesFromJSONTyped(json, false);
}

export function V1NonResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NonResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': !exists(json, 'path') ? undefined : json['path'],
        'verb': !exists(json, 'verb') ? undefined : json['verb'],
    };
}

export function V1NonResourceAttributesToJSON(value?: V1NonResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
        'verb': value.verb,
    };
}

