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
import type { V2MetricValueStatus } from './V2MetricValueStatus';
import {
    V2MetricValueStatusFromJSON,
    V2MetricValueStatusFromJSONTyped,
    V2MetricValueStatusToJSON,
} from './V2MetricValueStatus';

/**
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface V2ContainerResourceMetricStatus
 */
export interface V2ContainerResourceMetricStatus {
    /**
     * container is the name of the container in the pods of the scaling target
     * @type {string}
     * @memberof V2ContainerResourceMetricStatus
     */
    container: string;
    /**
     * 
     * @type {V2MetricValueStatus}
     * @memberof V2ContainerResourceMetricStatus
     */
    current: V2MetricValueStatus;
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof V2ContainerResourceMetricStatus
     */
    name: string;
}

/**
 * Check if a given object implements the V2ContainerResourceMetricStatus interface.
 */
export function instanceOfV2ContainerResourceMetricStatus(value: object): value is V2ContainerResourceMetricStatus {
    if (!('container' in value) || value['container'] === undefined) return false;
    if (!('current' in value) || value['current'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V2ContainerResourceMetricStatusFromJSON(json: any): V2ContainerResourceMetricStatus {
    return V2ContainerResourceMetricStatusFromJSONTyped(json, false);
}

export function V2ContainerResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ContainerResourceMetricStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'container': json['container'],
        'current': V2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}

export function V2ContainerResourceMetricStatusToJSON(value?: V2ContainerResourceMetricStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'container': value['container'],
        'current': V2MetricValueStatusToJSON(value['current']),
        'name': value['name'],
    };
}

