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
    V1LifecycleHandler,
    V1LifecycleHandlerFromJSON,
    V1LifecycleHandlerFromJSONTyped,
    V1LifecycleHandlerToJSON,
} from './';

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 * @export
 * @interface V1Lifecycle
 */
export interface V1Lifecycle {
    /**
     * 
     * @type {V1LifecycleHandler}
     * @memberof V1Lifecycle
     */
    postStart?: V1LifecycleHandler;
    /**
     * 
     * @type {V1LifecycleHandler}
     * @memberof V1Lifecycle
     */
    preStop?: V1LifecycleHandler;
}

export function V1LifecycleFromJSON(json: any): V1Lifecycle {
    return V1LifecycleFromJSONTyped(json, false);
}

export function V1LifecycleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Lifecycle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postStart': !exists(json, 'postStart') ? undefined : V1LifecycleHandlerFromJSON(json['postStart']),
        'preStop': !exists(json, 'preStop') ? undefined : V1LifecycleHandlerFromJSON(json['preStop']),
    };
}

export function V1LifecycleToJSON(value?: V1Lifecycle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postStart': V1LifecycleHandlerToJSON(value.postStart),
        'preStop': V1LifecycleHandlerToJSON(value.preStop),
    };
}


