/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Maps a string key to a path within a volume.
 * @export
 * @interface V1KeyToPath
 */
export interface V1KeyToPath {
    /**
     * key is the key to project.
     * @type {string}
     * @memberof V1KeyToPath
     */
    key: string;
    /**
     * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof V1KeyToPath
     */
    mode?: number;
    /**
     * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
     * @type {string}
     * @memberof V1KeyToPath
     */
    path: string;
}

/**
 * Check if a given object implements the V1KeyToPath interface.
 */
export function instanceOfV1KeyToPath(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function V1KeyToPathFromJSON(json: any): V1KeyToPath {
    return V1KeyToPathFromJSONTyped(json, false);
}

export function V1KeyToPathFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KeyToPath {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'path': json['path'],
    };
}

export function V1KeyToPathToJSON(value?: V1KeyToPath | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'mode': value.mode,
        'path': value.path,
    };
}

