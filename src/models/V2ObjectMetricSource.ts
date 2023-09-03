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
import type { V2CrossVersionObjectReference } from './V2CrossVersionObjectReference';
import {
    V2CrossVersionObjectReferenceFromJSON,
    V2CrossVersionObjectReferenceFromJSONTyped,
    V2CrossVersionObjectReferenceToJSON,
} from './V2CrossVersionObjectReference';
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
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 * @export
 * @interface V2ObjectMetricSource
 */
export interface V2ObjectMetricSource {
    /**
     * 
     * @type {V2CrossVersionObjectReference}
     * @memberof V2ObjectMetricSource
     */
    describedObject: V2CrossVersionObjectReference;
    /**
     * 
     * @type {V2MetricIdentifier}
     * @memberof V2ObjectMetricSource
     */
    metric: V2MetricIdentifier;
    /**
     * 
     * @type {V2MetricTarget}
     * @memberof V2ObjectMetricSource
     */
    target: V2MetricTarget;
}

/**
 * Check if a given object implements the V2ObjectMetricSource interface.
 */
export function instanceOfV2ObjectMetricSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "describedObject" in value;
    isInstance = isInstance && "metric" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function V2ObjectMetricSourceFromJSON(json: any): V2ObjectMetricSource {
    return V2ObjectMetricSourceFromJSONTyped(json, false);
}

export function V2ObjectMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ObjectMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'describedObject': V2CrossVersionObjectReferenceFromJSON(json['describedObject']),
        'metric': V2MetricIdentifierFromJSON(json['metric']),
        'target': V2MetricTargetFromJSON(json['target']),
    };
}

export function V2ObjectMetricSourceToJSON(value?: V2ObjectMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'describedObject': V2CrossVersionObjectReferenceToJSON(value.describedObject),
        'metric': V2MetricIdentifierToJSON(value.metric),
        'target': V2MetricTargetToJSON(value.target),
    };
}

