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
/**
 * An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend.
 * @export
 * @interface V1alpha1ServerStorageVersion
 */
export interface V1alpha1ServerStorageVersion {
    /**
     * The ID of the reporting API server.
     * @type {string}
     * @memberof V1alpha1ServerStorageVersion
     */
    apiServerID?: string;
    /**
     * The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions.
     * @type {Array<string>}
     * @memberof V1alpha1ServerStorageVersion
     */
    decodableVersions?: Array<string>;
    /**
     * The API server encodes the object to this version when persisting it in the backend (e.g., etcd).
     * @type {string}
     * @memberof V1alpha1ServerStorageVersion
     */
    encodingVersion?: string;
    /**
     * The API server can serve these versions. DecodableVersions must include all ServedVersions.
     * @type {Array<string>}
     * @memberof V1alpha1ServerStorageVersion
     */
    servedVersions?: Array<string>;
}

/**
 * Check if a given object implements the V1alpha1ServerStorageVersion interface.
 */
export function instanceOfV1alpha1ServerStorageVersion(value: object): value is V1alpha1ServerStorageVersion {
    return true;
}

export function V1alpha1ServerStorageVersionFromJSON(json: any): V1alpha1ServerStorageVersion {
    return V1alpha1ServerStorageVersionFromJSONTyped(json, false);
}

export function V1alpha1ServerStorageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ServerStorageVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'apiServerID': json['apiServerID'] == null ? undefined : json['apiServerID'],
        'decodableVersions': json['decodableVersions'] == null ? undefined : json['decodableVersions'],
        'encodingVersion': json['encodingVersion'] == null ? undefined : json['encodingVersion'],
        'servedVersions': json['servedVersions'] == null ? undefined : json['servedVersions'],
    };
}

export function V1alpha1ServerStorageVersionToJSON(value?: V1alpha1ServerStorageVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiServerID': value['apiServerID'],
        'decodableVersions': value['decodableVersions'],
        'encodingVersion': value['encodingVersion'],
        'servedVersions': value['servedVersions'],
    };
}

