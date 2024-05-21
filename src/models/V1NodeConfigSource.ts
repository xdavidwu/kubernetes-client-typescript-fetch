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
import type { V1ConfigMapNodeConfigSource } from './V1ConfigMapNodeConfigSource';
import {
    V1ConfigMapNodeConfigSourceFromJSON,
    V1ConfigMapNodeConfigSourceFromJSONTyped,
    V1ConfigMapNodeConfigSourceToJSON,
} from './V1ConfigMapNodeConfigSource';

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 * @export
 * @interface V1NodeConfigSource
 */
export interface V1NodeConfigSource {
    /**
     * 
     * @type {V1ConfigMapNodeConfigSource}
     * @memberof V1NodeConfigSource
     */
    configMap?: V1ConfigMapNodeConfigSource;
}

/**
 * Check if a given object implements the V1NodeConfigSource interface.
 */
export function instanceOfV1NodeConfigSource(value: object): value is V1NodeConfigSource {
    return true;
}

export function V1NodeConfigSourceFromJSON(json: any): V1NodeConfigSource {
    return V1NodeConfigSourceFromJSONTyped(json, false);
}

export function V1NodeConfigSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeConfigSource {
    if (json == null) {
        return json;
    }
    return {
        
        'configMap': json['configMap'] == null ? undefined : V1ConfigMapNodeConfigSourceFromJSON(json['configMap']),
    };
}

export function V1NodeConfigSourceToJSON(value?: V1NodeConfigSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'configMap': V1ConfigMapNodeConfigSourceToJSON(value['configMap']),
    };
}

