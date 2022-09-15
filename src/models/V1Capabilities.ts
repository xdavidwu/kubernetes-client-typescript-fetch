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
 * Adds and removes POSIX capabilities from running containers.
 * @export
 * @interface V1Capabilities
 */
export interface V1Capabilities {
    /**
     * Added capabilities
     * @type {Array<string>}
     * @memberof V1Capabilities
     */
    add?: Array<string>;
    /**
     * Removed capabilities
     * @type {Array<string>}
     * @memberof V1Capabilities
     */
    drop?: Array<string>;
}

export function V1CapabilitiesFromJSON(json: any): V1Capabilities {
    return V1CapabilitiesFromJSONTyped(json, false);
}

export function V1CapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Capabilities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'add': !exists(json, 'add') ? undefined : json['add'],
        'drop': !exists(json, 'drop') ? undefined : json['drop'],
    };
}

export function V1CapabilitiesToJSON(value?: V1Capabilities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add': value.add,
        'drop': value.drop,
    };
}


