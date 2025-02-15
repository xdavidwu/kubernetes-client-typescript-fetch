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
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 * @export
 * @interface V1OwnerReference
 */
export interface V1OwnerReference {
    /**
     * API version of the referent.
     * @type {string}
     * @memberof V1OwnerReference
     */
    apiVersion: string;
    /**
     * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
     * @type {boolean}
     * @memberof V1OwnerReference
     */
    blockOwnerDeletion?: boolean;
    /**
     * If true, this reference points to the managing controller.
     * @type {boolean}
     * @memberof V1OwnerReference
     */
    controller?: boolean;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1OwnerReference
     */
    kind: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     * @type {string}
     * @memberof V1OwnerReference
     */
    name: string;
    /**
     * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     * @type {string}
     * @memberof V1OwnerReference
     */
    uid: string;
}

/**
 * Check if a given object implements the V1OwnerReference interface.
 */
export function instanceOfV1OwnerReference(value: object): value is V1OwnerReference {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('uid' in value) || value['uid'] === undefined) return false;
    return true;
}

export function V1OwnerReferenceFromJSON(json: any): V1OwnerReference {
    return V1OwnerReferenceFromJSONTyped(json, false);
}

export function V1OwnerReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1OwnerReference {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'],
        'blockOwnerDeletion': json['blockOwnerDeletion'] == null ? undefined : json['blockOwnerDeletion'],
        'controller': json['controller'] == null ? undefined : json['controller'],
        'kind': json['kind'],
        'name': json['name'],
        'uid': json['uid'],
    };
}

export function V1OwnerReferenceToJSON(value?: V1OwnerReference | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'blockOwnerDeletion': value['blockOwnerDeletion'],
        'controller': value['controller'],
        'kind': value['kind'],
        'name': value['name'],
        'uid': value['uid'],
    };
}

