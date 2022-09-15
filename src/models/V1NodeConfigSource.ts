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
    V1ConfigMapNodeConfigSource,
    V1ConfigMapNodeConfigSourceFromJSON,
    V1ConfigMapNodeConfigSourceFromJSONTyped,
    V1ConfigMapNodeConfigSourceToJSON,
} from './';

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

export function V1NodeConfigSourceFromJSON(json: any): V1NodeConfigSource {
    return V1NodeConfigSourceFromJSONTyped(json, false);
}

export function V1NodeConfigSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeConfigSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configMap': !exists(json, 'configMap') ? undefined : V1ConfigMapNodeConfigSourceFromJSON(json['configMap']),
    };
}

export function V1NodeConfigSourceToJSON(value?: V1NodeConfigSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configMap': V1ConfigMapNodeConfigSourceToJSON(value.configMap),
    };
}


