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
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
 * @export
 * @interface V1beta1ParamRef
 */
export interface V1beta1ParamRef {
    /**
     * name is the name of the resource being referenced.
     * 
     * One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.
     * 
     * A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.
     * @type {string}
     * @memberof V1beta1ParamRef
     */
    name?: string;
    /**
     * namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.
     * 
     * A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.
     * 
     * - If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.
     * 
     * - If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.
     * @type {string}
     * @memberof V1beta1ParamRef
     */
    namespace?: string;
    /**
     * `parameterNotFoundAction` controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.
     * 
     * Allowed values are `Allow` or `Deny`
     * 
     * Required
     * @type {string}
     * @memberof V1beta1ParamRef
     */
    parameterNotFoundAction?: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1beta1ParamRef
     */
    selector?: V1LabelSelector;
}

/**
 * Check if a given object implements the V1beta1ParamRef interface.
 */
export function instanceOfV1beta1ParamRef(value: object): value is V1beta1ParamRef {
    return true;
}

export function V1beta1ParamRefFromJSON(json: any): V1beta1ParamRef {
    return V1beta1ParamRefFromJSONTyped(json, false);
}

export function V1beta1ParamRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ParamRef {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
        'parameterNotFoundAction': json['parameterNotFoundAction'] == null ? undefined : json['parameterNotFoundAction'],
        'selector': json['selector'] == null ? undefined : V1LabelSelectorFromJSON(json['selector']),
    };
}

export function V1beta1ParamRefToJSON(value?: V1beta1ParamRef | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'namespace': value['namespace'],
        'parameterNotFoundAction': value['parameterNotFoundAction'],
        'selector': V1LabelSelectorToJSON(value['selector']),
    };
}

