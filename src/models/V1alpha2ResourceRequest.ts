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
import type { V1alpha2NamedResourcesRequest } from './V1alpha2NamedResourcesRequest';
import {
    V1alpha2NamedResourcesRequestFromJSON,
    V1alpha2NamedResourcesRequestFromJSONTyped,
    V1alpha2NamedResourcesRequestToJSON,
} from './V1alpha2NamedResourcesRequest';

/**
 * ResourceRequest is a request for resources from one particular driver.
 * @export
 * @interface V1alpha2ResourceRequest
 */
export interface V1alpha2ResourceRequest {
    /**
     * 
     * @type {V1alpha2NamedResourcesRequest}
     * @memberof V1alpha2ResourceRequest
     */
    namedResources?: V1alpha2NamedResourcesRequest;
    /**
     * VendorParameters are arbitrary setup parameters for the requested resource. They are ignored while allocating a claim.
     * @type {object}
     * @memberof V1alpha2ResourceRequest
     */
    vendorParameters?: object;
}

/**
 * Check if a given object implements the V1alpha2ResourceRequest interface.
 */
export function instanceOfV1alpha2ResourceRequest(value: object): value is V1alpha2ResourceRequest {
    return true;
}

export function V1alpha2ResourceRequestFromJSON(json: any): V1alpha2ResourceRequest {
    return V1alpha2ResourceRequestFromJSONTyped(json, false);
}

export function V1alpha2ResourceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'namedResources': json['namedResources'] == null ? undefined : V1alpha2NamedResourcesRequestFromJSON(json['namedResources']),
        'vendorParameters': json['vendorParameters'] == null ? undefined : json['vendorParameters'],
    };
}

export function V1alpha2ResourceRequestToJSON(value?: V1alpha2ResourceRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'namedResources': V1alpha2NamedResourcesRequestToJSON(value['namedResources']),
        'vendorParameters': value['vendorParameters'],
    };
}

