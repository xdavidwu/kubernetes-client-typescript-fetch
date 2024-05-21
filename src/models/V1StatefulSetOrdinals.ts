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
 * StatefulSetOrdinals describes the policy used for replica ordinal assignment in this StatefulSet.
 * @export
 * @interface V1StatefulSetOrdinals
 */
export interface V1StatefulSetOrdinals {
    /**
     * start is the number representing the first replica's index. It may be used to number replicas from an alternate index (eg: 1-indexed) over the default 0-indexed names, or to orchestrate progressive movement of replicas from one StatefulSet to another. If set, replica indices will be in the range:
     *   [.spec.ordinals.start, .spec.ordinals.start + .spec.replicas).
     * If unset, defaults to 0. Replica indices will be in the range:
     *   [0, .spec.replicas).
     * @type {number}
     * @memberof V1StatefulSetOrdinals
     */
    start?: number;
}

/**
 * Check if a given object implements the V1StatefulSetOrdinals interface.
 */
export function instanceOfV1StatefulSetOrdinals(value: object): value is V1StatefulSetOrdinals {
    return true;
}

export function V1StatefulSetOrdinalsFromJSON(json: any): V1StatefulSetOrdinals {
    return V1StatefulSetOrdinalsFromJSONTyped(json, false);
}

export function V1StatefulSetOrdinalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatefulSetOrdinals {
    if (json == null) {
        return json;
    }
    return {
        
        'start': json['start'] == null ? undefined : json['start'],
    };
}

export function V1StatefulSetOrdinalsToJSON(value?: V1StatefulSetOrdinals | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start': value['start'],
    };
}

