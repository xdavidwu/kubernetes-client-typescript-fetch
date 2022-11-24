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
 * MetricValueStatus holds the current value for a metric
 * @export
 * @interface V2MetricValueStatus
 */
export interface V2MetricValueStatus {
    /**
     * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
     * @type {number}
     * @memberof V2MetricValueStatus
     */
    averageUtilization?: number;
    /**
     * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2MetricValueStatus
     */
    averageValue?: string;
    /**
     * value is the current value of the metric (as a quantity).
     * @type {string}
     * @memberof V2MetricValueStatus
     */
    value?: string;
}

/**
 * Check if a given object implements the V2MetricValueStatus interface.
 */
export function instanceOfV2MetricValueStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V2MetricValueStatusFromJSON(json: any): V2MetricValueStatus {
    return V2MetricValueStatusFromJSONTyped(json, false);
}

export function V2MetricValueStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricValueStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageUtilization': !exists(json, 'averageUtilization') ? undefined : json['averageUtilization'],
        'averageValue': !exists(json, 'averageValue') ? undefined : json['averageValue'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V2MetricValueStatusToJSON(value?: V2MetricValueStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageUtilization': value.averageUtilization,
        'averageValue': value.averageValue,
        'value': value.value,
    };
}

