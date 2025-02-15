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
import type { V1HTTPIngressRuleValue } from './V1HTTPIngressRuleValue';
import {
    V1HTTPIngressRuleValueFromJSON,
    V1HTTPIngressRuleValueFromJSONTyped,
    V1HTTPIngressRuleValueToJSON,
} from './V1HTTPIngressRuleValue';

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 * @export
 * @interface V1IngressRule
 */
export interface V1IngressRule {
    /**
     * host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
     *    the IP in the Spec of the parent Ingress.
     * 2. The `:` delimiter is not respected because ports are not allowed.
     * 	  Currently the port of an Ingress is implicitly :80 for http and
     * 	  :443 for https.
     * Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
     * 
     * host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If host is precise, the request matches this rule if the http host header is equal to Host. 2. If host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
     * @type {string}
     * @memberof V1IngressRule
     */
    host?: string;
    /**
     * 
     * @type {V1HTTPIngressRuleValue}
     * @memberof V1IngressRule
     */
    http?: V1HTTPIngressRuleValue;
}

/**
 * Check if a given object implements the V1IngressRule interface.
 */
export function instanceOfV1IngressRule(value: object): value is V1IngressRule {
    return true;
}

export function V1IngressRuleFromJSON(json: any): V1IngressRule {
    return V1IngressRuleFromJSONTyped(json, false);
}

export function V1IngressRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressRule {
    if (json == null) {
        return json;
    }
    return {
        
        'host': json['host'] == null ? undefined : json['host'],
        'http': json['http'] == null ? undefined : V1HTTPIngressRuleValueFromJSON(json['http']),
    };
}

export function V1IngressRuleToJSON(value?: V1IngressRule | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'host': value['host'],
        'http': V1HTTPIngressRuleValueToJSON(value['http']),
    };
}

