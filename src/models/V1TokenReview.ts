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
import type { V1TokenReviewSpec } from './V1TokenReviewSpec';
import {
    V1TokenReviewSpecFromJSON,
    V1TokenReviewSpecFromJSONTyped,
    V1TokenReviewSpecToJSON,
} from './V1TokenReviewSpec';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1TokenReviewStatus } from './V1TokenReviewStatus';
import {
    V1TokenReviewStatusFromJSON,
    V1TokenReviewStatusFromJSONTyped,
    V1TokenReviewStatusToJSON,
} from './V1TokenReviewStatus';

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 * @export
 * @interface V1TokenReview
 */
export interface V1TokenReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1TokenReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1TokenReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1TokenReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1TokenReviewSpec}
     * @memberof V1TokenReview
     */
    spec: V1TokenReviewSpec;
    /**
     * 
     * @type {V1TokenReviewStatus}
     * @memberof V1TokenReview
     */
    status?: V1TokenReviewStatus;
}

/**
 * Check if a given object implements the V1TokenReview interface.
 */
export function instanceOfV1TokenReview(value: object): value is V1TokenReview {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1TokenReviewFromJSON(json: any): V1TokenReview {
    return V1TokenReviewFromJSONTyped(json, false);
}

export function V1TokenReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TokenReview {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1TokenReviewSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1TokenReviewStatusFromJSON(json['status']),
    };
}

export function V1TokenReviewToJSON(value?: V1TokenReview | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1TokenReviewSpecToJSON(value['spec']),
        'status': V1TokenReviewStatusToJSON(value['status']),
    };
}

