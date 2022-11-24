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
import type { V1PortStatus } from './V1PortStatus';
import {
    V1PortStatusFromJSON,
    V1PortStatusFromJSONTyped,
    V1PortStatusToJSON,
} from './V1PortStatus';

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 * @export
 * @interface V1LoadBalancerIngress
 */
export interface V1LoadBalancerIngress {
    /**
     * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
     * @type {string}
     * @memberof V1LoadBalancerIngress
     */
    hostname?: string;
    /**
     * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
     * @type {string}
     * @memberof V1LoadBalancerIngress
     */
    ip?: string;
    /**
     * Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
     * @type {Array<V1PortStatus>}
     * @memberof V1LoadBalancerIngress
     */
    ports?: Array<V1PortStatus>;
}

/**
 * Check if a given object implements the V1LoadBalancerIngress interface.
 */
export function instanceOfV1LoadBalancerIngress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1LoadBalancerIngressFromJSON(json: any): V1LoadBalancerIngress {
    return V1LoadBalancerIngressFromJSONTyped(json, false);
}

export function V1LoadBalancerIngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LoadBalancerIngress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(V1PortStatusFromJSON)),
    };
}

export function V1LoadBalancerIngressToJSON(value?: V1LoadBalancerIngress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'ip': value.ip,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(V1PortStatusToJSON)),
    };
}

