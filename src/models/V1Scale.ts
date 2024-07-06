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
import type { V1ScaleStatus } from './V1ScaleStatus';
import {
    V1ScaleStatusFromJSON,
    V1ScaleStatusFromJSONTyped,
    V1ScaleStatusToJSON,
} from './V1ScaleStatus';
import type { V1ScaleSpec } from './V1ScaleSpec';
import {
    V1ScaleSpecFromJSON,
    V1ScaleSpecFromJSONTyped,
    V1ScaleSpecToJSON,
} from './V1ScaleSpec';

/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface V1Scale
 */
export interface V1Scale {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Scale
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Scale
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1Scale
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1ScaleSpec}
     * @memberof V1Scale
     */
    spec?: V1ScaleSpec;
    /**
     * 
     * @type {V1ScaleStatus}
     * @memberof V1Scale
     */
    status?: V1ScaleStatus;
}

/**
 * Check if a given object implements the V1Scale interface.
 */
export function instanceOfV1Scale(value: object): value is V1Scale {
    return true;
}

export function V1ScaleFromJSON(json: any): V1Scale {
    return V1ScaleFromJSONTyped(json, false);
}

export function V1ScaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Scale {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1ScaleSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1ScaleStatusFromJSON(json['status']),
    };
}

export function V1ScaleToJSON(value?: V1Scale | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1ScaleSpecToJSON(value['spec']),
        'status': V1ScaleStatusToJSON(value['status']),
    };
}

