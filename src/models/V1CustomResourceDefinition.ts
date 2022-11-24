/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1CustomResourceDefinitionSpec } from './V1CustomResourceDefinitionSpec';
import {
    V1CustomResourceDefinitionSpecFromJSON,
    V1CustomResourceDefinitionSpecFromJSONTyped,
    V1CustomResourceDefinitionSpecToJSON,
} from './V1CustomResourceDefinitionSpec';
import type { V1CustomResourceDefinitionStatus } from './V1CustomResourceDefinitionStatus';
import {
    V1CustomResourceDefinitionStatusFromJSON,
    V1CustomResourceDefinitionStatusFromJSONTyped,
    V1CustomResourceDefinitionStatusToJSON,
} from './V1CustomResourceDefinitionStatus';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 * @export
 * @interface V1CustomResourceDefinition
 */
export interface V1CustomResourceDefinition {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CustomResourceDefinition
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CustomResourceDefinition
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1CustomResourceDefinition
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1CustomResourceDefinitionSpec}
     * @memberof V1CustomResourceDefinition
     */
    spec: V1CustomResourceDefinitionSpec;
    /**
     * 
     * @type {V1CustomResourceDefinitionStatus}
     * @memberof V1CustomResourceDefinition
     */
    status?: V1CustomResourceDefinitionStatus;
}

/**
 * Check if a given object implements the V1CustomResourceDefinition interface.
 */
export function instanceOfV1CustomResourceDefinition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1CustomResourceDefinitionFromJSON(json: any): V1CustomResourceDefinition {
    return V1CustomResourceDefinitionFromJSONTyped(json, false);
}

export function V1CustomResourceDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1CustomResourceDefinitionSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1CustomResourceDefinitionStatusFromJSON(json['status']),
    };
}

export function V1CustomResourceDefinitionToJSON(value?: V1CustomResourceDefinition | null): any {
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
        'spec': V1CustomResourceDefinitionSpecToJSON(value.spec),
        'status': V1CustomResourceDefinitionStatusToJSON(value.status),
    };
}

