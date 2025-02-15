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
import type { V1Deployment } from './V1Deployment';
import {
    V1DeploymentFromJSON,
    V1DeploymentFromJSONTyped,
    V1DeploymentToJSON,
} from './V1Deployment';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * DeploymentList is a list of Deployments.
 * @export
 * @interface V1DeploymentList
 */
export interface V1DeploymentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DeploymentList
     */
    apiVersion?: string;
    /**
     * Items is the list of Deployments.
     * @type {Array<V1Deployment>}
     * @memberof V1DeploymentList
     */
    items: Array<V1Deployment>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DeploymentList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1DeploymentList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1DeploymentList interface.
 */
export function instanceOfV1DeploymentList(value: object): value is V1DeploymentList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1DeploymentListFromJSON(json: any): V1DeploymentList {
    return V1DeploymentListFromJSONTyped(json, false);
}

export function V1DeploymentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1DeploymentFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1DeploymentListToJSON(value?: V1DeploymentList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1DeploymentToJSON)),
        'kind': value['kind'],
        'metadata': V1ListMetaToJSON(value['metadata']),
    };
}

