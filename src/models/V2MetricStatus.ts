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
    V2ContainerResourceMetricStatus,
    V2ContainerResourceMetricStatusFromJSON,
    V2ContainerResourceMetricStatusFromJSONTyped,
    V2ContainerResourceMetricStatusToJSON,
    V2ExternalMetricStatus,
    V2ExternalMetricStatusFromJSON,
    V2ExternalMetricStatusFromJSONTyped,
    V2ExternalMetricStatusToJSON,
    V2ObjectMetricStatus,
    V2ObjectMetricStatusFromJSON,
    V2ObjectMetricStatusFromJSONTyped,
    V2ObjectMetricStatusToJSON,
    V2PodsMetricStatus,
    V2PodsMetricStatusFromJSON,
    V2PodsMetricStatusFromJSONTyped,
    V2PodsMetricStatusToJSON,
    V2ResourceMetricStatus,
    V2ResourceMetricStatusFromJSON,
    V2ResourceMetricStatusFromJSONTyped,
    V2ResourceMetricStatusToJSON,
} from './';

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface V2MetricStatus
 */
export interface V2MetricStatus {
    /**
     * 
     * @type {V2ContainerResourceMetricStatus}
     * @memberof V2MetricStatus
     */
    containerResource?: V2ContainerResourceMetricStatus;
    /**
     * 
     * @type {V2ExternalMetricStatus}
     * @memberof V2MetricStatus
     */
    external?: V2ExternalMetricStatus;
    /**
     * 
     * @type {V2ObjectMetricStatus}
     * @memberof V2MetricStatus
     */
    object?: V2ObjectMetricStatus;
    /**
     * 
     * @type {V2PodsMetricStatus}
     * @memberof V2MetricStatus
     */
    pods?: V2PodsMetricStatus;
    /**
     * 
     * @type {V2ResourceMetricStatus}
     * @memberof V2MetricStatus
     */
    resource?: V2ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof V2MetricStatus
     */
    type: string;
}

export function V2MetricStatusFromJSON(json: any): V2MetricStatus {
    return V2MetricStatusFromJSONTyped(json, false);
}

export function V2MetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerResource': !exists(json, 'containerResource') ? undefined : V2ContainerResourceMetricStatusFromJSON(json['containerResource']),
        'external': !exists(json, 'external') ? undefined : V2ExternalMetricStatusFromJSON(json['external']),
        'object': !exists(json, 'object') ? undefined : V2ObjectMetricStatusFromJSON(json['object']),
        'pods': !exists(json, 'pods') ? undefined : V2PodsMetricStatusFromJSON(json['pods']),
        'resource': !exists(json, 'resource') ? undefined : V2ResourceMetricStatusFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function V2MetricStatusToJSON(value?: V2MetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerResource': V2ContainerResourceMetricStatusToJSON(value.containerResource),
        'external': V2ExternalMetricStatusToJSON(value.external),
        'object': V2ObjectMetricStatusToJSON(value.object),
        'pods': V2PodsMetricStatusToJSON(value.pods),
        'resource': V2ResourceMetricStatusToJSON(value.resource),
        'type': value.type,
    };
}


