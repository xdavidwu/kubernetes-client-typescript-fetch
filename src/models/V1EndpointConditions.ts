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
/**
 * EndpointConditions represents the current condition of an endpoint.
 * @export
 * @interface V1EndpointConditions
 */
export interface V1EndpointConditions {
    /**
     * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints.
     * @type {boolean}
     * @memberof V1EndpointConditions
     */
    ready?: boolean;
    /**
     * serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition. This field can be enabled with the EndpointSliceTerminatingCondition feature gate.
     * @type {boolean}
     * @memberof V1EndpointConditions
     */
    serving?: boolean;
    /**
     * terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating. This field can be enabled with the EndpointSliceTerminatingCondition feature gate.
     * @type {boolean}
     * @memberof V1EndpointConditions
     */
    terminating?: boolean;
}

export function V1EndpointConditionsFromJSON(json: any): V1EndpointConditions {
    return V1EndpointConditionsFromJSONTyped(json, false);
}

export function V1EndpointConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EndpointConditions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
        'serving': !exists(json, 'serving') ? undefined : json['serving'],
        'terminating': !exists(json, 'terminating') ? undefined : json['terminating'],
    };
}

export function V1EndpointConditionsToJSON(value?: V1EndpointConditions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ready': value.ready,
        'serving': value.serving,
        'terminating': value.terminating,
    };
}


