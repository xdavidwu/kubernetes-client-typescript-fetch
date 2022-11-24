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
import type { V1ScopeSelector } from './V1ScopeSelector';
import {
    V1ScopeSelectorFromJSON,
    V1ScopeSelectorFromJSONTyped,
    V1ScopeSelectorToJSON,
} from './V1ScopeSelector';

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 * @export
 * @interface V1ResourceQuotaSpec
 */
export interface V1ResourceQuotaSpec {
    /**
     * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceQuotaSpec
     */
    hard?: { [key: string]: string; };
    /**
     * 
     * @type {V1ScopeSelector}
     * @memberof V1ResourceQuotaSpec
     */
    scopeSelector?: V1ScopeSelector;
    /**
     * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
     * @type {Array<string>}
     * @memberof V1ResourceQuotaSpec
     */
    scopes?: Array<string>;
}

/**
 * Check if a given object implements the V1ResourceQuotaSpec interface.
 */
export function instanceOfV1ResourceQuotaSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ResourceQuotaSpecFromJSON(json: any): V1ResourceQuotaSpec {
    return V1ResourceQuotaSpecFromJSONTyped(json, false);
}

export function V1ResourceQuotaSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceQuotaSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hard': !exists(json, 'hard') ? undefined : json['hard'],
        'scopeSelector': !exists(json, 'scopeSelector') ? undefined : V1ScopeSelectorFromJSON(json['scopeSelector']),
        'scopes': !exists(json, 'scopes') ? undefined : json['scopes'],
    };
}

export function V1ResourceQuotaSpecToJSON(value?: V1ResourceQuotaSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hard': value.hard,
        'scopeSelector': V1ScopeSelectorToJSON(value.scopeSelector),
        'scopes': value.scopes,
    };
}

