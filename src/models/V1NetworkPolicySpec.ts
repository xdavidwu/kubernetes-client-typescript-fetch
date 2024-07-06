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
import type { V1NetworkPolicyEgressRule } from './V1NetworkPolicyEgressRule';
import {
    V1NetworkPolicyEgressRuleFromJSON,
    V1NetworkPolicyEgressRuleFromJSONTyped,
    V1NetworkPolicyEgressRuleToJSON,
} from './V1NetworkPolicyEgressRule';
import type { V1NetworkPolicyIngressRule } from './V1NetworkPolicyIngressRule';
import {
    V1NetworkPolicyIngressRuleFromJSON,
    V1NetworkPolicyIngressRuleFromJSONTyped,
    V1NetworkPolicyIngressRuleToJSON,
} from './V1NetworkPolicyIngressRule';
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 * @export
 * @interface V1NetworkPolicySpec
 */
export interface V1NetworkPolicySpec {
    /**
     * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
     * @type {Array<V1NetworkPolicyEgressRule>}
     * @memberof V1NetworkPolicySpec
     */
    egress?: Array<V1NetworkPolicyEgressRule>;
    /**
     * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
     * @type {Array<V1NetworkPolicyIngressRule>}
     * @memberof V1NetworkPolicySpec
     */
    ingress?: Array<V1NetworkPolicyIngressRule>;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1NetworkPolicySpec
     */
    podSelector: V1LabelSelector;
    /**
     * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
     * @type {Array<string>}
     * @memberof V1NetworkPolicySpec
     */
    policyTypes?: Array<string>;
}

/**
 * Check if a given object implements the V1NetworkPolicySpec interface.
 */
export function instanceOfV1NetworkPolicySpec(value: object): value is V1NetworkPolicySpec {
    if (!('podSelector' in value) || value['podSelector'] === undefined) return false;
    return true;
}

export function V1NetworkPolicySpecFromJSON(json: any): V1NetworkPolicySpec {
    return V1NetworkPolicySpecFromJSONTyped(json, false);
}

export function V1NetworkPolicySpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicySpec {
    if (json == null) {
        return json;
    }
    return {
        
        'egress': json['egress'] == null ? undefined : ((json['egress'] as Array<any>).map(V1NetworkPolicyEgressRuleFromJSON)),
        'ingress': json['ingress'] == null ? undefined : ((json['ingress'] as Array<any>).map(V1NetworkPolicyIngressRuleFromJSON)),
        'podSelector': V1LabelSelectorFromJSON(json['podSelector']),
        'policyTypes': json['policyTypes'] == null ? undefined : json['policyTypes'],
    };
}

export function V1NetworkPolicySpecToJSON(value?: V1NetworkPolicySpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'egress': value['egress'] == null ? undefined : ((value['egress'] as Array<any>).map(V1NetworkPolicyEgressRuleToJSON)),
        'ingress': value['ingress'] == null ? undefined : ((value['ingress'] as Array<any>).map(V1NetworkPolicyIngressRuleToJSON)),
        'podSelector': V1LabelSelectorToJSON(value['podSelector']),
        'policyTypes': value['policyTypes'],
    };
}

