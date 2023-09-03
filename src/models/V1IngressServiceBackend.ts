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
export function instanceOfV1IngressServiceBackend(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1IngressServiceBackendFromJSON(json: any): V1IngressServiceBackend {
    return V1IngressServiceBackendFromJSONTyped(json, false);
}

export function V1IngressServiceBackendFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressServiceBackend {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'port': !exists(json, 'port') ? undefined : V1ServiceBackendPortFromJSON(json['port']),
    };
}

export function V1IngressServiceBackendToJSON(value?: V1IngressServiceBackend | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'port': V1ServiceBackendPortToJSON(value.port),
    };
}

