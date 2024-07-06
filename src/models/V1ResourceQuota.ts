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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1ResourceQuotaStatus } from './V1ResourceQuotaStatus';
import {
    V1ResourceQuotaStatusFromJSON,
    V1ResourceQuotaStatusFromJSONTyped,
    V1ResourceQuotaStatusToJSON,
} from './V1ResourceQuotaStatus';
import type { V1ResourceQuotaSpec } from './V1ResourceQuotaSpec';
import {
    V1ResourceQuotaSpecFromJSON,
    V1ResourceQuotaSpecFromJSONTyped,
    V1ResourceQuotaSpecToJSON,
} from './V1ResourceQuotaSpec';

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 * @export
 * @interface V1ResourceQuota
 */
export interface V1ResourceQuota {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ResourceQuota
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ResourceQuota
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ResourceQuota
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1ResourceQuotaSpec}
     * @memberof V1ResourceQuota
     */
    spec?: V1ResourceQuotaSpec;
    /**
     * 
     * @type {V1ResourceQuotaStatus}
     * @memberof V1ResourceQuota
     */
    status?: V1ResourceQuotaStatus;
}

/**
 * Check if a given object implements the V1ResourceQuota interface.
 */
export function instanceOfV1ResourceQuota(value: object): value is V1ResourceQuota {
    return true;
}

export function V1ResourceQuotaFromJSON(json: any): V1ResourceQuota {
    return V1ResourceQuotaFromJSONTyped(json, false);
}

export function V1ResourceQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceQuota {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1ResourceQuotaSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1ResourceQuotaStatusFromJSON(json['status']),
    };
}

export function V1ResourceQuotaToJSON(value?: V1ResourceQuota | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1ResourceQuotaSpecToJSON(value['spec']),
        'status': V1ResourceQuotaStatusToJSON(value['status']),
    };
}

