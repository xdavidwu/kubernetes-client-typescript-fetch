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
import type { V2MetricTarget } from './V2MetricTarget';
import {
    V2MetricTargetFromJSON,
    V2MetricTargetFromJSONTyped,
    V2MetricTargetToJSON,
} from './V2MetricTarget';

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 * @export
 * @interface V2ResourceMetricSource
 */
export interface V2ResourceMetricSource {
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof V2ResourceMetricSource
     */
    name: string;
    /**
     * 
     * @type {V2MetricTarget}
     * @memberof V2ResourceMetricSource
     */
    target: V2MetricTarget;
}

/**
 * Check if a given object implements the V2ResourceMetricSource interface.
 */
export function instanceOfV2ResourceMetricSource(value: object): value is V2ResourceMetricSource {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function V2ResourceMetricSourceFromJSON(json: any): V2ResourceMetricSource {
    return V2ResourceMetricSourceFromJSONTyped(json, false);
}

export function V2ResourceMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ResourceMetricSource {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'target': V2MetricTargetFromJSON(json['target']),
    };
}

export function V2ResourceMetricSourceToJSON(value?: V2ResourceMetricSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'target': V2MetricTargetToJSON(value['target']),
    };
}

