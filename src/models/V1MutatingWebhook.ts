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
import type { AdmissionregistrationV1WebhookClientConfig } from './AdmissionregistrationV1WebhookClientConfig';
import {
    AdmissionregistrationV1WebhookClientConfigFromJSON,
    AdmissionregistrationV1WebhookClientConfigFromJSONTyped,
    AdmissionregistrationV1WebhookClientConfigToJSON,
} from './AdmissionregistrationV1WebhookClientConfig';
import type { V1RuleWithOperations } from './V1RuleWithOperations';
import {
    V1RuleWithOperationsFromJSON,
    V1RuleWithOperationsFromJSONTyped,
    V1RuleWithOperationsToJSON,
} from './V1RuleWithOperations';
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import type { V1MatchCondition } from './V1MatchCondition';
import {
    V1MatchConditionFromJSON,
    V1MatchConditionFromJSONTyped,
    V1MatchConditionToJSON,
} from './V1MatchCondition';

/**
 * MutatingWebhook describes an admission webhook and the resources and operations it applies to.
 * @export
 * @interface V1MutatingWebhook
 */
export interface V1MutatingWebhook {
    /**
     * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
     * @type {Array<string>}
     * @memberof V1MutatingWebhook
     */
    admissionReviewVersions: Array<string>;
    /**
     * 
     * @type {AdmissionregistrationV1WebhookClientConfig}
     * @memberof V1MutatingWebhook
     */
    clientConfig: AdmissionregistrationV1WebhookClientConfig;
    /**
     * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
     * @type {string}
     * @memberof V1MutatingWebhook
     */
    failurePolicy?: string;
    /**
     * MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.
     * 
     * The exact matching logic is (in order):
     *   1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.
     *   2. If ALL matchConditions evaluate to TRUE, the webhook is called.
     *   3. If any matchCondition evaluates to an error (but none are FALSE):
     *      - If failurePolicy=Fail, reject the request
     *      - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
     * @type {Array<V1MatchCondition>}
     * @memberof V1MutatingWebhook
     */
    matchConditions?: Array<V1MatchCondition>;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
     * 
     * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
     * 
     * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
     * 
     * Defaults to "Equivalent"
     * @type {string}
     * @memberof V1MutatingWebhook
     */
    matchPolicy?: string;
    /**
     * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
     * @type {string}
     * @memberof V1MutatingWebhook
     */
    name: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1MutatingWebhook
     */
    namespaceSelector?: V1LabelSelector;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1MutatingWebhook
     */
    objectSelector?: V1LabelSelector;
    /**
     * reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".
     * 
     * Never: the webhook will not be called more than once in a single admission evaluation.
     * 
     * IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.
     * 
     * Defaults to "Never".
     * @type {string}
     * @memberof V1MutatingWebhook
     */
    reinvocationPolicy?: string;
    /**
     * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
     * @type {Array<V1RuleWithOperations>}
     * @memberof V1MutatingWebhook
     */
    rules?: Array<V1RuleWithOperations>;
    /**
     * SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
     * @type {string}
     * @memberof V1MutatingWebhook
     */
    sideEffects: string;
    /**
     * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
     * @type {number}
     * @memberof V1MutatingWebhook
     */
    timeoutSeconds?: number;
}

/**
 * Check if a given object implements the V1MutatingWebhook interface.
 */
export function instanceOfV1MutatingWebhook(value: object): value is V1MutatingWebhook {
    if (!('admissionReviewVersions' in value) || value['admissionReviewVersions'] === undefined) return false;
    if (!('clientConfig' in value) || value['clientConfig'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('sideEffects' in value) || value['sideEffects'] === undefined) return false;
    return true;
}

export function V1MutatingWebhookFromJSON(json: any): V1MutatingWebhook {
    return V1MutatingWebhookFromJSONTyped(json, false);
}

export function V1MutatingWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MutatingWebhook {
    if (json == null) {
        return json;
    }
    return {
        
        'admissionReviewVersions': json['admissionReviewVersions'],
        'clientConfig': AdmissionregistrationV1WebhookClientConfigFromJSON(json['clientConfig']),
        'failurePolicy': json['failurePolicy'] == null ? undefined : json['failurePolicy'],
        'matchConditions': json['matchConditions'] == null ? undefined : ((json['matchConditions'] as Array<any>).map(V1MatchConditionFromJSON)),
        'matchPolicy': json['matchPolicy'] == null ? undefined : json['matchPolicy'],
        'name': json['name'],
        'namespaceSelector': json['namespaceSelector'] == null ? undefined : V1LabelSelectorFromJSON(json['namespaceSelector']),
        'objectSelector': json['objectSelector'] == null ? undefined : V1LabelSelectorFromJSON(json['objectSelector']),
        'reinvocationPolicy': json['reinvocationPolicy'] == null ? undefined : json['reinvocationPolicy'],
        'rules': json['rules'] == null ? undefined : ((json['rules'] as Array<any>).map(V1RuleWithOperationsFromJSON)),
        'sideEffects': json['sideEffects'],
        'timeoutSeconds': json['timeoutSeconds'] == null ? undefined : json['timeoutSeconds'],
    };
}

export function V1MutatingWebhookToJSON(value?: V1MutatingWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'admissionReviewVersions': value['admissionReviewVersions'],
        'clientConfig': AdmissionregistrationV1WebhookClientConfigToJSON(value['clientConfig']),
        'failurePolicy': value['failurePolicy'],
        'matchConditions': value['matchConditions'] == null ? undefined : ((value['matchConditions'] as Array<any>).map(V1MatchConditionToJSON)),
        'matchPolicy': value['matchPolicy'],
        'name': value['name'],
        'namespaceSelector': V1LabelSelectorToJSON(value['namespaceSelector']),
        'objectSelector': V1LabelSelectorToJSON(value['objectSelector']),
        'reinvocationPolicy': value['reinvocationPolicy'],
        'rules': value['rules'] == null ? undefined : ((value['rules'] as Array<any>).map(V1RuleWithOperationsToJSON)),
        'sideEffects': value['sideEffects'],
        'timeoutSeconds': value['timeoutSeconds'],
    };
}

