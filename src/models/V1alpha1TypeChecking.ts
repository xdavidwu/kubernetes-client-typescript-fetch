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
import type { V1alpha1ExpressionWarning } from './V1alpha1ExpressionWarning';
import {
    V1alpha1ExpressionWarningFromJSON,
    V1alpha1ExpressionWarningFromJSONTyped,
    V1alpha1ExpressionWarningToJSON,
} from './V1alpha1ExpressionWarning';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 * @export
 * @interface V1alpha1TypeChecking
 */
export interface V1alpha1TypeChecking {
    /**
     * The type checking warnings for each expression.
     * @type {Array<V1alpha1ExpressionWarning>}
     * @memberof V1alpha1TypeChecking
     */
    expressionWarnings?: Array<V1alpha1ExpressionWarning>;
}

/**
 * Check if a given object implements the V1alpha1TypeChecking interface.
 */
export function instanceOfV1alpha1TypeChecking(value: object): value is V1alpha1TypeChecking {
    return true;
}

export function V1alpha1TypeCheckingFromJSON(json: any): V1alpha1TypeChecking {
    return V1alpha1TypeCheckingFromJSONTyped(json, false);
}

export function V1alpha1TypeCheckingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1TypeChecking {
    if (json == null) {
        return json;
    }
    return {
        
        'expressionWarnings': json['expressionWarnings'] == null ? undefined : ((json['expressionWarnings'] as Array<any>).map(V1alpha1ExpressionWarningFromJSON)),
    };
}

export function V1alpha1TypeCheckingToJSON(value?: V1alpha1TypeChecking | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expressionWarnings': value['expressionWarnings'] == null ? undefined : ((value['expressionWarnings'] as Array<any>).map(V1alpha1ExpressionWarningToJSON)),
    };
}

