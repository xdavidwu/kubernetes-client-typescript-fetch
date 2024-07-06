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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.
 * 
 * For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"
 * 
 * The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero
 * 
 * The producer of these objects can decide which approach is more suitable.
 * 
 * They are consumed by the kube-scheduler when a CSI driver opts into capacity-aware scheduling with CSIDriverSpec.StorageCapacity. The scheduler compares the MaximumVolumeSize against the requested size of pending volumes to filter out unsuitable nodes. If MaximumVolumeSize is unset, it falls back to a comparison against the less precise Capacity. If that is also unset, the scheduler assumes that capacity is insufficient and tries some other node.
 * @export
 * @interface V1CSIStorageCapacity
 */
export interface V1CSIStorageCapacity {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CSIStorageCapacity
     */
    apiVersion?: string;
    /**
     * capacity is the value reported by the CSI driver in its GetCapacityResponse for a GetCapacityRequest with topology and parameters that match the previous fields.
     * 
     * The semantic is currently (CSI spec 1.2) defined as: The available capacity, in bytes, of the storage that can be used to provision volumes. If not set, that information is currently unavailable.
     * @type {string}
     * @memberof V1CSIStorageCapacity
     */
    capacity?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CSIStorageCapacity
     */
    kind?: string;
    /**
     * maximumVolumeSize is the value reported by the CSI driver in its GetCapacityResponse for a GetCapacityRequest with topology and parameters that match the previous fields.
     * 
     * This is defined since CSI spec 1.4.0 as the largest size that may be used in a CreateVolumeRequest.capacity_range.required_bytes field to create a volume with the same parameters as those in GetCapacityRequest. The corresponding value in the Kubernetes API is ResourceRequirements.Requests in a volume claim.
     * @type {string}
     * @memberof V1CSIStorageCapacity
     */
    maximumVolumeSize?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1CSIStorageCapacity
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1CSIStorageCapacity
     */
    nodeTopology?: V1LabelSelector;
    /**
     * storageClassName represents the name of the StorageClass that the reported capacity applies to. It must meet the same requirements as the name of a StorageClass object (non-empty, DNS subdomain). If that object no longer exists, the CSIStorageCapacity object is obsolete and should be removed by its creator. This field is immutable.
     * @type {string}
     * @memberof V1CSIStorageCapacity
     */
    storageClassName: string;
}

/**
 * Check if a given object implements the V1CSIStorageCapacity interface.
 */
export function instanceOfV1CSIStorageCapacity(value: object): value is V1CSIStorageCapacity {
    if (!('storageClassName' in value) || value['storageClassName'] === undefined) return false;
    return true;
}

export function V1CSIStorageCapacityFromJSON(json: any): V1CSIStorageCapacity {
    return V1CSIStorageCapacityFromJSONTyped(json, false);
}

export function V1CSIStorageCapacityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CSIStorageCapacity {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'capacity': json['capacity'] == null ? undefined : json['capacity'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'maximumVolumeSize': json['maximumVolumeSize'] == null ? undefined : json['maximumVolumeSize'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'nodeTopology': json['nodeTopology'] == null ? undefined : V1LabelSelectorFromJSON(json['nodeTopology']),
        'storageClassName': json['storageClassName'],
    };
}

export function V1CSIStorageCapacityToJSON(value?: V1CSIStorageCapacity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'capacity': value['capacity'],
        'kind': value['kind'],
        'maximumVolumeSize': value['maximumVolumeSize'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'nodeTopology': V1LabelSelectorToJSON(value['nodeTopology']),
        'storageClassName': value['storageClassName'],
    };
}

