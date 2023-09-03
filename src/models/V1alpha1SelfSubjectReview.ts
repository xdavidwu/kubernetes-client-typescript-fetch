/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1alpha1SelfSubjectReviewStatus } from './V1alpha1SelfSubjectReviewStatus';
import {
    V1alpha1SelfSubjectReviewStatusFromJSON,
    V1alpha1SelfSubjectReviewStatusFromJSONTyped,
    V1alpha1SelfSubjectReviewStatusToJSON,
} from './V1alpha1SelfSubjectReviewStatus';

/**
 * SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
 * @export
 * @interface V1alpha1SelfSubjectReview
 */
export interface V1alpha1SelfSubjectReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1SelfSubjectReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1SelfSubjectReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1SelfSubjectReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha1SelfSubjectReviewStatus}
     * @memberof V1alpha1SelfSubjectReview
     */
    status?: V1alpha1SelfSubjectReviewStatus;
}

/**
 * Check if a given object implements the V1alpha1SelfSubjectReview interface.
 */
export function instanceOfV1alpha1SelfSubjectReview(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1SelfSubjectReviewFromJSON(json: any): V1alpha1SelfSubjectReview {
    return V1alpha1SelfSubjectReviewFromJSONTyped(json, false);
}

export function V1alpha1SelfSubjectReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1SelfSubjectReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'status': !exists(json, 'status') ? undefined : V1alpha1SelfSubjectReviewStatusFromJSON(json['status']),
    };
}

export function V1alpha1SelfSubjectReviewToJSON(value?: V1alpha1SelfSubjectReview | null): any {
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
        'status': V1alpha1SelfSubjectReviewStatusToJSON(value.status),
    };
}

