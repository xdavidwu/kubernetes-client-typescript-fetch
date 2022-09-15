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
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 * @export
 * @interface V1beta1SupplementalGroupsStrategyOptions
 */
export interface V1beta1SupplementalGroupsStrategyOptions {
    /**
     * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
     * @type {Array<V1beta1IDRange>}
     * @memberof V1beta1SupplementalGroupsStrategyOptions
     */
    ranges?: Array<V1beta1IDRange>;
    /**
     * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
     * @type {string}
     * @memberof V1beta1SupplementalGroupsStrategyOptions
     */
    rule?: string;
}

export function V1beta1SupplementalGroupsStrategyOptionsFromJSON(json: any): V1beta1SupplementalGroupsStrategyOptions {
    return V1beta1SupplementalGroupsStrategyOptionsFromJSONTyped(json, false);
}

export function V1beta1SupplementalGroupsStrategyOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1SupplementalGroupsStrategyOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ranges': !exists(json, 'ranges') ? undefined : ((json['ranges'] as Array<any>).map(V1beta1IDRangeFromJSON)),
        'rule': !exists(json, 'rule') ? undefined : json['rule'],
    };
}

export function V1beta1SupplementalGroupsStrategyOptionsToJSON(value?: V1beta1SupplementalGroupsStrategyOptions | null): any {
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


