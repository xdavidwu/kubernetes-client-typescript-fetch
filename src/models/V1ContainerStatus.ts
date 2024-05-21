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
import type { V1VolumeMountStatus } from './V1VolumeMountStatus';
import {
    V1VolumeMountStatusFromJSON,
    V1VolumeMountStatusFromJSONTyped,
    V1VolumeMountStatusToJSON,
} from './V1VolumeMountStatus';
import type { V1ContainerState } from './V1ContainerState';
import {
    V1ContainerStateFromJSON,
    V1ContainerStateFromJSONTyped,
    V1ContainerStateToJSON,
} from './V1ContainerState';
import type { V1ResourceRequirements } from './V1ResourceRequirements';
import {
    V1ResourceRequirementsFromJSON,
    V1ResourceRequirementsFromJSONTyped,
    V1ResourceRequirementsToJSON,
} from './V1ResourceRequirements';

/**
 * ContainerStatus contains details for the current status of this container.
 * @export
 * @interface V1ContainerStatus
 */
export interface V1ContainerStatus {
    /**
     * AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
     * @type {{ [key: string]: string; }}
     * @memberof V1ContainerStatus
     */
    allocatedResources?: { [key: string]: string; };
    /**
     * ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").
     * @type {string}
     * @memberof V1ContainerStatus
     */
    containerID?: string;
    /**
     * Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
     * @type {string}
     * @memberof V1ContainerStatus
     */
    image: string;
    /**
     * ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
     * @type {string}
     * @memberof V1ContainerStatus
     */
    imageID: string;
    /**
     * 
     * @type {V1ContainerState}
     * @memberof V1ContainerStatus
     */
    lastState?: V1ContainerState;
    /**
     * Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
     * @type {string}
     * @memberof V1ContainerStatus
     */
    name: string;
    /**
     * Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).
     * 
     * The value is typically used to determine whether a container is ready to accept traffic.
     * @type {boolean}
     * @memberof V1ContainerStatus
     */
    ready: boolean;
    /**
     * 
     * @type {V1ResourceRequirements}
     * @memberof V1ContainerStatus
     */
    resources?: V1ResourceRequirements;
    /**
     * RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
     * @type {number}
     * @memberof V1ContainerStatus
     */
    restartCount: number;
    /**
     * Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
     * @type {boolean}
     * @memberof V1ContainerStatus
     */
    started?: boolean;
    /**
     * 
     * @type {V1ContainerState}
     * @memberof V1ContainerStatus
     */
    state?: V1ContainerState;
    /**
     * Status of volume mounts.
     * @type {Array<V1VolumeMountStatus>}
     * @memberof V1ContainerStatus
     */
    volumeMounts?: Array<V1VolumeMountStatus>;
}

/**
 * Check if a given object implements the V1ContainerStatus interface.
 */
export function instanceOfV1ContainerStatus(value: object): value is V1ContainerStatus {
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('imageID' in value) || value['imageID'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('ready' in value) || value['ready'] === undefined) return false;
    if (!('restartCount' in value) || value['restartCount'] === undefined) return false;
    return true;
}

export function V1ContainerStatusFromJSON(json: any): V1ContainerStatus {
    return V1ContainerStatusFromJSONTyped(json, false);
}

export function V1ContainerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'allocatedResources': json['allocatedResources'] == null ? undefined : json['allocatedResources'],
        'containerID': json['containerID'] == null ? undefined : json['containerID'],
        'image': json['image'],
        'imageID': json['imageID'],
        'lastState': json['lastState'] == null ? undefined : V1ContainerStateFromJSON(json['lastState']),
        'name': json['name'],
        'ready': json['ready'],
        'resources': json['resources'] == null ? undefined : V1ResourceRequirementsFromJSON(json['resources']),
        'restartCount': json['restartCount'],
        'started': json['started'] == null ? undefined : json['started'],
        'state': json['state'] == null ? undefined : V1ContainerStateFromJSON(json['state']),
        'volumeMounts': json['volumeMounts'] == null ? undefined : ((json['volumeMounts'] as Array<any>).map(V1VolumeMountStatusFromJSON)),
    };
}

export function V1ContainerStatusToJSON(value?: V1ContainerStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allocatedResources': value['allocatedResources'],
        'containerID': value['containerID'],
        'image': value['image'],
        'imageID': value['imageID'],
        'lastState': V1ContainerStateToJSON(value['lastState']),
        'name': value['name'],
        'ready': value['ready'],
        'resources': V1ResourceRequirementsToJSON(value['resources']),
        'restartCount': value['restartCount'],
        'started': value['started'],
        'state': V1ContainerStateToJSON(value['state']),
        'volumeMounts': value['volumeMounts'] == null ? undefined : ((value['volumeMounts'] as Array<any>).map(V1VolumeMountStatusToJSON)),
    };
}

