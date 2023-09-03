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
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import type { V1ResourceRequirements } from './V1ResourceRequirements';
import {
    V1ResourceRequirementsFromJSON,
    V1ResourceRequirementsFromJSONTyped,
    V1ResourceRequirementsToJSON,
} from './V1ResourceRequirements';
import type { V1TypedLocalObjectReference } from './V1TypedLocalObjectReference';
import {
    V1TypedLocalObjectReferenceFromJSON,
    V1TypedLocalObjectReferenceFromJSONTyped,
    V1TypedLocalObjectReferenceToJSON,
} from './V1TypedLocalObjectReference';
import type { V1TypedObjectReference } from './V1TypedObjectReference';
import {
    V1TypedObjectReferenceFromJSON,
    V1TypedObjectReferenceFromJSONTyped,
    V1TypedObjectReferenceToJSON,
} from './V1TypedObjectReference';

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 * @export
 * @interface V1PersistentVolumeClaimSpec
 */
export interface V1PersistentVolumeClaimSpec {
    /**
     * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     * @type {Array<string>}
     * @memberof V1PersistentVolumeClaimSpec
     */
    accessModes?: Array<string>;
    /**
     * 
     * @type {V1TypedLocalObjectReference}
     * @memberof V1PersistentVolumeClaimSpec
     */
    dataSource?: V1TypedLocalObjectReference;
    /**
     * 
     * @type {V1TypedObjectReference}
     * @memberof V1PersistentVolumeClaimSpec
     */
    dataSourceRef?: V1TypedObjectReference;
    /**
     * 
     * @type {V1ResourceRequirements}
     * @memberof V1PersistentVolumeClaimSpec
     */
    resources?: V1ResourceRequirements;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1PersistentVolumeClaimSpec
     */
    selector?: V1LabelSelector;
    /**
     * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    storageClassName?: string;
    /**
     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    volumeMode?: string;
    /**
     * volumeName is the binding reference to the PersistentVolume backing this claim.
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    volumeName?: string;
}

/**
 * Check if a given object implements the V1PersistentVolumeClaimSpec interface.
 */
export function instanceOfV1PersistentVolumeClaimSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PersistentVolumeClaimSpecFromJSON(json: any): V1PersistentVolumeClaimSpec {
    return V1PersistentVolumeClaimSpecFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessModes': !exists(json, 'accessModes') ? undefined : json['accessModes'],
        'dataSource': !exists(json, 'dataSource') ? undefined : V1TypedLocalObjectReferenceFromJSON(json['dataSource']),
        'dataSourceRef': !exists(json, 'dataSourceRef') ? undefined : V1TypedObjectReferenceFromJSON(json['dataSourceRef']),
        'resources': !exists(json, 'resources') ? undefined : V1ResourceRequirementsFromJSON(json['resources']),
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'storageClassName': !exists(json, 'storageClassName') ? undefined : json['storageClassName'],
        'volumeMode': !exists(json, 'volumeMode') ? undefined : json['volumeMode'],
        'volumeName': !exists(json, 'volumeName') ? undefined : json['volumeName'],
    };
}

export function V1PersistentVolumeClaimSpecToJSON(value?: V1PersistentVolumeClaimSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessModes': value.accessModes,
        'dataSource': V1TypedLocalObjectReferenceToJSON(value.dataSource),
        'dataSourceRef': V1TypedObjectReferenceToJSON(value.dataSourceRef),
        'resources': V1ResourceRequirementsToJSON(value.resources),
        'selector': V1LabelSelectorToJSON(value.selector),
        'storageClassName': value.storageClassName,
        'volumeMode': value.volumeMode,
        'volumeName': value.volumeName,
    };
}

