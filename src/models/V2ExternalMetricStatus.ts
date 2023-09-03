/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V2MetricIdentifier } from './V2MetricIdentifier';
import {
    V2MetricIdentifierFromJSON,
    V2MetricIdentifierFromJSONTyped,
    V2MetricIdentifierToJSON,
} from './V2MetricIdentifier';
import type { V2MetricValueStatus } from './V2MetricValueStatus';
import {
    V2MetricValueStatusFromJSON,
    V2MetricValueStatusFromJSONTyped,
    V2MetricValueStatusToJSON,
} from './V2MetricValueStatus';

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 * @export
 * @interface V2ExternalMetricStatus
 */
export interface V2ExternalMetricStatus {
    /**
     * 
     * @type {V2MetricValueStatus}
     * @memberof V2ExternalMetricStatus
     */
    current: V2MetricValueStatus;
    /**
     * 
     * @type {V2MetricIdentifier}
     * @memberof V2ExternalMetricStatus
     */
    metric: V2MetricIdentifier;
}

/**
 * Check if a given object implements the V2ExternalMetricStatus interface.
 */
export function instanceOfV2ExternalMetricStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "current" in value;
    isInstance = isInstance && "metric" in value;

    return isInstance;
}

export function V2ExternalMetricStatusFromJSON(json: any): V2ExternalMetricStatus {
    return V2ExternalMetricStatusFromJSONTyped(json, false);
}

export function V2ExternalMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ExternalMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': V2MetricValueStatusFromJSON(json['current']),
        'metric': V2MetricIdentifierFromJSON(json['metric']),
    };
}

export function V2ExternalMetricStatusToJSON(value?: V2ExternalMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': V2MetricValueStatusToJSON(value.current),
        'metric': V2MetricIdentifierToJSON(value.metric),
    };
}

