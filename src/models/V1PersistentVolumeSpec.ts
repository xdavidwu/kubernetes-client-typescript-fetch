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
import type { V1CephFSPersistentVolumeSource } from './V1CephFSPersistentVolumeSource';
import {
    V1CephFSPersistentVolumeSourceFromJSON,
    V1CephFSPersistentVolumeSourceFromJSONTyped,
    V1CephFSPersistentVolumeSourceToJSON,
} from './V1CephFSPersistentVolumeSource';
import type { V1CinderPersistentVolumeSource } from './V1CinderPersistentVolumeSource';
import {
    V1CinderPersistentVolumeSourceFromJSON,
    V1CinderPersistentVolumeSourceFromJSONTyped,
    V1CinderPersistentVolumeSourceToJSON,
} from './V1CinderPersistentVolumeSource';
import type { V1LocalVolumeSource } from './V1LocalVolumeSource';
import {
    V1LocalVolumeSourceFromJSON,
    V1LocalVolumeSourceFromJSONTyped,
    V1LocalVolumeSourceToJSON,
} from './V1LocalVolumeSource';
import type { V1VsphereVirtualDiskVolumeSource } from './V1VsphereVirtualDiskVolumeSource';
import {
    V1VsphereVirtualDiskVolumeSourceFromJSON,
    V1VsphereVirtualDiskVolumeSourceFromJSONTyped,
    V1VsphereVirtualDiskVolumeSourceToJSON,
} from './V1VsphereVirtualDiskVolumeSource';
import type { V1GCEPersistentDiskVolumeSource } from './V1GCEPersistentDiskVolumeSource';
import {
    V1GCEPersistentDiskVolumeSourceFromJSON,
    V1GCEPersistentDiskVolumeSourceFromJSONTyped,
    V1GCEPersistentDiskVolumeSourceToJSON,
} from './V1GCEPersistentDiskVolumeSource';
import type { V1FlexPersistentVolumeSource } from './V1FlexPersistentVolumeSource';
import {
    V1FlexPersistentVolumeSourceFromJSON,
    V1FlexPersistentVolumeSourceFromJSONTyped,
    V1FlexPersistentVolumeSourceToJSON,
} from './V1FlexPersistentVolumeSource';
import type { V1PhotonPersistentDiskVolumeSource } from './V1PhotonPersistentDiskVolumeSource';
import {
    V1PhotonPersistentDiskVolumeSourceFromJSON,
    V1PhotonPersistentDiskVolumeSourceFromJSONTyped,
    V1PhotonPersistentDiskVolumeSourceToJSON,
} from './V1PhotonPersistentDiskVolumeSource';
import type { V1ObjectReference } from './V1ObjectReference';
import {
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './V1ObjectReference';
import type { V1HostPathVolumeSource } from './V1HostPathVolumeSource';
import {
    V1HostPathVolumeSourceFromJSON,
    V1HostPathVolumeSourceFromJSONTyped,
    V1HostPathVolumeSourceToJSON,
} from './V1HostPathVolumeSource';
import type { V1NFSVolumeSource } from './V1NFSVolumeSource';
import {
    V1NFSVolumeSourceFromJSON,
    V1NFSVolumeSourceFromJSONTyped,
    V1NFSVolumeSourceToJSON,
} from './V1NFSVolumeSource';
import type { V1ScaleIOPersistentVolumeSource } from './V1ScaleIOPersistentVolumeSource';
import {
    V1ScaleIOPersistentVolumeSourceFromJSON,
    V1ScaleIOPersistentVolumeSourceFromJSONTyped,
    V1ScaleIOPersistentVolumeSourceToJSON,
} from './V1ScaleIOPersistentVolumeSource';
import type { V1CSIPersistentVolumeSource } from './V1CSIPersistentVolumeSource';
import {
    V1CSIPersistentVolumeSourceFromJSON,
    V1CSIPersistentVolumeSourceFromJSONTyped,
    V1CSIPersistentVolumeSourceToJSON,
} from './V1CSIPersistentVolumeSource';
import type { V1ISCSIPersistentVolumeSource } from './V1ISCSIPersistentVolumeSource';
import {
    V1ISCSIPersistentVolumeSourceFromJSON,
    V1ISCSIPersistentVolumeSourceFromJSONTyped,
    V1ISCSIPersistentVolumeSourceToJSON,
} from './V1ISCSIPersistentVolumeSource';
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
import type { V1StorageOSPersistentVolumeSource } from './V1StorageOSPersistentVolumeSource';
import {
    V1StorageOSPersistentVolumeSourceFromJSON,
    V1StorageOSPersistentVolumeSourceFromJSONTyped,
    V1StorageOSPersistentVolumeSourceToJSON,
} from './V1StorageOSPersistentVolumeSource';
import type { V1RBDPersistentVolumeSource } from './V1RBDPersistentVolumeSource';
import {
    V1RBDPersistentVolumeSourceFromJSON,
    V1RBDPersistentVolumeSourceFromJSONTyped,
    V1RBDPersistentVolumeSourceToJSON,
} from './V1RBDPersistentVolumeSource';
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
import type { V1GlusterfsPersistentVolumeSource } from './V1GlusterfsPersistentVolumeSource';
import {
    V1GlusterfsPersistentVolumeSourceFromJSON,
    V1GlusterfsPersistentVolumeSourceFromJSONTyped,
    V1GlusterfsPersistentVolumeSourceToJSON,
} from './V1GlusterfsPersistentVolumeSource';
import type { V1AWSElasticBlockStoreVolumeSource } from './V1AWSElasticBlockStoreVolumeSource';
import {
    V1AWSElasticBlockStoreVolumeSourceFromJSON,
    V1AWSElasticBlockStoreVolumeSourceFromJSONTyped,
    V1AWSElasticBlockStoreVolumeSourceToJSON,
} from './V1AWSElasticBlockStoreVolumeSource';
import type { V1AzureFilePersistentVolumeSource } from './V1AzureFilePersistentVolumeSource';
import {
    V1AzureFilePersistentVolumeSourceFromJSON,
    V1AzureFilePersistentVolumeSourceFromJSONTyped,
    V1AzureFilePersistentVolumeSourceToJSON,
} from './V1AzureFilePersistentVolumeSource';
import type { V1AzureDiskVolumeSource } from './V1AzureDiskVolumeSource';
import {
    V1AzureDiskVolumeSourceFromJSON,
    V1AzureDiskVolumeSourceFromJSONTyped,
    V1AzureDiskVolumeSourceToJSON,
} from './V1AzureDiskVolumeSource';
import type { V1VolumeNodeAffinity } from './V1VolumeNodeAffinity';
import {
    V1VolumeNodeAffinityFromJSON,
    V1VolumeNodeAffinityFromJSONTyped,
    V1VolumeNodeAffinityToJSON,
} from './V1VolumeNodeAffinity';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 * @export
 * @interface V1PersistentVolumeSpec
 */
export interface V1PersistentVolumeSpec {
    /**
     * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
     * @type {Array<string>}
     * @memberof V1PersistentVolumeSpec
     */
    accessModes?: Array<string>;
    /**
     * 
     * @type {V1AWSElasticBlockStoreVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    awsElasticBlockStore?: V1AWSElasticBlockStoreVolumeSource;
    /**
     * 
     * @type {V1AzureDiskVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    azureDisk?: V1AzureDiskVolumeSource;
    /**
     * 
     * @type {V1AzureFilePersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    azureFile?: V1AzureFilePersistentVolumeSource;
    /**
     * capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
     * @type {{ [key: string]: string; }}
     * @memberof V1PersistentVolumeSpec
     */
    capacity?: { [key: string]: string; };
    /**
     * 
     * @type {V1CephFSPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    cephfs?: V1CephFSPersistentVolumeSource;
    /**
     * 
     * @type {V1CinderPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    cinder?: V1CinderPersistentVolumeSource;
    /**
     * 
     * @type {V1ObjectReference}
     * @memberof V1PersistentVolumeSpec
     */
    claimRef?: V1ObjectReference;
    /**
     * 
     * @type {V1CSIPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    csi?: V1CSIPersistentVolumeSource;
    /**
     * 
     * @type {V1FCVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    fc?: V1FCVolumeSource;
    /**
     * 
     * @type {V1FlexPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    flexVolume?: V1FlexPersistentVolumeSource;
    /**
     * 
     * @type {V1FlockerVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    flocker?: V1FlockerVolumeSource;
    /**
     * 
     * @type {V1GCEPersistentDiskVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    gcePersistentDisk?: V1GCEPersistentDiskVolumeSource;
    /**
     * 
     * @type {V1GlusterfsPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    glusterfs?: V1GlusterfsPersistentVolumeSource;
    /**
     * 
     * @type {V1HostPathVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    hostPath?: V1HostPathVolumeSource;
    /**
     * 
     * @type {V1ISCSIPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    iscsi?: V1ISCSIPersistentVolumeSource;
    /**
     * 
     * @type {V1LocalVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    local?: V1LocalVolumeSource;
    /**
     * mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
     * @type {Array<string>}
     * @memberof V1PersistentVolumeSpec
     */
    mountOptions?: Array<string>;
    /**
     * 
     * @type {V1NFSVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    nfs?: V1NFSVolumeSource;
    /**
     * 
     * @type {V1VolumeNodeAffinity}
     * @memberof V1PersistentVolumeSpec
     */
    nodeAffinity?: V1VolumeNodeAffinity;
    /**
     * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
     * @type {string}
     * @memberof V1PersistentVolumeSpec
     */
    persistentVolumeReclaimPolicy?: string;
    /**
     * 
     * @type {V1PhotonPersistentDiskVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    photonPersistentDisk?: V1PhotonPersistentDiskVolumeSource;
    /**
     * 
     * @type {V1PortworxVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    portworxVolume?: V1PortworxVolumeSource;
    /**
     * 
     * @type {V1QuobyteVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    quobyte?: V1QuobyteVolumeSource;
    /**
     * 
     * @type {V1RBDPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    rbd?: V1RBDPersistentVolumeSource;
    /**
     * 
     * @type {V1ScaleIOPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    scaleIO?: V1ScaleIOPersistentVolumeSource;
    /**
     * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
     * @type {string}
     * @memberof V1PersistentVolumeSpec
     */
    storageClassName?: string;
    /**
     * 
     * @type {V1StorageOSPersistentVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    storageos?: V1StorageOSPersistentVolumeSource;
    /**
     * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.
     * @type {string}
     * @memberof V1PersistentVolumeSpec
     */
    volumeAttributesClassName?: string;
    /**
     * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
     * @type {string}
     * @memberof V1PersistentVolumeSpec
     */
    volumeMode?: string;
    /**
     * 
     * @type {V1VsphereVirtualDiskVolumeSource}
     * @memberof V1PersistentVolumeSpec
     */
    vsphereVolume?: V1VsphereVirtualDiskVolumeSource;
}

/**
 * Check if a given object implements the V1PersistentVolumeSpec interface.
 */
export function instanceOfV1PersistentVolumeSpec(value: object): value is V1PersistentVolumeSpec {
    return true;
}

export function V1PersistentVolumeSpecFromJSON(json: any): V1PersistentVolumeSpec {
    return V1PersistentVolumeSpecFromJSONTyped(json, false);
}

export function V1PersistentVolumeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'accessModes': json['accessModes'] == null ? undefined : json['accessModes'],
        'awsElasticBlockStore': json['awsElasticBlockStore'] == null ? undefined : V1AWSElasticBlockStoreVolumeSourceFromJSON(json['awsElasticBlockStore']),
        'azureDisk': json['azureDisk'] == null ? undefined : V1AzureDiskVolumeSourceFromJSON(json['azureDisk']),
        'azureFile': json['azureFile'] == null ? undefined : V1AzureFilePersistentVolumeSourceFromJSON(json['azureFile']),
        'capacity': json['capacity'] == null ? undefined : json['capacity'],
        'cephfs': json['cephfs'] == null ? undefined : V1CephFSPersistentVolumeSourceFromJSON(json['cephfs']),
        'cinder': json['cinder'] == null ? undefined : V1CinderPersistentVolumeSourceFromJSON(json['cinder']),
        'claimRef': json['claimRef'] == null ? undefined : V1ObjectReferenceFromJSON(json['claimRef']),
        'csi': json['csi'] == null ? undefined : V1CSIPersistentVolumeSourceFromJSON(json['csi']),
        'fc': json['fc'] == null ? undefined : V1FCVolumeSourceFromJSON(json['fc']),
        'flexVolume': json['flexVolume'] == null ? undefined : V1FlexPersistentVolumeSourceFromJSON(json['flexVolume']),
        'flocker': json['flocker'] == null ? undefined : V1FlockerVolumeSourceFromJSON(json['flocker']),
        'gcePersistentDisk': json['gcePersistentDisk'] == null ? undefined : V1GCEPersistentDiskVolumeSourceFromJSON(json['gcePersistentDisk']),
        'glusterfs': json['glusterfs'] == null ? undefined : V1GlusterfsPersistentVolumeSourceFromJSON(json['glusterfs']),
        'hostPath': json['hostPath'] == null ? undefined : V1HostPathVolumeSourceFromJSON(json['hostPath']),
        'iscsi': json['iscsi'] == null ? undefined : V1ISCSIPersistentVolumeSourceFromJSON(json['iscsi']),
        'local': json['local'] == null ? undefined : V1LocalVolumeSourceFromJSON(json['local']),
        'mountOptions': json['mountOptions'] == null ? undefined : json['mountOptions'],
        'nfs': json['nfs'] == null ? undefined : V1NFSVolumeSourceFromJSON(json['nfs']),
        'nodeAffinity': json['nodeAffinity'] == null ? undefined : V1VolumeNodeAffinityFromJSON(json['nodeAffinity']),
        'persistentVolumeReclaimPolicy': json['persistentVolumeReclaimPolicy'] == null ? undefined : json['persistentVolumeReclaimPolicy'],
        'photonPersistentDisk': json['photonPersistentDisk'] == null ? undefined : V1PhotonPersistentDiskVolumeSourceFromJSON(json['photonPersistentDisk']),
        'portworxVolume': json['portworxVolume'] == null ? undefined : V1PortworxVolumeSourceFromJSON(json['portworxVolume']),
        'quobyte': json['quobyte'] == null ? undefined : V1QuobyteVolumeSourceFromJSON(json['quobyte']),
        'rbd': json['rbd'] == null ? undefined : V1RBDPersistentVolumeSourceFromJSON(json['rbd']),
        'scaleIO': json['scaleIO'] == null ? undefined : V1ScaleIOPersistentVolumeSourceFromJSON(json['scaleIO']),
        'storageClassName': json['storageClassName'] == null ? undefined : json['storageClassName'],
        'storageos': json['storageos'] == null ? undefined : V1StorageOSPersistentVolumeSourceFromJSON(json['storageos']),
        'volumeAttributesClassName': json['volumeAttributesClassName'] == null ? undefined : json['volumeAttributesClassName'],
        'volumeMode': json['volumeMode'] == null ? undefined : json['volumeMode'],
        'vsphereVolume': json['vsphereVolume'] == null ? undefined : V1VsphereVirtualDiskVolumeSourceFromJSON(json['vsphereVolume']),
    };
}

export function V1PersistentVolumeSpecToJSON(value?: V1PersistentVolumeSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accessModes': value['accessModes'],
        'awsElasticBlockStore': V1AWSElasticBlockStoreVolumeSourceToJSON(value['awsElasticBlockStore']),
        'azureDisk': V1AzureDiskVolumeSourceToJSON(value['azureDisk']),
        'azureFile': V1AzureFilePersistentVolumeSourceToJSON(value['azureFile']),
        'capacity': value['capacity'],
        'cephfs': V1CephFSPersistentVolumeSourceToJSON(value['cephfs']),
        'cinder': V1CinderPersistentVolumeSourceToJSON(value['cinder']),
        'claimRef': V1ObjectReferenceToJSON(value['claimRef']),
        'csi': V1CSIPersistentVolumeSourceToJSON(value['csi']),
        'fc': V1FCVolumeSourceToJSON(value['fc']),
        'flexVolume': V1FlexPersistentVolumeSourceToJSON(value['flexVolume']),
        'flocker': V1FlockerVolumeSourceToJSON(value['flocker']),
        'gcePersistentDisk': V1GCEPersistentDiskVolumeSourceToJSON(value['gcePersistentDisk']),
        'glusterfs': V1GlusterfsPersistentVolumeSourceToJSON(value['glusterfs']),
        'hostPath': V1HostPathVolumeSourceToJSON(value['hostPath']),
        'iscsi': V1ISCSIPersistentVolumeSourceToJSON(value['iscsi']),
        'local': V1LocalVolumeSourceToJSON(value['local']),
        'mountOptions': value['mountOptions'],
        'nfs': V1NFSVolumeSourceToJSON(value['nfs']),
        'nodeAffinity': V1VolumeNodeAffinityToJSON(value['nodeAffinity']),
        'persistentVolumeReclaimPolicy': value['persistentVolumeReclaimPolicy'],
        'photonPersistentDisk': V1PhotonPersistentDiskVolumeSourceToJSON(value['photonPersistentDisk']),
        'portworxVolume': V1PortworxVolumeSourceToJSON(value['portworxVolume']),
        'quobyte': V1QuobyteVolumeSourceToJSON(value['quobyte']),
        'rbd': V1RBDPersistentVolumeSourceToJSON(value['rbd']),
        'scaleIO': V1ScaleIOPersistentVolumeSourceToJSON(value['scaleIO']),
        'storageClassName': value['storageClassName'],
        'storageos': V1StorageOSPersistentVolumeSourceToJSON(value['storageos']),
        'volumeAttributesClassName': value['volumeAttributesClassName'],
        'volumeMode': value['volumeMode'],
        'vsphereVolume': V1VsphereVirtualDiskVolumeSourceToJSON(value['vsphereVolume']),
    };
}

