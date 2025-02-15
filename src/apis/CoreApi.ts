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
  V1APIVersions,
} from '../models/index';
import {
    V1APIVersionsFromJSON,
    V1APIVersionsToJSON,
} from '../models/index';

/**
 * 
 */
export class CoreApi extends runtime.BaseAPI {

    /**
     * get available API versions
     */
    async getAPIVersionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIVersions>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/api/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIVersionsFromJSON(jsonValue));
    }

    /**
     * get available API versions
     */
    async getAPIVersions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIVersions> {
        const response = await this.getAPIVersionsRaw(initOverrides);
        return await response.value();
    }

}
