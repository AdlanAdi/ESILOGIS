module.exports = {

"[project]/src/app/components/reported-issues-table/card.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
//Details
const Card = ({ intervention, onDelete, onApprove, onDeny, onDetails, isFirstCard, isSelected = false, onSelect })=>{
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAssigneePopup, setShowAssigneePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationControls"])();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const assigneeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menu and assignee popup when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (assigneeRef.current && !assigneeRef.current.contains(event.target)) {
                setShowAssigneePopup(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleMenu = (e)=>{
        e.stopPropagation();
        setMenuOpen(!menuOpen);
    };
    const toggleAssigneePopup = (e)=>{
        e.stopPropagation();
        setShowAssigneePopup(!showAssigneePopup);
    };
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
    // Handler for checkbox change
    const handleCheckboxChange = (e)=>{
        e.stopPropagation();
        if (onSelect) {
            onSelect(!isSelected);
        }
    };
    // Priority badge styling
    const getPriorityBadgeStyle = (priority)=>{
        switch(priority?.toLowerCase()){
            case "high":
                return "bg-red-100 text-red-600";
            case "medium":
                return "bg-yellow-100 text-yellow-600";
            case "low":
                return "bg-blue-100 text-blue-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };
    // Status dot styling
    const getStatusDotStyle = (status)=>{
        switch(status?.toLowerCase()){
            case "in progress":
                return "bg-green-500";
            case "pending":
                return "bg-yellow-500";
            case "postponed":
                return "bg-orange-500";
            case "completed":
            case "cancelled":
                return "bg-gray-400";
            case "denied":
                return "bg-red-500";
            case "-":
            default:
                return "bg-gray-300";
        }
    };
    // Get assignee initials for avatar
    const getAssigneeInitials = (name)=>{
        if (!name) return "";
        const nameParts = name.split(" ");
        if (nameParts.length === 1) return nameParts[0][0];
        return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`;
    };
    // Get background color for avatar based on name
    const getAvatarColor = (name)=>{
        if (!name) return "bg-gray-300";
        const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-red-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-indigo-500",
            "bg-teal-500"
        ];
        // Simple hash function to get consistent color for name
        let hash = 0;
        for(let i = 0; i < name.length; i++){
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };
    // Check if we have assignees
    const hasAssignees = Array.isArray(intervention.assignees) && intervention.assignees.length > 0;
    // Apply border radius styling conditionally based on isFirstCard prop
    const cardStyle = isFirstCard ? "text-sm flex flex-col w-full border-b border-t border-gray-200 bg-white rounded-t-[40px] sm:rounded-t-[40px]" : "text-sm flex flex-col w-full border-b border-t border-gray-200 bg-white";
    // Check if status is Pending (requires approval)
    const needsApproval = intervention.status === "Pending";
    // Render assignee avatar (single or multiple)
    const renderAssigneeAvatars = ()=>{
        if (!hasAssignees) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    size: 16,
                    className: "text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                    lineNumber: 146,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                lineNumber: 145,
                columnNumber: 11
            }, this);
        }
        // If we have only one assignee, show their avatar
        if (intervention.assignees.length === 1) {
            const assignee = intervention.assignees[0];
            if (assignee.avatarUrl) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: assignee.avatarUrl,
                    alt: assignee.name,
                    className: "w-8 h-8 rounded-full object-cover border border-gray-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                    lineNumber: 157,
                    columnNumber: 13
                }, this);
            } else {
                // Show initials avatar if no image is available
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-8 h-8 ${getAvatarColor(assignee.name)} rounded-full flex items-center justify-center text-white font-medium`,
                    children: getAssigneeInitials(assignee.name)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                    lineNumber: 166,
                    columnNumber: 13
                }, this);
            }
        }
        // If we have multiple assignees, show an avatar stack
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center",
            children: [
                intervention.assignees.slice(0, 2).map((assignee, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-7 h-7 rounded-full border-2 border-white ${idx > 0 ? "absolute" : ""}`,
                        style: idx > 0 ? {
                            left: "14px"
                        } : {},
                        children: assignee.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: assignee.avatarUrl,
                            alt: assignee.name,
                            className: "w-full h-full rounded-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                            lineNumber: 183,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full h-full ${getAvatarColor(assignee.name)} rounded-full flex items-center justify-center text-white font-medium text-xs`,
                            children: getAssigneeInitials(assignee.name)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                            lineNumber: 189,
                            columnNumber: 17
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this)),
                intervention.assignees.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center absolute left-7 text-xs font-medium text-gray-600",
                    children: [
                        "+",
                        intervention.assignees.length - 2
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                    lineNumber: 197,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
            lineNumber: 175,
            columnNumber: 9
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cardStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden sm:flex items-center py-4 px-4 cursor-pointer hover:bg-gray-50 ${isFirstCard ? "rounded-t-[40px]" : ""}`,
                onClick: toggleExpand,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-8",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            className: "w-4 h-4 accent-blue-600 cursor-pointer",
                            checked: isSelected,
                            onChange: handleCheckboxChange
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 text-gray-700",
                        children: intervention.date
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow text-gray-700",
                        children: intervention.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 text-center text-gray-500 flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2 h-2 rounded-full mr-2 ${getStatusDotStyle(intervention.status)}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            intervention.status || "-"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-xs ${getPriorityBadgeStyle(intervention.priority)}`,
                            children: intervention.priority
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 flex justify-center",
                        ref: assigneeRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "focus:outline-none",
                                    onClick: toggleAssigneePopup,
                                    children: renderAssigneeAvatars()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                showAssigneePopup && hasAssignees && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute z-20 bg-white shadow-lg rounded-md p-3 w-64 left-1/2 transform -translate-x-1/2 mt-2 border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-sm mb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    size: 16,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        intervention.assignees.length,
                                                        " ",
                                                        intervention.assignees.length === 1 ? 'Assignee' : 'Assignees'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this),
                                        intervention.assignees.map((assignee, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center py-2 ${idx > 0 ? 'border-t border-gray-100' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mr-3",
                                                        children: assignee.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: assignee.avatarUrl,
                                                            alt: assignee.name,
                                                            className: "w-8 h-8 rounded-full object-cover border border-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-8 h-8 ${getAvatarColor(assignee.name)} rounded-full flex items-center justify-center text-white font-medium`,
                                                            children: getAssigneeInitials(assignee.name)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                            lineNumber: 269,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-sm",
                                                                children: assignee.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: assignee.role || "Team Member"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                lineNumber: 276,
                                                                columnNumber: 25
                                                            }, this),
                                                            assignee.contact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: assignee.contact
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                lineNumber: 280,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                        lineNumber: 274,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                lineNumber: 260,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 text-center",
                        children: intervention.location
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36",
                        children: intervention.lastUpdated
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 relative",
                        ref: menuRef,
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1 rounded-full hover:bg-gray-200",
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 w-40 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `../../admin/reported-issues/report-details/${intervention.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                            // onDetails?.(intervention.id);
                                            },
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `../../admin/reported-issues/report-details-edit/${intervention.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full text-left px-4 py-2 hover:bg-gray-100",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                            // Handle edit action
                                            },
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full text-left px-4 py-2 hover:bg-red-50 text-red-600",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onDelete?.(intervention.id);
                                        },
                                        children: "Cancel intervention"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden p-4 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "w-4 h-4 mr-3 accent-blue-600 cursor-pointer",
                                        checked: isSelected,
                                        onChange: handleCheckboxChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700",
                                        children: intervention.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700",
                                children: intervention.location
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700",
                            children: intervention.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: assigneeRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleAssigneePopup,
                                        children: renderAssigneeAvatars()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this),
                                    showAssigneePopup && hasAssignees && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute z-20 bg-white shadow-lg rounded-md p-3 w-64 mt-2 border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-sm mb-2 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        size: 16,
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                        lineNumber: 378,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            intervention.assignees.length,
                                                            " ",
                                                            intervention.assignees.length === 1 ? 'Assignee' : 'Assignees'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this),
                                            intervention.assignees.map((assignee, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-center py-2 ${idx > 0 ? 'border-t border-gray-100' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mr-3",
                                                            children: assignee.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: assignee.avatarUrl,
                                                                alt: assignee.name,
                                                                className: "w-8 h-8 rounded-full object-cover border border-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                lineNumber: 386,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-8 h-8 ${getAvatarColor(assignee.name)} rounded-full flex items-center justify-center text-white font-medium`,
                                                                children: getAssigneeInitials(assignee.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                lineNumber: 392,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                            lineNumber: 384,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-sm",
                                                                    children: assignee.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: assignee.role || "Team Member"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                            lineNumber: 397,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1 rounded-full text-xs ${getPriorityBadgeStyle(intervention.priority)}`,
                                children: intervention.priority
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `../../admin/reported-issues/report-details/${intervention.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#757575] text-white py-2 rounded-md flex-1 text-center",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this),
                            needsApproval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-[#C90000] text-white py-2 rounded-md flex-1 text-center",
                                        onClick: ()=>onDeny?.(intervention.id),
                                        children: "Deny"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-[#0060B4] text-white py-2 rounded-md flex-1 text-center",
                                        onClick: ()=>onApprove?.(intervention.id),
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                lineNumber: 347,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "hidden sm:block",
                initial: {
                    height: 0,
                    opacity: 0,
                    overflow: 'hidden'
                },
                animate: controls,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4 flex justify-end pr-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `../../admin/reported-issues/report-details/${intervention.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#757575] text-white px-4 py-2 rounded-xl w-[145px] text-center",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                    lineNumber: 455,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this),
                            needsApproval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-[#C90000] text-white px-4 py-2 rounded-xl w-[145px] text-center",
                                        onClick: ()=>onDeny?.(intervention.id),
                                        children: "Deny"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 467,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-[#0060B4] text-white px-4 py-2 rounded-xl w-[200px] text-center",
                                        onClick: ()=>onApprove?.(intervention.id),
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                                        lineNumber: 473,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                        lineNumber: 453,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                    lineNumber: 452,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
                lineNumber: 447,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/reported-issues-table/card.jsx",
        lineNumber: 206,
        columnNumber: 7
    }, this);
};
const __TURBOPACK__default__export__ = Card;
}}),
"[project]/src/app/components/reported-issues-table/card-phone.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InterventionsCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
function InterventionsCards({ // Basic information props
id, dateTime = "Wednesday, 12:45", location = "S33", priority = "High", description = "Lorem Opium Lorem Opium...", status = "Complete", // Assignees handling props
assignees = [], avatarPlaceholder = "https://randomuser.me/api/portraits/men/83.jpg", maxVisibleAssignees = 3, // Selection handling props
onSelect = ()=>{}, isSelected = false, selectable = true, // Action handling props
onShowDetails = ()=>{}, onEdit = ()=>{}, onCancel = ()=>{}, onApprove = ()=>{}, onDeny = ()=>{}, // UI customization props
showButtons = true, showMenu = true, showStatus = true, showAssignees = true, lineClamp = 2, // Color customization props
baseColor = "#757575", denyColor = "#C90000", approveColor = "#0060B4", // Additional props for extensibility
className = "", cardStyle = {}, menuOptions = null }) {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Local state for checkbox
    const [localSelected, setLocalSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isSelected);
    // Update local state when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalSelected(isSelected);
    }, [
        isSelected
    ]);
    // Handle clicks outside the menu to close it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        menuOpen
    ]);
    // FIXED: Handle checkbox change to correctly pass both id and selection state
    const handleCheckboxChange = (e)=>{
        e.stopPropagation(); // Prevent any parent click handlers
        const newSelectedState = e.target.checked;
        setLocalSelected(newSelectedState);
        // Call parent's onSelect with both id and selection state
        onSelect(newSelectedState);
    };
    // Get priority color class
    const getPriorityColorClass = (priority)=>{
        switch(priority?.toLowerCase()){
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
        switch(status?.toLowerCase()){
            case "in progress":
                return "bg-green-500";
            case "complete":
            case "completed":
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
    const isCancelled = status?.toLowerCase() === "cancelled";
    // Check if intervention needs approval
    const needsApproval = status?.toLowerCase() === "pending";
    // Check if intervention has assignees for display
    const hasAssignees = Array.isArray(assignees) && assignees.length > 0;
    // Check if we should show "N/A" for cancelled items
    const showNA = isCancelled;
    // Render default or custom menu options
    const renderMenuOptions = ()=>{
        if (menuOptions) {
            return menuOptions;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `../../admin/reported-issues/report-details/${id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "block w-full text-left px-4 py-2 hover:bg-gray-100",
                        onClick: ()=>{
                            onShowDetails(id);
                            setMenuOpen(false);
                        },
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 141,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                    lineNumber: 140,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `../../admin/reported-issues/report-details-edit/${id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-sm flex flex-col w-full border border-gray-10 font-outfit bg-gray-100 text-[#757575] ${className}`,
        style: cardStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row w-full justify-between p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            selectable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: localSelected,
                                onChange: handleCheckboxChange,
                                onClick: (e)=>e.stopPropagation(),
                                className: "h-4 w-4 cursor-pointer",
                                "aria-label": `Select ${description.substring(0, 20)}${description.length > 20 ? '...' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-sm",
                                children: dateTime
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm",
                                children: location
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-2 py-0.5 rounded-full text-xs ${getPriorityColorClass(priority)}`,
                                children: priority
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: menuRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-1 rounded-full hover:bg-gray-200",
                                        onClick: (e)=>{
                                            e.stopPropagation(); // Prevent card selection
                                            setMenuOpen(!menuOpen);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10",
                                        children: renderMenuOptions()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mb-3 text-sm max-h-16 line-clamp-${lineClamp}`,
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-between items-center mb-3",
                        children: [
                            showStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `mr-2 w-2 h-2 ${getStatusColorClass(status)} rounded-full`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            showAssignees && (showNA ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: "N/A"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this) : hasAssignees ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex -space-x-2",
                                children: [
                                    assignees.slice(0, maxVisibleAssignees).map((assignee, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: assignee.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(assignee.name)}&background=random`,
                                            alt: assignee.name || `Assignee ${index + 1}`,
                                            className: "w-6 h-6 rounded-full border border-white"
                                        }, index, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)),
                                    assignees.length > maxVisibleAssignees && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs text-gray-600",
                                        children: [
                                            "+",
                                            assignees.length - maxVisibleAssignees
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this) : null)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    showButtons && needsApproval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white py-2 rounded-md flex-1 text-center text-sm",
                                style: {
                                    backgroundColor: baseColor
                                },
                                onClick: ()=>onShowDetails(id),
                                children: "Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white py-2 rounded-md flex-1 text-center text-sm",
                                style: {
                                    backgroundColor: denyColor
                                },
                                onClick: ()=>onDeny(id),
                                children: "Deny"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white py-2 rounded-md flex-1 text-center text-sm",
                                style: {
                                    backgroundColor: approveColor
                                },
                                onClick: ()=>onApprove(id),
                                children: "Approve"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/reported-issues-table/card-phone.jsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/components/reported-issues-table/table-header.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const TableHeader = ({ selectAll, toggleSelectAll, hasSelectedItems = false, onCancelReports, onSetStatus, onSetPriority, onSetAssignee })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center py-4 px-4 bg-gray-100 border-b border-gray-200 text-sm font-medium min-w-[1000px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 ml-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: selectAll,
                    onChange: toggleSelectAll,
                    className: "w-4 h-4 accent-blue-600 cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            hasSelectedItems ? /* Show action buttons when items are selected */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-[#757575]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancelReports,
                        className: "ml-4 cursor-pointer hover:text-black",
                        children: "Cancel Report"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-3",
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSetStatus,
                        className: "cursor-pointer hover:text-black",
                        children: "Set Status"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSetPriority,
                        className: "ml-4 cursor-pointer hover:text-black",
                        children: "Set Priority"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSetAssignee,
                        className: "ml-4 cursor-pointer hover:text-black",
                        children: "Set Assignee"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, this) : /* Show regular column headers when no items selected */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 text-gray-500",
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow text-gray-500",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 text-center text-gray-500",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 text-center text-gray-500",
                        children: "Priority"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 text-center text-gray-500",
                        children: "Assignee"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 text-center text-gray-500",
                        children: "Location"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 text-gray-500",
                        children: "Last Updated"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8",
                        children: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/reported-issues-table/table-header.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TableHeader;
}}),
"[project]/src/app/components/reported-issues-table/filter-bar.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
//add report
const FilterBar = ({ // State values from parent
search, setSearch, filterStatus, setFilterStatus, filterPriority, setFilterPriority, showDatePicker, setShowDatePicker, selectedDate, resetAllFilters, // Functions from parent
getDateLabel, handleDateSelect, resetDateFilter, applyDateFilter, // Refs from parent
datePickerRef, // Options
statusOptions, priorityOptions })=>{
    // State for filter popups
    const [showMobileFilters, setShowMobileFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dateButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for direct date input
    const [dateInput, setDateInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Set dateInput to the current date when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showDatePicker && !dateInput) {
            // Set to today's date in YYYY-MM-DD format
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            setDateInput(formattedDate);
        }
    }, [
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
                // Set the selected date and close the picker
                handleDateSelect(date.getDate(), date.getMonth(), date.getFullYear());
                applyDateFilter();
                setShowDatePicker(false);
            }
        } catch (error) {
            console.error("Invalid date format", error);
        }
    };
    // Clear the date filter
    const handleClearDate = ()=>{
        resetDateFilter();
        setDateInput('');
        setShowDatePicker(false);
    };
    // Handle clicks outside the filter popup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowMobileFilters(false);
            }
        };
        if (showMobileFilters) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        showMobileFilters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-2 bg-gray-100 border-b border-gray-200 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-grow mr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    className: "border rounded-md pl-8 pr-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            ref: dateButtonRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowMobileFilters(false); // Close filters if open
                                        setShowDatePicker(!showDatePicker);
                                    },
                                    className: "mx-1 px-3 py-1 border rounded-md bg-white text-sm flex items-center whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: getDateLabel()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 20,
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        resetDateFilter();
                                    },
                                    className: "absolute -right-1 -top-1 w-4 h-4 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs",
                                    title: "Clear date filter",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            ref: filterRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowDatePicker(false); // Close date picker if open
                                        setShowMobileFilters(!showMobileFilters);
                                    },
                                    className: "mx-1 p-1 border rounded-md bg-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        size: 18,
                                        className: showMobileFilters ? "text-blue-500" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                showMobileFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 mt-1 w-60 bg-white rounded-md shadow-lg z-30 border border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium mb-2",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilterStatus("All"),
                                                        className: `block w-full text-left px-3 py-2 text-sm rounded ${filterStatus === "All" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`,
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this),
                                                    statusOptions.filter((status)=>status !== "-").map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilterStatus(status),
                                                            className: `block w-full text-left px-3 py-2 text-sm rounded ${filterStatus === status ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`,
                                                            children: status
                                                        }, `status-${status}`, false, {
                                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium mb-2",
                                                children: "Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilterPriority("All"),
                                                        className: `block w-full text-left px-3 py-2 text-sm rounded ${filterPriority === "All" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`,
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    priorityOptions.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilterPriority(priority),
                                                            className: `block w-full text-left px-3 py-2 text-sm rounded ${filterPriority === priority ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`,
                                                            children: priority
                                                        }, `priority-${priority}`, false, {
                                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "../../admin/reported-issues/report-issue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex cursor-pointer items-center bg-[#0060B4] text-white rounded-md px-5 py-1 text-sm ml-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-1",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                            lineNumber: 215,
                                            columnNumber: 7
                                        }, this),
                                        "Add Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 214,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                lineNumber: 213,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center px-4 py-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-[285px] mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute mb-0.5 right-2 bottom-[3px] w-[20px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    className: "border p-4 rounded-[10px] h-[31px] w-[285px] outline-none bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-4",
                            ref: dateButtonRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-200 text-sm",
                                    onClick: ()=>setShowDatePicker(!showDatePicker),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2",
                                            children: getDateLabel()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        resetDateFilter();
                                    },
                                    className: "absolute -right-1 -top-1 w-5 h-5 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs",
                                    title: "Clear date filter",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: resetAllFilters,
                                    className: `px-4 py-1 text-sm rounded-md ${filterStatus === "All" && filterPriority === "All" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`,
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                statusOptions.filter((status)=>status !== "-").map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterStatus(status),
                                        className: `px-3 py-2 text-sm rounded-md ${filterStatus === status ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`,
                                        children: status
                                    }, `status-${status}`, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)),
                                priorityOptions.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterPriority(priority),
                                        className: `px-3 py-2 text-sm rounded-md ${filterPriority === priority ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`,
                                        children: priority
                                    }, `priority-${priority}`, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "../../admin/reported-issues/report-issue",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex cursor-pointer items-center bg-[#0060B4] text-white rounded-md px-5 py-2 text-sm ml-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-1",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    "Add Report"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            showDatePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: datePickerRef,
                className: "fixed inset-0 z-50 flex items-start justify-center pt-32",
                style: {
                    backgroundColor: 'rgba(0,0,0,0.3)'
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        setShowDatePicker(false);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-lg rounded-md border border-gray-200 p-6 w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-base font-medium text-gray-800 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 20,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        "Enter Date Filter"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDatePicker(false),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: dateInput,
                                    onChange: handleDateInputChange,
                                    className: "border border-gray-300 rounded-md px-4 py-3 w-full text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: "Format: YYYY-MM-DD"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-gray-200 text-gray-700 px-5 py-2.5 rounded text-sm hover:bg-gray-300 transition-colors",
                                    onClick: handleClearDate,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#0060B4] text-white px-5 py-2.5 rounded text-sm hover:bg-blue-700 transition-colors",
                                    onClick: handleDateInputSubmit,
                                    children: "Apply Filter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                    lineNumber: 333,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
                lineNumber: 321,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/reported-issues-table/filter-bar.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FilterBar;
}}),
"[project]/src/app/components/reported-issues-table/reported-issues-table.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportedIntervCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/reported-issues-table/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$card$2d$phone$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/reported-issues-table/card-phone.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$table$2d$header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/reported-issues-table/table-header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$filter$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/reported-issues-table/filter-bar.jsx [app-ssr] (ecmascript)");
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
function ReportedIntervCards({ // Data props
reports = [], loading = false, // Handler props
onStatusChange = async (ids, status)=>console.log("Status change:", ids, status), onPriorityChange = async (ids, priority)=>console.log("Priority change:", ids, priority), onCancel = async (ids)=>console.log("Cancel reports:", ids), onApprove = async (id)=>console.log("Approve report:", id), onDeny = async (id)=>console.log("Deny report:", id), onDetails = async (id)=>console.log("View details for report:", id), onDelete = async (id)=>console.log("Delete report:", id), onAssign = async (ids, assigneeIds)=>console.log("Assign reports:", ids, "to", assigneeIds), // Optional customization props
addReportLink = "/admin/reported-issues/report-issue-admin", statusOptions = [
    "In Progress",
    "Pending",
    "Postponed",
    "Completed",
    "Cancelled",
    "Denied"
], priorityOptions = [
    "High",
    "Medium",
    "Low"
], availableAssignees = [] // Available staff to assign
 }) {
    // Internal state
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [filterPriority, setFilterPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [interventions, setInterventions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectAll, setSelectAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal states for status and priority selection
    const [showStatusModal, setShowStatusModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPriorityModal, setShowPriorityModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPriority, setSelectedPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Modal state for assignment
    const [showAssignModal, setShowAssignModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAssignees, setSelectedAssignees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Date filter states
    const [showDatePicker, setShowDatePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [agendaView, setAgendaView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs for click outside handling
    const datePickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statusModalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const priorityModalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const assignModalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize data state from props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInterventions(reports);
    }, [
        reports
    ]);
    // Add these action handlers for selection actions
    const handleCancelReports = async ()=>{
        const selectedIds = Object.keys(selectedItems).filter((id)=>selectedItems[id]);
        if (selectedIds.length === 0) return;
        try {
            // Call the prop handler
            await onCancel(selectedIds);
            // Update local state
            setInterventions((prevInterventions)=>prevInterventions.map((intervention)=>{
                    if (selectedIds.includes(intervention.id.toString())) {
                        return {
                            ...intervention,
                            status: "Cancelled"
                        };
                    }
                    return intervention;
                }));
            // Clear selections after operation
            setSelectedItems({});
            setSelectAll(false);
        } catch (error) {
            console.error("Error cancelling reports:", error);
            alert("Failed to cancel one or more reports");
        }
    };
    const handleSetStatus = ()=>{
        setShowStatusModal(true);
    };
    const handleApplyStatus = async ()=>{
        if (!selectedStatus) {
            setShowStatusModal(false);
            return;
        }
        const selectedIds = Object.keys(selectedItems).filter((id)=>selectedItems[id]);
        if (selectedIds.length === 0) return;
        try {
            // Call the prop handler
            await onStatusChange(selectedIds, selectedStatus);
            // Update local state
            setInterventions((prevInterventions)=>prevInterventions.map((intervention)=>{
                    if (selectedIds.includes(intervention.id.toString())) {
                        return {
                            ...intervention,
                            status: selectedStatus
                        };
                    }
                    return intervention;
                }));
            // Clear selections and close modal
            setSelectedItems({});
            setSelectAll(false);
            setShowStatusModal(false);
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };
    const handleSetPriority = ()=>{
        setShowPriorityModal(true);
    };
    const handleApplyPriority = async ()=>{
        if (!selectedPriority) {
            setShowPriorityModal(false);
            return;
        }
        const selectedIds = Object.keys(selectedItems).filter((id)=>selectedItems[id]);
        if (selectedIds.length === 0) return;
        try {
            // Call the prop handler
            await onPriorityChange(selectedIds, selectedPriority);
            // Update local state
            setInterventions((prevInterventions)=>prevInterventions.map((intervention)=>{
                    if (selectedIds.includes(intervention.id.toString())) {
                        return {
                            ...intervention,
                            priority: selectedPriority
                        };
                    }
                    return intervention;
                }));
            // Clear selections and close modal
            setSelectedItems({});
            setSelectAll(false);
            setShowPriorityModal(false);
        } catch (error) {
            console.error("Error updating priority:", error);
            alert("Failed to update priority");
        }
    };
    // New functions for assignment
    const handleSetAssignee = ()=>{
        setShowAssignModal(true);
    };
    const toggleAssigneeSelection = (assigneeId)=>{
        setSelectedAssignees((prev)=>{
            if (prev.includes(assigneeId)) {
                return prev.filter((id)=>id !== assigneeId);
            } else {
                return [
                    ...prev,
                    assigneeId
                ];
            }
        });
    };
    const handleApplyAssignment = async ()=>{
        if (selectedAssignees.length === 0) {
            setShowAssignModal(false);
            return;
        }
        const selectedIds = Object.keys(selectedItems).filter((id)=>selectedItems[id]);
        if (selectedIds.length === 0) return;
        try {
            // Call the prop handler
            await onAssign(selectedIds, selectedAssignees);
            // Clear selections and close modal
            setSelectedItems({});
            setSelectAll(false);
            setShowAssignModal(false);
            setSelectedAssignees([]);
        } catch (error) {
            console.error("Error assigning interventions:", error);
            alert("Failed to assign interventions");
        }
    };
    // Toggle select all function
    const toggleSelectAll = ()=>{
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        // Create a new selectedItems object based on selectAll state
        const newSelectedItems = {};
        filteredInterventions.forEach((item)=>{
            newSelectedItems[item.id] = newSelectAll;
        });
        setSelectedItems(newSelectedItems);
    };
    // Reset all filters function
    const resetAllFilters = ()=>{
        setFilterStatus("All");
        setFilterPriority("All");
    };
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
        setAgendaView([]);
    };
    // Navigate to previous month
    const prevMonth = ()=>{
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    // Navigate to next month
    const nextMonth = ()=>{
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };
    // Get days in month
    const getDaysInMonth = (year, month)=>{
        return new Date(year, month + 1, 0).getDate();
    };
    // Get day of week for first day of month (0 = Sunday)
    const getFirstDayOfMonth = (year, month)=>{
        return new Date(year, month, 1).getDay();
    };
    // Generate calendar days
    const generateCalendarDays = ()=>{
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);
        // Get days from previous month to fill the first week
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevMonthYear = month === 0 ? year - 1 : year;
        const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
        const days = [];
        // Add days from previous month
        for(let i = firstDayOfMonth - 1; i >= 0; i--){
            days.push({
                day: daysInPrevMonth - i,
                month: prevMonth,
                year: prevMonthYear,
                isCurrentMonth: false
            });
        }
        // Add days from current month
        for(let i = 1; i <= daysInMonth; i++){
            days.push({
                day: i,
                month,
                year,
                isCurrentMonth: true
            });
        }
        // Add days from next month
        const nextMonth = month === 11 ? 0 : month + 1;
        const nextMonthYear = month === 11 ? year + 1 : year;
        const remainingDays = 42 - days.length; // 6 weeks x 7 days = 42
        for(let i = 1; i <= remainingDays; i++){
            days.push({
                day: i,
                month: nextMonth,
                year: nextMonthYear,
                isCurrentMonth: false
            });
        }
        return days;
    };
    // Check if a date is selected
    const isDateSelected = (day, month, year)=>{
        if (!selectedDate) return false;
        const date = new Date(selectedDate);
        return date.getDate() === day && date.getMonth() === month && date.getFullYear() === year;
    };
    // Handle date selection
    const handleDateSelect = (day, month, year)=>{
        const newSelectedDate = new Date(year, month, day);
        setSelectedDate(newSelectedDate);
        generateAgendaForDate(newSelectedDate);
    };
    // Format month name
    const formatMonthYear = (date)=>{
        return date.toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        });
    };
    // Generate agenda for selected date
    const generateAgendaForDate = (date)=>{
        if (!date) {
            setAgendaView([]);
            return;
        }
        // Filter interventions based on selected date
        const filteredByDate = interventions.filter((item)=>{
            // Parse the item date - only use the date field, not lastUpdated
            const itemDate = new Date(item.date);
            let interventionDate;
            if (isNaN(itemDate.getTime())) {
                // Try to extract a date from formats like "12/03/2025"
                const dateMatch = item.date.match(/(\d+)\/(\d+)\/(\d+)/);
                if (dateMatch) {
                    interventionDate = new Date(`${dateMatch[3]}-${dateMatch[1]}-${dateMatch[2]}`);
                } else {
                    // Use current date for demo data with day names
                    interventionDate = new Date();
                }
            } else {
                interventionDate = itemDate;
            }
            // Compare just the date parts
            return interventionDate.toDateString() === date.toDateString();
        });
        // Group by day for the agenda view
        if (filteredByDate.length > 0) {
            setAgendaView([
                {
                    date: date.toDateString(),
                    items: filteredByDate
                }
            ]);
        } else {
            setAgendaView([]);
        }
    };
    // Apply date filter
    const applyDateFilter = ()=>{
        setShowDatePicker(false);
    };
    // Helper function for agenda item priority styling
    const getPriorityBadgeClass = (priority)=>{
        switch(priority?.toLowerCase()){
            case "high":
                return "bg-red-100 text-red-600";
            case "medium":
                return "bg-yellow-100 text-yellow-600";
            case "low":
                return "bg-blue-100 text-blue-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };
    // Close modals when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowDatePicker(false);
            }
            if (statusModalRef.current && !statusModalRef.current.contains(event.target)) {
                setShowStatusModal(false);
            }
            if (priorityModalRef.current && !priorityModalRef.current.contains(event.target)) {
                setShowPriorityModal(false);
            }
            if (assignModalRef.current && !assignModalRef.current.contains(event.target)) {
                setShowAssignModal(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Handler functions for cards using prop handlers
    const handleDelete = async (id)=>{
        try {
            await onDelete(id);
            // Update local state
            setInterventions(interventions.filter((item)=>item.id !== id));
            // Update selectedItems to remove the deleted item
            const newSelectedItems = {
                ...selectedItems
            };
            delete newSelectedItems[id];
            setSelectedItems(newSelectedItems);
        } catch (error) {
            console.error("Error deleting report:", error);
            alert("Failed to delete report");
        }
    };
    const handleApprove = async (id)=>{
        try {
            await onApprove(id);
            // Update local state
            setInterventions(interventions.map((item)=>item.id === id ? {
                    ...item,
                    status: "In Progress"
                } : item));
        } catch (error) {
            console.error("Error approving report:", error);
            alert("Failed to approve report");
        }
    };
    const handleDeny = async (id)=>{
        try {
            await onDeny(id);
            // Update local state
            setInterventions(interventions.map((item)=>item.id === id ? {
                    ...item,
                    status: "Denied"
                } : item));
        } catch (error) {
            console.error("Error denying report:", error);
            alert("Failed to deny report");
        }
    };
    const handleDetails = (id)=>{
        onDetails(id);
    };
    // Handle checkbox selection
    const handleSelect = (id, isSelected)=>{
        const newSelectedItems = {
            ...selectedItems,
            [id]: isSelected
        };
        setSelectedItems(newSelectedItems);
        // Check if all visible items are selected to update selectAll state
        const allSelected = filteredInterventions.every((item)=>newSelectedItems[item.id]);
        setSelectAll(allSelected);
    };
    // Filter interventions based on search, status, priority, and date
    const filteredInterventions = interventions.filter((item)=>{
        // Search filter
        const matchesSearch = !search || Object.values(item).some((val)=>typeof val === 'string' && val.toLowerCase().includes(search.toLowerCase()));
        // Status filter
        const matchesStatus = filterStatus === 'All' || item.status && item.status === filterStatus;
        // Priority filter  
        const matchesPriority = filterPriority === 'All' || item.priority && item.priority === filterPriority;
        // Date filter
        let matchesDate = true;
        if (selectedDate) {
            const itemDate = new Date(item.date);
            let interventionDate;
            if (isNaN(itemDate.getTime())) {
                const dateMatch = item.date.match(/(\d+)\/(\d+)\/(\d+)/);
                if (dateMatch) {
                    interventionDate = new Date(`${dateMatch[3]}-${dateMatch[1]}-${dateMatch[2]}`);
                } else {
                    interventionDate = new Date();
                }
            } else {
                interventionDate = itemDate;
            }
            if (interventionDate.toDateString() !== selectedDate.toDateString()) {
                matchesDate = false;
            }
        }
        return matchesSearch && matchesStatus && matchesPriority && matchesDate;
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAddReport = ()=>{
        router.push(addReportLink);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm flex flex-col w-full font-outfit bg-gray-100 border border-gray-300 rounded h-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-gray-100 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$filter$2d$bar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    addreport: handleAddReport,
                    search: search,
                    setSearch: setSearch,
                    filterStatus: filterStatus,
                    setFilterStatus: setFilterStatus,
                    filterPriority: filterPriority,
                    setFilterPriority: setFilterPriority,
                    showDatePicker: showDatePicker,
                    setShowDatePicker: setShowDatePicker,
                    selectedDate: selectedDate,
                    currentMonth: currentMonth,
                    agendaView: agendaView,
                    datePickerRef: datePickerRef,
                    getDateLabel: getDateLabel,
                    prevMonth: prevMonth,
                    nextMonth: nextMonth,
                    formatMonthYear: formatMonthYear,
                    generateCalendarDays: generateCalendarDays,
                    isDateSelected: isDateSelected,
                    handleDateSelect: handleDateSelect,
                    resetDateFilter: resetDateFilter,
                    formatDate: formatDate,
                    getPriorityBadgeClass: getPriorityBadgeClass,
                    applyDateFilter: applyDateFilter,
                    statusOptions: statusOptions,
                    priorityOptions: priorityOptions,
                    resetAllFilters: resetAllFilters
                }, void 0, false, {
                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                    lineNumber: 540,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            showStatusModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: statusModalRef,
                    className: "bg-white rounded-lg shadow-lg w-80 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-medium mb-4",
                            children: "Change Status"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                statusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedStatus(status),
                                        className: `cursor-pointer p-2 rounded-md hover:bg-gray-100 ${selectedStatus === status ? 'bg-blue-50 border border-blue-300' : ''}`,
                                        children: status
                                    }, status, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-4 pt-2 border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 mr-2",
                                            onClick: ()=>setShowStatusModal(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                            onClick: handleApplyStatus,
                                            children: "Apply"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 579,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                    lineNumber: 574,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                lineNumber: 573,
                columnNumber: 9
            }, this),
            showPriorityModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: priorityModalRef,
                    className: "bg-white rounded-lg shadow-lg w-80 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-medium mb-4",
                            children: "Change Priority"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 615,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                priorityOptions.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedPriority(priority),
                                        className: `cursor-pointer p-2 rounded-md hover:bg-gray-100 ${selectedPriority === priority ? 'bg-blue-50 border border-blue-300' : ''}`,
                                        children: priority
                                    }, priority, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 618,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-4 pt-2 border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 mr-2",
                                            onClick: ()=>setShowPriorityModal(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                            onClick: handleApplyPriority,
                                            children: "Apply"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 635,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                    lineNumber: 628,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                    lineNumber: 611,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                lineNumber: 610,
                columnNumber: 9
            }, this),
            showAssignModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: assignModalRef,
                    className: "bg-white rounded-lg shadow-lg w-80 p-4 max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-medium mb-4",
                            children: "Assign Interventions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this),
                        availableAssignees.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No assignees available"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 656,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                availableAssignees.map((assignee)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>toggleAssigneeSelection(assignee.id),
                                        className: `cursor-pointer p-2 rounded-md hover:bg-gray-100 flex items-center ${selectedAssignees.includes(assignee.id) ? 'bg-blue-50 border border-blue-300' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: assignee.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                        lineNumber: 668,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: assignee.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                        lineNumber: 669,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 667,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 border border-gray-300 rounded flex items-center justify-center",
                                                children: selectedAssignees.includes(assignee.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-3 h-3 text-blue-600",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                        lineNumber: 674,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                    lineNumber: 673,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 671,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, assignee.id, true, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 660,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-4 pt-2 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 mr-2",
                                            onClick: ()=>{
                                                setShowAssignModal(false);
                                                setSelectedAssignees([]);
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 681,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                            onClick: handleApplyAssignment,
                                            disabled: selectedAssignees.length === 0,
                                            children: "Assign"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 690,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                    lineNumber: 680,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 658,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0 z-10 bg-white w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$table$2d$header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        selectAll: selectAll,
                                        toggleSelectAll: toggleSelectAll,
                                        hasSelectedItems: Object.values(selectedItems).some((selected)=>selected === true),
                                        onCancelReports: handleCancelReports,
                                        onSetStatus: handleSetStatus,
                                        onSetPriority: handleSetPriority,
                                        onSetAssignee: handleSetAssignee
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                    lineNumber: 709,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4",
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 723,
                                        columnNumber: 17
                                    }, this) : filteredInterventions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4",
                                        children: "No interventions found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 725,
                                        columnNumber: 17
                                    }, this) : filteredInterventions.map((intervention, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            intervention: intervention,
                                            onDelete: handleDelete,
                                            onApprove: handleApprove,
                                            onDeny: handleDeny,
                                            onDetails: handleDetails,
                                            isFirstCard: index === 0,
                                            isSelected: !!selectedItems[intervention.id],
                                            onSelect: (isSelected)=>handleSelect(intervention.id, isSelected)
                                        }, intervention.id, false, {
                                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                            lineNumber: 728,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                    lineNumber: 721,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                            lineNumber: 708,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:hidden w-full",
                        children: [
                            Object.values(selectedItems).some((selected)=>selected === true) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 z-30 bg-gray-100 border-b border-gray-200 px-4 py-2 gap-2 flex items-center shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    Object.values(selectedItems).filter((selected)=>selected === true).length,
                                                    " selected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedItems({}),
                                                className: "text-gray-400 hover:text-gray-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                    lineNumber: 758,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 754,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 750,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-gray-600 text-sm",
                                                onClick: handleCancelReports,
                                                children: "Cancel PI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 762,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 768,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-gray-600 text-sm",
                                                onClick: handleSetStatus,
                                                children: "Set Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 769,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-gray-600 text-sm",
                                                onClick: handleSetPriority,
                                                children: "Set Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-gray-600 text-sm",
                                                onClick: handleSetAssignee,
                                                children: "Assign To"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                                lineNumber: 781,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                lineNumber: 749,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                lineNumber: 792,
                                columnNumber: 13
                            }, this) : filteredInterventions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-4",
                                children: "No interventions found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                lineNumber: 794,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: filteredInterventions.map((intervention)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$card$2d$phone$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        id: intervention.id,
                                        dateTime: intervention.date,
                                        location: intervention.location,
                                        priority: intervention.priority,
                                        description: intervention.description,
                                        status: intervention.status,
                                        assignees: intervention.assignees,
                                        isSelected: !!selectedItems[intervention.id],
                                        onSelect: (isSelected)=>handleSelect(intervention.id, isSelected),
                                        onShowDetails: ()=>handleDetails(intervention.id),
                                        onEdit: ()=>console.log(`Editing intervention ${intervention.id}`),
                                        onCancel: ()=>handleDelete(intervention.id),
                                        onApprove: ()=>handleApprove(intervention.id),
                                        onDeny: ()=>handleDeny(intervention.id)
                                    }, intervention.id, false, {
                                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                        lineNumber: 798,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                                lineNumber: 796,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
                lineNumber: 705,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/reported-issues-table/reported-issues-table.jsx",
        lineNumber: 537,
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
"[externals]/module [external] (module, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/src/app/(main)/admin/reported-issues/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InterventionsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar/Sidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2f$Nav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/NavBar/Nav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$reported$2d$issues$2d$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/reported-issues-table/reported-issues-table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Images/arrows.svg.mjs { IMAGE => "[project]/public/Images/arrows.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-ssr] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
'use client';
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
;
// ------------------- UTILITY CONSTANTS -------------------
// Status mapping - single source of truth
const STATUS_MAPPINGS = {
    // Backend to frontend
    'PENDING': 'Pending',
    'IN_PROGRESS': 'In Progress',
    'COMPLETED': 'Completed',
    'CANCELLED': 'Cancelled',
    'POSTPONED': 'Postponed',
    'DENIED': 'Denied',
    'APPROVED': 'Approved'
};
// Priority mapping - single source of truth
const PRIORITY_MAPPINGS = {
    // Backend to frontend
    'HIGH': 'High',
    'MEDIUM': 'Medium',
    'LOW': 'Low'
};
// Generate reverse mappings
Object.entries(STATUS_MAPPINGS).forEach(([key, value])=>{
    STATUS_MAPPINGS[value] = key;
});
Object.entries(PRIORITY_MAPPINGS).forEach(([key, value])=>{
    PRIORITY_MAPPINGS[value] = key;
});
// ------------------- UTILITY FUNCTIONS -------------------
// Format date to MM/DD/YYYY
const formatDate = (dateString)=>{
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
// Map backend status to frontend format
const mapStatus = (status)=>STATUS_MAPPINGS[status] || status;
// Map backend priority to frontend format
const mapPriority = (priority)=>PRIORITY_MAPPINGS[priority] || priority;
// Map frontend status back to backend format
const mapStatusToBackend = (status)=>STATUS_MAPPINGS[status] || status;
// Map frontend priority back to backend format
const mapPriorityToBackend = (priority)=>PRIORITY_MAPPINGS[priority] || priority;
// Custom API request hook
const useApiRequest = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Generic API request handler with auth and error handling
    const apiRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (endpoint, options = {})=>{
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Authentication required');
        }
        const response = await fetch(`http://localhost:3001/api/${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                ...options.headers
            }
        });
        // Handle authentication errors
        if (response.status === 401) {
            throw new Error('Session expired');
        }
        if (!response.ok) {
            const text = await response.text();
            throw new Error(`API error ${response.status}: ${text}`);
        }
        return response.json();
    }, []);
    return {
        apiRequest
    };
};
function InterventionsPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { apiRequest } = useApiRequest();
    // -------------- STATE --------------
    const [uiState, setUiState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isMobile: false,
        loading: true,
        error: null,
        isSubmitting: false,
        toast: {
            visible: false,
            message: '',
            type: ''
        }
    });
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        reports: [],
        staffMembers: []
    });
    // -------------- MEMOIZED VALUES --------------
    // Pre-calculated values that don't need to be recalculated on every render
    const statusOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "In Progress",
            "Pending",
            "Postponed",
            "Completed",
            "Cancelled",
            "Denied"
        ], []);
    const priorityOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "High",
            "Medium",
            "Low"
        ], []);
    // -------------- HELPER FUNCTIONS --------------
    // Toast notification helper
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, type = 'success')=>{
        setUiState((prev)=>({
                ...prev,
                toast: {
                    visible: true,
                    message,
                    type
                }
            }));
        setTimeout(()=>setUiState((prev)=>({
                    ...prev,
                    toast: {
                        visible: false,
                        message: '',
                        type: ''
                    }
                })), 3000);
    }, []);
    // Authentication check helper
    const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const token = sessionStorage.getItem('token');
        if (!token) {
            showToast('Authentication required. Please login again.', 'error');
            setTimeout(()=>router.push('/login'), 2000);
            return false;
        }
        return true;
    }, [
        router,
        showToast
    ]);
    // Handle API errors consistently
    const handleApiError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((error, actionName)=>{
        console.error(`Error ${actionName}:`, error);
        if (error.message === 'Session expired') {
            showToast('Session expired. Please login again.', 'error');
            setTimeout(()=>router.push('/login'), 2000);
            return;
        }
        showToast(`${actionName} failed: ${error.message}`, 'error');
    }, [
        router,
        showToast
    ]);
    // Add this function near your other utility functions at the top
    // This function converts data to CSV format
    const convertToCSV = (objArray)=>{
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        // Add header row
        const headers = [
            'ID',
            'Date',
            'Description',
            'Status',
            'Priority',
            'Location',
            'Equipment Code',
            'Equipment Type',
            'Reporter',
            'Assignees'
        ];
        str += headers.join(',') + '\r\n';
        // Add data rows
        for(let i = 0; i < array.length; i++){
            let line = '';
            // ID
            line += `"${array[i].id}",`;
            // Date
            line += `"${array[i].date}",`;
            // Description - escape quotes and newlines for CSV
            const safeDescription = array[i].description?.replace(/"/g, '""') || '';
            line += `"${safeDescription}",`;
            // Status
            line += `"${array[i].status}",`;
            // Priority
            line += `"${array[i].priority}",`;
            // Location
            line += `"${array[i].location}",`;
            // Equipment Code
            line += `"${array[i].equipmentCode}",`;
            // Equipment Type
            line += `"${array[i].equipmentType}",`;
            // Reporter (name only)
            const reporterName = array[i].reporter?.name || 'N/A';
            line += `"${reporterName}",`;
            // Assignees (names joined with semicolons)
            const assignees = array[i].assignees.map((a)=>a.name).join('; ');
            line += `"${assignees}"`;
            str += line + '\r\n';
        }
        return str;
    };
    // Add this function to your component
    const handleExportCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (uiState.isSubmitting) return;
        try {
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: true
                }));
            showToast('Generating CSV file...', 'info');
            // Convert reports data to CSV
            const csv = convertToCSV(data.reports);
            // Create a Blob with the CSV data
            const blob = new Blob([
                csv
            ], {
                type: 'text/csv;charset=utf-8;'
            });
            // Create a download link and trigger the download
            const link = document.createElement('a');
            // Handle browser differences
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, 'interventions-report.csv');
            } else {
                // For other browsers
                const url = URL.createObjectURL(blob);
                link.href = url;
                link.style.display = 'none';
                link.setAttribute('download', `interventions-report-${new Date().toISOString().split('T')[0]}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }
            showToast('CSV file generated successfully', 'success');
        } catch (error) {
            console.error("Error generating CSV:", error);
            showToast(`CSV generation failed: ${error.message}`, 'error');
        } finally{
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: false
                }));
        }
    }, [
        data.reports,
        showToast,
        uiState.isSubmitting
    ]);
    // -------------- RESPONSIVE DESIGN --------------
    // Check for mobile view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // -------------- DATA FETCHING --------------
    // Fetch staff members (technicians)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchStaff = async ()=>{
            try {
                if (!checkAuth()) return;
                const data = await apiRequest('technicians');
                if (data.success && Array.isArray(data.data)) {
                    setData((prev)=>({
                            ...prev,
                            staffMembers: data.data.map((user)=>({
                                    id: user.id,
                                    name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email,
                                    role: user.role || 'Staff',
                                    email: user.email
                                }))
                        }));
                }
            } catch (error) {
                handleApiError(error, 'fetching staff members');
                setUiState((prev)=>({
                        ...prev,
                        error: `Failed to load technicians: ${error.message}`
                    }));
            }
        };
        fetchStaff();
    }, [
        apiRequest,
        checkAuth,
        handleApiError
    ]);
    // Transform API data to component format
    const transformInterventionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((items)=>{
        return items.map((item)=>({
                id: item.id,
                date: formatDate(item.createdAt),
                description: item.description,
                status: mapStatus(item.status),
                priority: mapPriority(item.priority),
                assignees: item.assignees.map((a)=>({
                        name: `${a.firstName || ''} ${a.lastName || ''}`.trim() || a.email,
                        role: a.role || '',
                        contact: a.email || '',
                        avatarUrl: a.avatarUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(a.firstName || '')
                    })),
                reporter: item.reportedBy ? {
                    name: `${item.reportedBy.firstName || ''} ${item.reportedBy.lastName || ''}`.trim() || item.reportedBy.email,
                    role: 'Reporter',
                    contact: item.reportedBy.email || '',
                    avatarUrl: item.reportedBy.avatarUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(item.reportedBy.firstName || 'Unknown')
                } : null,
                location: item.location?.name || 'Unknown location',
                equipmentCode: item.equipment?.inventoryCode || 'N/A',
                equipmentType: item.equipment?.type?.name || 'Unknown',
                lastUpdated: formatDate(item.updatedAt),
                _originalData: item
            }));
    }, []);
    // Fetch interventions data from API
    const fetchInterventions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setUiState((prev)=>({
                    ...prev,
                    loading: true,
                    error: null
                }));
            if (!checkAuth()) return;
            const result = await apiRequest('intervention');
            // Transform API data to match component format
            if (result.success && Array.isArray(result.data)) {
                const transformedData = transformInterventionData(result.data);
                setData((prev)=>({
                        ...prev,
                        reports: transformedData
                    }));
            } else {
                throw new Error('Invalid response format from server');
            }
        } catch (error) {
            handleApiError(error, 'fetching interventions');
            setUiState((prev)=>({
                    ...prev,
                    error: error.message || "Failed to load interventions"
                }));
        } finally{
            setUiState((prev)=>({
                    ...prev,
                    loading: false
                }));
        }
    }, [
        apiRequest,
        checkAuth,
        handleApiError,
        transformInterventionData
    ]);
    // Initial data fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchInterventions();
    }, [
        fetchInterventions
    ]);
    // -------------- ACTION HANDLERS --------------
    // Reusable function for updating intervention
    const updateIntervention = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (ids, updateData, successMessage)=>{
        if (uiState.isSubmitting || !ids.length) return false;
        try {
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: true
                }));
            if (!checkAuth()) return false;
            let successCount = 0;
            let failedIds = [];
            // Process each ID
            for (const id of ids){
                try {
                    await apiRequest(`intervention/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(updateData)
                    });
                    successCount++;
                } catch (error) {
                    console.error(`Error updating intervention ${id}:`, error);
                    failedIds.push(id);
                }
            }
            // If any were successful, update UI and refresh data
            if (successCount > 0) {
                if (failedIds.length > 0) {
                    showToast(`${successMessage} ${successCount} items, ${failedIds.length} failed`, 'warning');
                } else {
                    showToast(`${successMessage} ${successCount} items`, 'success');
                }
                // Refresh data from API
                setTimeout(()=>fetchInterventions(), 500);
                return true;
            } else {
                showToast('Failed to update any items', 'error');
                return false;
            }
        } catch (error) {
            handleApiError(error, 'updating interventions');
            return false;
        } finally{
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: false
                }));
        }
    }, [
        apiRequest,
        checkAuth,
        fetchInterventions,
        handleApiError,
        showToast,
        uiState.isSubmitting
    ]);
    // Handle assignment of technicians to interventions
    const handleAssignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (ids, assigneeIds)=>{
        if (uiState.isSubmitting) return false;
        try {
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: true
                }));
            // Validation checks
            if (!ids.length || !assigneeIds.length) {
                showToast('Please select both interventions and technicians to assign', 'error');
                return false;
            }
            if (!checkAuth()) return false;
            // Map the frontend parameter names to what the backend expects
            const requestData = {
                interventionIds: ids,
                technicianIds: assigneeIds
            };
            await apiRequest('intervention/assign-multiple', {
                method: 'POST',
                body: JSON.stringify(requestData)
            });
            showToast('Technicians assigned successfully', 'success');
            // Update local state immediately for better UX
            setData((prev)=>({
                    ...prev,
                    reports: prev.reports.map((report)=>{
                        if (ids.includes(report.id)) {
                            // Find corresponding technicians to add as assignees
                            const newAssignees = prev.staffMembers.filter((staff)=>assigneeIds.includes(staff.id)).map((staff)=>({
                                    name: staff.name,
                                    role: staff.role || 'Technician',
                                    contact: staff.email || '',
                                    avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}`
                                }));
                            // Combine existing and new assignees, removing duplicates
                            const existingAssigneeIds = new Set(report.assignees.map((a)=>a.name));
                            const filteredNewAssignees = newAssignees.filter((a)=>!existingAssigneeIds.has(a.name));
                            return {
                                ...report,
                                status: 'Approved',
                                assignees: [
                                    ...report.assignees,
                                    ...filteredNewAssignees
                                ]
                            };
                        }
                        return report;
                    })
                }));
            // Refresh data from server after local update
            setTimeout(()=>fetchInterventions(), 500);
            return true;
        } catch (error) {
            handleApiError(error, 'assigning technicians');
            return false;
        } finally{
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: false
                }));
        }
    }, [
        apiRequest,
        checkAuth,
        fetchInterventions,
        handleApiError,
        showToast,
        uiState.isSubmitting
    ]);
    // Handle status change for interventions
    const handleStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (ids, status)=>{
        const backendStatus = mapStatusToBackend(status);
        return updateIntervention(ids, {
            status: backendStatus
        }, 'Updated status for');
    }, [
        updateIntervention
    ]);
    // Handle priority change for interventions
    const handlePriorityChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (ids, priority)=>{
        const backendPriority = mapPriorityToBackend(priority);
        return updateIntervention(ids, {
            priority: backendPriority
        }, 'Updated priority for');
    }, [
        updateIntervention
    ]);
    // Handle cancellation of interventions
    const handleCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (ids)=>{
        if (uiState.isSubmitting) return false;
        if (!Array.isArray(ids)) ids = [
            ids
        ]; // Convert single ID to array
        if (!ids.length) {
            showToast('No interventions selected', 'error');
            return false;
        }
        // Confirm cancellation with user
        if (!window.confirm(`Are you sure you want to cancel ${ids.length} intervention(s)?`)) {
            return false;
        }
        return updateIntervention(ids, {
            status: 'CANCELLED'
        }, 'Cancelled');
    }, [
        showToast,
        updateIntervention,
        uiState.isSubmitting
    ]);
    // Handle deletion of an intervention
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (uiState.isSubmitting) return false;
        try {
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: true
                }));
            // Confirm deletion with user
            if (!window.confirm(`Are you sure you want to delete this intervention? This action cannot be undone.`)) {
                return false;
            }
            if (!checkAuth()) return false;
            await apiRequest(`intervention/${id}`, {
                method: 'DELETE'
            });
            // Update local state
            setData((prev)=>({
                    ...prev,
                    reports: prev.reports.filter((report)=>report.id !== id)
                }));
            showToast('Intervention deleted successfully', 'success');
            return true;
        } catch (error) {
            handleApiError(error, 'deleting intervention');
            return false;
        } finally{
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: false
                }));
        }
    }, [
        apiRequest,
        checkAuth,
        handleApiError,
        showToast,
        uiState.isSubmitting
    ]);
    // Handle approval of an intervention
    const handleApprove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        return updateIntervention([
            id
        ], {
            status: 'APPROVED'
        }, 'Approved');
    }, [
        updateIntervention
    ]);
    // Handle denial of an intervention
    const handleDeny = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (uiState.isSubmitting) return false;
        // Confirm denial with user
        if (!window.confirm(`Are you sure you want to deny this intervention?`)) {
            return false;
        }
        return updateIntervention([
            id
        ], {
            status: 'DENIED'
        }, 'Denied');
    }, [
        updateIntervention,
        uiState.isSubmitting
    ]);
    // View details of an intervention
    const handleViewDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        router.push(`/admin/reported-issues/${id}`);
        return true;
    }, [
        router
    ]);
    // Handle PDF export with lazy-loading
    const handleExportPDF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (uiState.isSubmitting) return;
        try {
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: true
                }));
            showToast('Generating PDF report...', 'info');
            // Create new document
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsPDF"]();
            // Add title and header
            doc.setFontSize(18);
            doc.setTextColor(6, 96, 180); // #0060B4
            doc.text('ESILOGIS Interventions Report', 14, 20);
            // Add generation info
            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0);
            doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
            doc.text(`Total interventions: ${data.reports.length}`, 14, 35);
            // Prepare table data
            const tableColumn = [
                "ID",
                "Date",
                "Description",
                "Status",
                "Priority",
                "Location"
            ];
            const tableRows = data.reports.map((report)=>[
                    report.id,
                    report.date,
                    report.description?.substring(0, 30) + (report.description?.length > 30 ? '...' : ''),
                    report.status,
                    report.priority,
                    report.location
                ]);
            // Create table
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
                head: [
                    tableColumn
                ],
                body: tableRows,
                startY: 40,
                styles: {
                    fontSize: 8,
                    cellPadding: 3
                },
                headStyles: {
                    fillColor: [
                        6,
                        96,
                        180
                    ],
                    textColor: [
                        255,
                        255,
                        255
                    ]
                },
                alternateRowStyles: {
                    fillColor: [
                        240,
                        240,
                        240
                    ]
                },
                margin: {
                    top: 40
                }
            });
            // Add summary section
            const lastY = doc.lastAutoTable.finalY + 10;
            doc.setFontSize(12);
            doc.text('Summary by Status:', 14, lastY);
            // Count interventions by status
            const statusCounts = data.reports.reduce((counts, report)=>{
                counts[report.status] = (counts[report.status] || 0) + 1;
                return counts;
            }, {});
            // Add status summary table
            const statusRows = Object.entries(statusCounts).map(([status, count])=>[
                    status,
                    count,
                    `${Math.round(count / data.reports.length * 100)}%`
                ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
                head: [
                    [
                        'Status',
                        'Count',
                        'Percentage'
                    ]
                ],
                body: statusRows,
                startY: lastY + 5,
                styles: {
                    fontSize: 8
                },
                headStyles: {
                    fillColor: [
                        100,
                        100,
                        100
                    ]
                }
            });
            // Save PDF
            doc.save(`interventions-report-${new Date().toISOString().split('T')[0]}.pdf`);
            showToast('PDF report generated successfully', 'success');
        } catch (error) {
            console.error("Error generating PDF:", error);
            showToast(`PDF generation failed: ${error.message}`, 'error');
        } finally{
            setUiState((prev)=>({
                    ...prev,
                    isSubmitting: false
                }));
        }
    }, [
        data.reports,
        showToast,
        uiState.isSubmitting
    ]);
    // Destructure state for cleaner JSX
    const { isMobile, loading, error, isSubmitting, toast } = uiState;
    const { reports, staffMembers } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full min-h-screen flex flex-row items-start justify-center bg-gray-100 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block absolute top-0 right-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Images$2f$arrows$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Images$2f$arrows$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "",
                    width: 212,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                    lineNumber: 671,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            toast.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center ${toast.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : toast.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' : toast.type === 'warning' ? 'bg-yellow-50 text-yellow-800 border border-yellow-200' : 'bg-blue-50 text-blue-800 border border-blue-200'}`,
                children: [
                    toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 684,
                        columnNumber: 40
                    }, this),
                    toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 685,
                        columnNumber: 38
                    }, this),
                    toast.type === 'warning' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 686,
                        columnNumber: 40
                    }, this),
                    toast.type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                        className: "h-5 w-5 mr-2 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 687,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 688,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                lineNumber: 678,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full z-30 ${isMobile ? 'mt-24' : 'ml-[134px]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "p-6 font-semibold text-[26.07px]",
                            children: "Reported Issues"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                            lineNumber: 695,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border-b border-t text-red-700 w-full py-4 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-bold",
                                        children: "Error loading data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                lineNumber: 703,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "block mb-4",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-md transition-colors",
                                    disabled: loading,
                                    onClick: fetchInterventions,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                className: "h-4 w-4 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                                lineNumber: 715,
                                                columnNumber: 55
                                            }, this),
                                            " Retrying..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                        lineNumber: 715,
                                        columnNumber: 19
                                    }, this) : 'Retry'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                lineNumber: 708,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 702,
                        columnNumber: 11
                    }, this),
                    loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                    className: "h-10 w-10 text-[#0060B4] animate-spin mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                    lineNumber: 726,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Loading interventions..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                    lineNumber: 727,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                            lineNumber: 725,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 724,
                        columnNumber: 11
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[calc(100vh-180px)] w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$reported$2d$issues$2d$table$2f$reported$2d$issues$2d$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            reports: reports,
                            loading: loading,
                            onStatusChange: handleStatusChange,
                            onPriorityChange: handlePriorityChange,
                            onCancel: handleCancel,
                            onDelete: handleDelete,
                            onApprove: handleApprove,
                            onDeny: handleDeny,
                            onAssign: handleAssignment,
                            onDetails: handleViewDetails,
                            addReportLink: "/admin/reported-issues/report-issue-admin",
                            statusOptions: statusOptions,
                            priorityOptions: priorityOptions,
                            availableAssignees: staffMembers,
                            isProcessing: isSubmitting
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                            lineNumber: 735,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 734,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                lineNumber: 693,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 right-5 z-40 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `bg-[#49733e] px-6 py-2 rounded-xl hover:bg-[#3a5d30] transition-colors text-white flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`,
                        onClick: handleExportCSV,
                        disabled: isSubmitting || loading || !!error || reports.length === 0,
                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                    className: "h-4 w-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                    lineNumber: 765,
                                    columnNumber: 13
                                }, this),
                                " Generating..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                    lineNumber: 767,
                                    columnNumber: 13
                                }, this),
                                " Export CSV"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 759,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `bg-[#474747] px-6 py-2 rounded-xl hover:bg-[#333333] transition-colors text-white flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`,
                        onClick: handleExportPDF,
                        disabled: isSubmitting || loading || !!error || reports.length === 0,
                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                    className: "h-4 w-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                                    lineNumber: 778,
                                    columnNumber: 13
                                }, this),
                                " Generating PDF..."
                            ]
                        }, void 0, true) : 'Download as PDF'
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                        lineNumber: 772,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
                lineNumber: 757,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/admin/reported-issues/page.jsx",
        lineNumber: 668,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__03e6b8a6._.js.map