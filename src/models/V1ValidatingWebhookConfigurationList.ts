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
import type { V1ValidatingWebhookConfiguration } from './V1ValidatingWebhookConfiguration';
import {
    V1ValidatingWebhookConfigurationFromJSON,
    V1ValidatingWebhookConfigurationFromJSONTyped,
    V1ValidatingWebhookConfigurationToJSON,
} from './V1ValidatingWebhookConfiguration';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 * @export
 * @interface V1ValidatingWebhookConfigurationList
 */
export interface V1ValidatingWebhookConfigurationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ValidatingWebhookConfigurationList
     */
    apiVersion?: string;
    /**
     * List of ValidatingWebhookConfiguration.
     * @type {Array<V1ValidatingWebhookConfiguration>}
     * @memberof V1ValidatingWebhookConfigurationList
     */
    items: Array<V1ValidatingWebhookConfiguration>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ValidatingWebhookConfigurationList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ValidatingWebhookConfigurationList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1ValidatingWebhookConfigurationList interface.
 */
export function instanceOfV1ValidatingWebhookConfigurationList(value: object): value is V1ValidatingWebhookConfigurationList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1ValidatingWebhookConfigurationListFromJSON(json: any): V1ValidatingWebhookConfigurationList {
    return V1ValidatingWebhookConfigurationListFromJSONTyped(json, false);
}

export function V1ValidatingWebhookConfigurationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ValidatingWebhookConfigurationList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ValidatingWebhookConfigurationFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ValidatingWebhookConfigurationListToJSON(value?: V1ValidatingWebhookConfigurationList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1ValidatingWebhookConfigurationToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

