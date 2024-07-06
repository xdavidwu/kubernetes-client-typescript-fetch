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
 * ClusterTrustBundleSpec contains the signer and trust anchors.
 * @export
 * @interface V1alpha1ClusterTrustBundleSpec
 */
export interface V1alpha1ClusterTrustBundleSpec {
    /**
     * signerName indicates the associated signer, if any.
     * 
     * In order to create or update a ClusterTrustBundle that sets signerName, you must have the following cluster-scoped permission: group=certificates.k8s.io resource=signers resourceName=<the signer name> verb=attest.
     * 
     * If signerName is not empty, then the ClusterTrustBundle object must be named with the signer name as a prefix (translating slashes to colons). For example, for the signer name `example.com/foo`, valid ClusterTrustBundle object names include `example.com:foo:abc` and `example.com:foo:v1`.
     * 
     * If signerName is empty, then the ClusterTrustBundle object's name must not have such a prefix.
     * 
     * List/watch requests for ClusterTrustBundles can filter on this field using a `spec.signerName=NAME` field selector.
     * @type {string}
     * @memberof V1alpha1ClusterTrustBundleSpec
     */
    signerName?: string;
    /**
     * trustBundle contains the individual X.509 trust anchors for this bundle, as PEM bundle of PEM-wrapped, DER-formatted X.509 certificates.
     * 
     * The data must consist only of PEM certificate blocks that parse as valid X.509 certificates.  Each certificate must include a basic constraints extension with the CA bit set.  The API server will reject objects that contain duplicate certificates, or that use PEM block headers.
     * 
     * Users of ClusterTrustBundles, including Kubelet, are free to reorder and deduplicate certificate blocks in this file according to their own logic, as well as to drop PEM block headers and inter-block data.
     * @type {string}
     * @memberof V1alpha1ClusterTrustBundleSpec
     */
    trustBundle: string;
}

/**
 * Check if a given object implements the V1alpha1ClusterTrustBundleSpec interface.
 */
export function instanceOfV1alpha1ClusterTrustBundleSpec(value: object): value is V1alpha1ClusterTrustBundleSpec {
    if (!('trustBundle' in value) || value['trustBundle'] === undefined) return false;
    return true;
}

export function V1alpha1ClusterTrustBundleSpecFromJSON(json: any): V1alpha1ClusterTrustBundleSpec {
    return V1alpha1ClusterTrustBundleSpecFromJSONTyped(json, false);
}

export function V1alpha1ClusterTrustBundleSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ClusterTrustBundleSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'signerName': json['signerName'] == null ? undefined : json['signerName'],
        'trustBundle': json['trustBundle'],
    };
}

export function V1alpha1ClusterTrustBundleSpecToJSON(value?: V1alpha1ClusterTrustBundleSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'signerName': value['signerName'],
        'trustBundle': value['trustBundle'],
    };
}

