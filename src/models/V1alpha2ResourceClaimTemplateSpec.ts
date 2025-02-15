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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1alpha2ResourceClaimSpec } from './V1alpha2ResourceClaimSpec';
import {
    V1alpha2ResourceClaimSpecFromJSON,
    V1alpha2ResourceClaimSpecFromJSONTyped,
    V1alpha2ResourceClaimSpecToJSON,
} from './V1alpha2ResourceClaimSpec';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 * @export
 * @interface V1alpha2ResourceClaimTemplateSpec
 */
export interface V1alpha2ResourceClaimTemplateSpec {
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha2ResourceClaimTemplateSpec
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha2ResourceClaimSpec}
     * @memberof V1alpha2ResourceClaimTemplateSpec
     */
    spec: V1alpha2ResourceClaimSpec;
}

/**
 * Check if a given object implements the V1alpha2ResourceClaimTemplateSpec interface.
 */
export function instanceOfV1alpha2ResourceClaimTemplateSpec(value: object): value is V1alpha2ResourceClaimTemplateSpec {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1alpha2ResourceClaimTemplateSpecFromJSON(json: any): V1alpha2ResourceClaimTemplateSpec {
    return V1alpha2ResourceClaimTemplateSpecFromJSONTyped(json, false);
}

export function V1alpha2ResourceClaimTemplateSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceClaimTemplateSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha2ResourceClaimSpecFromJSON(json['spec']),
    };
}

export function V1alpha2ResourceClaimTemplateSpecToJSON(value?: V1alpha2ResourceClaimTemplateSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1alpha2ResourceClaimSpecToJSON(value['spec']),
    };
}

