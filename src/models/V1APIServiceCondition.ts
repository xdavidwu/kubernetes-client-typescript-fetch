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
 * APIServiceCondition describes the state of an APIService at a particular point
 * @export
 * @interface V1APIServiceCondition
 */
export interface V1APIServiceCondition {
    /**
     * Last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1APIServiceCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1APIServiceCondition
     */
    message?: string;
    /**
     * Unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1APIServiceCondition
     */
    reason?: string;
    /**
     * Status is the status of the condition. Can be True, False, Unknown.
     * @type {string}
     * @memberof V1APIServiceCondition
     */
    status: string;
    /**
     * Type is the type of the condition.
     * @type {string}
     * @memberof V1APIServiceCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1APIServiceCondition interface.
 */
export function instanceOfV1APIServiceCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1APIServiceConditionFromJSON(json: any): V1APIServiceCondition {
    return V1APIServiceConditionFromJSONTyped(json, false);
}

export function V1APIServiceConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1APIServiceCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1APIServiceConditionToJSON(value?: V1APIServiceCondition | null): any {
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

