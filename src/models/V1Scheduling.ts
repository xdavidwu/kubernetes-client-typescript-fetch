/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1Toleration } from './V1Toleration';
import {
    V1TolerationFromJSON,
    V1TolerationFromJSONTyped,
    V1TolerationToJSON,
} from './V1Toleration';

/**
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 * @export
 * @interface V1Scheduling
 */
export interface V1Scheduling {
    /**
     * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
     * @type {{ [key: string]: string; }}
     * @memberof V1Scheduling
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
     * @type {Array<V1Toleration>}
     * @memberof V1Scheduling
     */
    tolerations?: Array<V1Toleration>;
}

/**
 * Check if a given object implements the V1Scheduling interface.
 */
export function instanceOfV1Scheduling(value: object): value is V1Scheduling {
    return true;
}

export function V1SchedulingFromJSON(json: any): V1Scheduling {
    return V1SchedulingFromJSONTyped(json, false);
}

export function V1SchedulingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Scheduling {
    if (json == null) {
        return json;
    }
    return {
        
        'nodeSelector': json['nodeSelector'] == null ? undefined : json['nodeSelector'],
        'tolerations': json['tolerations'] == null ? undefined : ((json['tolerations'] as Array<any>).map(V1TolerationFromJSON)),
    };
}

export function V1SchedulingToJSON(value?: V1Scheduling | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nodeSelector': value['nodeSelector'],
        'tolerations': value['tolerations'] == null ? undefined : ((value['tolerations'] as Array<any>).map(V1TolerationToJSON)),
    };
}

