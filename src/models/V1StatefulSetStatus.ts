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
    V1StatefulSetCondition,
    V1StatefulSetConditionFromJSON,
    V1StatefulSetConditionFromJSONTyped,
    V1StatefulSetConditionToJSON,
} from './';

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 * @export
 * @interface V1StatefulSetStatus
 */
export interface V1StatefulSetStatus {
    /**
     * Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset. This is a beta field and enabled/disabled by StatefulSetMinReadySeconds feature gate.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    availableReplicas?: number;
    /**
     * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    collisionCount?: number;
    /**
     * Represents the latest available observations of a statefulset's current state.
     * @type {Array<V1StatefulSetCondition>}
     * @memberof V1StatefulSetStatus
     */
    conditions?: Array<V1StatefulSetCondition>;
    /**
     * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    currentReplicas?: number;
    /**
     * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
     * @type {string}
     * @memberof V1StatefulSetStatus
     */
    currentRevision?: string;
    /**
     * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    observedGeneration?: number;
    /**
     * readyReplicas is the number of pods created for this StatefulSet with a Ready Condition.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    readyReplicas?: number;
    /**
     * replicas is the number of Pods created by the StatefulSet controller.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    replicas: number;
    /**
     * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
     * @type {string}
     * @memberof V1StatefulSetStatus
     */
    updateRevision?: string;
    /**
     * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
     * @type {number}
     * @memberof V1StatefulSetStatus
     */
    updatedReplicas?: number;
}

export function V1StatefulSetStatusFromJSON(json: any): V1StatefulSetStatus {
    return V1StatefulSetStatusFromJSONTyped(json, false);
}

export function V1StatefulSetStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatefulSetStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableReplicas': !exists(json, 'availableReplicas') ? undefined : json['availableReplicas'],
        'collisionCount': !exists(json, 'collisionCount') ? undefined : json['collisionCount'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1StatefulSetConditionFromJSON)),
        'currentReplicas': !exists(json, 'currentReplicas') ? undefined : json['currentReplicas'],
        'currentRevision': !exists(json, 'currentRevision') ? undefined : json['currentRevision'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'readyReplicas': !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
        'replicas': json['replicas'],
        'updateRevision': !exists(json, 'updateRevision') ? undefined : json['updateRevision'],
        'updatedReplicas': !exists(json, 'updatedReplicas') ? undefined : json['updatedReplicas'],
    };
}

export function V1StatefulSetStatusToJSON(value?: V1StatefulSetStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableReplicas': value.availableReplicas,
        'collisionCount': value.collisionCount,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1StatefulSetConditionToJSON)),
        'currentReplicas': value.currentReplicas,
        'currentRevision': value.currentRevision,
        'observedGeneration': value.observedGeneration,
        'readyReplicas': value.readyReplicas,
        'replicas': value.replicas,
        'updateRevision': value.updateRevision,
        'updatedReplicas': value.updatedReplicas,
    };
}


