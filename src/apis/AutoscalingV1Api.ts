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
  V1HorizontalPodAutoscaler,
  V1HorizontalPodAutoscalerList,
  V1Status,
} from '../models/index';
import {
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1HorizontalPodAutoscalerFromJSON,
    V1HorizontalPodAutoscalerToJSON,
    V1HorizontalPodAutoscalerListFromJSON,
    V1HorizontalPodAutoscalerListToJSON,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models/index';

export interface AutoscalingV1ApiCreateNamespacedHorizontalPodAutoscalerRequest {
    namespace: string;
    body: V1HorizontalPodAutoscaler;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface AutoscalingV1ApiDeleteCollectionNamespacedHorizontalPodAutoscalerRequest {
    namespace: string;
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

export interface AutoscalingV1ApiDeleteNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface AutoscalingV1ApiListHorizontalPodAutoscalerForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface AutoscalingV1ApiListNamespacedHorizontalPodAutoscalerRequest {
    namespace: string;
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

export interface AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerRequest {
    name: string;
    namespace: string;
    body: V1HorizontalPodAutoscaler;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerStatusRequest {
    name: string;
    namespace: string;
    body: V1HorizontalPodAutoscaler;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

/**
 * 
 */
export class AutoscalingV1Api extends runtime.BaseAPI {

    /**
     * create a HorizontalPodAutoscaler
     */
    async createNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiCreateNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling createNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createNamespacedHorizontalPodAutoscaler().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1HorizontalPodAutoscalerToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * create a HorizontalPodAutoscaler
     */
    async createNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiCreateNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.createNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of HorizontalPodAutoscaler
     */
    async deleteCollectionNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiDeleteCollectionNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling deleteCollectionNamespacedHorizontalPodAutoscaler().'
            );
        }

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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of HorizontalPodAutoscaler
     */
    async deleteCollectionNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiDeleteCollectionNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Status> {
        const response = await this.deleteCollectionNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a HorizontalPodAutoscaler
     */
    async deleteNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiDeleteNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling deleteNamespacedHorizontalPodAutoscaler().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a HorizontalPodAutoscaler
     */
    async deleteNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiDeleteNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Status> {
        const response = await this.deleteNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
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
            path: `/apis/autoscaling/v1/`,
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
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listHorizontalPodAutoscalerForAllNamespacesRaw(requestParameters: AutoscalingV1ApiListHorizontalPodAutoscalerForAllNamespacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscalerList>> {
        const queryParameters: any = {};

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

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
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
            path: `/apis/autoscaling/v1/horizontalpodautoscalers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listHorizontalPodAutoscalerForAllNamespaces(requestParameters: AutoscalingV1ApiListHorizontalPodAutoscalerForAllNamespacesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscalerList> {
        const response = await this.listHorizontalPodAutoscalerForAllNamespacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiListNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscalerList>> {
        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling listNamespacedHorizontalPodAutoscaler().'
            );
        }

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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     */
    async listNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiListNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscalerList> {
        const response = await this.listNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling patchNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchNamespacedHorizontalPodAutoscaler().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * partially update the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.patchNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update status of the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchNamespacedHorizontalPodAutoscalerStatus().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling patchNamespacedHorizontalPodAutoscalerStatus().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchNamespacedHorizontalPodAutoscalerStatus().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified HorizontalPodAutoscaler
     */
    async patchNamespacedHorizontalPodAutoscalerStatus(requestParameters: AutoscalingV1ApiPatchNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.patchNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling readNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling readNamespacedHorizontalPodAutoscaler().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * read the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.readNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read status of the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling readNamespacedHorizontalPodAutoscalerStatus().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling readNamespacedHorizontalPodAutoscalerStatus().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * read status of the specified HorizontalPodAutoscaler
     */
    async readNamespacedHorizontalPodAutoscalerStatus(requestParameters: AutoscalingV1ApiReadNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.readNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscalerRaw(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling replaceNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling replaceNamespacedHorizontalPodAutoscaler().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replaceNamespacedHorizontalPodAutoscaler().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1HorizontalPodAutoscalerToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * replace the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscaler(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.replaceNamespacedHorizontalPodAutoscalerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace status of the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1HorizontalPodAutoscaler>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling replaceNamespacedHorizontalPodAutoscalerStatus().'
            );
        }

        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling replaceNamespacedHorizontalPodAutoscalerStatus().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replaceNamespacedHorizontalPodAutoscalerStatus().'
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
            path: `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters['namespace']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1HorizontalPodAutoscalerToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HorizontalPodAutoscalerFromJSON(jsonValue));
    }

    /**
     * replace status of the specified HorizontalPodAutoscaler
     */
    async replaceNamespacedHorizontalPodAutoscalerStatus(requestParameters: AutoscalingV1ApiReplaceNamespacedHorizontalPodAutoscalerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1HorizontalPodAutoscaler> {
        const response = await this.replaceNamespacedHorizontalPodAutoscalerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
