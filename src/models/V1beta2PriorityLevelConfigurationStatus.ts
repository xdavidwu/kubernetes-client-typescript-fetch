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
    V1beta2PriorityLevelConfigurationCondition,
    V1beta2PriorityLevelConfigurationConditionFromJSON,
    V1beta2PriorityLevelConfigurationConditionFromJSONTyped,
    V1beta2PriorityLevelConfigurationConditionToJSON,
} from './';

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 * @export
 * @interface V1beta2PriorityLevelConfigurationStatus
 */
export interface V1beta2PriorityLevelConfigurationStatus {
    /**
     * `conditions` is the current state of "request-priority".
     * @type {Array<V1beta2PriorityLevelConfigurationCondition>}
     * @memberof V1beta2PriorityLevelConfigurationStatus
     */
    conditions?: Array<V1beta2PriorityLevelConfigurationCondition>;
}

export function V1beta2PriorityLevelConfigurationStatusFromJSON(json: any): V1beta2PriorityLevelConfigurationStatus {
    return V1beta2PriorityLevelConfigurationStatusFromJSONTyped(json, false);
}

export function V1beta2PriorityLevelConfigurationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2PriorityLevelConfigurationStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1beta2PriorityLevelConfigurationConditionFromJSON)),
    };
}

export function V1beta2PriorityLevelConfigurationStatusToJSON(value?: V1beta2PriorityLevelConfigurationStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1beta2PriorityLevelConfigurationConditionToJSON)),
    };
}


