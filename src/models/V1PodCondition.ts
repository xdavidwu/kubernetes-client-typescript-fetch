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
/**
 * PodCondition contains details for the current condition of this pod.
 * @export
 * @interface V1PodCondition
 */
export interface V1PodCondition {
    /**
     * Last time we probed the condition.
     * @type {Date}
     * @memberof V1PodCondition
     */
    lastProbeTime?: Date;
    /**
     * Last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1PodCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1PodCondition
     */
    message?: string;
    /**
     * Unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1PodCondition
     */
    reason?: string;
    /**
     * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {string}
     * @memberof V1PodCondition
     */
    status: string;
    /**
     * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {string}
     * @memberof V1PodCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1PodCondition interface.
 */
export function instanceOfV1PodCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1PodConditionFromJSON(json: any): V1PodCondition {
    return V1PodConditionFromJSONTyped(json, false);
}

export function V1PodConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastProbeTime': !exists(json, 'lastProbeTime') ? undefined : (new Date(json['lastProbeTime'])),
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1PodConditionToJSON(value?: V1PodCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastProbeTime': value.lastProbeTime === undefined ? undefined : (value.lastProbeTime.toISOString()),
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

