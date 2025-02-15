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
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 * @export
 * @interface V1ServerAddressByClientCIDR
 */
export interface V1ServerAddressByClientCIDR {
    /**
     * The CIDR with which clients can match their IP to figure out the server address that they should use.
     * @type {string}
     * @memberof V1ServerAddressByClientCIDR
     */
    clientCIDR: string;
    /**
     * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
     * @type {string}
     * @memberof V1ServerAddressByClientCIDR
     */
    serverAddress: string;
}

/**
 * Check if a given object implements the V1ServerAddressByClientCIDR interface.
 */
export function instanceOfV1ServerAddressByClientCIDR(value: object): value is V1ServerAddressByClientCIDR {
    if (!('clientCIDR' in value) || value['clientCIDR'] === undefined) return false;
    if (!('serverAddress' in value) || value['serverAddress'] === undefined) return false;
    return true;
}

export function V1ServerAddressByClientCIDRFromJSON(json: any): V1ServerAddressByClientCIDR {
    return V1ServerAddressByClientCIDRFromJSONTyped(json, false);
}

export function V1ServerAddressByClientCIDRFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ServerAddressByClientCIDR {
    if (json == null) {
        return json;
    }
    return {
        
        'clientCIDR': json['clientCIDR'],
        'serverAddress': json['serverAddress'],
    };
}

export function V1ServerAddressByClientCIDRToJSON(value?: V1ServerAddressByClientCIDR | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'clientCIDR': value['clientCIDR'],
        'serverAddress': value['serverAddress'],
    };
}

