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
    V1HTTPHeader,
    V1HTTPHeaderFromJSON,
    V1HTTPHeaderFromJSONTyped,
    V1HTTPHeaderToJSON,
} from './';

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 * @export
 * @interface V1HTTPGetAction
 */
export interface V1HTTPGetAction {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     * @type {string}
     * @memberof V1HTTPGetAction
     */
    host?: string;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     * @type {Array<V1HTTPHeader>}
     * @memberof V1HTTPGetAction
     */
    httpHeaders?: Array<V1HTTPHeader>;
    /**
     * Path to access on the HTTP server.
     * @type {string}
     * @memberof V1HTTPGetAction
     */
    path?: string;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     * @type {object}
     * @memberof V1HTTPGetAction
     */
    port: object;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     * @type {string}
     * @memberof V1HTTPGetAction
     */
    scheme?: string;
}

export function V1HTTPGetActionFromJSON(json: any): V1HTTPGetAction {
    return V1HTTPGetActionFromJSONTyped(json, false);
}

export function V1HTTPGetActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HTTPGetAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': !exists(json, 'host') ? undefined : json['host'],
        'httpHeaders': !exists(json, 'httpHeaders') ? undefined : ((json['httpHeaders'] as Array<any>).map(V1HTTPHeaderFromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'port': json['port'],
        'scheme': !exists(json, 'scheme') ? undefined : json['scheme'],
    };
}

export function V1HTTPGetActionToJSON(value?: V1HTTPGetAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'httpHeaders': value.httpHeaders === undefined ? undefined : ((value.httpHeaders as Array<any>).map(V1HTTPHeaderToJSON)),
        'path': value.path,
        'port': value.port,
        'scheme': value.scheme,
    };
}


