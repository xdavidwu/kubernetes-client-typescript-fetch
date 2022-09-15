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
    V1DaemonSetCondition,
    V1DaemonSetConditionFromJSON,
    V1DaemonSetConditionFromJSONTyped,
    V1DaemonSetConditionToJSON,
} from './';

/**
 * DaemonSetStatus represents the current status of a daemon set.
 * @export
 * @interface V1DaemonSetStatus
 */
export interface V1DaemonSetStatus {
    /**
     * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    collisionCount?: number;
    /**
     * Represents the latest available observations of a DaemonSet's current state.
     * @type {Array<V1DaemonSetCondition>}
     * @memberof V1DaemonSetStatus
     */
    conditions?: Array<V1DaemonSetCondition>;
    /**
     * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    currentNumberScheduled: number;
    /**
     * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    desiredNumberScheduled: number;
    /**
     * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    numberAvailable?: number;
    /**
     * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    numberMisscheduled: number;
    /**
     * numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    numberReady: number;
    /**
     * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    numberUnavailable?: number;
    /**
     * The most recent generation observed by the daemon set controller.
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    observedGeneration?: number;
    /**
     * The total number of nodes that are running updated daemon pod
     * @type {number}
     * @memberof V1DaemonSetStatus
     */
    updatedNumberScheduled?: number;
}

export function V1DaemonSetStatusFromJSON(json: any): V1DaemonSetStatus {
    return V1DaemonSetStatusFromJSONTyped(json, false);
}

export function V1DaemonSetStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaemonSetStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collisionCount': !exists(json, 'collisionCount') ? undefined : json['collisionCount'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1DaemonSetConditionFromJSON)),
        'currentNumberScheduled': json['currentNumberScheduled'],
        'desiredNumberScheduled': json['desiredNumberScheduled'],
        'numberAvailable': !exists(json, 'numberAvailable') ? undefined : json['numberAvailable'],
        'numberMisscheduled': json['numberMisscheduled'],
        'numberReady': json['numberReady'],
        'numberUnavailable': !exists(json, 'numberUnavailable') ? undefined : json['numberUnavailable'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'updatedNumberScheduled': !exists(json, 'updatedNumberScheduled') ? undefined : json['updatedNumberScheduled'],
    };
}

export function V1DaemonSetStatusToJSON(value?: V1DaemonSetStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collisionCount': value.collisionCount,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1DaemonSetConditionToJSON)),
        'currentNumberScheduled': value.currentNumberScheduled,
        'desiredNumberScheduled': value.desiredNumberScheduled,
        'numberAvailable': value.numberAvailable,
        'numberMisscheduled': value.numberMisscheduled,
        'numberReady': value.numberReady,
        'numberUnavailable': value.numberUnavailable,
        'observedGeneration': value.observedGeneration,
        'updatedNumberScheduled': value.updatedNumberScheduled,
    };
}


