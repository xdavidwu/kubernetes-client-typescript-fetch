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
 * PersistentVolumeStatus is the current status of a persistent volume.
 * @export
 * @interface V1PersistentVolumeStatus
 */
export interface V1PersistentVolumeStatus {
    /**
     * message is a human-readable message indicating details about why the volume is in this state.
     * @type {string}
     * @memberof V1PersistentVolumeStatus
     */
    message?: string;
    /**
     * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
     * @type {string}
     * @memberof V1PersistentVolumeStatus
     */
    phase?: string;
    /**
     * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
     * @type {string}
     * @memberof V1PersistentVolumeStatus
     */
    reason?: string;
}

/**
 * Check if a given object implements the V1PersistentVolumeStatus interface.
 */
export function instanceOfV1PersistentVolumeStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PersistentVolumeStatusFromJSON(json: any): V1PersistentVolumeStatus {
    return V1PersistentVolumeStatusFromJSONTyped(json, false);
}

export function V1PersistentVolumeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function V1PersistentVolumeStatusToJSON(value?: V1PersistentVolumeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'phase': value.phase,
        'reason': value.reason,
    };
}

