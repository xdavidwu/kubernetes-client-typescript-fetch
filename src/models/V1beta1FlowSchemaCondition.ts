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
/**
 * FlowSchemaCondition describes conditions for a FlowSchema.
 * @export
 * @interface V1beta1FlowSchemaCondition
 */
export interface V1beta1FlowSchemaCondition {
    /**
     * `lastTransitionTime` is the last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1beta1FlowSchemaCondition
     */
    lastTransitionTime?: Date;
    /**
     * `message` is a human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1beta1FlowSchemaCondition
     */
    message?: string;
    /**
     * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1beta1FlowSchemaCondition
     */
    reason?: string;
    /**
     * `status` is the status of the condition. Can be True, False, Unknown. Required.
     * @type {string}
     * @memberof V1beta1FlowSchemaCondition
     */
    status?: string;
    /**
     * `type` is the type of the condition. Required.
     * @type {string}
     * @memberof V1beta1FlowSchemaCondition
     */
    type?: string;
}

/**
 * Check if a given object implements the V1beta1FlowSchemaCondition interface.
 */
export function instanceOfV1beta1FlowSchemaCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1FlowSchemaConditionFromJSON(json: any): V1beta1FlowSchemaCondition {
    return V1beta1FlowSchemaConditionFromJSONTyped(json, false);
}

export function V1beta1FlowSchemaConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1FlowSchemaCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function V1beta1FlowSchemaConditionToJSON(value?: V1beta1FlowSchemaCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

