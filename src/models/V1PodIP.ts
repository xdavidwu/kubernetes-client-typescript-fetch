/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 * @export
 * @interface V1PodIP
 */
export interface V1PodIP {
    /**
     * ip is an IP address (IPv4 or IPv6) assigned to the pod
     * @type {string}
     * @memberof V1PodIP
     */
    ip?: string;
}

/**
 * Check if a given object implements the V1PodIP interface.
 */
export function instanceOfV1PodIP(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PodIPFromJSON(json: any): V1PodIP {
    return V1PodIPFromJSONTyped(json, false);
}

export function V1PodIPFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodIP {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
    };
}

export function V1PodIPToJSON(value?: V1PodIP | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ip': value.ip,
    };
}

