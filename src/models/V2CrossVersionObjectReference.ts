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
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 * @export
 * @interface V2CrossVersionObjectReference
 */
export interface V2CrossVersionObjectReference {
    /**
     * API version of the referent
     * @type {string}
     * @memberof V2CrossVersionObjectReference
     */
    apiVersion?: string;
    /**
     * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
     * @type {string}
     * @memberof V2CrossVersionObjectReference
     */
    kind: string;
    /**
     * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
     * @type {string}
     * @memberof V2CrossVersionObjectReference
     */
    name: string;
}

/**
 * Check if a given object implements the V2CrossVersionObjectReference interface.
 */
export function instanceOfV2CrossVersionObjectReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V2CrossVersionObjectReferenceFromJSON(json: any): V2CrossVersionObjectReference {
    return V2CrossVersionObjectReferenceFromJSONTyped(json, false);
}

export function V2CrossVersionObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2CrossVersionObjectReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function V2CrossVersionObjectReferenceToJSON(value?: V2CrossVersionObjectReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'name': value.name,
    };
}

