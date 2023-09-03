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
import type { V1EnvVarSource } from './V1EnvVarSource';
import {
    V1EnvVarSourceFromJSON,
    V1EnvVarSourceFromJSONTyped,
    V1EnvVarSourceToJSON,
} from './V1EnvVarSource';

/**
 * EnvVar represents an environment variable present in a Container.
 * @export
 * @interface V1EnvVar
 */
export interface V1EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     * @type {string}
     * @memberof V1EnvVar
     */
    name: string;
    /**
     * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
     * @type {string}
     * @memberof V1EnvVar
     */
    value?: string;
    /**
     * 
     * @type {V1EnvVarSource}
     * @memberof V1EnvVar
     */
    valueFrom?: V1EnvVarSource;
}

/**
 * Check if a given object implements the V1EnvVar interface.
 */
export function instanceOfV1EnvVar(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1EnvVarFromJSON(json: any): V1EnvVar {
    return V1EnvVarFromJSONTyped(json, false);
}

export function V1EnvVarFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EnvVar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueFrom': !exists(json, 'valueFrom') ? undefined : V1EnvVarSourceFromJSON(json['valueFrom']),
    };
}

export function V1EnvVarToJSON(value?: V1EnvVar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'valueFrom': V1EnvVarSourceToJSON(value.valueFrom),
    };
}

