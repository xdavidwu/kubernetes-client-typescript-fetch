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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1SubjectAccessReviewSpec } from './V1SubjectAccessReviewSpec';
import {
    V1SubjectAccessReviewSpecFromJSON,
    V1SubjectAccessReviewSpecFromJSONTyped,
    V1SubjectAccessReviewSpecToJSON,
} from './V1SubjectAccessReviewSpec';
import type { V1SubjectAccessReviewStatus } from './V1SubjectAccessReviewStatus';
import {
    V1SubjectAccessReviewStatusFromJSON,
    V1SubjectAccessReviewStatusFromJSONTyped,
    V1SubjectAccessReviewStatusToJSON,
} from './V1SubjectAccessReviewStatus';

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 * @export
 * @interface V1LocalSubjectAccessReview
 */
export interface V1LocalSubjectAccessReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1LocalSubjectAccessReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1LocalSubjectAccessReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1LocalSubjectAccessReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1SubjectAccessReviewSpec}
     * @memberof V1LocalSubjectAccessReview
     */
    spec: V1SubjectAccessReviewSpec;
    /**
     * 
     * @type {V1SubjectAccessReviewStatus}
     * @memberof V1LocalSubjectAccessReview
     */
    status?: V1SubjectAccessReviewStatus;
}

/**
 * Check if a given object implements the V1LocalSubjectAccessReview interface.
 */
export function instanceOfV1LocalSubjectAccessReview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1LocalSubjectAccessReviewFromJSON(json: any): V1LocalSubjectAccessReview {
    return V1LocalSubjectAccessReviewFromJSONTyped(json, false);
}

export function V1LocalSubjectAccessReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LocalSubjectAccessReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1SubjectAccessReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1SubjectAccessReviewStatusFromJSON(json['status']),
    };
}

export function V1LocalSubjectAccessReviewToJSON(value?: V1LocalSubjectAccessReview | null): any {
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
        'spec': V1SubjectAccessReviewSpecToJSON(value.spec),
        'status': V1SubjectAccessReviewStatusToJSON(value.status),
    };
}

