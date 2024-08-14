import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DataTable } from './Table';
const App = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const [filterField, setFilterField] = useState('');
    const [filterInput, setFilterinput] = useState('');
    return (_jsxs("div", { children: [_jsx("h1", { children: "Hello, React with TypeScript!" }), _jsx(DataTable, { columns: [], data: [], totalCount: 20, isDataLoading: false, showFilter: true, pagination: pagination, setPagination: setPagination, filterField: filterField, setFilterField: setFilterField, filterInput: filterField, setFilterinput: setFilterinput, showDownloadButton: true })] }));
};
export default App;
//# sourceMappingURL=App.js.map