import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function generate15RandomString() {
    const length = 15;
    let result = '3'; // Start with '3'
    const characters = '0123456789';
    for (let i = 1; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
export const transformObject = (inputObject) => {
    return Object.keys(inputObject).map((key) => ({
        label: inputObject[key].address,
        value: key,
    }));
};
export const transformLabel = (label) => {
    if (!label)
        return '';
    else if (label === 'contact') {
        return 'Contact Number';
    }
    else if (label === 'imei') {
        return 'Serial/IMEI No.';
    }
    // else if (label === "purchase_date") {
    //   return "Date of Purchase";
    // }
    else if (label === 'sno' ||
        label === 'product' ||
        label === 'plan_type' ||
        label === 'purchase_date') {
        return null;
    }
    return label
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
//# sourceMappingURL=utils.js.map