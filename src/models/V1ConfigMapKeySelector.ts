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
 * Selects a key from a ConfigMap.
 * @export
 * @interface V1ConfigMapKeySelector
 */
export interface V1ConfigMapKeySelector {
    /**
     * The key to select.
     * @type {string}
     * @memberof V1ConfigMapKeySelector
     */
    key: string;
    /**
     * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1ConfigMapKeySelector
     */
    name?: string;
    /**
     * Specify whether the ConfigMap or its key must be defined
     * @type {boolean}
     * @memberof V1ConfigMapKeySelector
     */
    optional?: boolean;
}

/**
 * Check if a given object implements the V1ConfigMapKeySelector interface.
 */
export function instanceOfV1ConfigMapKeySelector(value: object): value is V1ConfigMapKeySelector {
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function V1ConfigMapKeySelectorFromJSON(json: any): V1ConfigMapKeySelector {
    return V1ConfigMapKeySelectorFromJSONTyped(json, false);
}

export function V1ConfigMapKeySelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConfigMapKeySelector {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'name': json['name'] == null ? undefined : json['name'],
        'optional': json['optional'] == null ? undefined : json['optional'],
    };
}

export function V1ConfigMapKeySelectorToJSON(value?: V1ConfigMapKeySelector | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'key': value['key'],
        'name': value['name'],
        'optional': value['optional'],
    };
}

