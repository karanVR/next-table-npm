import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
const Spinner = ({ className, size = 'md', ...props }) => {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-4',
        lg: 'w-12 h-12 border-6',
    };
    return (_jsx("div", { className: cn('inline-block border-current border-t-transparent rounded-full animate-spin text-[#297FFF]', sizes[size], className), ...props }));
};
export default Spinner;
//# sourceMappingURL=Spinner.js.map