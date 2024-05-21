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
/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
 * @export
 * @interface V1ConfigMapNodeConfigSource
 */
export interface V1ConfigMapNodeConfigSource {
    /**
     * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    kubeletConfigKey: string;
    /**
     * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    name: string;
    /**
     * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    namespace: string;
    /**
     * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    resourceVersion?: string;
    /**
     * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
     * @type {string}
     * @memberof V1ConfigMapNodeConfigSource
     */
    uid?: string;
}

/**
 * Check if a given object implements the V1ConfigMapNodeConfigSource interface.
 */
export function instanceOfV1ConfigMapNodeConfigSource(value: object): value is V1ConfigMapNodeConfigSource {
    if (!('kubeletConfigKey' in value) || value['kubeletConfigKey'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    return true;
}

export function V1ConfigMapNodeConfigSourceFromJSON(json: any): V1ConfigMapNodeConfigSource {
    return V1ConfigMapNodeConfigSourceFromJSONTyped(json, false);
}

export function V1ConfigMapNodeConfigSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConfigMapNodeConfigSource {
    if (json == null) {
        return json;
    }
    return {
        
        'kubeletConfigKey': json['kubeletConfigKey'],
        'name': json['name'],
        'namespace': json['namespace'],
        'resourceVersion': json['resourceVersion'] == null ? undefined : json['resourceVersion'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function V1ConfigMapNodeConfigSourceToJSON(value?: V1ConfigMapNodeConfigSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'kubeletConfigKey': value['kubeletConfigKey'],
        'name': value['name'],
        'namespace': value['namespace'],
        'resourceVersion': value['resourceVersion'],
        'uid': value['uid'],
    };
}

