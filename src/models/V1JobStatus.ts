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
    V1JobCondition,
    V1JobConditionFromJSON,
    V1JobConditionFromJSONTyped,
    V1JobConditionToJSON,
    V1UncountedTerminatedPods,
    V1UncountedTerminatedPodsFromJSON,
    V1UncountedTerminatedPodsFromJSONTyped,
    V1UncountedTerminatedPodsToJSON,
} from './';

/**
 * JobStatus represents the current state of a Job.
 * @export
 * @interface V1JobStatus
 */
export interface V1JobStatus {
    /**
     * The number of pending and running pods.
     * @type {number}
     * @memberof V1JobStatus
     */
    active?: number;
    /**
     * CompletedIndexes holds the completed indexes when .spec.completionMode = "Indexed" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7".
     * @type {string}
     * @memberof V1JobStatus
     */
    completedIndexes?: string;
    /**
     * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is only set when the job finishes successfully.
     * @type {Date}
     * @memberof V1JobStatus
     */
    completionTime?: Date;
    /**
     * The latest available observations of an object's current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     * @type {Array<V1JobCondition>}
     * @memberof V1JobStatus
     */
    conditions?: Array<V1JobCondition>;
    /**
     * The number of pods which reached phase Failed.
     * @type {number}
     * @memberof V1JobStatus
     */
    failed?: number;
    /**
     * The number of pods which have a Ready condition.
     * 
     * This field is beta-level. The job controller populates the field when the feature gate JobReadyPods is enabled (enabled by default).
     * @type {number}
     * @memberof V1JobStatus
     */
    ready?: number;
    /**
     * Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.
     * @type {Date}
     * @memberof V1JobStatus
     */
    startTime?: Date;
    /**
     * The number of pods which reached phase Succeeded.
     * @type {number}
     * @memberof V1JobStatus
     */
    succeeded?: number;
    /**
     * 
     * @type {V1UncountedTerminatedPods}
     * @memberof V1JobStatus
     */
    uncountedTerminatedPods?: V1UncountedTerminatedPods;
}

export function V1JobStatusFromJSON(json: any): V1JobStatus {
    return V1JobStatusFromJSONTyped(json, false);
}

export function V1JobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JobStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'completedIndexes': !exists(json, 'completedIndexes') ? undefined : json['completedIndexes'],
        'completionTime': !exists(json, 'completionTime') ? undefined : (new Date(json['completionTime'])),
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1JobConditionFromJSON)),
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
        'startTime': !exists(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
        'uncountedTerminatedPods': !exists(json, 'uncountedTerminatedPods') ? undefined : V1UncountedTerminatedPodsFromJSON(json['uncountedTerminatedPods']),
    };
}

export function V1JobStatusToJSON(value?: V1JobStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'completedIndexes': value.completedIndexes,
        'completionTime': value.completionTime === undefined ? undefined : (value.completionTime.toISOString()),
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1JobConditionToJSON)),
        'failed': value.failed,
        'ready': value.ready,
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'succeeded': value.succeeded,
        'uncountedTerminatedPods': V1UncountedTerminatedPodsToJSON(value.uncountedTerminatedPods),
    };
}


