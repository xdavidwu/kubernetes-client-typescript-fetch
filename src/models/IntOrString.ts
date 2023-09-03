export type IntOrString = number | string;

export function IntOrStringFromJSON(json: any): IntOrString {
    return IntOrStringFromJSONTyped(json, false);
}

export function IntOrStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntOrString {
    return json;
}

export function IntOrStringToJSON(value?: IntOrString | null): any {
    return value;
}
