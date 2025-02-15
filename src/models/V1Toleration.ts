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
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 * @export
 * @interface V1Toleration
 */
export interface V1Toleration {
    /**
     * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
     * @type {string}
     * @memberof V1Toleration
     */
    effect?: string;
    /**
     * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
     * @type {string}
     * @memberof V1Toleration
     */
    key?: string;
    /**
     * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
     * @type {string}
     * @memberof V1Toleration
     */
    operator?: string;
    /**
     * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
     * @type {number}
     * @memberof V1Toleration
     */
    tolerationSeconds?: number;
    /**
     * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
     * @type {string}
     * @memberof V1Toleration
     */
    value?: string;
}

/**
 * Check if a given object implements the V1Toleration interface.
 */
export function instanceOfV1Toleration(value: object): value is V1Toleration {
    return true;
}

export function V1TolerationFromJSON(json: any): V1Toleration {
    return V1TolerationFromJSONTyped(json, false);
}

export function V1TolerationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Toleration {
    if (json == null) {
        return json;
    }
    return {
        
        'effect': json['effect'] == null ? undefined : json['effect'],
        'key': json['key'] == null ? undefined : json['key'],
        'operator': json['operator'] == null ? undefined : json['operator'],
        'tolerationSeconds': json['tolerationSeconds'] == null ? undefined : json['tolerationSeconds'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function V1TolerationToJSON(value?: V1Toleration | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'effect': value['effect'],
        'key': value['key'],
        'operator': value['operator'],
        'tolerationSeconds': value['tolerationSeconds'],
        'value': value['value'],
    };
}

