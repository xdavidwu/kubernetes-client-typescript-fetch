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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1ReplicationControllerSpec,
    V1ReplicationControllerSpecFromJSON,
    V1ReplicationControllerSpecFromJSONTyped,
    V1ReplicationControllerSpecToJSON,
    V1ReplicationControllerStatus,
    V1ReplicationControllerStatusFromJSON,
    V1ReplicationControllerStatusFromJSONTyped,
    V1ReplicationControllerStatusToJSON,
} from './';

/**
 * ReplicationController represents the configuration of a replication controller.
 * @export
 * @interface V1ReplicationController
 */
export interface V1ReplicationController {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ReplicationController
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ReplicationController
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ReplicationController
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1ReplicationControllerSpec}
     * @memberof V1ReplicationController
     */
    spec?: V1ReplicationControllerSpec;
    /**
     * 
     * @type {V1ReplicationControllerStatus}
     * @memberof V1ReplicationController
     */
    status?: V1ReplicationControllerStatus;
}

export function V1ReplicationControllerFromJSON(json: any): V1ReplicationController {
    return V1ReplicationControllerFromJSONTyped(json, false);
}

export function V1ReplicationControllerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicationController {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1ReplicationControllerSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1ReplicationControllerStatusFromJSON(json['status']),
    };
}

export function V1ReplicationControllerToJSON(value?: V1ReplicationController | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1ReplicationControllerSpecToJSON(value.spec),
        'status': V1ReplicationControllerStatusToJSON(value.status),
    };
}


