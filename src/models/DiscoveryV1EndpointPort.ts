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
/**
 * EndpointPort represents a Port used by an EndpointSlice
 * @export
 * @interface DiscoveryV1EndpointPort
 */
export interface DiscoveryV1EndpointPort {
    /**
     * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
     * 
     * * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
     * 
     * * Kubernetes-defined prefixed names:
     *   * 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540
     *   * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455
     *   * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
     * 
     * * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
     * @type {string}
     * @memberof DiscoveryV1EndpointPort
     */
    appProtocol?: string;
    /**
     * name represents the name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is dervied from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string.
     * @type {string}
     * @memberof DiscoveryV1EndpointPort
     */
    name?: string;
    /**
     * port represents the port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer.
     * @type {number}
     * @memberof DiscoveryV1EndpointPort
     */
    port?: number;
    /**
     * protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
     * @type {string}
     * @memberof DiscoveryV1EndpointPort
     */
    protocol?: string;
}

/**
 * Check if a given object implements the DiscoveryV1EndpointPort interface.
 */
export function instanceOfDiscoveryV1EndpointPort(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscoveryV1EndpointPortFromJSON(json: any): DiscoveryV1EndpointPort {
    return DiscoveryV1EndpointPortFromJSONTyped(json, false);
}

export function DiscoveryV1EndpointPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveryV1EndpointPort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appProtocol': !exists(json, 'appProtocol') ? undefined : json['appProtocol'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function DiscoveryV1EndpointPortToJSON(value?: DiscoveryV1EndpointPort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appProtocol': value.appProtocol,
        'name': value.name,
        'port': value.port,
        'protocol': value.protocol,
    };
}

