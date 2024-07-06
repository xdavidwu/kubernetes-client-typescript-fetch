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
import type { V1alpha1ServerStorageVersion } from './V1alpha1ServerStorageVersion';
import {
    V1alpha1ServerStorageVersionFromJSON,
    V1alpha1ServerStorageVersionFromJSONTyped,
    V1alpha1ServerStorageVersionToJSON,
} from './V1alpha1ServerStorageVersion';
import type { V1alpha1StorageVersionCondition } from './V1alpha1StorageVersionCondition';
import {
    V1alpha1StorageVersionConditionFromJSON,
    V1alpha1StorageVersionConditionFromJSONTyped,
    V1alpha1StorageVersionConditionToJSON,
} from './V1alpha1StorageVersionCondition';

/**
 * API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend.
 * @export
 * @interface V1alpha1StorageVersionStatus
 */
export interface V1alpha1StorageVersionStatus {
    /**
     * If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality.
     * @type {string}
     * @memberof V1alpha1StorageVersionStatus
     */
    commonEncodingVersion?: string;
    /**
     * The latest available observations of the storageVersion's state.
     * @type {Array<V1alpha1StorageVersionCondition>}
     * @memberof V1alpha1StorageVersionStatus
     */
    conditions?: Array<V1alpha1StorageVersionCondition>;
    /**
     * The reported versions per API server instance.
     * @type {Array<V1alpha1ServerStorageVersion>}
     * @memberof V1alpha1StorageVersionStatus
     */
    storageVersions?: Array<V1alpha1ServerStorageVersion>;
}

/**
 * Check if a given object implements the V1alpha1StorageVersionStatus interface.
 */
export function instanceOfV1alpha1StorageVersionStatus(value: object): value is V1alpha1StorageVersionStatus {
    return true;
}

export function V1alpha1StorageVersionStatusFromJSON(json: any): V1alpha1StorageVersionStatus {
    return V1alpha1StorageVersionStatusFromJSONTyped(json, false);
}

export function V1alpha1StorageVersionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1StorageVersionStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'commonEncodingVersion': json['commonEncodingVersion'] == null ? undefined : json['commonEncodingVersion'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1alpha1StorageVersionConditionFromJSON)),
        'storageVersions': json['storageVersions'] == null ? undefined : ((json['storageVersions'] as Array<any>).map(V1alpha1ServerStorageVersionFromJSON)),
    };
}

export function V1alpha1StorageVersionStatusToJSON(value?: V1alpha1StorageVersionStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'commonEncodingVersion': value['commonEncodingVersion'],
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1alpha1StorageVersionConditionToJSON)),
        'storageVersions': value['storageVersions'] == null ? undefined : ((value['storageVersions'] as Array<any>).map(V1alpha1ServerStorageVersionToJSON)),
    };
}

