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
import type { V1IngressBackend } from './V1IngressBackend';
import {
    V1IngressBackendFromJSON,
    V1IngressBackendFromJSONTyped,
    V1IngressBackendToJSON,
} from './V1IngressBackend';

/**
 * HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend.
 * @export
 * @interface V1HTTPIngressPath
 */
export interface V1HTTPIngressPath {
    /**
     * 
     * @type {V1IngressBackend}
     * @memberof V1HTTPIngressPath
     */
    backend: V1IngressBackend;
    /**
     * path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".
     * @type {string}
     * @memberof V1HTTPIngressPath
     */
    path?: string;
    /**
     * pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
     *   done on a path element by element basis. A path element refers is the
     *   list of labels in the path split by the '/' separator. A request is a
     *   match for path p if every p is an element-wise prefix of p of the
     *   request path. Note that if the last element of the path is a substring
     *   of the last element in request path, it is not a match (e.g. /foo/bar
     *   matches /foo/bar/baz, but does not match /foo/barbaz).
     * * ImplementationSpecific: Interpretation of the Path matching is up to
     *   the IngressClass. Implementations can treat this as a separate PathType
     *   or treat it identically to Prefix or Exact path types.
     * Implementations are required to support all path types.
     * @type {string}
     * @memberof V1HTTPIngressPath
     */
    pathType: string;
}

/**
 * Check if a given object implements the V1HTTPIngressPath interface.
 */
export function instanceOfV1HTTPIngressPath(value: object): value is V1HTTPIngressPath {
    if (!('backend' in value) || value['backend'] === undefined) return false;
    if (!('pathType' in value) || value['pathType'] === undefined) return false;
    return true;
}

export function V1HTTPIngressPathFromJSON(json: any): V1HTTPIngressPath {
    return V1HTTPIngressPathFromJSONTyped(json, false);
}

export function V1HTTPIngressPathFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HTTPIngressPath {
    if (json == null) {
        return json;
    }
    return {
        
        'backend': V1IngressBackendFromJSON(json['backend']),
        'path': json['path'] == null ? undefined : json['path'],
        'pathType': json['pathType'],
    };
}

export function V1HTTPIngressPathToJSON(value?: V1HTTPIngressPath | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'backend': V1IngressBackendToJSON(value['backend']),
        'path': value['path'],
        'pathType': value['pathType'],
    };
}

