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
/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 * @export
 * @interface V1NodeSystemInfo
 */
export interface V1NodeSystemInfo {
    /**
     * The Architecture reported by the node
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    architecture: string;
    /**
     * Boot ID reported by the node.
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    bootID: string;
    /**
     * ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2).
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    containerRuntimeVersion: string;
    /**
     * Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    kernelVersion: string;
    /**
     * KubeProxy Version reported by the node.
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    kubeProxyVersion: string;
    /**
     * Kubelet Version reported by the node.
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    kubeletVersion: string;
    /**
     * MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    machineID: string;
    /**
     * The Operating System reported by the node
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    operatingSystem: string;
    /**
     * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    osImage: string;
    /**
     * SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid
     * @type {string}
     * @memberof V1NodeSystemInfo
     */
    systemUUID: string;
}

/**
 * Check if a given object implements the V1NodeSystemInfo interface.
 */
export function instanceOfV1NodeSystemInfo(value: object): value is V1NodeSystemInfo {
    if (!('architecture' in value) || value['architecture'] === undefined) return false;
    if (!('bootID' in value) || value['bootID'] === undefined) return false;
    if (!('containerRuntimeVersion' in value) || value['containerRuntimeVersion'] === undefined) return false;
    if (!('kernelVersion' in value) || value['kernelVersion'] === undefined) return false;
    if (!('kubeProxyVersion' in value) || value['kubeProxyVersion'] === undefined) return false;
    if (!('kubeletVersion' in value) || value['kubeletVersion'] === undefined) return false;
    if (!('machineID' in value) || value['machineID'] === undefined) return false;
    if (!('operatingSystem' in value) || value['operatingSystem'] === undefined) return false;
    if (!('osImage' in value) || value['osImage'] === undefined) return false;
    if (!('systemUUID' in value) || value['systemUUID'] === undefined) return false;
    return true;
}

export function V1NodeSystemInfoFromJSON(json: any): V1NodeSystemInfo {
    return V1NodeSystemInfoFromJSONTyped(json, false);
}

export function V1NodeSystemInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeSystemInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'architecture': json['architecture'],
        'bootID': json['bootID'],
        'containerRuntimeVersion': json['containerRuntimeVersion'],
        'kernelVersion': json['kernelVersion'],
        'kubeProxyVersion': json['kubeProxyVersion'],
        'kubeletVersion': json['kubeletVersion'],
        'machineID': json['machineID'],
        'operatingSystem': json['operatingSystem'],
        'osImage': json['osImage'],
        'systemUUID': json['systemUUID'],
    };
}

export function V1NodeSystemInfoToJSON(value?: V1NodeSystemInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'architecture': value['architecture'],
        'bootID': value['bootID'],
        'containerRuntimeVersion': value['containerRuntimeVersion'],
        'kernelVersion': value['kernelVersion'],
        'kubeProxyVersion': value['kubeProxyVersion'],
        'kubeletVersion': value['kubeletVersion'],
        'machineID': value['machineID'],
        'operatingSystem': value['operatingSystem'],
        'osImage': value['osImage'],
        'systemUUID': value['systemUUID'],
    };
}

