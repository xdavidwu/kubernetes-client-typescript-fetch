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
/**
 * TokenRequest contains parameters of a service account token.
 * @export
 * @interface StorageV1TokenRequest
 */
export interface StorageV1TokenRequest {
    /**
     * Audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver.
     * @type {string}
     * @memberof StorageV1TokenRequest
     */
    audience: string;
    /**
     * ExpirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec".
     * @type {number}
     * @memberof StorageV1TokenRequest
     */
    expirationSeconds?: number;
}

/**
 * Check if a given object implements the StorageV1TokenRequest interface.
 */
export function instanceOfStorageV1TokenRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "audience" in value;

    return isInstance;
}

export function StorageV1TokenRequestFromJSON(json: any): StorageV1TokenRequest {
    return StorageV1TokenRequestFromJSONTyped(json, false);
}

export function StorageV1TokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageV1TokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audience': json['audience'],
        'expirationSeconds': !exists(json, 'expirationSeconds') ? undefined : json['expirationSeconds'],
    };
}

export function StorageV1TokenRequestToJSON(value?: StorageV1TokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audience': value.audience,
        'expirationSeconds': value.expirationSeconds,
    };
}

