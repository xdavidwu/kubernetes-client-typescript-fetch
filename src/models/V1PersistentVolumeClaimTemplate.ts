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
import type { V1PersistentVolumeClaimSpec } from './V1PersistentVolumeClaimSpec';
import {
    V1PersistentVolumeClaimSpecFromJSON,
    V1PersistentVolumeClaimSpecFromJSONTyped,
    V1PersistentVolumeClaimSpecToJSON,
} from './V1PersistentVolumeClaimSpec';

/**
 * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
 * @export
 * @interface V1PersistentVolumeClaimTemplate
 */
export interface V1PersistentVolumeClaimTemplate {
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1PersistentVolumeClaimTemplate
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1PersistentVolumeClaimSpec}
     * @memberof V1PersistentVolumeClaimTemplate
     */
    spec: V1PersistentVolumeClaimSpec;
}

/**
 * Check if a given object implements the V1PersistentVolumeClaimTemplate interface.
 */
export function instanceOfV1PersistentVolumeClaimTemplate(value: object): value is V1PersistentVolumeClaimTemplate {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1PersistentVolumeClaimTemplateFromJSON(json: any): V1PersistentVolumeClaimTemplate {
    return V1PersistentVolumeClaimTemplateFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimTemplate {
    if (json == null) {
        return json;
    }
    return {
        
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1PersistentVolumeClaimSpecFromJSON(json['spec']),
    };
}

export function V1PersistentVolumeClaimTemplateToJSON(value?: V1PersistentVolumeClaimTemplate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1PersistentVolumeClaimSpecToJSON(value['spec']),
    };
}

