/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  V1APIResourceList,
  V1APIService,
  V1APIServiceList,
  V1DeleteOptions,
  V1Status,
} from '../models/index';
import {
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1APIServiceFromJSON,
    V1APIServiceToJSON,
    V1APIServiceListFromJSON,
    V1APIServiceListToJSON,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models/index';

export interface ApiregistrationV1ApiCreateAPIServiceRequest {
    body: V1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface ApiregistrationV1ApiDeleteAPIServiceRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface ApiregistrationV1ApiDeleteCollectionAPIServiceRequest {
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

export interface ApiregistrationV1ApiListAPIServiceRequest {
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

export interface ApiregistrationV1ApiPatchAPIServiceRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface ApiregistrationV1ApiPatchAPIServiceStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface ApiregistrationV1ApiReadAPIServiceRequest {
    name: string;
    pretty?: string;
}

export interface ApiregistrationV1ApiReadAPIServiceStatusRequest {
    name: string;
    pretty?: string;
}

export interface ApiregistrationV1ApiReplaceAPIServiceRequest {
    name: string;
    body: V1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface ApiregistrationV1ApiReplaceAPIServiceStatusRequest {
    name: string;
    body: V1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

/**
 * 
 */
export class ApiregistrationV1Api extends runtime.BaseAPI {

    /**
     * create an APIService
     */
    async createAPIServiceRaw(requestParameters: ApiregistrationV1ApiCreateAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createAPIService().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1APIServiceToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * create an APIService
     */
    async createAPIService(requestParameters: ApiregistrationV1ApiCreateAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.createAPIServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete an APIService
     */
    async deleteAPIServiceRaw(requestParameters: ApiregistrationV1ApiDeleteAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteAPIService().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete an APIService
     */
    async deleteAPIService(requestParameters: ApiregistrationV1ApiDeleteAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Status> {
        const response = await this.deleteAPIServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of APIService
     */
    async deleteCollectionAPIServiceRaw(requestParameters: ApiregistrationV1ApiDeleteCollectionAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1Status>> {
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of APIService
     */
    async deleteCollectionAPIService(requestParameters: ApiregistrationV1ApiDeleteCollectionAPIServiceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1Status> {
        const response = await this.deleteCollectionAPIServiceRaw(requestParameters, initOverrides);
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
            path: `/apis/apiregistration.k8s.io/v1/`,
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
     * list or watch objects of kind APIService
     */
    async listAPIServiceRaw(requestParameters: ApiregistrationV1ApiListAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIServiceList>> {
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind APIService
     */
    async listAPIService(requestParameters: ApiregistrationV1ApiListAPIServiceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIServiceList> {
        const response = await this.listAPIServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified APIService
     */
    async patchAPIServiceRaw(requestParameters: ApiregistrationV1ApiPatchAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchAPIService().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchAPIService().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * partially update the specified APIService
     */
    async patchAPIService(requestParameters: ApiregistrationV1ApiPatchAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.patchAPIServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update status of the specified APIService
     */
    async patchAPIServiceStatusRaw(requestParameters: ApiregistrationV1ApiPatchAPIServiceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchAPIServiceStatus().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchAPIServiceStatus().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified APIService
     */
    async patchAPIServiceStatus(requestParameters: ApiregistrationV1ApiPatchAPIServiceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.patchAPIServiceStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified APIService
     */
    async readAPIServiceRaw(requestParameters: ApiregistrationV1ApiReadAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling readAPIService().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * read the specified APIService
     */
    async readAPIService(requestParameters: ApiregistrationV1ApiReadAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.readAPIServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read status of the specified APIService
     */
    async readAPIServiceStatusRaw(requestParameters: ApiregistrationV1ApiReadAPIServiceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling readAPIServiceStatus().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * read status of the specified APIService
     */
    async readAPIServiceStatus(requestParameters: ApiregistrationV1ApiReadAPIServiceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.readAPIServiceStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified APIService
     */
    async replaceAPIServiceRaw(requestParameters: ApiregistrationV1ApiReplaceAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling replaceAPIService().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replaceAPIService().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1APIServiceToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * replace the specified APIService
     */
    async replaceAPIService(requestParameters: ApiregistrationV1ApiReplaceAPIServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.replaceAPIServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace status of the specified APIService
     */
    async replaceAPIServiceStatusRaw(requestParameters: ApiregistrationV1ApiReplaceAPIServiceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIService>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling replaceAPIServiceStatus().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replaceAPIServiceStatus().'
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
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1APIServiceToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIServiceFromJSON(jsonValue));
    }

    /**
     * replace status of the specified APIService
     */
    async replaceAPIServiceStatus(requestParameters: ApiregistrationV1ApiReplaceAPIServiceStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIService> {
        const response = await this.replaceAPIServiceStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
