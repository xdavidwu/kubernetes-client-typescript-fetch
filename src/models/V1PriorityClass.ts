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
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 * @export
 * @interface V1PriorityClass
 */
export interface V1PriorityClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PriorityClass
     */
    apiVersion?: string;
    /**
     * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
     * @type {string}
     * @memberof V1PriorityClass
     */
    description?: string;
    /**
     * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
     * @type {boolean}
     * @memberof V1PriorityClass
     */
    globalDefault?: boolean;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PriorityClass
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1PriorityClass
     */
    metadata?: V1ObjectMeta;
    /**
     * preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
     * @type {string}
     * @memberof V1PriorityClass
     */
    preemptionPolicy?: string;
    /**
     * value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
     * @type {number}
     * @memberof V1PriorityClass
     */
    value: number;
}

/**
 * Check if a given object implements the V1PriorityClass interface.
 */
export function instanceOfV1PriorityClass(value: object): value is V1PriorityClass {
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function V1PriorityClassFromJSON(json: any): V1PriorityClass {
    return V1PriorityClassFromJSONTyped(json, false);
}

export function V1PriorityClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PriorityClass {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'description': json['description'] == null ? undefined : json['description'],
        'globalDefault': json['globalDefault'] == null ? undefined : json['globalDefault'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'preemptionPolicy': json['preemptionPolicy'] == null ? undefined : json['preemptionPolicy'],
        'value': json['value'],
    };
}

export function V1PriorityClassToJSON(value?: V1PriorityClass | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'description': value['description'],
        'globalDefault': value['globalDefault'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'preemptionPolicy': value['preemptionPolicy'],
        'value': value['value'],
    };
}

