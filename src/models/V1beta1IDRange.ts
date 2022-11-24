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
 * IDRange provides a min/max of an allowed range of IDs.
 * @export
 * @interface V1beta1IDRange
 */
export interface V1beta1IDRange {
    /**
     * max is the end of the range, inclusive.
     * @type {number}
     * @memberof V1beta1IDRange
     */
    max: number;
    /**
     * min is the start of the range, inclusive.
     * @type {number}
     * @memberof V1beta1IDRange
     */
    min: number;
}

/**
 * Check if a given object implements the V1beta1IDRange interface.
 */
export function instanceOfV1beta1IDRange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "max" in value;
    isInstance = isInstance && "min" in value;

    return isInstance;
}

export function V1beta1IDRangeFromJSON(json: any): V1beta1IDRange {
    return V1beta1IDRangeFromJSONTyped(json, false);
}

export function V1beta1IDRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1IDRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max': json['max'],
        'min': json['min'],
    };
}

export function V1beta1IDRangeToJSON(value?: V1beta1IDRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max': value.max,
        'min': value.min,
    };
}

