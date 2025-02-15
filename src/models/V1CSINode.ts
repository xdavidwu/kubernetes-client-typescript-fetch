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
import type { V1CSINodeSpec } from './V1CSINodeSpec';
import {
    V1CSINodeSpecFromJSON,
    V1CSINodeSpecFromJSONTyped,
    V1CSINodeSpecToJSON,
} from './V1CSINodeSpec';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 * @export
 * @interface V1CSINode
 */
export interface V1CSINode {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CSINode
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CSINode
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1CSINode
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1CSINodeSpec}
     * @memberof V1CSINode
     */
    spec: V1CSINodeSpec;
}

/**
 * Check if a given object implements the V1CSINode interface.
 */
export function instanceOfV1CSINode(value: object): value is V1CSINode {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1CSINodeFromJSON(json: any): V1CSINode {
    return V1CSINodeFromJSONTyped(json, false);
}

export function V1CSINodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CSINode {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1CSINodeSpecFromJSON(json['spec']),
    };
}

export function V1CSINodeToJSON(value?: V1CSINode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1CSINodeSpecToJSON(value['spec']),
    };
}

