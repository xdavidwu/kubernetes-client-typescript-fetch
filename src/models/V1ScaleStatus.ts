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
/**
 * ScaleStatus represents the current status of a scale subresource.
 * @export
 * @interface V1ScaleStatus
 */
export interface V1ScaleStatus {
    /**
     * actual number of observed instances of the scaled object.
     * @type {number}
     * @memberof V1ScaleStatus
     */
    replicas: number;
    /**
     * label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
     * @type {string}
     * @memberof V1ScaleStatus
     */
    selector?: string;
}

/**
 * Check if a given object implements the V1ScaleStatus interface.
 */
export function instanceOfV1ScaleStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "replicas" in value;

    return isInstance;
}

export function V1ScaleStatusFromJSON(json: any): V1ScaleStatus {
    return V1ScaleStatusFromJSONTyped(json, false);
}

export function V1ScaleStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ScaleStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'replicas': json['replicas'],
        'selector': !exists(json, 'selector') ? undefined : json['selector'],
    };
}

export function V1ScaleStatusToJSON(value?: V1ScaleStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'replicas': value.replicas,
        'selector': value.selector,
    };
}

