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
  V1beta1SelfSubjectReview,
} from '../models/index';
import {
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1beta1SelfSubjectReviewFromJSON,
    V1beta1SelfSubjectReviewToJSON,
} from '../models/index';

export interface AuthenticationV1beta1ApiCreateSelfSubjectReviewRequest {
    body: V1beta1SelfSubjectReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}

/**
 * 
 */
export class AuthenticationV1beta1Api extends runtime.BaseAPI {

    /**
     * create a SelfSubjectReview
     */
    async createSelfSubjectReviewRaw(requestParameters: AuthenticationV1beta1ApiCreateSelfSubjectReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1beta1SelfSubjectReview>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createSelfSubjectReview().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['dryRun'] != null) {
            queryParameters['dryRun'] = requestParameters['dryRun'];
        }

        if (requestParameters['fieldManager'] != null) {
            queryParameters['fieldManager'] = requestParameters['fieldManager'];
        }

        if (requestParameters['fieldValidation'] != null) {
            queryParameters['fieldValidation'] = requestParameters['fieldValidation'];
        }

        if (requestParameters['pretty'] != null) {
            queryParameters['pretty'] = requestParameters['pretty'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authentication.k8s.io/v1beta1/selfsubjectreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1SelfSubjectReviewToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1SelfSubjectReviewFromJSON(jsonValue));
    }

    /**
     * create a SelfSubjectReview
     */
    async createSelfSubjectReview(requestParameters: AuthenticationV1beta1ApiCreateSelfSubjectReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1beta1SelfSubjectReview> {
        const response = await this.createSelfSubjectReviewRaw(requestParameters, initOverrides);
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
            path: `/apis/authentication.k8s.io/v1beta1/`,
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

}
