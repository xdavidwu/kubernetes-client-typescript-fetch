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
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import type { V2beta1CrossVersionObjectReference } from './V2beta1CrossVersionObjectReference';
import {
    V2beta1CrossVersionObjectReferenceFromJSON,
    V2beta1CrossVersionObjectReferenceFromJSONTyped,
    V2beta1CrossVersionObjectReferenceToJSON,
} from './V2beta1CrossVersionObjectReference';

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 * @export
 * @interface V2beta1ObjectMetricStatus
 */
export interface V2beta1ObjectMetricStatus {
    /**
     * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2beta1ObjectMetricStatus
     */
    averageValue?: string;
    /**
     * currentValue is the current value of the metric (as a quantity).
     * @type {string}
     * @memberof V2beta1ObjectMetricStatus
     */
    currentValue: string;
    /**
     * metricName is the name of the metric in question.
     * @type {string}
     * @memberof V2beta1ObjectMetricStatus
     */
    metricName: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V2beta1ObjectMetricStatus
     */
    selector?: V1LabelSelector;
    /**
     * 
     * @type {V2beta1CrossVersionObjectReference}
     * @memberof V2beta1ObjectMetricStatus
     */
    target: V2beta1CrossVersionObjectReference;
}

/**
 * Check if a given object implements the V2beta1ObjectMetricStatus interface.
 */
export function instanceOfV2beta1ObjectMetricStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currentValue" in value;
    isInstance = isInstance && "metricName" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function V2beta1ObjectMetricStatusFromJSON(json: any): V2beta1ObjectMetricStatus {
    return V2beta1ObjectMetricStatusFromJSONTyped(json, false);
}

export function V2beta1ObjectMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1ObjectMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageValue': !exists(json, 'averageValue') ? undefined : json['averageValue'],
        'currentValue': json['currentValue'],
        'metricName': json['metricName'],
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'target': V2beta1CrossVersionObjectReferenceFromJSON(json['target']),
    };
}

export function V2beta1ObjectMetricStatusToJSON(value?: V2beta1ObjectMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageValue': value.averageValue,
        'currentValue': value.currentValue,
        'metricName': value.metricName,
        'selector': V1LabelSelectorToJSON(value.selector),
        'target': V2beta1CrossVersionObjectReferenceToJSON(value.target),
    };
}

