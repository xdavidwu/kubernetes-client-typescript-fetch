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
import type { V2beta2MetricIdentifier } from './V2beta2MetricIdentifier';
import {
    V2beta2MetricIdentifierFromJSON,
    V2beta2MetricIdentifierFromJSONTyped,
    V2beta2MetricIdentifierToJSON,
} from './V2beta2MetricIdentifier';
import type { V2beta2MetricValueStatus } from './V2beta2MetricValueStatus';
import {
    V2beta2MetricValueStatusFromJSON,
    V2beta2MetricValueStatusFromJSONTyped,
    V2beta2MetricValueStatusToJSON,
} from './V2beta2MetricValueStatus';

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 * @export
 * @interface V2beta2PodsMetricStatus
 */
export interface V2beta2PodsMetricStatus {
    /**
     * 
     * @type {V2beta2MetricValueStatus}
     * @memberof V2beta2PodsMetricStatus
     */
    current: V2beta2MetricValueStatus;
    /**
     * 
     * @type {V2beta2MetricIdentifier}
     * @memberof V2beta2PodsMetricStatus
     */
    metric: V2beta2MetricIdentifier;
}

/**
 * Check if a given object implements the V2beta2PodsMetricStatus interface.
 */
export function instanceOfV2beta2PodsMetricStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "current" in value;
    isInstance = isInstance && "metric" in value;

    return isInstance;
}

export function V2beta2PodsMetricStatusFromJSON(json: any): V2beta2PodsMetricStatus {
    return V2beta2PodsMetricStatusFromJSONTyped(json, false);
}

export function V2beta2PodsMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2PodsMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': V2beta2MetricValueStatusFromJSON(json['current']),
        'metric': V2beta2MetricIdentifierFromJSON(json['metric']),
    };
}

export function V2beta2PodsMetricStatusToJSON(value?: V2beta2PodsMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': V2beta2MetricValueStatusToJSON(value.current),
        'metric': V2beta2MetricIdentifierToJSON(value.metric),
    };
}

