import { ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function generate15RandomString(): string;
export declare const transformObject: (inputObject: any) => {
    label: any;
    value: string;
}[];
export declare const transformLabel: (label: string) => string | null;
