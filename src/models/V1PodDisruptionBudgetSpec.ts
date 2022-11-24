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
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 * @export
 * @interface V1PodDisruptionBudgetSpec
 */
export interface V1PodDisruptionBudgetSpec {
    /**
     * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
     * @type {object}
     * @memberof V1PodDisruptionBudgetSpec
     */
    maxUnavailable?: object;
    /**
     * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
     * @type {object}
     * @memberof V1PodDisruptionBudgetSpec
     */
    minAvailable?: object;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1PodDisruptionBudgetSpec
     */
    selector?: V1LabelSelector;
}

/**
 * Check if a given object implements the V1PodDisruptionBudgetSpec interface.
 */
export function instanceOfV1PodDisruptionBudgetSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PodDisruptionBudgetSpecFromJSON(json: any): V1PodDisruptionBudgetSpec {
    return V1PodDisruptionBudgetSpecFromJSONTyped(json, false);
}

export function V1PodDisruptionBudgetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDisruptionBudgetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxUnavailable': !exists(json, 'maxUnavailable') ? undefined : json['maxUnavailable'],
        'minAvailable': !exists(json, 'minAvailable') ? undefined : json['minAvailable'],
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
    };
}

export function V1PodDisruptionBudgetSpecToJSON(value?: V1PodDisruptionBudgetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxUnavailable': value.maxUnavailable,
        'minAvailable': value.minAvailable,
        'selector': V1LabelSelectorToJSON(value.selector),
    };
}

