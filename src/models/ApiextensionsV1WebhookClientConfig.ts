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
import type { ApiextensionsV1ServiceReference } from './ApiextensionsV1ServiceReference';
import {
    ApiextensionsV1ServiceReferenceFromJSON,
    ApiextensionsV1ServiceReferenceFromJSONTyped,
    ApiextensionsV1ServiceReferenceToJSON,
} from './ApiextensionsV1ServiceReference';

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook.
 * @export
 * @interface ApiextensionsV1WebhookClientConfig
 */
export interface ApiextensionsV1WebhookClientConfig {
    /**
     * caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
     * @type {string}
     * @memberof ApiextensionsV1WebhookClientConfig
     */
    caBundle?: string;
    /**
     * 
     * @type {ApiextensionsV1ServiceReference}
     * @memberof ApiextensionsV1WebhookClientConfig
     */
    service?: ApiextensionsV1ServiceReference;
    /**
     * url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
     * 
     * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
     * 
     * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
     * 
     * The scheme must be "https"; the URL must begin with "https://".
     * 
     * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
     * 
     * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
     * @type {string}
     * @memberof ApiextensionsV1WebhookClientConfig
     */
    url?: string;
}

/**
 * Check if a given object implements the ApiextensionsV1WebhookClientConfig interface.
 */
export function instanceOfApiextensionsV1WebhookClientConfig(value: object): value is ApiextensionsV1WebhookClientConfig {
    return true;
}

export function ApiextensionsV1WebhookClientConfigFromJSON(json: any): ApiextensionsV1WebhookClientConfig {
    return ApiextensionsV1WebhookClientConfigFromJSONTyped(json, false);
}

export function ApiextensionsV1WebhookClientConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiextensionsV1WebhookClientConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'caBundle': json['caBundle'] == null ? undefined : json['caBundle'],
        'service': json['service'] == null ? undefined : ApiextensionsV1ServiceReferenceFromJSON(json['service']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function ApiextensionsV1WebhookClientConfigToJSON(value?: ApiextensionsV1WebhookClientConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'caBundle': value['caBundle'],
        'service': ApiextensionsV1ServiceReferenceToJSON(value['service']),
        'url': value['url'],
    };
}

