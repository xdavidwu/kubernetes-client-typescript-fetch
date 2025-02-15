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

/**
 * 
 */
export class WellKnownApi extends runtime.BaseAPI {

    /**
     * get service account issuer OpenID configuration, also known as the \'OIDC discovery doc\'
     */
    async getServiceAccountIssuerOpenIDConfigurationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = await this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/.well-known/openid-configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * get service account issuer OpenID configuration, also known as the \'OIDC discovery doc\'
     */
    async getServiceAccountIssuerOpenIDConfiguration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getServiceAccountIssuerOpenIDConfigurationRaw(initOverrides);
        return await response.value();
    }

}
