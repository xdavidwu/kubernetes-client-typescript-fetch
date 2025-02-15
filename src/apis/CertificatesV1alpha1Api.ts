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


import * as runtime from '../runtime';
import type {
  V1APIResourceList,
  V1DeleteOptions,
  V1Status,
  V1alpha1ClusterTrustBundle,
  V1alpha1ClusterTrustBundleList,
} from '../models/index';
import {
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1StatusFromJSON,
    V1StatusToJSON,
    V1alpha1ClusterTrustBundleFromJSON,
    V1alpha1ClusterTrustBundleToJSON,
    V1alpha1ClusterTrustBundleListFromJSON,
    V1alpha1ClusterTrustBundleListToJSON,
} from '../models/index';

export interface CertificatesV1alpha1ApiCreateClusterTrustBundleRequest {
    body: V1alpha1ClusterTrustBundle;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface CertificatesV1alpha1ApiDeleteClusterTrustBundleRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface CertificatesV1alpha1ApiDeleteCollectionClusterTrustBundleRequest {
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}

export interface CertificatesV1alpha1ApiListClusterTrustBundleRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface CertificatesV1alpha1ApiPatchClusterTrustBundleRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface CertificatesV1alpha1ApiReadClusterTrustBundleRequest {
    name: string;
    pretty?: string;
}

export interface CertificatesV1alpha1ApiReplaceClusterTrustBundleRequest {
    name: string;
    body: V1alpha1ClusterTrustBundle;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

/**
 * 
 */
export class CertificatesV1alpha1Api extends runtime.BaseAPI {

    /**
     * create a ClusterTrustBundle
     */
    async createClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiCreateClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1alpha1ClusterTrustBundle>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createClusterTrustBundle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        if (requestParameters['dryRun'] != null) {
            queryParameters['dryRun'] = requestParameters['dryRun'];
        }

        if (requestParameters['fieldManager'] != null) {
            queryParameters['fieldManager'] = requestParameters['fieldManager'];
        }

        if (requestParameters['fieldValidation'] != null) {
            queryParameters['fieldValidation'] = requestParameters['fieldValidation'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1alpha1ClusterTrustBundleToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1ClusterTrustBundleFromJSON(jsonValue));
    }

    /**
     * create a ClusterTrustBundle
     */
    async createClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiCreateClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1alpha1ClusterTrustBundle> {
        const response = await this.createClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a ClusterTrustBundle
     */
    async deleteClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiDeleteClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteClusterTrustBundle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        if (requestParameters['dryRun'] != null) {
            queryParameters['dryRun'] = requestParameters['dryRun'];
        }

        if (requestParameters['gracePeriodSeconds'] != null) {
            queryParameters['gracePeriodSeconds'] = requestParameters['gracePeriodSeconds'];
        }

        if (requestParameters['orphanDependents'] != null) {
            queryParameters['orphanDependents'] = requestParameters['orphanDependents'];
        }

        if (requestParameters['propagationPolicy'] != null) {
            queryParameters['propagationPolicy'] = requestParameters['propagationPolicy'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a ClusterTrustBundle
     */
    async deleteClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiDeleteClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Status> {
        const response = await this.deleteClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of ClusterTrustBundle
     */
    async deleteCollectionClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiDeleteCollectionClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Status>> {
        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        if (requestParameters['_continue'] != null) {
            queryParameters['continue'] = requestParameters['_continue'];
        }

        if (requestParameters['dryRun'] != null) {
            queryParameters['dryRun'] = requestParameters['dryRun'];
        }

        if (requestParameters['fieldSelector'] != null) {
            queryParameters['fieldSelector'] = requestParameters['fieldSelector'];
        }

        if (requestParameters['gracePeriodSeconds'] != null) {
            queryParameters['gracePeriodSeconds'] = requestParameters['gracePeriodSeconds'];
        }

        if (requestParameters['labelSelector'] != null) {
            queryParameters['labelSelector'] = requestParameters['labelSelector'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['orphanDependents'] != null) {
            queryParameters['orphanDependents'] = requestParameters['orphanDependents'];
        }

        if (requestParameters['propagationPolicy'] != null) {
            queryParameters['propagationPolicy'] = requestParameters['propagationPolicy'];
        }

        if (requestParameters['resourceVersion'] != null) {
            queryParameters['resourceVersion'] = requestParameters['resourceVersion'];
        }

        if (requestParameters['resourceVersionMatch'] != null) {
            queryParameters['resourceVersionMatch'] = requestParameters['resourceVersionMatch'];
        }

        if (requestParameters['sendInitialEvents'] != null) {
            queryParameters['sendInitialEvents'] = requestParameters['sendInitialEvents'];
        }

        if (requestParameters['timeoutSeconds'] != null) {
            queryParameters['timeoutSeconds'] = requestParameters['timeoutSeconds'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of ClusterTrustBundle
     */
    async deleteCollectionClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiDeleteCollectionClusterTrustBundleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Status> {
        const response = await this.deleteCollectionClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAPIResourcesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAPIResources(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIResourceList> {
        const response = await this.getAPIResourcesRaw(initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind ClusterTrustBundle
     */
    async listClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiListClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1alpha1ClusterTrustBundleList>> {
        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        if (requestParameters['allowWatchBookmarks'] != null) {
            queryParameters['allowWatchBookmarks'] = requestParameters['allowWatchBookmarks'];
        }

        if (requestParameters['_continue'] != null) {
            queryParameters['continue'] = requestParameters['_continue'];
        }

        if (requestParameters['fieldSelector'] != null) {
            queryParameters['fieldSelector'] = requestParameters['fieldSelector'];
        }

        if (requestParameters['labelSelector'] != null) {
            queryParameters['labelSelector'] = requestParameters['labelSelector'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['resourceVersion'] != null) {
            queryParameters['resourceVersion'] = requestParameters['resourceVersion'];
        }

        if (requestParameters['resourceVersionMatch'] != null) {
            queryParameters['resourceVersionMatch'] = requestParameters['resourceVersionMatch'];
        }

        if (requestParameters['sendInitialEvents'] != null) {
            queryParameters['sendInitialEvents'] = requestParameters['sendInitialEvents'];
        }

        if (requestParameters['timeoutSeconds'] != null) {
            queryParameters['timeoutSeconds'] = requestParameters['timeoutSeconds'];
        }

        if (requestParameters['watch'] != null) {
            queryParameters['watch'] = requestParameters['watch'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1ClusterTrustBundleListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind ClusterTrustBundle
     */
    async listClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiListClusterTrustBundleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1alpha1ClusterTrustBundleList> {
        const response = await this.listClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified ClusterTrustBundle
     */
    async patchClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiPatchClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1alpha1ClusterTrustBundle>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchClusterTrustBundle().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchClusterTrustBundle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        if (requestParameters['dryRun'] != null) {
            queryParameters['dryRun'] = requestParameters['dryRun'];
        }

        if (requestParameters['fieldManager'] != null) {
            queryParameters['fieldManager'] = requestParameters['fieldManager'];
        }

        if (requestParameters['fieldValidation'] != null) {
            queryParameters['fieldValidation'] = requestParameters['fieldValidation'];
        }

        if (requestParameters['force'] != null) {
            queryParameters['force'] = requestParameters['force'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1ClusterTrustBundleFromJSON(jsonValue));
    }

    /**
     * partially update the specified ClusterTrustBundle
     */
    async patchClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiPatchClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1alpha1ClusterTrustBundle> {
        const response = await this.patchClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified ClusterTrustBundle
     */
    async readClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiReadClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1alpha1ClusterTrustBundle>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling readClusterTrustBundle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1ClusterTrustBundleFromJSON(jsonValue));
    }

    /**
     * read the specified ClusterTrustBundle
     */
    async readClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiReadClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1alpha1ClusterTrustBundle> {
        const response = await this.readClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified ClusterTrustBundle
     */
    async replaceClusterTrustBundleRaw(requestParameters: CertificatesV1alpha1ApiReplaceClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1alpha1ClusterTrustBundle>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling replaceClusterTrustBundle().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replaceClusterTrustBundle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        if (requestParameters['dryRun'] != null) {
            queryParameters['dryRun'] = requestParameters['dryRun'];
        }

        if (requestParameters['fieldManager'] != null) {
            queryParameters['fieldManager'] = requestParameters['fieldManager'];
        }

        if (requestParameters['fieldValidation'] != null) {
            queryParameters['fieldValidation'] = requestParameters['fieldValidation'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1alpha1ClusterTrustBundleToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1ClusterTrustBundleFromJSON(jsonValue));
    }

    /**
     * replace the specified ClusterTrustBundle
     */
    async replaceClusterTrustBundle(requestParameters: CertificatesV1alpha1ApiReplaceClusterTrustBundleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1alpha1ClusterTrustBundle> {
        const response = await this.replaceClusterTrustBundleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
