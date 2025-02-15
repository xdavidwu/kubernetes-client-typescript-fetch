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
import type { V1alpha2NamedResourcesIntSlice } from './V1alpha2NamedResourcesIntSlice';
import {
    V1alpha2NamedResourcesIntSliceFromJSON,
    V1alpha2NamedResourcesIntSliceFromJSONTyped,
    V1alpha2NamedResourcesIntSliceToJSON,
} from './V1alpha2NamedResourcesIntSlice';
import type { V1alpha2NamedResourcesStringSlice } from './V1alpha2NamedResourcesStringSlice';
import {
    V1alpha2NamedResourcesStringSliceFromJSON,
    V1alpha2NamedResourcesStringSliceFromJSONTyped,
    V1alpha2NamedResourcesStringSliceToJSON,
} from './V1alpha2NamedResourcesStringSlice';

/**
 * NamedResourcesAttribute is a combination of an attribute name and its value.
 * @export
 * @interface V1alpha2NamedResourcesAttribute
 */
export interface V1alpha2NamedResourcesAttribute {
    /**
     * BoolValue is a true/false value.
     * @type {boolean}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    bool?: boolean;
    /**
     * IntValue is a 64-bit integer.
     * @type {number}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    _int?: number;
    /**
     * 
     * @type {V1alpha2NamedResourcesIntSlice}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    intSlice?: V1alpha2NamedResourcesIntSlice;
    /**
     * Name is unique identifier among all resource instances managed by the driver on the node. It must be a DNS subdomain.
     * @type {string}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    name: string;
    /**
     * QuantityValue is a quantity.
     * @type {string}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    quantity?: string;
    /**
     * StringValue is a string.
     * @type {string}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    string?: string;
    /**
     * 
     * @type {V1alpha2NamedResourcesStringSlice}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    stringSlice?: V1alpha2NamedResourcesStringSlice;
    /**
     * VersionValue is a semantic version according to semver.org spec 2.0.0.
     * @type {string}
     * @memberof V1alpha2NamedResourcesAttribute
     */
    version?: string;
}

/**
 * Check if a given object implements the V1alpha2NamedResourcesAttribute interface.
 */
export function instanceOfV1alpha2NamedResourcesAttribute(value: object): value is V1alpha2NamedResourcesAttribute {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1alpha2NamedResourcesAttributeFromJSON(json: any): V1alpha2NamedResourcesAttribute {
    return V1alpha2NamedResourcesAttributeFromJSONTyped(json, false);
}

export function V1alpha2NamedResourcesAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2NamedResourcesAttribute {
    if (json == null) {
        return json;
    }
    return {
        
        'bool': json['bool'] == null ? undefined : json['bool'],
        '_int': json['int'] == null ? undefined : json['int'],
        'intSlice': json['intSlice'] == null ? undefined : V1alpha2NamedResourcesIntSliceFromJSON(json['intSlice']),
        'name': json['name'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'string': json['string'] == null ? undefined : json['string'],
        'stringSlice': json['stringSlice'] == null ? undefined : V1alpha2NamedResourcesStringSliceFromJSON(json['stringSlice']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function V1alpha2NamedResourcesAttributeToJSON(value?: V1alpha2NamedResourcesAttribute | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bool': value['bool'],
        'int': value['_int'],
        'intSlice': V1alpha2NamedResourcesIntSliceToJSON(value['intSlice']),
        'name': value['name'],
        'quantity': value['quantity'],
        'string': value['string'],
        'stringSlice': V1alpha2NamedResourcesStringSliceToJSON(value['stringSlice']),
        'version': value['version'],
    };
}

