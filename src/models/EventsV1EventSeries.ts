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
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
 * @export
 * @interface EventsV1EventSeries
 */
export interface EventsV1EventSeries {
    /**
     * count is the number of occurrences in this series up to the last heartbeat time.
     * @type {number}
     * @memberof EventsV1EventSeries
     */
    count: number;
    /**
     * lastObservedTime is the time when last Event from the series was seen before last heartbeat.
     * @type {Date}
     * @memberof EventsV1EventSeries
     */
    lastObservedTime: Date;
}

/**
 * Check if a given object implements the EventsV1EventSeries interface.
 */
export function instanceOfEventsV1EventSeries(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "lastObservedTime" in value;

    return isInstance;
}

export function EventsV1EventSeriesFromJSON(json: any): EventsV1EventSeries {
    return EventsV1EventSeriesFromJSONTyped(json, false);
}

export function EventsV1EventSeriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsV1EventSeries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'lastObservedTime': (new Date(json['lastObservedTime'])),
    };
}

export function EventsV1EventSeriesToJSON(value?: EventsV1EventSeries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'lastObservedTime': (value.lastObservedTime.toISOString()),
    };
}

