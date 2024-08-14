import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
// import { DataTable } from 'next-table'
const App = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const [filterField, setFilterField] = useState('');
    const [filterInput, setFilterinput] = useState('');
    return (_jsx("div", { children: _jsx("h1", { children: "Hello, React with TypeScript!" }) }));
};
export default App;
//# sourceMappingURL=App.js.map