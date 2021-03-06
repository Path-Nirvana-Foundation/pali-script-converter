export const ScriptIndex: {
    [x: string]: number;
};
export const sinh_conso_range: "ක-ෆ";
export const thai_conso_range: "ก-ฮ";
export const lao_conso_range: "ກ-ຮ";
export const mymr_conso_range: "က-ဠ";
export class TextProcessor {
    static basicConvertFromSinh(input: any, script: any): any;
    static basicConvertToSinh(input: any, script: any): any;
    static beautify(input: any, script: any, rendType?: string): any;
    static convertFromSinh(input: any, script: any): any;
    static convertToSinh(input: any, script: any): any;
    static convertAnyToSinh(input: any): string;
}
/**
 * Copyright Path Nirvana 2018
 * The code and character mapping defined in this file can not be used for any commercial purposes.
 * Permission from the auther is required for all other purposes.
 */
export const Script: Readonly<{
    SI: string;
    HI: string;
    RO: string;
    THAI: string;
    LAOS: string;
    MY: string;
    KM: string;
    BENG: string;
    GURM: string;
    THAM: string;
    GUJA: string;
    TELU: string;
    KANN: string;
    MALA: string;
    BRAH: string;
    TIBT: string;
    CYRL: string;
}>;
export const PaliScriptInfo: Map<string, (string | (number | number[])[] | {
    f: string;
    locale: string;
    localeName: string;
})[] | (string | number[][] | {
    f: string;
    locale: string;
    localeName: string;
    g: string;
})[] | (string | number[][] | {
    locale: string;
    localeName: string;
    g: string;
})[] | (string | number[][] | {
    locale: string;
    localeName: string;
    c: string;
    g: string;
})[] | (string | number[][] | {
    f: string;
    c: string;
    locale: string;
    localeName: string;
    g: string;
})[]>;
export function getScriptForCode(charCode: any): any;
