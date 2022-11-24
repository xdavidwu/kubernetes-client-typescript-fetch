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
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface V1LeaseSpec
 */
export interface V1LeaseSpec {
    /**
     * acquireTime is a time when the current lease was acquired.
     * @type {Date}
     * @memberof V1LeaseSpec
     */
    acquireTime?: Date;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     * @type {string}
     * @memberof V1LeaseSpec
     */
    holderIdentity?: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
     * @type {number}
     * @memberof V1LeaseSpec
     */
    leaseDurationSeconds?: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     * @type {number}
     * @memberof V1LeaseSpec
     */
    leaseTransitions?: number;
    /**
     * renewTime is a time when the current holder of a lease has last updated the lease.
     * @type {Date}
     * @memberof V1LeaseSpec
     */
    renewTime?: Date;
}

/**
 * Check if a given object implements the V1LeaseSpec interface.
 */
export function instanceOfV1LeaseSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1LeaseSpecFromJSON(json: any): V1LeaseSpec {
    return V1LeaseSpecFromJSONTyped(json, false);
}

export function V1LeaseSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LeaseSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acquireTime': !exists(json, 'acquireTime') ? undefined : (new Date(json['acquireTime'])),
        'holderIdentity': !exists(json, 'holderIdentity') ? undefined : json['holderIdentity'],
        'leaseDurationSeconds': !exists(json, 'leaseDurationSeconds') ? undefined : json['leaseDurationSeconds'],
        'leaseTransitions': !exists(json, 'leaseTransitions') ? undefined : json['leaseTransitions'],
        'renewTime': !exists(json, 'renewTime') ? undefined : (new Date(json['renewTime'])),
    };
}

export function V1LeaseSpecToJSON(value?: V1LeaseSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acquireTime': value.acquireTime === undefined ? undefined : (value.acquireTime.toISOString()),
        'holderIdentity': value.holderIdentity,
        'leaseDurationSeconds': value.leaseDurationSeconds,
        'leaseTransitions': value.leaseTransitions,
        'renewTime': value.renewTime === undefined ? undefined : (value.renewTime.toISOString()),
    };
}

