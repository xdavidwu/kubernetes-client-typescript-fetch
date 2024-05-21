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
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 * @export
 * @interface V1LimitRangeItem
 */
export interface V1LimitRangeItem {
    /**
     * Default resource requirement limit value by resource name if resource limit is omitted.
     * @type {{ [key: string]: string; }}
     * @memberof V1LimitRangeItem
     */
    _default?: { [key: string]: string; };
    /**
     * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
     * @type {{ [key: string]: string; }}
     * @memberof V1LimitRangeItem
     */
    defaultRequest?: { [key: string]: string; };
    /**
     * Max usage constraints on this kind by resource name.
     * @type {{ [key: string]: string; }}
     * @memberof V1LimitRangeItem
     */
    max?: { [key: string]: string; };
    /**
     * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
     * @type {{ [key: string]: string; }}
     * @memberof V1LimitRangeItem
     */
    maxLimitRequestRatio?: { [key: string]: string; };
    /**
     * Min usage constraints on this kind by resource name.
     * @type {{ [key: string]: string; }}
     * @memberof V1LimitRangeItem
     */
    min?: { [key: string]: string; };
    /**
     * Type of resource that this limit applies to.
     * @type {string}
     * @memberof V1LimitRangeItem
     */
    type: string;
}

/**
 * Check if a given object implements the V1LimitRangeItem interface.
 */
export function instanceOfV1LimitRangeItem(value: object): value is V1LimitRangeItem {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1LimitRangeItemFromJSON(json: any): V1LimitRangeItem {
    return V1LimitRangeItemFromJSONTyped(json, false);
}

export function V1LimitRangeItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LimitRangeItem {
    if (json == null) {
        return json;
    }
    return {
        
        '_default': json['default'] == null ? undefined : json['default'],
        'defaultRequest': json['defaultRequest'] == null ? undefined : json['defaultRequest'],
        'max': json['max'] == null ? undefined : json['max'],
        'maxLimitRequestRatio': json['maxLimitRequestRatio'] == null ? undefined : json['maxLimitRequestRatio'],
        'min': json['min'] == null ? undefined : json['min'],
        'type': json['type'],
    };
}

export function V1LimitRangeItemToJSON(value?: V1LimitRangeItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'default': value['_default'],
        'defaultRequest': value['defaultRequest'],
        'max': value['max'],
        'maxLimitRequestRatio': value['maxLimitRequestRatio'],
        'min': value['min'],
        'type': value['type'],
    };
}

