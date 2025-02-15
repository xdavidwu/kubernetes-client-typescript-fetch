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
import type { V1DeploymentCondition } from './V1DeploymentCondition';
import {
    V1DeploymentConditionFromJSON,
    V1DeploymentConditionFromJSONTyped,
    V1DeploymentConditionToJSON,
} from './V1DeploymentCondition';

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 * @export
 * @interface V1DeploymentStatus
 */
export interface V1DeploymentStatus {
    /**
     * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    availableReplicas?: number;
    /**
     * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    collisionCount?: number;
    /**
     * Represents the latest available observations of a deployment's current state.
     * @type {Array<V1DeploymentCondition>}
     * @memberof V1DeploymentStatus
     */
    conditions?: Array<V1DeploymentCondition>;
    /**
     * The generation observed by the deployment controller.
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    observedGeneration?: number;
    /**
     * readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    readyReplicas?: number;
    /**
     * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    replicas?: number;
    /**
     * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    unavailableReplicas?: number;
    /**
     * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
     * @type {number}
     * @memberof V1DeploymentStatus
     */
    updatedReplicas?: number;
}

/**
 * Check if a given object implements the V1DeploymentStatus interface.
 */
export function instanceOfV1DeploymentStatus(value: object): value is V1DeploymentStatus {
    return true;
}

export function V1DeploymentStatusFromJSON(json: any): V1DeploymentStatus {
    return V1DeploymentStatusFromJSONTyped(json, false);
}

export function V1DeploymentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'availableReplicas': json['availableReplicas'] == null ? undefined : json['availableReplicas'],
        'collisionCount': json['collisionCount'] == null ? undefined : json['collisionCount'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1DeploymentConditionFromJSON)),
        'observedGeneration': json['observedGeneration'] == null ? undefined : json['observedGeneration'],
        'readyReplicas': json['readyReplicas'] == null ? undefined : json['readyReplicas'],
        'replicas': json['replicas'] == null ? undefined : json['replicas'],
        'unavailableReplicas': json['unavailableReplicas'] == null ? undefined : json['unavailableReplicas'],
        'updatedReplicas': json['updatedReplicas'] == null ? undefined : json['updatedReplicas'],
    };
}

export function V1DeploymentStatusToJSON(value?: V1DeploymentStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'availableReplicas': value['availableReplicas'],
        'collisionCount': value['collisionCount'],
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1DeploymentConditionToJSON)),
        'observedGeneration': value['observedGeneration'],
        'readyReplicas': value['readyReplicas'],
        'replicas': value['replicas'],
        'unavailableReplicas': value['unavailableReplicas'],
        'updatedReplicas': value['updatedReplicas'],
    };
}

