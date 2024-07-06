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
import type { IntOrString } from './IntOrString';
import {
    IntOrStringFromJSON,
    IntOrStringFromJSONTyped,
    IntOrStringToJSON,
} from './IntOrString';

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 * @export
 * @interface V1RollingUpdateStatefulSetStrategy
 */
export interface V1RollingUpdateStatefulSetStrategy {
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {IntOrString}
     * @memberof V1RollingUpdateStatefulSetStrategy
     */
    maxUnavailable?: IntOrString;
    /**
     * Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
     * @type {number}
     * @memberof V1RollingUpdateStatefulSetStrategy
     */
    partition?: number;
}

/**
 * Check if a given object implements the V1RollingUpdateStatefulSetStrategy interface.
 */
export function instanceOfV1RollingUpdateStatefulSetStrategy(value: object): value is V1RollingUpdateStatefulSetStrategy {
    return true;
}

export function V1RollingUpdateStatefulSetStrategyFromJSON(json: any): V1RollingUpdateStatefulSetStrategy {
    return V1RollingUpdateStatefulSetStrategyFromJSONTyped(json, false);
}

export function V1RollingUpdateStatefulSetStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RollingUpdateStatefulSetStrategy {
    if (json == null) {
        return json;
    }
    return {
        
        'maxUnavailable': json['maxUnavailable'] == null ? undefined : IntOrStringFromJSON(json['maxUnavailable']),
        'partition': json['partition'] == null ? undefined : json['partition'],
    };
}

export function V1RollingUpdateStatefulSetStrategyToJSON(value?: V1RollingUpdateStatefulSetStrategy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'maxUnavailable': IntOrStringToJSON(value['maxUnavailable']),
        'partition': value['partition'],
    };
}

