/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface V1LeaseSpec
 */
export interface V1LeaseSpec {
    /**
     * MicroTime is version of Time with microsecond level precision.
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
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime.
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
     * MicroTime is version of Time with microsecond level precision.
     * @type {Date}
     * @memberof V1LeaseSpec
     */
    renewTime?: Date;
}

/**
 * Check if a given object implements the V1LeaseSpec interface.
 */
export function instanceOfV1LeaseSpec(value: object): value is V1LeaseSpec {
    return true;
}

export function V1LeaseSpecFromJSON(json: any): V1LeaseSpec {
    return V1LeaseSpecFromJSONTyped(json, false);
}

export function V1LeaseSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LeaseSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'acquireTime': json['acquireTime'] == null ? undefined : (new Date(json['acquireTime'])),
        'holderIdentity': json['holderIdentity'] == null ? undefined : json['holderIdentity'],
        'leaseDurationSeconds': json['leaseDurationSeconds'] == null ? undefined : json['leaseDurationSeconds'],
        'leaseTransitions': json['leaseTransitions'] == null ? undefined : json['leaseTransitions'],
        'renewTime': json['renewTime'] == null ? undefined : (new Date(json['renewTime'])),
    };
}

export function V1LeaseSpecToJSON(value?: V1LeaseSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'acquireTime': value['acquireTime'] == null ? undefined : ((value['acquireTime']).toISOString()),
        'holderIdentity': value['holderIdentity'],
        'leaseDurationSeconds': value['leaseDurationSeconds'],
        'leaseTransitions': value['leaseTransitions'],
        'renewTime': value['renewTime'] == null ? undefined : ((value['renewTime']).toISOString()),
    };
}

