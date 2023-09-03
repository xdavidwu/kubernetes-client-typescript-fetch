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
import type { V1IngressPortStatus } from './V1IngressPortStatus';
import {
    V1IngressPortStatusFromJSON,
    V1IngressPortStatusFromJSONTyped,
    V1IngressPortStatusToJSON,
} from './V1IngressPortStatus';

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 * @export
 * @interface V1IngressLoadBalancerIngress
 */
export interface V1IngressLoadBalancerIngress {
    /**
     * hostname is set for load-balancer ingress points that are DNS based.
     * @type {string}
     * @memberof V1IngressLoadBalancerIngress
     */
    hostname?: string;
    /**
     * ip is set for load-balancer ingress points that are IP based.
     * @type {string}
     * @memberof V1IngressLoadBalancerIngress
     */
    ip?: string;
    /**
     * ports provides information about the ports exposed by this LoadBalancer.
     * @type {Array<V1IngressPortStatus>}
     * @memberof V1IngressLoadBalancerIngress
     */
    ports?: Array<V1IngressPortStatus>;
}

/**
 * Check if a given object implements the V1IngressLoadBalancerIngress interface.
 */
export function instanceOfV1IngressLoadBalancerIngress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1IngressLoadBalancerIngressFromJSON(json: any): V1IngressLoadBalancerIngress {
    return V1IngressLoadBalancerIngressFromJSONTyped(json, false);
}

export function V1IngressLoadBalancerIngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressLoadBalancerIngress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(V1IngressPortStatusFromJSON)),
    };
}

export function V1IngressLoadBalancerIngressToJSON(value?: V1IngressLoadBalancerIngress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'ip': value.ip,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(V1IngressPortStatusToJSON)),
    };
}

