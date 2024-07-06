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
 * Overhead structure represents the resource overhead associated with running a pod.
 * @export
 * @interface V1Overhead
 */
export interface V1Overhead {
    /**
     * podFixed represents the fixed resource overhead associated with running a pod.
     * @type {{ [key: string]: string; }}
     * @memberof V1Overhead
     */
    podFixed?: { [key: string]: string; };
}

/**
 * Check if a given object implements the V1Overhead interface.
 */
export function instanceOfV1Overhead(value: object): value is V1Overhead {
    return true;
}

export function V1OverheadFromJSON(json: any): V1Overhead {
    return V1OverheadFromJSONTyped(json, false);
}

export function V1OverheadFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Overhead {
    if (json == null) {
        return json;
    }
    return {
        
        'podFixed': json['podFixed'] == null ? undefined : json['podFixed'],
    };
}

export function V1OverheadToJSON(value?: V1Overhead | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'podFixed': value['podFixed'],
    };
}

