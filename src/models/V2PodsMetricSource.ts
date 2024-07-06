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
import type { V2MetricIdentifier } from './V2MetricIdentifier';
import {
    V2MetricIdentifierFromJSON,
    V2MetricIdentifierFromJSONTyped,
    V2MetricIdentifierToJSON,
} from './V2MetricIdentifier';
import type { V2MetricTarget } from './V2MetricTarget';
import {
    V2MetricTargetFromJSON,
    V2MetricTargetFromJSONTyped,
    V2MetricTargetToJSON,
} from './V2MetricTarget';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 * @export
 * @interface V2PodsMetricSource
 */
export interface V2PodsMetricSource {
    /**
     * 
     * @type {V2MetricIdentifier}
     * @memberof V2PodsMetricSource
     */
    metric: V2MetricIdentifier;
    /**
     * 
     * @type {V2MetricTarget}
     * @memberof V2PodsMetricSource
     */
    target: V2MetricTarget;
}

/**
 * Check if a given object implements the V2PodsMetricSource interface.
 */
export function instanceOfV2PodsMetricSource(value: object): value is V2PodsMetricSource {
    if (!('metric' in value) || value['metric'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function V2PodsMetricSourceFromJSON(json: any): V2PodsMetricSource {
    return V2PodsMetricSourceFromJSONTyped(json, false);
}

export function V2PodsMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PodsMetricSource {
    if (json == null) {
        return json;
    }
    return {
        
        'metric': V2MetricIdentifierFromJSON(json['metric']),
        'target': V2MetricTargetFromJSON(json['target']),
    };
}

export function V2PodsMetricSourceToJSON(value?: V2PodsMetricSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metric': V2MetricIdentifierToJSON(value['metric']),
        'target': V2MetricTargetToJSON(value['target']),
    };
}

