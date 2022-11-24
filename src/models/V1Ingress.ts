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
import type { V1IngressSpec } from './V1IngressSpec';
import {
    V1IngressSpecFromJSON,
    V1IngressSpecFromJSONTyped,
    V1IngressSpecToJSON,
} from './V1IngressSpec';
import type { V1IngressStatus } from './V1IngressStatus';
import {
    V1IngressStatusFromJSON,
    V1IngressStatusFromJSONTyped,
    V1IngressStatusToJSON,
} from './V1IngressStatus';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 * @export
 * @interface V1Ingress
 */
export interface V1Ingress {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Ingress
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Ingress
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1Ingress
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1IngressSpec}
     * @memberof V1Ingress
     */
    spec?: V1IngressSpec;
    /**
     * 
     * @type {V1IngressStatus}
     * @memberof V1Ingress
     */
    status?: V1IngressStatus;
}

/**
 * Check if a given object implements the V1Ingress interface.
 */
export function instanceOfV1Ingress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1IngressFromJSON(json: any): V1Ingress {
    return V1IngressFromJSONTyped(json, false);
}

export function V1IngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Ingress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1IngressSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1IngressStatusFromJSON(json['status']),
    };
}

export function V1IngressToJSON(value?: V1Ingress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1IngressSpecToJSON(value.spec),
        'status': V1IngressStatusToJSON(value.status),
    };
}

