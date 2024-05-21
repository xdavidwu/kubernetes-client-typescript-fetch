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
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 * @export
 * @interface V2MetricTarget
 */
export interface V2MetricTarget {
    /**
     * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
     * @type {number}
     * @memberof V2MetricTarget
     */
    averageUtilization?: number;
    /**
     * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2MetricTarget
     */
    averageValue?: string;
    /**
     * type represents whether the metric type is Utilization, Value, or AverageValue
     * @type {string}
     * @memberof V2MetricTarget
     */
    type: string;
    /**
     * value is the target value of the metric (as a quantity).
     * @type {string}
     * @memberof V2MetricTarget
     */
    value?: string;
}

/**
 * Check if a given object implements the V2MetricTarget interface.
 */
export function instanceOfV2MetricTarget(value: object): value is V2MetricTarget {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V2MetricTargetFromJSON(json: any): V2MetricTarget {
    return V2MetricTargetFromJSONTyped(json, false);
}

export function V2MetricTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricTarget {
    if (json == null) {
        return json;
    }
    return {
        
        'averageUtilization': json['averageUtilization'] == null ? undefined : json['averageUtilization'],
        'averageValue': json['averageValue'] == null ? undefined : json['averageValue'],
        'type': json['type'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function V2MetricTargetToJSON(value?: V2MetricTarget | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'averageUtilization': value['averageUtilization'],
        'averageValue': value['averageValue'],
        'type': value['type'],
        'value': value['value'],
    };
}

