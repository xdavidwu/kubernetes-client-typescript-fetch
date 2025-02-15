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
export function instanceOfV1Ingress(value: object): value is V1Ingress {
    return true;
}

export function V1IngressFromJSON(json: any): V1Ingress {
    return V1IngressFromJSONTyped(json, false);
}

export function V1IngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Ingress {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1IngressSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1IngressStatusFromJSON(json['status']),
    };
}

export function V1IngressToJSON(value?: V1Ingress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1IngressSpecToJSON(value['spec']),
        'status': V1IngressStatusToJSON(value['status']),
    };
}

