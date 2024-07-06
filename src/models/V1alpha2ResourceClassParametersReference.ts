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
 * ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
 * @export
 * @interface V1alpha2ResourceClassParametersReference
 */
export interface V1alpha2ResourceClassParametersReference {
    /**
     * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
     * @type {string}
     * @memberof V1alpha2ResourceClassParametersReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata.
     * @type {string}
     * @memberof V1alpha2ResourceClassParametersReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced.
     * @type {string}
     * @memberof V1alpha2ResourceClassParametersReference
     */
    name: string;
    /**
     * Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources.
     * @type {string}
     * @memberof V1alpha2ResourceClassParametersReference
     */
    namespace?: string;
}

/**
 * Check if a given object implements the V1alpha2ResourceClassParametersReference interface.
 */
export function instanceOfV1alpha2ResourceClassParametersReference(value: object): value is V1alpha2ResourceClassParametersReference {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1alpha2ResourceClassParametersReferenceFromJSON(json: any): V1alpha2ResourceClassParametersReference {
    return V1alpha2ResourceClassParametersReferenceFromJSONTyped(json, false);
}

export function V1alpha2ResourceClassParametersReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2ResourceClassParametersReference {
    if (json == null) {
        return json;
    }
    return {
        
        'apiGroup': json['apiGroup'] == null ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
    };
}

export function V1alpha2ResourceClassParametersReferenceToJSON(value?: V1alpha2ResourceClassParametersReference | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiGroup': value['apiGroup'],
        'kind': value['kind'],
        'name': value['name'],
        'namespace': value['namespace'],
    };
}

