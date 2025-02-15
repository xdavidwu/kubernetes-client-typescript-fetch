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
/**
 * Describe a container image
 * @export
 * @interface V1ContainerImage
 */
export interface V1ContainerImage {
    /**
     * Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
     * @type {Array<string>}
     * @memberof V1ContainerImage
     */
    names?: Array<string>;
    /**
     * The size of the image in bytes.
     * @type {number}
     * @memberof V1ContainerImage
     */
    sizeBytes?: number;
}

/**
 * Check if a given object implements the V1ContainerImage interface.
 */
export function instanceOfV1ContainerImage(value: object): value is V1ContainerImage {
    return true;
}

export function V1ContainerImageFromJSON(json: any): V1ContainerImage {
    return V1ContainerImageFromJSONTyped(json, false);
}

export function V1ContainerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerImage {
    if (json == null) {
        return json;
    }
    return {
        
        'names': json['names'] == null ? undefined : json['names'],
        'sizeBytes': json['sizeBytes'] == null ? undefined : json['sizeBytes'],
    };
}

export function V1ContainerImageToJSON(value?: V1ContainerImage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'names': value['names'],
        'sizeBytes': value['sizeBytes'],
    };
}

