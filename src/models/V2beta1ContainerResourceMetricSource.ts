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
/**
 * ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 * @export
 * @interface V2beta1ContainerResourceMetricSource
 */
export interface V2beta1ContainerResourceMetricSource {
    /**
     * container is the name of the container in the pods of the scaling target
     * @type {string}
     * @memberof V2beta1ContainerResourceMetricSource
     */
    container: string;
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof V2beta1ContainerResourceMetricSource
     */
    name: string;
    /**
     * targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
     * @type {number}
     * @memberof V2beta1ContainerResourceMetricSource
     */
    targetAverageUtilization?: number;
    /**
     * targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type.
     * @type {string}
     * @memberof V2beta1ContainerResourceMetricSource
     */
    targetAverageValue?: string;
}

export function V2beta1ContainerResourceMetricSourceFromJSON(json: any): V2beta1ContainerResourceMetricSource {
    return V2beta1ContainerResourceMetricSourceFromJSONTyped(json, false);
}

export function V2beta1ContainerResourceMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1ContainerResourceMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'container': json['container'],
        'name': json['name'],
        'targetAverageUtilization': !exists(json, 'targetAverageUtilization') ? undefined : json['targetAverageUtilization'],
        'targetAverageValue': !exists(json, 'targetAverageValue') ? undefined : json['targetAverageValue'],
    };
}

export function V2beta1ContainerResourceMetricSourceToJSON(value?: V2beta1ContainerResourceMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'container': value.container,
        'name': value.name,
        'targetAverageUtilization': value.targetAverageUtilization,
        'targetAverageValue': value.targetAverageValue,
    };
}


