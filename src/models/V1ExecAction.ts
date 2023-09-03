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
 * ExecAction describes a "run in container" action.
 * @export
 * @interface V1ExecAction
 */
export interface V1ExecAction {
    /**
     * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
     * @type {Array<string>}
     * @memberof V1ExecAction
     */
    command?: Array<string>;
}

/**
 * Check if a given object implements the V1ExecAction interface.
 */
export function instanceOfV1ExecAction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ExecActionFromJSON(json: any): V1ExecAction {
    return V1ExecActionFromJSONTyped(json, false);
}

export function V1ExecActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ExecAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'command': !exists(json, 'command') ? undefined : json['command'],
    };
}

export function V1ExecActionToJSON(value?: V1ExecAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'command': value.command,
    };
}

