module.exports = {

"[project]/src/app/components/popups/WorkOrderDonePopup.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const WorkOrderDonePopup = ({ open, onClose, onSubmit, actions, setActions, partsUsed, setPartsUsed, notes, setNotes })=>{
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-12 w-full max-w-md shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6 text-[#009FE3]",
                    children: "Work Order Done !"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        onSubmit();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-1 font-medium",
                                    children: [
                                        "Actions",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                            lineNumber: 28,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: actions,
                                    onChange: (e)=>setActions(e.target.value),
                                    className: "w-full border rounded-md p-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-1 font-medium",
                                    children: "Parts Used"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: partsUsed,
                                    onChange: (e)=>setPartsUsed(e.target.value),
                                    className: "w-full border rounded-md p-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-1 font-medium",
                                    children: "Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value),
                                    className: "w-full border rounded-md p-2",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-1 rounded-full border border-gray-400 bg-white text-gray-700",
                                    children: "Not yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-1 rounded-full bg-[#0060B4] text-white",
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/popups/WorkOrderDonePopup.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = WorkOrderDonePopup;
}}),
"[project]/src/app/components/popups/WorkOrderPausePopup.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
const WorkOrderPausePopup = ({ open, onClose, onSubmit, details, setDetails, isSubmitting = false, isMobile = false })=>{
    if (!open) return null;
    const popupContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-white ${isMobile ? 'rounded-lg p-4' : 'rounded-2xl p-8'} w-full max-w-md shadow-lg`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-[#009FE3]",
                            children: "Pause Work Order"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        onSubmit();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-1 font-medium",
                                    children: [
                                        "Pause reason",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                                            lineNumber: 37,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    required: true,
                                    value: details,
                                    onChange: (e)=>setDetails(e.target.value),
                                    className: "w-full border rounded-md p-2 min-h-[80px]",
                                    placeholder: "Please provide details on why this work order is being paused..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-2 rounded-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 rounded-full bg-[#0060B4] text-white hover:bg-[#004d91]",
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Processing..." : "Confirm Pause"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/popups/WorkOrderPausePopup.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
    // Use createPortal for mobile view
    return typeof document !== 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(popupContent, document.body) : null;
};
const __TURBOPACK__default__export__ = WorkOrderPausePopup;
}}),
"[project]/src/app/components/work-orders-table/card.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderDonePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/popups/WorkOrderDonePopup.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderPausePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/popups/WorkOrderPausePopup.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const formatTime = (seconds)=>{
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor(seconds % 3600 / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
};
const Card = ({ workOrder, isFirstCard, isSelected, onSelect, onBeginTask, onCompleteTask, onPauseTask, onResumeTask, onPostpone, menuOpen, toggleMenu, menuButtonRef, menuPosition, getStatusColor, getPriorityColor, AssigneeDropdown, DropdownMenu, handleShowDetails, isSubmitting = false })=>{
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localStatus, setLocalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(workOrder.status.toLowerCase());
    const [showDonePopup, setShowDonePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPausePopup, setShowPausePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Timer state
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTimerRunning, setIsTimerRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Popup form state
    const [actions, setActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [partsUsed, setPartsUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pauseReason, setPauseReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationControls"])();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Timer effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isTimerRunning) {
            intervalRef.current = setInterval(()=>{
                setTimer((prev)=>prev + 1);
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current);
    }, [
        isTimerRunning
    ]);
    // Reset timer if workOrder changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalStatus(workOrder.status.toLowerCase());
        // If work order is in progress, start timer
        if (workOrder.status.toLowerCase() === "in progress") {
            setIsTimerRunning(true);
        } else {
            setIsTimerRunning(false);
        }
    }, [
        workOrder.id,
        workOrder.status
    ]);
    const toggleExpand = ()=>{
        setIsExpanded(!isExpanded);
        controls.start({
            height: isExpanded ? 0 : 'auto',
            opacity: isExpanded ? 0 : 1,
            transition: {
                duration: 0.3
            }
        });
    };
    const handleCheckboxChange = (e)=>{
        e.stopPropagation();
        if (onSelect) {
            onSelect(!isSelected);
        }
    };
    // Button logic
    const renderActionButtons = ()=>{
        if (localStatus === "pending") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#6B7280] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-gray-600 transition-colors",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleShowDetails(workOrder.id);
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#EA8B00] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-[#d07a00] transition-colors",
                        onClick: ()=>{
                            setLocalStatus("postponed");
                            if (onPostpone) onPostpone(workOrder.id);
                        },
                        disabled: isSubmitting,
                        children: "Postpone"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#0060B4] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-[#004d91] transition-colors",
                        onClick: ()=>{
                            setLocalStatus("in progress");
                            setTimer(0);
                            setIsTimerRunning(true);
                            if (onBeginTask) onBeginTask(workOrder.id);
                        },
                        disabled: isSubmitting,
                        children: "Begin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 97,
                columnNumber: 9
            }, this);
        } else if (localStatus === "paused") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#6B7280] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-gray-600 transition-colors",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleShowDetails(workOrder.id);
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#0060B4] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-[#004d91] transition-colors",
                        onClick: ()=>{
                            setLocalStatus("in progress");
                            setIsTimerRunning(true);
                            if (onResumeTask) onResumeTask(workOrder.id);
                        },
                        disabled: isSubmitting,
                        children: "Resume"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 133,
                columnNumber: 9
            }, this);
        } else if (localStatus === "in progress") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#6B7280] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-gray-600 transition-colors",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleShowDetails(workOrder.id);
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#EA8B00] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-[#d07a00] transition-colors",
                        onClick: handlePauseClick,
                        disabled: isSubmitting,
                        children: "Pause"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#1DA83B] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-[#198a31] transition-colors",
                        onClick: ()=>setShowDonePopup(true),
                        disabled: isSubmitting,
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 158,
                columnNumber: 9
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-[#6B7280] text-white px-4 py-1 rounded-[13.07px] text-sm w-[145px] h-[32.67px] hover:bg-gray-600 transition-colors",
                    onClick: (e)=>{
                        e.stopPropagation();
                        handleShowDetails(workOrder.id);
                    },
                    children: "Details"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 186,
                columnNumber: 9
            }, this);
        }
    };
    // Handle Done popup submit
    const handleDoneSubmit = ()=>{
        if (!actions.trim()) {
            alert("Please provide actions taken");
            return;
        }
        setShowDonePopup(false);
        setLocalStatus("complete");
        setIsTimerRunning(false);
        if (onCompleteTask) {
            onCompleteTask(workOrder.id, {
                action: actions,
                partsUsed,
                notes
            });
        }
        setActions("");
        setPartsUsed("");
        setNotes("");
    };
    const handlePauseClick = (e)=>{
        e.stopPropagation(); // Prevent card expansion
        setShowPausePopup(true);
    };
    // Handle Pause popup submit
    const handlePauseSubmit = ()=>{
        if (!pauseReason.trim()) {
            alert("Please provide a reason for pausing");
            return;
        }
        setShowPausePopup(false);
        // Only change status after confirmation
        setLocalStatus("paused");
        // Stop the timer after confirmation
        setIsTimerRunning(false);
        if (onPauseTask) {
            onPauseTask(workOrder.id, {
                reason: pauseReason
            });
        }
        setPauseReason("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-sm flex flex-col w-full border-b border-gray-200 bg-white ${isFirstCard ? "rounded-t-[40px]" : ""}`,
        ref: cardRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center py-4 px-4 cursor-pointer hover:bg-gray-50 ${isFirstCard ? "rounded-t-[40px]" : ""}`,
                onClick: toggleExpand,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-8 flex-shrink-0",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            className: "w-4 h-4 accent-blue-600 cursor-pointer",
                            checked: isSelected,
                            onChange: handleCheckboxChange
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 px-6 text-gray-700",
                        children: workOrder.date
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow px-6 text-gray-700",
                        children: workOrder.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-32  text-center whitespace-nowrap text-gray-500 flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2 h-2 rounded-full mr-2 ${getStatusColor(localStatus)}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            localStatus.charAt(0).toUpperCase() + localStatus.slice(1)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-28 px-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-xs ${getPriorityColor(workOrder.priority)}`,
                            children: workOrder.priority
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-32 px-6 flex justify-center",
                        children: AssigneeDropdown
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-28 px-6 text-center",
                        children: workOrder.location
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 px-6",
                        children: workOrder.lastUpdated
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 px-2 relative",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            localStatus !== "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: menuButtonRef,
                                className: `p-1 rounded-full hover:bg-gray-200 ${menuOpen ? "bg-gray-200" : ""}`,
                                onClick: (e)=>toggleMenu(e),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            menuOpen && DropdownMenu
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: controls,
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex justify-end",
                    children: [
                        localStatus === "in progress" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-gray-500 mr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    size: 16,
                                    className: "mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: formatTime(timer)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        renderActionButtons()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderDonePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showDonePopup,
                onClose: ()=>setShowDonePopup(false),
                onSubmit: handleDoneSubmit,
                actions: actions,
                setActions: setActions,
                partsUsed: partsUsed,
                setPartsUsed: setPartsUsed,
                notes: notes,
                setNotes: setNotes,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderPausePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showPausePopup,
                onClose: ()=>setShowPausePopup(false),
                onSubmit: handlePauseSubmit,
                details: pauseReason,
                setDetails: setPauseReason,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card.jsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/work-orders-table/card.jsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Card;
}}),
"[project]/src/app/components/work-orders-table/card-phone.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CardPhone)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderPausePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/popups/WorkOrderPausePopup.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderDonePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/popups/WorkOrderDonePopup.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function CardPhone({ workOrder, onBeginTask, onCompleteTask, onPauseTask, onResumeTask, onShowDetails, isSubmitting = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Local state
    const [localStatus, setLocalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(workOrder.status.toLowerCase());
    const [showDonePopup, setShowDonePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPausePopup, setShowPausePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pauseReason, setPauseReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Timer state
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTimerRunning, setIsTimerRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Popup form state
    const [actions, setActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [partsUsed, setPartsUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: '',
        type: ''
    });
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationControls"])();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Timer effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isTimerRunning) {
            intervalRef.current = setInterval(()=>{
                setTimer((prev)=>prev + 1);
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current);
    }, [
        isTimerRunning
    ]);
    // Reset timer if workOrder changes (optional)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalStatus(workOrder.status.toLowerCase());
        // If work order is in progress, start timer
        if (workOrder.status.toLowerCase() === "in progress") {
            setIsTimerRunning(true);
        } else {
            setIsTimerRunning(false);
        }
    }, [
        workOrder.id,
        workOrder.status
    ]);
    // Show a toast notification
    const showToast = (message, type = 'success')=>{
        setToastMessage({
            show: true,
            message,
            type
        });
        setTimeout(()=>setToastMessage({
                show: false,
                message: '',
                type: ''
            }), 3000);
    };
    // Format timer function
    const formatTimer = ()=>{
        const hours = Math.floor(timer / 3600).toString().padStart(2, "0");
        const minutes = Math.floor(timer % 3600 / 60).toString().padStart(2, "0");
        const seconds = (timer % 60).toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };
    const handleBegin = (e)=>{
        e && e.stopPropagation();
        setLocalStatus("in progress");
        setTimer(0);
        setIsTimerRunning(true);
        if (onBeginTask) {
            try {
                onBeginTask(workOrder.id);
                showToast('Task started successfully!');
            } catch (error) {
                console.error('Error starting task:', error);
                showToast('Failed to start task. Please try again.', 'error');
            }
        }
    };
    const handlePause = (e)=>{
        e && e.stopPropagation();
        // Open the pause popup instead of immediately changing status
        setShowPausePopup(true);
    };
    const handlePauseSubmit = ()=>{
        // Close the popup
        setShowPausePopup(false);
        if (!pauseReason.trim()) {
            showToast('Please provide a reason for pausing the task', 'warning');
            return;
        }
        try {
            // Now apply the changes
            setLocalStatus("paused");
            setIsTimerRunning(false);
            // Call the parent component's handler with the pause reason
            if (onPauseTask) {
                onPauseTask(workOrder.id, {
                    reason: pauseReason
                });
                showToast('Task paused successfully');
            }
            // Reset the pause reason field
            setPauseReason("");
        } catch (error) {
            console.error('Error pausing task:', error);
            showToast('Failed to pause task. Please try again.', 'error');
        }
    };
    const handleResume = (e)=>{
        e && e.stopPropagation();
        try {
            setLocalStatus("in progress");
            setIsTimerRunning(true);
            if (onResumeTask) {
                onResumeTask(workOrder.id);
                showToast('Task resumed successfully!');
            }
        } catch (error) {
            console.error('Error resuming task:', error);
            showToast('Failed to resume task. Please try again.', 'error');
        }
    };
    const handleDone = (e)=>{
        e && e.stopPropagation();
        setShowDonePopup(true);
    };
    const handleDoneSubmit = ()=>{
        if (!actions.trim()) {
            showToast('Please provide actions taken', 'warning');
            return;
        }
        try {
            setShowDonePopup(false);
            setLocalStatus("complete");
            setIsTimerRunning(false);
            if (onCompleteTask) {
                onCompleteTask(workOrder.id, {
                    action: actions,
                    partsUsed,
                    notes
                });
                showToast('Task completed successfully!');
            }
            setActions("");
            setPartsUsed("");
            setNotes("");
        } catch (error) {
            console.error('Error completing task:', error);
            showToast('Failed to complete task. Please try again.', 'error');
        }
    };
    const handleShowDetails = (e)=>{
        // Prevent default if this is an event
        if (e) e.stopPropagation();
        try {
            // If there's a callback, execute it
            if (onShowDetails) {
                onShowDetails(workOrder.id);
            } else {
                // Otherwise navigate directly (fallback)
                router.push(`/technician/work-order-details/${workOrder.id}`);
            }
        } catch (error) {
            console.error('Error navigating to details:', error);
            showToast('Failed to open details. Please try again.', 'error');
        }
    };
    const renderActionButtons = ()=>{
        if (localStatus === "pending") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#6B7280] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-gray-600 transition-colors",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleShowDetails();
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#0060B4] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-[#004d91] transition-colors",
                        onClick: handleBegin,
                        disabled: isSubmitting,
                        children: "Begin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 201,
                columnNumber: 9
            }, this);
        } else if (localStatus === "paused") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#6B7280] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-gray-600 transition-colors",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleShowDetails();
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#0060B4] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-[#004d91] transition-colors",
                        onClick: handleResume,
                        disabled: isSubmitting,
                        children: "Resume"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 222,
                columnNumber: 9
            }, this);
        } else if (localStatus === "in progress") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#6B7280] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-gray-600 transition-colors",
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleShowDetails();
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#EA8B00] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-[#d07a00] transition-colors",
                        onClick: handlePause,
                        disabled: isSubmitting,
                        children: "Pause"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-[#0060B4] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-[#004d91] transition-colors",
                        onClick: handleDone,
                        disabled: isSubmitting,
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 243,
                columnNumber: 9
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full max-w-[145px] bg-[#6B7280] text-white py-2 px-4 rounded-[13.07px] text-sm hover:bg-gray-600 transition-colors",
                    style: {
                        marginLeft: "auto"
                    },
                    onClick: (e)=>{
                        e.stopPropagation();
                        handleShowDetails();
                    },
                    children: "Details"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 271,
                columnNumber: 9
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "rounded-[15px] overflow-hidden border-[2px] border-solid border-[#BBD6ED] mb-3 bg-white relative",
                ref: cardRef,
                animate: controls,
                onClick: handleShowDetails,
                whileTap: {
                    scale: 0.98
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-start justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#373737] text-base",
                                            children: workOrder.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#0060B4] text-lg font-medium",
                                            children: workOrder.location
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-1 mb-1",
                                            children: [
                                                Array.isArray(workOrder.assignee) && workOrder.assignee.slice(0, 2).map((person, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-medium border border-white",
                                                        children: person.avatar || (person.firstName ? person.firstName.charAt(0) : '?')
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                                        lineNumber: 311,
                                                        columnNumber: 21
                                                    }, this)),
                                                workOrder.assignee && workOrder.assignee.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium border border-white",
                                                    children: [
                                                        "+",
                                                        workOrder.assignee.length - 2
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `px-2 py-0.5 rounded-full text-xs ${workOrder.priority === "High" ? "bg-red-100 text-red-800" : workOrder.priority === "Medium" || workOrder.priority === "Med" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`,
                                            children: workOrder.priority
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#373737] text-sm mb-2 overflow-hidden",
                            style: {
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical"
                            },
                            children: workOrder.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-2 h-2 rounded-full mr-1 ${localStatus === "in progress" ? "bg-green-500" : localStatus === "complete" || localStatus === "completed" ? "bg-gray-500" : localStatus === "pending" ? "bg-yellow-500" : localStatus === "paused" ? "bg-orange-500" : "bg-red-500"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-[#373737] capitalize",
                                    children: localStatus
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                isTimerRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-3 flex items-center text-sm text-[#373737]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "mr-1 h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this),
                                        formatTimer()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                workOrder.timer && !isTimerRunning && localStatus === "in progress" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-3 flex items-center text-sm text-[#373737]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "mr-1 h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this),
                                        workOrder.timer
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        renderActionButtons(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 right-2 bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full opacity-70",
                            children: [
                                "#",
                                workOrder.id
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderDonePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showDonePopup,
                onClose: ()=>setShowDonePopup(false),
                onSubmit: handleDoneSubmit,
                actions: actions,
                setActions: setActions,
                partsUsed: partsUsed,
                setPartsUsed: setPartsUsed,
                notes: notes,
                setNotes: setNotes,
                isMobile: true,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$popups$2f$WorkOrderPausePopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showPausePopup,
                onClose: ()=>setShowPausePopup(false),
                onSubmit: handlePauseSubmit,
                details: pauseReason,
                setDetails: setPauseReason,
                isSubmitting: isSubmitting,
                isMobile: true
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            toastMessage.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm shadow-lg flex items-center ${toastMessage.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : toastMessage.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' : toastMessage.type === 'warning' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 'bg-blue-100 text-blue-800 border border-blue-200'}`,
                style: {
                    maxWidth: '90%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: toastMessage.message
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                    lineNumber: 428,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/card-phone.jsx",
                lineNumber: 419,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/components/work-orders-table/table-header.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const TableHeader = ({ selectAll, toggleSelectAll, hasSelectedItems, onCancelWorkOrders, onSetStatus, onSetPriority })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center py-2 px-4 bg-gray-100 border-b border-gray-200 text-sm font-medium min-w-[1000px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 ml-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: selectAll,
                    onChange: toggleSelectAll,
                    className: "w-4 h-4 accent-blue-600 cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 13,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-36 px-6 text-gray-500",
                children: "Date"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow px-6 text-gray-500",
                children: "Description"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-32 px-6 text-center text-gray-500",
                children: "Status"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-28 px-6 text-center text-gray-500",
                children: "Priority"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-32 px-6 text-center text-gray-500",
                children: "Assignee"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-28 px-6 text-center text-gray-500",
                children: "Location"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-36 px-6 text-gray-500",
                children: "Last Updated"
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 px-2",
                children: " "
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/work-orders-table/table-header.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TableHeader;
}}),
"[project]/src/app/components/work-orders-table/filter-bar.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
const statusOptions = [
    "In Progress",
    "Complete",
    "Pending",
    "Cancelled",
    "Denied"
];
const priorityOptions = [
    "High",
    "Medium",
    "Low"
];
const FilterBar = ({ search, setSearch, onSearch, filterStatus, setFilterStatus, onStatusFilter, filterPriority, setFilterPriority, onPriorityFilter, resetAllFilters, statusOptions: customStatusOptions, priorityOptions: customPriorityOptions })=>{
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use custom options or default ones
    const statusOpts = customStatusOptions || statusOptions;
    const priorityOpts = customPriorityOptions || priorityOptions;
    // Helper for "All" button
    const isAll = filterStatus === "All" && filterPriority === "All";
    // Handler functions that work with both prop naming conventions
    const handleSearchChange = (value)=>{
        if (typeof setSearch === 'function') {
            setSearch(value);
        }
        if (typeof onSearch === 'function') {
            onSearch(value);
        }
    };
    const handleStatusChange = (status)=>{
        if (typeof setFilterStatus === 'function') {
            setFilterStatus(status);
        }
        if (typeof onStatusFilter === 'function') {
            onStatusFilter(status);
        }
    };
    const handlePriorityChange = (priority)=>{
        if (typeof setFilterPriority === 'function') {
            setFilterPriority(priority);
        }
        if (typeof onPriorityFilter === 'function') {
            onPriorityFilter(priority);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:flex px-4 flex-row items-center justify-between gap-4 h-[74px] w-full border-t border-b border-gray-300 bg-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row w-auto gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute mb-0.5 right-2 bottom-1 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search",
                                        value: search,
                                        onChange: (e)=>handleSearchChange(e.target.value),
                                        className: "border p-2 rounded-lg h-8 w-full outline-none bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 h-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetAllFilters,
                                        className: `flex items-center px-3 rounded-md ${isAll ? "bg-black text-white" : "bg-gray-200"} h-8 cursor-pointer`,
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    statusOpts.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleStatusChange(status),
                                            className: `flex items-center px-3 rounded-md ${filterStatus === status ? "bg-black text-white" : "bg-gray-200"} h-8 cursor-pointer`,
                                            children: status
                                        }, status, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)),
                                    priorityOpts.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePriorityChange(priority),
                                            className: `flex items-center px-3 rounded-md ${filterPriority === priority ? "bg-black text-white" : "bg-gray-200"} h-8 cursor-pointer`,
                                            children: priority
                                        }, priority, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "../../technician/report-issue-technician",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#0060B4] text-white px-4 py-1 rounded-md h-8 flex items-center justify-center cursor-pointer",
                            children: "Add New Report"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden flex flex-col gap-2 px-2 py-2 bg-white border-b border-gray-200 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative mr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute right-3 top-2 w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search",
                                        value: search,
                                        onChange: (e)=>handleSearchChange(e.target.value),
                                        className: "border rounded-full h-8 w-full pl-3 pr-8 outline-none bg-white text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ml-2 p-2 rounded-full bg-gray-100 border border-gray-200",
                                onClick: ()=>setShowFilters((v)=>!v),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "w-5 h-5 text-gray-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "../../technician/report-issue-technician",
                                className: "ml-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#0060B4] text-white px-3 py-1 rounded-md h-8 flex items-center justify-center cursor-pointer text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg mr-1",
                                        children: "Add New Report"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    resetAllFilters();
                                    setShowFilters(false);
                                },
                                className: `px-4 py-1 rounded-full border ${isAll ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`,
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            statusOpts.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleStatusChange(status),
                                    className: `px-4 py-1 rounded-full border ${filterStatus === status ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`,
                                    children: status
                                }, status, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)),
                            priorityOpts.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePriorityChange(priority),
                                    className: `px-4 py-1 rounded-full border ${filterPriority === priority ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`,
                                    children: priority
                                }, priority, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/filter-bar.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = FilterBar;
}}),
"[project]/src/app/components/work-orders-table/work-orders-table.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WorkOrdersTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/work-orders-table/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$card$2d$phone$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/work-orders-table/card-phone.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$table$2d$header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/work-orders-table/table-header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$filter$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/work-orders-table/filter-bar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
function WorkOrdersTable({ workOrders = [], loading = false, currentWorker = {}, onBeginTask, onCompleteTask, onPauseTask, onResumeTask, onDenyTask, onDeleteWorkOrders, onShowDetails, onEditWorkOrder, isSubmitting = false }) {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [filterPriority, setFilterPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectAll, setSelectAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [activeTimers, setActiveTimers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [tasksInProgress, setTasksInProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [openAssigneeDropdown, setOpenAssigneeDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredWorkOrders, setFilteredWorkOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeWorkOrders, setActiveWorkOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs
    const menuButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const timerIntervals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const assigneeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Filter out completed and cancelled work orders first
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = workOrders.filter((wo)=>{
            const status = (wo.status || "").toLowerCase();
            return status !== "complete" && status !== "completed" && status !== "cancelled" && status !== "canceled";
        });
        setActiveWorkOrders(filtered);
    }, [
        workOrders
    ]);
    // Initialize tasksInProgress and timers based on workOrders prop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const inProgressTasks = {};
        activeWorkOrders.forEach((item)=>{
            // Initialize timer for both "in progress" and "paused" tasks to keep track of total time
            if (item.timer && (item.status?.toLowerCase() === "in progress" || item.status?.toLowerCase() === "paused")) {
                const parts = item.timer.split(':');
                const seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
                setActiveTimers((prev)=>({
                        ...prev,
                        [item.id]: {
                            seconds,
                            display: item.timer
                        }
                    }));
                // Only mark as in progress if status is actually "in progress"
                if (item.status.toLowerCase() === "in progress") {
                    inProgressTasks[item.id] = true;
                    // Start the timer for tasks that are in progress
                    if (!timerIntervals.current[item.id]) {
                        startTimerFromCurrentValue(item.id);
                    }
                }
            }
        });
        setTasksInProgress(inProgressTasks);
        applyFilters(search, filterStatus, filterPriority);
    }, [
        activeWorkOrders
    ]);
    // Status and priority options (removed Complete and Cancelled from options)
    const statusOptions = [
        "In Progress",
        "Pending",
        "Paused",
        "Denied"
    ];
    const priorityOptions = [
        "High",
        "Medium",
        "Low"
    ];
    // Outside click handler for dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            // Close menu dropdown
            if (menuOpen && !event.target.closest(".menu-dropdown") && !event.target.closest(".menu-button")) {
                setMenuOpen(null);
            }
            // Close assignee dropdown
            if (openAssigneeDropdown && !event.target.closest(".assignee-dropdown") && !event.target.closest(".assignee-button")) {
                setOpenAssigneeDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        menuOpen,
        openAssigneeDropdown
    ]);
    // Clean up timers on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            Object.values(timerIntervals.current).forEach((interval)=>{
                clearInterval(interval);
            });
        };
    }, []);
    // Status color mapping
    const getStatusColor = (status)=>{
        if (!status) return "bg-gray-500";
        switch(status.toLowerCase()){
            case "in progress":
                return "bg-green-500";
            case "completed":
            case "complete":
                return "bg-gray-500";
            case "pending":
                return "bg-yellow-500";
            case "paused":
                return "bg-orange-500";
            case "cancelled":
            case "canceled":
                return "bg-red-500";
            case "denied":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };
    // Priority color mapping
    const getPriorityColor = (priority)=>{
        if (!priority) return "bg-gray-100 text-gray-800";
        switch(priority.toLowerCase()){
            case "high":
                return "bg-red-100 text-red-800";
            case "medium":
            case "med":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    // Toggle assignee dropdown
    const toggleAssigneeDropdown = (id, e)=>{
        e.stopPropagation();
        if (openAssigneeDropdown === id) {
            setOpenAssigneeDropdown(null);
            return;
        }
        setOpenAssigneeDropdown(id);
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
            const windowHeight = window.innerHeight;
            const menuHeight = 160;
            const spaceBelow = windowHeight - rect.bottom;
            const showAbove = spaceBelow < menuHeight;
            let top, left;
            if (showAbove) {
                top = rect.top - menuHeight + window.scrollY;
            } else {
                top = rect.top + window.scrollY;
            }
            left = rect.left - 240 + window.scrollX;
            setMenuPosition({
                top,
                left: Math.max(10, left)
            });
        }
        setMenuOpen(id);
    };
    // Timer functions
    // Start timer preserving existing timer value
    const startTimerFromCurrentValue = (rowId)=>{
        // Don't reset timer value, keep existing one
        if (timerIntervals.current[rowId]) {
            clearInterval(timerIntervals.current[rowId]);
        }
        timerIntervals.current[rowId] = setInterval(()=>{
            setActiveTimers((prev)=>{
                const currentTimer = prev[rowId] || {
                    seconds: 0
                };
                const newSeconds = currentTimer.seconds + 1;
                const hours = Math.floor(newSeconds / 3600).toString().padStart(2, "0");
                const minutes = Math.floor(newSeconds % 3600 / 60).toString().padStart(2, "0");
                const seconds = (newSeconds % 60).toString().padStart(2, "0");
                const display = `${hours}:${minutes}:${seconds}`;
                return {
                    ...prev,
                    [rowId]: {
                        seconds: newSeconds,
                        display
                    }
                };
            });
        }, 1000);
    };
    // Original startTimer function (used when first beginning a task)
    const startTimer = (rowId)=>{
        setActiveTimers((prev)=>({
                ...prev,
                [rowId]: prev[rowId] || {
                    seconds: 0,
                    display: "00:00:00"
                }
            }));
        startTimerFromCurrentValue(rowId);
    };
    const stopTimer = (rowId)=>{
        if (timerIntervals.current[rowId]) {
            clearInterval(timerIntervals.current[rowId]);
            delete timerIntervals.current[rowId];
        }
    };
    // Task action handlers that use the props
    const handleBeginTaskWrapper = (rowId)=>{
        if (onBeginTask) {
            onBeginTask(rowId);
            // Update local UI state for immediate feedback
            setTasksInProgress((prev)=>({
                    ...prev,
                    [rowId]: true
                }));
            startTimer(rowId);
        }
    };
    const handleCompleteTaskWrapper = (rowId, data = {})=>{
        if (onCompleteTask) {
            onCompleteTask(rowId, data);
            // Update local UI state for immediate feedback
            setTasksInProgress((prev)=>({
                    ...prev,
                    [rowId]: false
                }));
            stopTimer(rowId);
        }
    };
    const handlePauseTaskWrapper = (rowId, data = {})=>{
        if (onPauseTask) {
            onPauseTask(rowId, data);
            // Update local UI state for immediate feedback
            setTasksInProgress((prev)=>({
                    ...prev,
                    [rowId]: false
                }));
            // Stop the timer but preserve the current value
            stopTimer(rowId);
        }
    };
    const handleResumeTaskWrapper = (rowId)=>{
        if (onResumeTask) {
            onResumeTask(rowId);
            // Update local UI state for immediate feedback
            setTasksInProgress((prev)=>({
                    ...prev,
                    [rowId]: true
                }));
            // Resume timer from its current value
            startTimerFromCurrentValue(rowId);
        }
    };
    const handleDenyTaskWrapper = (rowId, reason = "")=>{
        if (onDenyTask) {
            onDenyTask(rowId, reason);
        }
    };
    const handleDeleteWorkOrdersWrapper = ()=>{
        const selectedIds = Object.keys(selectedItems).filter((id)=>selectedItems[id]);
        if (onDeleteWorkOrders && selectedIds.length > 0) {
            onDeleteWorkOrders(selectedIds);
            setSelectedItems({});
            setSelectAll(false);
        }
    };
    // Filter functions
    const applyFilters = (query, status, priority)=>{
        // Start with active work orders (already filtered to exclude completed and cancelled)
        let filtered = [
            ...activeWorkOrders
        ];
        // Apply search query filter
        if (query) {
            filtered = filtered.filter((wo)=>(wo.description?.toLowerCase() || "").includes(query.toLowerCase()) || (wo.id?.toString() || "").includes(query) || (wo.location?.toLowerCase() || "").includes(query.toLowerCase()));
        }
        // Apply status filter
        if (status !== "All") {
            filtered = filtered.filter((wo)=>(wo.status?.toLowerCase() || "") === status.toLowerCase());
        }
        // Apply priority filter
        if (priority !== "All") {
            filtered = filtered.filter((wo)=>{
                const woPriority = (wo.priority || "").toLowerCase();
                const filterValue = priority.toLowerCase();
                return woPriority === filterValue || filterValue === "medium" && woPriority === "med" || filterValue === "med" && woPriority === "medium";
            });
        }
        setFilteredWorkOrders(filtered);
    };
    const handleSearch = (query)=>{
        setSearch(query);
        applyFilters(query, filterStatus, filterPriority);
    };
    const handleStatusFilter = (status)=>{
        setFilterStatus(status);
        applyFilters(search, status, filterPriority);
    };
    const handlePriorityFilter = (priority)=>{
        setFilterPriority(priority);
        applyFilters(search, filterStatus, priority);
    };
    // Reset all filters
    const resetAllFilters = ()=>{
        setFilterStatus("All");
        setFilterPriority("All");
        setSearch("");
        applyFilters("", "All", "All");
    };
    // Toggle select all
    const toggleSelectAll = ()=>{
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        const newSelectedItems = {};
        filteredWorkOrders.forEach((item)=>{
            newSelectedItems[item.id] = newSelectAll;
        });
        setSelectedItems(newSelectedItems);
    };
    // Handle individual row selection
    const handleSelect = (id, isSelected)=>{
        setSelectedItems((prev)=>({
                ...prev,
                [id]: isSelected
            }));
    };
    // Avatar component
    const Avatar = ({ user, index, small = false })=>{
        const colors = [
            "bg-blue-500",
            "bg-red-500",
            "bg-green-500",
            "bg-purple-500"
        ];
        const size = small ? "w-6 h-6" : "w-8 h-8";
        const margin = index > 0 && !small ? "-10px" : "0";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${colors[index % colors.length]} ${size} rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white`,
            style: {
                marginLeft: margin
            },
            children: typeof user === "string" ? user.charAt(0).toUpperCase() : user.avatar ? user.avatar.charAt(0) : "U"
        }, void 0, false, {
            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
            lineNumber: 410,
            columnNumber: 7
        }, this);
    };
    // Assignee Dropdown Component
    const AssigneeDropdown = ({ row })=>{
        const assignees = Array.isArray(row.assignee) ? row.assignee : [];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative assignee-button",
            ref: (el)=>assigneeRefs.current[row.id] = el,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center cursor-pointer",
                    onClick: (e)=>toggleAssigneeDropdown(row.id, e),
                    children: assignees.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex",
                                children: [
                                    assignees.slice(0, 3).map((user, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                            user: user,
                                            index: i
                                        }, i, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                            lineNumber: 441,
                                            columnNumber: 19
                                        }, this)),
                                    assignees.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-white",
                                        style: {
                                            marginLeft: "-10px"
                                        },
                                        children: [
                                            "+",
                                            assignees.length - 3
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                        lineNumber: 444,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-2 flex items-center",
                                children: openAssigneeDropdown === row.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                    lineNumber: 454,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                    lineNumber: 456,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 452,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 16,
                                className: "mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 462,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "No assignee"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                        lineNumber: 461,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this),
                openAssigneeDropdown === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-full left-0 mt-1 bg-white shadow-lg rounded z-40 border border-gray-200 w-56 assignee-dropdown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-b border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium text-sm text-gray-700",
                                children: "Assigned to:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this),
                        assignees.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-48 overflow-y-auto",
                            children: assignees.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-2 hover:bg-gray-50 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                            user: user,
                                            index: index,
                                            small: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                            lineNumber: 481,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-sm",
                                            children: typeof user === "string" ? user : user.name || `User ${index + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                            lineNumber: 482,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                    lineNumber: 477,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 475,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 text-sm text-gray-500 italic",
                            children: "No assignees"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 491,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                    lineNumber: 468,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
            lineNumber: 429,
            columnNumber: 7
        }, this);
    };
    // Dropdown Menu Component
    const DropdownMenu = ({ row })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bg-white shadow-2xl rounded-md z-50 border border-gray-200 w-60 menu-dropdown",
            style: {
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                    onClick: ()=>{
                        setMenuOpen(null);
                        onShowDetails(row.id);
                    },
                    children: "View"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                    lineNumber: 511,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                    lineNumber: 522,
                    columnNumber: 9
                }, this),
                row.status === 'Pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600",
                            onClick: ()=>{
                                setMenuOpen(null);
                                handleDenyTaskWrapper(row.id);
                            },
                            children: "Deny Task"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-left px-4 py-2 hover:bg-red-100 text-red-600",
                    onClick: ()=>{
                        setMenuOpen(null);
                        onDeleteWorkOrders([
                            row.id
                        ]);
                    },
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                    lineNumber: 537,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
            lineNumber: 504,
            columnNumber: 7
        }, this), document.body);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm flex flex-col w-full font-outfit bg-gray-100 rounded h-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$filter$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSearch,
                onStatusFilter: handleStatusFilter,
                onPriorityFilter: handlePriorityFilter,
                search: search,
                filterStatus: filterStatus,
                filterPriority: filterPriority,
                resetAllFilters: resetAllFilters,
                statusOptions: statusOptions,
                priorityOptions: priorityOptions
            }, void 0, false, {
                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$table$2d$header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                selectAll: selectAll,
                                toggleSelectAll: toggleSelectAll,
                                hasSelectedItems: Object.values(selectedItems).some((selected)=>selected === true),
                                onDeleteWorkOrders: handleDeleteWorkOrdersWrapper
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center ",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, this) : filteredWorkOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center ",
                                children: "No work orders found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 576,
                                columnNumber: 13
                            }, this) : filteredWorkOrders.map((workOrder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        "bg-gray-100": true,
                                        workOrder: workOrder,
                                        isFirstCard: index === 0,
                                        isSelected: !!selectedItems[workOrder.id],
                                        onSelect: (isSelected)=>handleSelect(workOrder.id, isSelected),
                                        onBeginTask: ()=>handleBeginTaskWrapper(workOrder.id),
                                        onCompleteTask: (id, data)=>handleCompleteTaskWrapper(id || workOrder.id, data),
                                        onPauseTask: (id, data)=>handlePauseTaskWrapper(id || workOrder.id, data),
                                        onResumeTask: ()=>handleResumeTaskWrapper(workOrder.id),
                                        isInProgress: tasksInProgress[workOrder.id],
                                        timer: activeTimers[workOrder.id]?.display || workOrder.timer,
                                        menuOpen: menuOpen === workOrder.id,
                                        toggleMenu: (e)=>toggleMenu(workOrder.id, e),
                                        menuButtonRef: (el)=>menuButtonRefs.current[workOrder.id] = el,
                                        menuPosition: menuPosition,
                                        getStatusColor: getStatusColor,
                                        getPriorityColor: getPriorityColor,
                                        AssigneeDropdown: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AssigneeDropdown, {
                                            row: workOrder
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                            lineNumber: 597,
                                            columnNumber: 37
                                        }, void 0),
                                        DropdownMenu: menuOpen === workOrder.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                                            row: workOrder
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                            lineNumber: 598,
                                            columnNumber: 61
                                        }, void 0) : null,
                                        handleShowDetails: ()=>onShowDetails(workOrder.id),
                                        isSubmitting: isSubmitting
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                        lineNumber: 580,
                                        columnNumber: 17
                                    }, this)
                                }, workOrder.id, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:hidden w-full mt-4",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center p-4",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 609,
                            columnNumber: 13
                        }, this) : filteredWorkOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center p-4",
                            children: "No work orders found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, this) : filteredWorkOrders.map((workOrder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$card$2d$phone$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    workOrder: workOrder,
                                    isSelected: !!selectedItems[workOrder.id],
                                    onSelect: (isSelected)=>handleSelect(workOrder.id, isSelected),
                                    onBeginTask: ()=>handleBeginTaskWrapper(workOrder.id),
                                    onCompleteTask: (id, data)=>handleCompleteTaskWrapper(id || workOrder.id, data),
                                    onPauseTask: (id, data)=>handlePauseTaskWrapper(id || workOrder.id, data),
                                    onResumeTask: ()=>handleResumeTaskWrapper(workOrder.id),
                                    isInProgress: tasksInProgress[workOrder.id],
                                    timer: activeTimers[workOrder.id]?.display || workOrder.timer,
                                    getStatusColor: getStatusColor,
                                    getPriorityColor: getPriorityColor,
                                    onShowDetails: ()=>onShowDetails(workOrder.id),
                                    isSubmitting: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                    lineNumber: 615,
                                    columnNumber: 17
                                }, this)
                            }, workOrder.id, false, {
                                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
                lineNumber: 564,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/work-orders-table/work-orders-table.jsx",
        lineNumber: 552,
        columnNumber: 5
    }, this);
}
}}),
"[project]/public/Images/arrows.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrows.2292d6b3.svg");}}),
"[project]/public/Images/arrows.svg.mjs { IMAGE => \"[project]/public/Images/arrows.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/src/app/(main)/technician/workOrders/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WorkOrders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar/Sidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2f$Nav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/NavBar/Nav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$work$2d$orders$2d$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/work-orders-table/work-orders-table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Images/arrows.svg.mjs { IMAGE => "[project]/public/Images/arrows.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
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
function WorkOrders() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [workOrders, setWorkOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        message: '',
        type: ''
    });
    const [refreshTrigger, setRefreshTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Current user state (will be fetched from API)
    const [currentWorker, setCurrentWorker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "Loading...",
        avatar: "?",
        role: "Technician"
    });
    // Show toast notification
    const showToast = (message, type = 'success')=>{
        setToast({
            visible: true,
            message,
            type
        });
        setTimeout(()=>setToast({
                visible: false,
                message: '',
                type: ''
            }), 3000);
    };
    // Handle responsive layout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // Check and get auth token
    const getToken = ()=>{
        const token = sessionStorage.getItem("token");
        if (!token) {
            showToast('Authentication required. Please login again.', 'error');
            setTimeout(()=>router.push('/login'), 1500);
            return null;
        }
        return token;
    };
    // Fetch user profile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserProfile = async ()=>{
            try {
                // First try to get user from sessionStorage to avoid unnecessary API calls
                try {
                    const cachedUser = JSON.parse(sessionStorage.getItem('user') || '{}');
                    if (cachedUser && cachedUser.id) {
                        console.log("Using cached user data");
                        setCurrentWorker({
                            id: cachedUser.id,
                            name: `${cachedUser.firstName || ''} ${cachedUser.lastName || ''}`.trim() || cachedUser.email || "Unknown",
                            avatar: `${cachedUser.firstName?.[0] || ''}${cachedUser.lastName?.[0] || ''}` || "?",
                            role: cachedUser.role?.name || cachedUser.role || "Technician"
                        });
                        return; // Exit early if we have cached data
                    }
                } catch (e) {
                    console.warn("Error reading cached user:", e);
                }
                const token = getToken();
                if (!token) return;
                console.log("Fetching user profile...");
                // Try with /me endpoint
                const response = await fetch("http://localhost:3001/api/auth/me", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    // If 404, try alternative endpoint
                    if (response.status === 404) {
                        console.log("First endpoint not found, trying alternative...");
                        const alternativeResponse = await fetch("http://localhost:3001/api/users/me", {
                            headers: {
                                "Authorization": `Bearer ${token}`
                            }
                        });
                        if (!alternativeResponse.ok) {
                            // Try a third option if needed
                            if (alternativeResponse.status === 404) {
                                console.log("Second endpoint not found, trying third option...");
                                const thirdAttempt = await fetch("http://localhost:3001/api/profile", {
                                    headers: {
                                        "Authorization": `Bearer ${token}`
                                    }
                                });
                                if (!thirdAttempt.ok) {
                                    if (thirdAttempt.status === 401) {
                                        showToast('Session expired. Please login again.', 'error');
                                        setTimeout(()=>router.push('/login'), 1500);
                                        return;
                                    }
                                    // Last resort - use mock data in development mode
                                    if ("TURBOPACK compile-time truthy", 1) {
                                        useMockUserData();
                                        return;
                                    }
                                    "TURBOPACK unreachable";
                                }
                                const data = await thirdAttempt.json();
                                handleUserData(data);
                                return;
                            }
                            if (alternativeResponse.status === 401) {
                                showToast('Session expired. Please login again.', 'error');
                                setTimeout(()=>router.push('/login'), 1500);
                                return;
                            }
                            // Last resort - use mock data in development mode
                            if ("TURBOPACK compile-time truthy", 1) {
                                useMockUserData();
                                return;
                            }
                            "TURBOPACK unreachable";
                        }
                        const data = await alternativeResponse.json();
                        handleUserData(data);
                        return;
                    }
                    if (response.status === 401) {
                        showToast('Session expired. Please login again.', 'error');
                        setTimeout(()=>router.push('/login'), 1500);
                        return;
                    }
                    // Last resort - use mock data in development mode
                    if ("TURBOPACK compile-time truthy", 1) {
                        useMockUserData();
                        return;
                    }
                    "TURBOPACK unreachable";
                }
                const data = await response.json();
                handleUserData(data);
                // Cache the user data for future use
                if (data && data.data) {
                    sessionStorage.setItem('user', JSON.stringify(data.data));
                } else if (data) {
                    sessionStorage.setItem('user', JSON.stringify(data));
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                // For development, use mock data
                if ("TURBOPACK compile-time truthy", 1) {
                    useMockUserData();
                }
            }
        };
        // Helper function to process user data from different API formats
        const handleUserData = (data)=>{
            const userData = data.data || data;
            // Get first letter of first and last name for avatar
            const initials = `${userData.firstName?.charAt(0) || ''}${userData.lastName?.charAt(0) || ''}`;
            setCurrentWorker({
                id: userData.id || "",
                name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || userData.email || "Unknown",
                avatar: initials || "?",
                role: userData.role?.name || userData.role || "Technician"
            });
        };
        // Helper to use mock data in development
        const useMockUserData = ()=>{
            console.log("Using mock user data for development");
            const mockUser = {
                id: "dev-123",
                firstName: "Dev",
                lastName: "User",
                email: "dev.user@example.com",
                role: "Technician"
            };
            setCurrentWorker({
                id: mockUser.id,
                name: `${mockUser.firstName} ${mockUser.lastName}`,
                avatar: "DU",
                role: mockUser.role
            });
            // Store mock data in session for consistency
            sessionStorage.setItem('user', JSON.stringify(mockUser));
        };
        fetchUserProfile();
    }, [
        router
    ]);
    // Fetch work orders
    const fetchWorkOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const token = getToken();
            if (!token) return;
            const response = await fetch("http://localhost:3001/api/intervention/my-assigned", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                if (response.status === 401) {
                    showToast('Session expired. Please login again.', 'error');
                    setTimeout(()=>router.push('/login'), 1500);
                    return;
                }
                throw new Error(`Server error: ${response.status}`);
            }
            const result = await response.json();
            const interventions = result.success && Array.isArray(result.data) ? result.data : Array.isArray(result) ? result : [];
            if (interventions.length === 0) {
                setWorkOrders([]);
                return;
            }
            const formattedData = interventions.map((item)=>({
                    id: item.id,
                    date: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A",
                    description: item.description || "N/A",
                    status: mapStatusFromAPI(item.status),
                    priority: mapPriorityFromAPI(item.priority),
                    assignee: formatAssignees(item.assignees || []),
                    location: item.location?.name || "N/A",
                    lastUpdated: item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : "N/A",
                    equipment: item.equipment?.inventoryCode || "N/A",
                    equipmentType: item.equipment?.type?.name || "N/A",
                    rawData: item // Keep raw data for reference
                }));
            setWorkOrders(formattedData);
        } catch (error) {
            console.error("Error fetching work orders:", error);
            setError(error.message || "Failed to load work orders");
            // Only use sample data in development
            if ("TURBOPACK compile-time truthy", 1) {
                setWorkOrders(addSampleData());
            }
        } finally{
            setLoading(false);
        }
    }, [
        router
    ]);
    // Format assignees from API response
    const formatAssignees = (assignees)=>{
        return assignees.map((assignment)=>{
            const person = assignment.person || {};
            const name = `${person.firstName || ''} ${person.lastName || ''}`.trim() || person.email || 'Unknown';
            // Get first letter for avatar
            const initials = name.charAt(0).toUpperCase();
            return {
                id: person.id,
                name,
                avatar: initials,
                email: person.email
            };
        });
    };
    // Load work orders on initial render and when refresh is triggered
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchWorkOrders();
    }, [
        fetchWorkOrders,
        refreshTrigger
    ]);
    // Map API status to UI status
    const mapStatusFromAPI = (apiStatus)=>{
        if (!apiStatus) return "Pending";
        const statusMap = {
            "IN_PROGRESS": "In Progress",
            "COMPLETED": "Complete",
            "PENDING": "Pending",
            "CANCELLED": "Cancelled",
            "DENIED": "Denied",
            "PAUSED": "Paused"
        };
        return statusMap[apiStatus] || apiStatus;
    };
    // Map UI status to API status
    const mapStatusToAPI = (uiStatus)=>{
        const statusMap = {
            "In Progress": "IN_PROGRESS",
            "Complete": "COMPLETED",
            "Pending": "PENDING",
            "Cancelled": "CANCELLED",
            "Denied": "DENIED",
            "Paused": "PAUSED"
        };
        return statusMap[uiStatus] || uiStatus;
    };
    // Map API priority to UI priority
    const mapPriorityFromAPI = (apiPriority)=>{
        if (!apiPriority) return "Low";
        const priorityMap = {
            "HIGH": "High",
            "MEDIUM": "Medium",
            "MED": "Medium",
            "LOW": "Low"
        };
        return priorityMap[apiPriority] || apiPriority;
    };
    // For demo purposes - add sample data
    const addSampleData = ()=>{
        return [
            {
                id: "1",
                date: "12/03/2025",
                description: "Replace broken light fixture in engineering lab",
                status: "Pending",
                priority: "Med",
                assignee: [
                    {
                        name: "ADI ADLAN",
                        avatar: "A",
                        id: "1"
                    }
                ],
                location: "No Parking",
                lastUpdated: "Sunday, 12:45"
            },
            {
                id: "2",
                date: "Wednesday, 12:45",
                description: "Fix plumbing issue in restroom",
                status: "Pending",
                priority: "High",
                assignee: [
                    {
                        name: "Alice Smith",
                        avatar: "A",
                        id: "2"
                    },
                    {
                        name: "Bob Jones",
                        avatar: "B",
                        id: "3"
                    }
                ],
                location: "S33",
                lastUpdated: "Tuesday, 12:45"
            },
            {
                id: "3",
                date: "Sunday, 12:45",
                description: "Repair AC unit in server room",
                status: "In Progress",
                priority: "Low",
                assignee: [
                    {
                        name: "ADI ADLAN",
                        avatar: "A",
                        id: "1"
                    },
                    {
                        name: "Charlie Brown",
                        avatar: "C",
                        id: "4"
                    }
                ],
                location: "Bp",
                lastUpdated: "Tuesday, 12:45",
                timer: "00:12:12"
            },
            {
                id: "4",
                date: "Monday, 09:30",
                description: "Replace projector bulb in conference room",
                status: "Paused",
                priority: "Medium",
                assignee: [
                    {
                        name: "ADI ADLAN",
                        avatar: "A",
                        id: "1"
                    }
                ],
                location: "Room 101",
                lastUpdated: "Monday, 12:45"
            }
        ];
    };
    // Begin task handler
    const handleBeginTask = async (id)=>{
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            const token = getToken();
            if (!token) return;
            const response = await fetch(`http://localhost:3001/api/intervention/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    status: "IN_PROGRESS"
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Server returned ${response.status}`);
            }
            showToast('Task started successfully');
            // Update local state for immediate feedback
            setWorkOrders((prevWorkOrders)=>prevWorkOrders.map((wo)=>wo.id === id ? {
                        ...wo,
                        status: "In Progress"
                    } : wo));
            // Refresh after a short delay
            setTimeout(()=>setRefreshTrigger((prev)=>prev + 1), 500);
        } catch (error) {
            console.error("Error starting task:", error);
            showToast(`Failed to start task: ${error.message}`, 'error');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Complete task handler
    const handleCompleteTask = async (id, formData = {})=>{
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            const token = getToken();
            if (!token) return;
            const response = await fetch(`http://localhost:3001/api/intervention/${id}/resolve`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    action: formData.actions,
                    partsUsed: formData.partsUsed,
                    notes: formData.notes
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Server returned ${response.status}`);
            }
            showToast('Task completed successfully');
            // Update local state for immediate feedback
            setWorkOrders((prevWorkOrders)=>prevWorkOrders.map((wo)=>wo.id === id ? {
                        ...wo,
                        status: "Complete"
                    } : wo));
            // Refresh to get updated data
            setTimeout(()=>setRefreshTrigger((prev)=>prev + 1), 500);
        } catch (error) {
            console.error("Error completing task:", error);
            showToast(`Failed to complete task: ${error.message}`, 'error');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Pause task handler
    const handlePauseTask = async (id)=>{
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            const token = getToken();
            if (!token) return;
            const response = await fetch(`http://localhost:3001/api/intervention/${id}/pause`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Server returned ${response.status}`);
            }
            showToast('Task paused successfully');
            // Update local state for immediate feedback
            setWorkOrders((prevWorkOrders)=>prevWorkOrders.map((wo)=>wo.id === id ? {
                        ...wo,
                        status: "Paused"
                    } : wo));
            // Refresh to get updated data
            setTimeout(()=>setRefreshTrigger((prev)=>prev + 1), 500);
        } catch (error) {
            console.error("Error pausing task:", error);
            showToast(`Failed to pause task: ${error.message}`, 'error');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Resume task handler
    const handleResumeTask = async (id)=>{
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            const token = getToken();
            if (!token) return;
            const response = await fetch(`http://localhost:3001/api/intervention/${id}/resume`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Server returned ${response.status}`);
            }
            console.log("Task resumed successfully:", response);
            showToast('Task resumed successfully');
            // Update local state for immediate feedback
            setWorkOrders((prevWorkOrders)=>prevWorkOrders.map((wo)=>wo.id === id ? {
                        ...wo,
                        status: "In Progress"
                    } : wo));
            // Refresh to get updated data
            setTimeout(()=>setRefreshTrigger((prev)=>prev + 1), 500);
        } catch (error) {
            console.error("Error resuming task:", error);
            showToast(`Failed to resume task: ${error.message}`, 'error');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Deny task handler
    const handleDenyTask = async (id, reason = "")=>{
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            const token = getToken();
            if (!token) return;
            // Use the deny endpoint
            const response = await fetch(`http://localhost:3001/api/intervention/${id}/deny`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    reason
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Server returned ${response.status}`);
            }
            showToast('Task denied successfully');
            // Update local state
            setWorkOrders((prevWorkOrders)=>prevWorkOrders.map((wo)=>wo.id === id ? {
                        ...wo,
                        status: "Denied"
                    } : wo));
            // Refresh to get updated data
            setTimeout(()=>setRefreshTrigger((prev)=>prev + 1), 500);
        } catch (error) {
            console.error("Error denying task:", error);
            showToast(`Failed to deny task: ${error.message}`, 'error');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Delete work orders handler
    const handleDeleteWorkOrders = async (ids)=>{
        if (!Array.isArray(ids) || ids.length === 0 || isSubmitting) return;
        // Confirm deletion
        if (!window.confirm(`Are you sure you want to delete ${ids.length} work order(s)?`)) {
            return;
        }
        try {
            setIsSubmitting(true);
            const token = getToken();
            if (!token) return;
            // Process each deletion request
            const results = await Promise.all(ids.map((id)=>fetch(`http://localhost:3001/api/intervention/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })));
            // Check if any requests failed
            const failedRequests = results.filter((res)=>!res.ok).length;
            if (failedRequests > 0) {
                showToast(`${results.length - failedRequests} deleted, ${failedRequests} failed`, 'warning');
            } else {
                showToast(`Successfully deleted ${ids.length} work order(s)`);
            }
            // Update local state
            setWorkOrders((prevWorkOrders)=>prevWorkOrders.filter((wo)=>!ids.includes(wo.id)));
            // Refresh to make sure we're in sync
            setTimeout(()=>setRefreshTrigger((prev)=>prev + 1), 500);
        } catch (error) {
            console.error("Error deleting work orders:", error);
            showToast(`Failed to delete: ${error.message}`, 'error');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Show details handler
    const handleShowDetails = (id)=>{
        router.push(`/technician/report-details/${id}`);
    };
    // Retry loading on error
    const handleRetry = ()=>{
        setError(null);
        setRefreshTrigger((prev)=>prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full min-h-screen flex flex-row items-start justify-center bg-gray-100 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block absolute top-0 right-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "",
                    width: 212
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                    lineNumber: 708,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                lineNumber: 707,
                columnNumber: 13
            }, this),
            toast.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center ${toast.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : toast.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' : toast.type === 'warning' ? 'bg-yellow-50 text-yellow-800 border border-yellow-200' : 'bg-blue-50 text-blue-800 border border-blue-200'}`,
                children: [
                    toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 719,
                        columnNumber: 46
                    }, this),
                    toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 720,
                        columnNumber: 44
                    }, this),
                    toast.type === 'warning' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 721,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 722,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                lineNumber: 713,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full z-30 ${isMobile ? 'mt-12' : 'ml-[127px]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-oxanium p-6 font-semibold text-[26.07px]",
                            children: "Work Orders"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                            lineNumber: 728,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 727,
                        columnNumber: 15
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 my-4 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                        lineNumber: 737,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-bold",
                                        children: "Error loading data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                        lineNumber: 738,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                lineNumber: 736,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "block mb-4",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                lineNumber: 740,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRetry,
                                    className: "px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-md transition-colors",
                                    disabled: loading,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                className: "h-4 w-4 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                                lineNumber: 748,
                                                columnNumber: 61
                                            }, this),
                                            " Retrying..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                        lineNumber: 748,
                                        columnNumber: 25
                                    }, this) : 'Retry'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                    lineNumber: 742,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                lineNumber: 741,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 735,
                        columnNumber: 17
                    }, this),
                    loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                    className: "h-10 w-10 text-[#0060B4] animate-spin mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                    lineNumber: 759,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Loading work orders..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                                    lineNumber: 760,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                            lineNumber: 758,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 757,
                        columnNumber: 17
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[calc(100vh-180px)] sm:h-[calc(100vh-150px)] overflow-hidden bg-white rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$work$2d$orders$2d$table$2f$work$2d$orders$2d$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            workOrders: workOrders,
                            loading: loading,
                            currentWorker: currentWorker,
                            onBeginTask: handleBeginTask,
                            onCompleteTask: handleCompleteTask,
                            onPauseTask: handlePauseTask,
                            onResumeTask: handleResumeTask,
                            onDenyTask: handleDenyTask,
                            onDeleteWorkOrders: handleDeleteWorkOrders,
                            onShowDetails: handleShowDetails,
                            onEditWorkOrder: (id)=>router.push(`/technician/workOrders/${id}/edit`),
                            isSubmitting: isSubmitting
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                            lineNumber: 768,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                        lineNumber: 767,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
                lineNumber: 726,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/technician/workOrders/page.jsx",
        lineNumber: 706,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=_4364409f._.js.map