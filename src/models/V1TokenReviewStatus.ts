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
import type { V1UserInfo } from './V1UserInfo';
import {
    V1UserInfoFromJSON,
    V1UserInfoFromJSONTyped,
    V1UserInfoToJSON,
} from './V1UserInfo';

/**
 * TokenReviewStatus is the result of the token authentication request.
 * @export
 * @interface V1TokenReviewStatus
 */
export interface V1TokenReviewStatus {
    /**
     * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
     * @type {Array<string>}
     * @memberof V1TokenReviewStatus
     */
    audiences?: Array<string>;
    /**
     * Authenticated indicates that the token was associated with a known user.
     * @type {boolean}
     * @memberof V1TokenReviewStatus
     */
    authenticated?: boolean;
    /**
     * Error indicates that the token couldn't be checked
     * @type {string}
     * @memberof V1TokenReviewStatus
     */
    error?: string;
    /**
     * 
     * @type {V1UserInfo}
     * @memberof V1TokenReviewStatus
     */
    user?: V1UserInfo;
}

/**
 * Check if a given object implements the V1TokenReviewStatus interface.
 */
export function instanceOfV1TokenReviewStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TokenReviewStatusFromJSON(json: any): V1TokenReviewStatus {
    return V1TokenReviewStatusFromJSONTyped(json, false);
}

export function V1TokenReviewStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TokenReviewStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audiences': !exists(json, 'audiences') ? undefined : json['audiences'],
        'authenticated': !exists(json, 'authenticated') ? undefined : json['authenticated'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'user': !exists(json, 'user') ? undefined : V1UserInfoFromJSON(json['user']),
    };
}

export function V1TokenReviewStatusToJSON(value?: V1TokenReviewStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audiences': value.audiences,
        'authenticated': value.authenticated,
        'error': value.error,
        'user': V1UserInfoToJSON(value.user),
    };
}

