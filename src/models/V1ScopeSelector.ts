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
import type { V1ScopedResourceSelectorRequirement } from './V1ScopedResourceSelectorRequirement';
import {
    V1ScopedResourceSelectorRequirementFromJSON,
    V1ScopedResourceSelectorRequirementFromJSONTyped,
    V1ScopedResourceSelectorRequirementToJSON,
} from './V1ScopedResourceSelectorRequirement';

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 * @export
 * @interface V1ScopeSelector
 */
export interface V1ScopeSelector {
    /**
     * A list of scope selector requirements by scope of the resources.
     * @type {Array<V1ScopedResourceSelectorRequirement>}
     * @memberof V1ScopeSelector
     */
    matchExpressions?: Array<V1ScopedResourceSelectorRequirement>;
}

/**
 * Check if a given object implements the V1ScopeSelector interface.
 */
export function instanceOfV1ScopeSelector(value: object): value is V1ScopeSelector {
    return true;
}

export function V1ScopeSelectorFromJSON(json: any): V1ScopeSelector {
    return V1ScopeSelectorFromJSONTyped(json, false);
}

export function V1ScopeSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ScopeSelector {
    if (json == null) {
        return json;
    }
    return {
        
        'matchExpressions': json['matchExpressions'] == null ? undefined : ((json['matchExpressions'] as Array<any>).map(V1ScopedResourceSelectorRequirementFromJSON)),
    };
}

export function V1ScopeSelectorToJSON(value?: V1ScopeSelector | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'matchExpressions': value['matchExpressions'] == null ? undefined : ((value['matchExpressions'] as Array<any>).map(V1ScopedResourceSelectorRequirementToJSON)),
    };
}

