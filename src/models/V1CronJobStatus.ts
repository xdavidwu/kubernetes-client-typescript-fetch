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
import type { V1ObjectReference } from './V1ObjectReference';
import {
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './V1ObjectReference';

/**
 * CronJobStatus represents the current state of a cron job.
 * @export
 * @interface V1CronJobStatus
 */
export interface V1CronJobStatus {
    /**
     * A list of pointers to currently running jobs.
     * @type {Array<V1ObjectReference>}
     * @memberof V1CronJobStatus
     */
    active?: Array<V1ObjectReference>;
    /**
     * Information when was the last time the job was successfully scheduled.
     * @type {Date}
     * @memberof V1CronJobStatus
     */
    lastScheduleTime?: Date;
    /**
     * Information when was the last time the job successfully completed.
     * @type {Date}
     * @memberof V1CronJobStatus
     */
    lastSuccessfulTime?: Date;
}

/**
 * Check if a given object implements the V1CronJobStatus interface.
 */
export function instanceOfV1CronJobStatus(value: object): value is V1CronJobStatus {
    return true;
}

export function V1CronJobStatusFromJSON(json: any): V1CronJobStatus {
    return V1CronJobStatusFromJSONTyped(json, false);
}

export function V1CronJobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CronJobStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'] == null ? undefined : ((json['active'] as Array<any>).map(V1ObjectReferenceFromJSON)),
        'lastScheduleTime': json['lastScheduleTime'] == null ? undefined : (new Date(json['lastScheduleTime'])),
        'lastSuccessfulTime': json['lastSuccessfulTime'] == null ? undefined : (new Date(json['lastSuccessfulTime'])),
    };
}

export function V1CronJobStatusToJSON(value?: V1CronJobStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'active': value['active'] == null ? undefined : ((value['active'] as Array<any>).map(V1ObjectReferenceToJSON)),
        'lastScheduleTime': value['lastScheduleTime'] == null ? undefined : ((value['lastScheduleTime']).toISOString()),
        'lastSuccessfulTime': value['lastSuccessfulTime'] == null ? undefined : ((value['lastSuccessfulTime']).toISOString()),
    };
}

