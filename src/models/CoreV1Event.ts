/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CoreV1EventSeries,
    CoreV1EventSeriesFromJSON,
    CoreV1EventSeriesFromJSONTyped,
    CoreV1EventSeriesToJSON,
    V1EventSource,
    V1EventSourceFromJSON,
    V1EventSourceFromJSONTyped,
    V1EventSourceToJSON,
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1ObjectReference,
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './';

/**
 * Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 * @export
 * @interface CoreV1Event
 */
export interface CoreV1Event {
    /**
     * What action was taken/failed regarding to the Regarding object.
     * @type {string}
     * @memberof CoreV1Event
     */
    action?: string;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof CoreV1Event
     */
    apiVersion?: string;
    /**
     * The number of times this event has occurred.
     * @type {number}
     * @memberof CoreV1Event
     */
    count?: number;
    /**
     * Time when this Event was first observed.
     * @type {Date}
     * @memberof CoreV1Event
     */
    eventTime?: Date;
    /**
     * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
     * @type {Date}
     * @memberof CoreV1Event
     */
    firstTimestamp?: Date;
    /**
     * 
     * @type {V1ObjectReference}
     * @memberof CoreV1Event
     */
    involvedObject: V1ObjectReference;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof CoreV1Event
     */
    kind?: string;
    /**
     * The time at which the most recent occurrence of this event was recorded.
     * @type {Date}
     * @memberof CoreV1Event
     */
    lastTimestamp?: Date;
    /**
     * A human-readable description of the status of this operation.
     * @type {string}
     * @memberof CoreV1Event
     */
    message?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof CoreV1Event
     */
    metadata: V1ObjectMeta;
    /**
     * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
     * @type {string}
     * @memberof CoreV1Event
     */
    reason?: string;
    /**
     * 
     * @type {V1ObjectReference}
     * @memberof CoreV1Event
     */
    related?: V1ObjectReference;
    /**
     * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
     * @type {string}
     * @memberof CoreV1Event
     */
    reportingComponent?: string;
    /**
     * ID of the controller instance, e.g. `kubelet-xyzf`.
     * @type {string}
     * @memberof CoreV1Event
     */
    reportingInstance?: string;
    /**
     * 
     * @type {CoreV1EventSeries}
     * @memberof CoreV1Event
     */
    series?: CoreV1EventSeries;
    /**
     * 
     * @type {V1EventSource}
     * @memberof CoreV1Event
     */
    source?: V1EventSource;
    /**
     * Type of this event (Normal, Warning), new types could be added in the future
     * @type {string}
     * @memberof CoreV1Event
     */
    type?: string;
}

export function CoreV1EventFromJSON(json: any): CoreV1Event {
    return CoreV1EventFromJSONTyped(json, false);
}

export function CoreV1EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoreV1Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'eventTime': !exists(json, 'eventTime') ? undefined : (new Date(json['eventTime'])),
        'firstTimestamp': !exists(json, 'firstTimestamp') ? undefined : (new Date(json['firstTimestamp'])),
        'involvedObject': V1ObjectReferenceFromJSON(json['involvedObject']),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'lastTimestamp': !exists(json, 'lastTimestamp') ? undefined : (new Date(json['lastTimestamp'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'metadata': V1ObjectMetaFromJSON(json['metadata']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'related': !exists(json, 'related') ? undefined : V1ObjectReferenceFromJSON(json['related']),
        'reportingComponent': !exists(json, 'reportingComponent') ? undefined : json['reportingComponent'],
        'reportingInstance': !exists(json, 'reportingInstance') ? undefined : json['reportingInstance'],
        'series': !exists(json, 'series') ? undefined : CoreV1EventSeriesFromJSON(json['series']),
        'source': !exists(json, 'source') ? undefined : V1EventSourceFromJSON(json['source']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CoreV1EventToJSON(value?: CoreV1Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'apiVersion': value.apiVersion,
        'count': value.count,
        'eventTime': value.eventTime === undefined ? undefined : (value.eventTime.toISOString()),
        'firstTimestamp': value.firstTimestamp === undefined ? undefined : (value.firstTimestamp.toISOString()),
        'involvedObject': V1ObjectReferenceToJSON(value.involvedObject),
        'kind': value.kind,
        'lastTimestamp': value.lastTimestamp === undefined ? undefined : (value.lastTimestamp.toISOString()),
        'message': value.message,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'reason': value.reason,
        'related': V1ObjectReferenceToJSON(value.related),
        'reportingComponent': value.reportingComponent,
        'reportingInstance': value.reportingInstance,
        'series': CoreV1EventSeriesToJSON(value.series),
        'source': V1EventSourceToJSON(value.source),
        'type': value.type,
    };
}


