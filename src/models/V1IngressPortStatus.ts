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
 * IngressPortStatus represents the error condition of a service port
 * @export
 * @interface V1IngressPortStatus
 */
export interface V1IngressPortStatus {
    /**
     * error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
     *   CamelCase names
     * - cloud provider specific error values must have names that comply with the
     *   format foo.example.com/CamelCase.
     * @type {string}
     * @memberof V1IngressPortStatus
     */
    error?: string;
    /**
     * port is the port number of the ingress port.
     * @type {number}
     * @memberof V1IngressPortStatus
     */
    port: number;
    /**
     * protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"
     * @type {string}
     * @memberof V1IngressPortStatus
     */
    protocol: string;
}

/**
 * Check if a given object implements the V1IngressPortStatus interface.
 */
export function instanceOfV1IngressPortStatus(value: object): value is V1IngressPortStatus {
    if (!('port' in value) || value['port'] === undefined) return false;
    if (!('protocol' in value) || value['protocol'] === undefined) return false;
    return true;
}

export function V1IngressPortStatusFromJSON(json: any): V1IngressPortStatus {
    return V1IngressPortStatusFromJSONTyped(json, false);
}

export function V1IngressPortStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressPortStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
        'port': json['port'],
        'protocol': json['protocol'],
    };
}

export function V1IngressPortStatusToJSON(value?: V1IngressPortStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
        'port': value['port'],
        'protocol': value['protocol'],
    };
}

