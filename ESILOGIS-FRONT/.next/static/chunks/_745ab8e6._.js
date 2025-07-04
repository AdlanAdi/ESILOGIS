(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_745ab8e6._.js", {

"[project]/src/app/components/intervention-cards/itervention-cards.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InterventionsCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
;
var _s = __turbopack_context__.k.signature();
;
;
function InterventionsCards({ id, dateTime = "Wednesday, 12:45", location = "S33", priority = "High", description = "Lorem Opium Lorem Opium...", status = "In Progress", plannedAt = "2023-10-12T12:45:00Z", assignees = [], onSelect = ()=>{}, isSelected = false, onShowDetails = ()=>{}, onEdit = ()=>{}, onCancel = ()=>{} }) {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle clicks outside the menu to close it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsCards.useEffect": ()=>{
            const handleClickOutside = {
                "InterventionsCards.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setMenuOpen(false);
                    }
                }
            }["InterventionsCards.useEffect.handleClickOutside"];
            if (menuOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "InterventionsCards.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["InterventionsCards.useEffect"];
        }
    }["InterventionsCards.useEffect"], [
        menuOpen
    ]);
    // Get priority color class
    const getPriorityColorClass = (priority)=>{
        switch(priority.toLowerCase()){
            case "high":
                return "bg-red-100 text-red-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    // Get status color class
    const getStatusColorClass = (status)=>{
        switch(status.toLowerCase()){
            case "in progress":
                return "bg-green-500";
            case "complete":
                return "bg-gray-500";
            case "pending":
                return "bg-yellow-500";
            case "cancelled":
                return "bg-red-500";
            case "postponed":
                return "bg-orange-500";
            default:
                return "bg-gray-500";
        }
    };
    // Check if intervention is cancelled
    const isCancelled = status.toLowerCase() === "cancelled";
    const formatDate = (dateString)=>{
        if (!dateString) return "Not scheduled";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        } catch (e) {
            return "Invalid date";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm flex flex-col w-full border border-gray-10 px-4 py-4 font-outfit bg-gray-100 text-[#757575]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row w-full justify-between p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: isSelected,
                                onChange: ()=>onSelect(id),
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "",
                                children: dateTime
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "",
                                children: location
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-2 py-1 rounded-full text-xs ${getPriorityColorClass(priority)}`,
                                children: priority
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: menuRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-1 rounded-full hover:bg-gray-100",
                                        onClick: ()=>setMenuOpen(!menuOpen),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "block w-full text-left px-4 py-2 hover:bg-gray-100",
                                                    onClick: ()=>{
                                                        onShowDetails(id);
                                                        setMenuOpen(false);
                                                    },
                                                    children: "Show Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `block w-full text-left px-4 py-2 hover:bg-gray-100 ${isCancelled ? "opacity-50 cursor-not-allowed" : ""}`,
                                                    onClick: ()=>{
                                                        if (!isCancelled) {
                                                            onEdit(id);
                                                            setMenuOpen(false);
                                                        }
                                                    },
                                                    disabled: isCancelled,
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 ${isCancelled ? "opacity-50 cursor-not-allowed" : ""}`,
                                                    onClick: ()=>{
                                                        if (!isCancelled) {
                                                            onCancel(id);
                                                            setMenuOpen(false);
                                                        }
                                                    },
                                                    disabled: isCancelled,
                                                    children: "Cancel Intervention"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: " mb-4",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `mr-2 w-2 h-2 bg-blue-500 rounded-full`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatDate(plannedAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            assignees.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex -space-x-2",
                                children: [
                                    assignees.slice(0, 3).map((assignee, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: assignee.avatar || `https://ui-avatars.com/api/?name=${assignee.name}&background=random`,
                                            alt: assignee.name,
                                            className: "w-6 h-6 rounded-full border border-white"
                                        }, index, false, {
                                            fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)),
                                    assignees.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs text-gray-600",
                                        children: [
                                            "+",
                                            assignees.length - 3
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/intervention-cards/itervention-cards.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(InterventionsCards, "m+Bw3p56aCldBbEoFNtGoL2OdKs=");
_c = InterventionsCards;
var _c;
__turbopack_context__.k.register(_c, "InterventionsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InterventionsTablePhone)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$intervention$2d$cards$2f$itervention$2d$cards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/intervention-cards/itervention-cards.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function InterventionsTablePhone({ // Data props
interventions = [], technicians = [], // Handler props
onStatusChange = async (ids, status)=>console.log("Status change:", ids, status), onPriorityChange = async (ids, priority)=>console.log("Priority change:", ids, priority), onAssignWorkers = async (interventionIds, technicianIds)=>console.log("Assign workers:", interventionIds, technicianIds), onCancelIntervention = async (ids)=>console.log("Cancel interventions:", ids), onDeleteIntervention = async (ids)=>console.log("Delete interventions:", ids), // Optional customization props
addTaskLink = "../../admin/assigne-intervention", loadingData = false }) {
    _s();
    // State management
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [filterPriority, setFilterPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDatePickerOpen, setIsDatePickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filteredInterventions, setFilteredInterventions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [headerHeight, setHeaderHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Action modals state
    const [isStatusModalOpen, setIsStatusModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPriorityModalOpen, setIsPriorityModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCancelConfirmOpen, setIsCancelConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkActionStatus, setBulkActionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [bulkActionPriority, setBulkActionPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cancellingInterventions, setCancellingInterventions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs for outside click handling
    const datePickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusModalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const priorityModalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cancelConfirmRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize data state from props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsTablePhone.useEffect": ()=>{
            setData(interventions);
            setFilteredInterventions(interventions);
            setLoading(loadingData);
        }
    }["InterventionsTablePhone.useEffect"], [
        interventions,
        loadingData
    ]);
    // Measure header height to offset the cards container
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsTablePhone.useEffect": ()=>{
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        }
    }["InterventionsTablePhone.useEffect"], [
        selectedRows,
        selectedDate,
        filterStatus,
        filterPriority
    ]);
    // Handle selection of an intervention
    const handleSelectIntervention = (id)=>{
        setSelectedRows((prev)=>{
            if (prev.includes(id)) {
                return prev.filter((rowId)=>rowId !== id);
            } else {
                return [
                    ...prev,
                    id
                ];
            }
        });
    };
    // Handle showing intervention details
    const handleShowDetails = (id)=>{
        console.log("Show details for intervention:", id);
    // Implement your details view logic here
    };
    // Handle editing an intervention
    const handleEditIntervention = (id)=>{
        console.log("Edit intervention:", id);
    // Implement your edit logic here
    };
    // Check if any selected row is cancelled
    const hasSelectedCancelledItems = ()=>{
        return selectedRows.some((rowId)=>{
            const item = data.find((row)=>row.id === rowId);
            return item && item.status === "Cancelled";
        });
    };
    // Toggle the date picker
    const toggleDatePicker = ()=>{
        setIsDatePickerOpen(!isDatePickerOpen);
        if (isFilterOpen) setIsFilterOpen(false);
    };
    // Toggle the filter dropdown
    const toggleFilter = ()=>{
        setIsFilterOpen(!isFilterOpen);
        if (isDatePickerOpen) setIsDatePickerOpen(false);
    };
    // Handle date change
    const handleDateChange = (date)=>{
        setSelectedDate(date);
        setIsDatePickerOpen(false);
    };
    // Clear date filter
    const clearDateFilter = ()=>{
        setSelectedDate(null);
    };
    // Open status modal for bulk actions
    const openStatusModal = ()=>{
        if (hasSelectedCancelledItems()) {
            alert("Cannot change status of cancelled interventions.");
            return;
        }
        setIsStatusModalOpen(true);
        setBulkActionStatus(""); // Reset selection
        // Close other modals if open
        setIsPriorityModalOpen(false);
        setIsCancelConfirmOpen(false);
    };
    // Open priority modal for bulk actions
    const openPriorityModal = ()=>{
        if (hasSelectedCancelledItems()) {
            alert("Cannot change priority of cancelled interventions.");
            return;
        }
        setIsPriorityModalOpen(true);
        setBulkActionPriority(""); // Reset selection
        // Close other modals if open
        setIsStatusModalOpen(false);
        setIsCancelConfirmOpen(false);
    };
    // Open cancel confirmation modal
    const openCancelConfirm = ()=>{
        setIsCancelConfirmOpen(true);
        // Close other modals if open
        setIsStatusModalOpen(false);
        setIsPriorityModalOpen(false);
    };
    // Apply bulk status change to selected interventions
    const applyBulkStatus = async ()=>{
        if (!bulkActionStatus) return;
        try {
            // Call the prop handler
            await onStatusChange(selectedRows, bulkActionStatus);
            // Update local state
            setData((prevData)=>prevData.map((task)=>selectedRows.includes(task.id) ? {
                        ...task,
                        status: bulkActionStatus
                    } : task));
            // Close modal and show success
            setIsStatusModalOpen(false);
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status. Please try again.");
        }
    };
    // Apply bulk priority change to selected interventions
    const applyBulkPriority = async ()=>{
        if (!bulkActionPriority) return;
        try {
            // Call the prop handler
            await onPriorityChange(selectedRows, bulkActionPriority);
            // Update local state
            setData((prevData)=>prevData.map((task)=>selectedRows.includes(task.id) ? {
                        ...task,
                        priority: bulkActionPriority
                    } : task));
            // Close modal
            setIsPriorityModalOpen(false);
        } catch (error) {
            console.error("Error updating priority:", error);
            alert("Failed to update priority. Please try again.");
        }
    };
    // Apply bulk cancel to selected interventions
    const applyBulkCancel = async ()=>{
        if (selectedRows.length === 0) {
            alert("No interventions selected for cancellation.");
            return;
        }
        setCancellingInterventions(true);
        try {
            // Call the prop handler
            await onCancelIntervention(selectedRows);
            // Update local state
            setData((prevData)=>prevData.map((intervention)=>selectedRows.includes(intervention.id) ? {
                        ...intervention,
                        status: "Cancelled"
                    } : intervention));
            // Close modal and reset state
            setIsCancelConfirmOpen(false);
            // Show success message
            alert(`Successfully cancelled ${selectedRows.length} intervention(s).`);
        } catch (error) {
            console.error("Error cancelling interventions:", error);
            alert("Failed to cancel one or more interventions. Please try again.");
        } finally{
            setCancellingInterventions(false);
        }
    };
    // Clear selection of rows
    const clearSelection = ()=>{
        setSelectedRows([]);
    };
    // Handle clicks outside dropdowns to close them
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsTablePhone.useEffect": ()=>{
            const handleClickOutside = {
                "InterventionsTablePhone.useEffect.handleClickOutside": (event)=>{
                    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                        setIsDatePickerOpen(false);
                    }
                    if (filterRef.current && !filterRef.current.contains(event.target)) {
                        setIsFilterOpen(false);
                    }
                    if (statusModalRef.current && !statusModalRef.current.contains(event.target)) {
                        setIsStatusModalOpen(false);
                    }
                    if (priorityModalRef.current && !priorityModalRef.current.contains(event.target)) {
                        setIsPriorityModalOpen(false);
                    }
                    if (cancelConfirmRef.current && !cancelConfirmRef.current.contains(event.target)) {
                        setIsCancelConfirmOpen(false);
                    }
                }
            }["InterventionsTablePhone.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "InterventionsTablePhone.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["InterventionsTablePhone.useEffect"];
        }
    }["InterventionsTablePhone.useEffect"], []);
    // Filter interventions based on search, date, status, and priority
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsTablePhone.useEffect": ()=>{
            let filtered = [
                ...data
            ];
            // Apply search filter
            if (search) {
                const searchLower = search.toLowerCase();
                filtered = filtered.filter({
                    "InterventionsTablePhone.useEffect": (item)=>item.description.toLowerCase().includes(searchLower) || item.location.toLowerCase().includes(searchLower) || item.status.toLowerCase().includes(searchLower) || item.dateTime.toLowerCase().includes(searchLower) || item.assignees && item.assignees.some({
                            "InterventionsTablePhone.useEffect": (assignee)=>assignee.name.toLowerCase().includes(searchLower)
                        }["InterventionsTablePhone.useEffect"])
                }["InterventionsTablePhone.useEffect"]);
            }
            // Apply date filter
            if (selectedDate) {
                const selectedDayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'EEEE');
                filtered = filtered.filter({
                    "InterventionsTablePhone.useEffect": (item)=>{
                        // Extract day from dateTime (e.g., "Wednesday" from "Wednesday, 12:45")
                        const itemDay = item.dateTime.split(',')[0].trim();
                        return itemDay.toLowerCase() === selectedDayName.toLowerCase();
                    }
                }["InterventionsTablePhone.useEffect"]);
            }
            // Apply status filter
            if (filterStatus !== "All") {
                filtered = filtered.filter({
                    "InterventionsTablePhone.useEffect": (item)=>item.status === filterStatus
                }["InterventionsTablePhone.useEffect"]);
            }
            // Apply priority filter
            if (filterPriority !== "All") {
                filtered = filtered.filter({
                    "InterventionsTablePhone.useEffect": (item)=>item.priority === filterPriority
                }["InterventionsTablePhone.useEffect"]);
            }
            setFilteredInterventions(filtered);
        }
    }["InterventionsTablePhone.useEffect"], [
        search,
        selectedDate,
        filterStatus,
        filterPriority,
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "interventions-mobile-container w-full bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "sticky top-0 z-10 bg-gray-100 border-t border-b border-gray-300 py-2",
                style: {
                    backdropFilter: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2 px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "border rounded-lg pl-8 pr-3 py-2 w-full text-sm focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 318,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: datePickerRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleDatePicker,
                                        className: `flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm ${selectedDate ? "bg-black text-white" : "bg-gray-200"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                lineNumber: 335,
                                                columnNumber: 29
                                            }, this),
                                            selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 cursor-pointer",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    clearDateFilter();
                                                },
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                lineNumber: 337,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 329,
                                        columnNumber: 25
                                    }, this),
                                    isDatePickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-1 z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            selected: selectedDate,
                                            onChange: handleDateChange,
                                            inline: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 352,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 351,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: filterRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleFilter,
                                        className: "flex items-center justify-center px-3 py-2 bg-gray-200 rounded-lg text-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 367,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 363,
                                        columnNumber: 25
                                    }, this),
                                    isFilterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-sm mb-2",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 mb-3",
                                                    children: [
                                                        "All",
                                                        "In Progress",
                                                        "Complete",
                                                        "Pending",
                                                        "Postponed",
                                                        "Cancelled"
                                                    ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilterStatus(status),
                                                            className: `block w-full text-left px-2 py-1 text-sm rounded ${filterStatus === status ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"}`,
                                                            children: status
                                                        }, status, false, {
                                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                            lineNumber: 377,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                    lineNumber: 375,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-sm mb-2",
                                                    children: "Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                    lineNumber: 389,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        "All",
                                                        "High",
                                                        "Medium",
                                                        "Low"
                                                    ].map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilterPriority(priority),
                                                            className: `block w-full text-left px-2 py-1 text-sm rounded ${filterPriority === priority ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"}`,
                                                            children: priority
                                                        }, priority, false, {
                                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                            lineNumber: 392,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                                    lineNumber: 390,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 373,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 372,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 362,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: addTaskLink,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#0060B4] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap",
                                    children: "+ Add Task"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 410,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 409,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                        lineNumber: 314,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-2 px-2",
                        children: [
                            selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center",
                                children: [
                                    selectedDate.toDateString(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ml-1",
                                        onClick: clearDateFilter,
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 421,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 419,
                                columnNumber: 25
                            }, this),
                            filterStatus !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center",
                                children: [
                                    "Status: ",
                                    filterStatus,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ml-1",
                                        onClick: ()=>setFilterStatus("All"),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 427,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 425,
                                columnNumber: 25
                            }, this),
                            filterPriority !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center",
                                children: [
                                    "Priority: ",
                                    filterPriority,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ml-1",
                                        onClick: ()=>setFilterPriority("All"),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 433,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 431,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                        lineNumber: 417,
                        columnNumber: 17
                    }, this),
                    selectedRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 text-[#757575] font-outfit mt-2 p-2 rounded-lg flex items-center gap-4 text-sm mx-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    selectedRows.length,
                                    " selected",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-800 ml-2",
                                        onClick: clearSelection,
                                        "aria-label": "Clear selection",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 448,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 443,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 441,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-red-600",
                                onClick: openCancelConfirm,
                                children: "Cancel Pi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 451,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 457,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${hasSelectedCancelledItems() ? "opacity-50 cursor-not-allowed" : ""}`,
                                onClick: openStatusModal,
                                disabled: hasSelectedCancelledItems(),
                                children: "Set Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 458,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${hasSelectedCancelledItems() ? "opacity-50 cursor-not-allowed" : ""}`,
                                onClick: openPriorityModal,
                                disabled: hasSelectedCancelledItems(),
                                children: "Set Priority"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                lineNumber: 465,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                        lineNumber: 440,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                lineNumber: 309,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-20 mt-0",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8 text-gray-500",
                    children: "Loading interventions..."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                    lineNumber: 482,
                    columnNumber: 21
                }, this) : filteredInterventions.length > 0 ? filteredInterventions.map((intervention)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$intervention$2d$cards$2f$itervention$2d$cards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: intervention.id,
                        dateTime: intervention.dateTime,
                        location: intervention.location,
                        description: intervention.description,
                        status: intervention.status,
                        plannedAt: intervention.plannedAt,
                        priority: intervention.priority,
                        assignees: intervention.assignees,
                        onSelect: handleSelectIntervention,
                        isSelected: selectedRows.includes(intervention.id),
                        onShowDetails: handleShowDetails,
                        onEdit: handleEditIntervention,
                        onCancel: (id)=>{
                            setSelectedRows([
                                id
                            ]);
                            openCancelConfirm();
                        }
                    }, intervention.id, false, {
                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                        lineNumber: 487,
                        columnNumber: 25
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8 text-gray-500",
                    children: "No interventions match the current filters"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                    lineNumber: 508,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                lineNumber: 480,
                columnNumber: 13
            }, this),
            isStatusModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: statusModalRef,
                    className: "bg-white rounded-lg shadow-xl p-4 w-[90%] max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium",
                                    children: [
                                        "Set Status for ",
                                        selectedRows.length,
                                        " items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 522,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsStatusModalOpen(false),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 527,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 523,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 521,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                "In Progress",
                                "Complete",
                                "Pending",
                                "Postponed",
                                "Cancelled",
                                "Denied"
                            ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            id: `status-${status}`,
                                            name: "bulk-status",
                                            checked: bulkActionStatus === status,
                                            onChange: ()=>setBulkActionStatus(status),
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 537,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `status-${status}`,
                                            className: "cursor-pointer",
                                            children: status
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 545,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, status, true, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 533,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 531,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsStatusModalOpen(false),
                                    className: "px-4 py-2 border border-gray-300 rounded-lg text-sm",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 556,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: applyBulkStatus,
                                    disabled: !bulkActionStatus,
                                    className: `px-4 py-2 rounded-lg text-sm text-white ${bulkActionStatus ? "bg-[#0060B4] hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`,
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 562,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 555,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                    lineNumber: 517,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                lineNumber: 516,
                columnNumber: 17
            }, this),
            isPriorityModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: priorityModalRef,
                    className: "bg-white rounded-lg shadow-xl p-4 w-[90%] max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium",
                                    children: [
                                        "Set Priority for ",
                                        selectedRows.length,
                                        " items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 584,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsPriorityModalOpen(false),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 589,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 585,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 583,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                "High",
                                "Medium",
                                "Low"
                            ].map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            id: `priority-${priority}`,
                                            name: "bulk-priority",
                                            checked: bulkActionPriority === priority,
                                            onChange: ()=>setBulkActionPriority(priority),
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 599,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `priority-${priority}`,
                                            className: "cursor-pointer",
                                            children: priority
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                            lineNumber: 607,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, priority, true, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 595,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 593,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsPriorityModalOpen(false),
                                    className: "px-4 py-2 border border-gray-300 rounded-lg text-sm",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 618,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: applyBulkPriority,
                                    disabled: !bulkActionPriority,
                                    className: `px-4 py-2 rounded-lg text-sm text-white ${bulkActionPriority ? "bg-[#0060B4] hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`,
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 624,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 617,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                    lineNumber: 579,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                lineNumber: 578,
                columnNumber: 17
            }, this),
            isCancelConfirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: cancelConfirmRef,
                    className: "bg-white rounded-lg shadow-xl p-4 w-[90%] max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium",
                                    children: [
                                        "Cancel Intervention",
                                        selectedRows.length > 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 646,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCancelConfirmOpen(false),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                        lineNumber: 651,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 647,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 645,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Are you sure you want to cancel ",
                                        selectedRows.length,
                                        " intervention",
                                        selectedRows.length > 1 ? 's' : '',
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 656,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mt-2",
                                    children: "This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 657,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 655,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCancelConfirmOpen(false),
                                    className: "px-4 py-2 border border-gray-300 rounded-lg text-sm",
                                    disabled: cancellingInterventions,
                                    children: "No, Keep"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 661,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: applyBulkCancel,
                                    className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm",
                                    disabled: cancellingInterventions,
                                    children: cancellingInterventions ? "Cancelling..." : `Yes, Cancel ${selectedRows.length > 1 ? 'All' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                                    lineNumber: 668,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                            lineNumber: 660,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                    lineNumber: 641,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
                lineNumber: 640,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx",
        lineNumber: 307,
        columnNumber: 9
    }, this);
}
_s(InterventionsTablePhone, "sKtsmSDWM3U81EDi1GK9Ki07DeU=");
_c = InterventionsTablePhone;
var _c;
__turbopack_context__.k.register(_c, "InterventionsTablePhone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/intervention-table/interventionTable.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TaskTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-data-table-component/dist/index.cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function TaskTable({ // Data props
interventions = [], technicians = [], // Handler props
onPriorityChange = async (ids, priority)=>console.log("Priority change:", ids, priority), onAssignWorkers = async (interventionIds, technicianIds)=>console.log("Assign workers:", interventionIds, technicianIds), onCancelIntervention = async (ids)=>console.log("Cancel interventions:", ids), onDeleteIntervention = async (ids)=>console.log("Delete interventions:", ids), // Optional customization props
addTaskLink = "../../admin/assigne-intervention", loadingData = false }) {
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredData, setFilteredData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterPriority, setFilterPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [priorityModalOpen, setPriorityModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assignWorkerModalOpen, setAssignWorkerModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableWorkers, setAvailableWorkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredWorkers, setFilteredWorkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedWorkers, setSelectedWorkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workerSearch, setWorkerSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingWorkers, setLoadingWorkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [firstVisibleRowId, setFirstVisibleRowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cancelModalOpen, setCancelModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cancellingInterventions, setCancellingInterventions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Date filter states
    const [showDatePicker, setShowDatePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dateInput, setDateInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const datePickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const windowSize = useWindowSize();
    // Initialize data state from props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            setData(interventions);
            setFilteredData(interventions);
            setLoading(loadingData);
        }
    }["TaskTable.useEffect"], [
        interventions,
        loadingData
    ]);
    // Initialize workers from props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            setAvailableWorkers(technicians);
            setFilteredWorkers(technicians);
        }
    }["TaskTable.useEffect"], [
        technicians
    ]);
    // Set dateInput to the current date when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            if (showDatePicker && !dateInput) {
                // Set to today's date in YYYY-MM-DD format
                const today = new Date();
                const formattedDate = today.toISOString().split('T')[0];
                setDateInput(formattedDate);
            }
        }
    }["TaskTable.useEffect"], [
        showDatePicker,
        dateInput
    ]);
    // Handle date input change
    const handleDateInputChange = (e)=>{
        setDateInput(e.target.value);
    };
    // Handle date input submission
    const handleDateInputSubmit = ()=>{
        if (!dateInput) return;
        try {
            const date = new Date(dateInput);
            // Check if valid date
            if (!isNaN(date.getTime())) {
                // Set the selected date
                setSelectedDate(date);
                setShowDatePicker(false);
            }
        } catch (error) {
            console.error("Invalid date format", error);
        }
    };
    // Clear date filter
    const handleClearDate = ()=>{
        setSelectedDate(null);
        setDateInput('');
        setShowDatePicker(false);
    };
    // Check if any selected row is cancelled - still useful for other functions
    const hasSelectedCancelledItems = ()=>{
        return selectedRows.some((rowId)=>{
            const item = data.find((row)=>row.id === rowId);
            return item && item.status === "Cancelled";
        });
    };
    // Update the firstVisibleRowId whenever filteredData changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            if (filteredData && filteredData.length > 0) {
                setFirstVisibleRowId(filteredData[0].id);
            } else {
                setFirstVisibleRowId(null);
            }
        }
    }["TaskTable.useEffect"], [
        filteredData
    ]);
    function useWindowSize() {
        _s1();
        const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
            width: ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : ("TURBOPACK unreachable", undefined),
            height: ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : ("TURBOPACK unreachable", undefined)
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "TaskTable.useWindowSize.useEffect": ()=>{
                function handleResize() {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
                window.addEventListener("resize", handleResize);
                handleResize();
                return ({
                    "TaskTable.useWindowSize.useEffect": ()=>window.removeEventListener("resize", handleResize)
                })["TaskTable.useWindowSize.useEffect"];
            }
        }["TaskTable.useWindowSize.useEffect"], []);
        return windowSize;
    }
    _s1(useWindowSize, "O4Yl08dLRAx0NT43gtkn8KmtkSc=");
    // Format date for display
    const formatDate = (date)=>{
        if (!date) return "";
        const d = new Date(date);
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    };
    // Get date label for button
    const getDateLabel = ()=>{
        return selectedDate ? formatDate(selectedDate) : "Date";
    };
    // Reset date filter
    const resetDateFilter = ()=>{
        setSelectedDate(null);
        setDateInput('');
    };
    // Status color mapping (kept for display purposes only)
    const getStatusColor = (status)=>{
        switch(status){
            case "In Progress":
                return "bg-green-500";
            case "Complete":
            case "Completed":
                return "bg-gray-500";
            case "Pending":
                return "bg-yellow-500";
            case "Cancelled":
                return "bg-red-500";
            case "Postponed":
                return "bg-orange-500";
            case "Denied":
                return "bg-purple-500";
            default:
                return "bg-gray-500";
        }
    };
    // Priority color mapping
    const getPriorityColor = (priority)=>{
        switch(priority){
            case "High":
                return "bg-red-100 text-red-800";
            case "Medium":
                return "bg-yellow-100 text-yellow-800";
            case "Low":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    // Cancel intervention handler
    const handleCancelInterventions = async ()=>{
        if (selectedRows.length === 0) {
            alert("No interventions selected for cancellation.");
            return;
        }
        setCancellingInterventions(true);
        try {
            // Call the prop handler
            await onCancelIntervention(selectedRows);
            // Update local state
            setData((prevData)=>prevData.map((intervention)=>selectedRows.includes(intervention.id) ? {
                        ...intervention,
                        status: "Cancelled"
                    } : intervention));
            // Close modal and reset state
            setCancelModalOpen(false);
            // Show success message
            alert(`Successfully cancelled ${selectedRows.length} intervention(s).`);
        } catch (error) {
            console.error("Error cancelling interventions:", error);
            alert("Failed to cancel one or more interventions. Please try again.");
        } finally{
            setCancellingInterventions(false);
        }
    };
    // Priority change handler
    const handlePriorityChange = async (newPriority)=>{
        try {
            // Check if any selected items are cancelled
            if (hasSelectedCancelledItems()) {
                alert("Cannot change priority of cancelled interventions.");
                setPriorityModalOpen(false);
                return;
            }
            // Call the prop handler
            await onPriorityChange(selectedRows, newPriority);
            // Update local state
            setData((prevData)=>prevData.map((task)=>selectedRows.includes(task.id) ? {
                        ...task,
                        priority: newPriority
                    } : task));
            setPriorityModalOpen(false);
        } catch (error) {
            console.error("Error updating priority:", error);
            alert("Failed to update priority. Please try again.");
        }
    };
    // Handle delete
    const handleDeleteTasks = async ()=>{
        try {
            if (selectedRows.length === 0) {
                alert("No tasks selected for deletion.");
                return;
            }
            // Confirm deletion
            if (!confirm(`Are you sure you want to delete ${selectedRows.length} task(s)?`)) {
                return;
            }
            setIsDeleting(true);
            // Call the prop handler
            await onDeleteIntervention(selectedRows);
            // Update local state
            setData((prevData)=>prevData.filter((task)=>!selectedRows.includes(task.id)));
            // Clear selection
            setSelectedRows([]);
            // Show success message
            alert(`Successfully deleted ${selectedRows.length} task(s).`);
        } catch (error) {
            console.error("Error deleting tasks:", error);
            alert("Failed to delete one or more tasks. Please try again.");
        } finally{
            setIsDeleting(false);
        }
    };
    // Toggle worker selection
    const toggleWorkerSelection = (workerId)=>{
        setSelectedWorkers((prev)=>prev.includes(workerId) ? prev.filter((w)=>w !== workerId) : [
                ...prev,
                workerId
            ]);
    };
    // Handle worker search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            if (availableWorkers.length > 0) {
                const filtered = availableWorkers.filter({
                    "TaskTable.useEffect.filtered": (worker)=>{
                        return worker.name.toLowerCase().includes(workerSearch.toLowerCase());
                    }
                }["TaskTable.useEffect.filtered"]);
                setFilteredWorkers(filtered);
            }
        }
    }["TaskTable.useEffect"], [
        workerSearch,
        availableWorkers
    ]);
    // Assign workers handler
    const handleAssignWorkers = async ()=>{
        try {
            // Check if any selected items are cancelled
            if (hasSelectedCancelledItems()) {
                alert("Cannot assign workers to cancelled interventions.");
                setAssignWorkerModalOpen(false);
                return;
            }
            // Call the prop handler
            await onAssignWorkers(selectedRows, selectedWorkers);
            // Update local data state
            setData((prevData)=>prevData.map((task)=>{
                    if (selectedRows.includes(task.id)) {
                        // Get the worker objects for the selected IDs
                        const newAssigneesToAdd = selectedWorkers.map((workerId)=>{
                            const worker = availableWorkers.find((w)=>w.id === workerId);
                            return worker ? worker : null;
                        }).filter(Boolean);
                        // Create a set of existing assignee IDs to avoid duplicates
                        const existingAssigneeIds = new Set((task.assignees || []).map((a)=>a.id));
                        // Filter out any new assignees that already exist
                        const filteredNewAssignees = newAssigneesToAdd.filter((worker)=>!existingAssigneeIds.has(worker.id));
                        // Combine existing and new assignees
                        const updatedAssignees = [
                            ...task.assignees || [],
                            ...filteredNewAssignees
                        ];
                        return {
                            ...task,
                            assignees: updatedAssignees
                        };
                    }
                    return task;
                }));
            // Reset state and close modal
            setSelectedWorkers([]);
            setAssignWorkerModalOpen(false);
        } catch (error) {
            console.error("Error assigning workers:", error);
            alert("Failed to assign workers");
        }
    };
    // Filtering effect - removed status filtering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            let filtered = data;
            // General search across all fields
            if (search) {
                const searchLower = search.toLowerCase();
                filtered = filtered.filter({
                    "TaskTable.useEffect": (item)=>{
                        return item.description.toLowerCase().includes(searchLower) || item.location.toLowerCase().includes(searchLower) || item.status.toLowerCase().includes(searchLower) || item.dateTime.toLowerCase().includes(searchLower) || item.assignees && item.assignees.some({
                            "TaskTable.useEffect": (assignee)=>assignee.name.toLowerCase().includes(searchLower)
                        }["TaskTable.useEffect"]);
                    }
                }["TaskTable.useEffect"]);
            }
            // Filter by selected date
            if (selectedDate) {
                const selectedDayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, 'EEEE');
                filtered = filtered.filter({
                    "TaskTable.useEffect": (item)=>{
                        // Extract day from dateTime (e.g., "Wednesday" from "Wednesday, 12:45")
                        const itemDay = item.dateTime.split(',')[0].trim();
                        return itemDay.toLowerCase() === selectedDayName.toLowerCase();
                    }
                }["TaskTable.useEffect"]);
            }
            // Apply priority filter if not "All"
            if (filterPriority !== "All") {
                filtered = filtered.filter({
                    "TaskTable.useEffect": (item)=>item.priority === filterPriority
                }["TaskTable.useEffect"]);
            }
            setFilteredData(filtered);
        }
    }["TaskTable.useEffect"], [
        search,
        filterPriority,
        data,
        selectedDate
    ]);
    // Click outside handler for date picker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            const handleClickOutside = {
                "TaskTable.useEffect.handleClickOutside": (event)=>{
                    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                        setShowDatePicker(false);
                    }
                }
            }["TaskTable.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "TaskTable.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["TaskTable.useEffect"];
        }
    }["TaskTable.useEffect"], []);
    // Outside click handler for dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskTable.useEffect": ()=>{
            const handleClickOutside = {
                "TaskTable.useEffect.handleClickOutside": (event)=>{
                    if (menuOpen && !event.target.closest(".menu-dropdown") && !event.target.closest(".menu-button")) {
                        setMenuOpen(null);
                    }
                }
            }["TaskTable.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "TaskTable.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["TaskTable.useEffect"];
        }
    }["TaskTable.useEffect"], [
        menuOpen
    ]);
    // Row selection handler
    const handleRowSelect = (id)=>{
        setSelectedRows((prevSelected)=>prevSelected.includes(id) ? prevSelected.filter((rowId)=>rowId !== id) : [
                ...prevSelected,
                id
            ]);
    };
    // Row click handler
    const handleRowClick = (row)=>{
        handleRowSelect(row.id);
    };
    // Select all rows handler
    const handleSelectAll = ()=>{
        setSelectedRows(selectedRows.length === filteredData.length ? [] : filteredData.map((row)=>row.id));
    };
    // Toggle menu with improved positioning logic
    const toggleMenu = (id, e)=>{
        e.stopPropagation();
        if (menuOpen === id) {
            setMenuOpen(null);
            return;
        }
        const button = menuButtonRefs.current[id];
        if (button) {
            const rect = button.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const menuHeight = 160; // Approximate height of the menu
            const menuWidth = 240;
            // Check if there's enough space below
            const spaceBelow = windowHeight - rect.bottom;
            const showAbove = spaceBelow < menuHeight;
            // Determine top position
            let topPosition;
            if (showAbove) {
                // Position above the button
                topPosition = rect.top - menuHeight + window.scrollY;
            } else {
                // Position below the button
                topPosition = rect.top + window.scrollY;
            }
            // Ensure left position is within viewport
            let leftPosition = rect.left - menuWidth + window.scrollX;
            if (leftPosition < 0) {
                leftPosition = rect.left + window.scrollX;
            }
            setMenuPosition({
                top: topPosition,
                left: leftPosition
            });
        }
        setMenuOpen(id);
    };
    // Dropdown Menu Component
    const DropdownMenu = ({ row })=>{
        const button = menuButtonRefs.current[row.id];
        const windowHeight = window.innerHeight;
        const isNearBottom = button && windowHeight - button.getBoundingClientRect().bottom < 160;
        const isCancelled = row.status === "Cancelled";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute bg-white shadow-2xl rounded-md z-[1000] border border-gray-200 w-60 menu-dropdown font-outfit`,
            style: {
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `../../admin/preventive-interventions/show-details/${row.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                        onClick: ()=>alert(`Viewing ${row.description}`),
                        children: "Show Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                        lineNumber: 521,
                        columnNumber: 8
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 520,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `../../admin/preventive-interventions/edit/${row.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `w-full text-left px-4 py-2 hover:bg-gray-100 ${isCancelled ? "opacity-50 cursor-not-allowed" : ""}`,
                        onClick: ()=>isCancelled ? alert("Cannot edit cancelled interventions") : alert(`Editing ${row.description}`),
                        disabled: isCancelled,
                        children: "Edit"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 540,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `w-full text-left px-4 py-2 hover:bg-gray-100 ${isCancelled ? "opacity-50 cursor-not-allowed" : ""}`,
                    onClick: ()=>{
                        if (isCancelled) {
                            alert("This intervention is already cancelled");
                            return;
                        }
                        setSelectedRows([
                            row.id
                        ]);
                        setCancelModalOpen(true);
                    },
                    disabled: isCancelled,
                    children: "Cancel Intervention"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 541,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 555,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
            lineNumber: 513,
            columnNumber: 7
        }, this), document.body);
    };
    // Assignee cell with stacked avatars and dropdown functionality
    const AssigneeCell = ({ row })=>{
        _s2();
        const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const cellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        // Handle click outside to close dropdown
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "TaskTable.AssigneeCell.useEffect": ()=>{
                const handleClickOutside = {
                    "TaskTable.AssigneeCell.useEffect.handleClickOutside": (event)=>{
                        if (cellRef.current && !cellRef.current.contains(event.target)) {
                            setShowDropdown(false);
                        }
                    }
                }["TaskTable.AssigneeCell.useEffect.handleClickOutside"];
                document.addEventListener("mousedown", handleClickOutside);
                return ({
                    "TaskTable.AssigneeCell.useEffect": ()=>{
                        document.removeEventListener("mousedown", handleClickOutside);
                    }
                })["TaskTable.AssigneeCell.useEffect"];
            }
        }["TaskTable.AssigneeCell.useEffect"], []);
        // If there are no assignees
        if (!row.assignees || row.assignees.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-outfit",
                children: "N/A"
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 582,
                columnNumber: 14
            }, this);
        }
        // Get the count of assignees
        const assigneeCount = row.assignees.length;
        // Limit the displayed avatars to 3 (or however many you want to show)
        const displayLimit = 3;
        const displayedAssignees = row.assignees.slice(0, displayLimit);
        const remainingCount = Math.max(0, assigneeCount - displayLimit);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cellRef,
            className: "relative cursor-pointer z-0 font-outfit",
            onClick: (e)=>{
                e.stopPropagation(); // Prevent row selection
                setShowDropdown(!showDropdown);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex -space-x-2 mr-2",
                            children: [
                                displayedAssignees.map((assignee, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: assignee.avatar,
                                        alt: assignee.name,
                                        className: "w-8 h-8 z-0 rounded-full border-2 border-white object-cover",
                                        style: {
                                            zIndex: displayLimit - index
                                        }
                                    }, index, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this)),
                                remainingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600",
                                    style: {
                                        zIndex: 0
                                    },
                                    children: [
                                        "+",
                                        remainingCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 603,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: `ml-1 w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`,
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 629,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 620,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 601,
                    columnNumber: 9
                }, this),
                showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-50 bg-white shadow-lg rounded p-2 border border-gray-200 w-48 mt-1 left-0 font-outfit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold text-sm mb-1",
                            children: "Assigned Technicians:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 640,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "text-sm",
                            children: row.assignees.map((assignee, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "py-1 border-b border-gray-100 last:border-0 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: assignee.avatar,
                                            alt: assignee.name,
                                            className: "w-6 h-6 rounded-full mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 647,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: assignee.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 652,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 643,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 641,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 639,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
            lineNumber: 593,
            columnNumber: 7
        }, this);
    };
    _s2(AssigneeCell, "+WOcIjn2hqx2rwxSNaMmU9Z7wIE=");
    // Columns definition
    const columns = [
        {
            name: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                onChange: handleSelectAll,
                checked: selectedRows.length === filteredData.length && filteredData.length > 0
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 666,
                columnNumber: 9
            }, this),
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: selectedRows.includes(row.id),
                    onChange: (e)=>{
                        e.stopPropagation(); // Prevent row click event
                        handleRowSelect(row.id);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 676,
                    columnNumber: 9
                }, this),
            width: "50px"
        },
        {
            name: "Date",
            selector: (row)=>row.dateTime,
            sortable: true
        },
        {
            name: "Description",
            selector: (row)=>row.description,
            sortable: true
        },
        {
            name: "Planned At",
            cell: (row)=>{
                const plannedDate = row.plannedAt ? formatDate(row.plannedAt) : "Not scheduled";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `flex items-center font-outfit`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `mr-2 w-2 h-2 bg-blue-500 rounded-full`
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 704,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black",
                            children: plannedDate
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 705,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 703,
                    columnNumber: 11
                }, this);
            },
            sortable: true,
            sortFunction: (rowA, rowB)=>{
                if (!rowA.plannedAt && !rowB.plannedAt) return 0;
                if (!rowA.plannedAt) return 1; // Place non-scheduled items at the end in ascending order
                if (!rowB.plannedAt) return -1;
                const dateA = new Date(rowA.plannedAt);
                const dateB = new Date(rowB.plannedAt);
                return dateA.getTime() - dateB.getTime();
            }
        },
        {
            name: "Priority",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-1 rounded-full text-xs ${getPriorityColor(row.priority)} font-outfit`,
                    children: row.priority
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 724,
                    columnNumber: 9
                }, this),
            sortable: true
        },
        {
            name: "Assignee",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssigneeCell, {
                    row: row
                }, void 0, false, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 734,
                    columnNumber: 22
                }, this),
            sortable: false
        },
        {
            name: "Location",
            selector: (row)=>row.location,
            sortable: true
        },
        {
            name: "",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 rounded-full",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>menuButtonRefs.current[row.id] = el,
                            className: `cursor-pointer p-1 rounded-full ${menuOpen === row.id ? "bg-[#C9C9C9] opacity-85" : ""} menu-button`,
                            onClick: (e)=>toggleMenu(row.id, e),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {}, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 753,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 746,
                            columnNumber: 11
                        }, this),
                        menuOpen === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                            row: row
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 755,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 745,
                    columnNumber: 9
                }, this),
            width: "80px"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative font-outfit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 flex flex-row items-center justify-between gap-4 h-[74px] w-full border-t border-b border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row w-auto gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[285px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute mb-0.5 right-2 bottom-[3px] w-[20px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 767,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "border p-4 rounded-[10px] h-[31px] w-[285px] outline-none bg-white font-outfit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 768,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 766,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mr-4 font-outfit",
                                ref: datePickerRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `flex items-center border border-gray-300 rounded-md px-3 py-2 ${selectedDate ? "bg-black text-white" : "bg-gray-200"} h-[31px] cursor-pointer`,
                                        onClick: ()=>setShowDatePicker(!showDatePicker),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: getDateLabel()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                                lineNumber: 783,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                                lineNumber: 784,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 779,
                                        columnNumber: 13
                                    }, this),
                                    selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            resetDateFilter();
                                        },
                                        className: "absolute -right-1 -top-1 w-5 h-5 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs",
                                        title: "Clear date filter",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 797,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 789,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 778,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setFilterPriority("All");
                                        },
                                        className: `flex items-center px-3 rounded-[7px] ${filterPriority === "All" ? "bg-black text-white" : "bg-gray-200"} text-sm cursor-pointer`,
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 804,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        "High",
                                        "Medium",
                                        "Low"
                                    ].map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilterPriority(priority === filterPriority ? "All" : priority),
                                            className: ` text-sm font-outfit px-4 rounded-md ${filterPriority === priority ? "bg-black text-white" : "bg-gray-200"} cursor-pointer`,
                                            children: priority
                                        }, priority, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 819,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                        lineNumber: 765,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "../../admin/preventive-interventions/add-task",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#0060B4] text-white rounded-lg px-5 py-1.5 flex items-center justify-around font-outfit font-normal cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: " + Add Task"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 835,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 834,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 764,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-container relative overflow-x-auto",
                children: [
                    selectedRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "Clickables h-[50px] bg-gray-100 absolute top-0 left-8 right-0 z-40 flex flex-row items-center px-4 gap-6 text-sm font-outfit text-[#757575]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cursor-pointer",
                                onClick: ()=>setCancelModalOpen(true),
                                children: "Cancel PI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 850,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `cursor-pointer ${hasSelectedCancelledItems() ? "opacity-50 cursor-not-allowed" : ""}`,
                                onClick: ()=>{
                                    if (hasSelectedCancelledItems()) {
                                        alert("Cannot change priority of cancelled interventions.");
                                    } else {
                                        setPriorityModalOpen(true);
                                    }
                                },
                                disabled: hasSelectedCancelledItems(),
                                children: "Set Priority"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                lineNumber: 851,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                        lineNumber: 843,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$table$2d$component$2f$dist$2f$index$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        columns: columns,
                        data: filteredData,
                        conditionalRowStyles: [
                            {
                                when: (row)=>row.id === firstVisibleRowId,
                                style: {
                                    borderTopLeftRadius: windowSize.width < 768 ? "0px" : '40px',
                                    borderTopRightRadius: windowSize.width < 768 ? "0px" : '40px'
                                }
                            }
                        ],
                        highlightOnHover: true,
                        progressPending: loading,
                        onRowClicked: handleRowClick,
                        selectableRowsNoSelectAll: true,
                        pointerOnHover: true,
                        responsive: true,
                        fixedHeader: true,
                        fixedHeaderScrollHeight: "calc(100vh - 250px)",
                        customStyles: {
                            table: {
                                style: {
                                    minWidth: '100%',
                                    marginTop: "0px",
                                    backgroundColor: "#f3f4f6",
                                    padding: windowSize.width < 768 ? "0px 0px" : "0px 8px",
                                    fontFamily: "Outfit, sans-serif"
                                }
                            },
                            tableWrapper: {
                                style: {
                                    width: '100%',
                                    display: 'block'
                                }
                            },
                            responsiveWrapper: {
                                style: {
                                    width: '100%',
                                    minWidth: '100%'
                                }
                            },
                            headRow: {
                                style: {
                                    minHeight: windowSize.width < 768 ? "10px" : "30px",
                                    paddingLeft: windowSize.width < 768 ? '5px' : "0x",
                                    // marginBottom:"10px", 
                                    fontSize: windowSize.width < 768 ? "0.85rem" : "1rem",
                                    width: '100%',
                                    fontFamily: "Outfit, sans-serif"
                                }
                            },
                            headCells: {
                                style: {
                                    backgroundColor: "#f3f4f6",
                                    fontFamily: "Outfit, sans-serif",
                                    color: "#757575",
                                    height: windowSize.width < 768 ? "40px" : "50px",
                                    padding: windowSize.width < 768 ? "0px 5px" : "0px 10px",
                                    fontSize: windowSize.width < 768 ? "0.75rem" : "0.875rem"
                                }
                            },
                            rows: {
                                style: {
                                    margin: "0px",
                                    minHeight: windowSize.width < 768 ? "70px" : "70px",
                                    fontSize: windowSize.width < 768 ? "0.75rem" : "0.875rem",
                                    width: '100%',
                                    paddingRight: '10px',
                                    fontFamily: "Outfit, sans-serif"
                                }
                            },
                            cells: {
                                style: {
                                    padding: windowSize.width < 768 ? "0px 10px" : "0px 10px",
                                    fontFamily: "Outfit, sans-serif"
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 841,
                columnNumber: 7
            }, this),
            showDatePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: datePickerRef,
                className: "fixed inset-0 z-50 flex items-start justify-center pt-32 font-outfit",
                style: {
                    backgroundColor: 'rgba(0,0,0,0.3)'
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        setShowDatePicker(false);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-lg rounded-md border border-gray-200 p-6 w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-base font-medium text-gray-800 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 20,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 968,
                                            columnNumber: 17
                                        }, this),
                                        "Enter Date Filter"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 967,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDatePicker(false),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 975,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 971,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 966,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: dateInput,
                                    onChange: handleDateInputChange,
                                    className: "border border-gray-300 rounded-md px-4 py-3 w-full text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-outfit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 980,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: "Format: YYYY-MM-DD"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 986,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 979,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-gray-200 text-gray-700 px-5 py-2.5 rounded text-sm hover:bg-gray-300 transition-colors font-outfit",
                                    onClick: handleClearDate,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 992,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#0060B4] text-white px-5 py-2.5 rounded text-sm hover:bg-blue-700 transition-colors font-outfit",
                                    onClick: handleDateInputSubmit,
                                    children: "Apply Filter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 999,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 991,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 965,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 953,
                columnNumber: 9
            }, this),
            priorityModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999] font-outfit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "Change Priority"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1015,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                "High",
                                "Medium",
                                "Low"
                            ].map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePriorityChange(priority),
                                    className: "w-full p-3 text-left hover:bg-gray-100 rounded border-gray-100 font-outfit",
                                    children: priority
                                }, priority, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1018,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1016,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-end space-x-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPriorityModalOpen(false),
                                    className: "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 font-outfit",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1028,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPriorityModalOpen(false),
                                    className: "px-4 py-2 bg-[#0060B4] text-white rounded hover:bg-blue-700 font-outfit",
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1034,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1027,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 1014,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 1013,
                columnNumber: 11
            }, this), document.body),
            cancelModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999] font-outfit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg shadow-xl w-96 mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-2",
                            children: [
                                "Cancel Intervention",
                                selectedRows.length > 1 ? 's' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1051,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-4",
                            children: [
                                "Are you sure you want to cancel ",
                                selectedRows.length,
                                " selected intervention",
                                selectedRows.length > 1 ? 's' : '',
                                "? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1052,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-end gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCancelModalOpen(false),
                                    className: "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 order-2 sm:order-1 font-outfit",
                                    disabled: cancellingInterventions,
                                    children: "No, Keep"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1057,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancelInterventions,
                                    className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 order-1 sm:order-2 font-outfit",
                                    disabled: cancellingInterventions,
                                    children: cancellingInterventions ? "Cancelling..." : `Yes, Cancel ${selectedRows.length > 1 ? 'All' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1064,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1056,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 1050,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 1049,
                columnNumber: 11
            }, this), document.body),
            assignWorkerModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999] font-outfit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg shadow-xl w-96 max-h-[80vh] overflow-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "Assign Workers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1085,
                            columnNumber: 15
                        }, this),
                        hasSelectedCancelledItems() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-red-500 mb-4",
                            children: "Cannot assign workers to cancelled interventions. Please deselect them to proceed."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1087,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mb-4",
                                    children: "Select multiple workers to assign to selected tasks"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1092,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 1097,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search workers...",
                                            className: "w-full p-2 pl-8 border rounded font-outfit",
                                            value: workerSearch,
                                            onChange: (e)=>setWorkerSearch(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 1101,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1096,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 max-h-60 overflow-y-auto",
                                    children: loadingWorkers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-4",
                                        children: "Loading workers..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 1112,
                                        columnNumber: 23
                                    }, this) : filteredWorkers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-4",
                                        children: "No workers found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                        lineNumber: 1114,
                                        columnNumber: 23
                                    }, this) : filteredWorkers.map((worker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center p-2 rounded cursor-pointer ${selectedWorkers.includes(worker.id) ? "bg-blue-50" : "hover:bg-gray-50"}`,
                                            onClick: ()=>toggleWorkerSelection(worker.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-5 h-5 mr-2 flex items-center justify-center rounded border ${selectedWorkers.includes(worker.id) ? "border-blue-500 bg-blue-500" : "border-gray-300"}`,
                                                    children: selectedWorkers.includes(worker.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 14,
                                                        color: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                                        lineNumber: 1134,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: worker.avatar,
                                                    alt: worker.name,
                                                    className: "w-6 h-6 rounded-full mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: worker.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                                    lineNumber: 1142,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, worker.id, true, {
                                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                            lineNumber: 1117,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1110,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAssignWorkerModalOpen(false),
                                    className: "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 font-outfit",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1151,
                                    columnNumber: 17
                                }, this),
                                !hasSelectedCancelledItems() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAssignWorkers,
                                    className: `px-4 py-2 rounded text-white font-outfit ${selectedWorkers.length === 0 ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`,
                                    disabled: selectedWorkers.length === 0,
                                    children: [
                                        "Assign",
                                        " ",
                                        selectedWorkers.length > 0 ? `(${selectedWorkers.length})` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                                    lineNumber: 1158,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                            lineNumber: 1150,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                    lineNumber: 1084,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
                lineNumber: 1083,
                columnNumber: 11
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/intervention-table/interventionTable.jsx",
        lineNumber: 763,
        columnNumber: 5
    }, this);
}
_s(TaskTable, "6P26zAkKJ+8nLAlFiXNEZJ4Q11Q=", true);
_c = TaskTable;
var _c;
__turbopack_context__.k.register(_c, "TaskTable");
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
"[project]/src/app/(main)/admin/preventive-interventions/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InterventionsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/NavBar/Nav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$intervention$2d$table$2d$phone$2f$intervention$2d$table$2d$phone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/intervention-table-phone/intervention-table-phone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$intervention$2d$table$2f$interventionTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/intervention-table/interventionTable.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Images/arrows.svg.mjs { IMAGE => "[project]/public/Images/arrows.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
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
;
;
;
function InterventionsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [interventions, setInterventions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        message: "",
        type: ""
    });
    // Toast notification helper
    const showToast = (message, type = "success")=>{
        setToast({
            visible: true,
            message,
            type
        });
        setTimeout(()=>setToast({
                visible: false,
                message: "",
                type: ""
            }), 3000);
    };
    // Format priority from API format ("HIGH") to display format ("High")
    const formatPriority = (priority)=>{
        if (!priority) return "Medium";
        // Convert to title case (first letter uppercase, rest lowercase)
        return priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase();
    };
    // Format date from ISO to readable format
    const formatDateTime = (dateString)=>{
        if (!dateString) return "";
        const date = new Date(dateString);
        const options = {
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options).replace(',', ', ');
    };
    // Fetch interventions from API
    const fetchInterventions = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3001/api/intervention/planned", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            if (!response.ok) {
                if (response.status === 401) {
                    showToast('Session expired. Please login again.', 'error');
                    setTimeout(()=>router.push('/login'), 2000);
                    return;
                }
                throw new Error(`Failed to fetch interventions: ${response.status}`);
            }
            const result = await response.json();
            console.log("Raw interventions data:", result);
            if (result.success && Array.isArray(result.data)) {
                // Transform API data to match component's expected format
                const transformedData = result.data.map((intervention)=>({
                        id: intervention.id,
                        dateTime: formatDateTime(intervention.createdAt),
                        location: intervention.location?.name || "Unknown",
                        description: intervention.description || "",
                        status: intervention.status || "PENDING",
                        priority: formatPriority(intervention.priority),
                        plannedAt: intervention.plannedAt,
                        type: intervention.type,
                        equipmentId: intervention.equipmentId,
                        equipmentName: intervention.equipment?.inventoryCode || "Unknown equipment",
                        // Transform assignees
                        assignees: Array.isArray(intervention.assignees) ? intervention.assignees.map((assignee)=>({
                                id: assignee.personId,
                                name: `${assignee.person?.firstName || ""} ${assignee.person?.lastName || ""}`.trim() || "Unknown",
                                // Use a default avatar if none provided
                                avatar: assignee.person?.avatarUrl || "https://randomuser.me/api/portraits/men/1.jpg"
                            })) : []
                    }));
                setInterventions(transformedData);
                console.log("Transformed interventions:", transformedData);
            } else {
                console.error("Invalid API response format:", result);
                showToast('Failed to load interventions data', 'error');
            }
        } catch (error) {
            console.error("Error fetching interventions:", error);
            showToast(`Error: ${error.message}`, 'error');
        } finally{
            setLoading(false);
        }
    };
    // Fetch technicians from API
    const [technicians, setTechnicians] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchTechnicians = async ()=>{
        try {
            const response = await fetch("http://localhost:3001/api/technicians", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                }
            });
            if (!response.ok) {
                if (response.status === 401) {
                    // Auth error handled by fetchInterventions
                    return;
                }
                throw new Error(`Failed to fetch technicians: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && Array.isArray(result.data)) {
                const formattedTechnicians = result.data.map((tech)=>({
                        id: tech.id,
                        name: `${tech.firstName || ""} ${tech.lastName || ""}`.trim(),
                        avatar: tech.avatarUrl || "https://randomuser.me/api/portraits/men/1.jpg"
                    }));
                setTechnicians(formattedTechnicians);
            } else {
                // Fallback to example data if API response is invalid
                setTechnicians([
                    {
                        id: 1,
                        name: "John Doe",
                        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
                    },
                    {
                        id: 2,
                        name: "Jane Smith",
                        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching technicians:", error);
            // Fallback to example data on error
            setTechnicians([
                {
                    id: 1,
                    name: "John Doe",
                    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
                },
                {
                    id: 2,
                    name: "Jane Smith",
                    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
                }
            ]);
        }
    };
    // Fetch data when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsPage.useEffect": ()=>{
            fetchInterventions();
            fetchTechnicians();
        }
    }["InterventionsPage.useEffect"], []);
    // API integration for handlers
    const handleStatusChange = async (ids, status)=>{
        try {
            // Show loading toast
            showToast('Updating status...', 'info');
            // Perform updates one by one
            for (const id of ids){
                const response = await fetch(`http://localhost:3001/api/intervention/${id}/status`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        status: status.toUpperCase()
                    })
                });
                if (!response.ok) {
                    throw new Error(`Failed to update status for intervention ${id}: ${response.status}`);
                }
            }
            // Update local state to reflect changes immediately
            setInterventions((prev)=>prev.map((intervention)=>ids.includes(intervention.id) ? {
                        ...intervention,
                        status: status.toUpperCase()
                    } : intervention));
            showToast(`Status updated to ${status}`, 'success');
            return true;
        } catch (error) {
            console.error("Error updating status:", error);
            showToast(`Failed to update status: ${error.message}`, 'error');
            return false;
        }
    };
    const handlePriorityChange = async (ids, priority)=>{
        try {
            showToast('Updating priority...', 'info');
            for (const id of ids){
                const response = await fetch(`http://localhost:3001/api/intervention/${id}/priority`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        priority: priority.toUpperCase()
                    })
                });
                if (!response.ok) {
                    throw new Error(`Failed to update priority for intervention ${id}: ${response.status}`);
                }
            }
            // Update local state
            setInterventions((prev)=>prev.map((intervention)=>ids.includes(intervention.id) ? {
                        ...intervention,
                        priority: formatPriority(priority.toUpperCase())
                    } : intervention));
            showToast(`Priority updated to ${priority}`, 'success');
            return true;
        } catch (error) {
            console.error("Error updating priority:", error);
            showToast(`Failed to update priority: ${error.message}`, 'error');
            return false;
        }
    };
    const handleAssignWorkers = async (interventionIds, technicianIds)=>{
        try {
            showToast('Assigning technicians...', 'info');
            for (const interventionId of interventionIds){
                const response = await fetch(`http://localhost:3001/api/intervention/${interventionId}/assignees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        personIds: technicianIds
                    })
                });
                if (!response.ok) {
                    throw new Error(`Failed to assign technicians to intervention ${interventionId}: ${response.status}`);
                }
            }
            // Update local state with the newly assigned technicians
            const assignedTechs = technicians.filter((tech)=>technicianIds.includes(tech.id));
            setInterventions((prev)=>prev.map((intervention)=>{
                    if (interventionIds.includes(intervention.id)) {
                        return {
                            ...intervention,
                            assignees: [
                                ...intervention.assignees.filter((a)=>!technicianIds.includes(a.id)),
                                ...assignedTechs.map((tech)=>({
                                        id: tech.id,
                                        name: tech.name,
                                        avatar: tech.avatar
                                    }))
                            ]
                        };
                    }
                    return intervention;
                }));
            showToast('Technicians assigned successfully', 'success');
            return true;
        } catch (error) {
            console.error("Error assigning technicians:", error);
            showToast(`Failed to assign technicians: ${error.message}`, 'error');
            return false;
        }
    };
    const handleCancelIntervention = async (ids)=>{
        try {
            showToast('Cancelling interventions...', 'info');
            for (const id of ids){
                const response = await fetch(`http://localhost:3001/api/intervention/${id}/cancel`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to cancel intervention ${id}: ${response.status}`);
                }
            }
            // Update local state
            setInterventions((prev)=>prev.map((intervention)=>ids.includes(intervention.id) ? {
                        ...intervention,
                        status: "CANCELLED"
                    } : intervention));
            showToast('Interventions cancelled successfully', 'success');
            return true;
        } catch (error) {
            console.error("Error cancelling interventions:", error);
            showToast(`Failed to cancel interventions: ${error.message}`, 'error');
            return false;
        }
    };
    const handleDeleteIntervention = async (ids)=>{
        try {
            showToast('Deleting interventions...', 'info');
            for (const id of ids){
                const response = await fetch(`http://localhost:3001/api/intervention/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete intervention ${id}: ${response.status}`);
                }
            }
            // Remove deleted interventions from local state
            setInterventions((prev)=>prev.filter((intervention)=>!ids.includes(intervention.id)));
            showToast('Interventions deleted successfully', 'success');
            return true;
        } catch (error) {
            console.error("Error deleting interventions:", error);
            showToast(`Failed to delete interventions: ${error.message}`, 'error');
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterventionsPage.useEffect": ()=>{
            // Check if we're on the client side
            if ("TURBOPACK compile-time truthy", 1) {
                // Set initial state
                setIsMobile(window.innerWidth < 640);
                // Add resize listener
                const handleResize = {
                    "InterventionsPage.useEffect.handleResize": ()=>{
                        setIsMobile(window.innerWidth < 640);
                    }
                }["InterventionsPage.useEffect.handleResize"];
                window.addEventListener("resize", handleResize);
                // Clean up
                return ({
                    "InterventionsPage.useEffect": ()=>window.removeEventListener("resize", handleResize)
                })["InterventionsPage.useEffect"];
            }
        }
    }["InterventionsPage.useEffect"], []);
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
                    fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                    lineNumber: 394,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                lineNumber: 393,
                columnNumber: 13
            }, this),
            toast.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center ${toast.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : toast.type === "error" ? "bg-red-50 text-red-800 border border-red-200" : toast.type === "warning" ? "bg-yellow-50 text-yellow-800 border border-yellow-200" : "bg-blue-50 text-blue-800 border border-blue-200"}`,
                children: [
                    toast.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 412,
                        columnNumber: 25
                    }, this),
                    toast.type === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 415,
                        columnNumber: 25
                    }, this),
                    toast.type === "warning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 418,
                        columnNumber: 25
                    }, this),
                    toast.type === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                        className: "h-5 w-5 mr-2 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 421,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 423,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                lineNumber: 400,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full ${isMobile ? "mt-10" : "ml-[129px]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: " p-6 font-semibold text-[26.07px]",
                            children: "Preventive Interventions (PI)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                            lineNumber: 429,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 428,
                        columnNumber: 17
                    }, this),
                    !isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$intervention$2d$table$2f$interventionTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            interventions: interventions,
                            technicians: technicians,
                            onStatusChange: handleStatusChange,
                            onPriorityChange: handlePriorityChange,
                            onAssignWorkers: handleAssignWorkers,
                            onCancelIntervention: handleCancelIntervention,
                            onDeleteIntervention: handleDeleteIntervention,
                            addTaskLink: "/admin/new-intervention",
                            loadingData: loading
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                            lineNumber: 437,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 436,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$intervention$2d$table$2d$phone$2f$intervention$2d$table$2d$phone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            interventions: interventions,
                            technicians: technicians,
                            onStatusChange: handleStatusChange,
                            onPriorityChange: handlePriorityChange,
                            onAssignWorkers: handleAssignWorkers,
                            onCancelIntervention: handleCancelIntervention,
                            onDeleteIntervention: handleDeleteIntervention,
                            addTaskLink: "/admin/new-intervention",
                            loadingData: loading
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                            lineNumber: 451,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                        lineNumber: 450,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                lineNumber: 427,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-0 p-5 text-white rounded-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-[#474747] px-24 py-1 rounded-xl",
                    children: "Download as pdf"
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                    lineNumber: 467,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
                lineNumber: 466,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/admin/preventive-interventions/page.jsx",
        lineNumber: 392,
        columnNumber: 9
    }, this);
}
_s(InterventionsPage, "GYAZ710vPKw/vNXYGvq23P017TA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InterventionsPage;
var _c;
__turbopack_context__.k.register(_c, "InterventionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_745ab8e6._.js.map