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
import type { V2HorizontalPodAutoscalerCondition } from './V2HorizontalPodAutoscalerCondition';
import {
    V2HorizontalPodAutoscalerConditionFromJSON,
    V2HorizontalPodAutoscalerConditionFromJSONTyped,
    V2HorizontalPodAutoscalerConditionToJSON,
} from './V2HorizontalPodAutoscalerCondition';
import type { V2MetricStatus } from './V2MetricStatus';
import {
    V2MetricStatusFromJSON,
    V2MetricStatusFromJSONTyped,
    V2MetricStatusToJSON,
} from './V2MetricStatus';

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 * @export
 * @interface V2HorizontalPodAutoscalerStatus
 */
export interface V2HorizontalPodAutoscalerStatus {
    /**
     * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
     * @type {Array<V2HorizontalPodAutoscalerCondition>}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    conditions?: Array<V2HorizontalPodAutoscalerCondition>;
    /**
     * currentMetrics is the last read state of the metrics used by this autoscaler.
     * @type {Array<V2MetricStatus>}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    currentMetrics?: Array<V2MetricStatus>;
    /**
     * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
     * @type {number}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    currentReplicas?: number;
    /**
     * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
     * @type {number}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    desiredReplicas: number;
    /**
     * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
     * @type {Date}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    lastScaleTime?: Date;
    /**
     * observedGeneration is the most recent generation observed by this autoscaler.
     * @type {number}
     * @memberof V2HorizontalPodAutoscalerStatus
     */
    observedGeneration?: number;
}

/**
 * Check if a given object implements the V2HorizontalPodAutoscalerStatus interface.
 */
export function instanceOfV2HorizontalPodAutoscalerStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "desiredReplicas" in value;

    return isInstance;
}

export function V2HorizontalPodAutoscalerStatusFromJSON(json: any): V2HorizontalPodAutoscalerStatus {
    return V2HorizontalPodAutoscalerStatusFromJSONTyped(json, false);
}

export function V2HorizontalPodAutoscalerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HorizontalPodAutoscalerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V2HorizontalPodAutoscalerConditionFromJSON)),
        'currentMetrics': !exists(json, 'currentMetrics') ? undefined : ((json['currentMetrics'] as Array<any>).map(V2MetricStatusFromJSON)),
        'currentReplicas': !exists(json, 'currentReplicas') ? undefined : json['currentReplicas'],
        'desiredReplicas': json['desiredReplicas'],
        'lastScaleTime': !exists(json, 'lastScaleTime') ? undefined : (new Date(json['lastScaleTime'])),
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}

export function V2HorizontalPodAutoscalerStatusToJSON(value?: V2HorizontalPodAutoscalerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V2HorizontalPodAutoscalerConditionToJSON)),
        'currentMetrics': value.currentMetrics === undefined ? undefined : ((value.currentMetrics as Array<any>).map(V2MetricStatusToJSON)),
        'currentReplicas': value.currentReplicas,
        'desiredReplicas': value.desiredReplicas,
        'lastScaleTime': value.lastScaleTime === undefined ? undefined : (value.lastScaleTime.toISOString()),
        'observedGeneration': value.observedGeneration,
    };
}

