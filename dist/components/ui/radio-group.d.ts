import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    radioIndicatorClassName?: string;
}
declare const RadioGroupItem: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
export { RadioGroup, RadioGroupItem };
