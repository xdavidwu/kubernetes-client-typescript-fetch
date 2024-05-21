/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * EndpointPort is a tuple that describes a single port.
 * @export
 * @interface CoreV1EndpointPort
 */
export interface CoreV1EndpointPort {
    /**
     * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
     * 
     * * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
     * 
     * * Kubernetes-defined prefixed names:
     *   * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-
     *   * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455
     *   * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
     * 
     * * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
     * @type {string}
     * @memberof CoreV1EndpointPort
     */
    appProtocol?: string;
    /**
     * The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
     * @type {string}
     * @memberof CoreV1EndpointPort
     */
    name?: string;
    /**
     * The port number of the endpoint.
     * @type {number}
     * @memberof CoreV1EndpointPort
     */
    port: number;
    /**
     * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
     * @type {string}
     * @memberof CoreV1EndpointPort
     */
    protocol?: string;
}

/**
 * Check if a given object implements the CoreV1EndpointPort interface.
 */
export function instanceOfCoreV1EndpointPort(value: object): value is CoreV1EndpointPort {
    if (!('port' in value) || value['port'] === undefined) return false;
    return true;
}

export function CoreV1EndpointPortFromJSON(json: any): CoreV1EndpointPort {
    return CoreV1EndpointPortFromJSONTyped(json, false);
}

export function CoreV1EndpointPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoreV1EndpointPort {
    if (json == null) {
        return json;
    }
    return {
        
        'appProtocol': json['appProtocol'] == null ? undefined : json['appProtocol'],
        'name': json['name'] == null ? undefined : json['name'],
        'port': json['port'],
        'protocol': json['protocol'] == null ? undefined : json['protocol'],
    };
}

export function CoreV1EndpointPortToJSON(value?: CoreV1EndpointPort | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'appProtocol': value['appProtocol'],
        'name': value['name'],
        'port': value['port'],
        'protocol': value['protocol'],
    };
}

