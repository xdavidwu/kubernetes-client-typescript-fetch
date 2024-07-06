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
import type { V1alpha2NamedResourcesFilter } from './V1alpha2NamedResourcesFilter';
import {
    V1alpha2NamedResourcesFilterFromJSON,
    V1alpha2NamedResourcesFilterFromJSONTyped,
    V1alpha2NamedResourcesFilterToJSON,
} from './V1alpha2NamedResourcesFilter';

/**
 * ResourceFilter is a filter for resources from one particular driver.
 * @export
 * @interface V1alpha2ResourceFilter
 */
export interface V1alpha2ResourceFilter {
    /**
     * DriverName is the name used by the DRA driver kubelet plugin.
     * @type {string}
     * @memberof V1alpha2ResourceFilter
     */
    driverName?: string;
    /**
     * 
     * @type {V1alpha2NamedResourcesFilter}
     * @memberof V1alpha2ResourceFilter
     */
    namedResources?: V1alpha2NamedResourcesFilter;
}

/**
 * Check if a given object implements the V1alpha2ResourceFilter interface.
 */
export function instanceOfV1alpha2ResourceFilter(value: object): value is V1alpha2ResourceFilter {
    return true;
}

export function V1alpha2ResourceFilterFromJSON(json: any): V1alpha2ResourceFilter {
    return V1alpha2ResourceFilterFromJSONTyped(json, false);
}

export function V1alpha2ResourceFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'driverName': json['driverName'] == null ? undefined : json['driverName'],
        'namedResources': json['namedResources'] == null ? undefined : V1alpha2NamedResourcesFilterFromJSON(json['namedResources']),
    };
}

export function V1alpha2ResourceFilterToJSON(value?: V1alpha2ResourceFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'driverName': value['driverName'],
        'namedResources': V1alpha2NamedResourcesFilterToJSON(value['namedResources']),
    };
}

