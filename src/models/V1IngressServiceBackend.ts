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
import type { V1ServiceBackendPort } from './V1ServiceBackendPort';
import {
    V1ServiceBackendPortFromJSON,
    V1ServiceBackendPortFromJSONTyped,
    V1ServiceBackendPortToJSON,
} from './V1ServiceBackendPort';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 * @export
 * @interface V1IngressServiceBackend
 */
export interface V1IngressServiceBackend {
    /**
     * name is the referenced service. The service must exist in the same namespace as the Ingress object.
     * @type {string}
     * @memberof V1IngressServiceBackend
     */
    name: string;
    /**
     * 
     * @type {V1ServiceBackendPort}
     * @memberof V1IngressServiceBackend
     */
    port?: V1ServiceBackendPort;
}

/**
 * Check if a given object implements the V1IngressServiceBackend interface.
 */
export function instanceOfV1IngressServiceBackend(value: object): value is V1IngressServiceBackend {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1IngressServiceBackendFromJSON(json: any): V1IngressServiceBackend {
    return V1IngressServiceBackendFromJSONTyped(json, false);
}

export function V1IngressServiceBackendFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressServiceBackend {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'port': json['port'] == null ? undefined : V1ServiceBackendPortFromJSON(json['port']),
    };
}

export function V1IngressServiceBackendToJSON(value?: V1IngressServiceBackend | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'port': V1ServiceBackendPortToJSON(value['port']),
    };
}

