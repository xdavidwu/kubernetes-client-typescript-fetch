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
  V1APIGroup,
} from '../models/index';
import {
    V1APIGroupFromJSON,
    V1APIGroupToJSON,
} from '../models/index';

/**
 * 
 */
export class ResourceApi extends runtime.BaseAPI {

    /**
     * get information of a group
     */
    async getAPIGroupRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1APIGroup>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/resource.k8s.io/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIGroupFromJSON(jsonValue));
    }

    /**
     * get information of a group
     */
    async getAPIGroup(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1APIGroup> {
        const response = await this.getAPIGroupRaw(initOverrides);
        return await response.value();
    }

}
