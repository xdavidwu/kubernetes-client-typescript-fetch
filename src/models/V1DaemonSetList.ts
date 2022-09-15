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
    V1DaemonSet,
    V1DaemonSetFromJSON,
    V1DaemonSetFromJSONTyped,
    V1DaemonSetToJSON,
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './';

/**
 * DaemonSetList is a collection of daemon sets.
 * @export
 * @interface V1DaemonSetList
 */
export interface V1DaemonSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DaemonSetList
     */
    apiVersion?: string;
    /**
     * A list of daemon sets.
     * @type {Array<V1DaemonSet>}
     * @memberof V1DaemonSetList
     */
    items: Array<V1DaemonSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DaemonSetList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1DaemonSetList
     */
    metadata?: V1ListMeta;
}

export function V1DaemonSetListFromJSON(json: any): V1DaemonSetList {
    return V1DaemonSetListFromJSONTyped(json, false);
}

export function V1DaemonSetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaemonSetList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1DaemonSetFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1DaemonSetListToJSON(value?: V1DaemonSetList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1DaemonSetToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


