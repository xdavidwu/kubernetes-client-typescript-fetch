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
/**
 * PodFailurePolicyOnExitCodesRequirement describes the requirement for handling a failed pod based on its container exit codes. In particular, it lookups the .state.terminated.exitCode for each app container and init container status, represented by the .status.containerStatuses and .status.initContainerStatuses fields in the Pod status, respectively. Containers completed with success (exit code 0) are excluded from the requirement check.
 * @export
 * @interface V1PodFailurePolicyOnExitCodesRequirement
 */
export interface V1PodFailurePolicyOnExitCodesRequirement {
    /**
     * Restricts the check for exit codes to the container with the specified name. When null, the rule applies to all containers. When specified, it should match one the container or initContainer names in the pod template.
     * @type {string}
     * @memberof V1PodFailurePolicyOnExitCodesRequirement
     */
    containerName?: string;
    /**
     * Represents the relationship between the container exit code(s) and the specified values. Containers completed with success (exit code 0) are excluded from the requirement check. Possible values are:
     * 
     * - In: the requirement is satisfied if at least one container exit code
     *   (might be multiple if there are multiple containers not restricted
     *   by the 'containerName' field) is in the set of specified values.
     * - NotIn: the requirement is satisfied if at least one container exit code
     *   (might be multiple if there are multiple containers not restricted
     *   by the 'containerName' field) is not in the set of specified values.
     * Additional values are considered to be added in the future. Clients should react to an unknown operator by assuming the requirement is not satisfied.
     * @type {string}
     * @memberof V1PodFailurePolicyOnExitCodesRequirement
     */
    operator: string;
    /**
     * Specifies the set of values. Each returned container exit code (might be multiple in case of multiple containers) is checked against this set of values with respect to the operator. The list of values must be ordered and must not contain duplicates. Value '0' cannot be used for the In operator. At least one element is required. At most 255 elements are allowed.
     * @type {Array<number>}
     * @memberof V1PodFailurePolicyOnExitCodesRequirement
     */
    values: Array<number>;
}

/**
 * Check if a given object implements the V1PodFailurePolicyOnExitCodesRequirement interface.
 */
export function instanceOfV1PodFailurePolicyOnExitCodesRequirement(value: object): value is V1PodFailurePolicyOnExitCodesRequirement {
    if (!('operator' in value) || value['operator'] === undefined) return false;
    if (!('values' in value) || value['values'] === undefined) return false;
    return true;
}

export function V1PodFailurePolicyOnExitCodesRequirementFromJSON(json: any): V1PodFailurePolicyOnExitCodesRequirement {
    return V1PodFailurePolicyOnExitCodesRequirementFromJSONTyped(json, false);
}

export function V1PodFailurePolicyOnExitCodesRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodFailurePolicyOnExitCodesRequirement {
    if (json == null) {
        return json;
    }
    return {
        
        'containerName': json['containerName'] == null ? undefined : json['containerName'],
        'operator': json['operator'],
        'values': json['values'],
    };
}

export function V1PodFailurePolicyOnExitCodesRequirementToJSON(value?: V1PodFailurePolicyOnExitCodesRequirement | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'containerName': value['containerName'],
        'operator': value['operator'],
        'values': value['values'],
    };
}

