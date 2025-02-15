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
 * Event represents a single event to a watched resource.
 * @export
 * @interface V1WatchEvent
 */
export interface V1WatchEvent {
    /**
     * Object is:
     *  * If Type is Added or Modified: the new state of the object.
     *  * If Type is Deleted: the state of the object immediately before deletion.
     *  * If Type is Error: *Status is recommended; other types may make sense
     *    depending on context.
     * @type {object}
     * @memberof V1WatchEvent
     */
    object: object;
    /**
     * 
     * @type {string}
     * @memberof V1WatchEvent
     */
    type: string;
}

/**
 * Check if a given object implements the V1WatchEvent interface.
 */
export function instanceOfV1WatchEvent(value: object): value is V1WatchEvent {
    if (!('object' in value) || value['object'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1WatchEventFromJSON(json: any): V1WatchEvent {
    return V1WatchEventFromJSONTyped(json, false);
}

export function V1WatchEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1WatchEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'],
        'type': json['type'],
    };
}

export function V1WatchEventToJSON(value?: V1WatchEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': value['object'],
        'type': value['type'],
    };
}

