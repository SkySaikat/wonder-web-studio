module.exports = [
"[project]/src/components/growth-chart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GrowthChart",
    ()=>GrowthChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const channels = [
    {
        name: 'Website',
        color: '#3c2bf5',
        end: 5,
        points: [
            1,
            1.03,
            .98,
            1.05,
            1.18,
            1.38,
            1.62,
            2.12,
            2.8,
            3.55,
            4.1,
            5
        ]
    },
    {
        name: 'Facebook',
        color: '#236eae',
        end: 3,
        points: [
            1,
            .98,
            1.04,
            1.06,
            1.1,
            1.23,
            1.42,
            1.74,
            2.02,
            2.4,
            2.73,
            3
        ]
    },
    {
        name: 'Instagram',
        color: '#c82e76',
        end: 3,
        points: [
            1,
            1.06,
            1.02,
            1.08,
            1.2,
            1.4,
            1.61,
            1.91,
            2.2,
            2.51,
            2.8,
            3
        ]
    },
    {
        name: 'Pinterest',
        color: '#74621a',
        end: 5,
        points: [
            1,
            1.01,
            1.04,
            1.02,
            1.1,
            1.22,
            1.5,
            1.92,
            2.5,
            3.15,
            4.2,
            5
        ]
    }
];
function GrowthChart() {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All channels');
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(11);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    const shown = channels.filter((c)=>selected === 'All channels' || selected === c.name);
    const x = (n)=>64 + n * 73;
    const y = (v)=>316 - (v - 1) * 58;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section growth-section",
        "aria-labelledby": `${id}-heading`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "growth-heading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "scenario-badge",
                                    children: "ILLUSTRATIVE SCENARIO · NOT CLIENT RESULTS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: `${id}-heading`,
                                    children: [
                                        "One connected strategy.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 281
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "More room to grow."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 286
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 233
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "A website people can find. Social content worth following. Explore how progress across channels could build over a 12-month plan."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 318
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 146
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "growth-target",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 491
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "months.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 523
                                        }, this),
                                        "One bigger picture."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 510
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 460
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/growth-chart.tsx",
                    lineNumber: 11,
                    columnNumber: 114
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "growth-dashboard",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "growth-controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "small-label",
                                            children: "EXPLORE AN EXAMPLE PATH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 638
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "From groundwork to momentum."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 698
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 633
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Channel",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "aria-label": "Chart channel",
                                            value: selected,
                                            onChange: (e)=>setSelected(e.target.value),
                                            children: [
                                                'All channels',
                                                ...channels.map((c)=>c.name)
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/components/growth-chart.tsx",
                                                    lineNumber: 11,
                                                    columnNumber: 901
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 755
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 741
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 600
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "growth-legend",
                            children: channels.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            style: {
                                                background: c.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 1021
                                        }, this),
                                        c.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: [
                                                c.end,
                                                "× example"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 1062
                                        }, this)
                                    ]
                                }, c.name, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 1002
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 954
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "growth-chart-scroll",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "growth-desktop-chart",
                                    viewBox: "0 0 950 390",
                                    role: "img",
                                    "aria-labelledby": `${id}-title ${id}-desc`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                            id: `${id}-title`,
                                            children: "Hypothetical website and social visits over twelve months"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 1259
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                                            id: `${id}-desc`,
                                            children: "Illustrative relative paths only. All start at the same baseline, with a hypothetical studio start in month four and acceleration after month seven. Facebook and Instagram end at three times the starting level; website and Pinterest at five times. These are invented examples, not measured results or expected returns."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 1350
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                                id: `${id}-arrow`,
                                                markerWidth: "7",
                                                markerHeight: "7",
                                                refX: "5",
                                                refY: "3",
                                                orient: "auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0,0 L6,3 L0,6",
                                                    fill: "none",
                                                    stroke: "#171717"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/growth-chart.tsx",
                                                    lineNumber: 11,
                                                    columnNumber: 1797
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 1705
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 1699
                                        }, this),
                                        [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "64",
                                                        y1: y(v),
                                                        x2: "870",
                                                        y2: y(v),
                                                        stroke: "#e4ded5",
                                                        strokeDasharray: "3 6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1899
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "14",
                                                        y: y(v) + 4,
                                                        fill: "#7f776d",
                                                        fontSize: "12",
                                                        children: v === 1 ? 'Base' : `${v}×`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 1982
                                                    }, this)
                                                ]
                                            }, v, true, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 1888
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: x(3),
                                            y: "48",
                                            width: x(11) - x(3),
                                            height: "268",
                                            fill: "#ddcff0",
                                            opacity: ".17"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 2070
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: x(3),
                                            y1: "50",
                                            x2: x(3),
                                            y2: "324",
                                            stroke: "#9d8caf",
                                            strokeDasharray: "5 6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 2154
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: x(3) + 12,
                                            y: "40",
                                            fontSize: "12",
                                            fill: "#6b517f",
                                            children: "Studio starts · example month 4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 2237
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M680 47 Q749 38 782 99",
                                            stroke: "#171717",
                                            fill: "none",
                                            strokeWidth: "1.4",
                                            markerEnd: `url(#${id}-arrow)`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 2329
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "565",
                                            y: "34",
                                            fontSize: "13",
                                            fill: "#171717",
                                            children: "The work begins to connect ↗︎"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 2442
                                        }, this),
                                        shown.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        className: "growth-line",
                                                        points: c.points.map((v, i)=>`${x(i)},${y(v)}`).join(' '),
                                                        fill: "none",
                                                        stroke: c.color,
                                                        strokeWidth: "3",
                                                        strokeLinejoin: "round",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 2558
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: x(month),
                                                        cy: y(c.points[month]),
                                                        r: "5",
                                                        fill: c.color,
                                                        stroke: "#fff",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 2741
                                                    }, this)
                                                ]
                                            }, c.name, true, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 2542
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: x(month),
                                            x2: x(month),
                                            y1: "65",
                                            y2: "324",
                                            stroke: "#171717",
                                            opacity: ".2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 2845
                                        }, this),
                                        Array.from({
                                            length: 12
                                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: x(i),
                                                y: "350",
                                                fontSize: "12",
                                                textAnchor: "middle",
                                                fill: "#7b7267",
                                                children: [
                                                    "M",
                                                    i + 1
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 2958
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "64",
                                            y: "380",
                                            fontSize: "11",
                                            fill: "#81766b",
                                            children: "Relative scale · Each channel starts at its own baseline. Audience totals are not comparable."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 3053
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 1145
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "growth-mobile-chart",
                                    viewBox: "0 0 340 230",
                                    role: "img",
                                    "aria-label": "Illustrative twelve-month relative growth paths, not client results or a forecast.",
                                    children: [
                                        [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                x2: "315",
                                                y1: 186 - (v - 1) * 35,
                                                y2: 186 - (v - 1) * 35,
                                                stroke: "#e4ded5",
                                                strokeDasharray: "3 5"
                                            }, v, false, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 3395
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "99",
                                            x2: "99",
                                            y1: "31",
                                            y2: "190",
                                            stroke: "#9d8caf",
                                            strokeDasharray: "4 5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 3504
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "92",
                                            y: "19",
                                            fontSize: "10",
                                            fill: "#6b517f",
                                            children: "Example start ↓︎"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 3583
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M239 28 Q282 15 302 38",
                                            stroke: "#171717",
                                            fill: "none",
                                            markerEnd: `url(#${id}-arrow)`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/growth-chart.tsx",
                                            lineNumber: 11,
                                            columnNumber: 3655
                                        }, this),
                                        shown.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: c.points.map((v, i)=>`${18 + i * 27},${186 - (v - 1) * 35}`).join(' '),
                                                        fill: "none",
                                                        stroke: c.color,
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 3780
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: 18 + month * 27,
                                                        cy: 186 - (c.points[month] - 1) * 35,
                                                        r: "4",
                                                        fill: c.color,
                                                        stroke: "white",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 3952
                                                    }, this)
                                                ]
                                            }, c.name, true, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 3764
                                            }, this)),
                                        [
                                            0,
                                            3,
                                            7,
                                            11
                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: 18 + i * 27,
                                                y: "209",
                                                fontSize: "10",
                                                textAnchor: "middle",
                                                fill: "#756b62",
                                                children: [
                                                    "M",
                                                    i + 1
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 4089
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 3209
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 1108
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "growth-scrubber",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: `${id}-month`,
                                    children: [
                                        "Explore month ",
                                        month + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 4232
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: `${id}-month`,
                                    type: "range",
                                    min: "0",
                                    max: "11",
                                    step: "1",
                                    value: month,
                                    onChange: (e)=>setMonth(Number(e.target.value))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 4294
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                                    "aria-live": "polite",
                                    children: shown.map((c)=>`${c.name}: ${c.points[month].toFixed(1)}×`).join(' · ')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 4421
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 4199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "growth-disclosure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Example, not a promise."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 4567
                                }, this),
                                " These 3× and 5× curves are fictional illustrations of possible growth patterns, not Wonderweb client results, benchmarks or forecasts. Real performance can rise, stay flat or decline. Scope, starting point, spend, seasonality and platform changes affect outcomes."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 4534
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "growth-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: "View the illustrative data as a table"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 4909
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                                children: "Hypothetical multiples of each channel’s starting level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 4977
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            children: "Month"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/growth-chart.tsx",
                                                            lineNumber: 11,
                                                            columnNumber: 5062
                                                        }, this),
                                                        channels.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: c.name
                                                            }, c.name, false, {
                                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                                lineNumber: 11,
                                                                columnNumber: 5093
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/growth-chart.tsx",
                                                    lineNumber: 11,
                                                    columnNumber: 5058
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 5051
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: Array.from({
                                                    length: 12
                                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: i + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                                lineNumber: 11,
                                                                columnNumber: 5188
                                                            }, this),
                                                            channels.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        c.points[i],
                                                                        "×"
                                                                    ]
                                                                }, c.name, true, {
                                                                    fileName: "[project]/src/components/growth-chart.tsx",
                                                                    lineNumber: 11,
                                                                    columnNumber: 5219
                                                                }, this))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/components/growth-chart.tsx",
                                                        lineNumber: 11,
                                                        columnNumber: 5176
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/growth-chart.tsx",
                                                lineNumber: 11,
                                                columnNumber: 5138
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/growth-chart.tsx",
                                        lineNumber: 11,
                                        columnNumber: 4970
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 4965
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 4875
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/growth-chart.tsx",
                    lineNumber: 11,
                    columnNumber: 566
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "growth-phases",
                    children: [
                        [
                            '01 / ESTABLISH',
                            'Audit the site, organize measurement and agree the content direction.'
                        ],
                        [
                            '02 / CONNECT',
                            'Publish useful pages, build a social rhythm and improve the path to inquiry.'
                        ],
                        [
                            '03 / REFINE',
                            'Review qualified visits and inquiries, then invest in what the evidence supports.'
                        ]
                    ].map(([title, body])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 5660
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: body
                                }, void 0, false, {
                                    fileName: "[project]/src/components/growth-chart.tsx",
                                    lineNumber: 11,
                                    columnNumber: 5680
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/src/components/growth-chart.tsx",
                            lineNumber: 11,
                            columnNumber: 5643
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/growth-chart.tsx",
                    lineNumber: 11,
                    columnNumber: 5302
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/results/",
                    className: "text-link",
                    children: "Read documented campaign stories ↗︎"
                }, void 0, false, {
                    fileName: "[project]/src/components/growth-chart.tsx",
                    lineNumber: 11,
                    columnNumber: 5707
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/growth-chart.tsx",
            lineNumber: 11,
            columnNumber: 87
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/growth-chart.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/project-gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectGallery",
    ()=>ProjectGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/content-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const filters = [
    'All projects',
    'Home services',
    'Brands & commerce',
    'Web platforms'
];
function ProjectGallery({ initial = 6 }) {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All projects');
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const matching = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientProjects"].filter((p)=>filter === 'All projects' || p.filter === filter);
    const visible = expanded ? matching : matching.slice(0, initial);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-filter",
                "aria-label": "Filter client projects",
                children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": filter === f,
                        onClick: ()=>{
                            setFilter(f);
                            setExpanded(false);
                        },
                        children: [
                            f,
                            f === 'All projects' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientProjects"].length
                            }, void 0, false, {
                                fileName: "[project]/src/components/project-gallery.tsx",
                                lineNumber: 9,
                                columnNumber: 208
                            }, this) : null
                        ]
                    }, f, true, {
                        fileName: "[project]/src/components/project-gallery.tsx",
                        lineNumber: 9,
                        columnNumber: 95
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/project-gallery.tsx",
                lineNumber: 9,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "gallery-count",
                "aria-live": "polite",
                children: [
                    "Showing ",
                    visible.length,
                    " of ",
                    matching.length,
                    " projects"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/project-gallery.tsx",
                lineNumber: 9,
                columnNumber: 267
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "client-project-grid",
                children: visible.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "client-project",
                        href: `/work/${p.slug}/`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "client-project-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: p.image,
                                        alt: `${p.label} website project`,
                                        width: 1000,
                                        height: 750,
                                        sizes: "(max-width:700px) 90vw,(max-width:1000px) 44vw,30vw"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/project-gallery.tsx",
                                        lineNumber: 9,
                                        columnNumber: 536
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/project-gallery.tsx",
                                            lineNumber: 9,
                                            columnNumber: 685
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/project-gallery.tsx",
                                        lineNumber: 9,
                                        columnNumber: 679
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/project-gallery.tsx",
                                lineNumber: 9,
                                columnNumber: 498
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "client-project-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/project-gallery.tsx",
                                        lineNumber: 9,
                                        columnNumber: 761
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.filter
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/project-gallery.tsx",
                                        lineNumber: 9,
                                        columnNumber: 779
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/project-gallery.tsx",
                                lineNumber: 9,
                                columnNumber: 723
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/project-gallery.tsx",
                                lineNumber: 9,
                                columnNumber: 808
                            }, this)
                        ]
                    }, p.slug, true, {
                        fileName: "[project]/src/components/project-gallery.tsx",
                        lineNumber: 9,
                        columnNumber: 426
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/project-gallery.tsx",
                lineNumber: 9,
                columnNumber: 373
            }, this),
            matching.length > initial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "gallery-more",
                onClick: ()=>setExpanded(!expanded),
                children: [
                    expanded ? 'Show selected projects' : 'See more client projects',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                        size: 18,
                        style: {
                            transform: expanded ? 'rotate(180deg)' : undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/project-gallery.tsx",
                        lineNumber: 9,
                        columnNumber: 996
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/project-gallery.tsx",
                lineNumber: 9,
                columnNumber: 864
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/project-gallery.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/service-explorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceExplorer",
    ()=>ServiceExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-ssr] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-smartphone.js [app-ssr] (ecmascript) <export default as MonitorSmartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-ssr] (ecmascript) <export default as Settings2>");
'use client';
;
;
;
;
const services = [
    {
        label: 'Websites',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__["MonitorSmartphone"],
        title: 'Make the first visit feel like the right choice.',
        text: 'A website should explain your offer, show why it matters and make the next step obvious. We combine design, development and content so your pages work as part of the sales process.',
        points: [
            'Custom, responsive design built around your customers',
            'Service pages, portfolio content and clear inquiry paths',
            'Content migrations, URL mapping and technical foundations',
            'A defined plan for updates after launch'
        ],
        slug: 'web-design',
        note: 'A good fit when your website feels dated, is hard to update or leaves visitors unsure what to do.',
        steps: [
            'Your offer',
            'A clear experience',
            'A useful inquiry'
        ]
    },
    {
        label: 'SEO & local search',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        title: 'Be useful where your next customer is looking.',
        text: 'Search visibility starts with understanding what you sell and what your customer needs to know. We organize services, local information and useful answers into pages that are clear to people and search engines.',
        points: [
            'Search-intent research and a practical page plan',
            'Technical checks, metadata and internal linking',
            'Google Business Profile work for eligible local businesses',
            'Content updates tied to real services and customer questions'
        ],
        slug: 'seo',
        note: 'A good fit when your services are hard to find or useful pages are getting little relevant search traffic.',
        steps: [
            'Customer questions',
            'Relevant pages',
            'Qualified discovery'
        ]
    },
    {
        label: 'Google Ads',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"],
        title: 'Meet demand with a message worth clicking.',
        text: 'Reach people looking for the service you offer. We connect keywords, ad copy, landing pages and tracking, then review whether the inquiries match your market and the jobs you want.',
        points: [
            'Service and location targeting with a defined budget',
            'Search-term reviews and negative-keyword management',
            'Landing-page and conversion-path improvements',
            'Reporting that separates clicks, inquiries and qualified leads'
        ],
        slug: 'google-ads',
        note: 'A good fit when you have a clear offer, capacity to take on work and a team ready to follow up.',
        steps: [
            'Active demand',
            'Relevant ad',
            'Sales conversation'
        ]
    },
    {
        label: 'Meta campaigns',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        title: 'Give the right audience a reason to stop.',
        text: 'Facebook and Instagram campaigns need an offer people understand and creative that earns attention. We bring messaging, visual assets and lead capture together, with room to test and learn.',
        points: [
            'Campaign structure around the offer and audience',
            'Creative variations for Facebook and Instagram',
            'Lead forms or landing pages matched to the campaign',
            'Audience, creative and lead-quality reviews'
        ],
        slug: 'meta-ads',
        note: 'A good fit when your product or service benefits from visual storytelling and a compelling offer.',
        steps: [
            'A relevant audience',
            'Creative that connects',
            'A clear next step'
        ]
    },
    {
        label: 'Social & creative',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: 'Show up with something worth seeing.',
        text: 'A useful social presence shows your work, answers questions and gives people a feel for your business. We plan the calendar, shape the content and design the assets so your brand feels consistent.',
        points: [
            'Content themes, calendars and approval workflows',
            'Social posts and captions shaped for each channel',
            'Thumbnails, campaign graphics and branded templates',
            'Content repurposing from your projects and expertise'
        ],
        slug: 'social-media-management',
        note: 'A good fit when content is inconsistent or your team has ideas but little time to turn them into posts.',
        steps: [
            'Real expertise',
            'Consistent content',
            'A recognizable brand'
        ]
    },
    {
        label: 'Website care',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"],
        title: 'Keep your website moving with your business.',
        text: 'Services change. Offers evolve. Your website needs to keep up. We handle agreed updates and publishing work, review key journeys and help prioritize the next useful improvement.',
        points: [
            'Content publishing and agreed editing allowances',
            'Platform-appropriate technical maintenance',
            'Form and important-link checks after relevant changes',
            'A clear process for requests, reviews and larger projects'
        ],
        slug: 'website-management',
        note: 'A good fit when your website is live but keeping it accurate and useful has become another unfinished job.',
        steps: [
            'Your update',
            'A careful change',
            'A checked experience'
        ]
    }
];
function ServiceExplorer() {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    function move(event, index) {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % services.length;
        else if (event.key === 'ArrowLeft') next = (index + services.length - 1) % services.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = services.length - 1;
        else return;
        event.preventDefault();
        setSelected(next);
        tabs.current[next]?.focus();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "service-explorer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "service-tabs",
                role: "tablist",
                "aria-label": "Explore our services",
                children: services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `explorer-theme-${i}`,
                        ref: (el)=>{
                            tabs.current[i] = el;
                        },
                        role: "tab",
                        id: `service-tab-${i}`,
                        "aria-selected": selected === i,
                        "aria-controls": `service-panel-${i}`,
                        tabIndex: selected === i ? 0 : -1,
                        onKeyDown: (e)=>move(e, i),
                        onClick: ()=>setSelected(i),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "explorer-tab-dot",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/service-explorer.tsx",
                                lineNumber: 17,
                                columnNumber: 296
                            }, this),
                            s.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/service-explorer.tsx",
                                lineNumber: 17,
                                columnNumber: 360
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/components/service-explorer.tsx",
                        lineNumber: 17,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/service-explorer.tsx",
                lineNumber: 16,
                columnNumber: 3
            }, this),
            services.map((s, i)=>{
                const Icon = s.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `explorer-theme-${i}`,
                    role: "tabpanel",
                    id: `service-panel-${i}`,
                    "aria-labelledby": `service-tab-${i}`,
                    hidden: selected !== i,
                    tabIndex: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "service-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-panel-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "small-label explorer-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 22,
                                                columnNumber: 51
                                            }, this),
                                            " WHAT WE DO"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 22,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: s.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: s.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: s.points.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 39
                                                    }, this),
                                                    p
                                                ]
                                            }, p, true, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 27
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 24,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "text-link",
                                        href: `/services/${s.slug}/`,
                                        children: [
                                            "Explore ",
                                            s.label.toLowerCase(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 95
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 6
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/service-explorer.tsx",
                                lineNumber: 21,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "explorer-visual",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "explorer-card-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "explorer-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 30,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/service-explorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 73
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "WONDERWEB STUDIO",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 137
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Made to work together."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 142
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 115
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "explorer-spark",
                                                "aria-hidden": "true",
                                                children: "✳︎"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 178
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 28,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "explorer-art-title",
                                        children: [
                                            [
                                                'First impressions.',
                                                'Get discovered.',
                                                'Make every click',
                                                'Stop the scroll.',
                                                'Make your mark.',
                                                'Keep things'
                                            ][i],
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: [
                                                    'Lasting connections.',
                                                    'Stay relevant.',
                                                    'mean more.',
                                                    'Start a conversation.',
                                                    'Keep showing up.',
                                                    'moving forward.'
                                                ][i]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 157
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 29,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "explorer-flow",
                                        children: s.steps.map((step, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `explorer-step explorer-step-${j}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "explorer-step-number",
                                                        children: [
                                                            "0",
                                                            j + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 123
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: step
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 175
                                                    }, this),
                                                    j === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 22,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 201
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "explorer-flow-arrow",
                                                        "aria-hidden": "true",
                                                        children: "↓︎"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/service-explorer.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 246
                                                    }, this)
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 60
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "explorer-note",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "IS THIS YOU?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: s.note
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/service-explorer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 62
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/service-explorer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 6
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/service-explorer.tsx",
                                lineNumber: 27,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/service-explorer.tsx",
                        lineNumber: 20,
                        columnNumber: 4
                    }, this)
                }, s.label, false, {
                    fileName: "[project]/src/components/service-explorer.tsx",
                    lineNumber: 19,
                    columnNumber: 50
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/service-explorer.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/video.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioVideo",
    ()=>StudioVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
'use client';
;
;
;
function StudioVideo() {
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "studio-video",
        children: [
            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                title: "Wonder Web Studio introduction",
                src: "https://www.youtube-nocookie.com/embed/vi4cH6cD3Sg?autoplay=1&rel=0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/src/components/video.tsx",
                lineNumber: 4,
                columnNumber: 119
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setPlaying(true),
                "aria-label": "Play the 75-second Wonder Web Studio introduction",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "video-kicker",
                        children: "A LOOK INSIDE THE STUDIO"
                    }, void 0, false, {
                        fileName: "[project]/src/components/video.tsx",
                        lineNumber: 4,
                        columnNumber: 468
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "video-wordmark",
                        children: [
                            "A little",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/video.tsx",
                                lineNumber: 4,
                                columnNumber: 571
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "wonder."
                            }, void 0, false, {
                                fileName: "[project]/src/components/video.tsx",
                                lineNumber: 4,
                                columnNumber: 576
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/video.tsx",
                        lineNumber: 4,
                        columnNumber: 530
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "play-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "play-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    fill: "currentColor",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/video.tsx",
                                    lineNumber: 4,
                                    columnNumber: 654
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/video.tsx",
                                lineNumber: 4,
                                columnNumber: 626
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Meet Wonderweb Studio",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Our original introduction · 1:15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/video.tsx",
                                        lineNumber: 4,
                                        columnNumber: 725
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/video.tsx",
                                lineNumber: 4,
                                columnNumber: 698
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 25
                            }, void 0, false, {
                                fileName: "[project]/src/components/video.tsx",
                                lineNumber: 4,
                                columnNumber: 779
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/video.tsx",
                        lineNumber: 4,
                        columnNumber: 599
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/video.tsx",
                lineNumber: 4,
                columnNumber: 366
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "video-note",
                children: [
                    "Pressing play loads YouTube. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.youtube.com/watch?v=vi4cH6cD3Sg",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Watch on YouTube"
                    }, void 0, false, {
                        fileName: "[project]/src/components/video.tsx",
                        lineNumber: 4,
                        columnNumber: 879
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/video.tsx",
                lineNumber: 4,
                columnNumber: 821
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/video.tsx",
        lineNumber: 4,
        columnNumber: 80
    }, this);
}
}),
"[project]/src/lib/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignStories",
    ()=>campaignStories,
    "clientProjects",
    ()=>clientProjects
]);
const clientProjects = [
    {
        slug: 'allsafe-electric',
        label: 'Allsafe Electric',
        title: 'From a service search to the sales team.',
        category: 'Home services · Website & lead capture',
        filter: 'Home services',
        image: '/work/allsafe-electric.webp',
        description: 'A Next.js website for a Colorado electrical business, bringing service information, local content and inquiry handling into one customer journey.',
        challenge: 'A contractor website has to do two jobs: help a homeowner understand the service and give the business a dependable way to handle the inquiry. The migration also needed to account for the existing pages.',
        approach: 'The work combined a WordPress and Elementor migration with reusable service and location templates. Call tracking and quote forms were connected to the lead workflow, with URL mapping included in the migration plan.',
        deliverables: [
            'Next.js website development',
            'Service and location page system',
            'CallRail tracking and quote forms',
            'Zapier-to-CRM lead handoff'
        ],
        website: 'https://allsafehomeservice.com/'
    },
    {
        slug: 'clear-day-baths',
        label: 'Clear Day Baths',
        title: 'A clearer path to the next remodeling project.',
        category: 'Home services · Website & automation',
        filter: 'Home services',
        image: '/work/clear-day-baths.webp',
        description: 'A bathroom remodeling website connecting service-area content, quote requests and CRM follow-up for a business serving Northern Virginia and Maryland.',
        challenge: 'Bathroom remodeling customers need to understand the offer and decide whether a company serves their area. Behind the website, the sales team needs usable inquiry information.',
        approach: 'The project brought an existing WordPress site into a static-first Next.js structure. Service content, URL mapping, tracking and inquiry handoffs were treated as parts of the same delivery.',
        deliverables: [
            'WordPress-to-Next.js migration',
            'Service-area content architecture',
            'Technical SEO and URL mapping',
            'Quote forms and CRM automation'
        ],
        website: 'https://cleardaybaths.com/'
    },
    {
        slug: 'jr-watkins',
        label: 'J.R. Watkins',
        title: 'A familiar brand. A considered web experience.',
        category: 'Brand website · Responsive development',
        filter: 'Brands & commerce',
        image: '/work/jr-watkins.webp',
        description: 'Website development for J.R. Watkins, with a focus on responsive presentation, brand identity and a clear customer experience.',
        challenge: 'An established consumer brand needs an online experience that feels consistent with the products people already know. The design and development work must support that identity across devices.',
        approach: 'The project focused on the website interface, responsive implementation and search-friendly presentation. Product and brand information were considered together so the experience could feel coherent rather than assembled from disconnected pages.',
        deliverables: [
            'Website development',
            'Responsive interface implementation',
            'Brand-led presentation',
            'Search-focused website improvements'
        ],
        website: 'https://jrwatkins.com/'
    },
    {
        slug: 'workiz',
        label: 'Workiz',
        title: 'Making a service-business platform easier to explore.',
        category: 'Business software · Web development',
        filter: 'Web platforms',
        image: '/work/workiz.webp',
        description: 'Website development work for Workiz, a platform serving field-service businesses. A project at the intersection of software and the trades.',
        challenge: 'Software buyers need to understand how a platform fits the way they work. A website needs to make that information approachable while supporting a consistent experience on smaller screens.',
        approach: 'The work centered on content presentation, the web interface and responsive development. This portfolio entry describes the website contribution; it does not claim ownership of the Workiz software product.',
        deliverables: [
            'Website development',
            'Responsive page presentation',
            'Content and interface implementation'
        ],
        website: 'https://workiz.com/'
    },
    {
        slug: 'windsor',
        label: 'Windsor',
        title: 'Fashion, with a confident digital presence.',
        category: 'E-commerce · Website design',
        filter: 'Brands & commerce',
        image: '/work/windsor.webp',
        description: 'E-commerce website design work focused on the Windsor shopping experience and its brand presentation.',
        challenge: 'Fashion websites need to make room for product imagery without losing clarity in the shopping journey. The presentation must remain recognizable as the same brand across screen sizes.',
        approach: 'The design work explored the relationship between brand identity, product presentation and the responsive storefront. The focus was the customer-facing web experience, with the visuals serving the shopping journey.',
        deliverables: [
            'E-commerce presentation',
            'Brand-led website design',
            'Responsive customer journey'
        ],
        website: 'https://windsorstore.com/'
    },
    {
        slug: 'ezeie',
        label: 'ezeie',
        title: 'An existing platform, ready for smaller screens.',
        category: 'UX design · Responsive web application',
        filter: 'Web platforms',
        image: '/work/ezeie.webp',
        description: 'A UX and web application project focused on updating an existing website experience for mobile and desktop use.',
        challenge: 'An interface that only works comfortably on a desktop limits the ways customers can use a platform. The redesign needed to consider the same information and actions at different sizes.',
        approach: 'The project focused on the user experience, responsive layout and cross-device presentation. The aim was a coherent interface that feels considered on the screen the visitor actually has.',
        deliverables: [
            'Website experience redesign',
            'Mobile-friendly layouts',
            'Responsive frontend presentation'
        ],
        website: 'https://ezeie.com/'
    },
    {
        slug: 'california-olive-ranch',
        label: 'California Olive Ranch',
        title: 'A distinctive brand, thoughtfully presented.',
        category: 'Brand website · Web development',
        filter: 'Brands & commerce',
        image: '/work/california-olive.webp',
        description: 'Website development work for California Olive Ranch, connecting brand presentation with a responsive web interface.',
        challenge: 'A distinctive food brand needs a digital presentation that gives its products and story appropriate space. The experience also needs to work beyond a single ideal desktop layout.',
        approach: 'The website work focused on the interface and responsive implementation, carrying the brand presentation into the browser. The project is shown as development work, without an unsupported claim about changes in sales.',
        deliverables: [
            'Website development',
            'Brand experience implementation',
            'Responsive web presentation'
        ],
        website: 'https://californiaoliveranch.com/'
    },
    {
        slug: 'crafted-look',
        label: 'Crafted Look',
        title: 'An editorial home for ideas worth exploring.',
        category: 'Editorial · Content website',
        filter: 'Web platforms',
        image: '/work/crafted-look.webp',
        description: 'A blog and editorial website built around approachable content, clear navigation and a responsive reading experience.',
        challenge: 'A content website needs to help a visitor move from one useful idea to the next. The reading experience and content organization matter as much as the homepage.',
        approach: 'The work brought editorial content into a structured blog interface, with attention to navigation and responsive presentation. It illustrates the publishing side of our website work.',
        deliverables: [
            'Editorial website development',
            'Content-led navigation',
            'Responsive blog interface'
        ],
        website: 'https://craftedlook.com/'
    },
    {
        slug: 'the-unseen-threads',
        label: 'The Unseen Threads',
        title: 'A place for stories to find their readers.',
        category: 'Editorial · Website design',
        filter: 'Web platforms',
        image: '/work/unseen-threads.webp',
        description: 'A blog and website design project with a focus on a responsive home for editorial content.',
        challenge: 'A story-led website needs to create a comfortable place to read and explore. The design has to support the content rather than compete with it.',
        approach: 'The work focused on the blog experience and responsive website presentation. Page structure and visual rhythm were considered as part of the reading journey.',
        deliverables: [
            'Blog website experience',
            'Editorial web design',
            'Responsive page presentation'
        ],
        website: 'https://theunseenthreads.com/'
    },
    {
        slug: 'read-the-anime',
        label: 'Read The Anime',
        title: 'A content destination for a curious audience.',
        category: 'Publishing · Web development',
        filter: 'Web platforms',
        image: '/work/read-the-anime.webp',
        description: 'An anime-focused blog website project that organizes content into a responsive reading experience.',
        challenge: 'A specialist publication needs to make a growing body of content approachable. Readers should be able to understand where they are and continue exploring relevant material.',
        approach: 'The project centered on the blog interface, content organization and responsive implementation. It is an example of building for a subject-focused audience rather than a generic company brochure.',
        deliverables: [
            'Blog and content experience',
            'Content-led page structure',
            'Responsive web development'
        ],
        website: 'https://readtheanime.com/'
    },
    {
        slug: 'dococlock',
        label: 'DocoClock',
        title: 'Connecting the appointment journey.',
        category: 'Healthcare platform · Full-stack development',
        filter: 'Web platforms',
        image: '/work/dococlock.webp',
        description: 'A healthcare platform bringing doctor discovery, appointments, live queues and digital prescriptions into one connected healthcare experience.',
        challenge: 'Patients and healthcare teams need different tools around the same appointment. A shared platform has to accommodate those roles without making every screen do every job.',
        approach: 'React and Supabase support six role-specific interfaces. The shared frontend also extends to Android through Capacitor. The project brings patient-facing discovery and appointment flows together with the interfaces used by clinical and administrative teams.',
        deliverables: [
            'Doctor and hospital discovery',
            'Appointment and live-queue interfaces',
            'Six role-specific experiences',
            'Shared web and Android codebase'
        ]
    },
    {
        slug: 'pet-cy',
        label: 'Pet-cy',
        title: 'A welcoming storefront for pet essentials.',
        category: 'E-commerce · Catalog & storefront',
        filter: 'Brands & commerce',
        image: '/work/pet-cy.webp',
        description: 'An e-commerce storefront for a Cyprus pet supply business, bringing its catalog, offers and shopping information together.',
        challenge: 'A pet supply business needs to present products and current offers clearly while making the store feel approachable to new shoppers.',
        approach: 'The storefront brings the product catalog, special offers, gift cards and partnership information into one shopping experience. This entry describes the website scope, rather than attributing unverified revenue outcomes.',
        deliverables: [
            'E-commerce storefront',
            'Product catalog presentation',
            'Special offers and gift cards',
            'Partnership information'
        ]
    }
];
const campaignStories = [
    {
        "slug": "remodeling-lower-lead-cost",
        "label": "Bathroom remodeling company",
        "title": "A smarter campaign mix. 59.19% lower lead costs.",
        "metric": "−59.19%",
        "metricLabel": "automated-campaign CPL vs. standard baseline",
        "period": "90-day year-over-year review",
        "service": "google-ads",
        "description": "A remodeler facing more expensive search auctions diversified its campaign mix and increased total leads by 7.13%.",
        "challenge": "Traditional search inquiries became more expensive as competition intensified. The company needed to protect lead volume without simply bidding more on the same searches.",
        "approach": "The campaign mix expanded into automated cross-network placements and website-driven search ads, with budget directed toward more efficient inquiry sources.",
        "results": [
            [
                "−59.19%",
                "automated-campaign CPL vs. standard baseline"
            ],
            [
                "−41.87%",
                "website-driven search CPL vs. traditional campaigns"
            ],
            [
                "+7.13%",
                "total leads in the reported comparison"
            ]
        ],
        "context": "The review compared 90-day periods year over year. The two cost reductions describe different campaign types against their stated baselines; neither is an account-wide reduction. Absolute dollar costs and closed-sale revenue are not supplied."
    },
    {
        "slug": "remodeling-search-two-year-results",
        "label": "Regional bathroom remodeler",
        "title": "85+ leads a month. A two-year search program.",
        "metric": "85+",
        "metricLabel": "average monthly leads over two years",
        "period": "Two-year reported average · SEO + paid search",
        "service": "seo",
        "description": "An Indiana bathroom remodeler combined service-page improvements and paid search to build a sustained flow of inquiries.",
        "challenge": "The company needed local visibility for shower installations, tub-to-shower conversions and bathroom renovations in a competitive regional market.",
        "approach": "The work aligned high-intent searches with improved service content and Google Ads. Local relevance and a useful route to inquiry supported the combined search program.",
        "results": [
            [
                "85+",
                "average monthly leads over two years"
            ],
            [
                "4",
                "core keywords reported in the top three"
            ],
            [
                "8",
                "keywords reported in the top ten"
            ]
        ],
        "context": "The lead figure is a reported monthly average across two years, not a guaranteed minimum in every month or an organic-only result. Exact start and end dates and channel-level lead attribution are not supplied. Modeled sales estimates are excluded."
    },
    {
        slug: 'roofing-local-search',
        label: 'Regional roofing contractor',
        title: 'More relevant searches. 53 booked appointments.',
        metric: '53',
        metricLabel: 'confirmed appointments',
        period: 'Three-month campaign · Spring 2026',
        service: 'local-seo',
        description: 'A roofing search strategy redirected attention from broad visibility toward homeowners within the service area.',
        challenge: 'The site attracted impressions from outside the contractor’s market. The priority was to reach people who could become local customers.',
        approach: 'The work refocused content and metadata on local roofing intent, improved the technical structure, simplified quote requests and introduced call tracking.',
        results: [
            [
                '53',
                'confirmed appointments'
            ],
            [
                '17',
                'additional priority opportunities'
            ],
            [
                '415 → 598',
                'homepage clicks'
            ]
        ],
        context: 'The appointment count covers the three-month campaign. Homepage clicks are a separate search metric; they should not be added to calls or form leads. Historical results are specific to this engagement.'
    },
    {
        slug: 'bathroom-paid-search-efficiency',
        label: 'Bathroom remodeling company',
        title: 'More conversions. 43.66% lower cost per lead.',
        metric: '−43.66%',
        metricLabel: 'cost per lead versus launch phase',
        period: 'Launch phase compared with optimized phase',
        service: 'google-ads',
        description: 'A bathroom remodeling advertising campaign focused its bidding and geographic targeting on conversion opportunities.',
        challenge: 'The initial campaign phase produced four conversions at a relatively high acquisition cost.',
        approach: 'The work shifted toward conversion-focused bidding, narrowed geographic targeting and used incoming performance data to refine the campaign.',
        results: [
            [
                '4 → 21',
                'recorded conversions'
            ],
            [
                '−43.66%',
                'cost per lead'
            ],
            [
                '5.33% → 9.95%',
                'conversion rate'
            ]
        ],
        context: 'These figures compare campaign phases. The source does not specify equal-length date windows or confirm that every conversion became a customer. They are historical campaign results, not a forecast.'
    }
];
}),
];

//# sourceMappingURL=src_17y8rixs4a2d8._.js.map