/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
    V1ResourceRequirements,
    V1ResourceRequirementsFromJSON,
    V1ResourceRequirementsFromJSONTyped,
    V1ResourceRequirementsToJSON,
    V1TypedLocalObjectReference,
    V1TypedLocalObjectReferenceFromJSON,
    V1TypedLocalObjectReferenceFromJSONTyped,
    V1TypedLocalObjectReferenceToJSON,
} from './';

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
     * @type {V1TypedLocalObjectReference}
     * @memberof V1PersistentVolumeClaimSpec
     */
    dataSourceRef?: V1TypedLocalObjectReference;
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
        'dataSourceRef': !exists(json, 'dataSourceRef') ? undefined : V1TypedLocalObjectReferenceFromJSON(json['dataSourceRef']),
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
        'dataSourceRef': V1TypedLocalObjectReferenceToJSON(value.dataSourceRef),
        'resources': V1ResourceRequirementsToJSON(value.resources),
        'selector': V1LabelSelectorToJSON(value.selector),
        'storageClassName': value.storageClassName,
        'volumeMode': value.volumeMode,
        'volumeName': value.volumeName,
    };
}


