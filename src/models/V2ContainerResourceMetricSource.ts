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
import type { V2MetricTarget } from './V2MetricTarget';
import {
    V2MetricTargetFromJSON,
    V2MetricTargetFromJSONTyped,
    V2MetricTargetToJSON,
} from './V2MetricTarget';

/**
 * ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 * @export
 * @interface V2ContainerResourceMetricSource
 */
export interface V2ContainerResourceMetricSource {
    /**
     * container is the name of the container in the pods of the scaling target
     * @type {string}
     * @memberof V2ContainerResourceMetricSource
     */
    container: string;
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof V2ContainerResourceMetricSource
     */
    name: string;
    /**
     * 
     * @type {V2MetricTarget}
     * @memberof V2ContainerResourceMetricSource
     */
    target: V2MetricTarget;
}

/**
 * Check if a given object implements the V2ContainerResourceMetricSource interface.
 */
export function instanceOfV2ContainerResourceMetricSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "container" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function V2ContainerResourceMetricSourceFromJSON(json: any): V2ContainerResourceMetricSource {
    return V2ContainerResourceMetricSourceFromJSONTyped(json, false);
}

export function V2ContainerResourceMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ContainerResourceMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'container': json['container'],
        'name': json['name'],
        'target': V2MetricTargetFromJSON(json['target']),
    };
}

export function V2ContainerResourceMetricSourceToJSON(value?: V2ContainerResourceMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'container': value.container,
        'name': value.name,
        'target': V2MetricTargetToJSON(value.target),
    };
}

