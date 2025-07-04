(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_748abd6e._.js", {

"[project]/src/app/components/staff-table/Stafftable.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StaffTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-data-table-component/dist/index.cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function StaffTable({ role = "admin", // Data props
technicians = [], loading = false, // Handler props
onStatusChange = async (ids, status)=>console.log("Status change:", ids, status), onView = async (id)=>console.log("View staff:", id), onEdit = async (id)=>console.log("Edit staff:", id), onRefresh = ()=>console.log("Refreshing data"), // Optional customization props
addStaffLink = "/admin/add-technical-staff", departmentOptions = [
    "Engineering",
    "Marketing",
    "Sales",
    "HR",
    "Finance",
    "Customer Support"
], availabilityOptions = [
    "Available",
    "Not available",
    "Desactivated"
] }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredData, setFilteredData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterDepartment, setFilterDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterAvailability, setFilterAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [firstVisibleRowId, setFirstVisibleRowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tableHeight, setTableHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("calc(100vh - 180px)");
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time truthy", 1) ? window.innerWidth : ("TURBOPACK unreachable", undefined));
    // Dropdown states for filter menus
    const [showDepartmentDropdown, setShowDepartmentDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAvailabilityDropdown, setShowAvailabilityDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs for filter dropdowns
    const departmentDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const availabilityDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const departmentButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const availabilityButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Status modal state and ref
    const [statusModalOpen, setStatusModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const statusButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize window width
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffTable.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const handleResize = {
                    "StaffTable.useEffect.handleResize": ()=>{
                        setWindowWidth(window.innerWidth);
                    }
                }["StaffTable.useEffect.handleResize"];
                window.addEventListener("resize", handleResize);
                handleResize();
                return ({
                    "StaffTable.useEffect": ()=>window.removeEventListener("resize", handleResize)
                })["StaffTable.useEffect"];
            }
        }
    }["StaffTable.useEffect"], []);
    // Update table height when filters are shown/hidden on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffTable.useEffect": ()=>{
            if (windowWidth < 768) {
                const filterHeight = showFilters ? 150 : 0; // Approximate height of filter section when expanded
                setTableHeight(`calc(100vh - 180px - ${filterHeight}px)`);
            } else {
                setTableHeight("calc(100vh - 180px)");
            }
        }
    }["StaffTable.useEffect"], [
        showFilters,
        windowWidth
    ]);
    // Initialize data from props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffTable.useEffect": ()=>{
            setData(technicians);
            setFilteredData(technicians);
        }
    }["StaffTable.useEffect"], [
        technicians
    ]);
    // Update the firstVisibleRowId whenever filteredData changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffTable.useEffect": ()=>{
            if (filteredData && filteredData.length > 0) {
                setFirstVisibleRowId(filteredData[0].id);
            } else {
                setFirstVisibleRowId(null);
            }
        }
    }["StaffTable.useEffect"], [
        filteredData
    ]);
    // Apply filters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffTable.useEffect": ()=>{
            let result = data;
            // Filter by department (single selection)
            if (filterDepartment) {
                result = result.filter({
                    "StaffTable.useEffect": (user)=>user.department === filterDepartment
                }["StaffTable.useEffect"]);
            }
            // Filter by availability (single selection)
            if (filterAvailability) {
                result = result.filter({
                    "StaffTable.useEffect": (user)=>user.availability === filterAvailability
                }["StaffTable.useEffect"]);
            }
            if (search) {
                result = result.filter({
                    "StaffTable.useEffect": (user)=>Object.values(user).some({
                            "StaffTable.useEffect": (value)=>value !== null && value.toString().toLowerCase().includes(search.toLowerCase())
                        }["StaffTable.useEffect"])
                }["StaffTable.useEffect"]);
            }
            setFilteredData(result);
        }
    }["StaffTable.useEffect"], [
        search,
        filterDepartment,
        filterAvailability,
        data
    ]);
    // Close dropdowns when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffTable.useEffect": ()=>{
            const handleClickOutside = {
                "StaffTable.useEffect.handleClickOutside": (event)=>{
                    // Close menu dropdown
                    if (menuOpen && !event.target.closest(".menu-dropdown")) {
                        setMenuOpen(null);
                    }
                    // Close status modal
                    if (statusModalOpen && !event.target.closest(".status-modal")) {
                        setStatusModalOpen(false);
                    }
                    // Close department dropdown
                    if (showDepartmentDropdown && !departmentDropdownRef.current?.contains(event.target) && !departmentButtonRef.current?.contains(event.target)) {
                        setShowDepartmentDropdown(false);
                    }
                    // Close availability dropdown
                    if (showAvailabilityDropdown && !availabilityDropdownRef.current?.contains(event.target) && !availabilityButtonRef.current?.contains(event.target)) {
                        setShowAvailabilityDropdown(false);
                    }
                }
            }["StaffTable.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "StaffTable.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["StaffTable.useEffect"];
        }
    }["StaffTable.useEffect"], [
        menuOpen,
        statusModalOpen,
        showDepartmentDropdown,
        showAvailabilityDropdown
    ]);
    // Row selection handling
    const handleRowSelect = (id)=>{
        setSelectedRows((prevSelected)=>prevSelected.includes(id) ? prevSelected.filter((rowId)=>rowId !== id) : [
                ...prevSelected,
                id
            ]);
    };
    const handleSelectAll = ()=>{
        setSelectedRows(selectedRows.length === filteredData.length ? [] : filteredData.map((row)=>row.id));
    };
    // Clear selection of rows
    const clearSelection = ()=>{
        setSelectedRows([]);
    };
    // Toggle menu
    const toggleMenu = (id, e)=>{
        e.stopPropagation();
        if (menuOpen === id) {
            setMenuOpen(null);
            return;
        }
        const button = menuButtonRefs.current[id];
        if (button) {
            const rect = button.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const spaceBelow = viewportHeight - rect.bottom;
            const spaceRight = viewportWidth - rect.right;
            const dropdownWidth = 240; // Width of the dropdown menu
            // Position the dropdown based on available space
            if (windowWidth < 768) {
                // On mobile screens, position menu below or above the button
                if (spaceBelow < 150) {
                    // Not enough space below, position above
                    setMenuPosition({
                        top: rect.top - 120,
                        left: Math.max(10, rect.left - dropdownWidth / 2 + 15)
                    });
                } else {
                    // Enough space below, position below
                    setMenuPosition({
                        top: rect.bottom + 5,
                        left: Math.max(10, rect.left - dropdownWidth / 2 + 15)
                    });
                }
            } else {
                // On desktop screens, position to the left or right
                if (spaceRight < dropdownWidth + 20) {
                    // Not enough space on right, position to left
                    setMenuPosition({
                        top: rect.top,
                        left: rect.left - dropdownWidth - 10
                    });
                } else {
                    // Enough space on right, position to right
                    setMenuPosition({
                        top: rect.top,
                        left: rect.right + 10
                    });
                }
            }
        }
        setMenuOpen(id);
    };
    // Get status dot color based on availability
    const getStatusDotColor = (status)=>{
        switch(status){
            case "Available":
                return "bg-green-500";
            case "Not available":
                return "bg-red-500";
            case "Desactivated":
                return "bg-gray-500";
            default:
                return "bg-gray-300";
        }
    };
    // Handle account activation/deactivation
    const handleAccountStatus = async (status)=>{
        try {
            await onStatusChange(selectedRows, status);
            setData((prevData)=>prevData.map((user)=>{
                    if (selectedRows.includes(user.id)) {
                        return {
                            ...user,
                            availability: status
                        };
                    }
                    return user;
                }));
            setStatusModalOpen(false);
            setSelectedRows([]);
        } catch (error) {
            console.error("Error changing status:", error);
            alert("Failed to update account status");
        }
    };
    // Toggle department filter - single selection
    const toggleDepartmentFilter = (department)=>{
        setFilterDepartment((prev)=>prev === department ? null : department);
        setShowDepartmentDropdown(false);
    };
    // Toggle availability filter - single selection
    const toggleAvailabilityFilter = (availability)=>{
        setFilterAvailability((prev)=>prev === availability ? null : availability);
        setShowAvailabilityDropdown(false);
    };
    // Clear all filters
    const clearAllFilters = ()=>{
        setFilterDepartment(null);
        setFilterAvailability(null);
        setShowDepartmentDropdown(false);
        setShowAvailabilityDropdown(false);
    };
    // Dropdown menu component
    const DropdownMenu = ({ row })=>{
        // Actions common to both roles
        const handleViewClick = (e)=>{
            e.stopPropagation();
            onView(row.id);
        };
        // Technician-only menu
        if (role === "technician") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bg-white shadow-2xl rounded-md z-50 border border-gray-200 w-48 menu-dropdown font-outfit",
                style: {
                    top: windowWidth < 768 ? `${menuPosition.top}px` : `${menuPosition.top}px`,
                    left: windowWidth < 768 ? `${menuPosition.left}px` : `${menuPosition.left}px`,
                    transform: windowWidth < 768 ? 'translateX(-50%)' : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleViewClick,
                    className: "w-full text-left px-4 py-3 hover:bg-gray-100 text-sm font-outfit",
                    children: "Show Details"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                lineNumber: 292,
                columnNumber: 9
            }, this), document.body);
        }
        // Admin menu
        const handleEditClick = (e)=>{
            e.stopPropagation();
            onEdit(row.id);
        };
        const handleStatusChange = async (e)=>{
            e.stopPropagation();
            const newStatus = row.availability === "Desactivated" ? "Available" : "Desactivated";
            try {
                await onStatusChange([
                    row.id
                ], newStatus);
                setData((prevData)=>prevData.map((user)=>{
                        if (user.id === row.id) {
                            return {
                                ...user,
                                availability: newStatus
                            };
                        }
                        return user;
                    }));
                setMenuOpen(null);
            } catch (error) {
                console.error("Error changing status:", error);
                alert("Failed to update account status");
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white shadow-2xl rounded-md z-50 border border-gray-200 w-48 menu-dropdown font-outfit",
            style: {
                top: windowWidth < 768 ? `${menuPosition.top}px` : `${menuPosition.top}px`,
                left: windowWidth < 768 ? `${menuPosition.left}px` : `${menuPosition.left}px`,
                transform: windowWidth < 768 ? 'translateX(-50%)' : 'none'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleViewClick,
                    className: "w-full text-left px-4 py-3 hover:bg-gray-100 text-sm font-outfit",
                    children: "Show Details"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleEditClick,
                    className: "w-full text-left px-4 py-3 hover:bg-gray-100 text-sm font-outfit",
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100 text-sm font-outfit",
                    onClick: handleStatusChange,
                    children: row.availability === "Desactivated" ? "Activate" : "Deactivate"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
            lineNumber: 338,
            columnNumber: 7
        }, this), document.body);
    };
    // Column definitions based on screen size
    const getResponsiveColumns = ()=>{
        // Define baseColumns only once
        const baseColumns = [
            {
                name: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    onChange: handleSelectAll,
                    checked: selectedRows.length === filteredData.length && filteredData.length > 0,
                    "aria-label": "Select all rows",
                    className: "font-outfit"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                    lineNumber: 377,
                    columnNumber: 11
                }, this),
                cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: selectedRows.includes(row.id),
                        onChange: ()=>handleRowSelect(row.id),
                        "aria-label": `Select ${row.firstName} ${row.lastName}`,
                        className: "font-outfit"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this),
                width: "50px",
                sortable: false
            },
            {
                name: "Profile",
                selector: (row)=>row.profile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: row.profile,
                        alt: `${row.firstName} ${row.lastName}`,
                        className: "w-5 h-5 md:w-10 md:h-10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 404,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-5 h-5 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 text-xs font-outfit",
                            children: "N/A"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 411,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 410,
                        columnNumber: 13
                    }, this),
                width: "70px",
                sortable: false
            },
            {
                name: "Availability",
                selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center font-outfit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-3 h-3 rounded-full mr-2 ${getStatusDotColor(row.availability)}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: row.availability
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this),
                sortable: true,
                width: "120px"
            }
        ];
        // For extra small screens (mobile)
        if (windowWidth < 640) {
            return [
                {
                    name: '',
                    cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full py-2 font-outfit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedRows.includes(row.id),
                                                onChange: ()=>handleRowSelect(row.id),
                                                className: "w-4 h-4 mt-1 font-outfit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 439,
                                                columnNumber: 19
                                            }, this),
                                            row.profile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: row.profile,
                                                alt: `${row.firstName} ${row.lastName}`,
                                                className: "w-12 h-12 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 446,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500 text-sm font-outfit",
                                                    children: "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                    lineNumber: 453,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 452,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 438,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm font-outfit",
                                                                children: [
                                                                    row.firstName,
                                                                    " ",
                                                                    row.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                lineNumber: 461,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-500 text-xs font-outfit",
                                                                children: row.department
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                lineNumber: 464,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-2 h-2 rounded-full ${getStatusDotColor(row.availability)}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-outfit",
                                                                        children: row.availability
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                lineNumber: 467,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                ref: (el)=>menuButtonRefs.current[row.id] = el,
                                                                className: `cursor-pointer p-1 rounded-full ${menuOpen === row.id ? "bg-[#C9C9C9] opacity-85" : ""}`,
                                                                onClick: (e)=>toggleMenu(row.id, e),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, this),
                                                            menuOpen === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                                                                row: row
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                                lineNumber: 480,
                                                                columnNumber: 47
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-xs text-gray-500 font-outfit",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: row.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 484,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 485,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: row.phoneNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 483,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 437,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, this),
                    width: 'auto',
                    grow: 1
                }
            ];
        }
        // For small screens
        if (windowWidth < 768) {
            return [
                ...baseColumns,
                {
                    name: "Last Name",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.lastName
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 504,
                            columnNumber: 30
                        }, this),
                    sortable: true,
                    width: "auto"
                },
                {
                    name: "First Name",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.firstName
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 510,
                            columnNumber: 30
                        }, this),
                    sortable: true,
                    width: "auto"
                },
                {
                    name: "Department",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.department
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 516,
                            columnNumber: 30
                        }, this),
                    width: "auto"
                },
                {
                    name: "",
                    cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-1 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>menuButtonRefs.current[row.id] = el,
                                    className: `cursor-pointer p-1 rounded-full ${menuOpen === row.id ? "bg-[#C9C9C9] opacity-85" : ""}`,
                                    onClick: (e)=>toggleMenu(row.id, e),
                                    "aria-label": "More options",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 531,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this),
                                menuOpen === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                                    row: row
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 533,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this),
                    width: "50px",
                    sortable: false
                }
            ];
        }
        // For medium screens
        if (windowWidth < 1024) {
            return [
                ...baseColumns,
                {
                    name: "Last Name",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.lastName
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 548,
                            columnNumber: 30
                        }, this),
                    sortable: true,
                    width: "auto"
                },
                {
                    name: "First Name",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.firstName
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 554,
                            columnNumber: 30
                        }, this),
                    sortable: true,
                    width: "auto"
                },
                {
                    name: "Email",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 560,
                            columnNumber: 30
                        }, this),
                    width: "auto"
                },
                {
                    name: "Department",
                    selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-outfit",
                            children: row.department
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 565,
                            columnNumber: 30
                        }, this),
                    width: "auto"
                },
                {
                    name: "",
                    cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>menuButtonRefs.current[row.id] = el,
                                    className: `cursor-pointer p-1 rounded-full ${menuOpen === row.id ? "bg-[#C9C9C9] opacity-85" : ""}`,
                                    onClick: (e)=>toggleMenu(row.id, e),
                                    "aria-label": "More options",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {}, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 580,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this),
                                menuOpen === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                                    row: row
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 582,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                    width: "60px",
                    sortable: false
                }
            ];
        }
        // For large screens - show all columns
        return [
            ...baseColumns,
            {
                name: "Last Name",
                selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-outfit",
                        children: row.lastName
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 596,
                        columnNumber: 28
                    }, this),
                sortable: true,
                width: "auto"
            },
            {
                name: "First Name",
                selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-outfit",
                        children: row.firstName
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 602,
                        columnNumber: 28
                    }, this),
                sortable: true,
                width: "auto"
            },
            {
                name: "Email",
                selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-outfit",
                        children: row.email
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 608,
                        columnNumber: 28
                    }, this),
                width: "auto"
            },
            {
                name: "Phone Number",
                selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-outfit",
                        children: row.phoneNumber
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 613,
                        columnNumber: 28
                    }, this),
                width: "auto"
            },
            {
                name: "Department",
                selector: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-outfit",
                        children: row.department
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 618,
                        columnNumber: 28
                    }, this),
                width: "auto"
            },
            {
                name: "",
                cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>menuButtonRefs.current[row.id] = el,
                                className: `cursor-pointer p-1 rounded-full ${menuOpen === row.id ? "bg-[#C9C9C9] opacity-85" : ""}`,
                                onClick: (e)=>toggleMenu(row.id, e),
                                "aria-label": "More options",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this),
                            menuOpen === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                                row: row
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 635,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 624,
                        columnNumber: 11
                    }, this),
                width: "60px",
                sortable: false
            }
        ];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col h-screen font-outfit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 sm:px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 py-3 sm:h-[74px] w-full border-t border-b border-gray-300 bg-gray-100 sticky top-0 z-30 font-outfit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full sm:w-[285px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute mb-0.5 right-2 bottom-[8px] sm:bottom-[3px] w-[20px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "border p-2 sm:p-4 rounded-[10px] h-[40px] sm:h-[31px] w-full sm:w-[285px] outline-none bg-white font-outfit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 650,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:hidden flex justify-between w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFilters(!showFilters),
                                        className: "flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-[7px] font-outfit",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 667,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: showFilters ? "Hide Filters" : "Show Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 668,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, this),
                                    role !== "technician" && addStaffLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: addStaffLink,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-[#0060B4] text-white px-3 py-2 rounded-[10px] h-[40px] flex items-center justify-center gap-1 font-outfit",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[18px]",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                    lineNumber: 676,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add Staff"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 672,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col sm:flex-row gap-2 w-full sm:w-auto ${showFilters ? "flex" : "hidden sm:flex"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearAllFilters,
                                        className: `flex items-center justify-center px-3 py-1 rounded-md ${!filterDepartment && !filterAvailability ? "bg-black text-white" : "bg-gray-200"} h-8 cursor-pointer`,
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                ref: departmentButtonRef,
                                                onClick: ()=>{
                                                    setShowDepartmentDropdown(!showDepartmentDropdown);
                                                    setShowAvailabilityDropdown(false);
                                                },
                                                className: `flex items-center justify-between gap-2 px-3 py-1 rounded-md ${filterDepartment ? "bg-black text-white" : "bg-gray-200"} h-8 cursor-pointer min-w-[120px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: filterDepartment || "Department"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 707,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 708,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 697,
                                                columnNumber: 15
                                            }, this),
                                            showDepartmentDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: departmentDropdownRef,
                                                className: "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md z-40 border border-gray-200 w-48",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-48 overflow-y-auto py-1",
                                                    children: departmentOptions.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleDepartmentFilter(dept),
                                                            className: `w-full text-left px-3 py-2 text-sm ${filterDepartment === dept ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}`,
                                                            children: dept
                                                        }, dept, false, {
                                                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                            lineNumber: 718,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                    lineNumber: 716,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 712,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 696,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                ref: availabilityButtonRef,
                                                onClick: ()=>{
                                                    setShowAvailabilityDropdown(!showAvailabilityDropdown);
                                                    setShowDepartmentDropdown(false);
                                                },
                                                className: `flex items-center justify-between gap-2 px-3 py-1 rounded-md ${filterAvailability ? "bg-black text-white" : "bg-gray-200"} h-8 cursor-pointer min-w-[120px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: filterAvailability || "Availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 747,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                        lineNumber: 748,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 737,
                                                columnNumber: 15
                                            }, this),
                                            showAvailabilityDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: availabilityDropdownRef,
                                                className: "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md z-40 border border-gray-200 w-48",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-48 overflow-y-auto py-1",
                                                    children: availabilityOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleAvailabilityFilter(option),
                                                            className: `w-full text-left px-3 py-2 text-sm ${filterAvailability === option ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}`,
                                                            children: option
                                                        }, option, false, {
                                                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                            lineNumber: 758,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                    lineNumber: 756,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 752,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 736,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 684,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this),
                    role !== "technician" && addStaffLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: addStaffLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hidden sm:flex bg-[#0060B4] text-white p-3 rounded-[15px] h-[31px] w-[120px] items-center justify-around font-outfit font-normal cursor-pointer whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[20px]",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Add Staff"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 781,
                                    columnNumber: 54
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 780,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 779,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                lineNumber: 647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-container flex-1 w-full relative overflow-hidden",
                children: [
                    selectedRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-gray-100 z-40 border-b border-gray-200 ${windowWidth < 768 ? "sticky top-0 py-3 px-4" : "h-[45px] absolute top-0 left-8 right-0 flex items-center px-4"} font-outfit`,
                            children: windowWidth < 768 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm font-outfit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600",
                                                children: [
                                                    selectedRows.length,
                                                    " selected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 800,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: clearSelection,
                                                className: "flex items-center justify-center p-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                    lineNumber: 805,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 801,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 799,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: clearSelection,
                                                className: "text-gray-600 font-outfit",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 809,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 815,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                ref: statusButtonRef,
                                                onClick: ()=>setStatusModalOpen(true),
                                                className: "text-gray-600 font-outfit",
                                                children: "Set Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                                lineNumber: 816,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 808,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 798,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: statusButtonRef,
                                    onClick: ()=>setStatusModalOpen(true),
                                    className: "cursor-pointer hover:text-gray-900 status-button flex items-center gap-1 text-[#757575] font-outfit",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Set Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 832,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 827,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 826,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 794,
                            columnNumber: 13
                        }, this)
                    }, void 0, false),
                    statusModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-[9999] font-outfit",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 status-modal font-outfit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-4 font-outfit",
                                    children: "Change Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 845,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 font-outfit",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAccountStatus("Available"),
                                            className: "w-full p-3 text-left hover:bg-gray-100 rounded border-gray-100 font-outfit",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                            lineNumber: 847,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAccountStatus("Not available"),
                                            className: "w-full p-3 text-left hover:bg-gray-100 rounded border-gray-100 font-outfit",
                                            children: "Not available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                            lineNumber: 853,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAccountStatus("Desactivated"),
                                            className: "w-full p-3 text-left hover:bg-gray-100 rounded border-gray-100 font-outfit",
                                            children: "Desactivated"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                            lineNumber: 859,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 846,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-end space-x-3 mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStatusModalOpen(false),
                                        className: "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 font-outfit",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                        lineNumber: 867,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                    lineNumber: 866,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 844,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 843,
                        columnNumber: 13
                    }, this), document.body),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: tableHeight,
                            overflow: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            columns: getResponsiveColumns(),
                            data: filteredData,
                            conditionalRowStyles: [
                                {
                                    when: (row)=>row.id === firstVisibleRowId,
                                    style: {
                                        borderTopLeftRadius: windowWidth < 768 ? "0px" : '40px',
                                        borderTopRightRadius: windowWidth < 768 ? "0px" : '40px'
                                    }
                                }
                            ],
                            progressPending: loading,
                            noHeader: true,
                            dense: windowWidth < 768,
                            responsive: true,
                            className: "w-full font-outfit",
                            fixedHeader: true,
                            fixedHeaderScrollHeight: tableHeight,
                            noDataComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center font-outfit text-gray-500",
                                children: loading ? "Loading..." : "No staff members found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                                lineNumber: 901,
                                columnNumber: 15
                            }, void 0),
                            customStyles: {
                                table: {
                                    style: {
                                        minWidth: '100%',
                                        marginTop: "0px",
                                        backgroundColor: "#f3f4f6",
                                        fontFamily: "outfit"
                                    }
                                },
                                tableWrapper: {
                                    style: {
                                        width: '100%',
                                        display: 'block',
                                        paddingBottom: selectedRows.length > 0 && windowWidth < 768 ? "50px" : "0",
                                        fontFamily: "outfit"
                                    }
                                },
                                responsiveWrapper: {
                                    style: {
                                        width: '100%',
                                        minWidth: '100%',
                                        fontFamily: "outfit"
                                    }
                                },
                                headRow: {
                                    style: {
                                        minHeight: windowWidth < 768 ? "10px" : "30px",
                                        paddingLeft: windowWidth < 768 ? '5px' : "0px",
                                        fontSize: windowWidth < 768 ? "0.85rem" : "1rem",
                                        width: '100%',
                                        border: "none",
                                        position: 'sticky',
                                        top: '0px',
                                        zIndex: 10,
                                        backgroundColor: "#f3f4f6",
                                        display: windowWidth < 768 ? 'none' : 'flex',
                                        fontFamily: "outfit"
                                    }
                                },
                                headCells: {
                                    style: {
                                        backgroundColor: "#f3f4f6",
                                        fontFamily: "outfit",
                                        color: "#757575",
                                        height: windowWidth < 768 ? "40px" : "50px",
                                        padding: windowWidth < 768 ? "0px 5px" : "0px 10px",
                                        fontSize: windowWidth < 768 ? "0.75rem" : "0.875rem",
                                        textAlign: "left",
                                        display: "flex",
                                        alignItems: "center",
                                        position: 'sticky',
                                        top: '0px',
                                        zIndex: 10
                                    }
                                },
                                rows: {
                                    style: {
                                        backgroundColor: 'white',
                                        minHeight: windowWidth < 768 ? "70px" : 'auto',
                                        height: windowWidth < 640 ? "100px" : '70px',
                                        padding: windowWidth < 768 ? "8px 16px" : "0px",
                                        marginBottom: "0",
                                        '&:not(:last-of-type)': {
                                            borderBottom: '1px solid #E5E7EB'
                                        },
                                        fontFamily: "outfit"
                                    }
                                },
                                cells: {
                                    style: {
                                        padding: windowWidth < 768 ? "4px 8px" : "0px 10px",
                                        textAlign: "left",
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "outfit"
                                    }
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                            lineNumber: 881,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                        lineNumber: 880,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
                lineNumber: 790,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/staff-table/Stafftable.jsx",
        lineNumber: 645,
        columnNumber: 5
    }, this);
} //add staff
_s(StaffTable, "4hLnEeSQtdO8CFlthap8944V2qY=");
_c = StaffTable;
var _c;
__turbopack_context__.k.register(_c, "StaffTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/Images/arrows.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrows.2292d6b3.svg");}}),
"[project]/public/Images/arrows.svg.mjs { IMAGE => \"[project]/public/Images/arrows.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/Images/arrows.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 224,
    height: 93,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/admin/technical-staff/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminTechnicalStaff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/NavBar/Nav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$staff$2d$table$2f$Stafftable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/staff-table/Stafftable.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Images/arrows.svg.mjs { IMAGE => "[project]/public/Images/arrows.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AdminTechnicalStaff() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [technicians, setTechnicians] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminTechnicalStaff.useEffect": ()=>{
            // Fetch staff data when component mounts
            fetchStaffData();
        }
    }["AdminTechnicalStaff.useEffect"], []);
    // Function to determine if a technician is available based on work schedule
    const calculateAvailability = (workSchedules)=>{
        if (!workSchedules || workSchedules.length === 0) {
            return "Not available";
        }
        const now = new Date();
        const days = [
            'SUNDAY',
            'MONDAY',
            'TUESDAY',
            'WEDNESDAY',
            'THURSDAY',
            'FRIDAY',
            'SATURDAY'
        ];
        const currentDay = days[now.getDay()];
        // Find today's schedule if it exists
        const todaySchedule = workSchedules.find((schedule)=>schedule.day === currentDay);
        if (!todaySchedule) {
            return "Not available"; // No schedule for today
        }
        // Get current time in the same format as the schedule times
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        const currentTimeInMinutes = currentHours * 60 + currentMinutes;
        // Extract hours and minutes from schedule times
        const startTime = new Date(todaySchedule.startTime);
        const endTime = new Date(todaySchedule.endTime);
        const startTimeInMinutes = startTime.getHours() * 60 + startTime.getMinutes();
        const endTimeInMinutes = endTime.getHours() * 60 + endTime.getMinutes();
        // Check if current time is within work schedule
        if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
            return "Available";
        } else {
            return "Not available";
        }
    };
    const fetchStaffData = async ()=>{
        setLoading(true);
        try {
            // Real API call to the backend
            const response = await fetch('http://localhost:3001/api/technicians', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const result = await response.json();
            console.log("API response:", result);
            if (result.success && Array.isArray(result.data)) {
                // Transform the API data to match our component's expected format
                const formattedTechnicians = result.data.map((tech)=>({
                        id: tech.id.toString(),
                        firstName: tech.firstName,
                        lastName: tech.lastName,
                        email: tech.email,
                        phoneNumber: tech.phoneNumber || "Not provided",
                        department: tech.department?.name || "Unknown Department",
                        departmentId: tech.departmentId,
                        // Calculate availability based on work schedule
                        availability: tech.isRetired ? "Desactivated" : calculateAvailability(tech.workSchedules),
                        profile: null,
                        // Store the original data for reference
                        originalData: tech
                    }));
                setTechnicians(formattedTechnicians);
            } else {
                throw new Error("Invalid data format received from API");
            }
        } catch (err) {
            console.error("Failed to fetch staff data:", err);
            setError(err.message);
            // You can either show an error or fallback to sample data
            setTechnicians([]);
        } finally{
            setLoading(false);
        }
    };
    // Handler for changing staff status
    const handleStatusChange = async (ids, status)=>{
        try {
            // Convert UI status to backend status
            const backendStatus = status === "Desactivated" ? "retired" : "active";
            // Process each technician individually
            const updatePromises = ids.map((id)=>fetch(`http://localhost:3001/api/technicians/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        isRetired: backendStatus === "retired"
                    })
                }));
            // Wait for all updates to complete
            const results = await Promise.all(updatePromises);
            // Check if any request failed
            if (results.some((res)=>!res.ok)) {
                throw new Error("One or more technician updates failed");
            }
            // Refresh data after update
            await fetchStaffData();
            return true;
        } catch (err) {
            console.error("Failed to update staff status:", err);
            // Fallback UI update
            setTechnicians((prev)=>prev.map((tech)=>ids.includes(tech.id) ? {
                        ...tech,
                        availability: status
                    } : tech));
            return false;
        }
    };
    // Handler for viewing staff details
    const handleViewStaff = (id)=>{
        router.push(`/admin/technical-staff/worker-details?id=${id}`);
    };
    // Handler for editing staff
    const handleEditStaff = (id)=>{
        router.push(`/admin/technical-staff/edit-worker-details?id=${id}`);
    };
    // Department options from API
    const [departmentOptions, setDepartmentOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "IT",
        "Engineering",
        "Maintenance",
        "Administration",
        "Logistics"
    ]);
    // Fetch departments for the dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminTechnicalStaff.useEffect": ()=>{
            const fetchDepartments = {
                "AdminTechnicalStaff.useEffect.fetchDepartments": async ()=>{
                    try {
                        const response = await fetch('http://localhost:3001/api/departments', {
                            headers: {
                                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                            }
                        });
                        if (response.ok) {
                            const result = await response.json();
                            if (result.success && Array.isArray(result.data)) {
                                setDepartmentOptions(result.data.map({
                                    "AdminTechnicalStaff.useEffect.fetchDepartments": (dept)=>dept.name
                                }["AdminTechnicalStaff.useEffect.fetchDepartments"]));
                            }
                        }
                    } catch (error) {
                        console.error("Failed to fetch departments:", error);
                    }
                }
            }["AdminTechnicalStaff.useEffect.fetchDepartments"];
            fetchDepartments();
        }
    }["AdminTechnicalStaff.useEffect"], []);
    // Mobile detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminTechnicalStaff.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setIsMobile(window.innerWidth < 640);
                const handleResize = {
                    "AdminTechnicalStaff.useEffect.handleResize": ()=>{
                        setIsMobile(window.innerWidth < 640);
                    }
                }["AdminTechnicalStaff.useEffect.handleResize"];
                window.addEventListener("resize", handleResize);
                return ({
                    "AdminTechnicalStaff.useEffect": ()=>window.removeEventListener("resize", handleResize)
                })["AdminTechnicalStaff.useEffect"];
            }
        }
    }["AdminTechnicalStaff.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full min-h-screen flex flex-row items-start justify-center bg-gray-100 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block absolute top-0 right-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "",
                    width: 212
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full z-30 ${isMobile ? 'mt-28' : 'ml-[140px]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-oxanium p-6 font-semibold text-[26.07px]",
                            children: "Technical Staff"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[calc(100vh-150px)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$staff$2d$table$2f$Stafftable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            technicians: technicians,
                            loading: loading,
                            error: error,
                            onStatusChange: handleStatusChange,
                            onView: handleViewStaff,
                            onEdit: handleEditStaff,
                            addStaffLink: "/admin/technical-staff/add-worker",
                            departmentOptions: departmentOptions,
                            availabilityOptions: [
                                "Available",
                                "Not available",
                                "Desactivated"
                            ],
                            onRefresh: fetchStaffData
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/admin/technical-staff/page.jsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_s(AdminTechnicalStaff, "i79ydcQYjXkdZu8pdy5JvhOqOyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminTechnicalStaff;
var _c;
__turbopack_context__.k.register(_c, "AdminTechnicalStaff");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_748abd6e._.js.map