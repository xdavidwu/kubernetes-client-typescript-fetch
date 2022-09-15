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
/**
 * Condition contains details for one aspect of the current state of this API Resource.
 * @export
 * @interface V1Condition
 */
export interface V1Condition {
    /**
     * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
     * @type {Date}
     * @memberof V1Condition
     */
    lastTransitionTime: Date;
    /**
     * message is a human readable message indicating details about the transition. This may be an empty string.
     * @type {string}
     * @memberof V1Condition
     */
    message: string;
    /**
     * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
     * @type {number}
     * @memberof V1Condition
     */
    observedGeneration?: number;
    /**
     * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
     * @type {string}
     * @memberof V1Condition
     */
    reason: string;
    /**
     * status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1Condition
     */
    status: string;
    /**
     * type of condition in CamelCase or in foo.example.com/CamelCase.
     * @type {string}
     * @memberof V1Condition
     */
    type: string;
}

export function V1ConditionFromJSON(json: any): V1Condition {
    return V1ConditionFromJSONTyped(json, false);
}

export function V1ConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Condition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': (new Date(json['lastTransitionTime'])),
        'message': json['message'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'reason': json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1ConditionToJSON(value?: V1Condition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'observedGeneration': value.observedGeneration,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


