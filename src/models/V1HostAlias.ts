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
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 * @export
 * @interface V1HostAlias
 */
export interface V1HostAlias {
    /**
     * Hostnames for the above IP address.
     * @type {Array<string>}
     * @memberof V1HostAlias
     */
    hostnames?: Array<string>;
    /**
     * IP address of the host file entry.
     * @type {string}
     * @memberof V1HostAlias
     */
    ip: string;
}

/**
 * Check if a given object implements the V1HostAlias interface.
 */
export function instanceOfV1HostAlias(value: object): value is V1HostAlias {
    if (!('ip' in value) || value['ip'] === undefined) return false;
    return true;
}

export function V1HostAliasFromJSON(json: any): V1HostAlias {
    return V1HostAliasFromJSONTyped(json, false);
}

export function V1HostAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostAlias {
    if (json == null) {
        return json;
    }
    return {
        
        'hostnames': json['hostnames'] == null ? undefined : json['hostnames'],
        'ip': json['ip'],
    };
}

export function V1HostAliasToJSON(value?: V1HostAlias | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hostnames': value['hostnames'],
        'ip': value['ip'],
    };
}

