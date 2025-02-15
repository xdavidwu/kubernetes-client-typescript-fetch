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
import type { V1DeploymentStrategy } from './V1DeploymentStrategy';
import {
    V1DeploymentStrategyFromJSON,
    V1DeploymentStrategyFromJSONTyped,
    V1DeploymentStrategyToJSON,
} from './V1DeploymentStrategy';
import type { V1PodTemplateSpec } from './V1PodTemplateSpec';
import {
    V1PodTemplateSpecFromJSON,
    V1PodTemplateSpecFromJSONTyped,
    V1PodTemplateSpecToJSON,
} from './V1PodTemplateSpec';
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 * @export
 * @interface V1DeploymentSpec
 */
export interface V1DeploymentSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    minReadySeconds?: number;
    /**
     * Indicates that the deployment is paused.
     * @type {boolean}
     * @memberof V1DeploymentSpec
     */
    paused?: boolean;
    /**
     * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    progressDeadlineSeconds?: number;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    replicas?: number;
    /**
     * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1DeploymentSpec
     */
    selector: V1LabelSelector;
    /**
     * 
     * @type {V1DeploymentStrategy}
     * @memberof V1DeploymentSpec
     */
    strategy?: V1DeploymentStrategy;
    /**
     * 
     * @type {V1PodTemplateSpec}
     * @memberof V1DeploymentSpec
     */
    template: V1PodTemplateSpec;
}

/**
 * Check if a given object implements the V1DeploymentSpec interface.
 */
export function instanceOfV1DeploymentSpec(value: object): value is V1DeploymentSpec {
    if (!('selector' in value) || value['selector'] === undefined) return false;
    if (!('template' in value) || value['template'] === undefined) return false;
    return true;
}

export function V1DeploymentSpecFromJSON(json: any): V1DeploymentSpec {
    return V1DeploymentSpecFromJSONTyped(json, false);
}

export function V1DeploymentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'minReadySeconds': json['minReadySeconds'] == null ? undefined : json['minReadySeconds'],
        'paused': json['paused'] == null ? undefined : json['paused'],
        'progressDeadlineSeconds': json['progressDeadlineSeconds'] == null ? undefined : json['progressDeadlineSeconds'],
        'replicas': json['replicas'] == null ? undefined : json['replicas'],
        'revisionHistoryLimit': json['revisionHistoryLimit'] == null ? undefined : json['revisionHistoryLimit'],
        'selector': V1LabelSelectorFromJSON(json['selector']),
        'strategy': json['strategy'] == null ? undefined : V1DeploymentStrategyFromJSON(json['strategy']),
        'template': V1PodTemplateSpecFromJSON(json['template']),
    };
}

export function V1DeploymentSpecToJSON(value?: V1DeploymentSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'minReadySeconds': value['minReadySeconds'],
        'paused': value['paused'],
        'progressDeadlineSeconds': value['progressDeadlineSeconds'],
        'replicas': value['replicas'],
        'revisionHistoryLimit': value['revisionHistoryLimit'],
        'selector': V1LabelSelectorToJSON(value['selector']),
        'strategy': V1DeploymentStrategyToJSON(value['strategy']),
        'template': V1PodTemplateSpecToJSON(value['template']),
    };
}

