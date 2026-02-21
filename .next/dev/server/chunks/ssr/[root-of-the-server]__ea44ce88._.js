module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/ACM/Fitness App/FINALV1/app/data/sessions.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([]);}),
"[project]/Desktop/ACM/Fitness App/FINALV1/app/lib/supabase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
// These will be set from environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://hvmanksrpfmikvqigwsv.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_ld_bfMHHAY0pOOJ2253hug_IX-PyK-W");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/app/lib/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as Loader>");
'use client';
;
;
;
;
function AuthModal({ onAuthSuccess }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSignUp, setIsSignUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAuth = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            if (isSignUp) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                    email,
                    password
                });
                if (error) throw error;
                setError('Check your email to confirm signup!');
            } else {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                    email,
                    password
                });
                if (error) throw error;
                onAuthSuccess?.();
            }
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-white mb-2",
                    children: "Fitness Tracker"
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-6",
                    children: "Access your workouts from anywhere"
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAuth,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "absolute left-3 top-3 text-gray-500",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "your@email.com",
                                            className: "w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "absolute left-3 top-3 text-gray-500",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "••••••••",
                                            className: "w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3 rounded text-sm ${error.includes('Check your email') ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2",
                            children: [
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                isSignUp ? 'Sign Up' : 'Sign In'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setIsSignUp(!isSignUp);
                        setError('');
                    },
                    className: "w-full mt-4 text-sm text-gray-400 hover:text-gray-300",
                    children: isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FitnessTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-ssr] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$data$2f$sessions$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/app/data/sessions.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/app/lib/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$components$2f$AuthModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/app/components/AuthModal.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Comprehensive food database (MyFitnessPal-style)
const FOOD_DATABASE = {
    'chicken breast': {
        calories: 165,
        protein: 31,
        carbs: 0,
        fats: 3.6,
        serving: '100g'
    },
    'brown rice': {
        calories: 112,
        protein: 2.6,
        carbs: 24,
        fats: 0.9,
        serving: '100g'
    },
    'white rice': {
        calories: 130,
        protein: 2.7,
        carbs: 28,
        fats: 0.3,
        serving: '100g'
    },
    'broccoli': {
        calories: 34,
        protein: 2.8,
        carbs: 7,
        fats: 0.4,
        serving: '100g'
    },
    'salmon': {
        calories: 208,
        protein: 20,
        carbs: 0,
        fats: 13,
        serving: '100g'
    },
    'eggs': {
        calories: 155,
        protein: 13,
        carbs: 1.1,
        fats: 11,
        serving: '2 large'
    },
    'egg whites': {
        calories: 52,
        protein: 11,
        carbs: 0.7,
        fats: 0.2,
        serving: '100g'
    },
    'oatmeal': {
        calories: 389,
        protein: 17,
        carbs: 66,
        fats: 7,
        serving: '100g'
    },
    'banana': {
        calories: 89,
        protein: 1.1,
        carbs: 23,
        fats: 0.3,
        serving: '1 medium'
    },
    'apple': {
        calories: 52,
        protein: 0.3,
        carbs: 14,
        fats: 0.2,
        serving: '1 medium'
    },
    'almonds': {
        calories: 579,
        protein: 21,
        carbs: 22,
        fats: 50,
        serving: '100g'
    },
    'peanut butter': {
        calories: 588,
        protein: 25,
        carbs: 20,
        fats: 50,
        serving: '100g'
    },
    'greek yogurt': {
        calories: 59,
        protein: 10,
        carbs: 3.6,
        fats: 0.4,
        serving: '100g'
    },
    'whole milk': {
        calories: 61,
        protein: 3.2,
        carbs: 5,
        fats: 3.3,
        serving: '100ml'
    },
    'skim milk': {
        calories: 34,
        protein: 3.4,
        carbs: 5,
        fats: 0.1,
        serving: '100ml'
    },
    'avocado': {
        calories: 160,
        protein: 2,
        carbs: 9,
        fats: 15,
        serving: '100g'
    },
    'sweet potato': {
        calories: 86,
        protein: 1.6,
        carbs: 20,
        fats: 0.1,
        serving: '100g'
    },
    'ground beef': {
        calories: 250,
        protein: 26,
        carbs: 0,
        fats: 15,
        serving: '100g'
    },
    'ground turkey': {
        calories: 150,
        protein: 20,
        carbs: 0,
        fats: 7,
        serving: '100g'
    },
    'tuna': {
        calories: 132,
        protein: 28,
        carbs: 0,
        fats: 1.3,
        serving: '100g'
    },
    'tilapia': {
        calories: 96,
        protein: 20,
        carbs: 0,
        fats: 1.7,
        serving: '100g'
    },
    'shrimp': {
        calories: 99,
        protein: 24,
        carbs: 0.2,
        fats: 0.3,
        serving: '100g'
    },
    'quinoa': {
        calories: 120,
        protein: 4.4,
        carbs: 21,
        fats: 1.9,
        serving: '100g'
    },
    'pasta': {
        calories: 131,
        protein: 5,
        carbs: 25,
        fats: 1.1,
        serving: '100g'
    },
    'bread': {
        calories: 265,
        protein: 9,
        carbs: 49,
        fats: 3.2,
        serving: '100g'
    },
    'cheese': {
        calories: 402,
        protein: 25,
        carbs: 1.3,
        fats: 33,
        serving: '100g'
    },
    'cottage cheese': {
        calories: 98,
        protein: 11,
        carbs: 3.4,
        fats: 4.3,
        serving: '100g'
    },
    'spinach': {
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fats: 0.4,
        serving: '100g'
    },
    'tomato': {
        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        fats: 0.2,
        serving: '100g'
    },
    'cucumber': {
        calories: 15,
        protein: 0.7,
        carbs: 3.6,
        fats: 0.1,
        serving: '100g'
    },
    'carrots': {
        calories: 41,
        protein: 0.9,
        carbs: 10,
        fats: 0.2,
        serving: '100g'
    },
    'olive oil': {
        calories: 884,
        protein: 0,
        carbs: 0,
        fats: 100,
        serving: '100ml'
    },
    'coconut oil': {
        calories: 862,
        protein: 0,
        carbs: 0,
        fats: 100,
        serving: '100ml'
    },
    'protein powder': {
        calories: 120,
        protein: 24,
        carbs: 3,
        fats: 1.5,
        serving: '1 scoop'
    },
    'honey': {
        calories: 304,
        protein: 0.3,
        carbs: 82,
        fats: 0,
        serving: '100g'
    },
    'orange': {
        calories: 47,
        protein: 0.9,
        carbs: 12,
        fats: 0.1,
        serving: '1 medium'
    },
    'strawberries': {
        calories: 32,
        protein: 0.7,
        carbs: 8,
        fats: 0.3,
        serving: '100g'
    },
    'blueberries': {
        calories: 57,
        protein: 0.7,
        carbs: 14,
        fats: 0.3,
        serving: '100g'
    },
    'bell pepper': {
        calories: 31,
        protein: 1,
        carbs: 6,
        fats: 0.3,
        serving: '100g'
    },
    'onion': {
        calories: 40,
        protein: 1.1,
        carbs: 9,
        fats: 0.1,
        serving: '100g'
    },
    'garlic': {
        calories: 149,
        protein: 6.4,
        carbs: 33,
        fats: 0.5,
        serving: '100g'
    }
};
// Running distance database for time trials
const RUNNING_DISTANCES = [
    {
        id: '100m',
        name: '100 Meter Sprint',
        distance: 100,
        unit: 'meters',
        category: 'Sprint'
    },
    {
        id: '200m',
        name: '200 Meter Sprint',
        distance: 200,
        unit: 'meters',
        category: 'Sprint'
    },
    {
        id: '400m',
        name: '400 Meter Sprint',
        distance: 400,
        unit: 'meters',
        category: 'Sprint'
    },
    {
        id: '800m',
        name: '800 Meter Run',
        distance: 800,
        unit: 'meters',
        category: 'Middle Distance'
    },
    {
        id: '1500m',
        name: '1500 Meter Run',
        distance: 1500,
        unit: 'meters',
        category: 'Middle Distance'
    },
    {
        id: '1mile',
        name: '1 Mile Run',
        distance: 1.0,
        unit: 'miles',
        category: 'Middle Distance'
    },
    {
        id: '5k',
        name: '5K Run',
        distance: 5,
        unit: 'km',
        category: 'Distance'
    },
    {
        id: '10k',
        name: '10K Run',
        distance: 10,
        unit: 'km',
        category: 'Distance'
    },
    {
        id: 'half',
        name: 'Half Marathon',
        distance: 21.1,
        unit: 'km',
        category: 'Long Distance'
    },
    {
        id: 'full',
        name: 'Full Marathon',
        distance: 42.2,
        unit: 'km',
        category: 'Long Distance'
    }
];
const SPRINT_DISTANCES = [
    '40 Yard Dash',
    '100m',
    '200m',
    'Mile / 1600m',
    'Custom'
];
const SESSION_TYPES = [
    'Day 1 - Upper Body',
    'Day 2 - Lower Body'
];
const parseNumberValue = (value)=>{
    if (value === null || value === undefined) return null;
    const match = String(value).match(/\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : null;
};
const parseTimeToSeconds = (value)=>{
    if (value === null || value === undefined) return null;
    const raw = String(value).trim();
    if (!raw) return null;
    if (raw.includes(':')) {
        const [minutes, seconds] = raw.split(':');
        const mins = parseNumberValue(minutes);
        const secs = parseNumberValue(seconds);
        if (mins === null || secs === null) return null;
        return mins * 60 + secs;
    }
    const asNumber = parseNumberValue(raw);
    return asNumber === null ? null : asNumber;
};
const formatSeconds = (seconds)=>{
    if (seconds === null || seconds === undefined) return '';
    if (seconds >= 60) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.round(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
    const rounded = Math.round(seconds * 10) / 10;
    return `${rounded}s`;
};
const toIsoDate = (value)=>{
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return date.toISOString().split('T')[0];
};
const getWeekStart = (dateString)=>{
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return null;
    const day = date.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    date.setDate(date.getDate() + diff);
    return toIsoDate(date);
};
const downloadFile = (content, filename, type)=>{
    const blob = new Blob([
        content
    ], {
        type
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
};
const toCsvValue = (value)=>{
    if (value === null || value === undefined) return '';
    const stringValue = String(value).replace(/"/g, '""');
    return `"${stringValue}"`;
};
const computeSessionPRs = (sessions)=>{
    const strengthMap = new Map();
    const sprintMap = new Map();
    sessions.forEach((session)=>{
        const athlete = session.athlete || 'Unknown';
        (session.exercises || []).forEach((exercise)=>{
            const weight = parseNumberValue(exercise.weight);
            if (weight === null) return;
            const key = `${athlete}::${exercise.name}`;
            const existing = strengthMap.get(key);
            if (!existing || weight > existing.value) {
                strengthMap.set(key, {
                    athlete,
                    exercise: exercise.name,
                    value: weight,
                    reps: exercise.reps || '',
                    date: session.date
                });
            }
        });
        (session.sprints || []).forEach((sprint)=>{
            const attempts = [
                sprint.attempt1,
                sprint.attempt2,
                sprint.attempt3
            ].map(parseTimeToSeconds).filter((time)=>time !== null);
            if (attempts.length === 0) return;
            const best = Math.min(...attempts);
            const key = `${athlete}::${sprint.distance}`;
            const existing = sprintMap.get(key);
            if (!existing || best < existing.value) {
                sprintMap.set(key, {
                    athlete,
                    distance: sprint.distance,
                    value: best,
                    date: session.date
                });
            }
        });
    });
    return {
        strength: Array.from(strengthMap.values()),
        sprints: Array.from(sprintMap.values())
    };
};
const buildSessionCsv = (sessions)=>{
    const headers = [
        'date',
        'athlete',
        'session_name',
        'session_type',
        'energy_level',
        'duration_minutes',
        'exercise_name',
        'exercise_sets',
        'exercise_reps',
        'exercise_weight',
        'sprint_distance',
        'sprint_attempt_1',
        'sprint_attempt_2',
        'sprint_attempt_3',
        'cardio_type',
        'cardio_distance',
        'cardio_unit',
        'cardio_duration',
        'notes',
        'coach_notes'
    ];
    const rows = [
        headers.map(toCsvValue).join(',')
    ];
    sessions.forEach((session)=>{
        const exercises = session.exercises && session.exercises.length > 0 ? session.exercises : [
            null
        ];
        const sprints = session.sprints && session.sprints.length > 0 ? session.sprints : [
            null
        ];
        const cardio = session.cardio && session.cardio.length > 0 ? session.cardio : [
            null
        ];
        const maxRows = Math.max(exercises.length, sprints.length, cardio.length);
        for(let index = 0; index < maxRows; index += 1){
            const exercise = exercises[index] || {};
            const sprint = sprints[index] || {};
            const cardioItem = cardio[index] || {};
            const row = [
                session.date,
                session.athlete,
                session.name,
                session.sessionType,
                session.energyLevel,
                session.duration,
                exercise.name,
                exercise.sets,
                exercise.reps,
                exercise.weight,
                sprint.distance,
                sprint.attempt1,
                sprint.attempt2,
                sprint.attempt3,
                cardioItem.type,
                cardioItem.distance,
                cardioItem.unit,
                cardioItem.duration,
                session.notes,
                session.coachNotes
            ];
            rows.push(row.map(toCsvValue).join(','));
        }
    });
    return rows.join('\n');
};
const createEmptyWorkoutForm = ()=>({
        name: '',
        athlete: '',
        sessionType: SESSION_TYPES[0],
        energyLevel: '',
        exercises: [],
        cardio: [],
        sprints: [],
        date: new Date().toISOString().split('T')[0],
        duration: '',
        notes: '',
        coachNotes: '',
        fromTemplate: false
    });
const createEmptySessionRow = ()=>({
        id: `${Date.now()}-${Math.random()}`,
        athlete: '',
        date: new Date().toISOString().split('T')[0],
        sessionType: SESSION_TYPES[0],
        name: '',
        energyLevel: '',
        exercisesText: '',
        sprintsText: '',
        duration: ''
    });
// Muscle group mapping with recovery times
const MUSCLE_GROUPS = {
    // Upper Body Front
    'chest': {
        name: 'Chest',
        location: 'front',
        recovery: 48
    },
    'front-delts': {
        name: 'Front Deltoids',
        location: 'front',
        recovery: 48
    },
    'biceps': {
        name: 'Biceps',
        location: 'front',
        recovery: 48
    },
    'abs': {
        name: 'Abdominals',
        location: 'front',
        recovery: 24
    },
    'obliques': {
        name: 'Obliques',
        location: 'front',
        recovery: 24
    },
    'quads': {
        name: 'Quadriceps',
        location: 'front',
        recovery: 72
    },
    'hip-flexors': {
        name: 'Hip Flexors',
        location: 'front',
        recovery: 48
    },
    // Upper Body Back
    'traps': {
        name: 'Trapezius',
        location: 'back',
        recovery: 48
    },
    'rear-delts': {
        name: 'Rear Deltoids',
        location: 'back',
        recovery: 48
    },
    'lats': {
        name: 'Latissimus Dorsi',
        location: 'back',
        recovery: 72
    },
    'lower-back': {
        name: 'Lower Back',
        location: 'back',
        recovery: 72
    },
    'triceps': {
        name: 'Triceps',
        location: 'back',
        recovery: 48
    },
    'glutes': {
        name: 'Glutes',
        location: 'back',
        recovery: 72
    },
    'hamstrings': {
        name: 'Hamstrings',
        location: 'back',
        recovery: 72
    },
    'calves': {
        name: 'Calves',
        location: 'back',
        recovery: 48
    }
};
// Exercise to muscle mapping
const EXERCISE_MUSCLE_MAP = {
    'barbell back squat': [
        'quads',
        'glutes',
        'hamstrings',
        'lower-back'
    ],
    'barbell bench press': [
        'chest',
        'front-delts',
        'triceps'
    ],
    'barbell deadlift': [
        'hamstrings',
        'glutes',
        'lower-back',
        'traps',
        'lats'
    ],
    'barbell row': [
        'lats',
        'traps',
        'rear-delts',
        'biceps'
    ],
    'overhead press': [
        'front-delts',
        'triceps',
        'traps'
    ],
    'pull-ups': [
        'lats',
        'biceps',
        'traps'
    ],
    'pull ups': [
        'lats',
        'biceps',
        'traps'
    ],
    'dumbbell bench press': [
        'chest',
        'front-delts',
        'triceps'
    ],
    'lunges': [
        'quads',
        'glutes',
        'hamstrings'
    ],
    'romanian deadlift': [
        'hamstrings',
        'glutes',
        'lower-back'
    ],
    'dumbbell shoulder press': [
        'front-delts',
        'triceps'
    ],
    'leg press': [
        'quads',
        'glutes'
    ],
    'bicep curls': [
        'biceps'
    ],
    'tricep dips': [
        'triceps',
        'chest'
    ],
    'plank': [
        'abs',
        'obliques'
    ],
    'lat pulldown': [
        'lats',
        'biceps'
    ],
    'face pulls': [
        'rear-delts',
        'traps'
    ],
    'leg curl': [
        'hamstrings'
    ],
    'calf raises': [
        'calves'
    ],
    'cable flyes': [
        'chest'
    ],
    'farmers walk': [
        'traps',
        'abs',
        'calves'
    ]
};
// Comprehensive exercise database with video links
const EXERCISE_DATABASE = [
    {
        id: 1,
        name: 'Barbell Back Squat',
        category: 'Legs',
        muscleGroup: 'Quads, Glutes, Hamstrings',
        equipment: 'Barbell',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8',
        gifUrl: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2VzYWtlZmhhNWM0d3F1ZTZrOTBuMGVxOTFsYXNhZGZhc2RmYXNk/example1.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Place barbell on upper back',
            'Lower by bending knees and hips',
            'Keep chest up and core tight',
            'Push through heels to return to start'
        ]
    },
    {
        id: 2,
        name: 'Barbell Bench Press',
        category: 'Chest',
        muscleGroup: 'Chest, Triceps, Shoulders',
        equipment: 'Barbell',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
        instructions: [
            'Lie flat on bench with feet planted',
            'Grip barbell slightly wider than shoulders',
            'Lower bar to mid-chest',
            'Press bar up until arms fully extended',
            'Keep shoulder blades retracted'
        ]
    },
    {
        id: 3,
        name: 'Barbell Deadlift',
        category: 'Back',
        muscleGroup: 'Back, Glutes, Hamstrings',
        equipment: 'Barbell',
        difficulty: 'Advanced',
        videoUrl: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
        instructions: [
            'Stand with feet hip-width apart',
            'Grip barbell just outside legs',
            'Keep back straight, chest up',
            'Drive through heels to stand',
            'Lower with control'
        ]
    },
    {
        id: 4,
        name: 'Barbell Row',
        category: 'Back',
        muscleGroup: 'Lats, Rhomboids, Traps',
        equipment: 'Barbell',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=FWJR5Ve8bnQ',
        instructions: [
            'Bend at hips, keep back straight',
            'Pull bar to lower chest',
            'Squeeze shoulder blades together',
            'Lower with control',
            'Keep core engaged'
        ]
    },
    {
        id: 5,
        name: 'Overhead Press',
        category: 'Shoulders',
        muscleGroup: 'Shoulders, Triceps',
        equipment: 'Barbell',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=2yjwXTZQDDI',
        instructions: [
            'Start with bar at shoulder height',
            'Press bar straight overhead',
            'Lock out arms at top',
            'Lower with control',
            'Keep core tight'
        ]
    },
    {
        id: 6,
        name: 'Pull-ups',
        category: 'Back',
        muscleGroup: 'Lats, Biceps',
        equipment: 'Pull-up Bar',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
        instructions: [
            'Hang from bar with overhand grip',
            'Pull chest to bar',
            'Lower with control',
            'Full extension at bottom',
            'Engage lats throughout'
        ]
    },
    {
        id: 7,
        name: 'Dumbbell Bench Press',
        category: 'Chest',
        muscleGroup: 'Chest, Triceps, Shoulders',
        equipment: 'Dumbbells',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
        instructions: [
            'Lie on bench with dumbbells',
            'Start with weights at chest level',
            'Press up until arms extended',
            'Lower with control',
            'Keep elbows at 45 degrees'
        ]
    },
    {
        id: 8,
        name: 'Lunges',
        category: 'Legs',
        muscleGroup: 'Quads, Glutes',
        equipment: 'Bodyweight/Dumbbells',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
        instructions: [
            'Step forward with one leg',
            'Lower hips until both knees bent 90°',
            'Push back to starting position',
            'Alternate legs',
            'Keep torso upright'
        ]
    },
    {
        id: 9,
        name: 'Romanian Deadlift',
        category: 'Legs',
        muscleGroup: 'Hamstrings, Glutes',
        equipment: 'Barbell',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=2SHsk9AzdjA',
        instructions: [
            'Hold barbell at hip level',
            'Hinge at hips, push hips back',
            'Lower bar along legs',
            'Feel stretch in hamstrings',
            'Return to standing'
        ]
    },
    {
        id: 10,
        name: 'Dumbbell Shoulder Press',
        category: 'Shoulders',
        muscleGroup: 'Shoulders, Triceps',
        equipment: 'Dumbbells',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
        instructions: [
            'Sit or stand with dumbbells at shoulders',
            'Press weights overhead',
            'Fully extend arms',
            'Lower with control',
            'Keep core engaged'
        ]
    },
    {
        id: 11,
        name: 'Leg Press',
        category: 'Legs',
        muscleGroup: 'Quads, Glutes',
        equipment: 'Machine',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ',
        instructions: [
            'Sit in machine, feet on platform',
            'Release safety, lower weight',
            'Push through heels',
            'Extend legs fully',
            'Control the descent'
        ]
    },
    {
        id: 12,
        name: 'Bicep Curls',
        category: 'Arms',
        muscleGroup: 'Biceps',
        equipment: 'Dumbbells',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo',
        instructions: [
            'Stand with dumbbells at sides',
            'Curl weights to shoulders',
            'Keep elbows stationary',
            'Lower with control',
            'No swinging'
        ]
    },
    {
        id: 13,
        name: 'Tricep Dips',
        category: 'Arms',
        muscleGroup: 'Triceps',
        equipment: 'Bench/Bars',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=6kALZikXxLc',
        instructions: [
            'Position hands on bars or bench',
            'Lower body by bending elbows',
            'Go until 90 degree angle',
            'Push back up',
            'Keep body upright'
        ]
    },
    {
        id: 14,
        name: 'Plank',
        category: 'Core',
        muscleGroup: 'Abs, Core',
        equipment: 'Bodyweight',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
        instructions: [
            'Start in forearm position',
            'Keep body in straight line',
            'Engage core',
            'Hold position',
            'Breathe normally'
        ]
    },
    {
        id: 15,
        name: 'Lat Pulldown',
        category: 'Back',
        muscleGroup: 'Lats, Biceps',
        equipment: 'Machine',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
        instructions: [
            'Sit at machine, grab bar wide',
            'Pull bar to upper chest',
            'Squeeze shoulder blades',
            'Return with control',
            'Lean back slightly'
        ]
    },
    {
        id: 16,
        name: 'Face Pulls',
        category: 'Shoulders',
        muscleGroup: 'Rear Delts, Traps',
        equipment: 'Cable',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
        instructions: [
            'Set cable at face height',
            'Pull rope towards face',
            'Separate hands at end',
            'Squeeze rear delts',
            'Return with control'
        ]
    },
    {
        id: 17,
        name: 'Leg Curl',
        category: 'Legs',
        muscleGroup: 'Hamstrings',
        equipment: 'Machine',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=ELOCsoDSmrg',
        instructions: [
            'Lie face down on machine',
            'Curl legs toward glutes',
            'Squeeze hamstrings',
            'Lower with control',
            'Full range of motion'
        ]
    },
    {
        id: 18,
        name: 'Calf Raises',
        category: 'Legs',
        muscleGroup: 'Calves',
        equipment: 'Machine/Bodyweight',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=gwLzBJYoWlI',
        instructions: [
            'Stand with balls of feet on edge',
            'Raise heels as high as possible',
            'Hold at top',
            'Lower with control',
            'Full stretch at bottom'
        ]
    },
    {
        id: 19,
        name: 'Cable Flyes',
        category: 'Chest',
        muscleGroup: 'Chest',
        equipment: 'Cable',
        difficulty: 'Intermediate',
        videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
        instructions: [
            'Set cables at chest height',
            'Bring hands together',
            'Slight bend in elbows',
            'Squeeze chest',
            'Return with control'
        ]
    },
    {
        id: 20,
        name: 'Farmers Walk',
        category: 'Full Body',
        muscleGroup: 'Grip, Core, Traps',
        equipment: 'Dumbbells',
        difficulty: 'Beginner',
        videoUrl: 'https://www.youtube.com/watch?v=rt17lmnaLSM',
        instructions: [
            'Hold heavy dumbbells at sides',
            'Walk forward with good posture',
            'Keep shoulders back',
            'Engage core',
            'Walk for distance or time'
        ]
    }
];
function FitnessTracker() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [workouts, setWorkouts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workoutTemplates, setWorkoutTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showWorkoutModal, setShowWorkoutModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editWorkoutId, setEditWorkoutId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showTemplateModal, setShowTemplateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showImportModal, setShowImportModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExerciseLibrary, setShowExerciseLibrary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedExercise, setSelectedExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Milli');
    const [selectedAthlete, setSelectedAthlete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sessionFilterAthlete, setSessionFilterAthlete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sessionFilterStart, setSessionFilterStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sessionFilterEnd, setSessionFilterEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sessionFilterQuery, setSessionFilterQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sessionFilterType, setSessionFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [calendarView, setCalendarView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('week'); // 'week', 'month', or 'day'
    const [calendarDate, setCalendarDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [draggedWorkout, setDraggedWorkout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // NEW: Difficulty rating and PRs
    const [showDifficultyModal, setShowDifficultyModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [workoutToRate, setWorkoutToRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [personalRecords, setPersonalRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [archivedDays, setArchivedDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allUsersPRs, setAllUsersPRs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Mock data for leaderboard
    // Workout form state
    const [workoutForm, setWorkoutForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(createEmptyWorkoutForm());
    const [sessionSheetRows, setSessionSheetRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        createEmptySessionRow()
    ]);
    // Cardio form state
    const [cardioForm, setCardioForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: 'running',
        distance: '',
        unit: 'miles',
        duration: '',
        intensity: 'moderate'
    });
    const [sprintForm, setSprintForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        distance: SPRINT_DISTANCES[0],
        attempt1: '',
        attempt2: '',
        attempt3: '',
        notes: ''
    });
    // Exercise being added
    const [exerciseForm, setExerciseForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        sets: '',
        reps: '',
        weight: '',
        weightChange: '',
        restTime: '3m'
    });
    // Unit conversion constants
    const UNIT_CONVERSIONS = {
        grams: {
            factor: 1,
            label: 'g'
        },
        ounces: {
            factor: 28.3495,
            label: 'oz'
        },
        milliliters: {
            factor: 1,
            label: 'ml'
        }
    };
    // Template form state
    const [templateForm, setTemplateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        exercises: [],
        description: ''
    });
    // Import text
    const [importText, setImportText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const athleteOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const fromSessions = workouts.map((workout)=>workout.athlete).filter(Boolean);
        return Array.from(new Set([
            userName,
            ...fromSessions
        ])).filter(Boolean);
    }, [
        workouts,
        userName
    ]);
    const activeAthlete = selectedAthlete || athleteOptions[0] || userName;
    const derivedPRs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>computeSessionPRs(workouts), [
        workouts
    ]);
    const isEditingWorkout = Boolean(editWorkoutId);
    const filteredSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return workouts.filter((session)=>{
            if (sessionFilterAthlete && session.athlete !== sessionFilterAthlete) return false;
            if (sessionFilterType !== 'all' && session.sessionType !== sessionFilterType) return false;
            if (sessionFilterStart && session.date < sessionFilterStart) return false;
            if (sessionFilterEnd && session.date > sessionFilterEnd) return false;
            const query = sessionFilterQuery.trim().toLowerCase();
            if (!query) return true;
            const inName = (session.name || '').toLowerCase().includes(query);
            const inNotes = (session.notes || '').toLowerCase().includes(query);
            const inCoach = (session.coachNotes || '').toLowerCase().includes(query);
            const inExercises = (session.exercises || []).some((exercise)=>(exercise.name || '').toLowerCase().includes(query));
            const inSprints = (session.sprints || []).some((sprint)=>(sprint.distance || '').toLowerCase().includes(query));
            return inName || inNotes || inCoach || inExercises || inSprints;
        });
    }, [
        workouts,
        sessionFilterAthlete,
        sessionFilterType,
        sessionFilterStart,
        sessionFilterEnd,
        sessionFilterQuery
    ]);
    const sessionDashboardStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return filteredSessions.reduce((totals, session)=>{
            totals.sessions += 1;
            totals.exercises += (session.exercises || []).length;
            totals.sprints += (session.sprints || []).length;
            totals.cardio += (session.cardio || []).length;
            if (session.duration) {
                totals.duration += Number(session.duration) || 0;
            }
            return totals;
        }, {
            sessions: 0,
            exercises: 0,
            sprints: 0,
            cardio: 0,
            duration: 0
        });
    }, [
        filteredSessions
    ]);
    const athleteForDashboard = sessionFilterAthlete || activeAthlete;
    const sessionsByWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const buckets = new Map();
        filteredSessions.forEach((session)=>{
            const week = getWeekStart(session.date);
            if (!week) return;
            const current = buckets.get(week) || 0;
            buckets.set(week, current + 1);
        });
        const ordered = Array.from(buckets.entries()).sort(([a], [b])=>a.localeCompare(b)).map(([week, count])=>({
                week,
                count
            }));
        return ordered.slice(-8);
    }, [
        filteredSessions
    ]);
    const sprintTrends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const trends = new Map();
        filteredSessions.filter((session)=>!athleteForDashboard || session.athlete === athleteForDashboard).forEach((session)=>{
            (session.sprints || []).forEach((sprint)=>{
                const attempts = [
                    sprint.attempt1,
                    sprint.attempt2,
                    sprint.attempt3
                ].map(parseTimeToSeconds).filter((time)=>time !== null);
                if (attempts.length === 0) return;
                const best = Math.min(...attempts);
                const key = sprint.distance || 'Unknown';
                if (!trends.has(key)) trends.set(key, []);
                trends.get(key).push({
                    date: session.date,
                    value: best
                });
            });
        });
        return Array.from(trends.entries()).map(([distance, points])=>{
            const sorted = points.sort((a, b)=>a.date.localeCompare(b.date)).slice(-8);
            return {
                distance,
                points: sorted
            };
        }).sort((a, b)=>a.distance.localeCompare(b.distance));
    }, [
        filteredSessions,
        athleteForDashboard
    ]);
    const sessionPrHits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const strengthMap = new Map();
        const sprintMap = new Map();
        derivedPRs.strength.forEach((pr)=>{
            strengthMap.set(`${pr.athlete}::${pr.exercise}`, pr.value);
        });
        derivedPRs.sprints.forEach((pr)=>{
            sprintMap.set(`${pr.athlete}::${pr.distance}`, pr.value);
        });
        return filteredSessions.map((session)=>{
            const hits = [];
            (session.exercises || []).forEach((exercise)=>{
                const weight = parseNumberValue(exercise.weight);
                if (weight === null) return;
                const key = `${session.athlete}::${exercise.name}`;
                if (strengthMap.get(key) === weight) {
                    hits.push(`PR: ${exercise.name} ${weight} lbs`);
                }
            });
            (session.sprints || []).forEach((sprint)=>{
                const attempts = [
                    sprint.attempt1,
                    sprint.attempt2,
                    sprint.attempt3
                ].map(parseTimeToSeconds).filter((time)=>time !== null);
                if (attempts.length === 0) return;
                const best = Math.min(...attempts);
                const key = `${session.athlete}::${sprint.distance}`;
                const pr = sprintMap.get(key);
                if (pr !== undefined && Math.abs(pr - best) < 0.01) {
                    hits.push(`PR: ${sprint.distance} ${formatSeconds(best)}`);
                }
            });
            return {
                id: session.id,
                hits
            };
        });
    }, [
        filteredSessions,
        derivedPRs
    ]);
    const sessionPrHitMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new Map(sessionPrHits.map((entry)=>[
                entry.id,
                entry.hits
            ]));
    }, [
        sessionPrHits
    ]);
    const buildLinePath = (points, width, height)=>{
        if (!points || points.length === 0) return '';
        const values = points.map((point)=>point.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = max - min || 1;
        return points.map((point, index)=>{
            const x = index / Math.max(points.length - 1, 1) * width;
            const y = height - (point.value - min) / range * height;
            return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
        }).join(' ');
    };
    // Load data and check authentication
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeApp = async ()=>{
            try {
                // Check if user is logged in
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (session?.user) {
                    setUser(session.user);
                    // Check if user is admin
                    const adminEmail = ("TURBOPACK compile-time value", "anthonymillsap11@yahoo.com");
                    setIsAdmin(session.user.email === adminEmail);
                    // Load workouts from Supabase
                    const { data: workoutsData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('workouts').select('*').eq('user_id', session.user.id).order('date', {
                        ascending: false
                    });
                    if (error) {
                        console.error('Error loading workouts:', error);
                        setWorkouts(Array.isArray(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$data$2f$sessions$2e$json__$28$json$29$__["default"]) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$data$2f$sessions$2e$json__$28$json$29$__["default"] : []);
                    } else {
                        setWorkouts(workoutsData || []);
                    }
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error initializing app:', error);
                setWorkouts(Array.isArray(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$data$2f$sessions$2e$json__$28$json$29$__["default"]) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$data$2f$sessions$2e$json__$28$json$29$__["default"] : []);
            } finally{
                setLoading(false);
            }
        };
        initializeApp();
        // Listen for auth changes
        const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((event, session)=>{
            setUser(session?.user || null);
            const adminEmail = ("TURBOPACK compile-time value", "anthonymillsap11@yahoo.com");
            setIsAdmin(session?.user?.email === adminEmail);
        });
        return ()=>subscription?.unsubscribe();
    }, []);
    // Save workouts to Supabase
    const saveWorkouts = async (newWorkouts)=>{
        setWorkouts(newWorkouts);
        if (!user) return;
        try {
            for (const workout of newWorkouts){
                // Check if this is a new workout (ID is a number/timestamp) or existing (UUID string)
                const isNewWorkout = typeof workout.id === 'number';
                if (isNewWorkout) {
                    // Insert new workout
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('workouts').insert([
                        {
                            ...workout,
                            user_id: user.id,
                            id: undefined // Let Supabase generate UUID
                        }
                    ]).select();
                    if (error) {
                        console.error('Error inserting workout:', error);
                    } else if (data && data[0]) {
                        // Update the local workout with the new UUID from Supabase
                        const workoutIndex = newWorkouts.findIndex((w)=>w.id === workout.id);
                        if (workoutIndex !== -1) {
                            newWorkouts[workoutIndex].id = data[0].id;
                        }
                    }
                } else {
                    // Update existing workout
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('workouts').update(workout).eq('id', workout.id).eq('user_id', user.id);
                    if (error) {
                        console.error('Error updating workout:', error);
                    }
                }
            }
            // Update state with potentially new IDs
            setWorkouts(newWorkouts);
        } catch (error) {
            console.error('Error saving workouts:', error);
        }
    };
    // Save templates
    const saveTemplates = (newTemplates)=>{
        setWorkoutTemplates(newTemplates);
        try {
            localStorage.setItem('templates', JSON.stringify(newTemplates));
        } catch (error) {
            console.error('Error saving templates:', error);
        }
    };
    // NEW: Save personal records
    const savePersonalRecords = (newPRs)=>{
        setPersonalRecords(newPRs);
        try {
            localStorage.setItem('personalRecords', JSON.stringify(newPRs));
        } catch (error) {
            console.error('Error saving PRs:', error);
        }
    };
    // NEW: Save archived days
    const saveArchivedDays = (newArchived)=>{
        setArchivedDays(newArchived);
        try {
            localStorage.setItem('archivedDays', JSON.stringify(newArchived));
        } catch (error) {
            console.error('Error saving archived days:', error);
        }
    };
    // NEW: Archive a day
    const archiveDay = (date)=>{
        if (!archivedDays.includes(date)) {
            saveArchivedDays([
                ...archivedDays,
                date
            ]);
        }
    };
    // NEW: Update workout with difficulty rating
    const updateWorkoutWithDifficulty = (id, difficulty)=>{
        const updated = workouts.map((w)=>w.id === id ? {
                ...w,
                completed: true,
                difficulty: difficulty,
                completedDate: new Date().toISOString()
            } : w);
        saveWorkouts(updated);
    };
    // Add exercise from library
    const addExerciseFromLibrary = (exercise)=>{
        setExerciseForm({
            ...exerciseForm,
            name: exercise.name
        });
        setShowExerciseLibrary(false);
    };
    // Add exercise to workout
    const addExercise = ()=>{
        if (exerciseForm.name && exerciseForm.sets && exerciseForm.reps) {
            setWorkoutForm({
                ...workoutForm,
                exercises: [
                    ...workoutForm.exercises,
                    {
                        ...exerciseForm,
                        id: Date.now()
                    }
                ]
            });
            setExerciseForm({
                name: '',
                sets: '',
                reps: '',
                weight: '',
                weightChange: '',
                restTime: '3m'
            });
        }
    };
    // NEW: Add cardio to workout
    const addCardio = ()=>{
        if (cardioForm.type && cardioForm.distance && cardioForm.duration) {
            setWorkoutForm({
                ...workoutForm,
                cardio: [
                    ...workoutForm.cardio,
                    {
                        ...cardioForm,
                        id: Date.now()
                    }
                ]
            });
            setCardioForm({
                type: 'running',
                distance: '',
                unit: 'miles',
                duration: '',
                intensity: 'moderate'
            });
        }
    };
    // NEW: Remove cardio from workout
    const removeCardio = (id)=>{
        setWorkoutForm({
            ...workoutForm,
            cardio: workoutForm.cardio.filter((c)=>c.id !== id)
        });
    };
    const addSprint = ()=>{
        if (!sprintForm.distance) return;
        setWorkoutForm({
            ...workoutForm,
            sprints: [
                ...workoutForm.sprints,
                {
                    ...sprintForm,
                    id: Date.now()
                }
            ]
        });
        setSprintForm({
            distance: SPRINT_DISTANCES[0],
            attempt1: '',
            attempt2: '',
            attempt3: '',
            notes: ''
        });
    };
    const removeSprint = (id)=>{
        setWorkoutForm({
            ...workoutForm,
            sprints: workoutForm.sprints.filter((sprint)=>sprint.id !== id)
        });
    };
    const updateSessionSheetRow = (id, patch)=>{
        setSessionSheetRows((rows)=>rows.map((row)=>row.id === id ? {
                    ...row,
                    ...patch
                } : row));
    };
    const addSessionSheetRow = ()=>{
        setSessionSheetRows((rows)=>[
                ...rows,
                createEmptySessionRow()
            ]);
    };
    const removeSessionSheetRow = (id)=>{
        setSessionSheetRows((rows)=>rows.length > 1 ? rows.filter((row)=>row.id !== id) : rows);
    };
    const parseDelimitedLine = (line)=>{
        const trimmed = line.trim();
        if (!trimmed) return [];
        const separator = trimmed.includes('|') ? '|' : ',';
        return trimmed.split(separator).map((part)=>part.trim()).filter(Boolean);
    };
    const parseExercisesFromText = (text)=>{
        return text.split('\n').map(parseDelimitedLine).filter((parts)=>parts.length > 0).map((parts, index)=>({
                id: `${Date.now()}-${index}`,
                name: parts[0] || '',
                sets: parts[1] || '',
                reps: parts[2] || '',
                weight: parts[3] || ''
            })).filter((exercise)=>exercise.name);
    };
    const parseSprintsFromText = (text)=>{
        return text.split('\n').map(parseDelimitedLine).filter((parts)=>parts.length > 0).map((parts, index)=>({
                id: `${Date.now()}-${index}`,
                distance: parts[0] || 'Custom',
                attempt1: parts[1] || '',
                attempt2: parts[2] || '',
                attempt3: parts[3] || ''
            })).filter((sprint)=>sprint.distance);
    };
    const saveSessionSheetRows = ()=>{
        const newSessions = sessionSheetRows.flatMap((row, index)=>{
            if (!row.athlete || !row.date) return [];
            const exercises = parseExercisesFromText(row.exercisesText || '');
            const sprints = parseSprintsFromText(row.sprintsText || '');
            if (exercises.length === 0 && sprints.length === 0) return [];
            return [
                {
                    id: Date.now() + index,
                    name: row.name || row.sessionType || 'Session',
                    athlete: row.athlete,
                    sessionType: row.sessionType || SESSION_TYPES[0],
                    energyLevel: row.energyLevel || '',
                    exercises,
                    sprints,
                    cardio: [],
                    date: row.date,
                    duration: row.duration || '',
                    notes: '',
                    coachNotes: '',
                    completed: false,
                    fromTemplate: false
                }
            ];
        });
        if (newSessions.length === 0) {
            alert('Add at least one valid session row with exercises or sprints.');
            return;
        }
        saveWorkouts([
            ...workouts,
            ...newSessions
        ]);
        setSessionSheetRows([
            createEmptySessionRow()
        ]);
        alert('Sessions saved successfully!');
    };
    const startNewWorkout = ()=>{
        setEditWorkoutId(null);
        setWorkoutForm(createEmptyWorkoutForm());
        setShowWorkoutModal(true);
    };
    const startEditWorkout = (workout)=>{
        setEditWorkoutId(workout.id);
        setWorkoutForm({
            name: workout.name || '',
            athlete: workout.athlete || '',
            sessionType: workout.sessionType || SESSION_TYPES[0],
            energyLevel: workout.energyLevel || '',
            exercises: workout.exercises || [],
            cardio: workout.cardio || [],
            sprints: workout.sprints || [],
            date: workout.date || new Date().toISOString().split('T')[0],
            duration: workout.duration || '',
            notes: workout.notes || '',
            coachNotes: workout.coachNotes || '',
            fromTemplate: false
        });
        setShowWorkoutModal(true);
    };
    const closeWorkoutModal = ()=>{
        setShowWorkoutModal(false);
        setEditWorkoutId(null);
        setWorkoutForm(createEmptyWorkoutForm());
    };
    const exportSessionsJson = ()=>{
        const content = JSON.stringify(filteredSessions, null, 2);
        downloadFile(content, 'sessions-export.json', 'application/json');
    };
    const exportSessionsCsv = ()=>{
        const content = buildSessionCsv(filteredSessions);
        downloadFile(content, 'sessions-export.csv', 'text/csv');
    };
    // Add exercise to template
    const addExerciseToTemplate = ()=>{
        if (exerciseForm.name && exerciseForm.sets && exerciseForm.reps) {
            setTemplateForm({
                ...templateForm,
                exercises: [
                    ...templateForm.exercises,
                    {
                        ...exerciseForm,
                        id: Date.now()
                    }
                ]
            });
            setExerciseForm({
                name: '',
                sets: '',
                reps: '',
                weight: '',
                weightChange: '',
                restTime: '3m'
            });
        }
    };
    // Remove exercise from workout
    const removeExercise = (id)=>{
        setWorkoutForm({
            ...workoutForm,
            exercises: workoutForm.exercises.filter((ex)=>ex.id !== id)
        });
    };
    // Remove exercise from template
    const removeExerciseFromTemplate = (id)=>{
        setTemplateForm({
            ...templateForm,
            exercises: templateForm.exercises.filter((ex)=>ex.id !== id)
        });
    };
    // Save template
    const saveTemplate = ()=>{
        if (templateForm.name && templateForm.exercises.length > 0) {
            const newTemplate = {
                ...templateForm,
                id: Date.now()
            };
            saveTemplates([
                ...workoutTemplates,
                newTemplate
            ]);
            setTemplateForm({
                name: '',
                exercises: [],
                description: ''
            });
            setShowTemplateModal(false);
        }
    };
    // Load template into workout
    const loadTemplate = (template)=>{
        setWorkoutForm({
            ...workoutForm,
            name: template.name,
            exercises: template.exercises.map((ex)=>({
                    ...ex,
                    id: Date.now() + Math.random()
                })),
            fromTemplate: true
        });
        setShowWorkoutModal(true);
    };
    // Delete template
    const deleteTemplate = (id)=>{
        saveTemplates(workoutTemplates.filter((t)=>t.id !== id));
    };
    // Import workout from text
    const importWorkout = ()=>{
        try {
            const parsed = JSON.parse(importText);
            if (parsed.exercises && Array.isArray(parsed.exercises)) {
                const newTemplate = {
                    ...parsed,
                    id: Date.now()
                };
                saveTemplates([
                    ...workoutTemplates,
                    newTemplate
                ]);
                setImportText('');
                setShowImportModal(false);
            }
        } catch (error) {
            alert('Invalid format. Please paste valid JSON.');
        }
    };
    // Export template
    const exportTemplate = (template)=>{
        const json = JSON.stringify(template, null, 2);
        navigator.clipboard.writeText(json);
        alert('Template copied to clipboard!');
    };
    // Save workout
    const saveWorkout = ()=>{
        if (!workoutForm.name) {
            alert('Please enter a session name');
            return;
        }
        if (!workoutForm.athlete) {
            alert('Please enter an athlete name');
            return;
        }
        if (workoutForm.exercises.length === 0 && workoutForm.cardio.length === 0 && workoutForm.sprints.length === 0) {
            alert('Please add at least one exercise, sprint, or cardio item');
            return;
        }
        if (isEditingWorkout) {
            const updated = workouts.map((workout)=>{
                if (workout.id !== editWorkoutId) return workout;
                return {
                    ...workout,
                    ...workoutForm,
                    id: editWorkoutId,
                    completed: workout.completed,
                    difficulty: workout.difficulty,
                    completedDate: workout.completedDate,
                    fromTemplate: false
                };
            });
            saveWorkouts(updated);
            closeWorkoutModal();
            alert('Session updated successfully!');
            return;
        }
        const newWorkout = {
            ...workoutForm,
            id: Date.now(),
            completed: false,
            fromTemplate: false
        };
        saveWorkouts([
            ...workouts,
            newWorkout
        ]);
        closeWorkoutModal();
        alert('Session saved successfully!');
    };
    const deleteCurrentWorkout = ()=>{
        if (!isEditingWorkout) return;
        if (!window.confirm('Are you sure you want to delete this session? This cannot be undone.')) {
            return;
        }
        saveWorkouts(workouts.filter((w)=>w.id !== editWorkoutId));
        closeWorkoutModal();
        alert('Session deleted successfully!');
    };
    // Toggle workout completion
    const toggleWorkoutComplete = (id)=>{
        const workout = workouts.find((w)=>w.id === id);
        if (!workout.completed) {
            // Show difficulty modal when marking as complete
            setWorkoutToRate(id);
            setShowDifficultyModal(true);
        } else {
            // Just toggle off if already completed
            const updated = workouts.map((w)=>w.id === id ? {
                    ...w,
                    completed: false,
                    difficulty: null
                } : w);
            saveWorkouts(updated);
        }
    };
    // Delete workout
    const deleteWorkout = async (id)=>{
        if (!user) return;
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('workouts').delete().eq('id', id).eq('user_id', user.id);
            if (error) throw error;
            // Update local state
            setWorkouts(workouts.filter((w)=>w.id !== id));
        } catch (error) {
            console.error('Error deleting workout:', error);
            alert('Failed to delete workout');
        }
    };
    // Move workout to different date
    const moveWorkout = (workoutId, newDate)=>{
        const updated = workouts.map((w)=>w.id === workoutId ? {
                ...w,
                date: newDate
            } : w);
        saveWorkouts(updated);
    };
    // Drag and drop handlers
    const handleDragStart = (workout)=>{
        setDraggedWorkout(workout);
    };
    const handleDrop = (date)=>{
        if (draggedWorkout) {
            moveWorkout(draggedWorkout.id, date);
            setDraggedWorkout(null);
        }
    };
    // Get today's stats
    const getTodayStats = ()=>{
        const today = new Date().toISOString().split('T')[0];
        const todayWorkouts = workouts.filter((w)=>w.date === today);
        const completedWorkouts = todayWorkouts.filter((w)=>w.completed).length;
        return {
            completedWorkouts,
            totalWorkouts: todayWorkouts.length
        };
    };
    // Get next 7 days
    const getNext7Days = ()=>{
        const days = [];
        const today = new Date();
        for(let i = 0; i < 7; i++){
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            days.push({
                date: date.toISOString().split('T')[0],
                day: date.getDate(),
                dayName: date.toLocaleDateString('en-US', {
                    weekday: 'short'
                }),
                isToday: i === 0
            });
        }
        return days;
    };
    // Get calendar days for month view
    const getMonthDays = ()=>{
        const year = calendarDate.getFullYear();
        const month = calendarDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();
        const days = [];
        // Previous month days
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for(let i = startDayOfWeek - 1; i >= 0; i--){
            days.push({
                date: new Date(year, month - 1, prevMonthLastDay - i).toISOString().split('T')[0],
                day: prevMonthLastDay - i,
                isCurrentMonth: false
            });
        }
        // Current month days
        for(let i = 1; i <= daysInMonth; i++){
            days.push({
                date: new Date(year, month, i).toISOString().split('T')[0],
                day: i,
                isCurrentMonth: true
            });
        }
        // Next month days
        const remainingDays = 42 - days.length; // 6 weeks * 7 days
        for(let i = 1; i <= remainingDays; i++){
            days.push({
                date: new Date(year, month + 1, i).toISOString().split('T')[0],
                day: i,
                isCurrentMonth: false
            });
        }
        return days;
    };
    // Render calendar day
    const renderCalendarDay = (day)=>{
        const dayWorkouts = workouts.filter((w)=>w.date === day.date);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-[100px] p-3 border border-gray-700 ${day.isCurrentMonth ? 'bg-gray-800' : 'bg-gray-800'} hover:bg-gray-700 cursor-pointer transition-colors`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-bold text-white mb-2",
                    children: day.day
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1487,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: dayWorkouts.map((workout)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>startEditWorkout(workout),
                            className: `text-sm font-semibold p-1.5 rounded cursor-pointer ${workout.completed ? 'bg-green-800 text-green-100' : 'bg-blue-800 text-blue-100'}`,
                            children: workout.name
                        }, workout.id, false, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                            lineNumber: 1490,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1488,
                    columnNumber: 9
                }, this)
            ]
        }, day.date, true, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
            lineNumber: 1486,
            columnNumber: 7
        }, this);
    };
    // NEW: Render day view
    const renderDayView = ()=>{
        const dayWorkouts = workouts.filter((w)=>w.date === currentDate);
        const displayDate = new Date(currentDate);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold text-white",
                                children: displayDate.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1512,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                            lineNumber: 1511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentDate(new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() - 1)).toISOString().split('T')[0]),
                                    className: "px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1519,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 1515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentDate(new Date().toISOString().split('T')[0]),
                                    className: "px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800",
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 1521,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentDate(new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() + 1)).toISOString().split('T')[0]),
                                    className: "px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1531,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 1527,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                            lineNumber: 1514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1510,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800 rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Workouts"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1539,
                                columnNumber: 13
                            }, this),
                            dayWorkouts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: dayWorkouts.map((workout)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>startEditWorkout(workout),
                                        className: `p-4 rounded-lg border cursor-pointer ${workout.completed ? 'bg-green-900 border-green-700' : 'bg-blue-900 border-blue-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-lg font-bold text-white",
                                                        children: workout.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1549,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (event)=>{
                                                            event.stopPropagation();
                                                            toggleWorkoutComplete(workout.id);
                                                        },
                                                        className: `p-1 rounded ${workout.completed ? 'text-green-600' : 'text-gray-400'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 1557,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1548,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 text-sm font-semibold text-gray-200 mb-2",
                                                children: [
                                                    workout.exercises && workout.exercises.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-100",
                                                                    children: exercise.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1563,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-400",
                                                                            children: [
                                                                                exercise.sets,
                                                                                "×",
                                                                                exercise.reps
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                            lineNumber: 1565,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        exercise.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: exercise.weight
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                            lineNumber: 1566,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        exercise.weightChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`,
                                                                            children: [
                                                                                parseInt(exercise.weightChange) > 0 ? '+' : '',
                                                                                exercise.weightChange
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                            lineNumber: 1567,
                                                                            columnNumber: 55
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1564,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, exercise.id, true, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 1562,
                                                            columnNumber: 25
                                                        }, this)),
                                                    workout.cardio && workout.cardio.map((cardio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-orange-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "capitalize",
                                                                    children: [
                                                                        cardio.type,
                                                                        ": ",
                                                                        cardio.distance,
                                                                        " ",
                                                                        cardio.unit
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1573,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-orange-500",
                                                                    children: [
                                                                        cardio.duration,
                                                                        " min"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1574,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, cardio.id, true, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 1572,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1560,
                                                columnNumber: 21
                                            }, this),
                                            workout.completed && workout.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-green-200 p-2 bg-green-800 rounded",
                                                children: [
                                                    "Difficulty: ",
                                                    workout.difficulty,
                                                    "/10"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1579,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, workout.id, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1543,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1541,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "No workouts scheduled"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1585,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1538,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1536,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
            lineNumber: 1509,
            columnNumber: 7
        }, this);
    };
    // Render week view
    const renderWeekView = ()=>{
        const days = getNext7Days();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-7 gap-4",
            children: days.map((day)=>{
                const dayWorkouts = workouts.filter((w)=>w.date === day.date);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `min-h-[200px] p-4 border border-gray-700 rounded-lg ${day.isToday ? 'bg-blue-900 border-blue-300' : 'bg-gray-800'} hover:shadow-md transition-shadow cursor-pointer`,
                    onClick: ()=>{
                        setCalendarView('day');
                        setCurrentDate(day.date);
                    },
                    onDrop: ()=>handleDrop(day.date),
                    onDragOver: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-white mb-1",
                            children: day.dayName
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                            lineNumber: 1604,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold text-gray-200 mb-4",
                            children: day.day
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                            lineNumber: 1605,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: dayWorkouts.map((workout)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    draggable: true,
                                    onDragStart: ()=>handleDragStart(workout),
                                    onClick: (event)=>{
                                        event.stopPropagation();
                                        startEditWorkout(workout);
                                    },
                                    className: `p-3 rounded-lg text-sm font-semibold cursor-pointer ${workout.completed ? 'bg-green-800 text-green-100 border border-green-700' : 'bg-blue-800 text-blue-100 border border-blue-700'} hover:shadow-md transition-shadow`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-base",
                                            children: workout.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 1619,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm opacity-90",
                                            children: [
                                                workout.exercises.length,
                                                " exercises"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 1620,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, workout.id, true, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 1609,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                            lineNumber: 1607,
                            columnNumber: 15
                        }, this)
                    ]
                }, day.date, true, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1603,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
            lineNumber: 1598,
            columnNumber: 7
        }, this);
    };
    // Render month view
    const renderMonthView = ()=>{
        const days = getMonthDays();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-7 gap-1",
            children: [
                [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 text-center font-bold text-lg text-white bg-gray-700",
                        children: day
                    }, day, false, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1638,
                        columnNumber: 11
                    }, this)),
                days.map(renderCalendarDay)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
            lineNumber: 1636,
            columnNumber: 7
        }, this);
    };
    const strengthPRs = derivedPRs.strength.filter((pr)=>pr.athlete === activeAthlete).sort((a, b)=>a.exercise.localeCompare(b.exercise));
    const sprintPRs = derivedPRs.sprints.filter((pr)=>pr.athlete === activeAthlete).sort((a, b)=>a.distance.localeCompare(b.distance));
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1659,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1660,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 1658,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
            lineNumber: 1657,
            columnNumber: 7
        }, this);
    }
    // Show auth modal if not logged in
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$components$2f$AuthModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onAuthSuccess: ()=>window.location.reload()
        }, void 0, false, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
            lineNumber: 1668,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-gray-800 shadow-sm border-b border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"], {
                                                className: "h-8 w-8 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1679,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Fitness Tracker"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1680,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1678,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: user?.email
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1683,
                                                columnNumber: 17
                                            }, this),
                                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800",
                                                children: "ADMIN"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1685,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1682,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1677,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startNewWorkout,
                                        className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1697,
                                                columnNumber: 17
                                            }, this),
                                            "Add Session"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: async ()=>{
                                            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                                            window.location.reload();
                                        },
                                        className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1708,
                                                columnNumber: 17
                                            }, this),
                                            "Sign Out"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1701,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1676,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1675,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 1674,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-gray-800 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-8",
                        children: [
                            {
                                id: 'home',
                                label: 'Home',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
                            },
                            {
                                id: 'workouts',
                                label: 'Sessions',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"]
                            },
                            {
                                id: 'sessions-table',
                                label: 'Session Sheet',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"]
                            },
                            {
                                id: 'sessions-dashboard',
                                label: 'Dashboard',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"]
                            },
                            {
                                id: 'prs',
                                label: 'PRs',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                            },
                            {
                                id: 'templates',
                                label: 'Templates',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"]
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex items-center px-1 py-4 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1737,
                                        columnNumber: 17
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1728,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1719,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 1718,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 1717,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",
                children: [
                    activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-white mb-4",
                                        children: "Today's Stats"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1751,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-600",
                                                        children: getTodayStats().completedWorkouts
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1754,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: "Sessions Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1755,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1753,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: getTodayStats().totalWorkouts
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1758,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: "Sessions Scheduled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1759,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1757,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1752,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1750,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-white",
                                                children: "Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1767,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCalendarView('day'),
                                                        className: `px-3 py-1 text-sm rounded ${calendarView === 'day' ? 'bg-blue-800 text-blue-800' : 'bg-gray-100 text-gray-300'}`,
                                                        children: "Day"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1769,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCalendarView('week'),
                                                        className: `px-3 py-1 text-sm rounded ${calendarView === 'week' ? 'bg-blue-800 text-blue-800' : 'bg-gray-100 text-gray-300'}`,
                                                        children: "Week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1775,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCalendarView('month'),
                                                        className: `px-3 py-1 text-sm rounded ${calendarView === 'month' ? 'bg-blue-800 text-blue-800' : 'bg-gray-100 text-gray-300'}`,
                                                        children: "Month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1781,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1768,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1766,
                                        columnNumber: 15
                                    }, this),
                                    calendarView === 'day' && renderDayView(),
                                    calendarView === 'week' && renderWeekView(),
                                    calendarView === 'month' && renderMonthView()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1765,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1748,
                        columnNumber: 11
                    }, this),
                    activeTab === 'workouts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Sessions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1801,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 mt-1",
                                                children: [
                                                    "Showing workouts for: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: new Date(currentDate).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1802,
                                                        columnNumber: 81
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1802,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1800,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: currentDate,
                                                onChange: (e)=>setCurrentDate(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1805,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: startNewWorkout,
                                                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1815,
                                                        columnNumber: 19
                                                    }, this),
                                                    "New Session"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1811,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1804,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1799,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                                children: workouts.filter((w)=>w.date === currentDate).map((workout)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: workout.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1825,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>startEditWorkout(workout),
                                                                className: "p-1 rounded text-blue-600 hover:bg-blue-900",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1831,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1827,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleWorkoutComplete(workout.id),
                                                                className: `p-1 rounded ${workout.completed ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1837,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1833,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>deleteWorkout(workout.id),
                                                                className: "p-1 rounded text-red-600 hover:bg-red-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1843,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1839,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1826,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1824,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Athlete:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1849,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            workout.athlete || 'Unknown'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1849,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Session:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1850,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            workout.sessionType || 'Session'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1850,
                                                        columnNumber: 21
                                                    }, this),
                                                    workout.energyLevel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Energy:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1851,
                                                                columnNumber: 50
                                                            }, this),
                                                            " ",
                                                            workout.energyLevel,
                                                            "/10"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1851,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1848,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: workout.exercises.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white",
                                                                children: exercise.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1857,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-300",
                                                                        children: [
                                                                            exercise.sets,
                                                                            "×",
                                                                            exercise.reps
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1859,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    exercise.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: exercise.weight
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1860,
                                                                        columnNumber: 47
                                                                    }, this),
                                                                    exercise.weightChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`,
                                                                        children: [
                                                                            parseInt(exercise.weightChange) > 0 ? '+' : '',
                                                                            exercise.weightChange
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1861,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1858,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, exercise.id, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1856,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1854,
                                                columnNumber: 19
                                            }, this),
                                            workout.sprints && workout.sprints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-gray-200 mb-2",
                                                        children: "Sprint Times"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1869,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1",
                                                        children: workout.sprints.map((sprint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-300",
                                                                children: [
                                                                    sprint.distance,
                                                                    ": ",
                                                                    sprint.attempt1 || '-',
                                                                    " / ",
                                                                    sprint.attempt2 || '-',
                                                                    " / ",
                                                                    sprint.attempt3 || '-'
                                                                ]
                                                            }, sprint.id, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1872,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1870,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1868,
                                                columnNumber: 21
                                            }, this),
                                            workout.coachNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 text-sm text-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Coach Notes:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1882,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    workout.coachNotes
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1881,
                                                columnNumber: 21
                                            }, this),
                                            workout.completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 p-2 bg-green-900 rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-green-200",
                                                    children: [
                                                        "Difficulty: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                workout.difficulty,
                                                                "/10"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 1889,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 1888,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1887,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300",
                                                children: new Date(workout.date).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1894,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, workout.id, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1823,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1821,
                                columnNumber: 13
                            }, this),
                            workouts.filter((w)=>w.date === currentDate).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: "No workouts for this date"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 1903,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1902,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1798,
                        columnNumber: 11
                    }, this),
                    activeTab === 'sessions-table' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Session Sheet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1913,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 mt-1",
                                                children: "Log multiple athletes at once. Use one row per session."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1914,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1912,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addSessionSheetRow,
                                                className: "inline-flex items-center px-3 py-2 border border-gray-600 rounded-md text-sm text-gray-200 bg-gray-800 hover:bg-gray-800",
                                                children: "+ Row"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1917,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: saveSessionSheetRows,
                                                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                                                children: "Save Rows"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 1923,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1916,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mb-4",
                                        children: "Exercises format: Name | Sets | Reps | Weight. Sprint format: Distance | Attempt1 | Attempt2 | Attempt3. Use one line per entry."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1933,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "min-w-full text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "text-left text-gray-300 border-b",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Athlete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1940,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1941,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Session Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1942,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Session Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1943,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Energy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1944,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Exercises"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1945,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Sprints"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1946,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2 px-2",
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 1947,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 1939,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 1938,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: sessionSheetRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b align-top",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.athlete,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                athlete: e.target.value
                                                                            }),
                                                                        className: "w-32 px-2 py-1 border border-gray-600 rounded",
                                                                        list: "athlete-options",
                                                                        placeholder: "Athlete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1954,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1953,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: row.date,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                date: e.target.value
                                                                            }),
                                                                        className: "px-2 py-1 border border-gray-600 rounded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1964,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1963,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: row.sessionType,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                sessionType: e.target.value
                                                                            }),
                                                                        className: "px-2 py-1 border border-gray-600 rounded",
                                                                        children: SESSION_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: type,
                                                                                children: type
                                                                            }, type, false, {
                                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                                lineNumber: 1978,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1972,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1971,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.name,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                name: e.target.value
                                                                            }),
                                                                        className: "w-40 px-2 py-1 border border-gray-600 rounded",
                                                                        placeholder: "Optional"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1983,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1982,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "1",
                                                                        max: "10",
                                                                        value: row.energyLevel,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                energyLevel: e.target.value
                                                                            }),
                                                                        className: "w-20 px-2 py-1 border border-gray-600 rounded",
                                                                        placeholder: "1-10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 1992,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 1991,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: row.exercisesText,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                exercisesText: e.target.value
                                                                            }),
                                                                        className: "w-64 h-24 px-2 py-1 border border-gray-600 rounded",
                                                                        placeholder: "Bench Press | 5 | 5 | 135"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2003,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2002,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: row.sprintsText,
                                                                        onChange: (e)=>updateSessionSheetRow(row.id, {
                                                                                sprintsText: e.target.value
                                                                            }),
                                                                        className: "w-56 h-24 px-2 py-1 border border-gray-600 rounded",
                                                                        placeholder: "100m | 12.4 | 12.1 | 11.9"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2011,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2010,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeSessionSheetRow(row.id),
                                                                        className: "text-red-600 hover:text-red-800 text-xs",
                                                                        children: "Remove"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2019,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2018,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, row.id, true, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 1952,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 1950,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 1937,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 1936,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 1932,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 1910,
                        columnNumber: 11
                    }, this),
                    activeTab === 'sessions-dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Session Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2039,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 mt-1",
                                                children: "Filter sessions and review key totals."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2040,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2038,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: exportSessionsJson,
                                                className: "inline-flex items-center px-3 py-2 border border-gray-600 rounded-md text-sm text-gray-200 bg-gray-800 hover:bg-gray-800",
                                                children: "Export JSON"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2043,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: exportSessionsCsv,
                                                className: "inline-flex items-center px-3 py-2 border border-gray-600 rounded-md text-sm text-gray-200 bg-gray-800 hover:bg-gray-800",
                                                children: "Export CSV"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2049,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: sessionFilterAthlete,
                                                onChange: (e)=>setSessionFilterAthlete(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Athletes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2060,
                                                        columnNumber: 19
                                                    }, this),
                                                    athleteOptions.map((athlete)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: athlete,
                                                            children: athlete
                                                        }, athlete, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 2062,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2055,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: sessionFilterType,
                                                onChange: (e)=>setSessionFilterType(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Sessions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2070,
                                                        columnNumber: 19
                                                    }, this),
                                                    SESSION_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: type,
                                                            children: type
                                                        }, type, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 2072,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2065,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: sessionFilterStart,
                                                onChange: (e)=>setSessionFilterStart(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2075,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: sessionFilterEnd,
                                                onChange: (e)=>setSessionFilterEnd(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2081,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: sessionFilterQuery,
                                                onChange: (e)=>setSessionFilterQuery(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Search sessions..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2087,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2042,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2037,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "Sessions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2099,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-white",
                                                children: sessionDashboardStats.sessions
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2098,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "Exercises"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-white",
                                                children: sessionDashboardStats.exercises
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "Sprints"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-white",
                                                children: sessionDashboardStats.sprints
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "Cardio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-white",
                                                children: sessionDashboardStats.cardio
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2112,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "Minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-white",
                                                children: sessionDashboardStats.duration
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2097,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 lg:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white mb-2",
                                                children: "Sessions Per Week"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-40 flex items-end gap-2",
                                                children: sessionsByWeek.length > 0 ? sessionsByWeek.map((bucket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full rounded-md bg-blue-9000",
                                                                style: {
                                                                    height: `${Math.max(bucket.count * 12, 8)}px`
                                                                },
                                                                title: `${bucket.count} sessions`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2127,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-400",
                                                                children: bucket.week.slice(5)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2132,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, bucket.week, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2126,
                                                        columnNumber: 23
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400",
                                                    children: "No sessions to chart."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 2136,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Sprint Trends"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-400",
                                                        children: [
                                                            "Athlete: ",
                                                            athleteForDashboard || 'All'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: sprintTrends.length > 0 ? sprintTrends.map((trend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-gray-700 rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium text-gray-200 mb-2",
                                                                children: trend.distance
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2150,
                                                                columnNumber: 25
                                                            }, this),
                                                            trend.points.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                viewBox: "0 0 120 40",
                                                                className: "w-full h-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: buildLinePath(trend.points, 120, 40),
                                                                    fill: "none",
                                                                    stroke: "#2563eb",
                                                                    strokeWidth: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2153,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2152,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-400",
                                                                children: "Not enough data yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2161,
                                                                columnNumber: 27
                                                            }, this),
                                                            trend.points.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-400 mt-1",
                                                                children: [
                                                                    "Latest: ",
                                                                    formatSeconds(trend.points[trend.points.length - 1].value)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2164,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, trend.distance, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2149,
                                                        columnNumber: 23
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400",
                                                    children: "No sprint data to chart."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 2171,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-4",
                                        children: "Filtered Sessions"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2178,
                                        columnNumber: 15
                                    }, this),
                                    filteredSessions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: filteredSessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>startEditWorkout(session),
                                                className: "border border-gray-700 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow hover:border-blue-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col md:flex-row md:items-center md:justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: new Date(session.date).toLocaleDateString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2185,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-semibold text-white",
                                                                        children: session.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2186,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-300",
                                                                        children: [
                                                                            session.athlete,
                                                                            " • ",
                                                                            session.sessionType || 'Session'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2187,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2184,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-300",
                                                                children: session.duration ? `${session.duration} min` : 'No duration'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2189,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2183,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 text-sm text-gray-300",
                                                        children: [
                                                            session.exercises?.length || 0,
                                                            " exercises • ",
                                                            session.sprints?.length || 0,
                                                            " sprints • ",
                                                            session.cardio?.length || 0,
                                                            " cardio"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2193,
                                                        columnNumber: 23
                                                    }, this),
                                                    sessionPrHitMap.get(session.id)?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex flex-wrap gap-2",
                                                        children: sessionPrHitMap.get(session.id).map((hit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-medium text-blue-300 bg-blue-900 border border-blue-700 px-2 py-1 rounded-full",
                                                                children: hit
                                                            }, hit, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2199,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2197,
                                                        columnNumber: 25
                                                    }, this),
                                                    session.coachNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-gray-200",
                                                        children: [
                                                            "Coach Notes: ",
                                                            session.coachNotes
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2206,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, session.id, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2182,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2180,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: "No sessions match these filters."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2212,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2036,
                        columnNumber: 11
                    }, this),
                    activeTab === 'prs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Personal Records"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-gray-200",
                                                children: "Athlete"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedAthlete || activeAthlete,
                                                onChange: (e)=>setSelectedAthlete(e.target.value),
                                                className: "px-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                children: athleteOptions.map((athlete)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: athlete,
                                                        children: athlete
                                                    }, athlete, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2230,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2224,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-4",
                                        children: "Strength PRs"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                                        children: strengthPRs.length > 0 ? strengthPRs.map((pr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-blue-700 bg-blue-900 rounded-lg p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-white mb-2",
                                                        children: pr.exercise
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2243,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-600 mb-2",
                                                        children: [
                                                            pr.value,
                                                            " lbs"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: new Date(pr.date).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2245,
                                                        columnNumber: 23
                                                    }, this),
                                                    pr.reps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: [
                                                            "Reps: ",
                                                            pr.reps
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2248,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, `${pr.athlete}-${pr.exercise}`, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2242,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400",
                                            children: "No strength PRs yet. Log a session to start tracking."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2252,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-4",
                                        children: "Sprint PRs"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2259,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                                        children: sprintPRs.length > 0 ? sprintPRs.map((pr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-700 bg-gray-800 rounded-lg p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-white mb-2",
                                                        children: pr.distance
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2264,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-white mb-2",
                                                        children: formatSeconds(pr.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2265,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: new Date(pr.date).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2266,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, `${pr.athlete}-${pr.distance}`, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2263,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400",
                                            children: "No sprint PRs yet. Add sprint times in a session."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2272,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-800 rounded-lg shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-4",
                                        children: "Competitive Leaderboard"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            'Barbell Back Squat',
                                            'Barbell Bench Press',
                                            'Barbell Deadlift',
                                            'Overhead Press'
                                        ].map((exercise)=>{
                                            const exercisePRs = allUsersPRs.filter((pr)=>pr.exercise === exercise).sort((a, b)=>{
                                                const aWeight = parseInt(a.weight);
                                                const bWeight = parseInt(b.weight);
                                                return bWeight - aWeight;
                                            });
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-white mb-3",
                                                        children: exercise
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2293,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: exercisePRs.map((pr, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center justify-between p-3 rounded-lg ${index === 0 ? 'bg-yellow-50 border border-yellow-200' : index === 1 ? 'bg-gray-100 border border-gray-700' : index === 2 ? 'bg-orange-900 border border-orange-700' : 'bg-gray-800 border border-gray-700'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-lg font-bold text-gray-300 w-8",
                                                                                children: [
                                                                                    "#",
                                                                                    index + 1
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                                lineNumber: 2298,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-medium text-white",
                                                                                        children: pr.userName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                                        lineNumber: 2300,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm text-gray-300",
                                                                                        children: new Date(pr.date).toLocaleDateString()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                                        lineNumber: 2301,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                                lineNumber: 2299,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2297,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold text-white",
                                                                        children: pr.weight
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2304,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, pr.userId, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2296,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2294,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, exercise, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2292,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2219,
                        columnNumber: 11
                    }, this),
                    activeTab === 'templates' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Workout Templates"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowTemplateModal(true),
                                                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2325,
                                                        columnNumber: 19
                                                    }, this),
                                                    "New Template"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowImportModal(true),
                                                className: "inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2332,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Import"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2328,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                                children: workoutTemplates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg shadow p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: template.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2342,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>loadTemplate(template),
                                                                className: "p-1 rounded text-blue-600 hover:bg-blue-900",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2348,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2344,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>exportTemplate(template),
                                                                className: "p-1 rounded text-gray-300 hover:bg-gray-800",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2354,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2350,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>deleteTemplate(template.id),
                                                                className: "p-1 rounded text-red-600 hover:bg-red-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2360,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2356,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2343,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: template.exercises.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white",
                                                                children: exercise.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2368,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: [
                                                                    exercise.sets,
                                                                    "×",
                                                                    exercise.reps
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2369,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, exercise.id, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2367,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2365,
                                                columnNumber: 19
                                            }, this),
                                            template.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: template.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2375,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, template.id, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2340,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2338,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 1746,
                columnNumber: 7
            }, this),
            showWorkoutModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white",
                                        children: isEditingWorkout ? 'Edit Session' : 'Add Session'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2391,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeWorkoutModal,
                                        className: "text-gray-400 hover:text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2396,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2392,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2390,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Session Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2402,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: workoutForm.name,
                                                onChange: (e)=>setWorkoutForm({
                                                        ...workoutForm,
                                                        name: e.target.value
                                                    }),
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "e.g., Upper Body, Lower Body"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2403,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2401,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2413,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: workoutForm.date,
                                                onChange: (e)=>setWorkoutForm({
                                                        ...workoutForm,
                                                        date: e.target.value
                                                    }),
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2414,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2412,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Athlete"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2423,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: workoutForm.athlete,
                                                onChange: (e)=>setWorkoutForm({
                                                        ...workoutForm,
                                                        athlete: e.target.value
                                                    }),
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "e.g., Xavier",
                                                list: "athlete-options"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2424,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                id: "athlete-options",
                                                children: athleteOptions.map((athlete)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: athlete
                                                    }, athlete, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2434,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2432,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2422,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-200 mb-1",
                                                        children: "Session Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2441,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: workoutForm.sessionType,
                                                        onChange: (e)=>setWorkoutForm({
                                                                ...workoutForm,
                                                                sessionType: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: SESSION_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: type,
                                                                children: type
                                                            }, type, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2448,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2442,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2440,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-200 mb-1",
                                                        children: "Energy Level (1-10)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2453,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1",
                                                        max: "10",
                                                        value: workoutForm.energyLevel,
                                                        onChange: (e)=>setWorkoutForm({
                                                                ...workoutForm,
                                                                energyLevel: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "e.g., 8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2454,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2452,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2439,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Exercises"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2467,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: workoutForm.exercises.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 p-2 bg-gray-800 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1",
                                                                children: exercise.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2471,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    exercise.sets,
                                                                    "×",
                                                                    exercise.reps
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2472,
                                                                columnNumber: 25
                                                            }, this),
                                                            exercise.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-300",
                                                                children: exercise.weight
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2473,
                                                                columnNumber: 45
                                                            }, this),
                                                            exercise.weightChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`,
                                                                children: [
                                                                    parseInt(exercise.weightChange) > 0 ? '+' : '',
                                                                    exercise.weightChange
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2474,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeExercise(exercise.id),
                                                                className: "text-red-600 hover:text-red-800",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2479,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2475,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, exercise.id, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2470,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2468,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-5 gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: exerciseForm.name,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                name: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Exercise name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2486,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: exerciseForm.sets,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                sets: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Sets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2493,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: exerciseForm.reps,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                reps: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Reps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2500,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: exerciseForm.weight,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                weight: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2507,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: exerciseForm.weightChange,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                weightChange: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Weight change (+ or -)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2514,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2485,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addExercise,
                                                        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2528,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Add Exercise"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2524,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowExerciseLibrary(true),
                                                        className: "inline-flex items-center px-3 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2535,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Browse Library"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2531,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2523,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2466,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Cardio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2543,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: workoutForm.cardio && workoutForm.cardio.map((cardio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 p-2 bg-orange-900 rounded border border-orange-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium capitalize",
                                                                        children: cardio.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                        lineNumber: 2548,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " - ",
                                                                    cardio.distance,
                                                                    " ",
                                                                    cardio.unit
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2547,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-300",
                                                                children: [
                                                                    cardio.duration,
                                                                    " min"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2550,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeCardio(cardio.id),
                                                                className: "text-red-600 hover:text-red-800",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2555,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2551,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, cardio.id, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2546,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2544,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-5 gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cardioForm.type,
                                                        onChange: (e)=>setCardioForm({
                                                                ...cardioForm,
                                                                type: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "running",
                                                                children: "Running"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2567,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "cycling",
                                                                children: "Cycling"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2568,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "swimming",
                                                                children: "Swimming"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2569,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "rowing",
                                                                children: "Rowing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2570,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "walking",
                                                                children: "Walking"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2571,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2562,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: cardioForm.distance,
                                                        onChange: (e)=>setCardioForm({
                                                                ...cardioForm,
                                                                distance: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                        placeholder: "Distance",
                                                        step: "0.1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2573,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cardioForm.unit,
                                                        onChange: (e)=>setCardioForm({
                                                                ...cardioForm,
                                                                unit: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "miles",
                                                                children: "Miles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2586,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "km",
                                                                children: "KM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2587,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2581,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: cardioForm.duration,
                                                        onChange: (e)=>setCardioForm({
                                                                ...cardioForm,
                                                                duration: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                        placeholder: "Duration (min)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2589,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cardioForm.intensity,
                                                        onChange: (e)=>setCardioForm({
                                                                ...cardioForm,
                                                                intensity: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "easy",
                                                                children: "Easy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2601,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "moderate",
                                                                children: "Moderate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2602,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "intense",
                                                                children: "Intense"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2603,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2596,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2561,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addCardio,
                                                className: "inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2611,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Add Cardio"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2607,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2542,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Sprint Times"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2617,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: workoutForm.sprints.map((sprint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-6 gap-2 p-2 bg-gray-800 rounded border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:col-span-2 font-medium text-white",
                                                                children: sprint.distance
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2621,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-300",
                                                                children: [
                                                                    "A1: ",
                                                                    sprint.attempt1 || '-'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2622,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-300",
                                                                children: [
                                                                    "A2: ",
                                                                    sprint.attempt2 || '-'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2623,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-300",
                                                                children: [
                                                                    "A3: ",
                                                                    sprint.attempt3 || '-'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2624,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeSprint(sprint.id),
                                                                className: "text-red-600 hover:text-red-800 text-sm",
                                                                children: "Remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2625,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, sprint.id, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2620,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2618,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-6 gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: sprintForm.distance,
                                                        onChange: (e)=>setSprintForm({
                                                                ...sprintForm,
                                                                distance: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2",
                                                        children: SPRINT_DISTANCES.map((distance)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: distance,
                                                                children: distance
                                                            }, distance, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2642,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2636,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: sprintForm.attempt1,
                                                        onChange: (e)=>setSprintForm({
                                                                ...sprintForm,
                                                                attempt1: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Attempt 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2645,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: sprintForm.attempt2,
                                                        onChange: (e)=>setSprintForm({
                                                                ...sprintForm,
                                                                attempt2: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Attempt 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2652,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: sprintForm.attempt3,
                                                        onChange: (e)=>setSprintForm({
                                                                ...sprintForm,
                                                                attempt3: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Attempt 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2659,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: sprintForm.notes,
                                                        onChange: (e)=>setSprintForm({
                                                                ...sprintForm,
                                                                notes: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2666,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2635,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addSprint,
                                                className: "inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2679,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Add Sprint"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2675,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2616,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Duration (minutes)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2685,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: workoutForm.duration,
                                                onChange: (e)=>setWorkoutForm({
                                                        ...workoutForm,
                                                        duration: e.target.value
                                                    }),
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "e.g., 60"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2686,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2684,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Coach Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2696,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: workoutForm.coachNotes,
                                                onChange: (e)=>setWorkoutForm({
                                                        ...workoutForm,
                                                        coachNotes: e.target.value
                                                    }),
                                                rows: 3,
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Form observations, focus next session, PRs hit..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2697,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2695,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2707,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: workoutForm.notes,
                                                onChange: (e)=>setWorkoutForm({
                                                        ...workoutForm,
                                                        notes: e.target.value
                                                    }),
                                                rows: 3,
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Any additional notes..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2708,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2706,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2400,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: isEditingWorkout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: deleteCurrentWorkout,
                                            className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 inline-flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 2725,
                                                    columnNumber: 23
                                                }, this),
                                                "Delete Session"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2721,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2719,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: closeWorkoutModal,
                                                className: "px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2731,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: saveWorkout,
                                                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                                children: isEditingWorkout ? 'Save Changes' : 'Save Session'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2737,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2730,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2718,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2389,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 2388,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 2387,
                columnNumber: 9
            }, this),
            showTemplateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white",
                                        children: "Create Template"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2756,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowTemplateModal(false),
                                        className: "text-gray-400 hover:text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2761,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2757,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2755,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Template Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2767,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: templateForm.name,
                                                onChange: (e)=>setTemplateForm({
                                                        ...templateForm,
                                                        name: e.target.value
                                                    }),
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "e.g., Push Day Template"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2768,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2766,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2778,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: templateForm.description,
                                                onChange: (e)=>setTemplateForm({
                                                        ...templateForm,
                                                        description: e.target.value
                                                    }),
                                                rows: 2,
                                                className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Template description..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2779,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2777,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-200 mb-1",
                                                children: "Exercises"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2789,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: templateForm.exercises.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 p-2 bg-gray-800 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1",
                                                                children: exercise.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2793,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    exercise.sets,
                                                                    "×",
                                                                    exercise.reps
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2794,
                                                                columnNumber: 25
                                                            }, this),
                                                            exercise.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-300",
                                                                children: exercise.weight
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2795,
                                                                columnNumber: 45
                                                            }, this),
                                                            exercise.weightChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-medium ${parseInt(exercise.weightChange) > 0 ? 'text-green-600' : 'text-orange-400'}`,
                                                                children: [
                                                                    parseInt(exercise.weightChange) > 0 ? '+' : '',
                                                                    exercise.weightChange
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2796,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeExerciseFromTemplate(exercise.id),
                                                                className: "text-red-600 hover:text-red-800",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2801,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2797,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, exercise.id, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2792,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2790,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-5 gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: exerciseForm.name,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                name: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Exercise name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2808,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: exerciseForm.sets,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                sets: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Sets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2815,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: exerciseForm.reps,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                reps: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Reps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2822,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: exerciseForm.weight,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                weight: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2829,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: exerciseForm.weightChange,
                                                        onChange: (e)=>setExerciseForm({
                                                                ...exerciseForm,
                                                                weightChange: e.target.value
                                                            }),
                                                        className: "px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Weight change (+ or -)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2836,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2807,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addExerciseToTemplate,
                                                        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2850,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Add Exercise"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2846,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowExerciseLibrary(true),
                                                        className: "inline-flex items-center px-3 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                lineNumber: 2857,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Browse Library"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2853,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2845,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2788,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2765,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowTemplateModal(false),
                                        className: "px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2865,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: saveTemplate,
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                        children: "Save Template"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2871,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2864,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2754,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 2753,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 2752,
                columnNumber: 9
            }, this),
            showImportModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white",
                                        children: "Import Template"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2889,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowImportModal(false),
                                        className: "text-gray-400 hover:text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2894,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2890,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2888,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-200 mb-1",
                                            children: "JSON Template"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2900,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: importText,
                                            onChange: (e)=>setImportText(e.target.value),
                                            rows: 10,
                                            className: "w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm",
                                            placeholder: "Paste JSON template here..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2901,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 2899,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2898,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowImportModal(false),
                                        className: "px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2912,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: importWorkout,
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                        children: "Import"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2918,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2911,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2887,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 2886,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 2885,
                columnNumber: 9
            }, this),
            showExerciseLibrary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white",
                                        children: "Exercise Library"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2936,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowExerciseLibrary(false),
                                        className: "text-gray-400 hover:text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 2941,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2937,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2935,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-h-96 overflow-y-auto",
                                children: EXERCISE_DATABASE.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-white",
                                                        children: exercise.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2949,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>addExerciseFromLibrary(exercise),
                                                        className: "text-blue-600 hover:text-blue-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 2954,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2950,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2948,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300 mb-2",
                                                children: [
                                                    exercise.category,
                                                    " • ",
                                                    exercise.equipment
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2958,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300 mb-2",
                                                children: [
                                                    "Difficulty: ",
                                                    exercise.difficulty
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2962,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Muscle Groups:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                        lineNumber: 2967,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    exercise.muscleGroup
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2966,
                                                columnNumber: 21
                                            }, this),
                                            exercise.instructions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            className: "cursor-pointer text-blue-600 hover:text-blue-800",
                                                            children: "Instructions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 2973,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                            className: "mt-2 list-decimal list-inside space-y-1",
                                                            children: exercise.instructions.map((instruction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-200",
                                                                    children: instruction
                                                                }, index, false, {
                                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                                    lineNumber: 2976,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 2974,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 2972,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2971,
                                                columnNumber: 23
                                            }, this),
                                            exercise.videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: exercise.videoUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-sm text-blue-600 hover:text-blue-800 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                            lineNumber: 2991,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Watch Video"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                    lineNumber: 2985,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                                lineNumber: 2984,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, exercise.id, true, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 2947,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 2945,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 2934,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 2933,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 2932,
                columnNumber: 9
            }, this),
            showDifficultyModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-1/3 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white",
                                        children: "How hard was this workout?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 3010,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowDifficultyModal(false);
                                            setWorkoutToRate(null);
                                        },
                                        className: "text-gray-400 hover:text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 3018,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 3011,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 3009,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 mb-6",
                                children: "Rate the difficulty level of your workout on a scale of 1-10:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 3022,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-5 gap-2 mb-6",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10
                                ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (workoutToRate) {
                                                updateWorkoutWithDifficulty(workoutToRate, num);
                                                setShowDifficultyModal(false);
                                                setWorkoutToRate(null);
                                            }
                                        },
                                        className: "p-3 rounded-lg font-semibold text-white transition-all hover:scale-105 focus:outline-none",
                                        style: {
                                            backgroundColor: num <= 3 ? '#10b981' : num <= 6 ? '#f59e0b' : '#ef4444'
                                        },
                                        children: num
                                    }, num, false, {
                                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                        lineNumber: 3026,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 3024,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-300 p-3 bg-gray-800 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1-3:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 3046,
                                            columnNumber: 20
                                        }, this),
                                        " Easy • ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "4-6:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 3046,
                                            columnNumber: 49
                                        }, this),
                                        " Moderate • ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "7-10:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                            lineNumber: 3046,
                                            columnNumber: 82
                                        }, this),
                                        " Hard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 3046,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 3045,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3 mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowDifficultyModal(false);
                                        setWorkoutToRate(null);
                                    },
                                    className: "px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                    lineNumber: 3050,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                                lineNumber: 3049,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                        lineNumber: 3008,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                    lineNumber: 3007,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
                lineNumber: 3006,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx",
        lineNumber: 1672,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/ACM/Fitness App/FINALV1/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$components$2f$FitnessTracker$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ACM/Fitness App/FINALV1/app/components/FitnessTracker.jsx [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ACM$2f$Fitness__App$2f$FINALV1$2f$app$2f$components$2f$FitnessTracker$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/page.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/ACM/Fitness App/FINALV1/app/page.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ea44ce88._.js.map