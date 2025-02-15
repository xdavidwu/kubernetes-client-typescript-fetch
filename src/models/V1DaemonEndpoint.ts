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
 * DaemonEndpoint contains information about a single Daemon endpoint.
 * @export
 * @interface V1DaemonEndpoint
 */
export interface V1DaemonEndpoint {
    /**
     * Port number of the given endpoint.
     * @type {number}
     * @memberof V1DaemonEndpoint
     */
    Port: number;
}

/**
 * Check if a given object implements the V1DaemonEndpoint interface.
 */
export function instanceOfV1DaemonEndpoint(value: object): value is V1DaemonEndpoint {
    if (!('Port' in value) || value['Port'] === undefined) return false;
    return true;
}

export function V1DaemonEndpointFromJSON(json: any): V1DaemonEndpoint {
    return V1DaemonEndpointFromJSONTyped(json, false);
}

export function V1DaemonEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaemonEndpoint {
    if (json == null) {
        return json;
    }
    return {
        
        'Port': json['Port'],
    };
}

export function V1DaemonEndpointToJSON(value?: V1DaemonEndpoint | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Port': value['Port'],
    };
}

