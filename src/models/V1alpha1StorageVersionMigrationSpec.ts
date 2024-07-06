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
import type { V1alpha1GroupVersionResource } from './V1alpha1GroupVersionResource';
import {
    V1alpha1GroupVersionResourceFromJSON,
    V1alpha1GroupVersionResourceFromJSONTyped,
    V1alpha1GroupVersionResourceToJSON,
} from './V1alpha1GroupVersionResource';

/**
 * Spec of the storage version migration.
 * @export
 * @interface V1alpha1StorageVersionMigrationSpec
 */
export interface V1alpha1StorageVersionMigrationSpec {
    /**
     * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration.
     * @type {string}
     * @memberof V1alpha1StorageVersionMigrationSpec
     */
    continueToken?: string;
    /**
     * 
     * @type {V1alpha1GroupVersionResource}
     * @memberof V1alpha1StorageVersionMigrationSpec
     */
    resource: V1alpha1GroupVersionResource;
}

/**
 * Check if a given object implements the V1alpha1StorageVersionMigrationSpec interface.
 */
export function instanceOfV1alpha1StorageVersionMigrationSpec(value: object): value is V1alpha1StorageVersionMigrationSpec {
    if (!('resource' in value) || value['resource'] === undefined) return false;
    return true;
}

export function V1alpha1StorageVersionMigrationSpecFromJSON(json: any): V1alpha1StorageVersionMigrationSpec {
    return V1alpha1StorageVersionMigrationSpecFromJSONTyped(json, false);
}

export function V1alpha1StorageVersionMigrationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1StorageVersionMigrationSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'continueToken': json['continueToken'] == null ? undefined : json['continueToken'],
        'resource': V1alpha1GroupVersionResourceFromJSON(json['resource']),
    };
}

export function V1alpha1StorageVersionMigrationSpecToJSON(value?: V1alpha1StorageVersionMigrationSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'continueToken': value['continueToken'],
        'resource': V1alpha1GroupVersionResourceToJSON(value['resource']),
    };
}

