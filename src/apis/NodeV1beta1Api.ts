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


import * as runtime from '../runtime';
import {
    V1APIResourceList,
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
    V1beta1RuntimeClass,
    V1beta1RuntimeClassFromJSON,
    V1beta1RuntimeClassToJSON,
    V1beta1RuntimeClassList,
    V1beta1RuntimeClassListFromJSON,
    V1beta1RuntimeClassListToJSON,
} from '../models';

export interface NodeV1beta1ApiCreateRuntimeClassRequest {
    body: V1beta1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface NodeV1beta1ApiDeleteCollectionRuntimeClassRequest {
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
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}

export interface NodeV1beta1ApiDeleteRuntimeClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface NodeV1beta1ApiListRuntimeClassRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface NodeV1beta1ApiPatchRuntimeClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface NodeV1beta1ApiReadRuntimeClassRequest {
    name: string;
    pretty?: string;
}

export interface NodeV1beta1ApiReplaceRuntimeClassRequest {
    name: string;
    body: V1beta1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

/**
 * 
 */
export class NodeV1beta1Api extends runtime.BaseAPI {

    /**
     * create a RuntimeClass
     */
    async createRuntimeClassRaw(requestParameters: NodeV1beta1ApiCreateRuntimeClassRequest): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createRuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1RuntimeClassToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * create a RuntimeClass
     */
    async createRuntimeClass(requestParameters: NodeV1beta1ApiCreateRuntimeClassRequest): Promise<V1beta1RuntimeClass> {
        const response = await this.createRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteCollectionRuntimeClassRaw(requestParameters: NodeV1beta1ApiDeleteCollectionRuntimeClassRequest): Promise<runtime.ApiResponse<V1Status>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteCollectionRuntimeClass(requestParameters: NodeV1beta1ApiDeleteCollectionRuntimeClassRequest): Promise<V1Status> {
        const response = await this.deleteCollectionRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete a RuntimeClass
     */
    async deleteRuntimeClassRaw(requestParameters: NodeV1beta1ApiDeleteRuntimeClassRequest): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteRuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a RuntimeClass
     */
    async deleteRuntimeClass(requestParameters: NodeV1beta1ApiDeleteRuntimeClassRequest): Promise<V1Status> {
        const response = await this.deleteRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAPIResources(): Promise<V1APIResourceList> {
        const response = await this.getAPIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listRuntimeClassRaw(requestParameters: NodeV1beta1ApiListRuntimeClassRequest): Promise<runtime.ApiResponse<V1beta1RuntimeClassList>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1RuntimeClassListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listRuntimeClass(requestParameters: NodeV1beta1ApiListRuntimeClassRequest): Promise<V1beta1RuntimeClassList> {
        const response = await this.listRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchRuntimeClassRaw(requestParameters: NodeV1beta1ApiPatchRuntimeClassRequest): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchRuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchRuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchRuntimeClass(requestParameters: NodeV1beta1ApiPatchRuntimeClassRequest): Promise<V1beta1RuntimeClass> {
        const response = await this.patchRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified RuntimeClass
     */
    async readRuntimeClassRaw(requestParameters: NodeV1beta1ApiReadRuntimeClassRequest): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readRuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * read the specified RuntimeClass
     */
    async readRuntimeClass(requestParameters: NodeV1beta1ApiReadRuntimeClassRequest): Promise<V1beta1RuntimeClass> {
        const response = await this.readRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceRuntimeClassRaw(requestParameters: NodeV1beta1ApiReplaceRuntimeClassRequest): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceRuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceRuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1RuntimeClassToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceRuntimeClass(requestParameters: NodeV1beta1ApiReplaceRuntimeClassRequest): Promise<V1beta1RuntimeClass> {
        const response = await this.replaceRuntimeClassRaw(requestParameters);
        return await response.value();
    }

}
