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
import type { V1alpha2ResourceClaimParametersReference } from './V1alpha2ResourceClaimParametersReference';
import {
    V1alpha2ResourceClaimParametersReferenceFromJSON,
    V1alpha2ResourceClaimParametersReferenceFromJSONTyped,
    V1alpha2ResourceClaimParametersReferenceToJSON,
} from './V1alpha2ResourceClaimParametersReference';

/**
 * ResourceClaimSpec defines how a resource is to be allocated.
 * @export
 * @interface V1alpha2ResourceClaimSpec
 */
export interface V1alpha2ResourceClaimSpec {
    /**
     * Allocation can start immediately or when a Pod wants to use the resource. "WaitForFirstConsumer" is the default.
     * @type {string}
     * @memberof V1alpha2ResourceClaimSpec
     */
    allocationMode?: string;
    /**
     * 
     * @type {V1alpha2ResourceClaimParametersReference}
     * @memberof V1alpha2ResourceClaimSpec
     */
    parametersRef?: V1alpha2ResourceClaimParametersReference;
    /**
     * ResourceClassName references the driver and additional parameters via the name of a ResourceClass that was created as part of the driver deployment.
     * @type {string}
     * @memberof V1alpha2ResourceClaimSpec
     */
    resourceClassName: string;
}

/**
 * Check if a given object implements the V1alpha2ResourceClaimSpec interface.
 */
export function instanceOfV1alpha2ResourceClaimSpec(value: object): value is V1alpha2ResourceClaimSpec {
    if (!('resourceClassName' in value) || value['resourceClassName'] === undefined) return false;
    return true;
}

export function V1alpha2ResourceClaimSpecFromJSON(json: any): V1alpha2ResourceClaimSpec {
    return V1alpha2ResourceClaimSpecFromJSONTyped(json, false);
}

export function V1alpha2ResourceClaimSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceClaimSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'allocationMode': json['allocationMode'] == null ? undefined : json['allocationMode'],
        'parametersRef': json['parametersRef'] == null ? undefined : V1alpha2ResourceClaimParametersReferenceFromJSON(json['parametersRef']),
        'resourceClassName': json['resourceClassName'],
    };
}

export function V1alpha2ResourceClaimSpecToJSON(value?: V1alpha2ResourceClaimSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allocationMode': value['allocationMode'],
        'parametersRef': V1alpha2ResourceClaimParametersReferenceToJSON(value['parametersRef']),
        'resourceClassName': value['resourceClassName'],
    };
}

