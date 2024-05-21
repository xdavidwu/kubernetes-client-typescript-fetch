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
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 * @export
 * @interface V2MetricIdentifier
 */
export interface V2MetricIdentifier {
    /**
     * name is the name of the given metric
     * @type {string}
     * @memberof V2MetricIdentifier
     */
    name: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V2MetricIdentifier
     */
    selector?: V1LabelSelector;
}

/**
 * Check if a given object implements the V2MetricIdentifier interface.
 */
export function instanceOfV2MetricIdentifier(value: object): value is V2MetricIdentifier {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V2MetricIdentifierFromJSON(json: any): V2MetricIdentifier {
    return V2MetricIdentifierFromJSONTyped(json, false);
}

export function V2MetricIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MetricIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'selector': json['selector'] == null ? undefined : V1LabelSelectorFromJSON(json['selector']),
    };
}

export function V2MetricIdentifierToJSON(value?: V2MetricIdentifier | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'selector': V1LabelSelectorToJSON(value['selector']),
    };
}

