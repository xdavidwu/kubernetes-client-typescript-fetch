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
/**
 * ContainerResizePolicy represents resource resize policy for the container.
 * @export
 * @interface V1ContainerResizePolicy
 */
export interface V1ContainerResizePolicy {
    /**
     * Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
     * @type {string}
     * @memberof V1ContainerResizePolicy
     */
    resourceName: string;
    /**
     * Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
     * @type {string}
     * @memberof V1ContainerResizePolicy
     */
    restartPolicy: string;
}

/**
 * Check if a given object implements the V1ContainerResizePolicy interface.
 */
export function instanceOfV1ContainerResizePolicy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resourceName" in value;
    isInstance = isInstance && "restartPolicy" in value;

    return isInstance;
}

export function V1ContainerResizePolicyFromJSON(json: any): V1ContainerResizePolicy {
    return V1ContainerResizePolicyFromJSONTyped(json, false);
}

export function V1ContainerResizePolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerResizePolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resourceName': json['resourceName'],
        'restartPolicy': json['restartPolicy'],
    };
}

export function V1ContainerResizePolicyToJSON(value?: V1ContainerResizePolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resourceName': value.resourceName,
        'restartPolicy': value.restartPolicy,
    };
}

