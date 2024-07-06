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
import type { V1VolumeAttachmentSource } from './V1VolumeAttachmentSource';
import {
    V1VolumeAttachmentSourceFromJSON,
    V1VolumeAttachmentSourceFromJSONTyped,
    V1VolumeAttachmentSourceToJSON,
} from './V1VolumeAttachmentSource';

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 * @export
 * @interface V1VolumeAttachmentSpec
 */
export interface V1VolumeAttachmentSpec {
    /**
     * attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
     * @type {string}
     * @memberof V1VolumeAttachmentSpec
     */
    attacher: string;
    /**
     * nodeName represents the node that the volume should be attached to.
     * @type {string}
     * @memberof V1VolumeAttachmentSpec
     */
    nodeName: string;
    /**
     * 
     * @type {V1VolumeAttachmentSource}
     * @memberof V1VolumeAttachmentSpec
     */
    source: V1VolumeAttachmentSource;
}

/**
 * Check if a given object implements the V1VolumeAttachmentSpec interface.
 */
export function instanceOfV1VolumeAttachmentSpec(value: object): value is V1VolumeAttachmentSpec {
    if (!('attacher' in value) || value['attacher'] === undefined) return false;
    if (!('nodeName' in value) || value['nodeName'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function V1VolumeAttachmentSpecFromJSON(json: any): V1VolumeAttachmentSpec {
    return V1VolumeAttachmentSpecFromJSONTyped(json, false);
}

export function V1VolumeAttachmentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeAttachmentSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'attacher': json['attacher'],
        'nodeName': json['nodeName'],
        'source': V1VolumeAttachmentSourceFromJSON(json['source']),
    };
}

export function V1VolumeAttachmentSpecToJSON(value?: V1VolumeAttachmentSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attacher': value['attacher'],
        'nodeName': value['nodeName'],
        'source': V1VolumeAttachmentSourceToJSON(value['source']),
    };
}

