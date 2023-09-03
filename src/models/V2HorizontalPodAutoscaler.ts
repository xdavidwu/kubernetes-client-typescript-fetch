/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V2HorizontalPodAutoscalerSpec } from './V2HorizontalPodAutoscalerSpec';
import {
    V2HorizontalPodAutoscalerSpecFromJSON,
    V2HorizontalPodAutoscalerSpecFromJSONTyped,
    V2HorizontalPodAutoscalerSpecToJSON,
} from './V2HorizontalPodAutoscalerSpec';
import type { V2HorizontalPodAutoscalerStatus } from './V2HorizontalPodAutoscalerStatus';
import {
    V2HorizontalPodAutoscalerStatusFromJSON,
    V2HorizontalPodAutoscalerStatusFromJSONTyped,
    V2HorizontalPodAutoscalerStatusToJSON,
} from './V2HorizontalPodAutoscalerStatus';

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 * @export
 * @interface V2HorizontalPodAutoscaler
 */
export interface V2HorizontalPodAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V2HorizontalPodAutoscaler
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V2HorizontalPodAutoscaler
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V2HorizontalPodAutoscaler
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V2HorizontalPodAutoscalerSpec}
     * @memberof V2HorizontalPodAutoscaler
     */
    spec?: V2HorizontalPodAutoscalerSpec;
    /**
     * 
     * @type {V2HorizontalPodAutoscalerStatus}
     * @memberof V2HorizontalPodAutoscaler
     */
    status?: V2HorizontalPodAutoscalerStatus;
}

/**
 * Check if a given object implements the V2HorizontalPodAutoscaler interface.
 */
export function instanceOfV2HorizontalPodAutoscaler(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V2HorizontalPodAutoscalerFromJSON(json: any): V2HorizontalPodAutoscaler {
    return V2HorizontalPodAutoscalerFromJSONTyped(json, false);
}

export function V2HorizontalPodAutoscalerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2HorizontalPodAutoscaler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V2HorizontalPodAutoscalerSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V2HorizontalPodAutoscalerStatusFromJSON(json['status']),
    };
}

export function V2HorizontalPodAutoscalerToJSON(value?: V2HorizontalPodAutoscaler | null): any {
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
        'spec': V2HorizontalPodAutoscalerSpecToJSON(value.spec),
        'status': V2HorizontalPodAutoscalerStatusToJSON(value.status),
    };
}

