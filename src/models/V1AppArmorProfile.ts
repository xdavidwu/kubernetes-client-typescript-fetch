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
/**
 * AppArmorProfile defines a pod or container's AppArmor settings.
 * @export
 * @interface V1AppArmorProfile
 */
export interface V1AppArmorProfile {
    /**
     * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost".
     * @type {string}
     * @memberof V1AppArmorProfile
     */
    localhostProfile?: string;
    /**
     * type indicates which kind of AppArmor profile will be applied. Valid options are:
     *   Localhost - a profile pre-loaded on the node.
     *   RuntimeDefault - the container runtime's default profile.
     *   Unconfined - no AppArmor enforcement.
     * @type {string}
     * @memberof V1AppArmorProfile
     */
    type: string;
}

/**
 * Check if a given object implements the V1AppArmorProfile interface.
 */
export function instanceOfV1AppArmorProfile(value: object): value is V1AppArmorProfile {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1AppArmorProfileFromJSON(json: any): V1AppArmorProfile {
    return V1AppArmorProfileFromJSONTyped(json, false);
}

export function V1AppArmorProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AppArmorProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'localhostProfile': json['localhostProfile'] == null ? undefined : json['localhostProfile'],
        'type': json['type'],
    };
}

export function V1AppArmorProfileToJSON(value?: V1AppArmorProfile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'localhostProfile': value['localhostProfile'],
        'type': value['type'],
    };
}

