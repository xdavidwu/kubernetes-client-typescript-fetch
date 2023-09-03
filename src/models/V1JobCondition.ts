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
 * JobCondition describes current state of a job.
 * @export
 * @interface V1JobCondition
 */
export interface V1JobCondition {
    /**
     * Last time the condition was checked.
     * @type {Date}
     * @memberof V1JobCondition
     */
    lastProbeTime?: Date;
    /**
     * Last time the condition transit from one status to another.
     * @type {Date}
     * @memberof V1JobCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human readable message indicating details about last transition.
     * @type {string}
     * @memberof V1JobCondition
     */
    message?: string;
    /**
     * (brief) reason for the condition's last transition.
     * @type {string}
     * @memberof V1JobCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1JobCondition
     */
    status: string;
    /**
     * Type of job condition, Complete or Failed.
     * @type {string}
     * @memberof V1JobCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1JobCondition interface.
 */
export function instanceOfV1JobCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1JobConditionFromJSON(json: any): V1JobCondition {
    return V1JobConditionFromJSONTyped(json, false);
}

export function V1JobConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JobCondition {
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

export function V1JobConditionToJSON(value?: V1JobCondition | null): any {
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

