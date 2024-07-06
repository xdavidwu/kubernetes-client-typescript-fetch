/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 * @export
 * @interface V1ResourceClaim
 */
export interface V1ResourceClaim {
    /**
     * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
     * @type {string}
     * @memberof V1ResourceClaim
     */
    name: string;
}

/**
 * Check if a given object implements the V1ResourceClaim interface.
 */
export function instanceOfV1ResourceClaim(value: object): value is V1ResourceClaim {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1ResourceClaimFromJSON(json: any): V1ResourceClaim {
    return V1ResourceClaimFromJSONTyped(json, false);
}

export function V1ResourceClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceClaim {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1ResourceClaimToJSON(value?: V1ResourceClaim | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

