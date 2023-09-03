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
import type { V1IngressBackend } from './V1IngressBackend';
import {
    V1IngressBackendFromJSON,
    V1IngressBackendFromJSONTyped,
    V1IngressBackendToJSON,
} from './V1IngressBackend';
import type { V1IngressRule } from './V1IngressRule';
import {
    V1IngressRuleFromJSON,
    V1IngressRuleFromJSONTyped,
    V1IngressRuleToJSON,
} from './V1IngressRule';
import type { V1IngressTLS } from './V1IngressTLS';
import {
    V1IngressTLSFromJSON,
    V1IngressTLSFromJSONTyped,
    V1IngressTLSToJSON,
} from './V1IngressTLS';

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 * @export
 * @interface V1IngressSpec
 */
export interface V1IngressSpec {
    /**
     * 
     * @type {V1IngressBackend}
     * @memberof V1IngressSpec
     */
    defaultBackend?: V1IngressBackend;
    /**
     * ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
     * @type {string}
     * @memberof V1IngressSpec
     */
    ingressClassName?: string;
    /**
     * rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     * @type {Array<V1IngressRule>}
     * @memberof V1IngressSpec
     */
    rules?: Array<V1IngressRule>;
    /**
     * tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     * @type {Array<V1IngressTLS>}
     * @memberof V1IngressSpec
     */
    tls?: Array<V1IngressTLS>;
}

/**
 * Check if a given object implements the V1IngressSpec interface.
 */
export function instanceOfV1IngressSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1IngressSpecFromJSON(json: any): V1IngressSpec {
    return V1IngressSpecFromJSONTyped(json, false);
}

export function V1IngressSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultBackend': !exists(json, 'defaultBackend') ? undefined : V1IngressBackendFromJSON(json['defaultBackend']),
        'ingressClassName': !exists(json, 'ingressClassName') ? undefined : json['ingressClassName'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(V1IngressRuleFromJSON)),
        'tls': !exists(json, 'tls') ? undefined : ((json['tls'] as Array<any>).map(V1IngressTLSFromJSON)),
    };
}

export function V1IngressSpecToJSON(value?: V1IngressSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultBackend': V1IngressBackendToJSON(value.defaultBackend),
        'ingressClassName': value.ingressClassName,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(V1IngressRuleToJSON)),
        'tls': value.tls === undefined ? undefined : ((value.tls as Array<any>).map(V1IngressTLSToJSON)),
    };
}

