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
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 * @export
 * @interface V1AzureFileVolumeSource
 */
export interface V1AzureFileVolumeSource {
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof V1AzureFileVolumeSource
     */
    readOnly?: boolean;
    /**
     * secretName is the  name of secret that contains Azure Storage Account Name and Key
     * @type {string}
     * @memberof V1AzureFileVolumeSource
     */
    secretName: string;
    /**
     * shareName is the azure share Name
     * @type {string}
     * @memberof V1AzureFileVolumeSource
     */
    shareName: string;
}

/**
 * Check if a given object implements the V1AzureFileVolumeSource interface.
 */
export function instanceOfV1AzureFileVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "secretName" in value;
    isInstance = isInstance && "shareName" in value;

    return isInstance;
}

export function V1AzureFileVolumeSourceFromJSON(json: any): V1AzureFileVolumeSource {
    return V1AzureFileVolumeSourceFromJSONTyped(json, false);
}

export function V1AzureFileVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AzureFileVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretName': json['secretName'],
        'shareName': json['shareName'],
    };
}

export function V1AzureFileVolumeSourceToJSON(value?: V1AzureFileVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'readOnly': value.readOnly,
        'secretName': value.secretName,
        'shareName': value.shareName,
    };
}

