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
 * FlowSchemaCondition describes conditions for a FlowSchema.
 * @export
 * @interface V1FlowSchemaCondition
 */
export interface V1FlowSchemaCondition {
    /**
     * `lastTransitionTime` is the last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1FlowSchemaCondition
     */
    lastTransitionTime?: Date;
    /**
     * `message` is a human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1FlowSchemaCondition
     */
    message?: string;
    /**
     * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1FlowSchemaCondition
     */
    reason?: string;
    /**
     * `status` is the status of the condition. Can be True, False, Unknown. Required.
     * @type {string}
     * @memberof V1FlowSchemaCondition
     */
    status?: string;
    /**
     * `type` is the type of the condition. Required.
     * @type {string}
     * @memberof V1FlowSchemaCondition
     */
    type?: string;
}

/**
 * Check if a given object implements the V1FlowSchemaCondition interface.
 */
export function instanceOfV1FlowSchemaCondition(value: object): value is V1FlowSchemaCondition {
    return true;
}

export function V1FlowSchemaConditionFromJSON(json: any): V1FlowSchemaCondition {
    return V1FlowSchemaConditionFromJSONTyped(json, false);
}

export function V1FlowSchemaConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FlowSchemaCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'lastTransitionTime': json['lastTransitionTime'] == null ? undefined : (new Date(json['lastTransitionTime'])),
        'message': json['message'] == null ? undefined : json['message'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'] == null ? undefined : json['status'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function V1FlowSchemaConditionToJSON(value?: V1FlowSchemaCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lastTransitionTime': value['lastTransitionTime'] == null ? undefined : ((value['lastTransitionTime']).toISOString()),
        'message': value['message'],
        'reason': value['reason'],
        'status': value['status'],
        'type': value['type'],
    };
}

