/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1CertificateSigningRequest } from './V1CertificateSigningRequest';
import {
    V1CertificateSigningRequestFromJSON,
    V1CertificateSigningRequestFromJSONTyped,
    V1CertificateSigningRequestToJSON,
} from './V1CertificateSigningRequest';
import type { V1ListMeta } from './V1ListMeta';
import {
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 * @export
 * @interface V1CertificateSigningRequestList
 */
export interface V1CertificateSigningRequestList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CertificateSigningRequestList
     */
    apiVersion?: string;
    /**
     * items is a collection of CertificateSigningRequest objects
     * @type {Array<V1CertificateSigningRequest>}
     * @memberof V1CertificateSigningRequestList
     */
    items: Array<V1CertificateSigningRequest>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CertificateSigningRequestList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1CertificateSigningRequestList
     */
    metadata?: V1ListMeta;
}

/**
 * Check if a given object implements the V1CertificateSigningRequestList interface.
 */
export function instanceOfV1CertificateSigningRequestList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function V1CertificateSigningRequestListFromJSON(json: any): V1CertificateSigningRequestList {
    return V1CertificateSigningRequestListFromJSONTyped(json, false);
}

export function V1CertificateSigningRequestListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CertificateSigningRequestList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1CertificateSigningRequestFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1CertificateSigningRequestListToJSON(value?: V1CertificateSigningRequestList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1CertificateSigningRequestToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

