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
/**
 * ContainerPort represents a network port in a single container.
 * @export
 * @interface V1ContainerPort
 */
export interface V1ContainerPort {
    /**
     * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
     * @type {number}
     * @memberof V1ContainerPort
     */
    containerPort: number;
    /**
     * What host IP to bind the external port to.
     * @type {string}
     * @memberof V1ContainerPort
     */
    hostIP?: string;
    /**
     * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
     * @type {number}
     * @memberof V1ContainerPort
     */
    hostPort?: number;
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
     * @type {string}
     * @memberof V1ContainerPort
     */
    name?: string;
    /**
     * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
     * @type {string}
     * @memberof V1ContainerPort
     */
    protocol?: string;
}

export function V1ContainerPortFromJSON(json: any): V1ContainerPort {
    return V1ContainerPortFromJSONTyped(json, false);
}

export function V1ContainerPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerPort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerPort': json['containerPort'],
        'hostIP': !exists(json, 'hostIP') ? undefined : json['hostIP'],
        'hostPort': !exists(json, 'hostPort') ? undefined : json['hostPort'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function V1ContainerPortToJSON(value?: V1ContainerPort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerPort': value.containerPort,
        'hostIP': value.hostIP,
        'hostPort': value.hostPort,
        'name': value.name,
        'protocol': value.protocol,
    };
}


