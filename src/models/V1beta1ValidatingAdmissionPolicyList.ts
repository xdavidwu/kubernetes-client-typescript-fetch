/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';
import type { V1beta1ValidatingAdmissionPolicy } from './V1beta1ValidatingAdmissionPolicy';
import {
    V1beta1ValidatingAdmissionPolicyFromJSON,
    V1beta1ValidatingAdmissionPolicyFromJSONTyped,
    V1beta1ValidatingAdmissionPolicyToJSON,
} from './V1beta1ValidatingAdmissionPolicy';

/**
 * ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.
 * @export
 * @interface V1beta1ValidatingAdmissionPolicyList
 */
export interface V1beta1ValidatingAdmissionPolicyList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1ValidatingAdmissionPolicyList
     */
    apiVersion?: string;
    /**
     * List of ValidatingAdmissionPolicy.
     * @type {Array<V1beta1ValidatingAdmissionPolicy>}
     * @memberof V1beta1ValidatingAdmissionPolicyList
     */
    items?: Array<V1beta1ValidatingAdmissionPolicy>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1ValidatingAdmissionPolicyList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1beta1ValidatingAdmissionPolicyList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1beta1ValidatingAdmissionPolicyList interface.
 */
export function instanceOfV1beta1ValidatingAdmissionPolicyList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1ValidatingAdmissionPolicyListFromJSON(json: any): V1beta1ValidatingAdmissionPolicyList {
    return V1beta1ValidatingAdmissionPolicyListFromJSONTyped(json, false);
}

export function V1beta1ValidatingAdmissionPolicyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ValidatingAdmissionPolicyList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(V1beta1ValidatingAdmissionPolicyFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1ValidatingAdmissionPolicyListToJSON(value?: V1beta1ValidatingAdmissionPolicyList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(V1beta1ValidatingAdmissionPolicyToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

