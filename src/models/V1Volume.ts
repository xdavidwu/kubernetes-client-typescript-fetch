/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1FlexVolumeSource } from './V1FlexVolumeSource';
import {
    V1FlexVolumeSourceFromJSON,
    V1FlexVolumeSourceFromJSONTyped,
    V1FlexVolumeSourceToJSON,
} from './V1FlexVolumeSource';
import type { V1GCEPersistentDiskVolumeSource } from './V1GCEPersistentDiskVolumeSource';
import {
    V1GCEPersistentDiskVolumeSourceFromJSON,
    V1GCEPersistentDiskVolumeSourceFromJSONTyped,
    V1GCEPersistentDiskVolumeSourceToJSON,
} from './V1GCEPersistentDiskVolumeSource';
import type { V1EmptyDirVolumeSource } from './V1EmptyDirVolumeSource';
import {
    V1EmptyDirVolumeSourceFromJSON,
    V1EmptyDirVolumeSourceFromJSONTyped,
    V1EmptyDirVolumeSourceToJSON,
} from './V1EmptyDirVolumeSource';
import type { V1RBDVolumeSource } from './V1RBDVolumeSource';
import {
    V1RBDVolumeSourceFromJSON,
    V1RBDVolumeSourceFromJSONTyped,
    V1RBDVolumeSourceToJSON,
} from './V1RBDVolumeSource';
import type { V1HostPathVolumeSource } from './V1HostPathVolumeSource';
import {
    V1HostPathVolumeSourceFromJSON,
    V1HostPathVolumeSourceFromJSONTyped,
    V1HostPathVolumeSourceToJSON,
} from './V1HostPathVolumeSource';
import type { V1EphemeralVolumeSource } from './V1EphemeralVolumeSource';
import {
    V1EphemeralVolumeSourceFromJSON,
    V1EphemeralVolumeSourceFromJSONTyped,
    V1EphemeralVolumeSourceToJSON,
} from './V1EphemeralVolumeSource';
import type { V1CephFSVolumeSource } from './V1CephFSVolumeSource';
import {
    V1CephFSVolumeSourceFromJSON,
    V1CephFSVolumeSourceFromJSONTyped,
    V1CephFSVolumeSourceToJSON,
} from './V1CephFSVolumeSource';
import type { V1PersistentVolumeClaimVolumeSource } from './V1PersistentVolumeClaimVolumeSource';
import {
    V1PersistentVolumeClaimVolumeSourceFromJSON,
    V1PersistentVolumeClaimVolumeSourceFromJSONTyped,
    V1PersistentVolumeClaimVolumeSourceToJSON,
} from './V1PersistentVolumeClaimVolumeSource';
import type { V1AWSElasticBlockStoreVolumeSource } from './V1AWSElasticBlockStoreVolumeSource';
import {
    V1AWSElasticBlockStoreVolumeSourceFromJSON,
    V1AWSElasticBlockStoreVolumeSourceFromJSONTyped,
    V1AWSElasticBlockStoreVolumeSourceToJSON,
} from './V1AWSElasticBlockStoreVolumeSource';
import type { V1ConfigMapVolumeSource } from './V1ConfigMapVolumeSource';
import {
    V1ConfigMapVolumeSourceFromJSON,
    V1ConfigMapVolumeSourceFromJSONTyped,
    V1ConfigMapVolumeSourceToJSON,
} from './V1ConfigMapVolumeSource';
import type { V1AzureDiskVolumeSource } from './V1AzureDiskVolumeSource';
import {
    V1AzureDiskVolumeSourceFromJSON,
    V1AzureDiskVolumeSourceFromJSONTyped,
    V1AzureDiskVolumeSourceToJSON,
} from './V1AzureDiskVolumeSource';
import type { V1CSIVolumeSource } from './V1CSIVolumeSource';
import {
    V1CSIVolumeSourceFromJSON,
    V1CSIVolumeSourceFromJSONTyped,
    V1CSIVolumeSourceToJSON,
} from './V1CSIVolumeSource';
import type { V1VsphereVirtualDiskVolumeSource } from './V1VsphereVirtualDiskVolumeSource';
import {
    V1VsphereVirtualDiskVolumeSourceFromJSON,
    V1VsphereVirtualDiskVolumeSourceFromJSONTyped,
    V1VsphereVirtualDiskVolumeSourceToJSON,
} from './V1VsphereVirtualDiskVolumeSource';
import type { V1PhotonPersistentDiskVolumeSource } from './V1PhotonPersistentDiskVolumeSource';
import {
    V1PhotonPersistentDiskVolumeSourceFromJSON,
    V1PhotonPersistentDiskVolumeSourceFromJSONTyped,
    V1PhotonPersistentDiskVolumeSourceToJSON,
} from './V1PhotonPersistentDiskVolumeSource';
import type { V1DownwardAPIVolumeSource } from './V1DownwardAPIVolumeSource';
import {
    V1DownwardAPIVolumeSourceFromJSON,
    V1DownwardAPIVolumeSourceFromJSONTyped,
    V1DownwardAPIVolumeSourceToJSON,
} from './V1DownwardAPIVolumeSource';
import type { V1ScaleIOVolumeSource } from './V1ScaleIOVolumeSource';
import {
    V1ScaleIOVolumeSourceFromJSON,
    V1ScaleIOVolumeSourceFromJSONTyped,
    V1ScaleIOVolumeSourceToJSON,
} from './V1ScaleIOVolumeSource';
import type { V1ProjectedVolumeSource } from './V1ProjectedVolumeSource';
import {
    V1ProjectedVolumeSourceFromJSON,
    V1ProjectedVolumeSourceFromJSONTyped,
    V1ProjectedVolumeSourceToJSON,
} from './V1ProjectedVolumeSource';
import type { V1CinderVolumeSource } from './V1CinderVolumeSource';
import {
    V1CinderVolumeSourceFromJSON,
    V1CinderVolumeSourceFromJSONTyped,
    V1CinderVolumeSourceToJSON,
} from './V1CinderVolumeSource';
import type { V1GitRepoVolumeSource } from './V1GitRepoVolumeSource';
import {
    V1GitRepoVolumeSourceFromJSON,
    V1GitRepoVolumeSourceFromJSONTyped,
    V1GitRepoVolumeSourceToJSON,
} from './V1GitRepoVolumeSource';
import type { V1SecretVolumeSource } from './V1SecretVolumeSource';
import {
    V1SecretVolumeSourceFromJSON,
    V1SecretVolumeSourceFromJSONTyped,
    V1SecretVolumeSourceToJSON,
} from './V1SecretVolumeSource';
import type { V1StorageOSVolumeSource } from './V1StorageOSVolumeSource';
import {
    V1StorageOSVolumeSourceFromJSON,
    V1StorageOSVolumeSourceFromJSONTyped,
    V1StorageOSVolumeSourceToJSON,
} from './V1StorageOSVolumeSource';
import type { V1NFSVolumeSource } from './V1NFSVolumeSource';
import {
    V1NFSVolumeSourceFromJSON,
    V1NFSVolumeSourceFromJSONTyped,
    V1NFSVolumeSourceToJSON,
} from './V1NFSVolumeSource';
import type { V1GlusterfsVolumeSource } from './V1GlusterfsVolumeSource';
import {
    V1GlusterfsVolumeSourceFromJSON,
    V1GlusterfsVolumeSourceFromJSONTyped,
    V1GlusterfsVolumeSourceToJSON,
} from './V1GlusterfsVolumeSource';
import type { V1ISCSIVolumeSource } from './V1ISCSIVolumeSource';
import {
    V1ISCSIVolumeSourceFromJSON,
    V1ISCSIVolumeSourceFromJSONTyped,
    V1ISCSIVolumeSourceToJSON,
} from './V1ISCSIVolumeSource';
import type { V1PortworxVolumeSource } from './V1PortworxVolumeSource';
import {
    V1PortworxVolumeSourceFromJSON,
    V1PortworxVolumeSourceFromJSONTyped,
    V1PortworxVolumeSourceToJSON,
} from './V1PortworxVolumeSource';
import type { V1QuobyteVolumeSource } from './V1QuobyteVolumeSource';
import {
    V1QuobyteVolumeSourceFromJSON,
    V1QuobyteVolumeSourceFromJSONTyped,
    V1QuobyteVolumeSourceToJSON,
} from './V1QuobyteVolumeSource';
import type { V1FCVolumeSource } from './V1FCVolumeSource';
import {
    V1FCVolumeSourceFromJSON,
    V1FCVolumeSourceFromJSONTyped,
    V1FCVolumeSourceToJSON,
} from './V1FCVolumeSource';
import type { V1FlockerVolumeSource } from './V1FlockerVolumeSource';
import {
    V1FlockerVolumeSourceFromJSON,
    V1FlockerVolumeSourceFromJSONTyped,
    V1FlockerVolumeSourceToJSON,
} from './V1FlockerVolumeSource';
import type { V1AzureFileVolumeSource } from './V1AzureFileVolumeSource';
import {
    V1AzureFileVolumeSourceFromJSON,
    V1AzureFileVolumeSourceFromJSONTyped,
    V1AzureFileVolumeSourceToJSON,
} from './V1AzureFileVolumeSource';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 * @export
 * @interface V1Volume
 */
export interface V1Volume {
    /**
     * 
     * @type {V1AWSElasticBlockStoreVolumeSource}
     * @memberof V1Volume
     */
    awsElasticBlockStore?: V1AWSElasticBlockStoreVolumeSource;
    /**
     * 
     * @type {V1AzureDiskVolumeSource}
     * @memberof V1Volume
     */
    azureDisk?: V1AzureDiskVolumeSource;
    /**
     * 
     * @type {V1AzureFileVolumeSource}
     * @memberof V1Volume
     */
    azureFile?: V1AzureFileVolumeSource;
    /**
     * 
     * @type {V1CephFSVolumeSource}
     * @memberof V1Volume
     */
    cephfs?: V1CephFSVolumeSource;
    /**
     * 
     * @type {V1CinderVolumeSource}
     * @memberof V1Volume
     */
    cinder?: V1CinderVolumeSource;
    /**
     * 
     * @type {V1ConfigMapVolumeSource}
     * @memberof V1Volume
     */
    configMap?: V1ConfigMapVolumeSource;
    /**
     * 
     * @type {V1CSIVolumeSource}
     * @memberof V1Volume
     */
    csi?: V1CSIVolumeSource;
    /**
     * 
     * @type {V1DownwardAPIVolumeSource}
     * @memberof V1Volume
     */
    downwardAPI?: V1DownwardAPIVolumeSource;
    /**
     * 
     * @type {V1EmptyDirVolumeSource}
     * @memberof V1Volume
     */
    emptyDir?: V1EmptyDirVolumeSource;
    /**
     * 
     * @type {V1EphemeralVolumeSource}
     * @memberof V1Volume
     */
    ephemeral?: V1EphemeralVolumeSource;
    /**
     * 
     * @type {V1FCVolumeSource}
     * @memberof V1Volume
     */
    fc?: V1FCVolumeSource;
    /**
     * 
     * @type {V1FlexVolumeSource}
     * @memberof V1Volume
     */
    flexVolume?: V1FlexVolumeSource;
    /**
     * 
     * @type {V1FlockerVolumeSource}
     * @memberof V1Volume
     */
    flocker?: V1FlockerVolumeSource;
    /**
     * 
     * @type {V1GCEPersistentDiskVolumeSource}
     * @memberof V1Volume
     */
    gcePersistentDisk?: V1GCEPersistentDiskVolumeSource;
    /**
     * 
     * @type {V1GitRepoVolumeSource}
     * @memberof V1Volume
     */
    gitRepo?: V1GitRepoVolumeSource;
    /**
     * 
     * @type {V1GlusterfsVolumeSource}
     * @memberof V1Volume
     */
    glusterfs?: V1GlusterfsVolumeSource;
    /**
     * 
     * @type {V1HostPathVolumeSource}
     * @memberof V1Volume
     */
    hostPath?: V1HostPathVolumeSource;
    /**
     * 
     * @type {V1ISCSIVolumeSource}
     * @memberof V1Volume
     */
    iscsi?: V1ISCSIVolumeSource;
    /**
     * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1Volume
     */
    name: string;
    /**
     * 
     * @type {V1NFSVolumeSource}
     * @memberof V1Volume
     */
    nfs?: V1NFSVolumeSource;
    /**
     * 
     * @type {V1PersistentVolumeClaimVolumeSource}
     * @memberof V1Volume
     */
    persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
    /**
     * 
     * @type {V1PhotonPersistentDiskVolumeSource}
     * @memberof V1Volume
     */
    photonPersistentDisk?: V1PhotonPersistentDiskVolumeSource;
    /**
     * 
     * @type {V1PortworxVolumeSource}
     * @memberof V1Volume
     */
    portworxVolume?: V1PortworxVolumeSource;
    /**
     * 
     * @type {V1ProjectedVolumeSource}
     * @memberof V1Volume
     */
    projected?: V1ProjectedVolumeSource;
    /**
     * 
     * @type {V1QuobyteVolumeSource}
     * @memberof V1Volume
     */
    quobyte?: V1QuobyteVolumeSource;
    /**
     * 
     * @type {V1RBDVolumeSource}
     * @memberof V1Volume
     */
    rbd?: V1RBDVolumeSource;
    /**
     * 
     * @type {V1ScaleIOVolumeSource}
     * @memberof V1Volume
     */
    scaleIO?: V1ScaleIOVolumeSource;
    /**
     * 
     * @type {V1SecretVolumeSource}
     * @memberof V1Volume
     */
    secret?: V1SecretVolumeSource;
    /**
     * 
     * @type {V1StorageOSVolumeSource}
     * @memberof V1Volume
     */
    storageos?: V1StorageOSVolumeSource;
    /**
     * 
     * @type {V1VsphereVirtualDiskVolumeSource}
     * @memberof V1Volume
     */
    vsphereVolume?: V1VsphereVirtualDiskVolumeSource;
}

/**
 * Check if a given object implements the V1Volume interface.
 */
export function instanceOfV1Volume(value: object): value is V1Volume {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1VolumeFromJSON(json: any): V1Volume {
    return V1VolumeFromJSONTyped(json, false);
}

export function V1VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Volume {
    if (json == null) {
        return json;
    }
    return {
        
        'awsElasticBlockStore': json['awsElasticBlockStore'] == null ? undefined : V1AWSElasticBlockStoreVolumeSourceFromJSON(json['awsElasticBlockStore']),
        'azureDisk': json['azureDisk'] == null ? undefined : V1AzureDiskVolumeSourceFromJSON(json['azureDisk']),
        'azureFile': json['azureFile'] == null ? undefined : V1AzureFileVolumeSourceFromJSON(json['azureFile']),
        'cephfs': json['cephfs'] == null ? undefined : V1CephFSVolumeSourceFromJSON(json['cephfs']),
        'cinder': json['cinder'] == null ? undefined : V1CinderVolumeSourceFromJSON(json['cinder']),
        'configMap': json['configMap'] == null ? undefined : V1ConfigMapVolumeSourceFromJSON(json['configMap']),
        'csi': json['csi'] == null ? undefined : V1CSIVolumeSourceFromJSON(json['csi']),
        'downwardAPI': json['downwardAPI'] == null ? undefined : V1DownwardAPIVolumeSourceFromJSON(json['downwardAPI']),
        'emptyDir': json['emptyDir'] == null ? undefined : V1EmptyDirVolumeSourceFromJSON(json['emptyDir']),
        'ephemeral': json['ephemeral'] == null ? undefined : V1EphemeralVolumeSourceFromJSON(json['ephemeral']),
        'fc': json['fc'] == null ? undefined : V1FCVolumeSourceFromJSON(json['fc']),
        'flexVolume': json['flexVolume'] == null ? undefined : V1FlexVolumeSourceFromJSON(json['flexVolume']),
        'flocker': json['flocker'] == null ? undefined : V1FlockerVolumeSourceFromJSON(json['flocker']),
        'gcePersistentDisk': json['gcePersistentDisk'] == null ? undefined : V1GCEPersistentDiskVolumeSourceFromJSON(json['gcePersistentDisk']),
        'gitRepo': json['gitRepo'] == null ? undefined : V1GitRepoVolumeSourceFromJSON(json['gitRepo']),
        'glusterfs': json['glusterfs'] == null ? undefined : V1GlusterfsVolumeSourceFromJSON(json['glusterfs']),
        'hostPath': json['hostPath'] == null ? undefined : V1HostPathVolumeSourceFromJSON(json['hostPath']),
        'iscsi': json['iscsi'] == null ? undefined : V1ISCSIVolumeSourceFromJSON(json['iscsi']),
        'name': json['name'],
        'nfs': json['nfs'] == null ? undefined : V1NFSVolumeSourceFromJSON(json['nfs']),
        'persistentVolumeClaim': json['persistentVolumeClaim'] == null ? undefined : V1PersistentVolumeClaimVolumeSourceFromJSON(json['persistentVolumeClaim']),
        'photonPersistentDisk': json['photonPersistentDisk'] == null ? undefined : V1PhotonPersistentDiskVolumeSourceFromJSON(json['photonPersistentDisk']),
        'portworxVolume': json['portworxVolume'] == null ? undefined : V1PortworxVolumeSourceFromJSON(json['portworxVolume']),
        'projected': json['projected'] == null ? undefined : V1ProjectedVolumeSourceFromJSON(json['projected']),
        'quobyte': json['quobyte'] == null ? undefined : V1QuobyteVolumeSourceFromJSON(json['quobyte']),
        'rbd': json['rbd'] == null ? undefined : V1RBDVolumeSourceFromJSON(json['rbd']),
        'scaleIO': json['scaleIO'] == null ? undefined : V1ScaleIOVolumeSourceFromJSON(json['scaleIO']),
        'secret': json['secret'] == null ? undefined : V1SecretVolumeSourceFromJSON(json['secret']),
        'storageos': json['storageos'] == null ? undefined : V1StorageOSVolumeSourceFromJSON(json['storageos']),
        'vsphereVolume': json['vsphereVolume'] == null ? undefined : V1VsphereVirtualDiskVolumeSourceFromJSON(json['vsphereVolume']),
    };
}

export function V1VolumeToJSON(value?: V1Volume | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'awsElasticBlockStore': V1AWSElasticBlockStoreVolumeSourceToJSON(value['awsElasticBlockStore']),
        'azureDisk': V1AzureDiskVolumeSourceToJSON(value['azureDisk']),
        'azureFile': V1AzureFileVolumeSourceToJSON(value['azureFile']),
        'cephfs': V1CephFSVolumeSourceToJSON(value['cephfs']),
        'cinder': V1CinderVolumeSourceToJSON(value['cinder']),
        'configMap': V1ConfigMapVolumeSourceToJSON(value['configMap']),
        'csi': V1CSIVolumeSourceToJSON(value['csi']),
        'downwardAPI': V1DownwardAPIVolumeSourceToJSON(value['downwardAPI']),
        'emptyDir': V1EmptyDirVolumeSourceToJSON(value['emptyDir']),
        'ephemeral': V1EphemeralVolumeSourceToJSON(value['ephemeral']),
        'fc': V1FCVolumeSourceToJSON(value['fc']),
        'flexVolume': V1FlexVolumeSourceToJSON(value['flexVolume']),
        'flocker': V1FlockerVolumeSourceToJSON(value['flocker']),
        'gcePersistentDisk': V1GCEPersistentDiskVolumeSourceToJSON(value['gcePersistentDisk']),
        'gitRepo': V1GitRepoVolumeSourceToJSON(value['gitRepo']),
        'glusterfs': V1GlusterfsVolumeSourceToJSON(value['glusterfs']),
        'hostPath': V1HostPathVolumeSourceToJSON(value['hostPath']),
        'iscsi': V1ISCSIVolumeSourceToJSON(value['iscsi']),
        'name': value['name'],
        'nfs': V1NFSVolumeSourceToJSON(value['nfs']),
        'persistentVolumeClaim': V1PersistentVolumeClaimVolumeSourceToJSON(value['persistentVolumeClaim']),
        'photonPersistentDisk': V1PhotonPersistentDiskVolumeSourceToJSON(value['photonPersistentDisk']),
        'portworxVolume': V1PortworxVolumeSourceToJSON(value['portworxVolume']),
        'projected': V1ProjectedVolumeSourceToJSON(value['projected']),
        'quobyte': V1QuobyteVolumeSourceToJSON(value['quobyte']),
        'rbd': V1RBDVolumeSourceToJSON(value['rbd']),
        'scaleIO': V1ScaleIOVolumeSourceToJSON(value['scaleIO']),
        'secret': V1SecretVolumeSourceToJSON(value['secret']),
        'storageos': V1StorageOSVolumeSourceToJSON(value['storageos']),
        'vsphereVolume': V1VsphereVirtualDiskVolumeSourceToJSON(value['vsphereVolume']),
    };
}

