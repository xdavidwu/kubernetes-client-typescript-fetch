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

import { mapValues } from '../runtime';
import type { V1ExpressionWarning } from './V1ExpressionWarning';
import {
    V1ExpressionWarningFromJSON,
    V1ExpressionWarningFromJSONTyped,
    V1ExpressionWarningToJSON,
} from './V1ExpressionWarning';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 * @export
 * @interface V1TypeChecking
 */
export interface V1TypeChecking {
    /**
     * The type checking warnings for each expression.
     * @type {Array<V1ExpressionWarning>}
     * @memberof V1TypeChecking
     */
    expressionWarnings?: Array<V1ExpressionWarning>;
}

/**
 * Check if a given object implements the V1TypeChecking interface.
 */
export function instanceOfV1TypeChecking(value: object): value is V1TypeChecking {
    return true;
}

export function V1TypeCheckingFromJSON(json: any): V1TypeChecking {
    return V1TypeCheckingFromJSONTyped(json, false);
}

export function V1TypeCheckingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TypeChecking {
    if (json == null) {
        return json;
    }
    return {
        
        'expressionWarnings': json['expressionWarnings'] == null ? undefined : ((json['expressionWarnings'] as Array<any>).map(V1ExpressionWarningFromJSON)),
    };
}

export function V1TypeCheckingToJSON(value?: V1TypeChecking | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expressionWarnings': value['expressionWarnings'] == null ? undefined : ((value['expressionWarnings'] as Array<any>).map(V1ExpressionWarningToJSON)),
    };
}

