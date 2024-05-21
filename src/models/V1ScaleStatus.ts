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
/**
 * ScaleStatus represents the current status of a scale subresource.
 * @export
 * @interface V1ScaleStatus
 */
export interface V1ScaleStatus {
    /**
     * replicas is the actual number of observed instances of the scaled object.
     * @type {number}
     * @memberof V1ScaleStatus
     */
    replicas: number;
    /**
     * selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
     * @type {string}
     * @memberof V1ScaleStatus
     */
    selector?: string;
}

/**
 * Check if a given object implements the V1ScaleStatus interface.
 */
export function instanceOfV1ScaleStatus(value: object): value is V1ScaleStatus {
    if (!('replicas' in value) || value['replicas'] === undefined) return false;
    return true;
}

export function V1ScaleStatusFromJSON(json: any): V1ScaleStatus {
    return V1ScaleStatusFromJSONTyped(json, false);
}

export function V1ScaleStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ScaleStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'replicas': json['replicas'],
        'selector': json['selector'] == null ? undefined : json['selector'],
    };
}

export function V1ScaleStatusToJSON(value?: V1ScaleStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'replicas': value['replicas'],
        'selector': value['selector'],
    };
}

