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
import type { V1NodeDaemonEndpoints } from './V1NodeDaemonEndpoints';
import {
    V1NodeDaemonEndpointsFromJSON,
    V1NodeDaemonEndpointsFromJSONTyped,
    V1NodeDaemonEndpointsToJSON,
} from './V1NodeDaemonEndpoints';
import type { V1AttachedVolume } from './V1AttachedVolume';
import {
    V1AttachedVolumeFromJSON,
    V1AttachedVolumeFromJSONTyped,
    V1AttachedVolumeToJSON,
} from './V1AttachedVolume';
import type { V1ContainerImage } from './V1ContainerImage';
import {
    V1ContainerImageFromJSON,
    V1ContainerImageFromJSONTyped,
    V1ContainerImageToJSON,
} from './V1ContainerImage';
import type { V1NodeCondition } from './V1NodeCondition';
import {
    V1NodeConditionFromJSON,
    V1NodeConditionFromJSONTyped,
    V1NodeConditionToJSON,
} from './V1NodeCondition';
import type { V1NodeConfigStatus } from './V1NodeConfigStatus';
import {
    V1NodeConfigStatusFromJSON,
    V1NodeConfigStatusFromJSONTyped,
    V1NodeConfigStatusToJSON,
} from './V1NodeConfigStatus';
import type { V1NodeAddress } from './V1NodeAddress';
import {
    V1NodeAddressFromJSON,
    V1NodeAddressFromJSONTyped,
    V1NodeAddressToJSON,
} from './V1NodeAddress';
import type { V1NodeSystemInfo } from './V1NodeSystemInfo';
import {
    V1NodeSystemInfoFromJSON,
    V1NodeSystemInfoFromJSONTyped,
    V1NodeSystemInfoToJSON,
} from './V1NodeSystemInfo';
import type { V1NodeRuntimeHandler } from './V1NodeRuntimeHandler';
import {
    V1NodeRuntimeHandlerFromJSON,
    V1NodeRuntimeHandlerFromJSONTyped,
    V1NodeRuntimeHandlerToJSON,
} from './V1NodeRuntimeHandler';

/**
 * NodeStatus is information about the current status of a node.
 * @export
 * @interface V1NodeStatus
 */
export interface V1NodeStatus {
    /**
     * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP).
     * @type {Array<V1NodeAddress>}
     * @memberof V1NodeStatus
     */
    addresses?: Array<V1NodeAddress>;
    /**
     * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
     * @type {{ [key: string]: string; }}
     * @memberof V1NodeStatus
     */
    allocatable?: { [key: string]: string; };
    /**
     * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
     * @type {{ [key: string]: string; }}
     * @memberof V1NodeStatus
     */
    capacity?: { [key: string]: string; };
    /**
     * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
     * @type {Array<V1NodeCondition>}
     * @memberof V1NodeStatus
     */
    conditions?: Array<V1NodeCondition>;
    /**
     * 
     * @type {V1NodeConfigStatus}
     * @memberof V1NodeStatus
     */
    config?: V1NodeConfigStatus;
    /**
     * 
     * @type {V1NodeDaemonEndpoints}
     * @memberof V1NodeStatus
     */
    daemonEndpoints?: V1NodeDaemonEndpoints;
    /**
     * List of container images on this node
     * @type {Array<V1ContainerImage>}
     * @memberof V1NodeStatus
     */
    images?: Array<V1ContainerImage>;
    /**
     * 
     * @type {V1NodeSystemInfo}
     * @memberof V1NodeStatus
     */
    nodeInfo?: V1NodeSystemInfo;
    /**
     * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
     * @type {string}
     * @memberof V1NodeStatus
     */
    phase?: string;
    /**
     * The available runtime handlers.
     * @type {Array<V1NodeRuntimeHandler>}
     * @memberof V1NodeStatus
     */
    runtimeHandlers?: Array<V1NodeRuntimeHandler>;
    /**
     * List of volumes that are attached to the node.
     * @type {Array<V1AttachedVolume>}
     * @memberof V1NodeStatus
     */
    volumesAttached?: Array<V1AttachedVolume>;
    /**
     * List of attachable volumes in use (mounted) by the node.
     * @type {Array<string>}
     * @memberof V1NodeStatus
     */
    volumesInUse?: Array<string>;
}

/**
 * Check if a given object implements the V1NodeStatus interface.
 */
export function instanceOfV1NodeStatus(value: object): value is V1NodeStatus {
    return true;
}

export function V1NodeStatusFromJSON(json: any): V1NodeStatus {
    return V1NodeStatusFromJSONTyped(json, false);
}

export function V1NodeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'addresses': json['addresses'] == null ? undefined : ((json['addresses'] as Array<any>).map(V1NodeAddressFromJSON)),
        'allocatable': json['allocatable'] == null ? undefined : json['allocatable'],
        'capacity': json['capacity'] == null ? undefined : json['capacity'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1NodeConditionFromJSON)),
        'config': json['config'] == null ? undefined : V1NodeConfigStatusFromJSON(json['config']),
        'daemonEndpoints': json['daemonEndpoints'] == null ? undefined : V1NodeDaemonEndpointsFromJSON(json['daemonEndpoints']),
        'images': json['images'] == null ? undefined : ((json['images'] as Array<any>).map(V1ContainerImageFromJSON)),
        'nodeInfo': json['nodeInfo'] == null ? undefined : V1NodeSystemInfoFromJSON(json['nodeInfo']),
        'phase': json['phase'] == null ? undefined : json['phase'],
        'runtimeHandlers': json['runtimeHandlers'] == null ? undefined : ((json['runtimeHandlers'] as Array<any>).map(V1NodeRuntimeHandlerFromJSON)),
        'volumesAttached': json['volumesAttached'] == null ? undefined : ((json['volumesAttached'] as Array<any>).map(V1AttachedVolumeFromJSON)),
        'volumesInUse': json['volumesInUse'] == null ? undefined : json['volumesInUse'],
    };
}

export function V1NodeStatusToJSON(value?: V1NodeStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'addresses': value['addresses'] == null ? undefined : ((value['addresses'] as Array<any>).map(V1NodeAddressToJSON)),
        'allocatable': value['allocatable'],
        'capacity': value['capacity'],
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1NodeConditionToJSON)),
        'config': V1NodeConfigStatusToJSON(value['config']),
        'daemonEndpoints': V1NodeDaemonEndpointsToJSON(value['daemonEndpoints']),
        'images': value['images'] == null ? undefined : ((value['images'] as Array<any>).map(V1ContainerImageToJSON)),
        'nodeInfo': V1NodeSystemInfoToJSON(value['nodeInfo']),
        'phase': value['phase'],
        'runtimeHandlers': value['runtimeHandlers'] == null ? undefined : ((value['runtimeHandlers'] as Array<any>).map(V1NodeRuntimeHandlerToJSON)),
        'volumesAttached': value['volumesAttached'] == null ? undefined : ((value['volumesAttached'] as Array<any>).map(V1AttachedVolumeToJSON)),
        'volumesInUse': value['volumesInUse'],
    };
}

