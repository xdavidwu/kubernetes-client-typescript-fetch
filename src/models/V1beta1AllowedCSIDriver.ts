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
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 * @export
 * @interface V1beta1AllowedCSIDriver
 */
export interface V1beta1AllowedCSIDriver {
    /**
     * Name is the registered name of the CSI driver
     * @type {string}
     * @memberof V1beta1AllowedCSIDriver
     */
    name: string;
}

/**
 * Check if a given object implements the V1beta1AllowedCSIDriver interface.
 */
export function instanceOfV1beta1AllowedCSIDriver(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1beta1AllowedCSIDriverFromJSON(json: any): V1beta1AllowedCSIDriver {
    return V1beta1AllowedCSIDriverFromJSONTyped(json, false);
}

export function V1beta1AllowedCSIDriverFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1AllowedCSIDriver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1beta1AllowedCSIDriverToJSON(value?: V1beta1AllowedCSIDriver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

