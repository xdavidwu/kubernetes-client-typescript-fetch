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
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';
import type { V1PodTemplate } from './V1PodTemplate';
import {
    V1PodTemplateFromJSON,
    V1PodTemplateFromJSONTyped,
    V1PodTemplateToJSON,
} from './V1PodTemplate';

/**
 * PodTemplateList is a list of PodTemplates.
 * @export
 * @interface V1PodTemplateList
 */
export interface V1PodTemplateList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PodTemplateList
     */
    apiVersion?: string;
    /**
     * List of pod templates
     * @type {Array<V1PodTemplate>}
     * @memberof V1PodTemplateList
     */
    items: Array<V1PodTemplate>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PodTemplateList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1PodTemplateList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1PodTemplateList interface.
 */
export function instanceOfV1PodTemplateList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function V1PodTemplateListFromJSON(json: any): V1PodTemplateList {
    return V1PodTemplateListFromJSONTyped(json, false);
}

export function V1PodTemplateListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodTemplateList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1PodTemplateFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1PodTemplateListToJSON(value?: V1PodTemplateList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1PodTemplateToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

