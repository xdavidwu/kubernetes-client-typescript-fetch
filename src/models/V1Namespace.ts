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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1NamespaceSpec } from './V1NamespaceSpec';
import {
    V1NamespaceSpecFromJSON,
    V1NamespaceSpecFromJSONTyped,
    V1NamespaceSpecToJSON,
} from './V1NamespaceSpec';
import type { V1NamespaceStatus } from './V1NamespaceStatus';
import {
    V1NamespaceStatusFromJSON,
    V1NamespaceStatusFromJSONTyped,
    V1NamespaceStatusToJSON,
} from './V1NamespaceStatus';

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 * @export
 * @interface V1Namespace
 */
export interface V1Namespace {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Namespace
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Namespace
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1Namespace
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1NamespaceSpec}
     * @memberof V1Namespace
     */
    spec?: V1NamespaceSpec;
    /**
     * 
     * @type {V1NamespaceStatus}
     * @memberof V1Namespace
     */
    status?: V1NamespaceStatus;
}

/**
 * Check if a given object implements the V1Namespace interface.
 */
export function instanceOfV1Namespace(value: object): value is V1Namespace {
    return true;
}

export function V1NamespaceFromJSON(json: any): V1Namespace {
    return V1NamespaceFromJSONTyped(json, false);
}

export function V1NamespaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Namespace {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1NamespaceSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1NamespaceStatusFromJSON(json['status']),
    };
}

export function V1NamespaceToJSON(value?: V1Namespace | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1NamespaceSpecToJSON(value['spec']),
        'status': V1NamespaceStatusToJSON(value['status']),
    };
}

