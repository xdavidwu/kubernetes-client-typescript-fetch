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
/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 * @export
 * @interface V1ServiceAccountTokenProjection
 */
export interface V1ServiceAccountTokenProjection {
    /**
     * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
     * @type {string}
     * @memberof V1ServiceAccountTokenProjection
     */
    audience?: string;
    /**
     * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
     * @type {number}
     * @memberof V1ServiceAccountTokenProjection
     */
    expirationSeconds?: number;
    /**
     * path is the path relative to the mount point of the file to project the token into.
     * @type {string}
     * @memberof V1ServiceAccountTokenProjection
     */
    path: string;
}

/**
 * Check if a given object implements the V1ServiceAccountTokenProjection interface.
 */
export function instanceOfV1ServiceAccountTokenProjection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function V1ServiceAccountTokenProjectionFromJSON(json: any): V1ServiceAccountTokenProjection {
    return V1ServiceAccountTokenProjectionFromJSONTyped(json, false);
}

export function V1ServiceAccountTokenProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ServiceAccountTokenProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audience': !exists(json, 'audience') ? undefined : json['audience'],
        'expirationSeconds': !exists(json, 'expirationSeconds') ? undefined : json['expirationSeconds'],
        'path': json['path'],
    };
}

export function V1ServiceAccountTokenProjectionToJSON(value?: V1ServiceAccountTokenProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audience': value.audience,
        'expirationSeconds': value.expirationSeconds,
        'path': value.path,
    };
}

