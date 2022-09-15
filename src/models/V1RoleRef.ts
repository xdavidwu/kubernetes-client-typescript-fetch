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
 * RoleRef contains information that points to the role being used
 * @export
 * @interface V1RoleRef
 */
export interface V1RoleRef {
    /**
     * APIGroup is the group for the resource being referenced
     * @type {string}
     * @memberof V1RoleRef
     */
    apiGroup: string;
    /**
     * Kind is the type of resource being referenced
     * @type {string}
     * @memberof V1RoleRef
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     * @type {string}
     * @memberof V1RoleRef
     */
    name: string;
}

export function V1RoleRefFromJSON(json: any): V1RoleRef {
    return V1RoleRefFromJSONTyped(json, false);
}

export function V1RoleRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RoleRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function V1RoleRefToJSON(value?: V1RoleRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
    };
}


