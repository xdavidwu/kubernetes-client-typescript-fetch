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
    V1NodeConfigSource,
    V1NodeConfigSourceFromJSON,
    V1NodeConfigSourceFromJSONTyped,
    V1NodeConfigSourceToJSON,
    V1Taint,
    V1TaintFromJSON,
    V1TaintFromJSONTyped,
    V1TaintToJSON,
} from './';

/**
 * NodeSpec describes the attributes that a node is created with.
 * @export
 * @interface V1NodeSpec
 */
export interface V1NodeSpec {
    /**
     * 
     * @type {V1NodeConfigSource}
     * @memberof V1NodeSpec
     */
    configSource?: V1NodeConfigSource;
    /**
     * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
     * @type {string}
     * @memberof V1NodeSpec
     */
    externalID?: string;
    /**
     * PodCIDR represents the pod IP range assigned to the node.
     * @type {string}
     * @memberof V1NodeSpec
     */
    podCIDR?: string;
    /**
     * podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
     * @type {Array<string>}
     * @memberof V1NodeSpec
     */
    podCIDRs?: Array<string>;
    /**
     * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
     * @type {string}
     * @memberof V1NodeSpec
     */
    providerID?: string;
    /**
     * If specified, the node's taints.
     * @type {Array<V1Taint>}
     * @memberof V1NodeSpec
     */
    taints?: Array<V1Taint>;
    /**
     * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
     * @type {boolean}
     * @memberof V1NodeSpec
     */
    unschedulable?: boolean;
}

export function V1NodeSpecFromJSON(json: any): V1NodeSpec {
    return V1NodeSpecFromJSONTyped(json, false);
}

export function V1NodeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configSource': !exists(json, 'configSource') ? undefined : V1NodeConfigSourceFromJSON(json['configSource']),
        'externalID': !exists(json, 'externalID') ? undefined : json['externalID'],
        'podCIDR': !exists(json, 'podCIDR') ? undefined : json['podCIDR'],
        'podCIDRs': !exists(json, 'podCIDRs') ? undefined : json['podCIDRs'],
        'providerID': !exists(json, 'providerID') ? undefined : json['providerID'],
        'taints': !exists(json, 'taints') ? undefined : ((json['taints'] as Array<any>).map(V1TaintFromJSON)),
        'unschedulable': !exists(json, 'unschedulable') ? undefined : json['unschedulable'],
    };
}

export function V1NodeSpecToJSON(value?: V1NodeSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configSource': V1NodeConfigSourceToJSON(value.configSource),
        'externalID': value.externalID,
        'podCIDR': value.podCIDR,
        'podCIDRs': value.podCIDRs,
        'providerID': value.providerID,
        'taints': value.taints === undefined ? undefined : ((value.taints as Array<any>).map(V1TaintToJSON)),
        'unschedulable': value.unschedulable,
    };
}


