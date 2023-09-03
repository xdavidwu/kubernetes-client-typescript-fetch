/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.28.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface LogsApiLogFileHandlerRequest {
    logpath: string;
}

/**
 * 
 */
export class LogsApi extends runtime.BaseAPI {

    /**
     */
    async logFileHandlerRaw(requestParameters: LogsApiLogFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.logpath === null || requestParameters.logpath === undefined) {
            throw new runtime.RequiredError('logpath','Required parameter requestParameters.logpath was null or undefined when calling logFileHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/logs/{logpath}`.replace(`{${"logpath"}}`, encodeURIComponent(String(requestParameters.logpath))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async logFileHandler(requestParameters: LogsApiLogFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logFileHandlerRaw(requestParameters, initOverrides);
    }

    /**
     */
    async logFileListHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/logs/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async logFileListHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logFileListHandlerRaw(initOverrides);
    }

}
