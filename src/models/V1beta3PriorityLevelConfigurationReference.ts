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
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 * @export
 * @interface V1beta3PriorityLevelConfigurationReference
 */
export interface V1beta3PriorityLevelConfigurationReference {
    /**
     * `name` is the name of the priority level configuration being referenced Required.
     * @type {string}
     * @memberof V1beta3PriorityLevelConfigurationReference
     */
    name: string;
}

/**
 * Check if a given object implements the V1beta3PriorityLevelConfigurationReference interface.
 */
export function instanceOfV1beta3PriorityLevelConfigurationReference(value: object): value is V1beta3PriorityLevelConfigurationReference {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1beta3PriorityLevelConfigurationReferenceFromJSON(json: any): V1beta3PriorityLevelConfigurationReference {
    return V1beta3PriorityLevelConfigurationReferenceFromJSONTyped(json, false);
}

export function V1beta3PriorityLevelConfigurationReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta3PriorityLevelConfigurationReference {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1beta3PriorityLevelConfigurationReferenceToJSON(value?: V1beta3PriorityLevelConfigurationReference | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

