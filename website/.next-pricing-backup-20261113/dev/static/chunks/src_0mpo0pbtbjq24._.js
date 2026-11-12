(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/analytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics,
    "trackEvent",
    ()=>trackEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const KEY = 'wonderweb-analytics-consent-v1';
function trackEvent(name, parameters = {}) {
    try {
        if (localStorage.getItem(KEY) === 'granted') window.gtag?.('event', name, parameters);
    } catch  {}
}
function Analytics() {
    _s();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-EZ5WDZDQWC';
    const valid = !!id && /^G-[A-Z0-9]+$/.test(id);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(KEY);
                setChoice(stored);
                setShow(valid && !stored);
            } catch  {
                setShow(valid);
            }
            ;
            const open = {
                "Analytics.useEffect.open": ()=>setShow(true)
            }["Analytics.useEffect.open"];
            const trigger = document.querySelector('[data-cookie-settings]');
            trigger?.addEventListener('click', open);
            return ({
                "Analytics.useEffect": ()=>trigger?.removeEventListener('click', open)
            })["Analytics.useEffect"];
        }
    }["Analytics.useEffect"], [
        valid
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if (ready && choice === 'granted' && id) window.gtag?.('event', 'page_view', {
                page_path: path,
                page_location: window.location.origin + path,
                page_title: document.title
            });
        }
    }["Analytics.useEffect"], [
        path,
        ready,
        choice,
        id
    ]);
    function choose(value) {
        try {
            localStorage.setItem(KEY, value);
        } catch  {}
        setChoice(value);
        setShow(false);
        if (window.gtag) {
            window.gtag('consent', 'update', {
                analytics_storage: value,
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
            });
        }
        if (value === 'denied' && ready) window.location.reload();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            valid && choice === 'granted' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "google-analytics",
                src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
                strategy: "afterInteractive",
                onLoad: ()=>{
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function() {
                        window.dataLayer.push(arguments);
                    };
                    window.gtag('consent', 'default', {
                        analytics_storage: 'granted',
                        ad_storage: 'denied',
                        ad_user_data: 'denied',
                        ad_personalization: 'denied'
                    });
                    window.gtag('js', new Date());
                    window.gtag('config', id, {
                        send_page_view: false
                    });
                    setReady(true);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/analytics.tsx",
                lineNumber: 14,
                columnNumber: 39
            }, this) : null,
            show ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cookie-banner",
                role: "region",
                "aria-label": "Cookie preferences",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "A small note on cookies."
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics.tsx",
                                lineNumber: 14,
                                columnNumber: 585
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    valid ? 'With your permission, we use Google Analytics to understand how our website is used. You can decline and still use the site.' : 'Optional analytics is not currently enabled. Essential preferences keep your choice saved.',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/privacy-policy/",
                                        children: "Privacy details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/analytics.tsx",
                                        lineNumber: 14,
                                        columnNumber: 857
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/analytics.tsx",
                                lineNumber: 14,
                                columnNumber: 626
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics.tsx",
                        lineNumber: 14,
                        columnNumber: 580
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>choose('denied'),
                        children: "Essential only"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics.tsx",
                        lineNumber: 14,
                        columnNumber: 913
                    }, this),
                    valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "accept",
                        onClick: ()=>choose('granted'),
                        children: "Allow analytics"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics.tsx",
                        lineNumber: 14,
                        columnNumber: 982
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/analytics.tsx",
                lineNumber: 14,
                columnNumber: 503
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/analytics.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_s(Analytics, "W9CFQXo8gy+kFGfv1AtSEXaTeBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Analytics;
var _c;
__turbopack_context__.k.register(_c, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/booking.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookCallButton",
    ()=>BookCallButton,
    "BookingProvider",
    ()=>BookingProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/content-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inquiry$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inquiry-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const BookingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function BookCallButton({ children = 'Book a call', className = 'button', service, icon = true, onOpen }) {
    _s();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BookingContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: className,
        onClick: ()=>{
            onOpen?.();
            open?.(service);
        },
        children: [
            children,
            icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 10,
                columnNumber: 337
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/booking.tsx",
        lineNumber: 10,
        columnNumber: 234
    }, this);
}
_s(BookCallButton, "9vHodV/Z09XRJYi9eZSj0aIceb8=");
_c = BookCallButton;
const commonZones = [
    'UTC',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Toronto',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Dhaka',
    'Asia/Dubai',
    'Asia/Kolkata',
    'Asia/Singapore',
    'Australia/Sydney'
];
function BookingPicker({ onSelect }) {
    _s1();
    const [zone, setZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('UTC');
    const [zones, setZones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(commonZones);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingPicker.useEffect": ()=>{
            const local = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setZone(local);
            setMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateInZone"])(new Date(), local), 1).slice(0, 7));
            setZones(Array.from(new Set([
                local,
                'UTC',
                ...typeof Intl.supportedValuesOf === 'function' ? Intl.supportedValuesOf('timeZone') : commonZones
            ])));
        }
    }["BookingPicker.useEffect"], []);
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateInZone"])(new Date(), zone);
    const first = month || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(today, 1).slice(0, 7);
    const [y, m] = first.split('-').map(Number);
    const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const start = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
    const monthDate = new Date(Date.UTC(y, m - 1, 1));
    const monthLabel = new Intl.DateTimeFormat('en', {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    }).format(monthDate);
    const shift = (offset)=>{
        const d = new Date(Date.UTC(y, m - 1 + offset, 1));
        setMonth(d.toISOString().slice(0, 7));
    };
    const times = Array.from({
        length: 48
    }, (_, i)=>`${String(Math.floor(i / 2)).padStart(2, '0')}:${i % 2 ? '30' : '00'}`);
    function next() {
        if (!date || !time || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validBookingDate"])(date, zone)) {
            setError('Choose a future date and a preferred time.');
            return;
        }
        onSelect({
            date,
            time,
            timeZone: zone,
            durationMinutes: 30
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "booking-selection",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "booking-step-label",
                children: "01 / CHOOSE YOUR PREFERRED TIME"
            }, void 0, false, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 44
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "A time that works for you."
            }, void 0, false, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 117
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Choose a preference for a 30-minute introduction. We’ll confirm availability by email."
            }, void 0, false, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 152
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "booking-zone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 20,
                        columnNumber: 277
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Time zone"
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 20,
                        columnNumber: 296
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        "aria-label": "Time zone",
                        value: zone,
                        onChange: (e)=>{
                            setZone(e.target.value);
                            setDate('');
                            setTime('');
                            setMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateInZone"])(new Date(), e.target.value), 1).slice(0, 7));
                        },
                        children: zones.map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: z,
                                children: z.replace(/_/g, ' ')
                            }, z, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 510
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 20,
                        columnNumber: 318
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 245
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "booking-time-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "booking-calendar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "calendar-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Previous month",
                                        onClick: ()=>shift(-1),
                                        disabled: first <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(today, 1).slice(0, 7),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 20,
                                            columnNumber: 810
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 20,
                                        columnNumber: 690
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        "aria-live": "polite",
                                        children: monthLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 20,
                                        columnNumber: 843
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Next month",
                                        onClick: ()=>shift(1),
                                        disabled: first >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(today, 90).slice(0, 7),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 20,
                                            columnNumber: 1007
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 20,
                                        columnNumber: 891
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 656
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "calendar-weekdays",
                                "aria-hidden": "true",
                                children: [
                                    'S',
                                    'M',
                                    'T',
                                    'W',
                                    'T',
                                    'F',
                                    'S'
                                ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: d
                                    }, i, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 20,
                                        columnNumber: 1143
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 1047
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "calendar-days",
                                children: [
                                    Array.from({
                                        length: start
                                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, `empty-${i}`, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 20,
                                            columnNumber: 1240
                                        }, this)),
                                    Array.from({
                                        length: days
                                    }, (_, i)=>{
                                        const value = `${first}-${String(i + 1).padStart(2, '0')}`;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validBookingDate"])(value, zone),
                                            "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bookingDateLabel"])(value),
                                            "aria-pressed": date === value,
                                            onClick: ()=>{
                                                setDate(value);
                                                setError('');
                                            },
                                            children: i + 1
                                        }, value, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 20,
                                            columnNumber: 1363
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 1175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "calendar-note",
                                children: "Dates are request options, not confirmed availability."
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 1570
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 20,
                        columnNumber: 622
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "booking-times",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bookingDateLabel"])(date) : 'Choose a day first'
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 1694
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "time-options",
                                role: "group",
                                "aria-label": "Preferred call time",
                                children: times.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !date,
                                        "aria-pressed": time === t,
                                        onClick: ()=>{
                                            setTime(t);
                                            setError('');
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLabel"])(t)
                                    }, t, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 20,
                                        columnNumber: 1847
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 20,
                                columnNumber: 1757
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 20,
                        columnNumber: 1663
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 585
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "form-error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 2008
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "button booking-next",
                disabled: !date || !time,
                onClick: next,
                children: [
                    "Continue with this time",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 17
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 20,
                        columnNumber: 2180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 2064
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "booking-small-note",
                children: "No payment required. Your call is confirmed only after our reply."
            }, void 0, false, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 20,
                columnNumber: 2212
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/booking.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_s1(BookingPicker, "9UWNxRz5d8iXY2XsFfhe6tYaeXY=");
_c1 = BookingPicker;
function BookingProvider({ children }) {
    _s2();
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [slot, setSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nudge, setNudge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function open(value) {
        trigger.current = document.activeElement;
        setService(value || '');
        setSlot(null);
        setOpened(true);
        setNudge(false);
        dialog.current?.showModal();
    }
    function close() {
        dialog.current?.close();
        setOpened(false);
        setSlot(null);
        trigger.current?.focus();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingProvider.useEffect": ()=>{
            if (!opened) return;
            const previous = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            if (dialog.current) dialog.current.scrollTop = 0;
            return ({
                "BookingProvider.useEffect": ()=>{
                    document.body.style.overflow = previous;
                }
            })["BookingProvider.useEffect"];
        }
    }["BookingProvider.useEffect"], [
        opened
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingProvider.useEffect": ()=>{
            let dismissed = false;
            try {
                dismissed = sessionStorage.getItem('wonderweb-booking-nudge') === 'dismissed';
            } catch  {}
            if (dismissed) return;
            const onScroll = {
                "BookingProvider.useEffect.onScroll": ()=>{
                    const extent = document.documentElement.scrollHeight - window.innerHeight;
                    if (extent > 1000 && window.scrollY / extent > .45) {
                        setNudge(true);
                        window.removeEventListener('scroll', onScroll);
                    }
                }
            }["BookingProvider.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "BookingProvider.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["BookingProvider.useEffect"];
        }
    }["BookingProvider.useEffect"], []);
    function dismissNudge() {
        setNudge(false);
        try {
            sessionStorage.setItem('wonderweb-booking-nudge', 'dismissed');
        } catch  {}
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingContext.Provider, {
        value: open,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "booking-floating",
                children: [
                    nudge && !opened ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "booking-nudge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Dismiss call invitation",
                                onClick: dismissNudge,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking.tsx",
                                    lineNumber: 29,
                                    columnNumber: 220
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 138
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LET’S MAKE A PLAN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 243
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "What’s next for your business?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 273
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Pick a preferred time for a short introduction."
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 320
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    dismissNudge();
                                    open();
                                },
                                children: [
                                    "Choose a time",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 447
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 374
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 29,
                        columnNumber: 107
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "floating-call",
                        onClick: ()=>open(),
                        "aria-haspopup": "dialog",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 585
                            }, this),
                            "Book a call",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 621
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 29,
                        columnNumber: 493
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 29,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: "booking-dialog",
                "aria-labelledby": "booking-title",
                onCancel: close,
                onClose: ()=>setOpened(false),
                onClick: (e)=>{
                    if (e.target === dialog.current) close();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "booking-close",
                        "aria-label": "Close booking request",
                        onClick: close,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/booking.tsx",
                            lineNumber: 29,
                            columnNumber: 940
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 29,
                        columnNumber: 841
                    }, this),
                    opened ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "booking-dialog-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "booking-intro",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/brand/wonderweb-studio.svg",
                                        alt: "Wonderweb Studio",
                                        width: 150,
                                        height: 43
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1043
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "booking-host",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/work/saikat.webp",
                                                alt: "Saikat Chowdhury",
                                                width: 80,
                                                height: 80
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1162
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "LET’S MEET"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1240
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1132
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "booking-title",
                                        children: [
                                            "A little hello.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1307
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "A lot of possibility."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1313
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1269
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Tell us what you’re building. Let’s find a useful next step together."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1348
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "booking-host-name",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Saikat Chowdhury"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1459
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Founder & CEO · Team Lead"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1492
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1424
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/booking.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 1544
                                                    }, this),
                                                    "30-minute introductory call"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1540
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/booking.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 1599
                                                    }, this),
                                                    "Working with businesses worldwide"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1595
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/booking.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 1660
                                                    }, this),
                                                    "Confirmation sent by email"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/booking.tsx",
                                                lineNumber: 29,
                                                columnNumber: 1656
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1536
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "booking-small-note",
                                        children: "This is a request, not an instant reservation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/booking.tsx",
                                        lineNumber: 29,
                                        columnNumber: 1721
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 1010
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "booking-main",
                                children: slot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "booking-back",
                                            onClick: ()=>setSlot(null),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 1926
                                                }, this),
                                                "Change preferred time"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 29,
                                            columnNumber: 1851
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-step-label",
                                            children: "02 / A LITTLE ABOUT YOU"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 29,
                                            columnNumber: 1978
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Let’s make the introduction."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 29,
                                            columnNumber: 2043
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-summary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/booking.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 2113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bookingDateLabel"])(slot.date),
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLabel"])(slot.time)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/booking.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 2144
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                slot.timeZone.replace(/_/g, ' '),
                                                                " · 30 minutes · awaiting confirmation"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/booking.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 2215
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/booking.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 2138
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 29,
                                            columnNumber: 2080
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inquiry$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InquiryForm"], {
                                            booking: slot,
                                            initialService: service
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/booking.tsx",
                                            lineNumber: 29,
                                            columnNumber: 2313
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/booking.tsx",
                                    lineNumber: 29,
                                    columnNumber: 1849
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingPicker, {
                                    onSelect: setSlot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/booking.tsx",
                                    lineNumber: 29,
                                    columnNumber: 2371
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/booking.tsx",
                                lineNumber: 29,
                                columnNumber: 1813
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/booking.tsx",
                        lineNumber: 29,
                        columnNumber: 971
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/booking.tsx",
                lineNumber: 29,
                columnNumber: 661
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/booking.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_s2(BookingProvider, "VmVVtsrwegx3arFkxJWOjtct/H4=");
_c2 = BookingProvider;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BookCallButton");
__turbopack_context__.k.register(_c1, "BookingPicker");
__turbopack_context__.k.register(_c2, "BookingProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/content-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
;
;
function ContentImage(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
        ...props,
        title: props.alt ? props.title || props.alt : undefined
    }, void 0, false, {
        fileName: "[project]/src/components/content-image.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = ContentImage;
var _c;
__turbopack_context__.k.register(_c, "ContentImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/booking.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/content-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const groups = [
    {
        title: 'Websites & conversion',
        links: [
            [
                'Website design',
                'web-design'
            ],
            [
                'Web development',
                'web-development'
            ],
            [
                'Website management',
                'website-management'
            ],
            [
                'AI workflows',
                'ai-workflow-automation'
            ],
            [
                'Landing pages',
                'landing-page-design'
            ],
            [
                'Conversion optimization',
                'conversion-rate-optimization'
            ]
        ]
    },
    {
        title: 'Search & advertising',
        links: [
            [
                'SEO',
                'seo'
            ],
            [
                'Local SEO',
                'local-seo'
            ],
            [
                'AI search / AEO',
                'ai-search-optimization'
            ],
            [
                'Google Ads',
                'google-ads'
            ],
            [
                'Local Services Ads',
                'local-services-ads'
            ],
            [
                'Meta Ads',
                'meta-ads'
            ],
            [
                'Microsoft Ads',
                'microsoft-ads'
            ],
            [
                'LinkedIn Ads',
                'linkedin-ads'
            ],
            [
                'Digital media buying',
                'digital-media-buying'
            ]
        ]
    },
    {
        title: 'Content & growth',
        links: [
            [
                'Social media',
                'social-media-management'
            ],
            [
                'Content creation',
                'content-creation'
            ],
            [
                'Content management',
                'content-management'
            ],
            [
                'Email marketing',
                'email-marketing'
            ],
            [
                'Reputation management',
                'reputation-management'
            ],
            [
                'Lead generation',
                'lead-generation'
            ],
            [
                'Franchise marketing',
                'franchise-marketing'
            ],
            [
                'Graphic design',
                'graphic-design'
            ],
            [
                'Thumbnails',
                'thumbnail-design'
            ]
        ]
    }
];
function Header() {
    _s();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMenu(false);
            setServicesOpen(false);
            setHidden(false);
        }
    }["Header.useEffect"], [
        path
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const close = {
                "Header.useEffect.close": (e)=>{
                    if (e.key === 'Escape') {
                        setMenu(false);
                        setServicesOpen(false);
                    }
                }
            }["Header.useEffect.close"];
            document.addEventListener('keydown', close);
            return ({
                "Header.useEffect": ()=>document.removeEventListener('keydown', close)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            let previous = Math.max(0, window.scrollY);
            let travel = 0;
            let direction = 0;
            let frame = 0;
            const update = {
                "Header.useEffect.update": ()=>{
                    frame = 0;
                    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
                    const current = Math.max(0, Math.min(window.scrollY, maxScroll));
                    const delta = current - previous;
                    previous = current;
                    if (current < 120) {
                        setHidden(false);
                        travel = 0;
                        return;
                    }
                    if (menu || servicesOpen || headerRef.current?.contains(document.activeElement) && document.activeElement?.matches(':focus-visible')) {
                        setHidden(false);
                        travel = 0;
                        return;
                    }
                    const nextDirection = Math.sign(delta);
                    if (!nextDirection) return;
                    travel = nextDirection === direction ? travel + Math.abs(delta) : Math.abs(delta);
                    direction = nextDirection;
                    if (travel >= 14) {
                        setHidden(nextDirection > 0);
                        travel = 0;
                    }
                }
            }["Header.useEffect.update"];
            const onScroll = {
                "Header.useEffect.onScroll": ()=>{
                    if (!frame) frame = window.requestAnimationFrame(update);
                }
            }["Header.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    window.cancelAnimationFrame(frame);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menu,
        servicesOpen,
        path
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: `site-header ${hidden && !menu && !servicesOpen ? 'header-hidden' : ''}`,
        onFocusCapture: ()=>setHidden(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container header-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "logo",
                        "aria-label": "Wonderweb Studio home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/brand/wonderweb-studio.svg",
                            alt: "Wonderweb Studio",
                            width: 177,
                            height: 51,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 33,
                            columnNumber: 256
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 33,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `main-nav ${menu ? 'is-open' : ''}`,
                        id: "primary-navigation",
                        "aria-label": "Main navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-dropdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-expanded": servicesOpen,
                                        "aria-controls": "service-menu",
                                        onClick: ()=>setServicesOpen(!servicesOpen),
                                        children: [
                                            "Services",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 33,
                                                columnNumber: 612
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 493
                                    }, this),
                                    servicesOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "service-menu",
                                        className: "mega-menu",
                                        children: [
                                            groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: g.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 738
                                                        }, this),
                                                        g.links.map(([label, slug])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/services/${slug}/`,
                                                                children: label
                                                            }, slug, false, {
                                                                fileName: "[project]/src/components/header.tsx",
                                                                lineNumber: 33,
                                                                columnNumber: 789
                                                            }, this))
                                                    ]
                                                }, g.title, true, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 719
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services/",
                                                className: "all-services",
                                                children: [
                                                    "Explore all services ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 928
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 33,
                                                columnNumber: 858
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 659
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 463
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/work/",
                                children: "Our work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 978
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/industries/",
                                children: "Who we help"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 1013
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/locations/",
                                children: "Locations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 1057
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing/",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 1098
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/resources/",
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 1135
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about/",
                                children: "The studio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 1171
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookCallButton"], {
                                className: "mobile-contact",
                                onOpen: ()=>{
                                    setMenu(false);
                                    setServicesOpen(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 1209
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 33,
                        columnNumber: 361
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookCallButton"], {
                        className: "header-cta",
                        onOpen: ()=>{
                            setMenu(false);
                            setServicesOpen(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 33,
                        columnNumber: 1312
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-toggle",
                        onClick: ()=>setMenu(!menu),
                        "aria-label": menu ? 'Close menu' : 'Open menu',
                        "aria-expanded": menu,
                        "aria-controls": "primary-navigation",
                        children: menu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 33,
                            columnNumber: 1571
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 33,
                            columnNumber: 1576
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 33,
                        columnNumber: 1405
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 33,
                columnNumber: 149
            }, this),
            servicesOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "menu-backdrop",
                tabIndex: -1,
                onClick: ()=>setServicesOpen(false),
                "aria-label": "Close services menu"
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 33,
                columnNumber: 1613
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(Header, "4a1RTMjV3Htz+JEx3Fxcg2uCFf8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inquiry-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InquiryForm",
    ()=>InquiryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/analytics.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const options = [
    'Website design & development',
    'Website management',
    'SEO & local search',
    'Google Ads',
    'Meta Ads',
    'Social media management',
    'Content & creative',
    'Thumbnail design',
    'AI Search Optimization',
    'Google Local Services Ads',
    'Microsoft Ads Management',
    'LinkedIn Ads Management',
    'Email Marketing',
    'Reputation Management',
    'Conversion Rate Optimization',
    'Lead Generation',
    'Digital Media Buying',
    'Franchise & Multi-Location Marketing',
    'AI Workflow & Automation',
    'Foundation plan',
    'Growth plan',
    'Full Studio plan',
    'Not sure yet'
];
function InquiryForm({ booking, initialService = '' } = {}) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [refId, setRefId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [preferred, setPreferred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const widget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const widgetId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InquiryForm.useEffect": ()=>{
            requestId.current = crypto.randomUUID();
            const q = initialService || new URLSearchParams(window.location.search).get('service');
            if (q && q.length <= 100) setPreferred(q);
            return ({
                "InquiryForm.useEffect": ()=>{
                    if (widgetId.current) window.turnstile?.remove(widgetId.current);
                }
            })["InquiryForm.useEffect"];
        }
    }["InquiryForm.useEffect"], [
        initialService
    ]);
    function mountWidget() {
        if (widget.current && window.turnstile && !widgetId.current) widgetId.current = window.turnstile.render(widget.current, {
            sitekey: key,
            action: 'inquiry',
            theme: 'light',
            callback: (value)=>setToken(value),
            'expired-callback': ()=>setToken(''),
            'error-callback': ()=>{
                setToken('');
                setError('The security check could not load. You can also email info@wonderwebstudio.com.');
            }
        });
    }
    async function submit(event) {
        event.preventDefault();
        if (status === 'sending') return;
        setError('');
        const data = new FormData(event.currentTarget);
        if (key && !token) {
            setError('Please complete the security check.');
            return;
        }
        setStatus('sending');
        const params = new URLSearchParams(window.location.search);
        const utm = {};
        [
            'utm_source',
            'utm_medium',
            'utm_campaign'
        ].forEach((k)=>{
            const v = params.get(k);
            if (v) utm[k] = v.slice(0, 120);
        });
        const body = {
            name: data.get('name'),
            email: data.get('email'),
            website: data.get('website'),
            service: data.get('service'),
            budget: data.get('budget'),
            message: data.get('message'),
            consent: data.get('consent') === 'on',
            companyFax: data.get('companyFax'),
            token,
            booking,
            requestId: requestId.current,
            source: window.location.pathname,
            utm
        };
        try {
            const response = await fetch('/api/inquiry/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                signal: AbortSignal.timeout(55000)
            });
            const result = await response.json();
            if (!response.ok || !result.ok) throw new Error(result.message || 'We could not confirm delivery. Please email info@wonderwebstudio.com.');
            setRefId(result.reference);
            setStatus('success');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])('generate_lead', {
                service: String(body.service),
                method: booking ? 'call_request' : 'website_form'
            });
            formRef.current?.reset();
        } catch (e) {
            setStatus('error');
            setError(e instanceof Error ? e.message : 'We could not confirm delivery. Please try again or email us.');
            if (widgetId.current) window.turnstile?.reset(widgetId.current);
            setToken('');
        }
    }
    if (status === 'success') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-success",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                size: 42
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 20,
                columnNumber: 76
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: booking ? 'Thanks. We’ll confirm your call by email.' : 'Thanks. Let’s make something happen.'
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 20,
                columnNumber: 101
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: booking ? 'Your preferred-time request was accepted by our email service. The call is not booked yet. We’ll check the time and reply with confirmation or an alternative.' : 'Your inquiry was accepted by our email service. We’ll review your goals and reply to the email address you provided.'
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 20,
                columnNumber: 202
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: [
                    "Reference: ",
                    refId.slice(0, 8)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 20,
                columnNumber: 498
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button",
                onClick: ()=>{
                    requestId.current = crypto.randomUUID();
                    widgetId.current = null;
                    setToken('');
                    setStatus('idle');
                },
                children: [
                    booking ? 'Send another request' : 'Send another inquiry',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 20,
                        columnNumber: 731
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 20,
                columnNumber: 542
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inquiry-form.tsx",
        lineNumber: 20,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "inquiry-form",
        ref: formRef,
        onSubmit: submit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Your name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                autoComplete: "name",
                                required: true,
                                minLength: 2,
                                maxLength: 100,
                                placeholder: "Alex Morgan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inquiry-form.tsx",
                                lineNumber: 21,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Email address",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                autoComplete: "email",
                                type: "email",
                                required: true,
                                maxLength: 254,
                                placeholder: "alex@yourbusiness.com"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inquiry-form.tsx",
                                lineNumber: 21,
                                columnNumber: 248
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 228
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Business website (optional)",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "website",
                        autoComplete: "url",
                        maxLength: 300,
                        placeholder: "yourbusiness.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 412
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 378
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "What can we help with?",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "What can we help with?",
                                name: "service",
                                required: true,
                                value: preferred,
                                onChange: (e)=>setPreferred(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Select a service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 693
                                    }, this),
                                    [
                                        ...options,
                                        ...preferred && !options.includes(preferred) ? [
                                            preferred
                                        ] : []
                                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: x
                                        }, x, false, {
                                            fileName: "[project]/src/components/inquiry-form.tsx",
                                            lineNumber: 21,
                                            columnNumber: 825
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inquiry-form.tsx",
                                lineNumber: 21,
                                columnNumber: 564
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 535
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Budget range (optional)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "Budget range (optional)",
                                name: "budget",
                                defaultValue: "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Let’s discuss"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 977
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Under $1,000 / month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1016
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "$1,000–$2,500 / month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1053
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "$2,500–$5,000 / month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1091
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "$5,000+ / month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1129
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "One-time website project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inquiry-form.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1161
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inquiry-form.tsx",
                                lineNumber: 21,
                                columnNumber: 902
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 872
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 509
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "A little about your project",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "message",
                        required: true,
                        minLength: 15,
                        maxLength: 4000,
                        rows: 5,
                        placeholder: "Tell us about your business, your goals, and what you’d like to improve."
                    }, void 0, false, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 1259
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 1225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "honeypot",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: [
                        "Company fax",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "companyFax",
                            tabIndex: -1,
                            autoComplete: "off"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inquiry-form.tsx",
                            lineNumber: 21,
                            columnNumber: 1493
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inquiry-form.tsx",
                    lineNumber: 21,
                    columnNumber: 1475
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 1430
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: "consent",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 1593
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "I agree to be contacted about this inquiry and have read the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy-policy/",
                                children: "privacy policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inquiry-form.tsx",
                                lineNumber: 21,
                                columnNumber: 1708
                            }, this),
                            ". This does not subscribe me to marketing emails."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 1641
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 1566
            }, this),
            key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "turnstile-script",
                        src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
                        strategy: "afterInteractive",
                        onReady: mountWidget
                    }, void 0, false, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 1824
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: widget
                    }, void 0, false, {
                        fileName: "[project]/src/components/inquiry-form.tsx",
                        lineNumber: 21,
                        columnNumber: 1981
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 1822
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-error",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 2016
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button",
                disabled: status === 'sending',
                type: "submit",
                children: status === 'sending' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Sending",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                            className: "spin",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/inquiry-form.tsx",
                            lineNumber: 21,
                            columnNumber: 2172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inquiry-form.tsx",
                    lineNumber: 21,
                    columnNumber: 2163
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        booking ? 'Request this call' : 'Let’s start the conversation',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/inquiry-form.tsx",
                            lineNumber: 21,
                            columnNumber: 2280
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inquiry-form.tsx",
                    lineNumber: 21,
                    columnNumber: 2218
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 2072
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note",
                children: booking ? 'We’ll reply to confirm. No calendar reservation is made automatically.' : 'A conversation first. A clear scope and quote next.'
            }, void 0, false, {
                fileName: "[project]/src/components/inquiry-form.tsx",
                lineNumber: 21,
                columnNumber: 2318
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inquiry-form.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(InquiryForm, "4nj7fwh4dDbpE3/rbIOXOo26omo=");
_c = InquiryForm;
var _c;
__turbopack_context__.k.register(_c, "InquiryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/motion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Motion",
    ()=>Motion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Motion() {
    _s();
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Motion.useEffect": ()=>{
            const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
            const update = {
                "Motion.useEffect.update": ()=>setPaused(preference.matches)
            }["Motion.useEffect.update"];
            update();
            preference.addEventListener('change', update);
            return ({
                "Motion.useEffect": ()=>preference.removeEventListener('change', update)
            })["Motion.useEffect"];
        }
    }["Motion.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Motion.useEffect": ()=>{
            document.documentElement.dataset.motion = paused ? 'paused' : 'playing';
        }
    }["Motion.useEffect"], [
        paused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Motion.useEffect": ()=>{
            if (paused) return;
            const nodes = document.querySelectorAll('.section-heading,.client-project,.journey-step,.why-grid article,.process-grid article');
            const observer = new IntersectionObserver({
                "Motion.useEffect": (entries)=>{
                    entries.forEach({
                        "Motion.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('in-view');
                                observer.unobserve(entry.target);
                            }
                        }
                    }["Motion.useEffect"]);
                }
            }["Motion.useEffect"], {
                threshold: .08
            });
            nodes.forEach({
                "Motion.useEffect": (node)=>{
                    if (node.getBoundingClientRect().top > window.innerHeight) {
                        node.classList.add('reveal-ready');
                        observer.observe(node);
                    }
                }
            }["Motion.useEffect"]);
            return ({
                "Motion.useEffect": ()=>{
                    observer.disconnect();
                    nodes.forEach({
                        "Motion.useEffect": (n)=>n.classList.remove('reveal-ready', 'in-view')
                    }["Motion.useEffect"]);
                }
            })["Motion.useEffect"];
        }
    }["Motion.useEffect"], [
        path,
        paused
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "motion-toggle",
        onClick: ()=>setPaused(!paused),
        "aria-label": paused ? 'Play animations' : 'Pause animations',
        "aria-pressed": paused,
        children: [
            paused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/src/components/motion.tsx",
                lineNumber: 9,
                columnNumber: 163
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/src/components/motion.tsx",
                lineNumber: 9,
                columnNumber: 181
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Motion ",
                    paused ? 'off' : 'on'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/motion.tsx",
                lineNumber: 9,
                columnNumber: 200
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/motion.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_s(Motion, "mwJlQqyNlZzeFDswo3IbsX4ljzc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Motion;
var _c;
__turbopack_context__.k.register(_c, "Motion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/booking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "bookingDateLabel",
    ()=>bookingDateLabel,
    "dateInZone",
    ()=>dateInZone,
    "timeLabel",
    ()=>timeLabel,
    "validBookingDate",
    ()=>validBookingDate,
    "validTimeZone",
    ()=>validTimeZone
]);
function dateInZone(now, timeZone) {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(now);
    return [
        'year',
        'month',
        'day'
    ].map((type)=>parts.find((p)=>p.type === type)?.value).join('-');
}
function addDays(date, days) {
    const d = new Date(`${date}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
}
function validTimeZone(value) {
    try {
        new Intl.DateTimeFormat('en', {
            timeZone: value
        }).format();
        return true;
    } catch  {
        return false;
    }
}
function validBookingDate(date, timeZone, now = new Date()) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !validTimeZone(timeZone)) return false;
    const parsed = new Date(`${date}T12:00:00Z`);
    if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) return false;
    const today = dateInZone(now, timeZone);
    return date >= addDays(today, 1) && date <= addDays(today, 90);
}
function bookingDateLabel(date) {
    return new Intl.DateTimeFormat('en', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    }).format(new Date(`${date}T12:00:00Z`));
}
function timeLabel(time) {
    const [h, m] = time.split(':').map(Number);
    return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0mpo0pbtbjq24._.js.map