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

import { mapValues } from '../runtime';
/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 * @export
 * @interface V1WindowsSecurityContextOptions
 */
export interface V1WindowsSecurityContextOptions {
    /**
     * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
     * @type {string}
     * @memberof V1WindowsSecurityContextOptions
     */
    gmsaCredentialSpec?: string;
    /**
     * GMSACredentialSpecName is the name of the GMSA credential spec to use.
     * @type {string}
     * @memberof V1WindowsSecurityContextOptions
     */
    gmsaCredentialSpecName?: string;
    /**
     * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
     * @type {boolean}
     * @memberof V1WindowsSecurityContextOptions
     */
    hostProcess?: boolean;
    /**
     * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {string}
     * @memberof V1WindowsSecurityContextOptions
     */
    runAsUserName?: string;
}

/**
 * Check if a given object implements the V1WindowsSecurityContextOptions interface.
 */
export function instanceOfV1WindowsSecurityContextOptions(value: object): value is V1WindowsSecurityContextOptions {
    return true;
}

export function V1WindowsSecurityContextOptionsFromJSON(json: any): V1WindowsSecurityContextOptions {
    return V1WindowsSecurityContextOptionsFromJSONTyped(json, false);
}

export function V1WindowsSecurityContextOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1WindowsSecurityContextOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'gmsaCredentialSpec': json['gmsaCredentialSpec'] == null ? undefined : json['gmsaCredentialSpec'],
        'gmsaCredentialSpecName': json['gmsaCredentialSpecName'] == null ? undefined : json['gmsaCredentialSpecName'],
        'hostProcess': json['hostProcess'] == null ? undefined : json['hostProcess'],
        'runAsUserName': json['runAsUserName'] == null ? undefined : json['runAsUserName'],
    };
}

export function V1WindowsSecurityContextOptionsToJSON(value?: V1WindowsSecurityContextOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'gmsaCredentialSpec': value['gmsaCredentialSpec'],
        'gmsaCredentialSpecName': value['gmsaCredentialSpecName'],
        'hostProcess': value['hostProcess'],
        'runAsUserName': value['runAsUserName'],
    };
}

