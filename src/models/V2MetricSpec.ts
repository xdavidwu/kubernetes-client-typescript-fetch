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
import type { V2ResourceMetricSource } from './V2ResourceMetricSource';
import {
    V2ResourceMetricSourceFromJSON,
    V2ResourceMetricSourceFromJSONTyped,
    V2ResourceMetricSourceToJSON,
} from './V2ResourceMetricSource';
import type { V2ObjectMetricSource } from './V2ObjectMetricSource';
import {
    V2ObjectMetricSourceFromJSON,
    V2ObjectMetricSourceFromJSONTyped,
    V2ObjectMetricSourceToJSON,
} from './V2ObjectMetricSource';
import type { V2ExternalMetricSource } from './V2ExternalMetricSource';
import {
    V2ExternalMetricSourceFromJSON,
    V2ExternalMetricSourceFromJSONTyped,
    V2ExternalMetricSourceToJSON,
} from './V2ExternalMetricSource';
import type { V2ContainerResourceMetricSource } from './V2ContainerResourceMetricSource';
import {
    V2ContainerResourceMetricSourceFromJSON,
    V2ContainerResourceMetricSourceFromJSONTyped,
    V2ContainerResourceMetricSourceToJSON,
} from './V2ContainerResourceMetricSource';
import type { V2PodsMetricSource } from './V2PodsMetricSource';
import {
    V2PodsMetricSourceFromJSON,
    V2PodsMetricSourceFromJSONTyped,
    V2PodsMetricSourceToJSON,
} from './V2PodsMetricSource';

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 * @export
 * @interface V2MetricSpec
 */
export interface V2MetricSpec {
    /**
     * 
     * @type {V2ContainerResourceMetricSource}
     * @memberof V2MetricSpec
     */
    containerResource?: V2ContainerResourceMetricSource;
    /**
     * 
     * @type {V2ExternalMetricSource}
     * @memberof V2MetricSpec
     */
    external?: V2ExternalMetricSource;
    /**
     * 
     * @type {V2ObjectMetricSource}
     * @memberof V2MetricSpec
     */
    object?: V2ObjectMetricSource;
    /**
     * 
     * @type {V2PodsMetricSource}
     * @memberof V2MetricSpec
     */
    pods?: V2PodsMetricSource;
    /**
     * 
     * @type {V2ResourceMetricSource}
     * @memberof V2MetricSpec
     */
    resource?: V2ResourceMetricSource;
    /**
     * type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof V2MetricSpec
     */
    type: string;
}

/**
 * Check if a given object implements the V2MetricSpec interface.
 */
export function instanceOfV2MetricSpec(value: object): value is V2MetricSpec {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V2MetricSpecFromJSON(json: any): V2MetricSpec {
    return V2MetricSpecFromJSONTyped(json, false);
}

export function V2MetricSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'containerResource': json['containerResource'] == null ? undefined : V2ContainerResourceMetricSourceFromJSON(json['containerResource']),
        'external': json['external'] == null ? undefined : V2ExternalMetricSourceFromJSON(json['external']),
        'object': json['object'] == null ? undefined : V2ObjectMetricSourceFromJSON(json['object']),
        'pods': json['pods'] == null ? undefined : V2PodsMetricSourceFromJSON(json['pods']),
        'resource': json['resource'] == null ? undefined : V2ResourceMetricSourceFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function V2MetricSpecToJSON(value?: V2MetricSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'containerResource': V2ContainerResourceMetricSourceToJSON(value['containerResource']),
        'external': V2ExternalMetricSourceToJSON(value['external']),
        'object': V2ObjectMetricSourceToJSON(value['object']),
        'pods': V2PodsMetricSourceToJSON(value['pods']),
        'resource': V2ResourceMetricSourceToJSON(value['resource']),
        'type': value['type'],
    };
}

