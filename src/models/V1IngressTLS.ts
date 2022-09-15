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
 * IngressTLS describes the transport layer security associated with an Ingress.
 * @export
 * @interface V1IngressTLS
 */
export interface V1IngressTLS {
    /**
     * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
     * @type {Array<string>}
     * @memberof V1IngressTLS
     */
    hosts?: Array<string>;
    /**
     * SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
     * @type {string}
     * @memberof V1IngressTLS
     */
    secretName?: string;
}

export function V1IngressTLSFromJSON(json: any): V1IngressTLS {
    return V1IngressTLSFromJSONTyped(json, false);
}

export function V1IngressTLSFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressTLS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hosts': !exists(json, 'hosts') ? undefined : json['hosts'],
        'secretName': !exists(json, 'secretName') ? undefined : json['secretName'],
    };
}

export function V1IngressTLSToJSON(value?: V1IngressTLS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hosts': value.hosts,
        'secretName': value.secretName,
    };
}


