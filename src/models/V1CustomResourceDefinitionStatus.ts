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

import { exists, mapValues } from '../runtime';
import type { V1CustomResourceDefinitionCondition } from './V1CustomResourceDefinitionCondition';
import {
    V1CustomResourceDefinitionConditionFromJSON,
    V1CustomResourceDefinitionConditionFromJSONTyped,
    V1CustomResourceDefinitionConditionToJSON,
} from './V1CustomResourceDefinitionCondition';
import type { V1CustomResourceDefinitionNames } from './V1CustomResourceDefinitionNames';
import {
    V1CustomResourceDefinitionNamesFromJSON,
    V1CustomResourceDefinitionNamesFromJSONTyped,
    V1CustomResourceDefinitionNamesToJSON,
} from './V1CustomResourceDefinitionNames';

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 * @export
 * @interface V1CustomResourceDefinitionStatus
 */
export interface V1CustomResourceDefinitionStatus {
    /**
     * 
     * @type {V1CustomResourceDefinitionNames}
     * @memberof V1CustomResourceDefinitionStatus
     */
    acceptedNames?: V1CustomResourceDefinitionNames;
    /**
     * conditions indicate state for particular aspects of a CustomResourceDefinition
     * @type {Array<V1CustomResourceDefinitionCondition>}
     * @memberof V1CustomResourceDefinitionStatus
     */
    conditions?: Array<V1CustomResourceDefinitionCondition>;
    /**
     * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
     * @type {Array<string>}
     * @memberof V1CustomResourceDefinitionStatus
     */
    storedVersions?: Array<string>;
}

/**
 * Check if a given object implements the V1CustomResourceDefinitionStatus interface.
 */
export function instanceOfV1CustomResourceDefinitionStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CustomResourceDefinitionStatusFromJSON(json: any): V1CustomResourceDefinitionStatus {
    return V1CustomResourceDefinitionStatusFromJSONTyped(json, false);
}

export function V1CustomResourceDefinitionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceDefinitionStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptedNames': !exists(json, 'acceptedNames') ? undefined : V1CustomResourceDefinitionNamesFromJSON(json['acceptedNames']),
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1CustomResourceDefinitionConditionFromJSON)),
        'storedVersions': !exists(json, 'storedVersions') ? undefined : json['storedVersions'],
    };
}

export function V1CustomResourceDefinitionStatusToJSON(value?: V1CustomResourceDefinitionStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptedNames': V1CustomResourceDefinitionNamesToJSON(value.acceptedNames),
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1CustomResourceDefinitionConditionToJSON)),
        'storedVersions': value.storedVersions,
    };
}

