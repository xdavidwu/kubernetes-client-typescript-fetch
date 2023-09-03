/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1NodeSelector } from './V1NodeSelector';
import {
    V1NodeSelectorFromJSON,
    V1NodeSelectorFromJSONTyped,
    V1NodeSelectorToJSON,
} from './V1NodeSelector';
import type { V1PreferredSchedulingTerm } from './V1PreferredSchedulingTerm';
import {
    V1PreferredSchedulingTermFromJSON,
    V1PreferredSchedulingTermFromJSONTyped,
    V1PreferredSchedulingTermToJSON,
} from './V1PreferredSchedulingTerm';

/**
 * Node affinity is a group of node affinity scheduling rules.
 * @export
 * @interface V1NodeAffinity
 */
export interface V1NodeAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
     * @type {Array<V1PreferredSchedulingTerm>}
     * @memberof V1NodeAffinity
     */
    preferredDuringSchedulingIgnoredDuringExecution?: Array<V1PreferredSchedulingTerm>;
    /**
     * 
     * @type {V1NodeSelector}
     * @memberof V1NodeAffinity
     */
    requiredDuringSchedulingIgnoredDuringExecution?: V1NodeSelector;
}

/**
 * Check if a given object implements the V1NodeAffinity interface.
 */
export function instanceOfV1NodeAffinity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1NodeAffinityFromJSON(json: any): V1NodeAffinity {
    return V1NodeAffinityFromJSONTyped(json, false);
}

export function V1NodeAffinityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeAffinity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': !exists(json, 'preferredDuringSchedulingIgnoredDuringExecution') ? undefined : ((json['preferredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(V1PreferredSchedulingTermFromJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': !exists(json, 'requiredDuringSchedulingIgnoredDuringExecution') ? undefined : V1NodeSelectorFromJSON(json['requiredDuringSchedulingIgnoredDuringExecution']),
    };
}

export function V1NodeAffinityToJSON(value?: V1NodeAffinity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': value.preferredDuringSchedulingIgnoredDuringExecution === undefined ? undefined : ((value.preferredDuringSchedulingIgnoredDuringExecution as Array<any>).map(V1PreferredSchedulingTermToJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': V1NodeSelectorToJSON(value.requiredDuringSchedulingIgnoredDuringExecution),
    };
}

