/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1NodeSelectorTerm } from './V1NodeSelectorTerm';
import {
    V1NodeSelectorTermFromJSON,
    V1NodeSelectorTermFromJSONTyped,
    V1NodeSelectorTermToJSON,
} from './V1NodeSelectorTerm';

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 * @export
 * @interface V1PreferredSchedulingTerm
 */
export interface V1PreferredSchedulingTerm {
    /**
     * 
     * @type {V1NodeSelectorTerm}
     * @memberof V1PreferredSchedulingTerm
     */
    preference: V1NodeSelectorTerm;
    /**
     * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
     * @type {number}
     * @memberof V1PreferredSchedulingTerm
     */
    weight: number;
}

/**
 * Check if a given object implements the V1PreferredSchedulingTerm interface.
 */
export function instanceOfV1PreferredSchedulingTerm(value: object): value is V1PreferredSchedulingTerm {
    if (!('preference' in value) || value['preference'] === undefined) return false;
    if (!('weight' in value) || value['weight'] === undefined) return false;
    return true;
}

export function V1PreferredSchedulingTermFromJSON(json: any): V1PreferredSchedulingTerm {
    return V1PreferredSchedulingTermFromJSONTyped(json, false);
}

export function V1PreferredSchedulingTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PreferredSchedulingTerm {
    if (json == null) {
        return json;
    }
    return {
        
        'preference': V1NodeSelectorTermFromJSON(json['preference']),
        'weight': json['weight'],
    };
}

export function V1PreferredSchedulingTermToJSON(value?: V1PreferredSchedulingTerm | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'preference': V1NodeSelectorTermToJSON(value['preference']),
        'weight': value['weight'],
    };
}

