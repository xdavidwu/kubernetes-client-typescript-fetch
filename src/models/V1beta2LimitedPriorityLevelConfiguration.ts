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
import type { V1beta2LimitResponse } from './V1beta2LimitResponse';
import {
    V1beta2LimitResponseFromJSON,
    V1beta2LimitResponseFromJSONTyped,
    V1beta2LimitResponseToJSON,
} from './V1beta2LimitResponse';

/**
 * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
 *   - How are requests for this priority level limited?
 *   - What should be done with requests that exceed the limit?
 * @export
 * @interface V1beta2LimitedPriorityLevelConfiguration
 */
export interface V1beta2LimitedPriorityLevelConfiguration {
    /**
     * `assuredConcurrencyShares` (ACS) configures the execution limit, which is a limit on the number of requests of this priority level that may be exeucting at a given time.  ACS must be a positive number. The server's concurrency limit (SCL) is divided among the concurrency-controlled priority levels in proportion to their assured concurrency shares. This produces the assured concurrency value (ACV) --- the number of requests that may be executing at a time --- for each such priority level:
     * 
     *             ACV(l) = ceil( SCL * ACS(l) / ( sum[priority levels k] ACS(k) ) )
     * 
     * bigger numbers of ACS mean more reserved concurrent requests (at the expense of every other PL). This field has a default value of 30.
     * @type {number}
     * @memberof V1beta2LimitedPriorityLevelConfiguration
     */
    assuredConcurrencyShares?: number;
    /**
     * `borrowingLimitPercent`, if present, configures a limit on how many seats this priority level can borrow from other priority levels. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.
     * 
     * BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )
     * 
     * The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.
     * @type {number}
     * @memberof V1beta2LimitedPriorityLevelConfiguration
     */
    borrowingLimitPercent?: number;
    /**
     * `lendablePercent` prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.
     * 
     * LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
     * @type {number}
     * @memberof V1beta2LimitedPriorityLevelConfiguration
     */
    lendablePercent?: number;
    /**
     * 
     * @type {V1beta2LimitResponse}
     * @memberof V1beta2LimitedPriorityLevelConfiguration
     */
    limitResponse?: V1beta2LimitResponse;
}

/**
 * Check if a given object implements the V1beta2LimitedPriorityLevelConfiguration interface.
 */
export function instanceOfV1beta2LimitedPriorityLevelConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta2LimitedPriorityLevelConfigurationFromJSON(json: any): V1beta2LimitedPriorityLevelConfiguration {
    return V1beta2LimitedPriorityLevelConfigurationFromJSONTyped(json, false);
}

export function V1beta2LimitedPriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta2LimitedPriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assuredConcurrencyShares': !exists(json, 'assuredConcurrencyShares') ? undefined : json['assuredConcurrencyShares'],
        'borrowingLimitPercent': !exists(json, 'borrowingLimitPercent') ? undefined : json['borrowingLimitPercent'],
        'lendablePercent': !exists(json, 'lendablePercent') ? undefined : json['lendablePercent'],
        'limitResponse': !exists(json, 'limitResponse') ? undefined : V1beta2LimitResponseFromJSON(json['limitResponse']),
    };
}

export function V1beta2LimitedPriorityLevelConfigurationToJSON(value?: V1beta2LimitedPriorityLevelConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assuredConcurrencyShares': value.assuredConcurrencyShares,
        'borrowingLimitPercent': value.borrowingLimitPercent,
        'lendablePercent': value.lendablePercent,
        'limitResponse': V1beta2LimitResponseToJSON(value.limitResponse),
    };
}

