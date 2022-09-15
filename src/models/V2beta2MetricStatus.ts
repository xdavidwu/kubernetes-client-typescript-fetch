/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V2beta2ContainerResourceMetricStatus,
    V2beta2ContainerResourceMetricStatusFromJSON,
    V2beta2ContainerResourceMetricStatusFromJSONTyped,
    V2beta2ContainerResourceMetricStatusToJSON,
    V2beta2ExternalMetricStatus,
    V2beta2ExternalMetricStatusFromJSON,
    V2beta2ExternalMetricStatusFromJSONTyped,
    V2beta2ExternalMetricStatusToJSON,
    V2beta2ObjectMetricStatus,
    V2beta2ObjectMetricStatusFromJSON,
    V2beta2ObjectMetricStatusFromJSONTyped,
    V2beta2ObjectMetricStatusToJSON,
    V2beta2PodsMetricStatus,
    V2beta2PodsMetricStatusFromJSON,
    V2beta2PodsMetricStatusFromJSONTyped,
    V2beta2PodsMetricStatusToJSON,
    V2beta2ResourceMetricStatus,
    V2beta2ResourceMetricStatusFromJSON,
    V2beta2ResourceMetricStatusFromJSONTyped,
    V2beta2ResourceMetricStatusToJSON,
} from './';

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface V2beta2MetricStatus
 */
export interface V2beta2MetricStatus {
    /**
     * 
     * @type {V2beta2ContainerResourceMetricStatus}
     * @memberof V2beta2MetricStatus
     */
    containerResource?: V2beta2ContainerResourceMetricStatus;
    /**
     * 
     * @type {V2beta2ExternalMetricStatus}
     * @memberof V2beta2MetricStatus
     */
    external?: V2beta2ExternalMetricStatus;
    /**
     * 
     * @type {V2beta2ObjectMetricStatus}
     * @memberof V2beta2MetricStatus
     */
    object?: V2beta2ObjectMetricStatus;
    /**
     * 
     * @type {V2beta2PodsMetricStatus}
     * @memberof V2beta2MetricStatus
     */
    pods?: V2beta2PodsMetricStatus;
    /**
     * 
     * @type {V2beta2ResourceMetricStatus}
     * @memberof V2beta2MetricStatus
     */
    resource?: V2beta2ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof V2beta2MetricStatus
     */
    type: string;
}

export function V2beta2MetricStatusFromJSON(json: any): V2beta2MetricStatus {
    return V2beta2MetricStatusFromJSONTyped(json, false);
}

export function V2beta2MetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2MetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerResource': !exists(json, 'containerResource') ? undefined : V2beta2ContainerResourceMetricStatusFromJSON(json['containerResource']),
        'external': !exists(json, 'external') ? undefined : V2beta2ExternalMetricStatusFromJSON(json['external']),
        'object': !exists(json, 'object') ? undefined : V2beta2ObjectMetricStatusFromJSON(json['object']),
        'pods': !exists(json, 'pods') ? undefined : V2beta2PodsMetricStatusFromJSON(json['pods']),
        'resource': !exists(json, 'resource') ? undefined : V2beta2ResourceMetricStatusFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function V2beta2MetricStatusToJSON(value?: V2beta2MetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerResource': V2beta2ContainerResourceMetricStatusToJSON(value.containerResource),
        'external': V2beta2ExternalMetricStatusToJSON(value.external),
        'object': V2beta2ObjectMetricStatusToJSON(value.object),
        'pods': V2beta2PodsMetricStatusToJSON(value.pods),
        'resource': V2beta2ResourceMetricStatusToJSON(value.resource),
        'type': value.type,
    };
}


