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
    V1Affinity,
    V1AffinityFromJSON,
    V1AffinityFromJSONTyped,
    V1AffinityToJSON,
    V1Container,
    V1ContainerFromJSON,
    V1ContainerFromJSONTyped,
    V1ContainerToJSON,
    V1EphemeralContainer,
    V1EphemeralContainerFromJSON,
    V1EphemeralContainerFromJSONTyped,
    V1EphemeralContainerToJSON,
    V1HostAlias,
    V1HostAliasFromJSON,
    V1HostAliasFromJSONTyped,
    V1HostAliasToJSON,
    V1LocalObjectReference,
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
    V1PodDNSConfig,
    V1PodDNSConfigFromJSON,
    V1PodDNSConfigFromJSONTyped,
    V1PodDNSConfigToJSON,
    V1PodOS,
    V1PodOSFromJSON,
    V1PodOSFromJSONTyped,
    V1PodOSToJSON,
    V1PodReadinessGate,
    V1PodReadinessGateFromJSON,
    V1PodReadinessGateFromJSONTyped,
    V1PodReadinessGateToJSON,
    V1PodSecurityContext,
    V1PodSecurityContextFromJSON,
    V1PodSecurityContextFromJSONTyped,
    V1PodSecurityContextToJSON,
    V1Toleration,
    V1TolerationFromJSON,
    V1TolerationFromJSONTyped,
    V1TolerationToJSON,
    V1TopologySpreadConstraint,
    V1TopologySpreadConstraintFromJSON,
    V1TopologySpreadConstraintFromJSONTyped,
    V1TopologySpreadConstraintToJSON,
    V1Volume,
    V1VolumeFromJSON,
    V1VolumeFromJSONTyped,
    V1VolumeToJSON,
} from './';

/**
 * PodSpec is a description of a pod.
 * @export
 * @interface V1PodSpec
 */
export interface V1PodSpec {
    /**
     * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
     * @type {number}
     * @memberof V1PodSpec
     */
    activeDeadlineSeconds?: number;
    /**
     * 
     * @type {V1Affinity}
     * @memberof V1PodSpec
     */
    affinity?: V1Affinity;
    /**
     * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    automountServiceAccountToken?: boolean;
    /**
     * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
     * @type {Array<V1Container>}
     * @memberof V1PodSpec
     */
    containers: Array<V1Container>;
    /**
     * 
     * @type {V1PodDNSConfig}
     * @memberof V1PodSpec
     */
    dnsConfig?: V1PodDNSConfig;
    /**
     * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
     * @type {string}
     * @memberof V1PodSpec
     */
    dnsPolicy?: string;
    /**
     * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    enableServiceLinks?: boolean;
    /**
     * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is beta-level and available on clusters that haven't disabled the EphemeralContainers feature gate.
     * @type {Array<V1EphemeralContainer>}
     * @memberof V1PodSpec
     */
    ephemeralContainers?: Array<V1EphemeralContainer>;
    /**
     * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
     * @type {Array<V1HostAlias>}
     * @memberof V1PodSpec
     */
    hostAliases?: Array<V1HostAlias>;
    /**
     * Use the host's ipc namespace. Optional: Default to false.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    hostIPC?: boolean;
    /**
     * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    hostNetwork?: boolean;
    /**
     * Use the host's pid namespace. Optional: Default to false.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    hostPID?: boolean;
    /**
     * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
     * @type {string}
     * @memberof V1PodSpec
     */
    hostname?: string;
    /**
     * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
     * @type {Array<V1LocalObjectReference>}
     * @memberof V1PodSpec
     */
    imagePullSecrets?: Array<V1LocalObjectReference>;
    /**
     * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
     * @type {Array<V1Container>}
     * @memberof V1PodSpec
     */
    initContainers?: Array<V1Container>;
    /**
     * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
     * @type {string}
     * @memberof V1PodSpec
     */
    nodeName?: string;
    /**
     * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     * @type {{ [key: string]: string; }}
     * @memberof V1PodSpec
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * 
     * @type {V1PodOS}
     * @memberof V1PodSpec
     */
    os?: V1PodOS;
    /**
     * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
     * @type {{ [key: string]: string; }}
     * @memberof V1PodSpec
     */
    overhead?: { [key: string]: string; };
    /**
     * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
     * @type {string}
     * @memberof V1PodSpec
     */
    preemptionPolicy?: string;
    /**
     * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
     * @type {number}
     * @memberof V1PodSpec
     */
    priority?: number;
    /**
     * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
     * @type {string}
     * @memberof V1PodSpec
     */
    priorityClassName?: string;
    /**
     * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
     * @type {Array<V1PodReadinessGate>}
     * @memberof V1PodSpec
     */
    readinessGates?: Array<V1PodReadinessGate>;
    /**
     * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
     * @type {string}
     * @memberof V1PodSpec
     */
    restartPolicy?: string;
    /**
     * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
     * @type {string}
     * @memberof V1PodSpec
     */
    runtimeClassName?: string;
    /**
     * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
     * @type {string}
     * @memberof V1PodSpec
     */
    schedulerName?: string;
    /**
     * 
     * @type {V1PodSecurityContext}
     * @memberof V1PodSpec
     */
    securityContext?: V1PodSecurityContext;
    /**
     * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
     * @type {string}
     * @memberof V1PodSpec
     */
    serviceAccount?: string;
    /**
     * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
     * @type {string}
     * @memberof V1PodSpec
     */
    serviceAccountName?: string;
    /**
     * If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    setHostnameAsFQDN?: boolean;
    /**
     * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
     * @type {boolean}
     * @memberof V1PodSpec
     */
    shareProcessNamespace?: boolean;
    /**
     * If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
     * @type {string}
     * @memberof V1PodSpec
     */
    subdomain?: string;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
     * @type {number}
     * @memberof V1PodSpec
     */
    terminationGracePeriodSeconds?: number;
    /**
     * If specified, the pod's tolerations.
     * @type {Array<V1Toleration>}
     * @memberof V1PodSpec
     */
    tolerations?: Array<V1Toleration>;
    /**
     * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
     * @type {Array<V1TopologySpreadConstraint>}
     * @memberof V1PodSpec
     */
    topologySpreadConstraints?: Array<V1TopologySpreadConstraint>;
    /**
     * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
     * @type {Array<V1Volume>}
     * @memberof V1PodSpec
     */
    volumes?: Array<V1Volume>;
}

export function V1PodSpecFromJSON(json: any): V1PodSpec {
    return V1PodSpecFromJSONTyped(json, false);
}

export function V1PodSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeDeadlineSeconds': !exists(json, 'activeDeadlineSeconds') ? undefined : json['activeDeadlineSeconds'],
        'affinity': !exists(json, 'affinity') ? undefined : V1AffinityFromJSON(json['affinity']),
        'automountServiceAccountToken': !exists(json, 'automountServiceAccountToken') ? undefined : json['automountServiceAccountToken'],
        'containers': ((json['containers'] as Array<any>).map(V1ContainerFromJSON)),
        'dnsConfig': !exists(json, 'dnsConfig') ? undefined : V1PodDNSConfigFromJSON(json['dnsConfig']),
        'dnsPolicy': !exists(json, 'dnsPolicy') ? undefined : json['dnsPolicy'],
        'enableServiceLinks': !exists(json, 'enableServiceLinks') ? undefined : json['enableServiceLinks'],
        'ephemeralContainers': !exists(json, 'ephemeralContainers') ? undefined : ((json['ephemeralContainers'] as Array<any>).map(V1EphemeralContainerFromJSON)),
        'hostAliases': !exists(json, 'hostAliases') ? undefined : ((json['hostAliases'] as Array<any>).map(V1HostAliasFromJSON)),
        'hostIPC': !exists(json, 'hostIPC') ? undefined : json['hostIPC'],
        'hostNetwork': !exists(json, 'hostNetwork') ? undefined : json['hostNetwork'],
        'hostPID': !exists(json, 'hostPID') ? undefined : json['hostPID'],
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'imagePullSecrets': !exists(json, 'imagePullSecrets') ? undefined : ((json['imagePullSecrets'] as Array<any>).map(V1LocalObjectReferenceFromJSON)),
        'initContainers': !exists(json, 'initContainers') ? undefined : ((json['initContainers'] as Array<any>).map(V1ContainerFromJSON)),
        'nodeName': !exists(json, 'nodeName') ? undefined : json['nodeName'],
        'nodeSelector': !exists(json, 'nodeSelector') ? undefined : json['nodeSelector'],
        'os': !exists(json, 'os') ? undefined : V1PodOSFromJSON(json['os']),
        'overhead': !exists(json, 'overhead') ? undefined : json['overhead'],
        'preemptionPolicy': !exists(json, 'preemptionPolicy') ? undefined : json['preemptionPolicy'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'priorityClassName': !exists(json, 'priorityClassName') ? undefined : json['priorityClassName'],
        'readinessGates': !exists(json, 'readinessGates') ? undefined : ((json['readinessGates'] as Array<any>).map(V1PodReadinessGateFromJSON)),
        'restartPolicy': !exists(json, 'restartPolicy') ? undefined : json['restartPolicy'],
        'runtimeClassName': !exists(json, 'runtimeClassName') ? undefined : json['runtimeClassName'],
        'schedulerName': !exists(json, 'schedulerName') ? undefined : json['schedulerName'],
        'securityContext': !exists(json, 'securityContext') ? undefined : V1PodSecurityContextFromJSON(json['securityContext']),
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : json['serviceAccount'],
        'serviceAccountName': !exists(json, 'serviceAccountName') ? undefined : json['serviceAccountName'],
        'setHostnameAsFQDN': !exists(json, 'setHostnameAsFQDN') ? undefined : json['setHostnameAsFQDN'],
        'shareProcessNamespace': !exists(json, 'shareProcessNamespace') ? undefined : json['shareProcessNamespace'],
        'subdomain': !exists(json, 'subdomain') ? undefined : json['subdomain'],
        'terminationGracePeriodSeconds': !exists(json, 'terminationGracePeriodSeconds') ? undefined : json['terminationGracePeriodSeconds'],
        'tolerations': !exists(json, 'tolerations') ? undefined : ((json['tolerations'] as Array<any>).map(V1TolerationFromJSON)),
        'topologySpreadConstraints': !exists(json, 'topologySpreadConstraints') ? undefined : ((json['topologySpreadConstraints'] as Array<any>).map(V1TopologySpreadConstraintFromJSON)),
        'volumes': !exists(json, 'volumes') ? undefined : ((json['volumes'] as Array<any>).map(V1VolumeFromJSON)),
    };
}

export function V1PodSpecToJSON(value?: V1PodSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activeDeadlineSeconds': value.activeDeadlineSeconds,
        'affinity': V1AffinityToJSON(value.affinity),
        'automountServiceAccountToken': value.automountServiceAccountToken,
        'containers': ((value.containers as Array<any>).map(V1ContainerToJSON)),
        'dnsConfig': V1PodDNSConfigToJSON(value.dnsConfig),
        'dnsPolicy': value.dnsPolicy,
        'enableServiceLinks': value.enableServiceLinks,
        'ephemeralContainers': value.ephemeralContainers === undefined ? undefined : ((value.ephemeralContainers as Array<any>).map(V1EphemeralContainerToJSON)),
        'hostAliases': value.hostAliases === undefined ? undefined : ((value.hostAliases as Array<any>).map(V1HostAliasToJSON)),
        'hostIPC': value.hostIPC,
        'hostNetwork': value.hostNetwork,
        'hostPID': value.hostPID,
        'hostname': value.hostname,
        'imagePullSecrets': value.imagePullSecrets === undefined ? undefined : ((value.imagePullSecrets as Array<any>).map(V1LocalObjectReferenceToJSON)),
        'initContainers': value.initContainers === undefined ? undefined : ((value.initContainers as Array<any>).map(V1ContainerToJSON)),
        'nodeName': value.nodeName,
        'nodeSelector': value.nodeSelector,
        'os': V1PodOSToJSON(value.os),
        'overhead': value.overhead,
        'preemptionPolicy': value.preemptionPolicy,
        'priority': value.priority,
        'priorityClassName': value.priorityClassName,
        'readinessGates': value.readinessGates === undefined ? undefined : ((value.readinessGates as Array<any>).map(V1PodReadinessGateToJSON)),
        'restartPolicy': value.restartPolicy,
        'runtimeClassName': value.runtimeClassName,
        'schedulerName': value.schedulerName,
        'securityContext': V1PodSecurityContextToJSON(value.securityContext),
        'serviceAccount': value.serviceAccount,
        'serviceAccountName': value.serviceAccountName,
        'setHostnameAsFQDN': value.setHostnameAsFQDN,
        'shareProcessNamespace': value.shareProcessNamespace,
        'subdomain': value.subdomain,
        'terminationGracePeriodSeconds': value.terminationGracePeriodSeconds,
        'tolerations': value.tolerations === undefined ? undefined : ((value.tolerations as Array<any>).map(V1TolerationToJSON)),
        'topologySpreadConstraints': value.topologySpreadConstraints === undefined ? undefined : ((value.topologySpreadConstraints as Array<any>).map(V1TopologySpreadConstraintToJSON)),
        'volumes': value.volumes === undefined ? undefined : ((value.volumes as Array<any>).map(V1VolumeToJSON)),
    };
}


