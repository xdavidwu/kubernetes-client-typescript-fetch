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
    V1HorizontalPodAutoscaler,
    V1HorizontalPodAutoscalerFromJSON,
    V1HorizontalPodAutoscalerFromJSONTyped,
    V1HorizontalPodAutoscalerToJSON,
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './';

/**
 * list of horizontal pod autoscaler objects.
 * @export
 * @interface V1HorizontalPodAutoscalerList
 */
export interface V1HorizontalPodAutoscalerList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1HorizontalPodAutoscalerList
     */
    apiVersion?: string;
    /**
     * list of horizontal pod autoscaler objects.
     * @type {Array<V1HorizontalPodAutoscaler>}
     * @memberof V1HorizontalPodAutoscalerList
     */
    items: Array<V1HorizontalPodAutoscaler>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1HorizontalPodAutoscalerList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1HorizontalPodAutoscalerList
     */
    metadata?: V1ListMeta;
}

export function V1HorizontalPodAutoscalerListFromJSON(json: any): V1HorizontalPodAutoscalerList {
    return V1HorizontalPodAutoscalerListFromJSONTyped(json, false);
}

export function V1HorizontalPodAutoscalerListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HorizontalPodAutoscalerList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1HorizontalPodAutoscalerFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1HorizontalPodAutoscalerListToJSON(value?: V1HorizontalPodAutoscalerList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1HorizontalPodAutoscalerToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


