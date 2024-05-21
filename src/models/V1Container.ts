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
import type { V1Lifecycle } from './V1Lifecycle';
import {
    V1LifecycleFromJSON,
    V1LifecycleFromJSONTyped,
    V1LifecycleToJSON,
} from './V1Lifecycle';
import type { V1EnvFromSource } from './V1EnvFromSource';
import {
    V1EnvFromSourceFromJSON,
    V1EnvFromSourceFromJSONTyped,
    V1EnvFromSourceToJSON,
} from './V1EnvFromSource';
import type { V1ContainerPort } from './V1ContainerPort';
import {
    V1ContainerPortFromJSON,
    V1ContainerPortFromJSONTyped,
    V1ContainerPortToJSON,
} from './V1ContainerPort';
import type { V1Probe } from './V1Probe';
import {
    V1ProbeFromJSON,
    V1ProbeFromJSONTyped,
    V1ProbeToJSON,
} from './V1Probe';
import type { V1SecurityContext } from './V1SecurityContext';
import {
    V1SecurityContextFromJSON,
    V1SecurityContextFromJSONTyped,
    V1SecurityContextToJSON,
} from './V1SecurityContext';
import type { V1EnvVar } from './V1EnvVar';
import {
    V1EnvVarFromJSON,
    V1EnvVarFromJSONTyped,
    V1EnvVarToJSON,
} from './V1EnvVar';
import type { V1ContainerResizePolicy } from './V1ContainerResizePolicy';
import {
    V1ContainerResizePolicyFromJSON,
    V1ContainerResizePolicyFromJSONTyped,
    V1ContainerResizePolicyToJSON,
} from './V1ContainerResizePolicy';
import type { V1ResourceRequirements } from './V1ResourceRequirements';
import {
    V1ResourceRequirementsFromJSON,
    V1ResourceRequirementsFromJSONTyped,
    V1ResourceRequirementsToJSON,
} from './V1ResourceRequirements';
import type { V1VolumeDevice } from './V1VolumeDevice';
import {
    V1VolumeDeviceFromJSON,
    V1VolumeDeviceFromJSONTyped,
    V1VolumeDeviceToJSON,
} from './V1VolumeDevice';
import type { V1VolumeMount } from './V1VolumeMount';
import {
    V1VolumeMountFromJSON,
    V1VolumeMountFromJSONTyped,
    V1VolumeMountToJSON,
} from './V1VolumeMount';

/**
 * A single application container that you want to run within a pod.
 * @export
 * @interface V1Container
 */
export interface V1Container {
    /**
     * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     * @type {Array<string>}
     * @memberof V1Container
     */
    args?: Array<string>;
    /**
     * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     * @type {Array<string>}
     * @memberof V1Container
     */
    command?: Array<string>;
    /**
     * List of environment variables to set in the container. Cannot be updated.
     * @type {Array<V1EnvVar>}
     * @memberof V1Container
     */
    env?: Array<V1EnvVar>;
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     * @type {Array<V1EnvFromSource>}
     * @memberof V1Container
     */
    envFrom?: Array<V1EnvFromSource>;
    /**
     * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
     * @type {string}
     * @memberof V1Container
     */
    image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     * @type {string}
     * @memberof V1Container
     */
    imagePullPolicy?: string;
    /**
     * 
     * @type {V1Lifecycle}
     * @memberof V1Container
     */
    lifecycle?: V1Lifecycle;
    /**
     * 
     * @type {V1Probe}
     * @memberof V1Container
     */
    livenessProbe?: V1Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
     * @type {string}
     * @memberof V1Container
     */
    name: string;
    /**
     * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
     * @type {Array<V1ContainerPort>}
     * @memberof V1Container
     */
    ports?: Array<V1ContainerPort>;
    /**
     * 
     * @type {V1Probe}
     * @memberof V1Container
     */
    readinessProbe?: V1Probe;
    /**
     * Resources resize policy for the container.
     * @type {Array<V1ContainerResizePolicy>}
     * @memberof V1Container
     */
    resizePolicy?: Array<V1ContainerResizePolicy>;
    /**
     * 
     * @type {V1ResourceRequirements}
     * @memberof V1Container
     */
    resources?: V1ResourceRequirements;
    /**
     * RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is "Always". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
     * @type {string}
     * @memberof V1Container
     */
    restartPolicy?: string;
    /**
     * 
     * @type {V1SecurityContext}
     * @memberof V1Container
     */
    securityContext?: V1SecurityContext;
    /**
     * 
     * @type {V1Probe}
     * @memberof V1Container
     */
    startupProbe?: V1Probe;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     * @type {boolean}
     * @memberof V1Container
     */
    stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     * @type {boolean}
     * @memberof V1Container
     */
    stdinOnce?: boolean;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     * @type {string}
     * @memberof V1Container
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     * @type {string}
     * @memberof V1Container
     */
    terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     * @type {boolean}
     * @memberof V1Container
     */
    tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container.
     * @type {Array<V1VolumeDevice>}
     * @memberof V1Container
     */
    volumeDevices?: Array<V1VolumeDevice>;
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated.
     * @type {Array<V1VolumeMount>}
     * @memberof V1Container
     */
    volumeMounts?: Array<V1VolumeMount>;
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     * @type {string}
     * @memberof V1Container
     */
    workingDir?: string;
}

/**
 * Check if a given object implements the V1Container interface.
 */
export function instanceOfV1Container(value: object): value is V1Container {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1ContainerFromJSON(json: any): V1Container {
    return V1ContainerFromJSONTyped(json, false);
}

export function V1ContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Container {
    if (json == null) {
        return json;
    }
    return {
        
        'args': json['args'] == null ? undefined : json['args'],
        'command': json['command'] == null ? undefined : json['command'],
        'env': json['env'] == null ? undefined : ((json['env'] as Array<any>).map(V1EnvVarFromJSON)),
        'envFrom': json['envFrom'] == null ? undefined : ((json['envFrom'] as Array<any>).map(V1EnvFromSourceFromJSON)),
        'image': json['image'] == null ? undefined : json['image'],
        'imagePullPolicy': json['imagePullPolicy'] == null ? undefined : json['imagePullPolicy'],
        'lifecycle': json['lifecycle'] == null ? undefined : V1LifecycleFromJSON(json['lifecycle']),
        'livenessProbe': json['livenessProbe'] == null ? undefined : V1ProbeFromJSON(json['livenessProbe']),
        'name': json['name'],
        'ports': json['ports'] == null ? undefined : ((json['ports'] as Array<any>).map(V1ContainerPortFromJSON)),
        'readinessProbe': json['readinessProbe'] == null ? undefined : V1ProbeFromJSON(json['readinessProbe']),
        'resizePolicy': json['resizePolicy'] == null ? undefined : ((json['resizePolicy'] as Array<any>).map(V1ContainerResizePolicyFromJSON)),
        'resources': json['resources'] == null ? undefined : V1ResourceRequirementsFromJSON(json['resources']),
        'restartPolicy': json['restartPolicy'] == null ? undefined : json['restartPolicy'],
        'securityContext': json['securityContext'] == null ? undefined : V1SecurityContextFromJSON(json['securityContext']),
        'startupProbe': json['startupProbe'] == null ? undefined : V1ProbeFromJSON(json['startupProbe']),
        'stdin': json['stdin'] == null ? undefined : json['stdin'],
        'stdinOnce': json['stdinOnce'] == null ? undefined : json['stdinOnce'],
        'terminationMessagePath': json['terminationMessagePath'] == null ? undefined : json['terminationMessagePath'],
        'terminationMessagePolicy': json['terminationMessagePolicy'] == null ? undefined : json['terminationMessagePolicy'],
        'tty': json['tty'] == null ? undefined : json['tty'],
        'volumeDevices': json['volumeDevices'] == null ? undefined : ((json['volumeDevices'] as Array<any>).map(V1VolumeDeviceFromJSON)),
        'volumeMounts': json['volumeMounts'] == null ? undefined : ((json['volumeMounts'] as Array<any>).map(V1VolumeMountFromJSON)),
        'workingDir': json['workingDir'] == null ? undefined : json['workingDir'],
    };
}

export function V1ContainerToJSON(value?: V1Container | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'args': value['args'],
        'command': value['command'],
        'env': value['env'] == null ? undefined : ((value['env'] as Array<any>).map(V1EnvVarToJSON)),
        'envFrom': value['envFrom'] == null ? undefined : ((value['envFrom'] as Array<any>).map(V1EnvFromSourceToJSON)),
        'image': value['image'],
        'imagePullPolicy': value['imagePullPolicy'],
        'lifecycle': V1LifecycleToJSON(value['lifecycle']),
        'livenessProbe': V1ProbeToJSON(value['livenessProbe']),
        'name': value['name'],
        'ports': value['ports'] == null ? undefined : ((value['ports'] as Array<any>).map(V1ContainerPortToJSON)),
        'readinessProbe': V1ProbeToJSON(value['readinessProbe']),
        'resizePolicy': value['resizePolicy'] == null ? undefined : ((value['resizePolicy'] as Array<any>).map(V1ContainerResizePolicyToJSON)),
        'resources': V1ResourceRequirementsToJSON(value['resources']),
        'restartPolicy': value['restartPolicy'],
        'securityContext': V1SecurityContextToJSON(value['securityContext']),
        'startupProbe': V1ProbeToJSON(value['startupProbe']),
        'stdin': value['stdin'],
        'stdinOnce': value['stdinOnce'],
        'terminationMessagePath': value['terminationMessagePath'],
        'terminationMessagePolicy': value['terminationMessagePolicy'],
        'tty': value['tty'],
        'volumeDevices': value['volumeDevices'] == null ? undefined : ((value['volumeDevices'] as Array<any>).map(V1VolumeDeviceToJSON)),
        'volumeMounts': value['volumeMounts'] == null ? undefined : ((value['volumeMounts'] as Array<any>).map(V1VolumeMountToJSON)),
        'workingDir': value['workingDir'],
    };
}

