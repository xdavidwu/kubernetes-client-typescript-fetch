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
    V1beta1IDRange,
    V1beta1IDRangeFromJSON,
    V1beta1IDRangeFromJSONTyped,
    V1beta1IDRangeToJSON,
} from './';

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 * @export
 * @interface V1beta1RunAsGroupStrategyOptions
 */
export interface V1beta1RunAsGroupStrategyOptions {
    /**
     * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
     * @type {Array<V1beta1IDRange>}
     * @memberof V1beta1RunAsGroupStrategyOptions
     */
    ranges?: Array<V1beta1IDRange>;
    /**
     * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
     * @type {string}
     * @memberof V1beta1RunAsGroupStrategyOptions
     */
    rule: string;
}

export function V1beta1RunAsGroupStrategyOptionsFromJSON(json: any): V1beta1RunAsGroupStrategyOptions {
    return V1beta1RunAsGroupStrategyOptionsFromJSONTyped(json, false);
}

export function V1beta1RunAsGroupStrategyOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1RunAsGroupStrategyOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ranges': !exists(json, 'ranges') ? undefined : ((json['ranges'] as Array<any>).map(V1beta1IDRangeFromJSON)),
        'rule': json['rule'],
    };
}

export function V1beta1RunAsGroupStrategyOptionsToJSON(value?: V1beta1RunAsGroupStrategyOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ranges': value.ranges === undefined ? undefined : ((value.ranges as Array<any>).map(V1beta1IDRangeToJSON)),
        'rule': value.rule,
    };
}


