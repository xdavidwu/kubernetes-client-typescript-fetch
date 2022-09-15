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
    V1ExecAction,
    V1ExecActionFromJSON,
    V1ExecActionFromJSONTyped,
    V1ExecActionToJSON,
    V1GRPCAction,
    V1GRPCActionFromJSON,
    V1GRPCActionFromJSONTyped,
    V1GRPCActionToJSON,
    V1HTTPGetAction,
    V1HTTPGetActionFromJSON,
    V1HTTPGetActionFromJSONTyped,
    V1HTTPGetActionToJSON,
    V1TCPSocketAction,
    V1TCPSocketActionFromJSON,
    V1TCPSocketActionFromJSONTyped,
    V1TCPSocketActionToJSON,
} from './';

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 * @export
 * @interface V1Probe
 */
export interface V1Probe {
    /**
     * 
     * @type {V1ExecAction}
     * @memberof V1Probe
     */
    exec?: V1ExecAction;
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
     * @type {number}
     * @memberof V1Probe
     */
    failureThreshold?: number;
    /**
     * 
     * @type {V1GRPCAction}
     * @memberof V1Probe
     */
    grpc?: V1GRPCAction;
    /**
     * 
     * @type {V1HTTPGetAction}
     * @memberof V1Probe
     */
    httpGet?: V1HTTPGetAction;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     * @type {number}
     * @memberof V1Probe
     */
    initialDelaySeconds?: number;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
     * @type {number}
     * @memberof V1Probe
     */
    periodSeconds?: number;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
     * @type {number}
     * @memberof V1Probe
     */
    successThreshold?: number;
    /**
     * 
     * @type {V1TCPSocketAction}
     * @memberof V1Probe
     */
    tcpSocket?: V1TCPSocketAction;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
     * @type {number}
     * @memberof V1Probe
     */
    terminationGracePeriodSeconds?: number;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     * @type {number}
     * @memberof V1Probe
     */
    timeoutSeconds?: number;
}

export function V1ProbeFromJSON(json: any): V1Probe {
    return V1ProbeFromJSONTyped(json, false);
}

export function V1ProbeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Probe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exec': !exists(json, 'exec') ? undefined : V1ExecActionFromJSON(json['exec']),
        'failureThreshold': !exists(json, 'failureThreshold') ? undefined : json['failureThreshold'],
        'grpc': !exists(json, 'grpc') ? undefined : V1GRPCActionFromJSON(json['grpc']),
        'httpGet': !exists(json, 'httpGet') ? undefined : V1HTTPGetActionFromJSON(json['httpGet']),
        'initialDelaySeconds': !exists(json, 'initialDelaySeconds') ? undefined : json['initialDelaySeconds'],
        'periodSeconds': !exists(json, 'periodSeconds') ? undefined : json['periodSeconds'],
        'successThreshold': !exists(json, 'successThreshold') ? undefined : json['successThreshold'],
        'tcpSocket': !exists(json, 'tcpSocket') ? undefined : V1TCPSocketActionFromJSON(json['tcpSocket']),
        'terminationGracePeriodSeconds': !exists(json, 'terminationGracePeriodSeconds') ? undefined : json['terminationGracePeriodSeconds'],
        'timeoutSeconds': !exists(json, 'timeoutSeconds') ? undefined : json['timeoutSeconds'],
    };
}

export function V1ProbeToJSON(value?: V1Probe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exec': V1ExecActionToJSON(value.exec),
        'failureThreshold': value.failureThreshold,
        'grpc': V1GRPCActionToJSON(value.grpc),
        'httpGet': V1HTTPGetActionToJSON(value.httpGet),
        'initialDelaySeconds': value.initialDelaySeconds,
        'periodSeconds': value.periodSeconds,
        'successThreshold': value.successThreshold,
        'tcpSocket': V1TCPSocketActionToJSON(value.tcpSocket),
        'terminationGracePeriodSeconds': value.terminationGracePeriodSeconds,
        'timeoutSeconds': value.timeoutSeconds,
    };
}


