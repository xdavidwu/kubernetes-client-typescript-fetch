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
import type { V1beta2ExemptPriorityLevelConfiguration } from './V1beta2ExemptPriorityLevelConfiguration';
import {
    V1beta2ExemptPriorityLevelConfigurationFromJSON,
    V1beta2ExemptPriorityLevelConfigurationFromJSONTyped,
    V1beta2ExemptPriorityLevelConfigurationToJSON,
} from './V1beta2ExemptPriorityLevelConfiguration';
import type { V1beta2LimitedPriorityLevelConfiguration } from './V1beta2LimitedPriorityLevelConfiguration';
import {
    V1beta2LimitedPriorityLevelConfigurationFromJSON,
    V1beta2LimitedPriorityLevelConfigurationFromJSONTyped,
    V1beta2LimitedPriorityLevelConfigurationToJSON,
} from './V1beta2LimitedPriorityLevelConfiguration';

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 * @export
 * @interface V1beta2PriorityLevelConfigurationSpec
 */
export interface V1beta2PriorityLevelConfigurationSpec {
    /**
     * 
     * @type {V1beta2ExemptPriorityLevelConfiguration}
     * @memberof V1beta2PriorityLevelConfigurationSpec
     */
    exempt?: V1beta2ExemptPriorityLevelConfiguration;
    /**
     * 
     * @type {V1beta2LimitedPriorityLevelConfiguration}
     * @memberof V1beta2PriorityLevelConfigurationSpec
     */
    limited?: V1beta2LimitedPriorityLevelConfiguration;
    /**
     * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
     * @type {string}
     * @memberof V1beta2PriorityLevelConfigurationSpec
     */
    type: string;
}

/**
 * Check if a given object implements the V1beta2PriorityLevelConfigurationSpec interface.
 */
export function instanceOfV1beta2PriorityLevelConfigurationSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function V1beta2PriorityLevelConfigurationSpecFromJSON(json: any): V1beta2PriorityLevelConfigurationSpec {
    return V1beta2PriorityLevelConfigurationSpecFromJSONTyped(json, false);
}

export function V1beta2PriorityLevelConfigurationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2PriorityLevelConfigurationSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exempt': !exists(json, 'exempt') ? undefined : V1beta2ExemptPriorityLevelConfigurationFromJSON(json['exempt']),
        'limited': !exists(json, 'limited') ? undefined : V1beta2LimitedPriorityLevelConfigurationFromJSON(json['limited']),
        'type': json['type'],
    };
}

export function V1beta2PriorityLevelConfigurationSpecToJSON(value?: V1beta2PriorityLevelConfigurationSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exempt': V1beta2ExemptPriorityLevelConfigurationToJSON(value.exempt),
        'limited': V1beta2LimitedPriorityLevelConfigurationToJSON(value.limited),
        'type': value.type,
    };
}

