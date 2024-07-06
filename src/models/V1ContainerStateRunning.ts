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
 * ContainerStateRunning is a running state of a container.
 * @export
 * @interface V1ContainerStateRunning
 */
export interface V1ContainerStateRunning {
    /**
     * Time at which the container was last (re-)started
     * @type {Date}
     * @memberof V1ContainerStateRunning
     */
    startedAt?: Date;
}

/**
 * Check if a given object implements the V1ContainerStateRunning interface.
 */
export function instanceOfV1ContainerStateRunning(value: object): value is V1ContainerStateRunning {
    return true;
}

export function V1ContainerStateRunningFromJSON(json: any): V1ContainerStateRunning {
    return V1ContainerStateRunningFromJSONTyped(json, false);
}

export function V1ContainerStateRunningFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerStateRunning {
    if (json == null) {
        return json;
    }
    return {
        
        'startedAt': json['startedAt'] == null ? undefined : (new Date(json['startedAt'])),
    };
}

export function V1ContainerStateRunningToJSON(value?: V1ContainerStateRunning | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'startedAt': value['startedAt'] == null ? undefined : ((value['startedAt']).toISOString()),
    };
}

