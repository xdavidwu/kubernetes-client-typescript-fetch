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
import type { V1alpha2NamedResourcesResources } from './V1alpha2NamedResourcesResources';
import {
    V1alpha2NamedResourcesResourcesFromJSON,
    V1alpha2NamedResourcesResourcesFromJSONTyped,
    V1alpha2NamedResourcesResourcesToJSON,
} from './V1alpha2NamedResourcesResources';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * ResourceSlice provides information about available resources on individual nodes.
 * @export
 * @interface V1alpha2ResourceSlice
 */
export interface V1alpha2ResourceSlice {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha2ResourceSlice
     */
    apiVersion?: string;
    /**
     * DriverName identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.
     * @type {string}
     * @memberof V1alpha2ResourceSlice
     */
    driverName: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha2ResourceSlice
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha2ResourceSlice
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha2NamedResourcesResources}
     * @memberof V1alpha2ResourceSlice
     */
    namedResources?: V1alpha2NamedResourcesResources;
    /**
     * NodeName identifies the node which provides the resources if they are local to a node.
     * 
     * A field selector can be used to list only ResourceSlice objects with a certain node name.
     * @type {string}
     * @memberof V1alpha2ResourceSlice
     */
    nodeName?: string;
}

/**
 * Check if a given object implements the V1alpha2ResourceSlice interface.
 */
export function instanceOfV1alpha2ResourceSlice(value: object): value is V1alpha2ResourceSlice {
    if (!('driverName' in value) || value['driverName'] === undefined) return false;
    return true;
}

export function V1alpha2ResourceSliceFromJSON(json: any): V1alpha2ResourceSlice {
    return V1alpha2ResourceSliceFromJSONTyped(json, false);
}

export function V1alpha2ResourceSliceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceSlice {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'driverName': json['driverName'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'namedResources': json['namedResources'] == null ? undefined : V1alpha2NamedResourcesResourcesFromJSON(json['namedResources']),
        'nodeName': json['nodeName'] == null ? undefined : json['nodeName'],
    };
}

export function V1alpha2ResourceSliceToJSON(value?: V1alpha2ResourceSlice | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'driverName': value['driverName'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'namedResources': V1alpha2NamedResourcesResourcesToJSON(value['namedResources']),
        'nodeName': value['nodeName'],
    };
}

