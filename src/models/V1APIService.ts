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
import {
    V1APIServiceSpec,
    V1APIServiceSpecFromJSON,
    V1APIServiceSpecFromJSONTyped,
    V1APIServiceSpecToJSON,
    V1APIServiceStatus,
    V1APIServiceStatusFromJSON,
    V1APIServiceStatusFromJSONTyped,
    V1APIServiceStatusToJSON,
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './';

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 * @export
 * @interface V1APIService
 */
export interface V1APIService {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1APIService
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1APIService
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1APIService
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1APIServiceSpec}
     * @memberof V1APIService
     */
    spec?: V1APIServiceSpec;
    /**
     * 
     * @type {V1APIServiceStatus}
     * @memberof V1APIService
     */
    status?: V1APIServiceStatus;
}

export function V1APIServiceFromJSON(json: any): V1APIService {
    return V1APIServiceFromJSONTyped(json, false);
}

export function V1APIServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1APIService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1APIServiceSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1APIServiceStatusFromJSON(json['status']),
    };
}

export function V1APIServiceToJSON(value?: V1APIService | null): any {
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
        'spec': V1APIServiceSpecToJSON(value.spec),
        'status': V1APIServiceStatusToJSON(value.status),
    };
}


