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
import type { EventsV1Event } from './EventsV1Event';
import {
    EventsV1EventFromJSON,
    EventsV1EventFromJSONTyped,
    EventsV1EventToJSON,
} from './EventsV1Event';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * EventList is a list of Event objects.
 * @export
 * @interface EventsV1EventList
 */
export interface EventsV1EventList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof EventsV1EventList
     */
    apiVersion?: string;
    /**
     * items is a list of schema objects.
     * @type {Array<EventsV1Event>}
     * @memberof EventsV1EventList
     */
    items: Array<EventsV1Event>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof EventsV1EventList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof EventsV1EventList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the EventsV1EventList interface.
 */
export function instanceOfEventsV1EventList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function EventsV1EventListFromJSON(json: any): EventsV1EventList {
    return EventsV1EventListFromJSONTyped(json, false);
}

export function EventsV1EventListFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsV1EventList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(EventsV1EventFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function EventsV1EventListToJSON(value?: EventsV1EventList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(EventsV1EventToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

