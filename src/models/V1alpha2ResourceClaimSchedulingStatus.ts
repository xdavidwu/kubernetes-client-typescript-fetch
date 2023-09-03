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
/**
 * ResourceClaimSchedulingStatus contains information about one particular ResourceClaim with "WaitForFirstConsumer" allocation mode.
 * @export
 * @interface V1alpha2ResourceClaimSchedulingStatus
 */
export interface V1alpha2ResourceClaimSchedulingStatus {
    /**
     * Name matches the pod.spec.resourceClaims[*].Name field.
     * @type {string}
     * @memberof V1alpha2ResourceClaimSchedulingStatus
     */
    name?: string;
    /**
     * UnsuitableNodes lists nodes that the ResourceClaim cannot be allocated for.
     * 
     * The size of this field is limited to 128, the same as for PodSchedulingSpec.PotentialNodes. This may get increased in the future, but not reduced.
     * @type {Array<string>}
     * @memberof V1alpha2ResourceClaimSchedulingStatus
     */
    unsuitableNodes?: Array<string>;
}

/**
 * Check if a given object implements the V1alpha2ResourceClaimSchedulingStatus interface.
 */
export function instanceOfV1alpha2ResourceClaimSchedulingStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha2ResourceClaimSchedulingStatusFromJSON(json: any): V1alpha2ResourceClaimSchedulingStatus {
    return V1alpha2ResourceClaimSchedulingStatusFromJSONTyped(json, false);
}

export function V1alpha2ResourceClaimSchedulingStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceClaimSchedulingStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'unsuitableNodes': !exists(json, 'unsuitableNodes') ? undefined : json['unsuitableNodes'],
    };
}

export function V1alpha2ResourceClaimSchedulingStatusToJSON(value?: V1alpha2ResourceClaimSchedulingStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'unsuitableNodes': value.unsuitableNodes,
    };
}

