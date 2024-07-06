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
import type { V1Preconditions } from './V1Preconditions';
import {
    V1PreconditionsFromJSON,
    V1PreconditionsFromJSONTyped,
    V1PreconditionsToJSON,
} from './V1Preconditions';

/**
 * DeleteOptions may be provided when deleting an API object.
 * @export
 * @interface V1DeleteOptions
 */
export interface V1DeleteOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DeleteOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1DeleteOptions
     */
    dryRun?: Array<string>;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type {number}
     * @memberof V1DeleteOptions
     */
    gracePeriodSeconds?: number;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DeleteOptions
     */
    kind?: string;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type {boolean}
     * @memberof V1DeleteOptions
     */
    orphanDependents?: boolean;
    /**
     * 
     * @type {V1Preconditions}
     * @memberof V1DeleteOptions
     */
    preconditions?: V1Preconditions;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
     * @type {string}
     * @memberof V1DeleteOptions
     */
    propagationPolicy?: string;
}

/**
 * Check if a given object implements the V1DeleteOptions interface.
 */
export function instanceOfV1DeleteOptions(value: object): value is V1DeleteOptions {
    return true;
}

export function V1DeleteOptionsFromJSON(json: any): V1DeleteOptions {
    return V1DeleteOptionsFromJSONTyped(json, false);
}

export function V1DeleteOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeleteOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'dryRun': json['dryRun'] == null ? undefined : json['dryRun'],
        'gracePeriodSeconds': json['gracePeriodSeconds'] == null ? undefined : json['gracePeriodSeconds'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'orphanDependents': json['orphanDependents'] == null ? undefined : json['orphanDependents'],
        'preconditions': json['preconditions'] == null ? undefined : V1PreconditionsFromJSON(json['preconditions']),
        'propagationPolicy': json['propagationPolicy'] == null ? undefined : json['propagationPolicy'],
    };
}

export function V1DeleteOptionsToJSON(value?: V1DeleteOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiVersion': value['apiVersion'],
        'dryRun': value['dryRun'],
        'gracePeriodSeconds': value['gracePeriodSeconds'],
        'kind': value['kind'],
        'orphanDependents': value['orphanDependents'],
        'preconditions': V1PreconditionsToJSON(value['preconditions']),
        'propagationPolicy': value['propagationPolicy'],
    };
}

