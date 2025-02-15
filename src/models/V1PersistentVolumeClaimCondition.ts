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
/**
 * PersistentVolumeClaimCondition contains details about state of pvc
 * @export
 * @interface V1PersistentVolumeClaimCondition
 */
export interface V1PersistentVolumeClaimCondition {
    /**
     * lastProbeTime is the time we probed the condition.
     * @type {Date}
     * @memberof V1PersistentVolumeClaimCondition
     */
    lastProbeTime?: Date;
    /**
     * lastTransitionTime is the time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1PersistentVolumeClaimCondition
     */
    lastTransitionTime?: Date;
    /**
     * message is the human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1PersistentVolumeClaimCondition
     */
    message?: string;
    /**
     * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized.
     * @type {string}
     * @memberof V1PersistentVolumeClaimCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PersistentVolumeClaimCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1PersistentVolumeClaimCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1PersistentVolumeClaimCondition interface.
 */
export function instanceOfV1PersistentVolumeClaimCondition(value: object): value is V1PersistentVolumeClaimCondition {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1PersistentVolumeClaimConditionFromJSON(json: any): V1PersistentVolumeClaimCondition {
    return V1PersistentVolumeClaimConditionFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'lastProbeTime': json['lastProbeTime'] == null ? undefined : (new Date(json['lastProbeTime'])),
        'lastTransitionTime': json['lastTransitionTime'] == null ? undefined : (new Date(json['lastTransitionTime'])),
        'message': json['message'] == null ? undefined : json['message'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1PersistentVolumeClaimConditionToJSON(value?: V1PersistentVolumeClaimCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lastProbeTime': value['lastProbeTime'] == null ? undefined : ((value['lastProbeTime']).toISOString()),
        'lastTransitionTime': value['lastTransitionTime'] == null ? undefined : ((value['lastTransitionTime']).toISOString()),
        'message': value['message'],
        'reason': value['reason'],
        'status': value['status'],
        'type': value['type'],
    };
}

