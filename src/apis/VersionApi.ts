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
  VersionInfo,
} from '../models/index';
import {
    VersionInfoFromJSON,
    VersionInfoToJSON,
} from '../models/index';

/**
 * 
 */
export class VersionApi extends runtime.BaseAPI {

    /**
     * get the code version
     */
    async getCodeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/version/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionInfoFromJSON(jsonValue));
    }

    /**
     * get the code version
     */
    async getCode(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionInfo> {
        const response = await this.getCodeRaw(initOverrides);
        return await response.value();
    }

}
