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
import type { V1StatusDetails } from './V1StatusDetails';
import {
    V1StatusDetailsFromJSON,
    V1StatusDetailsFromJSONTyped,
    V1StatusDetailsToJSON,
} from './V1StatusDetails';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * Status is a return value for calls that don't return other objects.
 * @export
 * @interface V1Status
 */
export interface V1Status {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Status
     */
    apiVersion?: string;
    /**
     * Suggested HTTP return code for this status, 0 if not set.
     * @type {number}
     * @memberof V1Status
     */
    code?: number;
    /**
     * 
     * @type {V1StatusDetails}
     * @memberof V1Status
     */
    details?: V1StatusDetails;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Status
     */
    kind?: string;
    /**
     * A human-readable description of the status of this operation.
     * @type {string}
     * @memberof V1Status
     */
    message?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1Status
     */
    metadata?: V1ListMeta;
    /**
     * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
     * @type {string}
     * @memberof V1Status
     */
    reason?: string;
    /**
     * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     * @type {string}
     * @memberof V1Status
     */
    status?: string;
}

/**
 * Check if a given object implements the V1Status interface.
 */
export function instanceOfV1Status(value: object): value is V1Status {
    return true;
}

export function V1StatusFromJSON(json: any): V1Status {
    return V1StatusFromJSONTyped(json, false);
}

export function V1StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Status {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'code': json['code'] == null ? undefined : json['code'],
        'details': json['details'] == null ? undefined : V1StatusDetailsFromJSON(json['details']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'message': json['message'] == null ? undefined : json['message'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function V1StatusToJSON(value?: V1Status | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'code': value['code'],
        'details': V1StatusDetailsToJSON(value['details']),
        'kind': value['kind'],
        'message': value['message'],
        'metadata': V1ListMetaToJSON(value['metadata']),
        'reason': value['reason'],
        'status': value['status'],
    };
}

