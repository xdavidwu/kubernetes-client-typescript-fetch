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
 * NamespaceCondition contains details about state of namespace.
 * @export
 * @interface V1NamespaceCondition
 */
export interface V1NamespaceCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof V1NamespaceCondition
     */
    lastTransitionTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1NamespaceCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1NamespaceCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1NamespaceCondition
     */
    status: string;
    /**
     * Type of namespace controller condition.
     * @type {string}
     * @memberof V1NamespaceCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1NamespaceCondition interface.
 */
export function instanceOfV1NamespaceCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1NamespaceConditionFromJSON(json: any): V1NamespaceCondition {
    return V1NamespaceConditionFromJSONTyped(json, false);
}

export function V1NamespaceConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NamespaceCondition {
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

export function V1NamespaceConditionToJSON(value?: V1NamespaceCondition | null): any {
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

