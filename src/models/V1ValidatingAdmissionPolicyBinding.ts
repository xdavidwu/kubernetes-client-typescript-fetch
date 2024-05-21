/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1ObjectMeta } from './V1ObjectMeta';
import {
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import type { V1ValidatingAdmissionPolicyBindingSpec } from './V1ValidatingAdmissionPolicyBindingSpec';
import {
    V1ValidatingAdmissionPolicyBindingSpecFromJSON,
    V1ValidatingAdmissionPolicyBindingSpecFromJSONTyped,
    V1ValidatingAdmissionPolicyBindingSpecToJSON,
} from './V1ValidatingAdmissionPolicyBindingSpec';

/**
 * ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.
 * 
 * For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding.
 * 
 * The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 * @export
 * @interface V1ValidatingAdmissionPolicyBinding
 */
export interface V1ValidatingAdmissionPolicyBinding {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ValidatingAdmissionPolicyBinding
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ValidatingAdmissionPolicyBinding
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ValidatingAdmissionPolicyBinding
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1ValidatingAdmissionPolicyBindingSpec}
     * @memberof V1ValidatingAdmissionPolicyBinding
     */
    spec?: V1ValidatingAdmissionPolicyBindingSpec;
}

/**
 * Check if a given object implements the V1ValidatingAdmissionPolicyBinding interface.
 */
export function instanceOfV1ValidatingAdmissionPolicyBinding(value: object): value is V1ValidatingAdmissionPolicyBinding {
    return true;
}

export function V1ValidatingAdmissionPolicyBindingFromJSON(json: any): V1ValidatingAdmissionPolicyBinding {
    return V1ValidatingAdmissionPolicyBindingFromJSONTyped(json, false);
}

export function V1ValidatingAdmissionPolicyBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ValidatingAdmissionPolicyBinding {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1ValidatingAdmissionPolicyBindingSpecFromJSON(json['spec']),
    };
}

export function V1ValidatingAdmissionPolicyBindingToJSON(value?: V1ValidatingAdmissionPolicyBinding | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': V1ObjectMetaToJSON(value['metadata']),
        'spec': V1ValidatingAdmissionPolicyBindingSpecToJSON(value['spec']),
    };
}

