(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
    typeof document === "object" ? document.currentScript : undefined,
    {},
    {"otherChunks":["static/chunks/node_modules_next_dist_compiled_next-devtools_index_82a36480.js","static/chunks/node_modules_next_dist_compiled_ca41998d._.js","static/chunks/node_modules_next_dist_shared_lib_3cbd5cc2._.js","static/chunks/node_modules_next_dist_client_becf32a6._.js","static/chunks/node_modules_next_dist_7c4b9b2a._.js","static/chunks/node_modules_next_error_8c8bf619.js","static/chunks/[next]_entry_page-loader_ts_8ccf5f86._.js","static/chunks/node_modules_react-dom_82bb97c6._.js","static/chunks/node_modules_f2979c3a._.js","static/chunks/[root-of-the-server]__95ff7225._.js"],"runtimeModuleIds":["[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js [client] (ecmascript)","[project]/node_modules/next/dist/client/next-dev-turbopack.js [client] (ecmascript)","[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/_error\" }"]}
]);
(() => {
if (!Array.isArray(globalThis.TURBOPACK)) {
    return;
}

const CHUNK_BASE_PATH = "/_next/";
const CHUNK_SUFFIX_PATH = "";
const RELATIVE_ROOT_PATH = "/ROOT";
const RUNTIME_PUBLIC_PATH = "/_next/";
/**
 * This file contains runtime types and functions that are shared between all
 * TurboPack ECMAScript runtimes.
 *
 * It will be prepended to the runtime code of each runtime.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-types.d.ts" />
const REEXPORTED_OBJECTS = Symbol('reexported objects');
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;
function defineProp(obj, name, options) {
    if (!hasOwnProperty.call(obj, name)) Object.defineProperty(obj, name, options);
}
function getOverwrittenModule(moduleCache, id) {
    let module = moduleCache[id];
    if (!module) {
        // This is invoked when a module is merged into another module, thus it wasn't invoked via
        // instantiateModule and the cache entry wasn't created yet.
        module = {
            exports: {},
            error: undefined,
            loaded: false,
            id,
            namespaceObject: undefined
        };
        moduleCache[id] = module;
    }
    return module;
}
/**
 * Adds the getters to the exports object.
 */ function esm(exports, getters) {
    defineProp(exports, '__esModule', {
        value: true
    });
    if (toStringTag) defineProp(exports, toStringTag, {
        value: 'Module'
    });
    for(const key in getters){
        const item = getters[key];
        if (Array.isArray(item)) {
            defineProp(exports, key, {
                get: item[0],
                set: item[1],
                enumerable: true
            });
        } else {
            defineProp(exports, key, {
                get: item,
                enumerable: true
            });
        }
    }
    Object.seal(exports);
}
/**
 * Makes the module an ESM with exports
 */ function esmExport(module, exports, moduleCache, getters, id) {
    if (id != null) {
        module = getOverwrittenModule(moduleCache, id);
        exports = module.exports;
    }
    module.namespaceObject = module.exports;
    esm(exports, getters);
}
function ensureDynamicExports(module, exports) {
    let reexportedObjects = module[REEXPORTED_OBJECTS];
    if (!reexportedObjects) {
        reexportedObjects = module[REEXPORTED_OBJECTS] = [];
        module.exports = module.namespaceObject = new Proxy(exports, {
            get (target, prop) {
                if (hasOwnProperty.call(target, prop) || prop === 'default' || prop === '__esModule') {
                    return Reflect.get(target, prop);
                }
                for (const obj of reexportedObjects){
                    const value = Reflect.get(obj, prop);
                    if (value !== undefined) return value;
                }
                return undefined;
            },
            ownKeys (target) {
                const keys = Reflect.ownKeys(target);
                for (const obj of reexportedObjects){
                    for (const key of Reflect.ownKeys(obj)){
                        if (key !== 'default' && !keys.includes(key)) keys.push(key);
                    }
                }
                return keys;
            }
        });
    }
}
/**
 * Dynamically exports properties from an object
 */ function dynamicExport(module, exports, moduleCache, object, id) {
    if (id != null) {
        module = getOverwrittenModule(moduleCache, id);
        exports = module.exports;
    }
    ensureDynamicExports(module, exports);
    if (typeof object === 'object' && object !== null) {
        module[REEXPORTED_OBJECTS].push(object);
    }
}
function exportValue(module, moduleCache, value, id) {
    if (id != null) {
        module = getOverwrittenModule(moduleCache, id);
    }
    module.exports = value;
}
function exportNamespace(module, moduleCache, namespace, id) {
    if (id != null) {
        module = getOverwrittenModule(moduleCache, id);
    }
    module.exports = module.namespaceObject = namespace;
}
function createGetter(obj, key) {
    return ()=>obj[key];
}
/**
 * @returns prototype of the object
 */ const getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
/** Prototypes that are not expanded for exports */ const LEAF_PROTOTYPES = [
    null,
    getProto({}),
    getProto([]),
    getProto(getProto)
];
/**
 * @param raw
 * @param ns
 * @param allowExportDefault
 *   * `false`: will have the raw module as default export
 *   * `true`: will have the default property as default export
 */ function interopEsm(raw, ns, allowExportDefault) {
    const getters = Object.create(null);
    for(let current = raw; (typeof current === 'object' || typeof current === 'function') && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
        for (const key of Object.getOwnPropertyNames(current)){
            getters[key] = createGetter(raw, key);
        }
    }
    // this is not really correct
    // we should set the `default` getter if the imported module is a `.cjs file`
    if (!(allowExportDefault && 'default' in getters)) {
        getters['default'] = ()=>raw;
    }
    esm(ns, getters);
    return ns;
}
function createNS(raw) {
    if (typeof raw === 'function') {
        return function(...args) {
            return raw.apply(this, args);
        };
    } else {
        return Object.create(null);
    }
}
function esmImport(sourceModule, id) {
    const module = getOrInstantiateModuleFromParent(id, sourceModule);
    if (module.error) throw module.error;
    // any ES module has to have `module.namespaceObject` defined.
    if (module.namespaceObject) return module.namespaceObject;
    // only ESM can be an async module, so we don't need to worry about exports being a promise here.
    const raw = module.exports;
    return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
}
// Add a simple runtime require so that environments without one can still pass
// `typeof require` CommonJS checks so that exports are correctly registered.
const runtimeRequire = // @ts-ignore
typeof require === 'function' ? require : function require1() {
    throw new Error('Unexpected use of runtime require');
};
function commonJsRequire(sourceModule, id) {
    const module = getOrInstantiateModuleFromParent(id, sourceModule);
    if (module.error) throw module.error;
    return module.exports;
}
/**
 * `require.context` and require/import expression runtime.
 */ function moduleContext(map) {
    function moduleContext(id) {
        if (hasOwnProperty.call(map, id)) {
            return map[id].module();
        }
        const e = new Error(`Cannot find module '${id}'`);
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    }
    moduleContext.keys = ()=>{
        return Object.keys(map);
    };
    moduleContext.resolve = (id)=>{
        if (hasOwnProperty.call(map, id)) {
            return map[id].id();
        }
        const e = new Error(`Cannot find module '${id}'`);
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    };
    moduleContext.import = async (id)=>{
        return await moduleContext(id);
    };
    return moduleContext;
}
/**
 * Returns the path of a chunk defined by its data.
 */ function getChunkPath(chunkData) {
    return typeof chunkData === 'string' ? chunkData : chunkData.path;
}
function isPromise(maybePromise) {
    return maybePromise != null && typeof maybePromise === 'object' && 'then' in maybePromise && typeof maybePromise.then === 'function';
}
function isAsyncModuleExt(obj) {
    return turbopackQueues in obj;
}
function createPromise() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        reject = rej;
        resolve = res;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
// everything below is adapted from webpack
// https://github.com/webpack/webpack/blob/6be4065ade1e252c1d8dcba4af0f43e32af1bdc1/lib/runtime/AsyncModuleRuntimeModule.js#L13
const turbopackQueues = Symbol('turbopack queues');
const turbopackExports = Symbol('turbopack exports');
const turbopackError = Symbol('turbopack error');
function resolveQueue(queue) {
    if (queue && queue.status !== 1) {
        queue.status = 1;
        queue.forEach((fn)=>fn.queueCount--);
        queue.forEach((fn)=>fn.queueCount-- ? fn.queueCount++ : fn());
    }
}
function wrapDeps(deps) {
    return deps.map((dep)=>{
        if (dep !== null && typeof dep === 'object') {
            if (isAsyncModuleExt(dep)) return dep;
            if (isPromise(dep)) {
                const queue = Object.assign([], {
                    status: 0
                });
                const obj = {
                    [turbopackExports]: {},
                    [turbopackQueues]: (fn)=>fn(queue)
                };
                dep.then((res)=>{
                    obj[turbopackExports] = res;
                    resolveQueue(queue);
                }, (err)=>{
                    obj[turbopackError] = err;
                    resolveQueue(queue);
                });
                return obj;
            }
        }
        return {
            [turbopackExports]: dep,
            [turbopackQueues]: ()=>{}
        };
    });
}
function asyncModule(module, body, hasAwait) {
    const queue = hasAwait ? Object.assign([], {
        status: -1
    }) : undefined;
    const depQueues = new Set();
    const { resolve, reject, promise: rawPromise } = createPromise();
    const promise = Object.assign(rawPromise, {
        [turbopackExports]: module.exports,
        [turbopackQueues]: (fn)=>{
            queue && fn(queue);
            depQueues.forEach(fn);
            promise['catch'](()=>{});
        }
    });
    const attributes = {
        get () {
            return promise;
        },
        set (v) {
            // Calling `esmExport` leads to this.
            if (v !== promise) {
                promise[turbopackExports] = v;
            }
        }
    };
    Object.defineProperty(module, 'exports', attributes);
    Object.defineProperty(module, 'namespaceObject', attributes);
    function handleAsyncDependencies(deps) {
        const currentDeps = wrapDeps(deps);
        const getResult = ()=>currentDeps.map((d)=>{
                if (d[turbopackError]) throw d[turbopackError];
                return d[turbopackExports];
            });
        const { promise, resolve } = createPromise();
        const fn = Object.assign(()=>resolve(getResult), {
            queueCount: 0
        });
        function fnQueue(q) {
            if (q !== queue && !depQueues.has(q)) {
                depQueues.add(q);
                if (q && q.status === 0) {
                    fn.queueCount++;
                    q.push(fn);
                }
            }
        }
        currentDeps.map((dep)=>dep[turbopackQueues](fnQueue));
        return fn.queueCount ? promise : getResult();
    }
    function asyncResult(err) {
        if (err) {
            reject(promise[turbopackError] = err);
        } else {
            resolve(promise[turbopackExports]);
        }
        resolveQueue(queue);
    }
    body(handleAsyncDependencies, asyncResult);
    if (queue && queue.status === -1) {
        queue.status = 0;
    }
}
/**
 * A pseudo "fake" URL object to resolve to its relative path.
 *
 * When UrlRewriteBehavior is set to relative, calls to the `new URL()` will construct url without base using this
 * runtime function to generate context-agnostic urls between different rendering context, i.e ssr / client to avoid
 * hydration mismatch.
 *
 * This is based on webpack's existing implementation:
 * https://github.com/webpack/webpack/blob/87660921808566ef3b8796f8df61bd79fc026108/lib/runtime/RelativeUrlRuntimeModule.js
 */ const relativeURL = function relativeURL(inputUrl) {
    const realUrl = new URL(inputUrl, 'x:/');
    const values = {};
    for(const key in realUrl)values[key] = realUrl[key];
    values.href = inputUrl;
    values.pathname = inputUrl.replace(/[?#].*/, '');
    values.origin = values.protocol = '';
    values.toString = values.toJSON = (..._args)=>inputUrl;
    for(const key in values)Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        value: values[key]
    });
};
relativeURL.prototype = URL.prototype;
/**
 * Utility function to ensure all variants of an enum are handled.
 */ function invariant(never, computeMessage) {
    throw new Error(`Invariant: ${computeMessage(never)}`);
}
/**
 * A stub function to make `require` available but non-functional in ESM.
 */ function requireStub(_moduleId) {
    throw new Error('dynamic usage of require is not supported');
}
/**
 * This file contains runtime types and functions that are shared between all
 * Turbopack *development* ECMAScript runtimes.
 *
 * It will be appended to the runtime code of each runtime right after the
 * shared runtime utils.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../base/globals.d.ts" />
/// <reference path="../../../shared/runtime-utils.ts" />
// Used in WebWorkers to tell the runtime about the chunk base path
var SourceType = /*#__PURE__*/ function(SourceType) {
    /**
   * The module was instantiated because it was included in an evaluated chunk's
   * runtime.
   */ SourceType[SourceType["Runtime"] = 0] = "Runtime";
    /**
   * The module was instantiated because a parent module imported it.
   */ SourceType[SourceType["Parent"] = 1] = "Parent";
    /**
   * The module was instantiated because it was included in a chunk's hot module
   * update.
   */ SourceType[SourceType["Update"] = 2] = "Update";
    return SourceType;
}(SourceType || {});
const moduleFactories = Object.create(null);
/**
 * Module IDs that are instantiated as part of the runtime of a chunk.
 */ const runtimeModules = new Set();
/**
 * Map from module ID to the chunks that contain this module.
 *
 * In HMR, we need to keep track of which modules are contained in which so
 * chunks. This is so we don't eagerly dispose of a module when it is removed
 * from chunk A, but still exists in chunk B.
 */ const moduleChunksMap = new Map();
/**
 * Map from a chunk path to all modules it contains.
 */ const chunkModulesMap = new Map();
/**
 * Chunk lists that contain a runtime. When these chunk lists receive an update
 * that can't be reconciled with the current state of the page, we need to
 * reload the runtime entirely.
 */ const runtimeChunkLists = new Set();
/**
 * Map from a chunk list to the chunk paths it contains.
 */ const chunkListChunksMap = new Map();
/**
 * Map from a chunk path to the chunk lists it belongs to.
 */ const chunkChunkListsMap = new Map();
const availableModules = new Map();
const availableModuleChunks = new Map();
async function loadChunk(source, chunkData) {
    if (typeof chunkData === 'string') {
        return loadChunkPath(source, chunkData);
    }
    const includedList = chunkData.included || [];
    const modulesPromises = includedList.map((included)=>{
        if (moduleFactories[included]) return true;
        return availableModules.get(included);
    });
    if (modulesPromises.length > 0 && modulesPromises.every((p)=>p)) {
        // When all included items are already loaded or loading, we can skip loading ourselves
        return Promise.all(modulesPromises);
    }
    const includedModuleChunksList = chunkData.moduleChunks || [];
    const moduleChunksPromises = includedModuleChunksList.map((included)=>{
        // TODO(alexkirsz) Do we need this check?
        // if (moduleFactories[included]) return true;
        return availableModuleChunks.get(included);
    }).filter((p)=>p);
    let promise;
    if (moduleChunksPromises.length > 0) {
        // Some module chunks are already loaded or loading.
        if (moduleChunksPromises.length === includedModuleChunksList.length) {
            // When all included module chunks are already loaded or loading, we can skip loading ourselves
            return Promise.all(moduleChunksPromises);
        }
        const moduleChunksToLoad = new Set();
        for (const moduleChunk of includedModuleChunksList){
            if (!availableModuleChunks.has(moduleChunk)) {
                moduleChunksToLoad.add(moduleChunk);
            }
        }
        for (const moduleChunkToLoad of moduleChunksToLoad){
            const promise = loadChunkPath(source, moduleChunkToLoad);
            availableModuleChunks.set(moduleChunkToLoad, promise);
            moduleChunksPromises.push(promise);
        }
        promise = Promise.all(moduleChunksPromises);
    } else {
        promise = loadChunkPath(source, chunkData.path);
        // Mark all included module chunks as loading if they are not already loaded or loading.
        for (const includedModuleChunk of includedModuleChunksList){
            if (!availableModuleChunks.has(includedModuleChunk)) {
                availableModuleChunks.set(includedModuleChunk, promise);
            }
        }
    }
    for (const included of includedList){
        if (!availableModules.has(included)) {
            // It might be better to race old and new promises, but it's rare that the new promise will be faster than a request started earlier.
            // In production it's even more rare, because the chunk optimization tries to deduplicate modules anyway.
            availableModules.set(included, promise);
        }
    }
    return promise;
}
async function loadChunkByUrl(source, chunkUrl) {
    try {
        await BACKEND.loadChunk(chunkUrl, source);
    } catch (error) {
        let loadReason;
        switch(source.type){
            case 0:
                loadReason = `as a runtime dependency of chunk ${source.chunkPath}`;
                break;
            case 1:
                loadReason = `from module ${source.parentId}`;
                break;
            case 2:
                loadReason = 'from an HMR update';
                break;
            default:
                invariant(source, (source)=>`Unknown source type: ${source?.type}`);
        }
        throw new Error(`Failed to load chunk ${chunkUrl} ${loadReason}${error ? `: ${error}` : ''}`, error ? {
            cause: error
        } : undefined);
    }
}
async function loadChunkPath(source, chunkPath) {
    const url = getChunkRelativeUrl(chunkPath);
    return loadChunkByUrl(source, url);
}
/**
 * Returns an absolute url to an asset.
 */ function createResolvePathFromModule(resolver) {
    return function resolvePathFromModule(moduleId) {
        const exported = resolver(moduleId);
        return exported?.default ?? exported;
    };
}
/**
 * no-op for browser
 * @param modulePath
 */ function resolveAbsolutePath(modulePath) {
    return `/ROOT/${modulePath ?? ''}`;
}
/**
 * Returns a blob URL for the worker.
 * @param chunks list of chunks to load
 */ function getWorkerBlobURL(chunks) {
    // It is important to reverse the array so when bootstrapping we can infer what chunk is being
    // evaluated by poping urls off of this array.  See `getPathFromScript`
    let bootstrap = `self.TURBOPACK_WORKER_LOCATION = ${JSON.stringify(location.origin)};
self.TURBOPACK_NEXT_CHUNK_URLS = ${JSON.stringify(chunks.reverse().map(getChunkRelativeUrl), null, 2)};
importScripts(...self.TURBOPACK_NEXT_CHUNK_URLS.map(c => self.TURBOPACK_WORKER_LOCATION + c).reverse());`;
    let blob = new Blob([
        bootstrap
    ], {
        type: 'text/javascript'
    });
    return URL.createObjectURL(blob);
}
/**
 * Adds a module to a chunk.
 */ function addModuleToChunk(moduleId, chunkPath) {
    let moduleChunks = moduleChunksMap.get(moduleId);
    if (!moduleChunks) {
        moduleChunks = new Set([
            chunkPath
        ]);
        moduleChunksMap.set(moduleId, moduleChunks);
    } else {
        moduleChunks.add(chunkPath);
    }
    let chunkModules = chunkModulesMap.get(chunkPath);
    if (!chunkModules) {
        chunkModules = new Set([
            moduleId
        ]);
        chunkModulesMap.set(chunkPath, chunkModules);
    } else {
        chunkModules.add(moduleId);
    }
}
/**
 * Returns the first chunk that included a module.
 * This is used by the Node.js backend, hence why it's marked as unused in this
 * file.
 */ function getFirstModuleChunk(moduleId) {
    const moduleChunkPaths = moduleChunksMap.get(moduleId);
    if (moduleChunkPaths == null) {
        return null;
    }
    return moduleChunkPaths.values().next().value;
}
/**
 * Instantiates a runtime module.
 */ function instantiateRuntimeModule(moduleId, chunkPath) {
    return instantiateModule(moduleId, {
        type: 0,
        chunkPath
    });
}
/**
 * Returns the URL relative to the origin where a chunk can be fetched from.
 */ function getChunkRelativeUrl(chunkPath) {
    return `${CHUNK_BASE_PATH}${chunkPath.split('/').map((p)=>encodeURIComponent(p)).join('/')}${CHUNK_SUFFIX_PATH}`;
}
function getPathFromScript(chunkScript) {
    if (typeof chunkScript === 'string') {
        return chunkScript;
    }
    const chunkUrl = typeof TURBOPACK_NEXT_CHUNK_URLS !== 'undefined' ? TURBOPACK_NEXT_CHUNK_URLS.pop() : chunkScript.getAttribute('src');
    const src = decodeURIComponent(chunkUrl.replace(/[?#].*$/, ''));
    const path = src.startsWith(CHUNK_BASE_PATH) ? src.slice(CHUNK_BASE_PATH.length) : src;
    return path;
}
/**
 * Marks a chunk list as a runtime chunk list. There can be more than one
 * runtime chunk list. For instance, integration tests can have multiple chunk
 * groups loaded at runtime, each with its own chunk list.
 */ function markChunkListAsRuntime(chunkListPath) {
    runtimeChunkLists.add(chunkListPath);
}
function registerChunk([chunkScript, chunkModules, runtimeParams]) {
    const chunkPath = getPathFromScript(chunkScript);
    for (const [moduleId, moduleFactory] of Object.entries(chunkModules)){
        if (!moduleFactories[moduleId]) {
            if (Array.isArray(moduleFactory)) {
                let [moduleFactoryFn, otherIds] = moduleFactory;
                moduleFactories[moduleId] = moduleFactoryFn;
                for (const otherModuleId of otherIds){
                    moduleFactories[otherModuleId] = moduleFactoryFn;
                }
            } else {
                moduleFactories[moduleId] = moduleFactory;
            }
        }
        addModuleToChunk(moduleId, chunkPath);
    }
    return BACKEND.registerChunk(chunkPath, runtimeParams);
}
const regexJsUrl = /\.js(?:\?[^#]*)?(?:#.*)?$/;
/**
 * Checks if a given path/URL ends with .js, optionally followed by ?query or #fragment.
 */ function isJs(chunkUrlOrPath) {
    return regexJsUrl.test(chunkUrlOrPath);
}
const regexCssUrl = /\.css(?:\?[^#]*)?(?:#.*)?$/;
/**
 * Checks if a given path/URL ends with .css, optionally followed by ?query or #fragment.
 */ function isCss(chunkUrl) {
    return regexCssUrl.test(chunkUrl);
}
/// <reference path="./dev-globals.d.ts" />
/// <reference path="./dev-protocol.d.ts" />
/// <reference path="./dev-extensions.ts" />
/**
 * This file contains runtime types and functions that are shared between all
 * Turbopack *development* ECMAScript runtimes.
 *
 * It will be appended to the runtime code of each runtime right after the
 * shared runtime utils.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ const devModuleCache = Object.create(null);
class UpdateApplyError extends Error {
    name = 'UpdateApplyError';
    dependencyChain;
    constructor(message, dependencyChain){
        super(message);
        this.dependencyChain = dependencyChain;
    }
}
/**
 * Maps module IDs to persisted data between executions of their hot module
 * implementation (`hot.data`).
 */ const moduleHotData = new Map();
/**
 * Maps module instances to their hot module state.
 */ const moduleHotState = new Map();
/**
 * Modules that call `module.hot.invalidate()` (while being updated).
 */ const queuedInvalidatedModules = new Set();
/**
 * Gets or instantiates a runtime module.
 */ // @ts-ignore
function getOrInstantiateRuntimeModule(moduleId, chunkPath) {
    const module = devModuleCache[moduleId];
    if (module) {
        if (module.error) {
            throw module.error;
        }
        return module;
    }
    // @ts-ignore
    return instantiateModule(moduleId, {
        type: SourceType.Runtime,
        chunkPath
    });
}
/**
 * Retrieves a module from the cache, or instantiate it if it is not cached.
 */ // @ts-ignore Defined in `runtime-utils.ts`
const getOrInstantiateModuleFromParent = (id, sourceModule)=>{
    if (!sourceModule.hot.active) {
        console.warn(`Unexpected import of module ${id} from module ${sourceModule.id}, which was deleted by an HMR update`);
    }
    const module = devModuleCache[id];
    if (sourceModule.children.indexOf(id) === -1) {
        sourceModule.children.push(id);
    }
    if (module) {
        if (module.parents.indexOf(sourceModule.id) === -1) {
            module.parents.push(sourceModule.id);
        }
        return module;
    }
    return instantiateModule(id, {
        type: SourceType.Parent,
        parentId: sourceModule.id
    });
};
function instantiateModule(moduleId, source) {
    // We are in development, this is always a string.
    let id = moduleId;
    const moduleFactory = moduleFactories[id];
    if (typeof moduleFactory !== 'function') {
        // This can happen if modules incorrectly handle HMR disposes/updates,
        // e.g. when they keep a `setTimeout` around which still executes old code
        // and contains e.g. a `require("something")` call.
        let instantiationReason;
        switch(source.type){
            case SourceType.Runtime:
                instantiationReason = `as a runtime entry of chunk ${source.chunkPath}`;
                break;
            case SourceType.Parent:
                instantiationReason = `because it was required from module ${source.parentId}`;
                break;
            case SourceType.Update:
                instantiationReason = 'because of an HMR update';
                break;
            default:
                invariant(source, (source)=>`Unknown source type: ${source?.type}`);
        }
        throw new Error(`Module ${id} was instantiated ${instantiationReason}, but the module factory is not available. It might have been deleted in an HMR update.`);
    }
    const hotData = moduleHotData.get(id);
    const { hot, hotState } = createModuleHot(id, hotData);
    let parents;
    switch(source.type){
        case SourceType.Runtime:
            runtimeModules.add(id);
            parents = [];
            break;
        case SourceType.Parent:
            // No need to add this module as a child of the parent module here, this
            // has already been taken care of in `getOrInstantiateModuleFromParent`.
            parents = [
                source.parentId
            ];
            break;
        case SourceType.Update:
            parents = source.parents || [];
            break;
        default:
            invariant(source, (source)=>`Unknown source type: ${source?.type}`);
    }
    const module = {
        exports: {},
        error: undefined,
        loaded: false,
        id: id,
        parents,
        children: [],
        namespaceObject: undefined,
        hot
    };
    devModuleCache[id] = module;
    moduleHotState.set(module, hotState);
    // NOTE(alexkirsz) This can fail when the module encounters a runtime error.
    try {
        const sourceInfo = {
            type: SourceType.Parent,
            parentId: id
        };
        runModuleExecutionHooks(module, (refresh)=>{
            const r = commonJsRequire.bind(null, module);
            moduleFactory(augmentContext({
                a: asyncModule.bind(null, module),
                e: module.exports,
                r: commonJsRequire.bind(null, module),
                t: runtimeRequire,
                f: moduleContext,
                i: esmImport.bind(null, module),
                s: esmExport.bind(null, module, module.exports, devModuleCache),
                j: dynamicExport.bind(null, module, module.exports, devModuleCache),
                v: exportValue.bind(null, module, devModuleCache),
                n: exportNamespace.bind(null, module, devModuleCache),
                m: module,
                c: devModuleCache,
                M: moduleFactories,
                l: loadChunk.bind(null, sourceInfo),
                L: loadChunkByUrl.bind(null, sourceInfo),
                w: loadWebAssembly.bind(null, sourceInfo),
                u: loadWebAssemblyModule.bind(null, sourceInfo),
                P: resolveAbsolutePath,
                U: relativeURL,
                k: refresh,
                R: createResolvePathFromModule(r),
                b: getWorkerBlobURL,
                z: requireStub
            }));
        });
    } catch (error) {
        module.error = error;
        throw error;
    }
    module.loaded = true;
    if (module.namespaceObject && module.exports !== module.namespaceObject) {
        // in case of a circular dependency: cjs1 -> esm2 -> cjs1
        interopEsm(module.exports, module.namespaceObject);
    }
    return module;
}
/**
 * NOTE(alexkirsz) Webpack has a "module execution" interception hook that
 * Next.js' React Refresh runtime hooks into to add module context to the
 * refresh registry.
 */ function runModuleExecutionHooks(module, executeModule) {
    if (typeof globalThis.$RefreshInterceptModuleExecution$ === 'function') {
        const cleanupReactRefreshIntercept = globalThis.$RefreshInterceptModuleExecution$(module.id);
        try {
            executeModule({
                register: globalThis.$RefreshReg$,
                signature: globalThis.$RefreshSig$,
                registerExports: registerExportsAndSetupBoundaryForReactRefresh
            });
        } finally{
            // Always cleanup the intercept, even if module execution failed.
            cleanupReactRefreshIntercept();
        }
    } else {
        // If the react refresh hooks are not installed we need to bind dummy functions.
        // This is expected when running in a Web Worker.  It is also common in some of
        // our test environments.
        executeModule({
            register: (_type, _id)=>{},
            signature: ()=>(_type)=>{},
            registerExports: (_module, _helpers)=>{}
        });
    }
}
/**
 * This is adapted from https://github.com/vercel/next.js/blob/3466862d9dc9c8bb3131712134d38757b918d1c0/packages/react-refresh-utils/internal/ReactRefreshModule.runtime.ts
 */ function registerExportsAndSetupBoundaryForReactRefresh(module, helpers) {
    const currentExports = module.exports;
    const prevExports = module.hot.data.prevExports ?? null;
    helpers.registerExportsForReactRefresh(currentExports, module.id);
    // A module can be accepted automatically based on its exports, e.g. when
    // it is a Refresh Boundary.
    if (helpers.isReactRefreshBoundary(currentExports)) {
        // Save the previous exports on update, so we can compare the boundary
        // signatures.
        module.hot.dispose((data)=>{
            data.prevExports = currentExports;
        });
        // Unconditionally accept an update to this module, we'll check if it's
        // still a Refresh Boundary later.
        module.hot.accept();
        // This field is set when the previous version of this module was a
        // Refresh Boundary, letting us know we need to check for invalidation or
        // enqueue an update.
        if (prevExports !== null) {
            // A boundary can become ineligible if its exports are incompatible
            // with the previous exports.
            //
            // For example, if you add/remove/change exports, we'll want to
            // re-execute the importing modules, and force those components to
            // re-render. Similarly, if you convert a class component to a
            // function, we want to invalidate the boundary.
            if (helpers.shouldInvalidateReactRefreshBoundary(helpers.getRefreshBoundarySignature(prevExports), helpers.getRefreshBoundarySignature(currentExports))) {
                module.hot.invalidate();
            } else {
                helpers.scheduleUpdate();
            }
        }
    } else {
        // Since we just executed the code for the module, it's possible that the
        // new exports made it ineligible for being a boundary.
        // We only care about the case when we were _previously_ a boundary,
        // because we already accepted this update (accidental side effect).
        const isNoLongerABoundary = prevExports !== null;
        if (isNoLongerABoundary) {
            module.hot.invalidate();
        }
    }
}
function formatDependencyChain(dependencyChain) {
    return `Dependency chain: ${dependencyChain.join(' -> ')}`;
}
function computeOutdatedModules(added, modified) {
    const newModuleFactories = new Map();
    for (const [moduleId, entry] of added){
        if (entry != null) {
            newModuleFactories.set(moduleId, _eval(entry));
        }
    }
    const outdatedModules = computedInvalidatedModules(modified.keys());
    for (const [moduleId, entry] of modified){
        newModuleFactories.set(moduleId, _eval(entry));
    }
    return {
        outdatedModules,
        newModuleFactories
    };
}
function computedInvalidatedModules(invalidated) {
    const outdatedModules = new Set();
    for (const moduleId of invalidated){
        const effect = getAffectedModuleEffects(moduleId);
        switch(effect.type){
            case 'unaccepted':
                throw new UpdateApplyError(`cannot apply update: unaccepted module. ${formatDependencyChain(effect.dependencyChain)}.`, effect.dependencyChain);
            case 'self-declined':
                throw new UpdateApplyError(`cannot apply update: self-declined module. ${formatDependencyChain(effect.dependencyChain)}.`, effect.dependencyChain);
            case 'accepted':
                for (const outdatedModuleId of effect.outdatedModules){
                    outdatedModules.add(outdatedModuleId);
                }
                break;
            // TODO(alexkirsz) Dependencies: handle dependencies effects.
            default:
                invariant(effect, (effect)=>`Unknown effect type: ${effect?.type}`);
        }
    }
    return outdatedModules;
}
function computeOutdatedSelfAcceptedModules(outdatedModules) {
    const outdatedSelfAcceptedModules = [];
    for (const moduleId of outdatedModules){
        const module = devModuleCache[moduleId];
        const hotState = moduleHotState.get(module);
        if (module && hotState.selfAccepted && !hotState.selfInvalidated) {
            outdatedSelfAcceptedModules.push({
                moduleId,
                errorHandler: hotState.selfAccepted
            });
        }
    }
    return outdatedSelfAcceptedModules;
}
/**
 * Adds, deletes, and moves modules between chunks. This must happen before the
 * dispose phase as it needs to know which modules were removed from all chunks,
 * which we can only compute *after* taking care of added and moved modules.
 */ function updateChunksPhase(chunksAddedModules, chunksDeletedModules) {
    for (const [chunkPath, addedModuleIds] of chunksAddedModules){
        for (const moduleId of addedModuleIds){
            addModuleToChunk(moduleId, chunkPath);
        }
    }
    const disposedModules = new Set();
    for (const [chunkPath, addedModuleIds] of chunksDeletedModules){
        for (const moduleId of addedModuleIds){
            if (removeModuleFromChunk(moduleId, chunkPath)) {
                disposedModules.add(moduleId);
            }
        }
    }
    return {
        disposedModules
    };
}
function disposePhase(outdatedModules, disposedModules) {
    for (const moduleId of outdatedModules){
        disposeModule(moduleId, 'replace');
    }
    for (const moduleId of disposedModules){
        disposeModule(moduleId, 'clear');
    }
    // Removing modules from the module cache is a separate step.
    // We also want to keep track of previous parents of the outdated modules.
    const outdatedModuleParents = new Map();
    for (const moduleId of outdatedModules){
        const oldModule = devModuleCache[moduleId];
        outdatedModuleParents.set(moduleId, oldModule?.parents);
        delete devModuleCache[moduleId];
    }
    // TODO(alexkirsz) Dependencies: remove outdated dependency from module
    // children.
    return {
        outdatedModuleParents
    };
}
/**
 * Disposes of an instance of a module.
 *
 * Returns the persistent hot data that should be kept for the next module
 * instance.
 *
 * NOTE: mode = "replace" will not remove modules from the devModuleCache
 * This must be done in a separate step afterwards.
 * This is important because all modules need to be disposed to update the
 * parent/child relationships before they are actually removed from the devModuleCache.
 * If this was done in this method, the following disposeModule calls won't find
 * the module from the module id in the cache.
 */ function disposeModule(moduleId, mode) {
    const module = devModuleCache[moduleId];
    if (!module) {
        return;
    }
    const hotState = moduleHotState.get(module);
    const data = {};
    // Run the `hot.dispose` handler, if any, passing in the persistent
    // `hot.data` object.
    for (const disposeHandler of hotState.disposeHandlers){
        disposeHandler(data);
    }
    // This used to warn in `getOrInstantiateModuleFromParent` when a disposed
    // module is still importing other modules.
    module.hot.active = false;
    moduleHotState.delete(module);
    // TODO(alexkirsz) Dependencies: delete the module from outdated deps.
    // Remove the disposed module from its children's parent list.
    // It will be added back once the module re-instantiates and imports its
    // children again.
    for (const childId of module.children){
        const child = devModuleCache[childId];
        if (!child) {
            continue;
        }
        const idx = child.parents.indexOf(module.id);
        if (idx >= 0) {
            child.parents.splice(idx, 1);
        }
    }
    switch(mode){
        case 'clear':
            delete devModuleCache[module.id];
            moduleHotData.delete(module.id);
            break;
        case 'replace':
            moduleHotData.set(module.id, data);
            break;
        default:
            invariant(mode, (mode)=>`invalid mode: ${mode}`);
    }
}
function applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, reportError) {
    // Update module factories.
    for (const [moduleId, factory] of newModuleFactories.entries()){
        moduleFactories[moduleId] = factory;
    }
    // TODO(alexkirsz) Run new runtime entries here.
    // TODO(alexkirsz) Dependencies: call accept handlers for outdated deps.
    // Re-instantiate all outdated self-accepted modules.
    for (const { moduleId, errorHandler } of outdatedSelfAcceptedModules){
        try {
            instantiateModule(moduleId, {
                type: SourceType.Update,
                parents: outdatedModuleParents.get(moduleId)
            });
        } catch (err) {
            if (typeof errorHandler === 'function') {
                try {
                    errorHandler(err, {
                        moduleId,
                        module: devModuleCache[moduleId]
                    });
                } catch (err2) {
                    reportError(err2);
                    reportError(err);
                }
            } else {
                reportError(err);
            }
        }
    }
}
function applyUpdate(update) {
    switch(update.type){
        case 'ChunkListUpdate':
            applyChunkListUpdate(update);
            break;
        default:
            invariant(update, (update)=>`Unknown update type: ${update.type}`);
    }
}
function applyChunkListUpdate(update) {
    if (update.merged != null) {
        for (const merged of update.merged){
            switch(merged.type){
                case 'EcmascriptMergedUpdate':
                    applyEcmascriptMergedUpdate(merged);
                    break;
                default:
                    invariant(merged, (merged)=>`Unknown merged type: ${merged.type}`);
            }
        }
    }
    if (update.chunks != null) {
        for (const [chunkPath, chunkUpdate] of Object.entries(update.chunks)){
            const chunkUrl = getChunkRelativeUrl(chunkPath);
            switch(chunkUpdate.type){
                case 'added':
                    BACKEND.loadChunk(chunkUrl, {
                        type: SourceType.Update
                    });
                    break;
                case 'total':
                    DEV_BACKEND.reloadChunk?.(chunkUrl);
                    break;
                case 'deleted':
                    DEV_BACKEND.unloadChunk?.(chunkUrl);
                    break;
                case 'partial':
                    invariant(chunkUpdate.instruction, (instruction)=>`Unknown partial instruction: ${JSON.stringify(instruction)}.`);
                    break;
                default:
                    invariant(chunkUpdate, (chunkUpdate)=>`Unknown chunk update type: ${chunkUpdate.type}`);
            }
        }
    }
}
function applyEcmascriptMergedUpdate(update) {
    const { entries = {}, chunks = {} } = update;
    const { added, modified, chunksAdded, chunksDeleted } = computeChangedModules(entries, chunks);
    const { outdatedModules, newModuleFactories } = computeOutdatedModules(added, modified);
    const { disposedModules } = updateChunksPhase(chunksAdded, chunksDeleted);
    applyInternal(outdatedModules, disposedModules, newModuleFactories);
}
function applyInvalidatedModules(outdatedModules) {
    if (queuedInvalidatedModules.size > 0) {
        computedInvalidatedModules(queuedInvalidatedModules).forEach((moduleId)=>{
            outdatedModules.add(moduleId);
        });
        queuedInvalidatedModules.clear();
    }
    return outdatedModules;
}
function applyInternal(outdatedModules, disposedModules, newModuleFactories) {
    outdatedModules = applyInvalidatedModules(outdatedModules);
    const outdatedSelfAcceptedModules = computeOutdatedSelfAcceptedModules(outdatedModules);
    const { outdatedModuleParents } = disposePhase(outdatedModules, disposedModules);
    // we want to continue on error and only throw the error after we tried applying all updates
    let error;
    function reportError(err) {
        if (!error) error = err;
    }
    applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, reportError);
    if (error) {
        throw error;
    }
    if (queuedInvalidatedModules.size > 0) {
        applyInternal(new Set(), [], new Map());
    }
}
function computeChangedModules(entries, updates) {
    const chunksAdded = new Map();
    const chunksDeleted = new Map();
    const added = new Map();
    const modified = new Map();
    const deleted = new Set();
    for (const [chunkPath, mergedChunkUpdate] of Object.entries(updates)){
        switch(mergedChunkUpdate.type){
            case 'added':
                {
                    const updateAdded = new Set(mergedChunkUpdate.modules);
                    for (const moduleId of updateAdded){
                        added.set(moduleId, entries[moduleId]);
                    }
                    chunksAdded.set(chunkPath, updateAdded);
                    break;
                }
            case 'deleted':
                {
                    // We could also use `mergedChunkUpdate.modules` here.
                    const updateDeleted = new Set(chunkModulesMap.get(chunkPath));
                    for (const moduleId of updateDeleted){
                        deleted.add(moduleId);
                    }
                    chunksDeleted.set(chunkPath, updateDeleted);
                    break;
                }
            case 'partial':
                {
                    const updateAdded = new Set(mergedChunkUpdate.added);
                    const updateDeleted = new Set(mergedChunkUpdate.deleted);
                    for (const moduleId of updateAdded){
                        added.set(moduleId, entries[moduleId]);
                    }
                    for (const moduleId of updateDeleted){
                        deleted.add(moduleId);
                    }
                    chunksAdded.set(chunkPath, updateAdded);
                    chunksDeleted.set(chunkPath, updateDeleted);
                    break;
                }
            default:
                invariant(mergedChunkUpdate, (mergedChunkUpdate)=>`Unknown merged chunk update type: ${mergedChunkUpdate.type}`);
        }
    }
    // If a module was added from one chunk and deleted from another in the same update,
    // consider it to be modified, as it means the module was moved from one chunk to another
    // AND has new code in a single update.
    for (const moduleId of added.keys()){
        if (deleted.has(moduleId)) {
            added.delete(moduleId);
            deleted.delete(moduleId);
        }
    }
    for (const [moduleId, entry] of Object.entries(entries)){
        // Modules that haven't been added to any chunk but have new code are considered
        // to be modified.
        // This needs to be under the previous loop, as we need it to get rid of modules
        // that were added and deleted in the same update.
        if (!added.has(moduleId)) {
            modified.set(moduleId, entry);
        }
    }
    return {
        added,
        deleted,
        modified,
        chunksAdded,
        chunksDeleted
    };
}
function getAffectedModuleEffects(moduleId) {
    const outdatedModules = new Set();
    const queue = [
        {
            moduleId,
            dependencyChain: []
        }
    ];
    let nextItem;
    while(nextItem = queue.shift()){
        const { moduleId, dependencyChain } = nextItem;
        if (moduleId != null) {
            if (outdatedModules.has(moduleId)) {
                continue;
            }
            outdatedModules.add(moduleId);
        }
        // We've arrived at the runtime of the chunk, which means that nothing
        // else above can accept this update.
        if (moduleId === undefined) {
            return {
                type: 'unaccepted',
                dependencyChain
            };
        }
        const module = devModuleCache[moduleId];
        const hotState = moduleHotState.get(module);
        if (// The module is not in the cache. Since this is a "modified" update,
        // it means that the module was never instantiated before.
        !module || hotState.selfAccepted && !hotState.selfInvalidated) {
            continue;
        }
        if (hotState.selfDeclined) {
            return {
                type: 'self-declined',
                dependencyChain,
                moduleId
            };
        }
        if (runtimeModules.has(moduleId)) {
            queue.push({
                moduleId: undefined,
                dependencyChain: [
                    ...dependencyChain,
                    moduleId
                ]
            });
            continue;
        }
        for (const parentId of module.parents){
            const parent = devModuleCache[parentId];
            if (!parent) {
                continue;
            }
            // TODO(alexkirsz) Dependencies: check accepted and declined
            // dependencies here.
            queue.push({
                moduleId: parentId,
                dependencyChain: [
                    ...dependencyChain,
                    moduleId
                ]
            });
        }
    }
    return {
        type: 'accepted',
        moduleId,
        outdatedModules
    };
}
function handleApply(chunkListPath, update) {
    switch(update.type){
        case 'partial':
            {
                // This indicates that the update is can be applied to the current state of the application.
                applyUpdate(update.instruction);
                break;
            }
        case 'restart':
            {
                // This indicates that there is no way to apply the update to the
                // current state of the application, and that the application must be
                // restarted.
                DEV_BACKEND.restart();
                break;
            }
        case 'notFound':
            {
                // This indicates that the chunk list no longer exists: either the dynamic import which created it was removed,
                // or the page itself was deleted.
                // If it is a dynamic import, we simply discard all modules that the chunk has exclusive access to.
                // If it is a runtime chunk list, we restart the application.
                if (runtimeChunkLists.has(chunkListPath)) {
                    DEV_BACKEND.restart();
                } else {
                    disposeChunkList(chunkListPath);
                }
                break;
            }
        default:
            throw new Error(`Unknown update type: ${update.type}`);
    }
}
function createModuleHot(moduleId, hotData) {
    const hotState = {
        selfAccepted: false,
        selfDeclined: false,
        selfInvalidated: false,
        disposeHandlers: []
    };
    const hot = {
        // TODO(alexkirsz) This is not defined in the HMR API. It was used to
        // decide whether to warn whenever an HMR-disposed module required other
        // modules. We might want to remove it.
        active: true,
        data: hotData ?? {},
        // TODO(alexkirsz) Support full (dep, callback, errorHandler) form.
        accept: (modules, _callback, _errorHandler)=>{
            if (modules === undefined) {
                hotState.selfAccepted = true;
            } else if (typeof modules === 'function') {
                hotState.selfAccepted = modules;
            } else {
                throw new Error('unsupported `accept` signature');
            }
        },
        decline: (dep)=>{
            if (dep === undefined) {
                hotState.selfDeclined = true;
            } else {
                throw new Error('unsupported `decline` signature');
            }
        },
        dispose: (callback)=>{
            hotState.disposeHandlers.push(callback);
        },
        addDisposeHandler: (callback)=>{
            hotState.disposeHandlers.push(callback);
        },
        removeDisposeHandler: (callback)=>{
            const idx = hotState.disposeHandlers.indexOf(callback);
            if (idx >= 0) {
                hotState.disposeHandlers.splice(idx, 1);
            }
        },
        invalidate: ()=>{
            hotState.selfInvalidated = true;
            queuedInvalidatedModules.add(moduleId);
        },
        // NOTE(alexkirsz) This is part of the management API, which we don't
        // implement, but the Next.js React Refresh runtime uses this to decide
        // whether to schedule an update.
        status: ()=>'idle',
        // NOTE(alexkirsz) Since we always return "idle" for now, these are no-ops.
        addStatusHandler: (_handler)=>{},
        removeStatusHandler: (_handler)=>{},
        // NOTE(jridgewell) Check returns the list of updated modules, but we don't
        // want the webpack code paths to ever update (the turbopack paths handle
        // this already).
        check: ()=>Promise.resolve(null)
    };
    return {
        hot,
        hotState
    };
}
/**
 * Removes a module from a chunk.
 * Returns `true` if there are no remaining chunks including this module.
 */ function removeModuleFromChunk(moduleId, chunkPath) {
    const moduleChunks = moduleChunksMap.get(moduleId);
    moduleChunks.delete(chunkPath);
    const chunkModules = chunkModulesMap.get(chunkPath);
    chunkModules.delete(moduleId);
    const noRemainingModules = chunkModules.size === 0;
    if (noRemainingModules) {
        chunkModulesMap.delete(chunkPath);
    }
    const noRemainingChunks = moduleChunks.size === 0;
    if (noRemainingChunks) {
        moduleChunksMap.delete(moduleId);
    }
    return noRemainingChunks;
}
/**
 * Disposes of a chunk list and its corresponding exclusive chunks.
 */ function disposeChunkList(chunkListPath) {
    const chunkPaths = chunkListChunksMap.get(chunkListPath);
    if (chunkPaths == null) {
        return false;
    }
    chunkListChunksMap.delete(chunkListPath);
    for (const chunkPath of chunkPaths){
        const chunkChunkLists = chunkChunkListsMap.get(chunkPath);
        chunkChunkLists.delete(chunkListPath);
        if (chunkChunkLists.size === 0) {
            chunkChunkListsMap.delete(chunkPath);
            disposeChunk(chunkPath);
        }
    }
    // We must also dispose of the chunk list's chunk itself to ensure it may
    // be reloaded properly in the future.
    const chunkListUrl = getChunkRelativeUrl(chunkListPath);
    DEV_BACKEND.unloadChunk?.(chunkListUrl);
    return true;
}
/**
 * Disposes of a chunk and its corresponding exclusive modules.
 *
 * @returns Whether the chunk was disposed of.
 */ function disposeChunk(chunkPath) {
    const chunkUrl = getChunkRelativeUrl(chunkPath);
    // This should happen whether the chunk has any modules in it or not.
    // For instance, CSS chunks have no modules in them, but they still need to be unloaded.
    DEV_BACKEND.unloadChunk?.(chunkUrl);
    const chunkModules = chunkModulesMap.get(chunkPath);
    if (chunkModules == null) {
        return false;
    }
    chunkModules.delete(chunkPath);
    for (const moduleId of chunkModules){
        const moduleChunks = moduleChunksMap.get(moduleId);
        moduleChunks.delete(chunkPath);
        const noRemainingChunks = moduleChunks.size === 0;
        if (noRemainingChunks) {
            moduleChunksMap.delete(moduleId);
            disposeModule(moduleId, 'clear');
            availableModules.delete(moduleId);
        }
    }
    return true;
}
/**
 * Subscribes to chunk list updates from the update server and applies them.
 */ function registerChunkList(chunkList) {
    const chunkListScript = chunkList.script;
    const chunkListPath = getPathFromScript(chunkListScript);
    // The "chunk" is also registered to finish the loading in the backend
    BACKEND.registerChunk(chunkListPath);
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS.push([
        chunkListPath,
        handleApply.bind(null, chunkListPath)
    ]);
    // Adding chunks to chunk lists and vice versa.
    const chunkPaths = new Set(chunkList.chunks.map(getChunkPath));
    chunkListChunksMap.set(chunkListPath, chunkPaths);
    for (const chunkPath of chunkPaths){
        let chunkChunkLists = chunkChunkListsMap.get(chunkPath);
        if (!chunkChunkLists) {
            chunkChunkLists = new Set([
                chunkListPath
            ]);
            chunkChunkListsMap.set(chunkPath, chunkChunkLists);
        } else {
            chunkChunkLists.add(chunkListPath);
        }
    }
    if (chunkList.source === 'entry') {
        markChunkListAsRuntime(chunkListPath);
    }
}
globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS ??= [];
/**
 * This file contains the runtime code specific to the Turbopack development
 * ECMAScript DOM runtime.
 *
 * It will be appended to the base development runtime code.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../../../browser/runtime/base/runtime-base.ts" />
/// <reference path="../../../shared/runtime-types.d.ts" />
let BACKEND;
function augmentContext(context) {
    return context;
}
function fetchWebAssembly(wasmChunkPath) {
    return fetch(getChunkRelativeUrl(wasmChunkPath));
}
async function loadWebAssembly(_source, wasmChunkPath, _edgeModule, importsObj) {
    const req = fetchWebAssembly(wasmChunkPath);
    const { instance } = await WebAssembly.instantiateStreaming(req, importsObj);
    return instance.exports;
}
async function loadWebAssemblyModule(_source, wasmChunkPath, _edgeModule) {
    const req = fetchWebAssembly(wasmChunkPath);
    return await WebAssembly.compileStreaming(req);
}
/**
 * Maps chunk paths to the corresponding resolver.
 */ const chunkResolvers = new Map();
(()=>{
    BACKEND = {
        async registerChunk (chunkPath, params) {
            const chunkUrl = getChunkRelativeUrl(chunkPath);
            const resolver = getOrCreateResolver(chunkUrl);
            resolver.resolve();
            if (params == null) {
                return;
            }
            for (const otherChunkData of params.otherChunks){
                const otherChunkPath = getChunkPath(otherChunkData);
                const otherChunkUrl = getChunkRelativeUrl(otherChunkPath);
                // Chunk might have started loading, so we want to avoid triggering another load.
                getOrCreateResolver(otherChunkUrl);
            }
            // This waits for chunks to be loaded, but also marks included items as available.
            await Promise.all(params.otherChunks.map((otherChunkData)=>loadChunk({
                    type: SourceType.Runtime,
                    chunkPath
                }, otherChunkData)));
            if (params.runtimeModuleIds.length > 0) {
                for (const moduleId of params.runtimeModuleIds){
                    getOrInstantiateRuntimeModule(moduleId, chunkPath);
                }
            }
        },
        /**
     * Loads the given chunk, and returns a promise that resolves once the chunk
     * has been loaded.
     */ loadChunk (chunkUrl, source) {
            return doLoadChunk(chunkUrl, source);
        }
    };
    function getOrCreateResolver(chunkUrl) {
        let resolver = chunkResolvers.get(chunkUrl);
        if (!resolver) {
            let resolve;
            let reject;
            const promise = new Promise((innerResolve, innerReject)=>{
                resolve = innerResolve;
                reject = innerReject;
            });
            resolver = {
                resolved: false,
                loadingStarted: false,
                promise,
                resolve: ()=>{
                    resolver.resolved = true;
                    resolve();
                },
                reject: reject
            };
            chunkResolvers.set(chunkUrl, resolver);
        }
        return resolver;
    }
    /**
   * Loads the given chunk, and returns a promise that resolves once the chunk
   * has been loaded.
   */ function doLoadChunk(chunkUrl, source) {
        const resolver = getOrCreateResolver(chunkUrl);
        if (resolver.loadingStarted) {
            return resolver.promise;
        }
        if (source.type === SourceType.Runtime) {
            // We don't need to load chunks references from runtime code, as they're already
            // present in the DOM.
            resolver.loadingStarted = true;
            if (isCss(chunkUrl)) {
                // CSS chunks do not register themselves, and as such must be marked as
                // loaded instantly.
                resolver.resolve();
            }
            // We need to wait for JS chunks to register themselves within `registerChunk`
            // before we can start instantiating runtime modules, hence the absence of
            // `resolver.resolve()` in this branch.
            return resolver.promise;
        }
        if (typeof importScripts === 'function') {
            // We're in a web worker
            if (isCss(chunkUrl)) {
            // ignore
            } else if (isJs(chunkUrl)) {
                self.TURBOPACK_NEXT_CHUNK_URLS.push(chunkUrl);
                importScripts(TURBOPACK_WORKER_LOCATION + chunkUrl);
            } else {
                throw new Error(`can't infer type of chunk from URL ${chunkUrl} in worker`);
            }
        } else {
            // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
            const decodedChunkUrl = decodeURI(chunkUrl);
            if (isCss(chunkUrl)) {
                const previousLinks = document.querySelectorAll(`link[rel=stylesheet][href="${chunkUrl}"],link[rel=stylesheet][href^="${chunkUrl}?"],link[rel=stylesheet][href="${decodedChunkUrl}"],link[rel=stylesheet][href^="${decodedChunkUrl}?"]`);
                if (previousLinks.length > 0) {
                    // CSS chunks do not register themselves, and as such must be marked as
                    // loaded instantly.
                    resolver.resolve();
                } else {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = chunkUrl;
                    link.onerror = ()=>{
                        resolver.reject();
                    };
                    link.onload = ()=>{
                        // CSS chunks do not register themselves, and as such must be marked as
                        // loaded instantly.
                        resolver.resolve();
                    };
                    // Append to the `head` for webpack compatibility.
                    document.head.appendChild(link);
                }
            } else if (isJs(chunkUrl)) {
                const previousScripts = document.querySelectorAll(`script[src="${chunkUrl}"],script[src^="${chunkUrl}?"],script[src="${decodedChunkUrl}"],script[src^="${decodedChunkUrl}?"]`);
                if (previousScripts.length > 0) {
                    // There is this edge where the script already failed loading, but we
                    // can't detect that. The Promise will never resolve in this case.
                    for (const script of Array.from(previousScripts)){
                        script.addEventListener('error', ()=>{
                            resolver.reject();
                        });
                    }
                } else {
                    const script = document.createElement('script');
                    script.src = chunkUrl;
                    // We'll only mark the chunk as loaded once the script has been executed,
                    // which happens in `registerChunk`. Hence the absence of `resolve()` in
                    // this branch.
                    script.onerror = ()=>{
                        resolver.reject();
                    };
                    // Append to the `head` for webpack compatibility.
                    document.head.appendChild(script);
                }
            } else {
                throw new Error(`can't infer type of chunk from URL ${chunkUrl}`);
            }
        }
        resolver.loadingStarted = true;
        return resolver.promise;
    }
})();
/**
 * This file contains the runtime code specific to the Turbopack development
 * ECMAScript DOM runtime.
 *
 * It will be appended to the base development runtime code.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../base/runtime-base.ts" />
/// <reference path="../base/dev-base.ts" />
/// <reference path="./runtime-backend-dom.ts" />
/// <reference path="../../../shared/require-type.d.ts" />
let DEV_BACKEND;
(()=>{
    DEV_BACKEND = {
        unloadChunk (chunkUrl) {
            deleteResolver(chunkUrl);
            // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
            const decodedChunkUrl = decodeURI(chunkUrl);
            if (isCss(chunkUrl)) {
                const links = document.querySelectorAll(`link[href="${chunkUrl}"],link[href^="${chunkUrl}?"],link[href="${decodedChunkUrl}"],link[href^="${decodedChunkUrl}?"]`);
                for (const link of Array.from(links)){
                    link.remove();
                }
            } else if (isJs(chunkUrl)) {
                // Unloading a JS chunk would have no effect, as it lives in the JS
                // runtime once evaluated.
                // However, we still want to remove the script tag from the DOM to keep
                // the HTML somewhat consistent from the user's perspective.
                const scripts = document.querySelectorAll(`script[src="${chunkUrl}"],script[src^="${chunkUrl}?"],script[src="${decodedChunkUrl}"],script[src^="${decodedChunkUrl}?"]`);
                for (const script of Array.from(scripts)){
                    script.remove();
                }
            } else {
                throw new Error(`can't infer type of chunk from URL ${chunkUrl}`);
            }
        },
        reloadChunk (chunkUrl) {
            return new Promise((resolve, reject)=>{
                if (!isCss(chunkUrl)) {
                    reject(new Error('The DOM backend can only reload CSS chunks'));
                    return;
                }
                const decodedChunkUrl = decodeURI(chunkUrl);
                const previousLinks = document.querySelectorAll(`link[rel=stylesheet][href="${chunkUrl}"],link[rel=stylesheet][href^="${chunkUrl}?"],link[rel=stylesheet][href="${decodedChunkUrl}"],link[rel=stylesheet][href^="${decodedChunkUrl}?"]`);
                if (previousLinks.length === 0) {
                    reject(new Error(`No link element found for chunk ${chunkUrl}`));
                    return;
                }
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                if (navigator.userAgent.includes('Firefox')) {
                    // Firefox won't reload CSS files that were previously loaded on the current page,
                    // we need to add a query param to make sure CSS is actually reloaded from the server.
                    //
                    // I believe this is this issue: https://bugzilla.mozilla.org/show_bug.cgi?id=1037506
                    //
                    // Safari has a similar issue, but only if you have a `<link rel=preload ... />` tag
                    // pointing to the same URL as the stylesheet: https://bugs.webkit.org/show_bug.cgi?id=187726
                    link.href = `${chunkUrl}?ts=${Date.now()}`;
                } else {
                    link.href = chunkUrl;
                }
                link.onerror = ()=>{
                    reject();
                };
                link.onload = ()=>{
                    // First load the new CSS, then remove the old ones. This prevents visible
                    // flickering that would happen in-between removing the previous CSS and
                    // loading the new one.
                    for (const previousLink of Array.from(previousLinks))previousLink.remove();
                    // CSS chunks do not register themselves, and as such must be marked as
                    // loaded instantly.
                    resolve();
                };
                // Make sure to insert the new CSS right after the previous one, so that
                // its precedence is higher.
                previousLinks[0].parentElement.insertBefore(link, previousLinks[0].nextSibling);
            });
        },
        restart: ()=>self.location.reload()
    };
    function deleteResolver(chunkUrl) {
        chunkResolvers.delete(chunkUrl);
    }
})();
function _eval({ code, url, map }) {
    code += `\n\n//# sourceURL=${encodeURI(location.origin + CHUNK_BASE_PATH + url + CHUNK_SUFFIX_PATH)}`;
    if (map) {
        code += `\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(// btoa doesn't handle nonlatin characters, so escape them as \x sequences
        // See https://stackoverflow.com/a/26603875
        unescape(encodeURIComponent(map)))}`;
    }
    // eslint-disable-next-line no-eval
    return eval(code);
}
const chunksToRegister = globalThis.TURBOPACK;
globalThis.TURBOPACK = { push: registerChunk };
chunksToRegister.forEach(registerChunk);
const chunkListsToRegister = globalThis.TURBOPACK_CHUNK_LISTS || [];
chunkListsToRegister.forEach(registerChunkList);
globalThis.TURBOPACK_CHUNK_LISTS = { push: registerChunkList };
})();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzZWN0aW9ucyI6IFsKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTQsICJjb2x1bW4iOiAwfSwgIm1hcCI6IHsidmVyc2lvbiI6Mywic291cmNlcyI6WyJ0dXJib3BhY2s6Ly8vW3R1cmJvcGFja10vc2hhcmVkL3J1bnRpbWUtdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBydW50aW1lIHR5cGVzIGFuZCBmdW5jdGlvbnMgdGhhdCBhcmUgc2hhcmVkIGJldHdlZW4gYWxsXHJcbiAqIFR1cmJvUGFjayBFQ01BU2NyaXB0IHJ1bnRpbWVzLlxyXG4gKlxyXG4gKiBJdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcnVudGltZSBjb2RlIG9mIGVhY2ggcnVudGltZS5cclxuICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3J1bnRpbWUtdHlwZXMuZC50c1wiIC8+XHJcblxyXG50eXBlIEVzbU5hbWVzcGFjZU9iamVjdCA9IFJlY29yZDxzdHJpbmcsIGFueT5cclxuXHJcbi8vIEB0cy1pZ25vcmUgRGVmaW5lZCBpbiBgZGV2LWJhc2UudHNgXHJcbmRlY2xhcmUgZnVuY3Rpb24gZ2V0T3JJbnN0YW50aWF0ZU1vZHVsZUZyb21QYXJlbnQ8TT4oXHJcbiAgaWQ6IE1vZHVsZUlkLFxyXG4gIHNvdXJjZU1vZHVsZTogTVxyXG4pOiBNXHJcblxyXG5jb25zdCBSRUVYUE9SVEVEX09CSkVDVFMgPSBTeW1ib2woJ3JlZXhwb3J0ZWQgb2JqZWN0cycpXHJcblxyXG50eXBlIE1vZHVsZUNvbnRleHRNYXAgPSBSZWNvcmQ8TW9kdWxlSWQsIE1vZHVsZUNvbnRleHRFbnRyeT5cclxuXHJcbmludGVyZmFjZSBNb2R1bGVDb250ZXh0RW50cnkge1xyXG4gIGlkOiAoKSA9PiBNb2R1bGVJZFxyXG4gIG1vZHVsZTogKCkgPT4gYW55XHJcbn1cclxuXHJcbmludGVyZmFjZSBNb2R1bGVDb250ZXh0IHtcclxuICAvLyByZXF1aXJlIGNhbGxcclxuICAobW9kdWxlSWQ6IE1vZHVsZUlkKTogRXhwb3J0cyB8IEVzbU5hbWVzcGFjZU9iamVjdFxyXG5cclxuICAvLyBhc3luYyBpbXBvcnQgY2FsbFxyXG4gIGltcG9ydChtb2R1bGVJZDogTW9kdWxlSWQpOiBQcm9taXNlPEV4cG9ydHMgfCBFc21OYW1lc3BhY2VPYmplY3Q+XHJcblxyXG4gIGtleXMoKTogTW9kdWxlSWRbXVxyXG5cclxuICByZXNvbHZlKG1vZHVsZUlkOiBNb2R1bGVJZCk6IE1vZHVsZUlkXHJcbn1cclxuXHJcbnR5cGUgR2V0T3JJbnN0YW50aWF0ZU1vZHVsZUZyb21QYXJlbnQ8TSBleHRlbmRzIE1vZHVsZT4gPSAoXHJcbiAgbW9kdWxlSWQ6IE1bJ2lkJ10sXHJcbiAgcGFyZW50TW9kdWxlOiBNXHJcbikgPT4gTVxyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiBnZXRPckluc3RhbnRpYXRlUnVudGltZU1vZHVsZShcclxuICBtb2R1bGVJZDogTW9kdWxlSWQsXHJcbiAgY2h1bmtQYXRoOiBDaHVua1BhdGhcclxuKTogTW9kdWxlXHJcblxyXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcclxuY29uc3QgdG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWdcclxuXHJcbmZ1bmN0aW9uIGRlZmluZVByb3AoXHJcbiAgb2JqOiBhbnksXHJcbiAgbmFtZTogUHJvcGVydHlLZXksXHJcbiAgb3B0aW9uczogUHJvcGVydHlEZXNjcmlwdG9yICYgVGhpc1R5cGU8YW55PlxyXG4pIHtcclxuICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwgb3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcndyaXR0ZW5Nb2R1bGUoXHJcbiAgbW9kdWxlQ2FjaGU6IE1vZHVsZUNhY2hlPE1vZHVsZT4sXHJcbiAgaWQ6IE1vZHVsZUlkXHJcbik6IE1vZHVsZSB7XHJcbiAgbGV0IG1vZHVsZSA9IG1vZHVsZUNhY2hlW2lkXVxyXG4gIGlmICghbW9kdWxlKSB7XHJcbiAgICAvLyBUaGlzIGlzIGludm9rZWQgd2hlbiBhIG1vZHVsZSBpcyBtZXJnZWQgaW50byBhbm90aGVyIG1vZHVsZSwgdGh1cyBpdCB3YXNuJ3QgaW52b2tlZCB2aWFcclxuICAgIC8vIGluc3RhbnRpYXRlTW9kdWxlIGFuZCB0aGUgY2FjaGUgZW50cnkgd2Fzbid0IGNyZWF0ZWQgeWV0LlxyXG4gICAgbW9kdWxlID0ge1xyXG4gICAgICBleHBvcnRzOiB7fSxcclxuICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIG5hbWVzcGFjZU9iamVjdDogdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gICAgbW9kdWxlQ2FjaGVbaWRdID0gbW9kdWxlXHJcbiAgfVxyXG4gIHJldHVybiBtb2R1bGVcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGdldHRlcnMgdG8gdGhlIGV4cG9ydHMgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gZXNtKFxyXG4gIGV4cG9ydHM6IEV4cG9ydHMsXHJcbiAgZ2V0dGVyczogUmVjb3JkPHN0cmluZywgKCgpID0+IGFueSkgfCBbKCkgPT4gYW55LCAodjogYW55KSA9PiB2b2lkXT5cclxuKSB7XHJcbiAgZGVmaW5lUHJvcChleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSlcclxuICBpZiAodG9TdHJpbmdUYWcpIGRlZmluZVByb3AoZXhwb3J0cywgdG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pXHJcbiAgZm9yIChjb25zdCBrZXkgaW4gZ2V0dGVycykge1xyXG4gICAgY29uc3QgaXRlbSA9IGdldHRlcnNba2V5XVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcclxuICAgICAgZGVmaW5lUHJvcChleHBvcnRzLCBrZXksIHtcclxuICAgICAgICBnZXQ6IGl0ZW1bMF0sXHJcbiAgICAgICAgc2V0OiBpdGVtWzFdLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWZpbmVQcm9wKGV4cG9ydHMsIGtleSwgeyBnZXQ6IGl0ZW0sIGVudW1lcmFibGU6IHRydWUgfSlcclxuICAgIH1cclxuICB9XHJcbiAgT2JqZWN0LnNlYWwoZXhwb3J0cylcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2VzIHRoZSBtb2R1bGUgYW4gRVNNIHdpdGggZXhwb3J0c1xyXG4gKi9cclxuZnVuY3Rpb24gZXNtRXhwb3J0KFxyXG4gIG1vZHVsZTogTW9kdWxlLFxyXG4gIGV4cG9ydHM6IEV4cG9ydHMsXHJcbiAgbW9kdWxlQ2FjaGU6IE1vZHVsZUNhY2hlPE1vZHVsZT4sXHJcbiAgZ2V0dGVyczogUmVjb3JkPHN0cmluZywgKCkgPT4gYW55PixcclxuICBpZDogTW9kdWxlSWQgfCB1bmRlZmluZWRcclxuKSB7XHJcbiAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgIG1vZHVsZSA9IGdldE92ZXJ3cml0dGVuTW9kdWxlKG1vZHVsZUNhY2hlLCBpZClcclxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0c1xyXG4gIH1cclxuICBtb2R1bGUubmFtZXNwYWNlT2JqZWN0ID0gbW9kdWxlLmV4cG9ydHNcclxuICBlc20oZXhwb3J0cywgZ2V0dGVycylcclxufVxyXG5cclxuZnVuY3Rpb24gZW5zdXJlRHluYW1pY0V4cG9ydHMobW9kdWxlOiBNb2R1bGUsIGV4cG9ydHM6IEV4cG9ydHMpIHtcclxuICBsZXQgcmVleHBvcnRlZE9iamVjdHMgPSBtb2R1bGVbUkVFWFBPUlRFRF9PQkpFQ1RTXVxyXG5cclxuICBpZiAoIXJlZXhwb3J0ZWRPYmplY3RzKSB7XHJcbiAgICByZWV4cG9ydGVkT2JqZWN0cyA9IG1vZHVsZVtSRUVYUE9SVEVEX09CSkVDVFNdID0gW11cclxuICAgIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLm5hbWVzcGFjZU9iamVjdCA9IG5ldyBQcm94eShleHBvcnRzLCB7XHJcbiAgICAgIGdldCh0YXJnZXQsIHByb3ApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCkgfHxcclxuICAgICAgICAgIHByb3AgPT09ICdkZWZhdWx0JyB8fFxyXG4gICAgICAgICAgcHJvcCA9PT0gJ19fZXNNb2R1bGUnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG9iaiBvZiByZWV4cG9ydGVkT2JqZWN0cyEpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gUmVmbGVjdC5nZXQob2JqLCBwcm9wKVxyXG4gICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgIH0sXHJcbiAgICAgIG93bktleXModGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXHJcbiAgICAgICAgZm9yIChjb25zdCBvYmogb2YgcmVleHBvcnRlZE9iamVjdHMhKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBSZWZsZWN0Lm93bktleXMob2JqKSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnZGVmYXVsdCcgJiYgIWtleXMuaW5jbHVkZXMoa2V5KSkga2V5cy5wdXNoKGtleSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXNcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRHluYW1pY2FsbHkgZXhwb3J0cyBwcm9wZXJ0aWVzIGZyb20gYW4gb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBkeW5hbWljRXhwb3J0KFxyXG4gIG1vZHVsZTogTW9kdWxlLFxyXG4gIGV4cG9ydHM6IEV4cG9ydHMsXHJcbiAgbW9kdWxlQ2FjaGU6IE1vZHVsZUNhY2hlPE1vZHVsZT4sXHJcbiAgb2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxyXG4gIGlkOiBNb2R1bGVJZCB8IHVuZGVmaW5lZFxyXG4pIHtcclxuICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgbW9kdWxlID0gZ2V0T3ZlcndyaXR0ZW5Nb2R1bGUobW9kdWxlQ2FjaGUsIGlkKVxyXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzXHJcbiAgfVxyXG4gIGVuc3VyZUR5bmFtaWNFeHBvcnRzKG1vZHVsZSwgZXhwb3J0cylcclxuXHJcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xyXG4gICAgbW9kdWxlW1JFRVhQT1JURURfT0JKRUNUU10hLnB1c2gob2JqZWN0KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXhwb3J0VmFsdWUoXHJcbiAgbW9kdWxlOiBNb2R1bGUsXHJcbiAgbW9kdWxlQ2FjaGU6IE1vZHVsZUNhY2hlPE1vZHVsZT4sXHJcbiAgdmFsdWU6IGFueSxcclxuICBpZDogTW9kdWxlSWQgfCB1bmRlZmluZWRcclxuKSB7XHJcbiAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgIG1vZHVsZSA9IGdldE92ZXJ3cml0dGVuTW9kdWxlKG1vZHVsZUNhY2hlLCBpZClcclxuICB9XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB2YWx1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBleHBvcnROYW1lc3BhY2UoXHJcbiAgbW9kdWxlOiBNb2R1bGUsXHJcbiAgbW9kdWxlQ2FjaGU6IE1vZHVsZUNhY2hlPE1vZHVsZT4sXHJcbiAgbmFtZXNwYWNlOiBhbnksXHJcbiAgaWQ6IE1vZHVsZUlkIHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICBtb2R1bGUgPSBnZXRPdmVyd3JpdHRlbk1vZHVsZShtb2R1bGVDYWNoZSwgaWQpXHJcbiAgfVxyXG4gIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLm5hbWVzcGFjZU9iamVjdCA9IG5hbWVzcGFjZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHZXR0ZXIob2JqOiBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCBhbnk+LCBrZXk6IHN0cmluZyB8IHN5bWJvbCkge1xyXG4gIHJldHVybiAoKSA9PiBvYmpba2V5XVxyXG59XHJcblxyXG4vKipcclxuICogQHJldHVybnMgcHJvdG90eXBlIG9mIHRoZSBvYmplY3RcclxuICovXHJcbmNvbnN0IGdldFByb3RvOiAob2JqOiBhbnkpID0+IGFueSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZlxyXG4gID8gKG9iaikgPT4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iailcclxuICA6IChvYmopID0+IG9iai5fX3Byb3RvX19cclxuXHJcbi8qKiBQcm90b3R5cGVzIHRoYXQgYXJlIG5vdCBleHBhbmRlZCBmb3IgZXhwb3J0cyAqL1xyXG5jb25zdCBMRUFGX1BST1RPVFlQRVMgPSBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcmF3XHJcbiAqIEBwYXJhbSBuc1xyXG4gKiBAcGFyYW0gYWxsb3dFeHBvcnREZWZhdWx0XHJcbiAqICAgKiBgZmFsc2VgOiB3aWxsIGhhdmUgdGhlIHJhdyBtb2R1bGUgYXMgZGVmYXVsdCBleHBvcnRcclxuICogICAqIGB0cnVlYDogd2lsbCBoYXZlIHRoZSBkZWZhdWx0IHByb3BlcnR5IGFzIGRlZmF1bHQgZXhwb3J0XHJcbiAqL1xyXG5mdW5jdGlvbiBpbnRlcm9wRXNtKFxyXG4gIHJhdzogRXhwb3J0cyxcclxuICBuczogRXNtTmFtZXNwYWNlT2JqZWN0LFxyXG4gIGFsbG93RXhwb3J0RGVmYXVsdD86IGJvb2xlYW5cclxuKSB7XHJcbiAgY29uc3QgZ2V0dGVyczogeyBbczogc3RyaW5nXTogKCkgPT4gYW55IH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgZm9yIChcclxuICAgIGxldCBjdXJyZW50ID0gcmF3O1xyXG4gICAgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJykgJiZcclxuICAgICFMRUFGX1BST1RPVFlQRVMuaW5jbHVkZXMoY3VycmVudCk7XHJcbiAgICBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudClcclxuICApIHtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpKSB7XHJcbiAgICAgIGdldHRlcnNba2V5XSA9IGNyZWF0ZUdldHRlcihyYXcsIGtleSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRoaXMgaXMgbm90IHJlYWxseSBjb3JyZWN0XHJcbiAgLy8gd2Ugc2hvdWxkIHNldCB0aGUgYGRlZmF1bHRgIGdldHRlciBpZiB0aGUgaW1wb3J0ZWQgbW9kdWxlIGlzIGEgYC5janMgZmlsZWBcclxuICBpZiAoIShhbGxvd0V4cG9ydERlZmF1bHQgJiYgJ2RlZmF1bHQnIGluIGdldHRlcnMpKSB7XHJcbiAgICBnZXR0ZXJzWydkZWZhdWx0J10gPSAoKSA9PiByYXdcclxuICB9XHJcblxyXG4gIGVzbShucywgZ2V0dGVycylcclxuICByZXR1cm4gbnNcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTlMocmF3OiBNb2R1bGVbJ2V4cG9ydHMnXSk6IEVzbU5hbWVzcGFjZU9iamVjdCB7XHJcbiAgaWYgKHR5cGVvZiByYXcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICByZXR1cm4gcmF3LmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlc21JbXBvcnQoXHJcbiAgc291cmNlTW9kdWxlOiBNb2R1bGUsXHJcbiAgaWQ6IE1vZHVsZUlkXHJcbik6IEV4Y2x1ZGU8TW9kdWxlWyduYW1lc3BhY2VPYmplY3QnXSwgdW5kZWZpbmVkPiB7XHJcbiAgY29uc3QgbW9kdWxlID0gZ2V0T3JJbnN0YW50aWF0ZU1vZHVsZUZyb21QYXJlbnQoaWQsIHNvdXJjZU1vZHVsZSlcclxuICBpZiAobW9kdWxlLmVycm9yKSB0aHJvdyBtb2R1bGUuZXJyb3JcclxuXHJcbiAgLy8gYW55IEVTIG1vZHVsZSBoYXMgdG8gaGF2ZSBgbW9kdWxlLm5hbWVzcGFjZU9iamVjdGAgZGVmaW5lZC5cclxuICBpZiAobW9kdWxlLm5hbWVzcGFjZU9iamVjdCkgcmV0dXJuIG1vZHVsZS5uYW1lc3BhY2VPYmplY3RcclxuXHJcbiAgLy8gb25seSBFU00gY2FuIGJlIGFuIGFzeW5jIG1vZHVsZSwgc28gd2UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCBleHBvcnRzIGJlaW5nIGEgcHJvbWlzZSBoZXJlLlxyXG4gIGNvbnN0IHJhdyA9IG1vZHVsZS5leHBvcnRzXHJcbiAgcmV0dXJuIChtb2R1bGUubmFtZXNwYWNlT2JqZWN0ID0gaW50ZXJvcEVzbShcclxuICAgIHJhdyxcclxuICAgIGNyZWF0ZU5TKHJhdyksXHJcbiAgICByYXcgJiYgKHJhdyBhcyBhbnkpLl9fZXNNb2R1bGVcclxuICApKVxyXG59XHJcblxyXG4vLyBBZGQgYSBzaW1wbGUgcnVudGltZSByZXF1aXJlIHNvIHRoYXQgZW52aXJvbm1lbnRzIHdpdGhvdXQgb25lIGNhbiBzdGlsbCBwYXNzXHJcbi8vIGB0eXBlb2YgcmVxdWlyZWAgQ29tbW9uSlMgY2hlY2tzIHNvIHRoYXQgZXhwb3J0cyBhcmUgY29ycmVjdGx5IHJlZ2lzdGVyZWQuXHJcbmNvbnN0IHJ1bnRpbWVSZXF1aXJlID1cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbidcclxuICAgID8gLy8gQHRzLWlnbm9yZVxyXG4gICAgICByZXF1aXJlXHJcbiAgICA6IGZ1bmN0aW9uIHJlcXVpcmUoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHVzZSBvZiBydW50aW1lIHJlcXVpcmUnKVxyXG4gICAgICB9XHJcblxyXG5mdW5jdGlvbiBjb21tb25Kc1JlcXVpcmUoc291cmNlTW9kdWxlOiBNb2R1bGUsIGlkOiBNb2R1bGVJZCk6IEV4cG9ydHMge1xyXG4gIGNvbnN0IG1vZHVsZSA9IGdldE9ySW5zdGFudGlhdGVNb2R1bGVGcm9tUGFyZW50KGlkLCBzb3VyY2VNb2R1bGUpXHJcbiAgaWYgKG1vZHVsZS5lcnJvcikgdGhyb3cgbW9kdWxlLmVycm9yXHJcbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBgcmVxdWlyZS5jb250ZXh0YCBhbmQgcmVxdWlyZS9pbXBvcnQgZXhwcmVzc2lvbiBydW50aW1lLlxyXG4gKi9cclxuZnVuY3Rpb24gbW9kdWxlQ29udGV4dChtYXA6IE1vZHVsZUNvbnRleHRNYXApOiBNb2R1bGVDb250ZXh0IHtcclxuICBmdW5jdGlvbiBtb2R1bGVDb250ZXh0KGlkOiBNb2R1bGVJZCk6IEV4cG9ydHMge1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwobWFwLCBpZCkpIHtcclxuICAgICAgcmV0dXJuIG1hcFtpZF0ubW9kdWxlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlID0gbmV3IEVycm9yKGBDYW5ub3QgZmluZCBtb2R1bGUgJyR7aWR9J2ApXHJcbiAgICA7KGUgYXMgYW55KS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnXHJcbiAgICB0aHJvdyBlXHJcbiAgfVxyXG5cclxuICBtb2R1bGVDb250ZXh0LmtleXMgPSAoKTogTW9kdWxlSWRbXSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKVxyXG4gIH1cclxuXHJcbiAgbW9kdWxlQ29udGV4dC5yZXNvbHZlID0gKGlkOiBNb2R1bGVJZCk6IE1vZHVsZUlkID0+IHtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgaWQpKSB7XHJcbiAgICAgIHJldHVybiBtYXBbaWRdLmlkKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlID0gbmV3IEVycm9yKGBDYW5ub3QgZmluZCBtb2R1bGUgJyR7aWR9J2ApXHJcbiAgICA7KGUgYXMgYW55KS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnXHJcbiAgICB0aHJvdyBlXHJcbiAgfVxyXG5cclxuICBtb2R1bGVDb250ZXh0LmltcG9ydCA9IGFzeW5jIChpZDogTW9kdWxlSWQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCAobW9kdWxlQ29udGV4dChpZCkgYXMgUHJvbWlzZTxFeHBvcnRzPilcclxuICB9XHJcblxyXG4gIHJldHVybiBtb2R1bGVDb250ZXh0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwYXRoIG9mIGEgY2h1bmsgZGVmaW5lZCBieSBpdHMgZGF0YS5cclxuICovXHJcbmZ1bmN0aW9uIGdldENodW5rUGF0aChjaHVua0RhdGE6IENodW5rRGF0YSk6IENodW5rUGF0aCB7XHJcbiAgcmV0dXJuIHR5cGVvZiBjaHVua0RhdGEgPT09ICdzdHJpbmcnID8gY2h1bmtEYXRhIDogY2h1bmtEYXRhLnBhdGhcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQcm9taXNlPFQgPSBhbnk+KG1heWJlUHJvbWlzZTogYW55KTogbWF5YmVQcm9taXNlIGlzIFByb21pc2U8VD4ge1xyXG4gIHJldHVybiAoXHJcbiAgICBtYXliZVByb21pc2UgIT0gbnVsbCAmJlxyXG4gICAgdHlwZW9mIG1heWJlUHJvbWlzZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICd0aGVuJyBpbiBtYXliZVByb21pc2UgJiZcclxuICAgIHR5cGVvZiBtYXliZVByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBc3luY01vZHVsZUV4dDxUIGV4dGVuZHMge30+KG9iajogVCk6IG9iaiBpcyBBc3luY01vZHVsZUV4dCAmIFQge1xyXG4gIHJldHVybiB0dXJib3BhY2tRdWV1ZXMgaW4gb2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb21pc2U8VD4oKSB7XHJcbiAgbGV0IHJlc29sdmU6ICh2YWx1ZTogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkXHJcbiAgbGV0IHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZFxyXG5cclxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlcywgcmVqKSA9PiB7XHJcbiAgICByZWplY3QgPSByZWpcclxuICAgIHJlc29sdmUgPSByZXNcclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvbWlzZSxcclxuICAgIHJlc29sdmU6IHJlc29sdmUhLFxyXG4gICAgcmVqZWN0OiByZWplY3QhLFxyXG4gIH1cclxufVxyXG5cclxuLy8gZXZlcnl0aGluZyBiZWxvdyBpcyBhZGFwdGVkIGZyb20gd2VicGFja1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2Jsb2IvNmJlNDA2NWFkZTFlMjUyYzFkOGRjYmE0YWYwZjQzZTMyYWYxYmRjMS9saWIvcnVudGltZS9Bc3luY01vZHVsZVJ1bnRpbWVNb2R1bGUuanMjTDEzXHJcblxyXG5jb25zdCB0dXJib3BhY2tRdWV1ZXMgPSBTeW1ib2woJ3R1cmJvcGFjayBxdWV1ZXMnKVxyXG5jb25zdCB0dXJib3BhY2tFeHBvcnRzID0gU3ltYm9sKCd0dXJib3BhY2sgZXhwb3J0cycpXHJcbmNvbnN0IHR1cmJvcGFja0Vycm9yID0gU3ltYm9sKCd0dXJib3BhY2sgZXJyb3InKVxyXG5cclxuY29uc3QgZW51bSBRdWV1ZVN0YXR1cyB7XHJcbiAgVW5rbm93biA9IC0xLFxyXG4gIFVucmVzb2x2ZWQgPSAwLFxyXG4gIFJlc29sdmVkID0gMSxcclxufVxyXG5cclxudHlwZSBBc3luY1F1ZXVlRm4gPSAoKCkgPT4gdm9pZCkgJiB7IHF1ZXVlQ291bnQ6IG51bWJlciB9XHJcbnR5cGUgQXN5bmNRdWV1ZSA9IEFzeW5jUXVldWVGbltdICYge1xyXG4gIHN0YXR1czogUXVldWVTdGF0dXNcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlKHF1ZXVlPzogQXN5bmNRdWV1ZSkge1xyXG4gIGlmIChxdWV1ZSAmJiBxdWV1ZS5zdGF0dXMgIT09IFF1ZXVlU3RhdHVzLlJlc29sdmVkKSB7XHJcbiAgICBxdWV1ZS5zdGF0dXMgPSBRdWV1ZVN0YXR1cy5SZXNvbHZlZFxyXG4gICAgcXVldWUuZm9yRWFjaCgoZm4pID0+IGZuLnF1ZXVlQ291bnQtLSlcclxuICAgIHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4ucXVldWVDb3VudC0tID8gZm4ucXVldWVDb3VudCsrIDogZm4oKSkpXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIERlcCA9IEV4cG9ydHMgfCBBc3luY01vZHVsZVByb21pc2UgfCBQcm9taXNlPEV4cG9ydHM+XHJcblxyXG50eXBlIEFzeW5jTW9kdWxlRXh0ID0ge1xyXG4gIFt0dXJib3BhY2tRdWV1ZXNdOiAoZm46IChxdWV1ZTogQXN5bmNRdWV1ZSkgPT4gdm9pZCkgPT4gdm9pZFxyXG4gIFt0dXJib3BhY2tFeHBvcnRzXTogRXhwb3J0c1xyXG4gIFt0dXJib3BhY2tFcnJvcl0/OiBhbnlcclxufVxyXG5cclxudHlwZSBBc3luY01vZHVsZVByb21pc2U8VCA9IEV4cG9ydHM+ID0gUHJvbWlzZTxUPiAmIEFzeW5jTW9kdWxlRXh0XHJcblxyXG5mdW5jdGlvbiB3cmFwRGVwcyhkZXBzOiBEZXBbXSk6IEFzeW5jTW9kdWxlRXh0W10ge1xyXG4gIHJldHVybiBkZXBzLm1hcCgoZGVwKTogQXN5bmNNb2R1bGVFeHQgPT4ge1xyXG4gICAgaWYgKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBpZiAoaXNBc3luY01vZHVsZUV4dChkZXApKSByZXR1cm4gZGVwXHJcbiAgICAgIGlmIChpc1Byb21pc2UoZGVwKSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXVlOiBBc3luY1F1ZXVlID0gT2JqZWN0LmFzc2lnbihbXSwge1xyXG4gICAgICAgICAgc3RhdHVzOiBRdWV1ZVN0YXR1cy5VbnJlc29sdmVkLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IG9iajogQXN5bmNNb2R1bGVFeHQgPSB7XHJcbiAgICAgICAgICBbdHVyYm9wYWNrRXhwb3J0c106IHt9LFxyXG4gICAgICAgICAgW3R1cmJvcGFja1F1ZXVlc106IChmbjogKHF1ZXVlOiBBc3luY1F1ZXVlKSA9PiB2b2lkKSA9PiBmbihxdWV1ZSksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZXAudGhlbihcclxuICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgb2JqW3R1cmJvcGFja0V4cG9ydHNdID0gcmVzXHJcbiAgICAgICAgICAgIHJlc29sdmVRdWV1ZShxdWV1ZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ialt0dXJib3BhY2tFcnJvcl0gPSBlcnJcclxuICAgICAgICAgICAgcmVzb2x2ZVF1ZXVlKHF1ZXVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3R1cmJvcGFja0V4cG9ydHNdOiBkZXAsXHJcbiAgICAgIFt0dXJib3BhY2tRdWV1ZXNdOiAoKSA9PiB7fSxcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhc3luY01vZHVsZShcclxuICBtb2R1bGU6IE1vZHVsZSxcclxuICBib2R5OiAoXHJcbiAgICBoYW5kbGVBc3luY0RlcGVuZGVuY2llczogKFxyXG4gICAgICBkZXBzOiBEZXBbXVxyXG4gICAgKSA9PiBFeHBvcnRzW10gfCBQcm9taXNlPCgpID0+IEV4cG9ydHNbXT4sXHJcbiAgICBhc3luY1Jlc3VsdDogKGVycj86IGFueSkgPT4gdm9pZFxyXG4gICkgPT4gdm9pZCxcclxuICBoYXNBd2FpdDogYm9vbGVhblxyXG4pIHtcclxuICBjb25zdCBxdWV1ZTogQXN5bmNRdWV1ZSB8IHVuZGVmaW5lZCA9IGhhc0F3YWl0XHJcbiAgICA/IE9iamVjdC5hc3NpZ24oW10sIHsgc3RhdHVzOiBRdWV1ZVN0YXR1cy5Vbmtub3duIH0pXHJcbiAgICA6IHVuZGVmaW5lZFxyXG5cclxuICBjb25zdCBkZXBRdWV1ZXM6IFNldDxBc3luY1F1ZXVlPiA9IG5ldyBTZXQoKVxyXG5cclxuICBjb25zdCB7IHJlc29sdmUsIHJlamVjdCwgcHJvbWlzZTogcmF3UHJvbWlzZSB9ID0gY3JlYXRlUHJvbWlzZTxFeHBvcnRzPigpXHJcblxyXG4gIGNvbnN0IHByb21pc2U6IEFzeW5jTW9kdWxlUHJvbWlzZSA9IE9iamVjdC5hc3NpZ24ocmF3UHJvbWlzZSwge1xyXG4gICAgW3R1cmJvcGFja0V4cG9ydHNdOiBtb2R1bGUuZXhwb3J0cyxcclxuICAgIFt0dXJib3BhY2tRdWV1ZXNdOiAoZm4pID0+IHtcclxuICAgICAgcXVldWUgJiYgZm4ocXVldWUpXHJcbiAgICAgIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKVxyXG4gICAgICBwcm9taXNlWydjYXRjaCddKCgpID0+IHt9KVxyXG4gICAgfSxcclxuICB9IHNhdGlzZmllcyBBc3luY01vZHVsZUV4dClcclxuXHJcbiAgY29uc3QgYXR0cmlidXRlczogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgZ2V0KCk6IGFueSB7XHJcbiAgICAgIHJldHVybiBwcm9taXNlXHJcbiAgICB9LFxyXG4gICAgc2V0KHY6IGFueSkge1xyXG4gICAgICAvLyBDYWxsaW5nIGBlc21FeHBvcnRgIGxlYWRzIHRvIHRoaXMuXHJcbiAgICAgIGlmICh2ICE9PSBwcm9taXNlKSB7XHJcbiAgICAgICAgcHJvbWlzZVt0dXJib3BhY2tFeHBvcnRzXSA9IHZcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywgYXR0cmlidXRlcylcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnbmFtZXNwYWNlT2JqZWN0JywgYXR0cmlidXRlcylcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQXN5bmNEZXBlbmRlbmNpZXMoZGVwczogRGVwW10pIHtcclxuICAgIGNvbnN0IGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcylcclxuXHJcbiAgICBjb25zdCBnZXRSZXN1bHQgPSAoKSA9PlxyXG4gICAgICBjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcclxuICAgICAgICBpZiAoZFt0dXJib3BhY2tFcnJvcl0pIHRocm93IGRbdHVyYm9wYWNrRXJyb3JdXHJcbiAgICAgICAgcmV0dXJuIGRbdHVyYm9wYWNrRXhwb3J0c11cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCB7IHByb21pc2UsIHJlc29sdmUgfSA9IGNyZWF0ZVByb21pc2U8KCkgPT4gRXhwb3J0c1tdPigpXHJcblxyXG4gICAgY29uc3QgZm46IEFzeW5jUXVldWVGbiA9IE9iamVjdC5hc3NpZ24oKCkgPT4gcmVzb2x2ZShnZXRSZXN1bHQpLCB7XHJcbiAgICAgIHF1ZXVlQ291bnQ6IDAsXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGZuUXVldWUocTogQXN5bmNRdWV1ZSkge1xyXG4gICAgICBpZiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkpIHtcclxuICAgICAgICBkZXBRdWV1ZXMuYWRkKHEpXHJcbiAgICAgICAgaWYgKHEgJiYgcS5zdGF0dXMgPT09IFF1ZXVlU3RhdHVzLlVucmVzb2x2ZWQpIHtcclxuICAgICAgICAgIGZuLnF1ZXVlQ291bnQrK1xyXG4gICAgICAgICAgcS5wdXNoKGZuKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiBkZXBbdHVyYm9wYWNrUXVldWVzXShmblF1ZXVlKSlcclxuXHJcbiAgICByZXR1cm4gZm4ucXVldWVDb3VudCA/IHByb21pc2UgOiBnZXRSZXN1bHQoKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXN5bmNSZXN1bHQoZXJyPzogYW55KSB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJlamVjdCgocHJvbWlzZVt0dXJib3BhY2tFcnJvcl0gPSBlcnIpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzb2x2ZShwcm9taXNlW3R1cmJvcGFja0V4cG9ydHNdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVRdWV1ZShxdWV1ZSlcclxuICB9XHJcblxyXG4gIGJvZHkoaGFuZGxlQXN5bmNEZXBlbmRlbmNpZXMsIGFzeW5jUmVzdWx0KVxyXG5cclxuICBpZiAocXVldWUgJiYgcXVldWUuc3RhdHVzID09PSBRdWV1ZVN0YXR1cy5Vbmtub3duKSB7XHJcbiAgICBxdWV1ZS5zdGF0dXMgPSBRdWV1ZVN0YXR1cy5VbnJlc29sdmVkXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQSBwc2V1ZG8gXCJmYWtlXCIgVVJMIG9iamVjdCB0byByZXNvbHZlIHRvIGl0cyByZWxhdGl2ZSBwYXRoLlxyXG4gKlxyXG4gKiBXaGVuIFVybFJld3JpdGVCZWhhdmlvciBpcyBzZXQgdG8gcmVsYXRpdmUsIGNhbGxzIHRvIHRoZSBgbmV3IFVSTCgpYCB3aWxsIGNvbnN0cnVjdCB1cmwgd2l0aG91dCBiYXNlIHVzaW5nIHRoaXNcclxuICogcnVudGltZSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjb250ZXh0LWFnbm9zdGljIHVybHMgYmV0d2VlbiBkaWZmZXJlbnQgcmVuZGVyaW5nIGNvbnRleHQsIGkuZSBzc3IgLyBjbGllbnQgdG8gYXZvaWRcclxuICogaHlkcmF0aW9uIG1pc21hdGNoLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGJhc2VkIG9uIHdlYnBhY2sncyBleGlzdGluZyBpbXBsZW1lbnRhdGlvbjpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iLzg3NjYwOTIxODA4NTY2ZWYzYjg3OTZmOGRmNjFiZDc5ZmMwMjYxMDgvbGliL3J1bnRpbWUvUmVsYXRpdmVVcmxSdW50aW1lTW9kdWxlLmpzXHJcbiAqL1xyXG5jb25zdCByZWxhdGl2ZVVSTCA9IGZ1bmN0aW9uIHJlbGF0aXZlVVJMKHRoaXM6IGFueSwgaW5wdXRVcmw6IHN0cmluZykge1xyXG4gIGNvbnN0IHJlYWxVcmwgPSBuZXcgVVJMKGlucHV0VXJsLCAneDovJylcclxuICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxyXG4gIGZvciAoY29uc3Qga2V5IGluIHJlYWxVcmwpIHZhbHVlc1trZXldID0gKHJlYWxVcmwgYXMgYW55KVtrZXldXHJcbiAgdmFsdWVzLmhyZWYgPSBpbnB1dFVybFxyXG4gIHZhbHVlcy5wYXRobmFtZSA9IGlucHV0VXJsLnJlcGxhY2UoL1s/I10uKi8sICcnKVxyXG4gIHZhbHVlcy5vcmlnaW4gPSB2YWx1ZXMucHJvdG9jb2wgPSAnJ1xyXG4gIHZhbHVlcy50b1N0cmluZyA9IHZhbHVlcy50b0pTT04gPSAoLi4uX2FyZ3M6IEFycmF5PGFueT4pID0+IGlucHV0VXJsXHJcbiAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiB2YWx1ZXNba2V5XSxcclxuICAgIH0pXHJcbn1cclxuXHJcbnJlbGF0aXZlVVJMLnByb3RvdHlwZSA9IFVSTC5wcm90b3R5cGVcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGVuc3VyZSBhbGwgdmFyaWFudHMgb2YgYW4gZW51bSBhcmUgaGFuZGxlZC5cclxuICovXHJcbmZ1bmN0aW9uIGludmFyaWFudChuZXZlcjogbmV2ZXIsIGNvbXB1dGVNZXNzYWdlOiAoYXJnOiBhbnkpID0+IHN0cmluZyk6IG5ldmVyIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYEludmFyaWFudDogJHtjb21wdXRlTWVzc2FnZShuZXZlcil9YClcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3R1YiBmdW5jdGlvbiB0byBtYWtlIGByZXF1aXJlYCBhdmFpbGFibGUgYnV0IG5vbi1mdW5jdGlvbmFsIGluIEVTTS5cclxuICovXHJcbmZ1bmN0aW9uIHJlcXVpcmVTdHViKF9tb2R1bGVJZDogTW9kdWxlSWQpOiBuZXZlciB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdkeW5hbWljIHVzYWdlIG9mIHJlcXVpcmUgaXMgbm90IHN1cHBvcnRlZCcpXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQsb0RBQW9ELEdBRXBELDZDQUE2QztBQVU3QyxNQUFNLHFCQUFxQixPQUFPO0FBK0JsQyxNQUFNLGlCQUFpQixPQUFPLFNBQVMsQ0FBQyxjQUFjO0FBQ3RELE1BQU0sY0FBYyxPQUFPLFdBQVcsZUFBZSxPQUFPLFdBQVc7QUFFdkUsU0FBUyxXQUNQLEdBQVEsRUFDUixJQUFpQixFQUNqQixPQUEyQztJQUUzQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxPQUFPLE9BQU8sY0FBYyxDQUFDLEtBQUssTUFBTTtBQUN4RTtBQUVBLFNBQVMscUJBQ1AsV0FBZ0MsRUFDaEMsRUFBWTtJQUVaLElBQUksU0FBUyxXQUFXLENBQUMsR0FBRztJQUM1QixJQUFJLENBQUMsUUFBUTtRQUNYLDBGQUEwRjtRQUMx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QUM7SUFDckMsSUFBSyxNQUFNLE9BQU8sUUFBUyxNQUFNLENBQUMsSUFBSSxHQUFHLEFBQUMsT0FBZSxDQUFDLElBQUk7SUFDOUQsT0FBTyxJQUFJLEdBQUc7SUFDZCxPQUFPLFFBQVEsR0FBRyxTQUFTLE9BQU8sQ0FBQyxVQUFVO0lBQzdDLE9BQU8sTUFBTSxHQUFHLE9BQU8sUUFBUSxHQUFHO0lBQ2xDLE9BQU8sUUFBUSxHQUFHLE9BQU8sTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFzQjtJQUM1RCxJQUFLLE1BQU0sT0FBTyxPQUNoQixPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUMvQixZQUFZO1FBQ1osY0FBYztRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUk7SUFDcEI7QUFDSjtBQUVBLFlBQVksU0FBUyxHQUFHLElBQUksU0FBUztBQUVyQzs7Q0FFQyxHQUNELFNBQVMsVUFBVSxLQUFZLEVBQUUsY0FBb0M7SUFDbkUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxRQUFRO0FBQ3ZEO0FBRUE7O0NBRUMsR0FDRCxTQUFTLFlBQVksU0FBbUI7SUFDdEMsTUFBTSxJQUFJLE1BQU07QUFDbEIiLCJpZ25vcmVMaXN0IjpbMF19fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMzc4LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsidHVyYm9wYWNrOi8vL1t0dXJib3BhY2tdL2Jyb3dzZXIvcnVudGltZS9iYXNlL3J1bnRpbWUtYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHJ1bnRpbWUgdHlwZXMgYW5kIGZ1bmN0aW9ucyB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiBhbGxcclxuICogVHVyYm9wYWNrICpkZXZlbG9wbWVudCogRUNNQVNjcmlwdCBydW50aW1lcy5cclxuICpcclxuICogSXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgcnVudGltZSBjb2RlIG9mIGVhY2ggcnVudGltZSByaWdodCBhZnRlciB0aGVcclxuICogc2hhcmVkIHJ1bnRpbWUgdXRpbHMuXHJcbiAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9nbG9iYWxzLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vc2hhcmVkL3J1bnRpbWUtdXRpbHMudHNcIiAvPlxyXG5cclxuLy8gVXNlZCBpbiBXZWJXb3JrZXJzIHRvIHRlbGwgdGhlIHJ1bnRpbWUgYWJvdXQgdGhlIGNodW5rIGJhc2UgcGF0aFxyXG5kZWNsYXJlIHZhciBUVVJCT1BBQ0tfV09SS0VSX0xPQ0FUSU9OOiBzdHJpbmdcclxuLy8gVXNlZCBpbiBXZWJXb3JrZXJzIHRvIHRlbGwgdGhlIHJ1bnRpbWUgYWJvdXQgdGhlIGN1cnJlbnQgY2h1bmsgdXJsIHNpbmNlIGl0IGNhbid0IGJlIGRldGVjdGVkIHZpYSBkb2N1bWVudC5jdXJyZW50U2NyaXB0XHJcbi8vIE5vdGUgaXQncyBzdG9yZWQgaW4gcmV2ZXJzZWQgb3JkZXIgdG8gdXNlIHB1c2ggYW5kIHBvcFxyXG5kZWNsYXJlIHZhciBUVVJCT1BBQ0tfTkVYVF9DSFVOS19VUkxTOiBDaHVua1VybFtdIHwgdW5kZWZpbmVkXHJcblxyXG4vLyBJbmplY3RlZCBieSBydXN0IGNvZGVcclxuZGVjbGFyZSB2YXIgQ0hVTktfQkFTRV9QQVRIOiBzdHJpbmdcclxuZGVjbGFyZSB2YXIgQ0hVTktfU1VGRklYX1BBVEg6IHN0cmluZ1xyXG5cclxuLy8gUHJvdmlkZWQgYnkgYnVpbGQgb3IgZGV2IGJhc2VcclxuZGVjbGFyZSBmdW5jdGlvbiBpbnN0YW50aWF0ZU1vZHVsZShpZDogTW9kdWxlSWQsIHNvdXJjZTogU291cmNlSW5mbyk6IE1vZHVsZVxyXG5cclxudHlwZSBSdW50aW1lUGFyYW1zID0ge1xyXG4gIG90aGVyQ2h1bmtzOiBDaHVua0RhdGFbXVxyXG4gIHJ1bnRpbWVNb2R1bGVJZHM6IE1vZHVsZUlkW11cclxufVxyXG5cclxudHlwZSBDaHVua1JlZ2lzdHJhdGlvbiA9IFtcclxuICBjaHVua1BhdGg6IENodW5rU2NyaXB0LFxyXG4gIGNodW5rTW9kdWxlczogQ29tcHJlc3NlZE1vZHVsZUZhY3RvcmllcyxcclxuICBwYXJhbXM6IFJ1bnRpbWVQYXJhbXMgfCB1bmRlZmluZWQsXHJcbl1cclxuXHJcbnR5cGUgQ2h1bmtMaXN0ID0ge1xyXG4gIHNjcmlwdDogQ2h1bmtMaXN0U2NyaXB0XHJcbiAgY2h1bmtzOiBDaHVua0RhdGFbXVxyXG4gIHNvdXJjZTogJ2VudHJ5JyB8ICdkeW5hbWljJ1xyXG59XHJcblxyXG5lbnVtIFNvdXJjZVR5cGUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtb2R1bGUgd2FzIGluc3RhbnRpYXRlZCBiZWNhdXNlIGl0IHdhcyBpbmNsdWRlZCBpbiBhbiBldmFsdWF0ZWQgY2h1bmsnc1xyXG4gICAqIHJ1bnRpbWUuXHJcbiAgICovXHJcbiAgUnVudGltZSA9IDAsXHJcbiAgLyoqXHJcbiAgICogVGhlIG1vZHVsZSB3YXMgaW5zdGFudGlhdGVkIGJlY2F1c2UgYSBwYXJlbnQgbW9kdWxlIGltcG9ydGVkIGl0LlxyXG4gICAqL1xyXG4gIFBhcmVudCA9IDEsXHJcbiAgLyoqXHJcbiAgICogVGhlIG1vZHVsZSB3YXMgaW5zdGFudGlhdGVkIGJlY2F1c2UgaXQgd2FzIGluY2x1ZGVkIGluIGEgY2h1bmsncyBob3QgbW9kdWxlXHJcbiAgICogdXBkYXRlLlxyXG4gICAqL1xyXG4gIFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcbnR5cGUgU291cmNlSW5mbyA9XHJcbiAgfCB7XHJcbiAgICAgIHR5cGU6IFNvdXJjZVR5cGUuUnVudGltZVxyXG4gICAgICBjaHVua1BhdGg6IENodW5rUGF0aFxyXG4gICAgfVxyXG4gIHwge1xyXG4gICAgICB0eXBlOiBTb3VyY2VUeXBlLlBhcmVudFxyXG4gICAgICBwYXJlbnRJZDogTW9kdWxlSWRcclxuICAgIH1cclxuICB8IHtcclxuICAgICAgdHlwZTogU291cmNlVHlwZS5VcGRhdGVcclxuICAgICAgcGFyZW50cz86IE1vZHVsZUlkW11cclxuICAgIH1cclxuXHJcbmludGVyZmFjZSBSdW50aW1lQmFja2VuZCB7XHJcbiAgcmVnaXN0ZXJDaHVuazogKGNodW5rUGF0aDogQ2h1bmtQYXRoLCBwYXJhbXM/OiBSdW50aW1lUGFyYW1zKSA9PiB2b2lkXHJcbiAgbG9hZENodW5rOiAoY2h1bmtVcmw6IENodW5rVXJsLCBzb3VyY2U6IFNvdXJjZUluZm8pID0+IFByb21pc2U8dm9pZD5cclxufVxyXG5cclxuaW50ZXJmYWNlIERldlJ1bnRpbWVCYWNrZW5kIHtcclxuICByZWxvYWRDaHVuaz86IChjaHVua1VybDogQ2h1bmtVcmwpID0+IFByb21pc2U8dm9pZD5cclxuICB1bmxvYWRDaHVuaz86IChjaHVua1VybDogQ2h1bmtVcmwpID0+IHZvaWRcclxuICByZXN0YXJ0OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IG1vZHVsZUZhY3RvcmllczogTW9kdWxlRmFjdG9yaWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxyXG4vKipcclxuICogTW9kdWxlIElEcyB0aGF0IGFyZSBpbnN0YW50aWF0ZWQgYXMgcGFydCBvZiB0aGUgcnVudGltZSBvZiBhIGNodW5rLlxyXG4gKi9cclxuY29uc3QgcnVudGltZU1vZHVsZXM6IFNldDxNb2R1bGVJZD4gPSBuZXcgU2V0KClcclxuLyoqXHJcbiAqIE1hcCBmcm9tIG1vZHVsZSBJRCB0byB0aGUgY2h1bmtzIHRoYXQgY29udGFpbiB0aGlzIG1vZHVsZS5cclxuICpcclxuICogSW4gSE1SLCB3ZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggbW9kdWxlcyBhcmUgY29udGFpbmVkIGluIHdoaWNoIHNvXHJcbiAqIGNodW5rcy4gVGhpcyBpcyBzbyB3ZSBkb24ndCBlYWdlcmx5IGRpc3Bvc2Ugb2YgYSBtb2R1bGUgd2hlbiBpdCBpcyByZW1vdmVkXHJcbiAqIGZyb20gY2h1bmsgQSwgYnV0IHN0aWxsIGV4aXN0cyBpbiBjaHVuayBCLlxyXG4gKi9cclxuY29uc3QgbW9kdWxlQ2h1bmtzTWFwOiBNYXA8TW9kdWxlSWQsIFNldDxDaHVua1BhdGg+PiA9IG5ldyBNYXAoKVxyXG4vKipcclxuICogTWFwIGZyb20gYSBjaHVuayBwYXRoIHRvIGFsbCBtb2R1bGVzIGl0IGNvbnRhaW5zLlxyXG4gKi9cclxuY29uc3QgY2h1bmtNb2R1bGVzTWFwOiBNYXA8Q2h1bmtQYXRoLCBTZXQ8TW9kdWxlSWQ+PiA9IG5ldyBNYXAoKVxyXG4vKipcclxuICogQ2h1bmsgbGlzdHMgdGhhdCBjb250YWluIGEgcnVudGltZS4gV2hlbiB0aGVzZSBjaHVuayBsaXN0cyByZWNlaXZlIGFuIHVwZGF0ZVxyXG4gKiB0aGF0IGNhbid0IGJlIHJlY29uY2lsZWQgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcGFnZSwgd2UgbmVlZCB0b1xyXG4gKiByZWxvYWQgdGhlIHJ1bnRpbWUgZW50aXJlbHkuXHJcbiAqL1xyXG5jb25zdCBydW50aW1lQ2h1bmtMaXN0czogU2V0PENodW5rTGlzdFBhdGg+ID0gbmV3IFNldCgpXHJcbi8qKlxyXG4gKiBNYXAgZnJvbSBhIGNodW5rIGxpc3QgdG8gdGhlIGNodW5rIHBhdGhzIGl0IGNvbnRhaW5zLlxyXG4gKi9cclxuY29uc3QgY2h1bmtMaXN0Q2h1bmtzTWFwOiBNYXA8Q2h1bmtMaXN0UGF0aCwgU2V0PENodW5rUGF0aD4+ID0gbmV3IE1hcCgpXHJcbi8qKlxyXG4gKiBNYXAgZnJvbSBhIGNodW5rIHBhdGggdG8gdGhlIGNodW5rIGxpc3RzIGl0IGJlbG9uZ3MgdG8uXHJcbiAqL1xyXG5jb25zdCBjaHVua0NodW5rTGlzdHNNYXA6IE1hcDxDaHVua1BhdGgsIFNldDxDaHVua0xpc3RQYXRoPj4gPSBuZXcgTWFwKClcclxuXHJcbmNvbnN0IGF2YWlsYWJsZU1vZHVsZXM6IE1hcDxNb2R1bGVJZCwgUHJvbWlzZTxhbnk+IHwgdHJ1ZT4gPSBuZXcgTWFwKClcclxuXHJcbmNvbnN0IGF2YWlsYWJsZU1vZHVsZUNodW5rczogTWFwPENodW5rUGF0aCwgUHJvbWlzZTxhbnk+IHwgdHJ1ZT4gPSBuZXcgTWFwKClcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDaHVuayhcclxuICBzb3VyY2U6IFNvdXJjZUluZm8sXHJcbiAgY2h1bmtEYXRhOiBDaHVua0RhdGFcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICBpZiAodHlwZW9mIGNodW5rRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBsb2FkQ2h1bmtQYXRoKHNvdXJjZSwgY2h1bmtEYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5jbHVkZWRMaXN0ID0gY2h1bmtEYXRhLmluY2x1ZGVkIHx8IFtdXHJcbiAgY29uc3QgbW9kdWxlc1Byb21pc2VzID0gaW5jbHVkZWRMaXN0Lm1hcCgoaW5jbHVkZWQpID0+IHtcclxuICAgIGlmIChtb2R1bGVGYWN0b3JpZXNbaW5jbHVkZWRdKSByZXR1cm4gdHJ1ZVxyXG4gICAgcmV0dXJuIGF2YWlsYWJsZU1vZHVsZXMuZ2V0KGluY2x1ZGVkKVxyXG4gIH0pXHJcbiAgaWYgKG1vZHVsZXNQcm9taXNlcy5sZW5ndGggPiAwICYmIG1vZHVsZXNQcm9taXNlcy5ldmVyeSgocCkgPT4gcCkpIHtcclxuICAgIC8vIFdoZW4gYWxsIGluY2x1ZGVkIGl0ZW1zIGFyZSBhbHJlYWR5IGxvYWRlZCBvciBsb2FkaW5nLCB3ZSBjYW4gc2tpcCBsb2FkaW5nIG91cnNlbHZlc1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG1vZHVsZXNQcm9taXNlcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGluY2x1ZGVkTW9kdWxlQ2h1bmtzTGlzdCA9IGNodW5rRGF0YS5tb2R1bGVDaHVua3MgfHwgW11cclxuICBjb25zdCBtb2R1bGVDaHVua3NQcm9taXNlcyA9IGluY2x1ZGVkTW9kdWxlQ2h1bmtzTGlzdFxyXG4gICAgLm1hcCgoaW5jbHVkZWQpID0+IHtcclxuICAgICAgLy8gVE9ETyhhbGV4a2lyc3opIERvIHdlIG5lZWQgdGhpcyBjaGVjaz9cclxuICAgICAgLy8gaWYgKG1vZHVsZUZhY3Rvcmllc1tpbmNsdWRlZF0pIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gYXZhaWxhYmxlTW9kdWxlQ2h1bmtzLmdldChpbmNsdWRlZClcclxuICAgIH0pXHJcbiAgICAuZmlsdGVyKChwKSA9PiBwKVxyXG5cclxuICBsZXQgcHJvbWlzZVxyXG4gIGlmIChtb2R1bGVDaHVua3NQcm9taXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyBTb21lIG1vZHVsZSBjaHVua3MgYXJlIGFscmVhZHkgbG9hZGVkIG9yIGxvYWRpbmcuXHJcblxyXG4gICAgaWYgKG1vZHVsZUNodW5rc1Byb21pc2VzLmxlbmd0aCA9PT0gaW5jbHVkZWRNb2R1bGVDaHVua3NMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAvLyBXaGVuIGFsbCBpbmNsdWRlZCBtb2R1bGUgY2h1bmtzIGFyZSBhbHJlYWR5IGxvYWRlZCBvciBsb2FkaW5nLCB3ZSBjYW4gc2tpcCBsb2FkaW5nIG91cnNlbHZlc1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwobW9kdWxlQ2h1bmtzUHJvbWlzZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kdWxlQ2h1bmtzVG9Mb2FkOiBTZXQ8Q2h1bmtQYXRoPiA9IG5ldyBTZXQoKVxyXG4gICAgZm9yIChjb25zdCBtb2R1bGVDaHVuayBvZiBpbmNsdWRlZE1vZHVsZUNodW5rc0xpc3QpIHtcclxuICAgICAgaWYgKCFhdmFpbGFibGVNb2R1bGVDaHVua3MuaGFzKG1vZHVsZUNodW5rKSkge1xyXG4gICAgICAgIG1vZHVsZUNodW5rc1RvTG9hZC5hZGQobW9kdWxlQ2h1bmspXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG1vZHVsZUNodW5rVG9Mb2FkIG9mIG1vZHVsZUNodW5rc1RvTG9hZCkge1xyXG4gICAgICBjb25zdCBwcm9taXNlID0gbG9hZENodW5rUGF0aChzb3VyY2UsIG1vZHVsZUNodW5rVG9Mb2FkKVxyXG5cclxuICAgICAgYXZhaWxhYmxlTW9kdWxlQ2h1bmtzLnNldChtb2R1bGVDaHVua1RvTG9hZCwgcHJvbWlzZSlcclxuXHJcbiAgICAgIG1vZHVsZUNodW5rc1Byb21pc2VzLnB1c2gocHJvbWlzZSlcclxuICAgIH1cclxuXHJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5hbGwobW9kdWxlQ2h1bmtzUHJvbWlzZXMpXHJcbiAgfSBlbHNlIHtcclxuICAgIHByb21pc2UgPSBsb2FkQ2h1bmtQYXRoKHNvdXJjZSwgY2h1bmtEYXRhLnBhdGgpXHJcblxyXG4gICAgLy8gTWFyayBhbGwgaW5jbHVkZWQgbW9kdWxlIGNodW5rcyBhcyBsb2FkaW5nIGlmIHRoZXkgYXJlIG5vdCBhbHJlYWR5IGxvYWRlZCBvciBsb2FkaW5nLlxyXG4gICAgZm9yIChjb25zdCBpbmNsdWRlZE1vZHVsZUNodW5rIG9mIGluY2x1ZGVkTW9kdWxlQ2h1bmtzTGlzdCkge1xyXG4gICAgICBpZiAoIWF2YWlsYWJsZU1vZHVsZUNodW5rcy5oYXMoaW5jbHVkZWRNb2R1bGVDaHVuaykpIHtcclxuICAgICAgICBhdmFpbGFibGVNb2R1bGVDaHVua3Muc2V0KGluY2x1ZGVkTW9kdWxlQ2h1bmssIHByb21pc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgaW5jbHVkZWQgb2YgaW5jbHVkZWRMaXN0KSB7XHJcbiAgICBpZiAoIWF2YWlsYWJsZU1vZHVsZXMuaGFzKGluY2x1ZGVkKSkge1xyXG4gICAgICAvLyBJdCBtaWdodCBiZSBiZXR0ZXIgdG8gcmFjZSBvbGQgYW5kIG5ldyBwcm9taXNlcywgYnV0IGl0J3MgcmFyZSB0aGF0IHRoZSBuZXcgcHJvbWlzZSB3aWxsIGJlIGZhc3RlciB0aGFuIGEgcmVxdWVzdCBzdGFydGVkIGVhcmxpZXIuXHJcbiAgICAgIC8vIEluIHByb2R1Y3Rpb24gaXQncyBldmVuIG1vcmUgcmFyZSwgYmVjYXVzZSB0aGUgY2h1bmsgb3B0aW1pemF0aW9uIHRyaWVzIHRvIGRlZHVwbGljYXRlIG1vZHVsZXMgYW55d2F5LlxyXG4gICAgICBhdmFpbGFibGVNb2R1bGVzLnNldChpbmNsdWRlZCwgcHJvbWlzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDaHVua0J5VXJsKHNvdXJjZTogU291cmNlSW5mbywgY2h1bmtVcmw6IENodW5rVXJsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEJBQ0tFTkQubG9hZENodW5rKGNodW5rVXJsLCBzb3VyY2UpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxldCBsb2FkUmVhc29uXHJcbiAgICBzd2l0Y2ggKHNvdXJjZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgU291cmNlVHlwZS5SdW50aW1lOlxyXG4gICAgICAgIGxvYWRSZWFzb24gPSBgYXMgYSBydW50aW1lIGRlcGVuZGVuY3kgb2YgY2h1bmsgJHtzb3VyY2UuY2h1bmtQYXRofWBcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIFNvdXJjZVR5cGUuUGFyZW50OlxyXG4gICAgICAgIGxvYWRSZWFzb24gPSBgZnJvbSBtb2R1bGUgJHtzb3VyY2UucGFyZW50SWR9YFxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgU291cmNlVHlwZS5VcGRhdGU6XHJcbiAgICAgICAgbG9hZFJlYXNvbiA9ICdmcm9tIGFuIEhNUiB1cGRhdGUnXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpbnZhcmlhbnQoc291cmNlLCAoc291cmNlKSA9PiBgVW5rbm93biBzb3VyY2UgdHlwZTogJHtzb3VyY2U/LnR5cGV9YClcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYEZhaWxlZCB0byBsb2FkIGNodW5rICR7Y2h1bmtVcmx9ICR7bG9hZFJlYXNvbn0ke1xyXG4gICAgICAgIGVycm9yID8gYDogJHtlcnJvcn1gIDogJydcclxuICAgICAgfWAsXHJcbiAgICAgIGVycm9yXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZENodW5rUGF0aChcclxuICBzb3VyY2U6IFNvdXJjZUluZm8sXHJcbiAgY2h1bmtQYXRoOiBDaHVua1BhdGhcclxuKTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB1cmwgPSBnZXRDaHVua1JlbGF0aXZlVXJsKGNodW5rUGF0aClcclxuICByZXR1cm4gbG9hZENodW5rQnlVcmwoc291cmNlLCB1cmwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIGFic29sdXRlIHVybCB0byBhbiBhc3NldC5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc29sdmVQYXRoRnJvbU1vZHVsZShcclxuICByZXNvbHZlcjogKG1vZHVsZUlkOiBzdHJpbmcpID0+IEV4cG9ydHNcclxuKTogKG1vZHVsZUlkOiBzdHJpbmcpID0+IHN0cmluZyB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlc29sdmVQYXRoRnJvbU1vZHVsZShtb2R1bGVJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGV4cG9ydGVkID0gcmVzb2x2ZXIobW9kdWxlSWQpXHJcbiAgICByZXR1cm4gZXhwb3J0ZWQ/LmRlZmF1bHQgPz8gZXhwb3J0ZWRcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBuby1vcCBmb3IgYnJvd3NlclxyXG4gKiBAcGFyYW0gbW9kdWxlUGF0aFxyXG4gKi9cclxuZnVuY3Rpb24gcmVzb2x2ZUFic29sdXRlUGF0aChtb2R1bGVQYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gYC9ST09ULyR7bW9kdWxlUGF0aCA/PyAnJ31gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgYmxvYiBVUkwgZm9yIHRoZSB3b3JrZXIuXHJcbiAqIEBwYXJhbSBjaHVua3MgbGlzdCBvZiBjaHVua3MgdG8gbG9hZFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0V29ya2VyQmxvYlVSTChjaHVua3M6IENodW5rUGF0aFtdKTogc3RyaW5nIHtcclxuICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8gcmV2ZXJzZSB0aGUgYXJyYXkgc28gd2hlbiBib290c3RyYXBwaW5nIHdlIGNhbiBpbmZlciB3aGF0IGNodW5rIGlzIGJlaW5nXHJcbiAgLy8gZXZhbHVhdGVkIGJ5IHBvcGluZyB1cmxzIG9mZiBvZiB0aGlzIGFycmF5LiAgU2VlIGBnZXRQYXRoRnJvbVNjcmlwdGBcclxuICBsZXQgYm9vdHN0cmFwID0gYHNlbGYuVFVSQk9QQUNLX1dPUktFUl9MT0NBVElPTiA9ICR7SlNPTi5zdHJpbmdpZnkobG9jYXRpb24ub3JpZ2luKX07XHJcbnNlbGYuVFVSQk9QQUNLX05FWFRfQ0hVTktfVVJMUyA9ICR7SlNPTi5zdHJpbmdpZnkoY2h1bmtzLnJldmVyc2UoKS5tYXAoZ2V0Q2h1bmtSZWxhdGl2ZVVybCksIG51bGwsIDIpfTtcclxuaW1wb3J0U2NyaXB0cyguLi5zZWxmLlRVUkJPUEFDS19ORVhUX0NIVU5LX1VSTFMubWFwKGMgPT4gc2VsZi5UVVJCT1BBQ0tfV09SS0VSX0xPQ0FUSU9OICsgYykucmV2ZXJzZSgpKTtgXHJcbiAgbGV0IGJsb2IgPSBuZXcgQmxvYihbYm9vdHN0cmFwXSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9KVxyXG4gIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgbW9kdWxlIHRvIGEgY2h1bmsuXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRNb2R1bGVUb0NodW5rKG1vZHVsZUlkOiBNb2R1bGVJZCwgY2h1bmtQYXRoOiBDaHVua1BhdGgpIHtcclxuICBsZXQgbW9kdWxlQ2h1bmtzID0gbW9kdWxlQ2h1bmtzTWFwLmdldChtb2R1bGVJZClcclxuICBpZiAoIW1vZHVsZUNodW5rcykge1xyXG4gICAgbW9kdWxlQ2h1bmtzID0gbmV3IFNldChbY2h1bmtQYXRoXSlcclxuICAgIG1vZHVsZUNodW5rc01hcC5zZXQobW9kdWxlSWQsIG1vZHVsZUNodW5rcylcclxuICB9IGVsc2Uge1xyXG4gICAgbW9kdWxlQ2h1bmtzLmFkZChjaHVua1BhdGgpXHJcbiAgfVxyXG5cclxuICBsZXQgY2h1bmtNb2R1bGVzID0gY2h1bmtNb2R1bGVzTWFwLmdldChjaHVua1BhdGgpXHJcbiAgaWYgKCFjaHVua01vZHVsZXMpIHtcclxuICAgIGNodW5rTW9kdWxlcyA9IG5ldyBTZXQoW21vZHVsZUlkXSlcclxuICAgIGNodW5rTW9kdWxlc01hcC5zZXQoY2h1bmtQYXRoLCBjaHVua01vZHVsZXMpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNodW5rTW9kdWxlcy5hZGQobW9kdWxlSWQpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlyc3QgY2h1bmsgdGhhdCBpbmNsdWRlZCBhIG1vZHVsZS5cclxuICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBOb2RlLmpzIGJhY2tlbmQsIGhlbmNlIHdoeSBpdCdzIG1hcmtlZCBhcyB1bnVzZWQgaW4gdGhpc1xyXG4gKiBmaWxlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Rmlyc3RNb2R1bGVDaHVuayhtb2R1bGVJZDogTW9kdWxlSWQpIHtcclxuICBjb25zdCBtb2R1bGVDaHVua1BhdGhzID0gbW9kdWxlQ2h1bmtzTWFwLmdldChtb2R1bGVJZClcclxuICBpZiAobW9kdWxlQ2h1bmtQYXRocyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1vZHVsZUNodW5rUGF0aHMudmFsdWVzKCkubmV4dCgpLnZhbHVlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnN0YW50aWF0ZXMgYSBydW50aW1lIG1vZHVsZS5cclxuICovXHJcbmZ1bmN0aW9uIGluc3RhbnRpYXRlUnVudGltZU1vZHVsZShcclxuICBtb2R1bGVJZDogTW9kdWxlSWQsXHJcbiAgY2h1bmtQYXRoOiBDaHVua1BhdGhcclxuKTogTW9kdWxlIHtcclxuICByZXR1cm4gaW5zdGFudGlhdGVNb2R1bGUobW9kdWxlSWQsIHsgdHlwZTogU291cmNlVHlwZS5SdW50aW1lLCBjaHVua1BhdGggfSlcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgVVJMIHJlbGF0aXZlIHRvIHRoZSBvcmlnaW4gd2hlcmUgYSBjaHVuayBjYW4gYmUgZmV0Y2hlZCBmcm9tLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q2h1bmtSZWxhdGl2ZVVybChjaHVua1BhdGg6IENodW5rUGF0aCB8IENodW5rTGlzdFBhdGgpOiBDaHVua1VybCB7XHJcbiAgcmV0dXJuIGAke0NIVU5LX0JBU0VfUEFUSH0ke2NodW5rUGF0aFxyXG4gICAgLnNwbGl0KCcvJylcclxuICAgIC5tYXAoKHApID0+IGVuY29kZVVSSUNvbXBvbmVudChwKSlcclxuICAgIC5qb2luKCcvJyl9JHtDSFVOS19TVUZGSVhfUEFUSH1gIGFzIENodW5rVXJsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIENodW5rUGF0aCBmcm9tIGEgQ2h1bmtTY3JpcHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYXRoRnJvbVNjcmlwdChjaHVua1NjcmlwdDogQ2h1bmtQYXRoIHwgQ2h1bmtTY3JpcHQpOiBDaHVua1BhdGhcclxuZnVuY3Rpb24gZ2V0UGF0aEZyb21TY3JpcHQoXHJcbiAgY2h1bmtTY3JpcHQ6IENodW5rTGlzdFBhdGggfCBDaHVua0xpc3RTY3JpcHRcclxuKTogQ2h1bmtMaXN0UGF0aFxyXG5mdW5jdGlvbiBnZXRQYXRoRnJvbVNjcmlwdChcclxuICBjaHVua1NjcmlwdDogQ2h1bmtQYXRoIHwgQ2h1bmtMaXN0UGF0aCB8IENodW5rU2NyaXB0IHwgQ2h1bmtMaXN0U2NyaXB0XHJcbik6IENodW5rUGF0aCB8IENodW5rTGlzdFBhdGgge1xyXG4gIGlmICh0eXBlb2YgY2h1bmtTY3JpcHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gY2h1bmtTY3JpcHQgYXMgQ2h1bmtQYXRoIHwgQ2h1bmtMaXN0UGF0aFxyXG4gIH1cclxuICBjb25zdCBjaHVua1VybCA9XHJcbiAgICB0eXBlb2YgVFVSQk9QQUNLX05FWFRfQ0hVTktfVVJMUyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyBUVVJCT1BBQ0tfTkVYVF9DSFVOS19VUkxTLnBvcCgpIVxyXG4gICAgICA6IGNodW5rU2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJykhXHJcbiAgY29uc3Qgc3JjID0gZGVjb2RlVVJJQ29tcG9uZW50KGNodW5rVXJsLnJlcGxhY2UoL1s/I10uKiQvLCAnJykpXHJcbiAgY29uc3QgcGF0aCA9IHNyYy5zdGFydHNXaXRoKENIVU5LX0JBU0VfUEFUSClcclxuICAgID8gc3JjLnNsaWNlKENIVU5LX0JBU0VfUEFUSC5sZW5ndGgpXHJcbiAgICA6IHNyY1xyXG4gIHJldHVybiBwYXRoIGFzIENodW5rUGF0aCB8IENodW5rTGlzdFBhdGhcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtzIGEgY2h1bmsgbGlzdCBhcyBhIHJ1bnRpbWUgY2h1bmsgbGlzdC4gVGhlcmUgY2FuIGJlIG1vcmUgdGhhbiBvbmVcclxuICogcnVudGltZSBjaHVuayBsaXN0LiBGb3IgaW5zdGFuY2UsIGludGVncmF0aW9uIHRlc3RzIGNhbiBoYXZlIG11bHRpcGxlIGNodW5rXHJcbiAqIGdyb3VwcyBsb2FkZWQgYXQgcnVudGltZSwgZWFjaCB3aXRoIGl0cyBvd24gY2h1bmsgbGlzdC5cclxuICovXHJcbmZ1bmN0aW9uIG1hcmtDaHVua0xpc3RBc1J1bnRpbWUoY2h1bmtMaXN0UGF0aDogQ2h1bmtMaXN0UGF0aCkge1xyXG4gIHJ1bnRpbWVDaHVua0xpc3RzLmFkZChjaHVua0xpc3RQYXRoKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckNodW5rKFtcclxuICBjaHVua1NjcmlwdCxcclxuICBjaHVua01vZHVsZXMsXHJcbiAgcnVudGltZVBhcmFtcyxcclxuXTogQ2h1bmtSZWdpc3RyYXRpb24pIHtcclxuICBjb25zdCBjaHVua1BhdGggPSBnZXRQYXRoRnJvbVNjcmlwdChjaHVua1NjcmlwdClcclxuICBmb3IgKGNvbnN0IFttb2R1bGVJZCwgbW9kdWxlRmFjdG9yeV0gb2YgT2JqZWN0LmVudHJpZXMoY2h1bmtNb2R1bGVzKSkge1xyXG4gICAgaWYgKCFtb2R1bGVGYWN0b3JpZXNbbW9kdWxlSWRdKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZUZhY3RvcnkpKSB7XHJcbiAgICAgICAgbGV0IFttb2R1bGVGYWN0b3J5Rm4sIG90aGVySWRzXSA9IG1vZHVsZUZhY3RvcnlcclxuICAgICAgICBtb2R1bGVGYWN0b3JpZXNbbW9kdWxlSWRdID0gbW9kdWxlRmFjdG9yeUZuXHJcbiAgICAgICAgZm9yIChjb25zdCBvdGhlck1vZHVsZUlkIG9mIG90aGVySWRzKSB7XHJcbiAgICAgICAgICBtb2R1bGVGYWN0b3JpZXNbb3RoZXJNb2R1bGVJZF0gPSBtb2R1bGVGYWN0b3J5Rm5cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kdWxlRmFjdG9yaWVzW21vZHVsZUlkXSA9IG1vZHVsZUZhY3RvcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkTW9kdWxlVG9DaHVuayhtb2R1bGVJZCwgY2h1bmtQYXRoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEJBQ0tFTkQucmVnaXN0ZXJDaHVuayhjaHVua1BhdGgsIHJ1bnRpbWVQYXJhbXMpXHJcbn1cclxuXHJcbmNvbnN0IHJlZ2V4SnNVcmwgPSAvXFwuanMoPzpcXD9bXiNdKik/KD86Iy4qKT8kL1xyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gcGF0aC9VUkwgZW5kcyB3aXRoIC5qcywgb3B0aW9uYWxseSBmb2xsb3dlZCBieSA/cXVlcnkgb3IgI2ZyYWdtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gaXNKcyhjaHVua1VybE9yUGF0aDogQ2h1bmtVcmwgfCBDaHVua1BhdGgpOiBib29sZWFuIHtcclxuICByZXR1cm4gcmVnZXhKc1VybC50ZXN0KGNodW5rVXJsT3JQYXRoKVxyXG59XHJcblxyXG5jb25zdCByZWdleENzc1VybCA9IC9cXC5jc3MoPzpcXD9bXiNdKik/KD86Iy4qKT8kL1xyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gcGF0aC9VUkwgZW5kcyB3aXRoIC5jc3MsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnkgP3F1ZXJ5IG9yICNmcmFnbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIGlzQ3NzKGNodW5rVXJsOiBDaHVua1VybCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiByZWdleENzc1VybC50ZXN0KGNodW5rVXJsKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUMsR0FFRCxvREFBb0QsR0FFcEQsNkNBQTZDO0FBQzdDLHlEQUF5RDtBQUV6RCxtRUFBbUU7QUE4Qm5FLElBQUEsQUFBSyxvQ0FBQTtJQUNIOzs7R0FHQztJQUVEOztHQUVDO0lBRUQ7OztHQUdDO1dBYkU7RUFBQTtBQTBDTCxNQUFNLGtCQUFtQyxPQUFPLE1BQU0sQ0FBQztBQUN2RDs7Q0FFQyxHQUNELE1BQU0saUJBQWdDLElBQUk7QUFDMUM7Ozs7OztDQU1DLEdBQ0QsTUFBTSxrQkFBaUQsSUFBSTtBQUMzRDs7Q0FFQyxHQUNELE1BQU0sa0JBQWlELElBQUk7QUFDM0Q7Ozs7Q0FJQyxHQUNELE1BQU0sb0JBQXdDLElBQUk7QUFDbEQ7O0NBRUMsR0FDRCxNQUFNLHFCQUF5RCxJQUFJO0FBQ25FOztDQUVDLEdBQ0QsTUFBTSxxQkFBeUQsSUFBSTtBQUVuRSxNQUFNLG1CQUF1RCxJQUFJO0FBRWpFLE1BQU0sd0JBQTZELElBQUk7QUFFdkUsZUFBZSxVQUNiLE1BQWtCLEVBQ2xCLFNBQW9CO0lBRXBCLElBQUksT0FBTyxjQUFjLFVBQVU7UUFDakMsT0FBTyxj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QkFBaUIsVUFBVTtJQUM3QjtJQUVBLE9BQU8sUUFBUSxhQUFhLENBQUMsV0FBVztBQUMxQztBQUVBLE1BQU0sYUFBYTtBQUNuQjs7Q0FFQyxHQUNELFNBQVMsS0FBSyxjQUFvQztJQUNoRCxPQUFPLFdBQVcsSUFBSSxDQUFDO0FBQ3pCO0FBRUEsTUFBTSxjQUFjO0FBQ3BCOztDQUVDLEdBQ0QsU0FBUyxNQUFNLFFBQWtCO0lBQy9CLE9BQU8sWUFBWSxJQUFJLENBQUM7QUFDMUIiLCJpZ25vcmVMaXN0IjpbMF19fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogNjMzLCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsidHVyYm9wYWNrOi8vL1t0dXJib3BhY2tdL2Jyb3dzZXIvcnVudGltZS9iYXNlL2Rldi1iYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2Rldi1nbG9iYWxzLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9kZXYtcHJvdG9jb2wuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2Rldi1leHRlbnNpb25zLnRzXCIgLz5cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgcnVudGltZSB0eXBlcyBhbmQgZnVuY3Rpb25zIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbFxyXG4gKiBUdXJib3BhY2sgKmRldmVsb3BtZW50KiBFQ01BU2NyaXB0IHJ1bnRpbWVzLlxyXG4gKlxyXG4gKiBJdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBydW50aW1lIGNvZGUgb2YgZWFjaCBydW50aW1lIHJpZ2h0IGFmdGVyIHRoZVxyXG4gKiBzaGFyZWQgcnVudGltZSB1dGlscy5cclxuICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbmNvbnN0IGRldk1vZHVsZUNhY2hlOiBNb2R1bGVDYWNoZTxIb3RNb2R1bGU+ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxyXG5cclxuLy8gVGhpcyBmaWxlIG11c3Qgbm90IHVzZSBgaW1wb3J0YCBhbmQgYGV4cG9ydGAgc3RhdGVtZW50cy4gT3RoZXJ3aXNlLCBpdFxyXG4vLyBiZWNvbWVzIGltcG9zc2libGUgdG8gYXVnbWVudCBpbnRlcmZhY2VzIGRlY2xhcmVkIGluIGA8cmVmZXJlbmNlPmBkIGZpbGVzXHJcbi8vIChlLmcuIGBNb2R1bGVgKS4gSGVuY2UsIHRoZSBuZWVkIGZvciBgaW1wb3J0KClgIGhlcmUuXHJcbnR5cGUgUmVmcmVzaFJ1bnRpbWVHbG9iYWxzID1cclxuICBpbXBvcnQoJ0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvZGlzdC9ydW50aW1lJykuUmVmcmVzaFJ1bnRpbWVHbG9iYWxzXHJcblxyXG5kZWNsYXJlIHZhciAkUmVmcmVzaEhlbHBlcnMkOiBSZWZyZXNoUnVudGltZUdsb2JhbHNbJyRSZWZyZXNoSGVscGVycyQnXVxyXG5kZWNsYXJlIHZhciAkUmVmcmVzaFJlZyQ6IFJlZnJlc2hSdW50aW1lR2xvYmFsc1snJFJlZnJlc2hSZWckJ11cclxuZGVjbGFyZSB2YXIgJFJlZnJlc2hTaWckOiBSZWZyZXNoUnVudGltZUdsb2JhbHNbJyRSZWZyZXNoU2lnJCddXHJcbmRlY2xhcmUgdmFyICRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJDogUmVmcmVzaFJ1bnRpbWVHbG9iYWxzWyckUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQnXVxyXG5cclxudHlwZSBSZWZyZXNoQ29udGV4dCA9IHtcclxuICByZWdpc3RlcjogUmVmcmVzaFJ1bnRpbWVHbG9iYWxzWyckUmVmcmVzaFJlZyQnXVxyXG4gIHNpZ25hdHVyZTogUmVmcmVzaFJ1bnRpbWVHbG9iYWxzWyckUmVmcmVzaFNpZyQnXVxyXG4gIHJlZ2lzdGVyRXhwb3J0czogdHlwZW9mIHJlZ2lzdGVyRXhwb3J0c0FuZFNldHVwQm91bmRhcnlGb3JSZWFjdFJlZnJlc2hcclxufVxyXG5cclxudHlwZSBSZWZyZXNoSGVscGVycyA9IFJlZnJlc2hSdW50aW1lR2xvYmFsc1snJFJlZnJlc2hIZWxwZXJzJCddXHJcblxyXG5pbnRlcmZhY2UgVHVyYm9wYWNrRGV2QmFzZUNvbnRleHQgZXh0ZW5kcyBUdXJib3BhY2tCYXNlQ29udGV4dDxNb2R1bGU+IHtcclxuICBrOiBSZWZyZXNoQ29udGV4dFxyXG4gIFI6IFJlc29sdmVQYXRoRnJvbU1vZHVsZVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVHVyYm9wYWNrRGV2Q29udGV4dCBleHRlbmRzIFR1cmJvcGFja0RldkJhc2VDb250ZXh0IHt9XHJcblxyXG50eXBlIE1vZHVsZUZhY3RvcnkgPSAoXHJcbiAgdGhpczogTW9kdWxlWydleHBvcnRzJ10sXHJcbiAgY29udGV4dDogVHVyYm9wYWNrRGV2QmFzZUNvbnRleHRcclxuKSA9PiB1bmtub3duXHJcblxyXG5pbnRlcmZhY2UgRGV2UnVudGltZUJhY2tlbmQge1xyXG4gIHJlbG9hZENodW5rPzogKGNodW5rVXJsOiBDaHVua1VybCkgPT4gUHJvbWlzZTx2b2lkPlxyXG4gIHVubG9hZENodW5rPzogKGNodW5rVXJsOiBDaHVua1VybCkgPT4gdm9pZFxyXG4gIHJlc3RhcnQ6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY2xhc3MgVXBkYXRlQXBwbHlFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBuYW1lID0gJ1VwZGF0ZUFwcGx5RXJyb3InXHJcblxyXG4gIGRlcGVuZGVuY3lDaGFpbjogTW9kdWxlSWRbXVxyXG5cclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGRlcGVuZGVuY3lDaGFpbjogTW9kdWxlSWRbXSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSlcclxuICAgIHRoaXMuZGVwZW5kZW5jeUNoYWluID0gZGVwZW5kZW5jeUNoYWluXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFwcyBtb2R1bGUgSURzIHRvIHBlcnNpc3RlZCBkYXRhIGJldHdlZW4gZXhlY3V0aW9ucyBvZiB0aGVpciBob3QgbW9kdWxlXHJcbiAqIGltcGxlbWVudGF0aW9uIChgaG90LmRhdGFgKS5cclxuICovXHJcbmNvbnN0IG1vZHVsZUhvdERhdGE6IE1hcDxNb2R1bGVJZCwgSG90RGF0YT4gPSBuZXcgTWFwKClcclxuLyoqXHJcbiAqIE1hcHMgbW9kdWxlIGluc3RhbmNlcyB0byB0aGVpciBob3QgbW9kdWxlIHN0YXRlLlxyXG4gKi9cclxuY29uc3QgbW9kdWxlSG90U3RhdGU6IE1hcDxNb2R1bGUsIEhvdFN0YXRlPiA9IG5ldyBNYXAoKVxyXG4vKipcclxuICogTW9kdWxlcyB0aGF0IGNhbGwgYG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpYCAod2hpbGUgYmVpbmcgdXBkYXRlZCkuXHJcbiAqL1xyXG5jb25zdCBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM6IFNldDxNb2R1bGVJZD4gPSBuZXcgU2V0KClcclxuXHJcbi8qKlxyXG4gKiBHZXRzIG9yIGluc3RhbnRpYXRlcyBhIHJ1bnRpbWUgbW9kdWxlLlxyXG4gKi9cclxuLy8gQHRzLWlnbm9yZVxyXG5mdW5jdGlvbiBnZXRPckluc3RhbnRpYXRlUnVudGltZU1vZHVsZShcclxuICBtb2R1bGVJZDogTW9kdWxlSWQsXHJcbiAgY2h1bmtQYXRoOiBDaHVua1BhdGhcclxuKTogTW9kdWxlIHtcclxuICBjb25zdCBtb2R1bGUgPSBkZXZNb2R1bGVDYWNoZVttb2R1bGVJZF1cclxuICBpZiAobW9kdWxlKSB7XHJcbiAgICBpZiAobW9kdWxlLmVycm9yKSB7XHJcbiAgICAgIHRocm93IG1vZHVsZS5lcnJvclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZHVsZVxyXG4gIH1cclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiBpbnN0YW50aWF0ZU1vZHVsZShtb2R1bGVJZCwgeyB0eXBlOiBTb3VyY2VUeXBlLlJ1bnRpbWUsIGNodW5rUGF0aCB9KVxyXG59XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbW9kdWxlIGZyb20gdGhlIGNhY2hlLCBvciBpbnN0YW50aWF0ZSBpdCBpZiBpdCBpcyBub3QgY2FjaGVkLlxyXG4gKi9cclxuLy8gQHRzLWlnbm9yZSBEZWZpbmVkIGluIGBydW50aW1lLXV0aWxzLnRzYFxyXG5jb25zdCBnZXRPckluc3RhbnRpYXRlTW9kdWxlRnJvbVBhcmVudDogR2V0T3JJbnN0YW50aWF0ZU1vZHVsZUZyb21QYXJlbnQ8XHJcbiAgSG90TW9kdWxlXHJcbj4gPSAoaWQsIHNvdXJjZU1vZHVsZSkgPT4ge1xyXG4gIGlmICghc291cmNlTW9kdWxlLmhvdC5hY3RpdmUpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYFVuZXhwZWN0ZWQgaW1wb3J0IG9mIG1vZHVsZSAke2lkfSBmcm9tIG1vZHVsZSAke3NvdXJjZU1vZHVsZS5pZH0sIHdoaWNoIHdhcyBkZWxldGVkIGJ5IGFuIEhNUiB1cGRhdGVgXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2R1bGUgPSBkZXZNb2R1bGVDYWNoZVtpZF1cclxuXHJcbiAgaWYgKHNvdXJjZU1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGlkKSA9PT0gLTEpIHtcclxuICAgIHNvdXJjZU1vZHVsZS5jaGlsZHJlbi5wdXNoKGlkKVxyXG4gIH1cclxuXHJcbiAgaWYgKG1vZHVsZSkge1xyXG4gICAgaWYgKG1vZHVsZS5wYXJlbnRzLmluZGV4T2Yoc291cmNlTW9kdWxlLmlkKSA9PT0gLTEpIHtcclxuICAgICAgbW9kdWxlLnBhcmVudHMucHVzaChzb3VyY2VNb2R1bGUuaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vZHVsZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGluc3RhbnRpYXRlTW9kdWxlKGlkLCB7XHJcbiAgICB0eXBlOiBTb3VyY2VUeXBlLlBhcmVudCxcclxuICAgIHBhcmVudElkOiBzb3VyY2VNb2R1bGUuaWQsXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zdGFudGlhdGVNb2R1bGUobW9kdWxlSWQ6IE1vZHVsZUlkLCBzb3VyY2U6IFNvdXJjZUluZm8pOiBNb2R1bGUge1xyXG4gIC8vIFdlIGFyZSBpbiBkZXZlbG9wbWVudCwgdGhpcyBpcyBhbHdheXMgYSBzdHJpbmcuXHJcbiAgbGV0IGlkID0gbW9kdWxlSWQgYXMgc3RyaW5nXHJcblxyXG4gIGNvbnN0IG1vZHVsZUZhY3RvcnkgPSBtb2R1bGVGYWN0b3JpZXNbaWRdXHJcbiAgaWYgKHR5cGVvZiBtb2R1bGVGYWN0b3J5ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgbW9kdWxlcyBpbmNvcnJlY3RseSBoYW5kbGUgSE1SIGRpc3Bvc2VzL3VwZGF0ZXMsXHJcbiAgICAvLyBlLmcuIHdoZW4gdGhleSBrZWVwIGEgYHNldFRpbWVvdXRgIGFyb3VuZCB3aGljaCBzdGlsbCBleGVjdXRlcyBvbGQgY29kZVxyXG4gICAgLy8gYW5kIGNvbnRhaW5zIGUuZy4gYSBgcmVxdWlyZShcInNvbWV0aGluZ1wiKWAgY2FsbC5cclxuICAgIGxldCBpbnN0YW50aWF0aW9uUmVhc29uXHJcbiAgICBzd2l0Y2ggKHNvdXJjZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgU291cmNlVHlwZS5SdW50aW1lOlxyXG4gICAgICAgIGluc3RhbnRpYXRpb25SZWFzb24gPSBgYXMgYSBydW50aW1lIGVudHJ5IG9mIGNodW5rICR7c291cmNlLmNodW5rUGF0aH1gXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBTb3VyY2VUeXBlLlBhcmVudDpcclxuICAgICAgICBpbnN0YW50aWF0aW9uUmVhc29uID0gYGJlY2F1c2UgaXQgd2FzIHJlcXVpcmVkIGZyb20gbW9kdWxlICR7c291cmNlLnBhcmVudElkfWBcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIFNvdXJjZVR5cGUuVXBkYXRlOlxyXG4gICAgICAgIGluc3RhbnRpYXRpb25SZWFzb24gPSAnYmVjYXVzZSBvZiBhbiBITVIgdXBkYXRlJ1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaW52YXJpYW50KHNvdXJjZSwgKHNvdXJjZSkgPT4gYFVua25vd24gc291cmNlIHR5cGU6ICR7c291cmNlPy50eXBlfWApXHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBNb2R1bGUgJHtpZH0gd2FzIGluc3RhbnRpYXRlZCAke2luc3RhbnRpYXRpb25SZWFzb259LCBidXQgdGhlIG1vZHVsZSBmYWN0b3J5IGlzIG5vdCBhdmFpbGFibGUuIEl0IG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGluIGFuIEhNUiB1cGRhdGUuYFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaG90RGF0YSA9IG1vZHVsZUhvdERhdGEuZ2V0KGlkKSFcclxuICBjb25zdCB7IGhvdCwgaG90U3RhdGUgfSA9IGNyZWF0ZU1vZHVsZUhvdChpZCwgaG90RGF0YSlcclxuXHJcbiAgbGV0IHBhcmVudHM6IE1vZHVsZUlkW11cclxuICBzd2l0Y2ggKHNvdXJjZS50eXBlKSB7XHJcbiAgICBjYXNlIFNvdXJjZVR5cGUuUnVudGltZTpcclxuICAgICAgcnVudGltZU1vZHVsZXMuYWRkKGlkKVxyXG4gICAgICBwYXJlbnRzID0gW11cclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgU291cmNlVHlwZS5QYXJlbnQ6XHJcbiAgICAgIC8vIE5vIG5lZWQgdG8gYWRkIHRoaXMgbW9kdWxlIGFzIGEgY2hpbGQgb2YgdGhlIHBhcmVudCBtb2R1bGUgaGVyZSwgdGhpc1xyXG4gICAgICAvLyBoYXMgYWxyZWFkeSBiZWVuIHRha2VuIGNhcmUgb2YgaW4gYGdldE9ySW5zdGFudGlhdGVNb2R1bGVGcm9tUGFyZW50YC5cclxuICAgICAgcGFyZW50cyA9IFtzb3VyY2UucGFyZW50SWRdXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIFNvdXJjZVR5cGUuVXBkYXRlOlxyXG4gICAgICBwYXJlbnRzID0gc291cmNlLnBhcmVudHMgfHwgW11cclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGludmFyaWFudChzb3VyY2UsIChzb3VyY2UpID0+IGBVbmtub3duIHNvdXJjZSB0eXBlOiAke3NvdXJjZT8udHlwZX1gKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kdWxlOiBIb3RNb2R1bGUgPSB7XHJcbiAgICBleHBvcnRzOiB7fSxcclxuICAgIGVycm9yOiB1bmRlZmluZWQsXHJcbiAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgaWQ6IGlkLFxyXG4gICAgcGFyZW50cyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG5hbWVzcGFjZU9iamVjdDogdW5kZWZpbmVkLFxyXG4gICAgaG90LFxyXG4gIH1cclxuXHJcbiAgZGV2TW9kdWxlQ2FjaGVbaWRdID0gbW9kdWxlXHJcbiAgbW9kdWxlSG90U3RhdGUuc2V0KG1vZHVsZSwgaG90U3RhdGUpXHJcblxyXG4gIC8vIE5PVEUoYWxleGtpcnN6KSBUaGlzIGNhbiBmYWlsIHdoZW4gdGhlIG1vZHVsZSBlbmNvdW50ZXJzIGEgcnVudGltZSBlcnJvci5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc291cmNlSW5mbzogU291cmNlSW5mbyA9IHsgdHlwZTogU291cmNlVHlwZS5QYXJlbnQsIHBhcmVudElkOiBpZCB9XHJcblxyXG4gICAgcnVuTW9kdWxlRXhlY3V0aW9uSG9va3MobW9kdWxlLCAocmVmcmVzaCkgPT4ge1xyXG4gICAgICBjb25zdCByID0gY29tbW9uSnNSZXF1aXJlLmJpbmQobnVsbCwgbW9kdWxlKVxyXG4gICAgICBtb2R1bGVGYWN0b3J5KFxyXG4gICAgICAgIGF1Z21lbnRDb250ZXh0KHtcclxuICAgICAgICAgIGE6IGFzeW5jTW9kdWxlLmJpbmQobnVsbCwgbW9kdWxlKSxcclxuICAgICAgICAgIGU6IG1vZHVsZS5leHBvcnRzLFxyXG4gICAgICAgICAgcjogY29tbW9uSnNSZXF1aXJlLmJpbmQobnVsbCwgbW9kdWxlKSxcclxuICAgICAgICAgIHQ6IHJ1bnRpbWVSZXF1aXJlLFxyXG4gICAgICAgICAgZjogbW9kdWxlQ29udGV4dCxcclxuICAgICAgICAgIGk6IGVzbUltcG9ydC5iaW5kKG51bGwsIG1vZHVsZSksXHJcbiAgICAgICAgICBzOiBlc21FeHBvcnQuYmluZChudWxsLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBkZXZNb2R1bGVDYWNoZSksXHJcbiAgICAgICAgICBqOiBkeW5hbWljRXhwb3J0LmJpbmQobnVsbCwgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZGV2TW9kdWxlQ2FjaGUpLFxyXG4gICAgICAgICAgdjogZXhwb3J0VmFsdWUuYmluZChudWxsLCBtb2R1bGUsIGRldk1vZHVsZUNhY2hlKSxcclxuICAgICAgICAgIG46IGV4cG9ydE5hbWVzcGFjZS5iaW5kKG51bGwsIG1vZHVsZSwgZGV2TW9kdWxlQ2FjaGUpLFxyXG4gICAgICAgICAgbTogbW9kdWxlLFxyXG4gICAgICAgICAgYzogZGV2TW9kdWxlQ2FjaGUsXHJcbiAgICAgICAgICBNOiBtb2R1bGVGYWN0b3JpZXMsXHJcbiAgICAgICAgICBsOiBsb2FkQ2h1bmsuYmluZChudWxsLCBzb3VyY2VJbmZvKSxcclxuICAgICAgICAgIEw6IGxvYWRDaHVua0J5VXJsLmJpbmQobnVsbCwgc291cmNlSW5mbyksXHJcbiAgICAgICAgICB3OiBsb2FkV2ViQXNzZW1ibHkuYmluZChudWxsLCBzb3VyY2VJbmZvKSxcclxuICAgICAgICAgIHU6IGxvYWRXZWJBc3NlbWJseU1vZHVsZS5iaW5kKG51bGwsIHNvdXJjZUluZm8pLFxyXG4gICAgICAgICAgUDogcmVzb2x2ZUFic29sdXRlUGF0aCxcclxuICAgICAgICAgIFU6IHJlbGF0aXZlVVJMLFxyXG4gICAgICAgICAgazogcmVmcmVzaCxcclxuICAgICAgICAgIFI6IGNyZWF0ZVJlc29sdmVQYXRoRnJvbU1vZHVsZShyKSxcclxuICAgICAgICAgIGI6IGdldFdvcmtlckJsb2JVUkwsXHJcbiAgICAgICAgICB6OiByZXF1aXJlU3R1YixcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBtb2R1bGUuZXJyb3IgPSBlcnJvciBhcyBhbnlcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG5cclxuICBtb2R1bGUubG9hZGVkID0gdHJ1ZVxyXG4gIGlmIChtb2R1bGUubmFtZXNwYWNlT2JqZWN0ICYmIG1vZHVsZS5leHBvcnRzICE9PSBtb2R1bGUubmFtZXNwYWNlT2JqZWN0KSB7XHJcbiAgICAvLyBpbiBjYXNlIG9mIGEgY2lyY3VsYXIgZGVwZW5kZW5jeTogY2pzMSAtPiBlc20yIC0+IGNqczFcclxuICAgIGludGVyb3BFc20obW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5uYW1lc3BhY2VPYmplY3QpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9kdWxlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOT1RFKGFsZXhraXJzeikgV2VicGFjayBoYXMgYSBcIm1vZHVsZSBleGVjdXRpb25cIiBpbnRlcmNlcHRpb24gaG9vayB0aGF0XHJcbiAqIE5leHQuanMnIFJlYWN0IFJlZnJlc2ggcnVudGltZSBob29rcyBpbnRvIHRvIGFkZCBtb2R1bGUgY29udGV4dCB0byB0aGVcclxuICogcmVmcmVzaCByZWdpc3RyeS5cclxuICovXHJcbmZ1bmN0aW9uIHJ1bk1vZHVsZUV4ZWN1dGlvbkhvb2tzKFxyXG4gIG1vZHVsZTogSG90TW9kdWxlLFxyXG4gIGV4ZWN1dGVNb2R1bGU6IChjdHg6IFJlZnJlc2hDb250ZXh0KSA9PiB2b2lkXHJcbikge1xyXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcy4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNvbnN0IGNsZWFudXBSZWFjdFJlZnJlc2hJbnRlcmNlcHQgPVxyXG4gICAgICBnbG9iYWxUaGlzLiRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJChtb2R1bGUuaWQpXHJcbiAgICB0cnkge1xyXG4gICAgICBleGVjdXRlTW9kdWxlKHtcclxuICAgICAgICByZWdpc3RlcjogZ2xvYmFsVGhpcy4kUmVmcmVzaFJlZyQsXHJcbiAgICAgICAgc2lnbmF0dXJlOiBnbG9iYWxUaGlzLiRSZWZyZXNoU2lnJCxcclxuICAgICAgICByZWdpc3RlckV4cG9ydHM6IHJlZ2lzdGVyRXhwb3J0c0FuZFNldHVwQm91bmRhcnlGb3JSZWFjdFJlZnJlc2gsXHJcbiAgICAgIH0pXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvLyBBbHdheXMgY2xlYW51cCB0aGUgaW50ZXJjZXB0LCBldmVuIGlmIG1vZHVsZSBleGVjdXRpb24gZmFpbGVkLlxyXG4gICAgICBjbGVhbnVwUmVhY3RSZWZyZXNoSW50ZXJjZXB0KClcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gSWYgdGhlIHJlYWN0IHJlZnJlc2ggaG9va3MgYXJlIG5vdCBpbnN0YWxsZWQgd2UgbmVlZCB0byBiaW5kIGR1bW15IGZ1bmN0aW9ucy5cclxuICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQgd2hlbiBydW5uaW5nIGluIGEgV2ViIFdvcmtlci4gIEl0IGlzIGFsc28gY29tbW9uIGluIHNvbWUgb2ZcclxuICAgIC8vIG91ciB0ZXN0IGVudmlyb25tZW50cy5cclxuICAgIGV4ZWN1dGVNb2R1bGUoe1xyXG4gICAgICByZWdpc3RlcjogKF90eXBlLCBfaWQpID0+IHt9LFxyXG4gICAgICBzaWduYXR1cmU6ICgpID0+IChfdHlwZSkgPT4ge30sXHJcbiAgICAgIHJlZ2lzdGVyRXhwb3J0czogKF9tb2R1bGUsIF9oZWxwZXJzKSA9PiB7fSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBpcyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Jsb2IvMzQ2Njg2MmQ5ZGM5YzhiYjMxMzE3MTIxMzRkMzg3NTdiOTE4ZDFjMC9wYWNrYWdlcy9yZWFjdC1yZWZyZXNoLXV0aWxzL2ludGVybmFsL1JlYWN0UmVmcmVzaE1vZHVsZS5ydW50aW1lLnRzXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckV4cG9ydHNBbmRTZXR1cEJvdW5kYXJ5Rm9yUmVhY3RSZWZyZXNoKFxyXG4gIG1vZHVsZTogSG90TW9kdWxlLFxyXG4gIGhlbHBlcnM6IFJlZnJlc2hIZWxwZXJzXHJcbikge1xyXG4gIGNvbnN0IGN1cnJlbnRFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHNcclxuICBjb25zdCBwcmV2RXhwb3J0cyA9IG1vZHVsZS5ob3QuZGF0YS5wcmV2RXhwb3J0cyA/PyBudWxsXHJcblxyXG4gIGhlbHBlcnMucmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoKGN1cnJlbnRFeHBvcnRzLCBtb2R1bGUuaWQpXHJcblxyXG4gIC8vIEEgbW9kdWxlIGNhbiBiZSBhY2NlcHRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIGl0cyBleHBvcnRzLCBlLmcuIHdoZW5cclxuICAvLyBpdCBpcyBhIFJlZnJlc2ggQm91bmRhcnkuXHJcbiAgaWYgKGhlbHBlcnMuaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShjdXJyZW50RXhwb3J0cykpIHtcclxuICAgIC8vIFNhdmUgdGhlIHByZXZpb3VzIGV4cG9ydHMgb24gdXBkYXRlLCBzbyB3ZSBjYW4gY29tcGFyZSB0aGUgYm91bmRhcnlcclxuICAgIC8vIHNpZ25hdHVyZXMuXHJcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5wcmV2RXhwb3J0cyA9IGN1cnJlbnRFeHBvcnRzXHJcbiAgICB9KVxyXG4gICAgLy8gVW5jb25kaXRpb25hbGx5IGFjY2VwdCBhbiB1cGRhdGUgdG8gdGhpcyBtb2R1bGUsIHdlJ2xsIGNoZWNrIGlmIGl0J3NcclxuICAgIC8vIHN0aWxsIGEgUmVmcmVzaCBCb3VuZGFyeSBsYXRlci5cclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcclxuXHJcbiAgICAvLyBUaGlzIGZpZWxkIGlzIHNldCB3aGVuIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoaXMgbW9kdWxlIHdhcyBhXHJcbiAgICAvLyBSZWZyZXNoIEJvdW5kYXJ5LCBsZXR0aW5nIHVzIGtub3cgd2UgbmVlZCB0byBjaGVjayBmb3IgaW52YWxpZGF0aW9uIG9yXHJcbiAgICAvLyBlbnF1ZXVlIGFuIHVwZGF0ZS5cclxuICAgIGlmIChwcmV2RXhwb3J0cyAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBBIGJvdW5kYXJ5IGNhbiBiZWNvbWUgaW5lbGlnaWJsZSBpZiBpdHMgZXhwb3J0cyBhcmUgaW5jb21wYXRpYmxlXHJcbiAgICAgIC8vIHdpdGggdGhlIHByZXZpb3VzIGV4cG9ydHMuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIEZvciBleGFtcGxlLCBpZiB5b3UgYWRkL3JlbW92ZS9jaGFuZ2UgZXhwb3J0cywgd2UnbGwgd2FudCB0b1xyXG4gICAgICAvLyByZS1leGVjdXRlIHRoZSBpbXBvcnRpbmcgbW9kdWxlcywgYW5kIGZvcmNlIHRob3NlIGNvbXBvbmVudHMgdG9cclxuICAgICAgLy8gcmUtcmVuZGVyLiBTaW1pbGFybHksIGlmIHlvdSBjb252ZXJ0IGEgY2xhc3MgY29tcG9uZW50IHRvIGFcclxuICAgICAgLy8gZnVuY3Rpb24sIHdlIHdhbnQgdG8gaW52YWxpZGF0ZSB0aGUgYm91bmRhcnkuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBoZWxwZXJzLnNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShcclxuICAgICAgICAgIGhlbHBlcnMuZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKHByZXZFeHBvcnRzKSxcclxuICAgICAgICAgIGhlbHBlcnMuZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKGN1cnJlbnRFeHBvcnRzKVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlVXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBTaW5jZSB3ZSBqdXN0IGV4ZWN1dGVkIHRoZSBjb2RlIGZvciB0aGUgbW9kdWxlLCBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlXHJcbiAgICAvLyBuZXcgZXhwb3J0cyBtYWRlIGl0IGluZWxpZ2libGUgZm9yIGJlaW5nIGEgYm91bmRhcnkuXHJcbiAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgdGhlIGNhc2Ugd2hlbiB3ZSB3ZXJlIF9wcmV2aW91c2x5XyBhIGJvdW5kYXJ5LFxyXG4gICAgLy8gYmVjYXVzZSB3ZSBhbHJlYWR5IGFjY2VwdGVkIHRoaXMgdXBkYXRlIChhY2NpZGVudGFsIHNpZGUgZWZmZWN0KS5cclxuICAgIGNvbnN0IGlzTm9Mb25nZXJBQm91bmRhcnkgPSBwcmV2RXhwb3J0cyAhPT0gbnVsbFxyXG4gICAgaWYgKGlzTm9Mb25nZXJBQm91bmRhcnkpIHtcclxuICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERlcGVuZGVuY3lDaGFpbihkZXBlbmRlbmN5Q2hhaW46IE1vZHVsZUlkW10pOiBzdHJpbmcge1xyXG4gIHJldHVybiBgRGVwZW5kZW5jeSBjaGFpbjogJHtkZXBlbmRlbmN5Q2hhaW4uam9pbignIC0+ICcpfWBcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZU91dGRhdGVkTW9kdWxlcyhcclxuICBhZGRlZDogTWFwPE1vZHVsZUlkLCBFY21hc2NyaXB0TW9kdWxlRW50cnkgfCB1bmRlZmluZWQ+LFxyXG4gIG1vZGlmaWVkOiBNYXA8TW9kdWxlSWQsIEVjbWFzY3JpcHRNb2R1bGVFbnRyeT5cclxuKToge1xyXG4gIG91dGRhdGVkTW9kdWxlczogU2V0PE1vZHVsZUlkPlxyXG4gIG5ld01vZHVsZUZhY3RvcmllczogTWFwPE1vZHVsZUlkLCBNb2R1bGVGYWN0b3J5PlxyXG59IHtcclxuICBjb25zdCBuZXdNb2R1bGVGYWN0b3JpZXMgPSBuZXcgTWFwPE1vZHVsZUlkLCBNb2R1bGVGYWN0b3J5PigpXHJcblxyXG4gIGZvciAoY29uc3QgW21vZHVsZUlkLCBlbnRyeV0gb2YgYWRkZWQpIHtcclxuICAgIGlmIChlbnRyeSAhPSBudWxsKSB7XHJcbiAgICAgIG5ld01vZHVsZUZhY3Rvcmllcy5zZXQobW9kdWxlSWQsIF9ldmFsKGVudHJ5KSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG91dGRhdGVkTW9kdWxlcyA9IGNvbXB1dGVkSW52YWxpZGF0ZWRNb2R1bGVzKG1vZGlmaWVkLmtleXMoKSlcclxuXHJcbiAgZm9yIChjb25zdCBbbW9kdWxlSWQsIGVudHJ5XSBvZiBtb2RpZmllZCkge1xyXG4gICAgbmV3TW9kdWxlRmFjdG9yaWVzLnNldChtb2R1bGVJZCwgX2V2YWwoZW50cnkpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgb3V0ZGF0ZWRNb2R1bGVzLCBuZXdNb2R1bGVGYWN0b3JpZXMgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlZEludmFsaWRhdGVkTW9kdWxlcyhcclxuICBpbnZhbGlkYXRlZDogSXRlcmFibGU8TW9kdWxlSWQ+XHJcbik6IFNldDxNb2R1bGVJZD4ge1xyXG4gIGNvbnN0IG91dGRhdGVkTW9kdWxlcyA9IG5ldyBTZXQ8TW9kdWxlSWQ+KClcclxuXHJcbiAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBpbnZhbGlkYXRlZCkge1xyXG4gICAgY29uc3QgZWZmZWN0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKVxyXG5cclxuICAgIHN3aXRjaCAoZWZmZWN0LnR5cGUpIHtcclxuICAgICAgY2FzZSAndW5hY2NlcHRlZCc6XHJcbiAgICAgICAgdGhyb3cgbmV3IFVwZGF0ZUFwcGx5RXJyb3IoXHJcbiAgICAgICAgICBgY2Fubm90IGFwcGx5IHVwZGF0ZTogdW5hY2NlcHRlZCBtb2R1bGUuICR7Zm9ybWF0RGVwZW5kZW5jeUNoYWluKFxyXG4gICAgICAgICAgICBlZmZlY3QuZGVwZW5kZW5jeUNoYWluXHJcbiAgICAgICAgICApfS5gLFxyXG4gICAgICAgICAgZWZmZWN0LmRlcGVuZGVuY3lDaGFpblxyXG4gICAgICAgIClcclxuICAgICAgY2FzZSAnc2VsZi1kZWNsaW5lZCc6XHJcbiAgICAgICAgdGhyb3cgbmV3IFVwZGF0ZUFwcGx5RXJyb3IoXHJcbiAgICAgICAgICBgY2Fubm90IGFwcGx5IHVwZGF0ZTogc2VsZi1kZWNsaW5lZCBtb2R1bGUuICR7Zm9ybWF0RGVwZW5kZW5jeUNoYWluKFxyXG4gICAgICAgICAgICBlZmZlY3QuZGVwZW5kZW5jeUNoYWluXHJcbiAgICAgICAgICApfS5gLFxyXG4gICAgICAgICAgZWZmZWN0LmRlcGVuZGVuY3lDaGFpblxyXG4gICAgICAgIClcclxuICAgICAgY2FzZSAnYWNjZXB0ZWQnOlxyXG4gICAgICAgIGZvciAoY29uc3Qgb3V0ZGF0ZWRNb2R1bGVJZCBvZiBlZmZlY3Qub3V0ZGF0ZWRNb2R1bGVzKSB7XHJcbiAgICAgICAgICBvdXRkYXRlZE1vZHVsZXMuYWRkKG91dGRhdGVkTW9kdWxlSWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIC8vIFRPRE8oYWxleGtpcnN6KSBEZXBlbmRlbmNpZXM6IGhhbmRsZSBkZXBlbmRlbmNpZXMgZWZmZWN0cy5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpbnZhcmlhbnQoZWZmZWN0LCAoZWZmZWN0KSA9PiBgVW5rbm93biBlZmZlY3QgdHlwZTogJHtlZmZlY3Q/LnR5cGV9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRkYXRlZE1vZHVsZXNcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZU91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyhcclxuICBvdXRkYXRlZE1vZHVsZXM6IEl0ZXJhYmxlPE1vZHVsZUlkPlxyXG4pOiB7IG1vZHVsZUlkOiBNb2R1bGVJZDsgZXJyb3JIYW5kbGVyOiB0cnVlIHwgRnVuY3Rpb24gfVtdIHtcclxuICBjb25zdCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXM6IHtcclxuICAgIG1vZHVsZUlkOiBNb2R1bGVJZFxyXG4gICAgZXJyb3JIYW5kbGVyOiB0cnVlIHwgRnVuY3Rpb25cclxuICB9W10gPSBbXVxyXG4gIGZvciAoY29uc3QgbW9kdWxlSWQgb2Ygb3V0ZGF0ZWRNb2R1bGVzKSB7XHJcbiAgICBjb25zdCBtb2R1bGUgPSBkZXZNb2R1bGVDYWNoZVttb2R1bGVJZF1cclxuICAgIGNvbnN0IGhvdFN0YXRlID0gbW9kdWxlSG90U3RhdGUuZ2V0KG1vZHVsZSkhXHJcbiAgICBpZiAobW9kdWxlICYmIGhvdFN0YXRlLnNlbGZBY2NlcHRlZCAmJiAhaG90U3RhdGUuc2VsZkludmFsaWRhdGVkKSB7XHJcbiAgICAgIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcclxuICAgICAgICBtb2R1bGVJZCxcclxuICAgICAgICBlcnJvckhhbmRsZXI6IGhvdFN0YXRlLnNlbGZBY2NlcHRlZCxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcywgZGVsZXRlcywgYW5kIG1vdmVzIG1vZHVsZXMgYmV0d2VlbiBjaHVua3MuIFRoaXMgbXVzdCBoYXBwZW4gYmVmb3JlIHRoZVxyXG4gKiBkaXNwb3NlIHBoYXNlIGFzIGl0IG5lZWRzIHRvIGtub3cgd2hpY2ggbW9kdWxlcyB3ZXJlIHJlbW92ZWQgZnJvbSBhbGwgY2h1bmtzLFxyXG4gKiB3aGljaCB3ZSBjYW4gb25seSBjb21wdXRlICphZnRlciogdGFraW5nIGNhcmUgb2YgYWRkZWQgYW5kIG1vdmVkIG1vZHVsZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVDaHVua3NQaGFzZShcclxuICBjaHVua3NBZGRlZE1vZHVsZXM6IE1hcDxDaHVua1BhdGgsIFNldDxNb2R1bGVJZD4+LFxyXG4gIGNodW5rc0RlbGV0ZWRNb2R1bGVzOiBNYXA8Q2h1bmtQYXRoLCBTZXQ8TW9kdWxlSWQ+PlxyXG4pOiB7IGRpc3Bvc2VkTW9kdWxlczogU2V0PE1vZHVsZUlkPiB9IHtcclxuICBmb3IgKGNvbnN0IFtjaHVua1BhdGgsIGFkZGVkTW9kdWxlSWRzXSBvZiBjaHVua3NBZGRlZE1vZHVsZXMpIHtcclxuICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgYWRkZWRNb2R1bGVJZHMpIHtcclxuICAgICAgYWRkTW9kdWxlVG9DaHVuayhtb2R1bGVJZCwgY2h1bmtQYXRoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcG9zZWRNb2R1bGVzOiBTZXQ8TW9kdWxlSWQ+ID0gbmV3IFNldCgpXHJcbiAgZm9yIChjb25zdCBbY2h1bmtQYXRoLCBhZGRlZE1vZHVsZUlkc10gb2YgY2h1bmtzRGVsZXRlZE1vZHVsZXMpIHtcclxuICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgYWRkZWRNb2R1bGVJZHMpIHtcclxuICAgICAgaWYgKHJlbW92ZU1vZHVsZUZyb21DaHVuayhtb2R1bGVJZCwgY2h1bmtQYXRoKSkge1xyXG4gICAgICAgIGRpc3Bvc2VkTW9kdWxlcy5hZGQobW9kdWxlSWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IGRpc3Bvc2VkTW9kdWxlcyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3Bvc2VQaGFzZShcclxuICBvdXRkYXRlZE1vZHVsZXM6IEl0ZXJhYmxlPE1vZHVsZUlkPixcclxuICBkaXNwb3NlZE1vZHVsZXM6IEl0ZXJhYmxlPE1vZHVsZUlkPlxyXG4pOiB7IG91dGRhdGVkTW9kdWxlUGFyZW50czogTWFwPE1vZHVsZUlkLCBBcnJheTxNb2R1bGVJZD4+IH0ge1xyXG4gIGZvciAoY29uc3QgbW9kdWxlSWQgb2Ygb3V0ZGF0ZWRNb2R1bGVzKSB7XHJcbiAgICBkaXNwb3NlTW9kdWxlKG1vZHVsZUlkLCAncmVwbGFjZScpXHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIGRpc3Bvc2VkTW9kdWxlcykge1xyXG4gICAgZGlzcG9zZU1vZHVsZShtb2R1bGVJZCwgJ2NsZWFyJylcclxuICB9XHJcblxyXG4gIC8vIFJlbW92aW5nIG1vZHVsZXMgZnJvbSB0aGUgbW9kdWxlIGNhY2hlIGlzIGEgc2VwYXJhdGUgc3RlcC5cclxuICAvLyBXZSBhbHNvIHdhbnQgdG8ga2VlcCB0cmFjayBvZiBwcmV2aW91cyBwYXJlbnRzIG9mIHRoZSBvdXRkYXRlZCBtb2R1bGVzLlxyXG4gIGNvbnN0IG91dGRhdGVkTW9kdWxlUGFyZW50cyA9IG5ldyBNYXAoKVxyXG4gIGZvciAoY29uc3QgbW9kdWxlSWQgb2Ygb3V0ZGF0ZWRNb2R1bGVzKSB7XHJcbiAgICBjb25zdCBvbGRNb2R1bGUgPSBkZXZNb2R1bGVDYWNoZVttb2R1bGVJZF1cclxuICAgIG91dGRhdGVkTW9kdWxlUGFyZW50cy5zZXQobW9kdWxlSWQsIG9sZE1vZHVsZT8ucGFyZW50cylcclxuICAgIGRlbGV0ZSBkZXZNb2R1bGVDYWNoZVttb2R1bGVJZF1cclxuICB9XHJcblxyXG4gIC8vIFRPRE8oYWxleGtpcnN6KSBEZXBlbmRlbmNpZXM6IHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlXHJcbiAgLy8gY2hpbGRyZW4uXHJcblxyXG4gIHJldHVybiB7IG91dGRhdGVkTW9kdWxlUGFyZW50cyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwb3NlcyBvZiBhbiBpbnN0YW5jZSBvZiBhIG1vZHVsZS5cclxuICpcclxuICogUmV0dXJucyB0aGUgcGVyc2lzdGVudCBob3QgZGF0YSB0aGF0IHNob3VsZCBiZSBrZXB0IGZvciB0aGUgbmV4dCBtb2R1bGVcclxuICogaW5zdGFuY2UuXHJcbiAqXHJcbiAqIE5PVEU6IG1vZGUgPSBcInJlcGxhY2VcIiB3aWxsIG5vdCByZW1vdmUgbW9kdWxlcyBmcm9tIHRoZSBkZXZNb2R1bGVDYWNoZVxyXG4gKiBUaGlzIG11c3QgYmUgZG9uZSBpbiBhIHNlcGFyYXRlIHN0ZXAgYWZ0ZXJ3YXJkcy5cclxuICogVGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSBhbGwgbW9kdWxlcyBuZWVkIHRvIGJlIGRpc3Bvc2VkIHRvIHVwZGF0ZSB0aGVcclxuICogcGFyZW50L2NoaWxkIHJlbGF0aW9uc2hpcHMgYmVmb3JlIHRoZXkgYXJlIGFjdHVhbGx5IHJlbW92ZWQgZnJvbSB0aGUgZGV2TW9kdWxlQ2FjaGUuXHJcbiAqIElmIHRoaXMgd2FzIGRvbmUgaW4gdGhpcyBtZXRob2QsIHRoZSBmb2xsb3dpbmcgZGlzcG9zZU1vZHVsZSBjYWxscyB3b24ndCBmaW5kXHJcbiAqIHRoZSBtb2R1bGUgZnJvbSB0aGUgbW9kdWxlIGlkIGluIHRoZSBjYWNoZS5cclxuICovXHJcbmZ1bmN0aW9uIGRpc3Bvc2VNb2R1bGUobW9kdWxlSWQ6IE1vZHVsZUlkLCBtb2RlOiAnY2xlYXInIHwgJ3JlcGxhY2UnKSB7XHJcbiAgY29uc3QgbW9kdWxlID0gZGV2TW9kdWxlQ2FjaGVbbW9kdWxlSWRdXHJcbiAgaWYgKCFtb2R1bGUpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaG90U3RhdGUgPSBtb2R1bGVIb3RTdGF0ZS5nZXQobW9kdWxlKSFcclxuICBjb25zdCBkYXRhID0ge31cclxuXHJcbiAgLy8gUnVuIHRoZSBgaG90LmRpc3Bvc2VgIGhhbmRsZXIsIGlmIGFueSwgcGFzc2luZyBpbiB0aGUgcGVyc2lzdGVudFxyXG4gIC8vIGBob3QuZGF0YWAgb2JqZWN0LlxyXG4gIGZvciAoY29uc3QgZGlzcG9zZUhhbmRsZXIgb2YgaG90U3RhdGUuZGlzcG9zZUhhbmRsZXJzKSB7XHJcbiAgICBkaXNwb3NlSGFuZGxlcihkYXRhKVxyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyB1c2VkIHRvIHdhcm4gaW4gYGdldE9ySW5zdGFudGlhdGVNb2R1bGVGcm9tUGFyZW50YCB3aGVuIGEgZGlzcG9zZWRcclxuICAvLyBtb2R1bGUgaXMgc3RpbGwgaW1wb3J0aW5nIG90aGVyIG1vZHVsZXMuXHJcbiAgbW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICBtb2R1bGVIb3RTdGF0ZS5kZWxldGUobW9kdWxlKVxyXG5cclxuICAvLyBUT0RPKGFsZXhraXJzeikgRGVwZW5kZW5jaWVzOiBkZWxldGUgdGhlIG1vZHVsZSBmcm9tIG91dGRhdGVkIGRlcHMuXHJcblxyXG4gIC8vIFJlbW92ZSB0aGUgZGlzcG9zZWQgbW9kdWxlIGZyb20gaXRzIGNoaWxkcmVuJ3MgcGFyZW50IGxpc3QuXHJcbiAgLy8gSXQgd2lsbCBiZSBhZGRlZCBiYWNrIG9uY2UgdGhlIG1vZHVsZSByZS1pbnN0YW50aWF0ZXMgYW5kIGltcG9ydHMgaXRzXHJcbiAgLy8gY2hpbGRyZW4gYWdhaW4uXHJcbiAgZm9yIChjb25zdCBjaGlsZElkIG9mIG1vZHVsZS5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgY2hpbGQgPSBkZXZNb2R1bGVDYWNoZVtjaGlsZElkXVxyXG4gICAgaWYgKCFjaGlsZCkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGUuaWQpXHJcbiAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgY2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICBjYXNlICdjbGVhcic6XHJcbiAgICAgIGRlbGV0ZSBkZXZNb2R1bGVDYWNoZVttb2R1bGUuaWRdXHJcbiAgICAgIG1vZHVsZUhvdERhdGEuZGVsZXRlKG1vZHVsZS5pZClcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3JlcGxhY2UnOlxyXG4gICAgICBtb2R1bGVIb3REYXRhLnNldChtb2R1bGUuaWQsIGRhdGEpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBpbnZhcmlhbnQobW9kZSwgKG1vZGUpID0+IGBpbnZhbGlkIG1vZGU6ICR7bW9kZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlQaGFzZShcclxuICBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXM6IHtcclxuICAgIG1vZHVsZUlkOiBNb2R1bGVJZFxyXG4gICAgZXJyb3JIYW5kbGVyOiB0cnVlIHwgRnVuY3Rpb25cclxuICB9W10sXHJcbiAgbmV3TW9kdWxlRmFjdG9yaWVzOiBNYXA8TW9kdWxlSWQsIE1vZHVsZUZhY3Rvcnk+LFxyXG4gIG91dGRhdGVkTW9kdWxlUGFyZW50czogTWFwPE1vZHVsZUlkLCBBcnJheTxNb2R1bGVJZD4+LFxyXG4gIHJlcG9ydEVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWRcclxuKSB7XHJcbiAgLy8gVXBkYXRlIG1vZHVsZSBmYWN0b3JpZXMuXHJcbiAgZm9yIChjb25zdCBbbW9kdWxlSWQsIGZhY3RvcnldIG9mIG5ld01vZHVsZUZhY3Rvcmllcy5lbnRyaWVzKCkpIHtcclxuICAgIG1vZHVsZUZhY3Rvcmllc1ttb2R1bGVJZF0gPSBmYWN0b3J5XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPKGFsZXhraXJzeikgUnVuIG5ldyBydW50aW1lIGVudHJpZXMgaGVyZS5cclxuXHJcbiAgLy8gVE9ETyhhbGV4a2lyc3opIERlcGVuZGVuY2llczogY2FsbCBhY2NlcHQgaGFuZGxlcnMgZm9yIG91dGRhdGVkIGRlcHMuXHJcblxyXG4gIC8vIFJlLWluc3RhbnRpYXRlIGFsbCBvdXRkYXRlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMuXHJcbiAgZm9yIChjb25zdCB7IG1vZHVsZUlkLCBlcnJvckhhbmRsZXIgfSBvZiBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGluc3RhbnRpYXRlTW9kdWxlKG1vZHVsZUlkLCB7XHJcbiAgICAgICAgdHlwZTogU291cmNlVHlwZS5VcGRhdGUsXHJcbiAgICAgICAgcGFyZW50czogb3V0ZGF0ZWRNb2R1bGVQYXJlbnRzLmdldChtb2R1bGVJZCksXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKHR5cGVvZiBlcnJvckhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZXJyb3JIYW5kbGVyKGVyciwgeyBtb2R1bGVJZCwgbW9kdWxlOiBkZXZNb2R1bGVDYWNoZVttb2R1bGVJZF0gfSlcclxuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XHJcbiAgICAgICAgICByZXBvcnRFcnJvcihlcnIyKVxyXG4gICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXBvcnRFcnJvcihlcnIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VXBkYXRlKHVwZGF0ZTogUGFydGlhbFVwZGF0ZSkge1xyXG4gIHN3aXRjaCAodXBkYXRlLnR5cGUpIHtcclxuICAgIGNhc2UgJ0NodW5rTGlzdFVwZGF0ZSc6XHJcbiAgICAgIGFwcGx5Q2h1bmtMaXN0VXBkYXRlKHVwZGF0ZSlcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGludmFyaWFudCh1cGRhdGUsICh1cGRhdGUpID0+IGBVbmtub3duIHVwZGF0ZSB0eXBlOiAke3VwZGF0ZS50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNodW5rTGlzdFVwZGF0ZSh1cGRhdGU6IENodW5rTGlzdFVwZGF0ZSkge1xyXG4gIGlmICh1cGRhdGUubWVyZ2VkICE9IG51bGwpIHtcclxuICAgIGZvciAoY29uc3QgbWVyZ2VkIG9mIHVwZGF0ZS5tZXJnZWQpIHtcclxuICAgICAgc3dpdGNoIChtZXJnZWQudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0VjbWFzY3JpcHRNZXJnZWRVcGRhdGUnOlxyXG4gICAgICAgICAgYXBwbHlFY21hc2NyaXB0TWVyZ2VkVXBkYXRlKG1lcmdlZClcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGludmFyaWFudChtZXJnZWQsIChtZXJnZWQpID0+IGBVbmtub3duIG1lcmdlZCB0eXBlOiAke21lcmdlZC50eXBlfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh1cGRhdGUuY2h1bmtzICE9IG51bGwpIHtcclxuICAgIGZvciAoY29uc3QgW2NodW5rUGF0aCwgY2h1bmtVcGRhdGVdIG9mIE9iamVjdC5lbnRyaWVzKFxyXG4gICAgICB1cGRhdGUuY2h1bmtzXHJcbiAgICApIGFzIEFycmF5PFtDaHVua1BhdGgsIENodW5rVXBkYXRlXT4pIHtcclxuICAgICAgY29uc3QgY2h1bmtVcmwgPSBnZXRDaHVua1JlbGF0aXZlVXJsKGNodW5rUGF0aClcclxuXHJcbiAgICAgIHN3aXRjaCAoY2h1bmtVcGRhdGUudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2FkZGVkJzpcclxuICAgICAgICAgIEJBQ0tFTkQubG9hZENodW5rKGNodW5rVXJsLCB7IHR5cGU6IFNvdXJjZVR5cGUuVXBkYXRlIH0pXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ3RvdGFsJzpcclxuICAgICAgICAgIERFVl9CQUNLRU5ELnJlbG9hZENodW5rPy4oY2h1bmtVcmwpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2RlbGV0ZWQnOlxyXG4gICAgICAgICAgREVWX0JBQ0tFTkQudW5sb2FkQ2h1bms/LihjaHVua1VybClcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAncGFydGlhbCc6XHJcbiAgICAgICAgICBpbnZhcmlhbnQoXHJcbiAgICAgICAgICAgIGNodW5rVXBkYXRlLmluc3RydWN0aW9uLFxyXG4gICAgICAgICAgICAoaW5zdHJ1Y3Rpb24pID0+XHJcbiAgICAgICAgICAgICAgYFVua25vd24gcGFydGlhbCBpbnN0cnVjdGlvbjogJHtKU09OLnN0cmluZ2lmeShpbnN0cnVjdGlvbil9LmBcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGludmFyaWFudChcclxuICAgICAgICAgICAgY2h1bmtVcGRhdGUsXHJcbiAgICAgICAgICAgIChjaHVua1VwZGF0ZSkgPT4gYFVua25vd24gY2h1bmsgdXBkYXRlIHR5cGU6ICR7Y2h1bmtVcGRhdGUudHlwZX1gXHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5RWNtYXNjcmlwdE1lcmdlZFVwZGF0ZSh1cGRhdGU6IEVjbWFzY3JpcHRNZXJnZWRVcGRhdGUpIHtcclxuICBjb25zdCB7IGVudHJpZXMgPSB7fSwgY2h1bmtzID0ge30gfSA9IHVwZGF0ZVxyXG4gIGNvbnN0IHsgYWRkZWQsIG1vZGlmaWVkLCBjaHVua3NBZGRlZCwgY2h1bmtzRGVsZXRlZCB9ID0gY29tcHV0ZUNoYW5nZWRNb2R1bGVzKFxyXG4gICAgZW50cmllcyxcclxuICAgIGNodW5rc1xyXG4gIClcclxuICBjb25zdCB7IG91dGRhdGVkTW9kdWxlcywgbmV3TW9kdWxlRmFjdG9yaWVzIH0gPSBjb21wdXRlT3V0ZGF0ZWRNb2R1bGVzKFxyXG4gICAgYWRkZWQsXHJcbiAgICBtb2RpZmllZFxyXG4gIClcclxuICBjb25zdCB7IGRpc3Bvc2VkTW9kdWxlcyB9ID0gdXBkYXRlQ2h1bmtzUGhhc2UoY2h1bmtzQWRkZWQsIGNodW5rc0RlbGV0ZWQpXHJcblxyXG4gIGFwcGx5SW50ZXJuYWwob3V0ZGF0ZWRNb2R1bGVzLCBkaXNwb3NlZE1vZHVsZXMsIG5ld01vZHVsZUZhY3RvcmllcylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMob3V0ZGF0ZWRNb2R1bGVzOiBTZXQ8TW9kdWxlSWQ+KSB7XHJcbiAgaWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5zaXplID4gMCkge1xyXG4gICAgY29tcHV0ZWRJbnZhbGlkYXRlZE1vZHVsZXMocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKS5mb3JFYWNoKChtb2R1bGVJZCkgPT4ge1xyXG4gICAgICBvdXRkYXRlZE1vZHVsZXMuYWRkKG1vZHVsZUlkKVxyXG4gICAgfSlcclxuXHJcbiAgICBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuY2xlYXIoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dGRhdGVkTW9kdWxlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUludGVybmFsKFxyXG4gIG91dGRhdGVkTW9kdWxlczogU2V0PE1vZHVsZUlkPixcclxuICBkaXNwb3NlZE1vZHVsZXM6IEl0ZXJhYmxlPE1vZHVsZUlkPixcclxuICBuZXdNb2R1bGVGYWN0b3JpZXM6IE1hcDxNb2R1bGVJZCwgTW9kdWxlRmFjdG9yeT5cclxuKSB7XHJcbiAgb3V0ZGF0ZWRNb2R1bGVzID0gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMob3V0ZGF0ZWRNb2R1bGVzKVxyXG5cclxuICBjb25zdCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPVxyXG4gICAgY29tcHV0ZU91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyhvdXRkYXRlZE1vZHVsZXMpXHJcblxyXG4gIGNvbnN0IHsgb3V0ZGF0ZWRNb2R1bGVQYXJlbnRzIH0gPSBkaXNwb3NlUGhhc2UoXHJcbiAgICBvdXRkYXRlZE1vZHVsZXMsXHJcbiAgICBkaXNwb3NlZE1vZHVsZXNcclxuICApXHJcblxyXG4gIC8vIHdlIHdhbnQgdG8gY29udGludWUgb24gZXJyb3IgYW5kIG9ubHkgdGhyb3cgdGhlIGVycm9yIGFmdGVyIHdlIHRyaWVkIGFwcGx5aW5nIGFsbCB1cGRhdGVzXHJcbiAgbGV0IGVycm9yOiBhbnlcclxuXHJcbiAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIGlmICghZXJyb3IpIGVycm9yID0gZXJyXHJcbiAgfVxyXG5cclxuICBhcHBseVBoYXNlKFxyXG4gICAgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLFxyXG4gICAgbmV3TW9kdWxlRmFjdG9yaWVzLFxyXG4gICAgb3V0ZGF0ZWRNb2R1bGVQYXJlbnRzLFxyXG4gICAgcmVwb3J0RXJyb3JcclxuICApXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcblxyXG4gIGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuc2l6ZSA+IDApIHtcclxuICAgIGFwcGx5SW50ZXJuYWwobmV3IFNldCgpLCBbXSwgbmV3IE1hcCgpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUNoYW5nZWRNb2R1bGVzKFxyXG4gIGVudHJpZXM6IFJlY29yZDxNb2R1bGVJZCwgRWNtYXNjcmlwdE1vZHVsZUVudHJ5PixcclxuICB1cGRhdGVzOiBSZWNvcmQ8Q2h1bmtQYXRoLCBFY21hc2NyaXB0TWVyZ2VkQ2h1bmtVcGRhdGU+XHJcbik6IHtcclxuICBhZGRlZDogTWFwPE1vZHVsZUlkLCBFY21hc2NyaXB0TW9kdWxlRW50cnkgfCB1bmRlZmluZWQ+XHJcbiAgbW9kaWZpZWQ6IE1hcDxNb2R1bGVJZCwgRWNtYXNjcmlwdE1vZHVsZUVudHJ5PlxyXG4gIGRlbGV0ZWQ6IFNldDxNb2R1bGVJZD5cclxuICBjaHVua3NBZGRlZDogTWFwPENodW5rUGF0aCwgU2V0PE1vZHVsZUlkPj5cclxuICBjaHVua3NEZWxldGVkOiBNYXA8Q2h1bmtQYXRoLCBTZXQ8TW9kdWxlSWQ+PlxyXG59IHtcclxuICBjb25zdCBjaHVua3NBZGRlZCA9IG5ldyBNYXAoKVxyXG4gIGNvbnN0IGNodW5rc0RlbGV0ZWQgPSBuZXcgTWFwKClcclxuICBjb25zdCBhZGRlZDogTWFwPE1vZHVsZUlkLCBFY21hc2NyaXB0TW9kdWxlRW50cnk+ID0gbmV3IE1hcCgpXHJcbiAgY29uc3QgbW9kaWZpZWQgPSBuZXcgTWFwKClcclxuICBjb25zdCBkZWxldGVkOiBTZXQ8TW9kdWxlSWQ+ID0gbmV3IFNldCgpXHJcblxyXG4gIGZvciAoY29uc3QgW2NodW5rUGF0aCwgbWVyZ2VkQ2h1bmtVcGRhdGVdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZXMpIGFzIEFycmF5PFxyXG4gICAgW0NodW5rUGF0aCwgRWNtYXNjcmlwdE1lcmdlZENodW5rVXBkYXRlXVxyXG4gID4pIHtcclxuICAgIHN3aXRjaCAobWVyZ2VkQ2h1bmtVcGRhdGUudHlwZSkge1xyXG4gICAgICBjYXNlICdhZGRlZCc6IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVBZGRlZCA9IG5ldyBTZXQobWVyZ2VkQ2h1bmtVcGRhdGUubW9kdWxlcylcclxuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIHVwZGF0ZUFkZGVkKSB7XHJcbiAgICAgICAgICBhZGRlZC5zZXQobW9kdWxlSWQsIGVudHJpZXNbbW9kdWxlSWRdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjaHVua3NBZGRlZC5zZXQoY2h1bmtQYXRoLCB1cGRhdGVBZGRlZClcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2RlbGV0ZWQnOiB7XHJcbiAgICAgICAgLy8gV2UgY291bGQgYWxzbyB1c2UgYG1lcmdlZENodW5rVXBkYXRlLm1vZHVsZXNgIGhlcmUuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGVsZXRlZCA9IG5ldyBTZXQoY2h1bmtNb2R1bGVzTWFwLmdldChjaHVua1BhdGgpKVxyXG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgdXBkYXRlRGVsZXRlZCkge1xyXG4gICAgICAgICAgZGVsZXRlZC5hZGQobW9kdWxlSWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNodW5rc0RlbGV0ZWQuc2V0KGNodW5rUGF0aCwgdXBkYXRlRGVsZXRlZClcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3BhcnRpYWwnOiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlQWRkZWQgPSBuZXcgU2V0KG1lcmdlZENodW5rVXBkYXRlLmFkZGVkKVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURlbGV0ZWQgPSBuZXcgU2V0KG1lcmdlZENodW5rVXBkYXRlLmRlbGV0ZWQpXHJcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiB1cGRhdGVBZGRlZCkge1xyXG4gICAgICAgICAgYWRkZWQuc2V0KG1vZHVsZUlkLCBlbnRyaWVzW21vZHVsZUlkXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiB1cGRhdGVEZWxldGVkKSB7XHJcbiAgICAgICAgICBkZWxldGVkLmFkZChtb2R1bGVJZClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2h1bmtzQWRkZWQuc2V0KGNodW5rUGF0aCwgdXBkYXRlQWRkZWQpXHJcbiAgICAgICAgY2h1bmtzRGVsZXRlZC5zZXQoY2h1bmtQYXRoLCB1cGRhdGVEZWxldGVkKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpbnZhcmlhbnQoXHJcbiAgICAgICAgICBtZXJnZWRDaHVua1VwZGF0ZSxcclxuICAgICAgICAgIChtZXJnZWRDaHVua1VwZGF0ZSkgPT5cclxuICAgICAgICAgICAgYFVua25vd24gbWVyZ2VkIGNodW5rIHVwZGF0ZSB0eXBlOiAke21lcmdlZENodW5rVXBkYXRlLnR5cGV9YFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIElmIGEgbW9kdWxlIHdhcyBhZGRlZCBmcm9tIG9uZSBjaHVuayBhbmQgZGVsZXRlZCBmcm9tIGFub3RoZXIgaW4gdGhlIHNhbWUgdXBkYXRlLFxyXG4gIC8vIGNvbnNpZGVyIGl0IHRvIGJlIG1vZGlmaWVkLCBhcyBpdCBtZWFucyB0aGUgbW9kdWxlIHdhcyBtb3ZlZCBmcm9tIG9uZSBjaHVuayB0byBhbm90aGVyXHJcbiAgLy8gQU5EIGhhcyBuZXcgY29kZSBpbiBhIHNpbmdsZSB1cGRhdGUuXHJcbiAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBhZGRlZC5rZXlzKCkpIHtcclxuICAgIGlmIChkZWxldGVkLmhhcyhtb2R1bGVJZCkpIHtcclxuICAgICAgYWRkZWQuZGVsZXRlKG1vZHVsZUlkKVxyXG4gICAgICBkZWxldGVkLmRlbGV0ZShtb2R1bGVJZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW21vZHVsZUlkLCBlbnRyeV0gb2YgT2JqZWN0LmVudHJpZXMoZW50cmllcykpIHtcclxuICAgIC8vIE1vZHVsZXMgdGhhdCBoYXZlbid0IGJlZW4gYWRkZWQgdG8gYW55IGNodW5rIGJ1dCBoYXZlIG5ldyBjb2RlIGFyZSBjb25zaWRlcmVkXHJcbiAgICAvLyB0byBiZSBtb2RpZmllZC5cclxuICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgdW5kZXIgdGhlIHByZXZpb3VzIGxvb3AsIGFzIHdlIG5lZWQgaXQgdG8gZ2V0IHJpZCBvZiBtb2R1bGVzXHJcbiAgICAvLyB0aGF0IHdlcmUgYWRkZWQgYW5kIGRlbGV0ZWQgaW4gdGhlIHNhbWUgdXBkYXRlLlxyXG4gICAgaWYgKCFhZGRlZC5oYXMobW9kdWxlSWQpKSB7XHJcbiAgICAgIG1vZGlmaWVkLnNldChtb2R1bGVJZCwgZW50cnkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBhZGRlZCwgZGVsZXRlZCwgbW9kaWZpZWQsIGNodW5rc0FkZGVkLCBjaHVua3NEZWxldGVkIH1cclxufVxyXG5cclxudHlwZSBNb2R1bGVFZmZlY3QgPVxyXG4gIHwge1xyXG4gICAgICB0eXBlOiAndW5hY2NlcHRlZCdcclxuICAgICAgZGVwZW5kZW5jeUNoYWluOiBNb2R1bGVJZFtdXHJcbiAgICB9XHJcbiAgfCB7XHJcbiAgICAgIHR5cGU6ICdzZWxmLWRlY2xpbmVkJ1xyXG4gICAgICBkZXBlbmRlbmN5Q2hhaW46IE1vZHVsZUlkW11cclxuICAgICAgbW9kdWxlSWQ6IE1vZHVsZUlkXHJcbiAgICB9XHJcbiAgfCB7XHJcbiAgICAgIHR5cGU6ICdhY2NlcHRlZCdcclxuICAgICAgbW9kdWxlSWQ6IE1vZHVsZUlkXHJcbiAgICAgIG91dGRhdGVkTW9kdWxlczogU2V0PE1vZHVsZUlkPlxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkOiBNb2R1bGVJZCk6IE1vZHVsZUVmZmVjdCB7XHJcbiAgY29uc3Qgb3V0ZGF0ZWRNb2R1bGVzOiBTZXQ8TW9kdWxlSWQ+ID0gbmV3IFNldCgpXHJcblxyXG4gIHR5cGUgUXVldWVJdGVtID0geyBtb2R1bGVJZD86IE1vZHVsZUlkOyBkZXBlbmRlbmN5Q2hhaW46IE1vZHVsZUlkW10gfVxyXG5cclxuICBjb25zdCBxdWV1ZTogUXVldWVJdGVtW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG1vZHVsZUlkLFxyXG4gICAgICBkZXBlbmRlbmN5Q2hhaW46IFtdLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIGxldCBuZXh0SXRlbVxyXG4gIHdoaWxlICgobmV4dEl0ZW0gPSBxdWV1ZS5zaGlmdCgpKSkge1xyXG4gICAgY29uc3QgeyBtb2R1bGVJZCwgZGVwZW5kZW5jeUNoYWluIH0gPSBuZXh0SXRlbVxyXG5cclxuICAgIGlmIChtb2R1bGVJZCAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChvdXRkYXRlZE1vZHVsZXMuaGFzKG1vZHVsZUlkKSkge1xyXG4gICAgICAgIC8vIEF2b2lkIGluZmluaXRlIGxvb3BzIGNhdXNlZCBieSBjeWNsZXMgYmV0d2VlbiBtb2R1bGVzIGluIHRoZSBkZXBlbmRlbmN5IGNoYWluLlxyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG91dGRhdGVkTW9kdWxlcy5hZGQobW9kdWxlSWQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UndmUgYXJyaXZlZCBhdCB0aGUgcnVudGltZSBvZiB0aGUgY2h1bmssIHdoaWNoIG1lYW5zIHRoYXQgbm90aGluZ1xyXG4gICAgLy8gZWxzZSBhYm92ZSBjYW4gYWNjZXB0IHRoaXMgdXBkYXRlLlxyXG4gICAgaWYgKG1vZHVsZUlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAndW5hY2NlcHRlZCcsXHJcbiAgICAgICAgZGVwZW5kZW5jeUNoYWluLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kdWxlID0gZGV2TW9kdWxlQ2FjaGVbbW9kdWxlSWRdXHJcbiAgICBjb25zdCBob3RTdGF0ZSA9IG1vZHVsZUhvdFN0YXRlLmdldChtb2R1bGUpIVxyXG5cclxuICAgIGlmIChcclxuICAgICAgLy8gVGhlIG1vZHVsZSBpcyBub3QgaW4gdGhlIGNhY2hlLiBTaW5jZSB0aGlzIGlzIGEgXCJtb2RpZmllZFwiIHVwZGF0ZSxcclxuICAgICAgLy8gaXQgbWVhbnMgdGhhdCB0aGUgbW9kdWxlIHdhcyBuZXZlciBpbnN0YW50aWF0ZWQgYmVmb3JlLlxyXG4gICAgICAhbW9kdWxlIHx8IC8vIFRoZSBtb2R1bGUgYWNjZXB0ZWQgaXRzZWxmIHdpdGhvdXQgaW52YWxpZGF0aW5nIGdsb2JhbFRoaXMuXHJcbiAgICAgIC8vIFRPRE8gaXMgdGhhdCByaWdodD9cclxuICAgICAgKGhvdFN0YXRlLnNlbGZBY2NlcHRlZCAmJiAhaG90U3RhdGUuc2VsZkludmFsaWRhdGVkKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdFN0YXRlLnNlbGZEZWNsaW5lZCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdzZWxmLWRlY2xpbmVkJyxcclxuICAgICAgICBkZXBlbmRlbmN5Q2hhaW4sXHJcbiAgICAgICAgbW9kdWxlSWQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocnVudGltZU1vZHVsZXMuaGFzKG1vZHVsZUlkKSkge1xyXG4gICAgICBxdWV1ZS5wdXNoKHtcclxuICAgICAgICBtb2R1bGVJZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRlcGVuZGVuY3lDaGFpbjogWy4uLmRlcGVuZGVuY3lDaGFpbiwgbW9kdWxlSWRdLFxyXG4gICAgICB9KVxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgcGFyZW50SWQgb2YgbW9kdWxlLnBhcmVudHMpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZGV2TW9kdWxlQ2FjaGVbcGFyZW50SWRdXHJcblxyXG4gICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIC8vIFRPRE8oYWxleGtpcnN6KSBJcyB0aGlzIGV2ZW4gcG9zc2libGU/XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVE9ETyhhbGV4a2lyc3opIERlcGVuZGVuY2llczogY2hlY2sgYWNjZXB0ZWQgYW5kIGRlY2xpbmVkXHJcbiAgICAgIC8vIGRlcGVuZGVuY2llcyBoZXJlLlxyXG5cclxuICAgICAgcXVldWUucHVzaCh7XHJcbiAgICAgICAgbW9kdWxlSWQ6IHBhcmVudElkLFxyXG4gICAgICAgIGRlcGVuZGVuY3lDaGFpbjogWy4uLmRlcGVuZGVuY3lDaGFpbiwgbW9kdWxlSWRdLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdhY2NlcHRlZCcsXHJcbiAgICBtb2R1bGVJZCxcclxuICAgIG91dGRhdGVkTW9kdWxlcyxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFwcGx5KGNodW5rTGlzdFBhdGg6IENodW5rTGlzdFBhdGgsIHVwZGF0ZTogU2VydmVyTWVzc2FnZSkge1xyXG4gIHN3aXRjaCAodXBkYXRlLnR5cGUpIHtcclxuICAgIGNhc2UgJ3BhcnRpYWwnOiB7XHJcbiAgICAgIC8vIFRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIHVwZGF0ZSBpcyBjYW4gYmUgYXBwbGllZCB0byB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgIGFwcGx5VXBkYXRlKHVwZGF0ZS5pbnN0cnVjdGlvbilcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIGNhc2UgJ3Jlc3RhcnQnOiB7XHJcbiAgICAgIC8vIFRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlcmUgaXMgbm8gd2F5IHRvIGFwcGx5IHRoZSB1cGRhdGUgdG8gdGhlXHJcbiAgICAgIC8vIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGFwcGxpY2F0aW9uLCBhbmQgdGhhdCB0aGUgYXBwbGljYXRpb24gbXVzdCBiZVxyXG4gICAgICAvLyByZXN0YXJ0ZWQuXHJcbiAgICAgIERFVl9CQUNLRU5ELnJlc3RhcnQoKVxyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgY2FzZSAnbm90Rm91bmQnOiB7XHJcbiAgICAgIC8vIFRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIGNodW5rIGxpc3Qgbm8gbG9uZ2VyIGV4aXN0czogZWl0aGVyIHRoZSBkeW5hbWljIGltcG9ydCB3aGljaCBjcmVhdGVkIGl0IHdhcyByZW1vdmVkLFxyXG4gICAgICAvLyBvciB0aGUgcGFnZSBpdHNlbGYgd2FzIGRlbGV0ZWQuXHJcbiAgICAgIC8vIElmIGl0IGlzIGEgZHluYW1pYyBpbXBvcnQsIHdlIHNpbXBseSBkaXNjYXJkIGFsbCBtb2R1bGVzIHRoYXQgdGhlIGNodW5rIGhhcyBleGNsdXNpdmUgYWNjZXNzIHRvLlxyXG4gICAgICAvLyBJZiBpdCBpcyBhIHJ1bnRpbWUgY2h1bmsgbGlzdCwgd2UgcmVzdGFydCB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgIGlmIChydW50aW1lQ2h1bmtMaXN0cy5oYXMoY2h1bmtMaXN0UGF0aCkpIHtcclxuICAgICAgICBERVZfQkFDS0VORC5yZXN0YXJ0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwb3NlQ2h1bmtMaXN0KGNodW5rTGlzdFBhdGgpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB1cGRhdGUgdHlwZTogJHt1cGRhdGUudHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90KFxyXG4gIG1vZHVsZUlkOiBNb2R1bGVJZCxcclxuICBob3REYXRhOiBIb3REYXRhXHJcbik6IHsgaG90OiBIb3Q7IGhvdFN0YXRlOiBIb3RTdGF0ZSB9IHtcclxuICBjb25zdCBob3RTdGF0ZTogSG90U3RhdGUgPSB7XHJcbiAgICBzZWxmQWNjZXB0ZWQ6IGZhbHNlLFxyXG4gICAgc2VsZkRlY2xpbmVkOiBmYWxzZSxcclxuICAgIHNlbGZJbnZhbGlkYXRlZDogZmFsc2UsXHJcbiAgICBkaXNwb3NlSGFuZGxlcnM6IFtdLFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaG90OiBIb3QgPSB7XHJcbiAgICAvLyBUT0RPKGFsZXhraXJzeikgVGhpcyBpcyBub3QgZGVmaW5lZCBpbiB0aGUgSE1SIEFQSS4gSXQgd2FzIHVzZWQgdG9cclxuICAgIC8vIGRlY2lkZSB3aGV0aGVyIHRvIHdhcm4gd2hlbmV2ZXIgYW4gSE1SLWRpc3Bvc2VkIG1vZHVsZSByZXF1aXJlZCBvdGhlclxyXG4gICAgLy8gbW9kdWxlcy4gV2UgbWlnaHQgd2FudCB0byByZW1vdmUgaXQuXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcblxyXG4gICAgZGF0YTogaG90RGF0YSA/PyB7fSxcclxuXHJcbiAgICAvLyBUT0RPKGFsZXhraXJzeikgU3VwcG9ydCBmdWxsIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIGZvcm0uXHJcbiAgICBhY2NlcHQ6IChcclxuICAgICAgbW9kdWxlcz86IHN0cmluZyB8IHN0cmluZ1tdIHwgQWNjZXB0RXJyb3JIYW5kbGVyLFxyXG4gICAgICBfY2FsbGJhY2s/OiBBY2NlcHRDYWxsYmFjayxcclxuICAgICAgX2Vycm9ySGFuZGxlcj86IEFjY2VwdEVycm9ySGFuZGxlclxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChtb2R1bGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBob3RTdGF0ZS5zZWxmQWNjZXB0ZWQgPSB0cnVlXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBob3RTdGF0ZS5zZWxmQWNjZXB0ZWQgPSBtb2R1bGVzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBgYWNjZXB0YCBzaWduYXR1cmUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlY2xpbmU6IChkZXApID0+IHtcclxuICAgICAgaWYgKGRlcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaG90U3RhdGUuc2VsZkRlY2xpbmVkID0gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgYGRlY2xpbmVgIHNpZ25hdHVyZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGlzcG9zZTogKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGhvdFN0YXRlLmRpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGREaXNwb3NlSGFuZGxlcjogKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGhvdFN0YXRlLmRpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKVxyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVEaXNwb3NlSGFuZGxlcjogKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IGhvdFN0YXRlLmRpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKVxyXG4gICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICBob3RTdGF0ZS5kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbnZhbGlkYXRlOiAoKSA9PiB7XHJcbiAgICAgIGhvdFN0YXRlLnNlbGZJbnZhbGlkYXRlZCA9IHRydWVcclxuICAgICAgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmFkZChtb2R1bGVJZClcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTk9URShhbGV4a2lyc3opIFRoaXMgaXMgcGFydCBvZiB0aGUgbWFuYWdlbWVudCBBUEksIHdoaWNoIHdlIGRvbid0XHJcbiAgICAvLyBpbXBsZW1lbnQsIGJ1dCB0aGUgTmV4dC5qcyBSZWFjdCBSZWZyZXNoIHJ1bnRpbWUgdXNlcyB0aGlzIHRvIGRlY2lkZVxyXG4gICAgLy8gd2hldGhlciB0byBzY2hlZHVsZSBhbiB1cGRhdGUuXHJcbiAgICBzdGF0dXM6ICgpID0+ICdpZGxlJyxcclxuXHJcbiAgICAvLyBOT1RFKGFsZXhraXJzeikgU2luY2Ugd2UgYWx3YXlzIHJldHVybiBcImlkbGVcIiBmb3Igbm93LCB0aGVzZSBhcmUgbm8tb3BzLlxyXG4gICAgYWRkU3RhdHVzSGFuZGxlcjogKF9oYW5kbGVyKSA9PiB7fSxcclxuICAgIHJlbW92ZVN0YXR1c0hhbmRsZXI6IChfaGFuZGxlcikgPT4ge30sXHJcblxyXG4gICAgLy8gTk9URShqcmlkZ2V3ZWxsKSBDaGVjayByZXR1cm5zIHRoZSBsaXN0IG9mIHVwZGF0ZWQgbW9kdWxlcywgYnV0IHdlIGRvbid0XHJcbiAgICAvLyB3YW50IHRoZSB3ZWJwYWNrIGNvZGUgcGF0aHMgdG8gZXZlciB1cGRhdGUgKHRoZSB0dXJib3BhY2sgcGF0aHMgaGFuZGxlXHJcbiAgICAvLyB0aGlzIGFscmVhZHkpLlxyXG4gICAgY2hlY2s6ICgpID0+IFByb21pc2UucmVzb2x2ZShudWxsKSxcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGhvdCwgaG90U3RhdGUgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIG1vZHVsZSBmcm9tIGEgY2h1bmsuXHJcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZXJlIGFyZSBubyByZW1haW5pbmcgY2h1bmtzIGluY2x1ZGluZyB0aGlzIG1vZHVsZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZU1vZHVsZUZyb21DaHVuayhcclxuICBtb2R1bGVJZDogTW9kdWxlSWQsXHJcbiAgY2h1bmtQYXRoOiBDaHVua1BhdGhcclxuKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbW9kdWxlQ2h1bmtzID0gbW9kdWxlQ2h1bmtzTWFwLmdldChtb2R1bGVJZCkhXHJcbiAgbW9kdWxlQ2h1bmtzLmRlbGV0ZShjaHVua1BhdGgpXHJcblxyXG4gIGNvbnN0IGNodW5rTW9kdWxlcyA9IGNodW5rTW9kdWxlc01hcC5nZXQoY2h1bmtQYXRoKSFcclxuICBjaHVua01vZHVsZXMuZGVsZXRlKG1vZHVsZUlkKVxyXG5cclxuICBjb25zdCBub1JlbWFpbmluZ01vZHVsZXMgPSBjaHVua01vZHVsZXMuc2l6ZSA9PT0gMFxyXG4gIGlmIChub1JlbWFpbmluZ01vZHVsZXMpIHtcclxuICAgIGNodW5rTW9kdWxlc01hcC5kZWxldGUoY2h1bmtQYXRoKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm9SZW1haW5pbmdDaHVua3MgPSBtb2R1bGVDaHVua3Muc2l6ZSA9PT0gMFxyXG4gIGlmIChub1JlbWFpbmluZ0NodW5rcykge1xyXG4gICAgbW9kdWxlQ2h1bmtzTWFwLmRlbGV0ZShtb2R1bGVJZClcclxuICB9XHJcblxyXG4gIHJldHVybiBub1JlbWFpbmluZ0NodW5rc1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcG9zZXMgb2YgYSBjaHVuayBsaXN0IGFuZCBpdHMgY29ycmVzcG9uZGluZyBleGNsdXNpdmUgY2h1bmtzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGlzcG9zZUNodW5rTGlzdChjaHVua0xpc3RQYXRoOiBDaHVua0xpc3RQYXRoKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgY2h1bmtQYXRocyA9IGNodW5rTGlzdENodW5rc01hcC5nZXQoY2h1bmtMaXN0UGF0aClcclxuICBpZiAoY2h1bmtQYXRocyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgY2h1bmtMaXN0Q2h1bmtzTWFwLmRlbGV0ZShjaHVua0xpc3RQYXRoKVxyXG5cclxuICBmb3IgKGNvbnN0IGNodW5rUGF0aCBvZiBjaHVua1BhdGhzKSB7XHJcbiAgICBjb25zdCBjaHVua0NodW5rTGlzdHMgPSBjaHVua0NodW5rTGlzdHNNYXAuZ2V0KGNodW5rUGF0aCkhXHJcbiAgICBjaHVua0NodW5rTGlzdHMuZGVsZXRlKGNodW5rTGlzdFBhdGgpXHJcblxyXG4gICAgaWYgKGNodW5rQ2h1bmtMaXN0cy5zaXplID09PSAwKSB7XHJcbiAgICAgIGNodW5rQ2h1bmtMaXN0c01hcC5kZWxldGUoY2h1bmtQYXRoKVxyXG4gICAgICBkaXNwb3NlQ2h1bmsoY2h1bmtQYXRoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gV2UgbXVzdCBhbHNvIGRpc3Bvc2Ugb2YgdGhlIGNodW5rIGxpc3QncyBjaHVuayBpdHNlbGYgdG8gZW5zdXJlIGl0IG1heVxyXG4gIC8vIGJlIHJlbG9hZGVkIHByb3Blcmx5IGluIHRoZSBmdXR1cmUuXHJcbiAgY29uc3QgY2h1bmtMaXN0VXJsID0gZ2V0Q2h1bmtSZWxhdGl2ZVVybChjaHVua0xpc3RQYXRoKVxyXG5cclxuICBERVZfQkFDS0VORC51bmxvYWRDaHVuaz8uKGNodW5rTGlzdFVybClcclxuXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3Bvc2VzIG9mIGEgY2h1bmsgYW5kIGl0cyBjb3JyZXNwb25kaW5nIGV4Y2x1c2l2ZSBtb2R1bGVzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBjaHVuayB3YXMgZGlzcG9zZWQgb2YuXHJcbiAqL1xyXG5mdW5jdGlvbiBkaXNwb3NlQ2h1bmsoY2h1bmtQYXRoOiBDaHVua1BhdGgpOiBib29sZWFuIHtcclxuICBjb25zdCBjaHVua1VybCA9IGdldENodW5rUmVsYXRpdmVVcmwoY2h1bmtQYXRoKVxyXG4gIC8vIFRoaXMgc2hvdWxkIGhhcHBlbiB3aGV0aGVyIHRoZSBjaHVuayBoYXMgYW55IG1vZHVsZXMgaW4gaXQgb3Igbm90LlxyXG4gIC8vIEZvciBpbnN0YW5jZSwgQ1NTIGNodW5rcyBoYXZlIG5vIG1vZHVsZXMgaW4gdGhlbSwgYnV0IHRoZXkgc3RpbGwgbmVlZCB0byBiZSB1bmxvYWRlZC5cclxuICBERVZfQkFDS0VORC51bmxvYWRDaHVuaz8uKGNodW5rVXJsKVxyXG5cclxuICBjb25zdCBjaHVua01vZHVsZXMgPSBjaHVua01vZHVsZXNNYXAuZ2V0KGNodW5rUGF0aClcclxuICBpZiAoY2h1bmtNb2R1bGVzID09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBjaHVua01vZHVsZXMuZGVsZXRlKGNodW5rUGF0aClcclxuXHJcbiAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBjaHVua01vZHVsZXMpIHtcclxuICAgIGNvbnN0IG1vZHVsZUNodW5rcyA9IG1vZHVsZUNodW5rc01hcC5nZXQobW9kdWxlSWQpIVxyXG4gICAgbW9kdWxlQ2h1bmtzLmRlbGV0ZShjaHVua1BhdGgpXHJcblxyXG4gICAgY29uc3Qgbm9SZW1haW5pbmdDaHVua3MgPSBtb2R1bGVDaHVua3Muc2l6ZSA9PT0gMFxyXG4gICAgaWYgKG5vUmVtYWluaW5nQ2h1bmtzKSB7XHJcbiAgICAgIG1vZHVsZUNodW5rc01hcC5kZWxldGUobW9kdWxlSWQpXHJcbiAgICAgIGRpc3Bvc2VNb2R1bGUobW9kdWxlSWQsICdjbGVhcicpXHJcbiAgICAgIGF2YWlsYWJsZU1vZHVsZXMuZGVsZXRlKG1vZHVsZUlkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqXHJcbiAqIFN1YnNjcmliZXMgdG8gY2h1bmsgbGlzdCB1cGRhdGVzIGZyb20gdGhlIHVwZGF0ZSBzZXJ2ZXIgYW5kIGFwcGxpZXMgdGhlbS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ2h1bmtMaXN0KGNodW5rTGlzdDogQ2h1bmtMaXN0KSB7XHJcbiAgY29uc3QgY2h1bmtMaXN0U2NyaXB0ID0gY2h1bmtMaXN0LnNjcmlwdFxyXG4gIGNvbnN0IGNodW5rTGlzdFBhdGggPSBnZXRQYXRoRnJvbVNjcmlwdChjaHVua0xpc3RTY3JpcHQpXHJcbiAgLy8gVGhlIFwiY2h1bmtcIiBpcyBhbHNvIHJlZ2lzdGVyZWQgdG8gZmluaXNoIHRoZSBsb2FkaW5nIGluIHRoZSBiYWNrZW5kXHJcbiAgQkFDS0VORC5yZWdpc3RlckNodW5rKGNodW5rTGlzdFBhdGggYXMgc3RyaW5nIGFzIENodW5rUGF0aClcclxuICBnbG9iYWxUaGlzLlRVUkJPUEFDS19DSFVOS19VUERBVEVfTElTVEVORVJTIS5wdXNoKFtcclxuICAgIGNodW5rTGlzdFBhdGgsXHJcbiAgICBoYW5kbGVBcHBseS5iaW5kKG51bGwsIGNodW5rTGlzdFBhdGgpLFxyXG4gIF0pXHJcblxyXG4gIC8vIEFkZGluZyBjaHVua3MgdG8gY2h1bmsgbGlzdHMgYW5kIHZpY2UgdmVyc2EuXHJcbiAgY29uc3QgY2h1bmtQYXRocyA9IG5ldyBTZXQoY2h1bmtMaXN0LmNodW5rcy5tYXAoZ2V0Q2h1bmtQYXRoKSlcclxuICBjaHVua0xpc3RDaHVua3NNYXAuc2V0KGNodW5rTGlzdFBhdGgsIGNodW5rUGF0aHMpXHJcbiAgZm9yIChjb25zdCBjaHVua1BhdGggb2YgY2h1bmtQYXRocykge1xyXG4gICAgbGV0IGNodW5rQ2h1bmtMaXN0cyA9IGNodW5rQ2h1bmtMaXN0c01hcC5nZXQoY2h1bmtQYXRoKVxyXG4gICAgaWYgKCFjaHVua0NodW5rTGlzdHMpIHtcclxuICAgICAgY2h1bmtDaHVua0xpc3RzID0gbmV3IFNldChbY2h1bmtMaXN0UGF0aF0pXHJcbiAgICAgIGNodW5rQ2h1bmtMaXN0c01hcC5zZXQoY2h1bmtQYXRoLCBjaHVua0NodW5rTGlzdHMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaHVua0NodW5rTGlzdHMuYWRkKGNodW5rTGlzdFBhdGgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY2h1bmtMaXN0LnNvdXJjZSA9PT0gJ2VudHJ5Jykge1xyXG4gICAgbWFya0NodW5rTGlzdEFzUnVudGltZShjaHVua0xpc3RQYXRoKVxyXG4gIH1cclxufVxyXG5cclxuZ2xvYmFsVGhpcy5UVVJCT1BBQ0tfQ0hVTktfVVBEQVRFX0xJU1RFTkVSUyA/Pz0gW11cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBRTVDOzs7Ozs7Q0FNQyxHQUVELG9EQUFvRCxHQUVwRCxNQUFNLGlCQUF5QyxPQUFPLE1BQU0sQ0FBQztBQXVDN0QsTUFBTSx5QkFBeUI7SUFDN0IsT0FBTyxtQkFBa0I7SUFFekIsZ0JBQTJCO0lBRTNCLFlBQVksT0FBZSxFQUFFLGVBQTJCLENBQUU7UUFDeEQsS0FBSyxDQUFDO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRztJQUN6QjtBQUNGO0FBRUE7OztDQUdDLEdBQ0QsTUFBTSxnQkFBd0MsSUFBSTtBQUNsRDs7Q0FFQyxHQUNELE1BQU0saUJBQXdDLElBQUk7QUFDbEQ7O0NBRUMsR0FDRCxNQUFNLDJCQUEwQyxJQUFJO0FBRXBEOztDQUVDLEdBQ0QsYUFBYTtBQUNiLFNBQVMsOEJBQ1AsUUFBa0IsRUFDbEIsU0FBb0I7SUFFcEIsTUFBTSxTQUFTLGNBQWMsQ0FBQyxTQUFTO0lBQ3ZDLElBQUksUUFBUTtRQUNWLElBQUksT0FBTyxLQUFLLEVBQUU7WUFDaEIsTUFBTSxPQUFPLEtBQUs7UUFDcEI7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxhQUFhO0lBQ2IsT0FBTyxrQkFBa0IsVUFBVTtRQUFFLE1BQU0sV0FBVyxPQUFPO1FBQUU7SUFBVTtBQUMzRTtBQUVBOztDQUVDLEdBQ0QsMkNBQTJDO0FBQzNDLE1BQU0sbUNBRUYsQ0FBQyxJQUFJO0lBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUM1QixRQUFRLElBQUksQ0FDVixDQUFDLDRCQUE0QixFQUFFLEdBQUcsYUFBYSxFQUFFLGFBQWEsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO0lBRTFHO0lBRUEsTUFBTSxTQUFTLGNBQWMsQ0FBQyxHQUFHO0lBRWpDLElBQUksYUFBYSxRQUFRLENBQUMsT0FBTyxDQUFDLFFB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QSxJQUFJLFVBQVUsTUFBTSxLQUFLLFNBQVM7UUFDaEMsdUJBQXVCO0lBQ3pCO0FBQ0Y7QUFFQSxXQUFXLGdDQUFnQyxLQUFLLEVBQUUiLCJpZ25vcmVMaXN0IjpbMF19fSwKICAgIHsib2Zmc2V0IjogeyJsaW5lIjogMTQ2OSwgImNvbHVtbiI6IDB9LCAibWFwIjogeyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1cmJvcGFjazovLy9bdHVyYm9wYWNrXS9icm93c2VyL3J1bnRpbWUvZG9tL3J1bnRpbWUtYmFja2VuZC1kb20udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgcnVudGltZSBjb2RlIHNwZWNpZmljIHRvIHRoZSBUdXJib3BhY2sgZGV2ZWxvcG1lbnRcclxuICogRUNNQVNjcmlwdCBET00gcnVudGltZS5cclxuICpcclxuICogSXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgYmFzZSBkZXZlbG9wbWVudCBydW50aW1lIGNvZGUuXHJcbiAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnJvd3Nlci9ydW50aW1lL2Jhc2UvcnVudGltZS1iYXNlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3NoYXJlZC9ydW50aW1lLXR5cGVzLmQudHNcIiAvPlxyXG5cclxudHlwZSBDaHVua1Jlc29sdmVyID0ge1xyXG4gIHJlc29sdmVkOiBib29sZWFuXHJcbiAgbG9hZGluZ1N0YXJ0ZWQ6IGJvb2xlYW5cclxuICByZXNvbHZlOiAoKSA9PiB2b2lkXHJcbiAgcmVqZWN0OiAoZXJyb3I/OiBFcnJvcikgPT4gdm9pZFxyXG4gIHByb21pc2U6IFByb21pc2U8YW55PlxyXG59XHJcblxyXG5sZXQgQkFDS0VORDogUnVudGltZUJhY2tlbmRcclxuXHJcbmZ1bmN0aW9uIGF1Z21lbnRDb250ZXh0KGNvbnRleHQ6IHVua25vd24pOiB1bmtub3duIHtcclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFdlYkFzc2VtYmx5KHdhc21DaHVua1BhdGg6IENodW5rUGF0aCkge1xyXG4gIHJldHVybiBmZXRjaChnZXRDaHVua1JlbGF0aXZlVXJsKHdhc21DaHVua1BhdGgpKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkV2ViQXNzZW1ibHkoXHJcbiAgX3NvdXJjZTogdW5rbm93bixcclxuICB3YXNtQ2h1bmtQYXRoOiBDaHVua1BhdGgsXHJcbiAgX2VkZ2VNb2R1bGU6ICgpID0+IFdlYkFzc2VtYmx5Lk1vZHVsZSxcclxuICBpbXBvcnRzT2JqOiBXZWJBc3NlbWJseS5JbXBvcnRzXHJcbik6IFByb21pc2U8RXhwb3J0cz4ge1xyXG4gIGNvbnN0IHJlcSA9IGZldGNoV2ViQXNzZW1ibHkod2FzbUNodW5rUGF0aClcclxuXHJcbiAgY29uc3QgeyBpbnN0YW5jZSB9ID0gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVxLCBpbXBvcnRzT2JqKVxyXG5cclxuICByZXR1cm4gaW5zdGFuY2UuZXhwb3J0c1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkV2ViQXNzZW1ibHlNb2R1bGUoXHJcbiAgX3NvdXJjZTogdW5rbm93bixcclxuICB3YXNtQ2h1bmtQYXRoOiBDaHVua1BhdGgsXHJcbiAgX2VkZ2VNb2R1bGU6ICgpID0+IFdlYkFzc2VtYmx5Lk1vZHVsZVxyXG4pOiBQcm9taXNlPFdlYkFzc2VtYmx5Lk1vZHVsZT4ge1xyXG4gIGNvbnN0IHJlcSA9IGZldGNoV2ViQXNzZW1ibHkod2FzbUNodW5rUGF0aClcclxuXHJcbiAgcmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcocmVxKVxyXG59XHJcblxyXG4vKipcclxuICogTWFwcyBjaHVuayBwYXRocyB0byB0aGUgY29ycmVzcG9uZGluZyByZXNvbHZlci5cclxuICovXHJcbmNvbnN0IGNodW5rUmVzb2x2ZXJzOiBNYXA8Q2h1bmtVcmwsIENodW5rUmVzb2x2ZXI+ID0gbmV3IE1hcCgpXHJcblxyXG47KCgpID0+IHtcclxuICBCQUNLRU5EID0ge1xyXG4gICAgYXN5bmMgcmVnaXN0ZXJDaHVuayhjaHVua1BhdGgsIHBhcmFtcykge1xyXG4gICAgICBjb25zdCBjaHVua1VybCA9IGdldENodW5rUmVsYXRpdmVVcmwoY2h1bmtQYXRoKVxyXG5cclxuICAgICAgY29uc3QgcmVzb2x2ZXIgPSBnZXRPckNyZWF0ZVJlc29sdmVyKGNodW5rVXJsKVxyXG4gICAgICByZXNvbHZlci5yZXNvbHZlKClcclxuXHJcbiAgICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IG90aGVyQ2h1bmtEYXRhIG9mIHBhcmFtcy5vdGhlckNodW5rcykge1xyXG4gICAgICAgIGNvbnN0IG90aGVyQ2h1bmtQYXRoID0gZ2V0Q2h1bmtQYXRoKG90aGVyQ2h1bmtEYXRhKVxyXG4gICAgICAgIGNvbnN0IG90aGVyQ2h1bmtVcmwgPSBnZXRDaHVua1JlbGF0aXZlVXJsKG90aGVyQ2h1bmtQYXRoKVxyXG5cclxuICAgICAgICAvLyBDaHVuayBtaWdodCBoYXZlIHN0YXJ0ZWQgbG9hZGluZywgc28gd2Ugd2FudCB0byBhdm9pZCB0cmlnZ2VyaW5nIGFub3RoZXIgbG9hZC5cclxuICAgICAgICBnZXRPckNyZWF0ZVJlc29sdmVyKG90aGVyQ2h1bmtVcmwpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoaXMgd2FpdHMgZm9yIGNodW5rcyB0byBiZSBsb2FkZWQsIGJ1dCBhbHNvIG1hcmtzIGluY2x1ZGVkIGl0ZW1zIGFzIGF2YWlsYWJsZS5cclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgcGFyYW1zLm90aGVyQ2h1bmtzLm1hcCgob3RoZXJDaHVua0RhdGEpID0+XHJcbiAgICAgICAgICBsb2FkQ2h1bmsoeyB0eXBlOiBTb3VyY2VUeXBlLlJ1bnRpbWUsIGNodW5rUGF0aCB9LCBvdGhlckNodW5rRGF0YSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChwYXJhbXMucnVudGltZU1vZHVsZUlkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBwYXJhbXMucnVudGltZU1vZHVsZUlkcykge1xyXG4gICAgICAgICAgZ2V0T3JJbnN0YW50aWF0ZVJ1bnRpbWVNb2R1bGUobW9kdWxlSWQsIGNodW5rUGF0aClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgZ2l2ZW4gY2h1bmssIGFuZCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIGNodW5rXHJcbiAgICAgKiBoYXMgYmVlbiBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaHVuayhjaHVua1VybCwgc291cmNlKSB7XHJcbiAgICAgIHJldHVybiBkb0xvYWRDaHVuayhjaHVua1VybCwgc291cmNlKVxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE9yQ3JlYXRlUmVzb2x2ZXIoY2h1bmtVcmw6IENodW5rVXJsKTogQ2h1bmtSZXNvbHZlciB7XHJcbiAgICBsZXQgcmVzb2x2ZXIgPSBjaHVua1Jlc29sdmVycy5nZXQoY2h1bmtVcmwpXHJcbiAgICBpZiAoIXJlc29sdmVyKSB7XHJcbiAgICAgIGxldCByZXNvbHZlOiAoKSA9PiB2b2lkXHJcbiAgICAgIGxldCByZWplY3Q6IChlcnJvcj86IEVycm9yKSA9PiB2b2lkXHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigoaW5uZXJSZXNvbHZlLCBpbm5lclJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUgPSBpbm5lclJlc29sdmVcclxuICAgICAgICByZWplY3QgPSBpbm5lclJlamVjdFxyXG4gICAgICB9KVxyXG4gICAgICByZXNvbHZlciA9IHtcclxuICAgICAgICByZXNvbHZlZDogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZ1N0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByb21pc2UsXHJcbiAgICAgICAgcmVzb2x2ZTogKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZXIhLnJlc29sdmVkID0gdHJ1ZVxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWplY3Q6IHJlamVjdCEsXHJcbiAgICAgIH1cclxuICAgICAgY2h1bmtSZXNvbHZlcnMuc2V0KGNodW5rVXJsLCByZXNvbHZlcilcclxuICAgIH1cclxuICAgIHJldHVybiByZXNvbHZlclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgdGhlIGdpdmVuIGNodW5rLCBhbmQgcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIHRoZSBjaHVua1xyXG4gICAqIGhhcyBiZWVuIGxvYWRlZC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBkb0xvYWRDaHVuayhjaHVua1VybDogQ2h1bmtVcmwsIHNvdXJjZTogU291cmNlSW5mbykge1xyXG4gICAgY29uc3QgcmVzb2x2ZXIgPSBnZXRPckNyZWF0ZVJlc29sdmVyKGNodW5rVXJsKVxyXG4gICAgaWYgKHJlc29sdmVyLmxvYWRpbmdTdGFydGVkKSB7XHJcbiAgICAgIHJldHVybiByZXNvbHZlci5wcm9taXNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZS50eXBlID09PSBTb3VyY2VUeXBlLlJ1bnRpbWUpIHtcclxuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBsb2FkIGNodW5rcyByZWZlcmVuY2VzIGZyb20gcnVudGltZSBjb2RlLCBhcyB0aGV5J3JlIGFscmVhZHlcclxuICAgICAgLy8gcHJlc2VudCBpbiB0aGUgRE9NLlxyXG4gICAgICByZXNvbHZlci5sb2FkaW5nU3RhcnRlZCA9IHRydWVcclxuXHJcbiAgICAgIGlmIChpc0NzcyhjaHVua1VybCkpIHtcclxuICAgICAgICAvLyBDU1MgY2h1bmtzIGRvIG5vdCByZWdpc3RlciB0aGVtc2VsdmVzLCBhbmQgYXMgc3VjaCBtdXN0IGJlIG1hcmtlZCBhc1xyXG4gICAgICAgIC8vIGxvYWRlZCBpbnN0YW50bHkuXHJcbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFdlIG5lZWQgdG8gd2FpdCBmb3IgSlMgY2h1bmtzIHRvIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aGluIGByZWdpc3RlckNodW5rYFxyXG4gICAgICAvLyBiZWZvcmUgd2UgY2FuIHN0YXJ0IGluc3RhbnRpYXRpbmcgcnVudGltZSBtb2R1bGVzLCBoZW5jZSB0aGUgYWJzZW5jZSBvZlxyXG4gICAgICAvLyBgcmVzb2x2ZXIucmVzb2x2ZSgpYCBpbiB0aGlzIGJyYW5jaC5cclxuXHJcbiAgICAgIHJldHVybiByZXNvbHZlci5wcm9taXNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIC8vIFdlJ3JlIGluIGEgd2ViIHdvcmtlclxyXG4gICAgICBpZiAoaXNDc3MoY2h1bmtVcmwpKSB7XHJcbiAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNKcyhjaHVua1VybCkpIHtcclxuICAgICAgICBzZWxmLlRVUkJPUEFDS19ORVhUX0NIVU5LX1VSTFMhLnB1c2goY2h1bmtVcmwpXHJcbiAgICAgICAgaW1wb3J0U2NyaXB0cyhUVVJCT1BBQ0tfV09SS0VSX0xPQ0FUSU9OICsgY2h1bmtVcmwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYGNhbid0IGluZmVyIHR5cGUgb2YgY2h1bmsgZnJvbSBVUkwgJHtjaHVua1VybH0gaW4gd29ya2VyYFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVE9ETyhQQUNLLTIxNDApOiByZW1vdmUgdGhpcyBvbmNlIGFsbCBmaWxlbmFtZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgZXNjYXBlZC5cclxuICAgICAgY29uc3QgZGVjb2RlZENodW5rVXJsID0gZGVjb2RlVVJJKGNodW5rVXJsKVxyXG5cclxuICAgICAgaWYgKGlzQ3NzKGNodW5rVXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgYGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWY9XCIke2NodW5rVXJsfVwiXSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXj1cIiR7Y2h1bmtVcmx9P1wiXSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmPVwiJHtkZWNvZGVkQ2h1bmtVcmx9XCJdLGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZePVwiJHtkZWNvZGVkQ2h1bmtVcmx9P1wiXWBcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKHByZXZpb3VzTGlua3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gQ1NTIGNodW5rcyBkbyBub3QgcmVnaXN0ZXIgdGhlbXNlbHZlcywgYW5kIGFzIHN1Y2ggbXVzdCBiZSBtYXJrZWQgYXNcclxuICAgICAgICAgIC8vIGxvYWRlZCBpbnN0YW50bHkuXHJcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gICAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCdcclxuICAgICAgICAgIGxpbmsuaHJlZiA9IGNodW5rVXJsXHJcbiAgICAgICAgICBsaW5rLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmVyLnJlamVjdCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaW5rLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gQ1NTIGNodW5rcyBkbyBub3QgcmVnaXN0ZXIgdGhlbXNlbHZlcywgYW5kIGFzIHN1Y2ggbXVzdCBiZSBtYXJrZWQgYXNcclxuICAgICAgICAgICAgLy8gbG9hZGVkIGluc3RhbnRseS5cclxuICAgICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBBcHBlbmQgdG8gdGhlIGBoZWFkYCBmb3Igd2VicGFjayBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChpc0pzKGNodW5rVXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzU2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICBgc2NyaXB0W3NyYz1cIiR7Y2h1bmtVcmx9XCJdLHNjcmlwdFtzcmNePVwiJHtjaHVua1VybH0/XCJdLHNjcmlwdFtzcmM9XCIke2RlY29kZWRDaHVua1VybH1cIl0sc2NyaXB0W3NyY149XCIke2RlY29kZWRDaHVua1VybH0/XCJdYFxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAocHJldmlvdXNTY3JpcHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIFRoZXJlIGlzIHRoaXMgZWRnZSB3aGVyZSB0aGUgc2NyaXB0IGFscmVhZHkgZmFpbGVkIGxvYWRpbmcsIGJ1dCB3ZVxyXG4gICAgICAgICAgLy8gY2FuJ3QgZGV0ZWN0IHRoYXQuIFRoZSBQcm9taXNlIHdpbGwgbmV2ZXIgcmVzb2x2ZSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBBcnJheS5mcm9tKHByZXZpb3VzU2NyaXB0cykpIHtcclxuICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmVyLnJlamVjdCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgICAgICAgICBzY3JpcHQuc3JjID0gY2h1bmtVcmxcclxuICAgICAgICAgIC8vIFdlJ2xsIG9ubHkgbWFyayB0aGUgY2h1bmsgYXMgbG9hZGVkIG9uY2UgdGhlIHNjcmlwdCBoYXMgYmVlbiBleGVjdXRlZCxcclxuICAgICAgICAgIC8vIHdoaWNoIGhhcHBlbnMgaW4gYHJlZ2lzdGVyQ2h1bmtgLiBIZW5jZSB0aGUgYWJzZW5jZSBvZiBgcmVzb2x2ZSgpYCBpblxyXG4gICAgICAgICAgLy8gdGhpcyBicmFuY2guXHJcbiAgICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZXIucmVqZWN0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIEFwcGVuZCB0byB0aGUgYGhlYWRgIGZvciB3ZWJwYWNrIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjYW4ndCBpbmZlciB0eXBlIG9mIGNodW5rIGZyb20gVVJMICR7Y2h1bmtVcmx9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVyLmxvYWRpbmdTdGFydGVkID0gdHJ1ZVxyXG4gICAgcmV0dXJuIHJlc29sdmVyLnByb21pc2VcclxuICB9XHJcbn0pKClcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQsb0RBQW9ELEdBRXBELHNFQUFzRTtB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T0FBTztvQkFDTCxNQUFNLFNBQVMsU0FBUyxhQUFhLENBQUM7b0JBQ3RDLE9BQU8sR0FBRyxHQUFHO29CQUNiLHlFQUF5RTtvQkFDekUsd0VBQXdFO29CQUN4RSxlQUFlO29CQUNmLE9BQU8sT0FBTyxHQUFHO3dCQUNmLFNBQVMsTUFBTTtvQkFDakI7b0JBQ0Esa0RBQWtEO29CQUNsRCxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCO1lBQ0YsT0FBTztnQkFDTCxNQUFNLElBQUksTUFBTSxDQUFDLG1DQUFtQyxFQUFFLFVBQVU7WUFDbEU7UUFDRjtRQUVBLFNBQVMsY0FBYyxHQUFHO1FBQzFCLE9BQU8sU0FBUyxPQUFPO0lBQ3pCO0FBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOlswXX19LAogICAgeyJvZmZzZXQiOiB7ImxpbmUiOiAxNjM3LCAiY29sdW1uIjogMH0sICJtYXAiOiB7InZlcnNpb24iOjMsInNvdXJjZXMiOlsidHVyYm9wYWNrOi8vL1t0dXJib3BhY2tdL2Jyb3dzZXIvcnVudGltZS9kb20vZGV2LWJhY2tlbmQtZG9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIHJ1bnRpbWUgY29kZSBzcGVjaWZpYyB0byB0aGUgVHVyYm9wYWNrIGRldmVsb3BtZW50XHJcbiAqIEVDTUFTY3JpcHQgRE9NIHJ1bnRpbWUuXHJcbiAqXHJcbiAqIEl0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGJhc2UgZGV2ZWxvcG1lbnQgcnVudGltZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvcnVudGltZS1iYXNlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvZGV2LWJhc2UudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9ydW50aW1lLWJhY2tlbmQtZG9tLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3NoYXJlZC9yZXF1aXJlLXR5cGUuZC50c1wiIC8+XHJcblxyXG5sZXQgREVWX0JBQ0tFTkQ6IERldlJ1bnRpbWVCYWNrZW5kXHJcbjsoKCkgPT4ge1xyXG4gIERFVl9CQUNLRU5EID0ge1xyXG4gICAgdW5sb2FkQ2h1bmsoY2h1bmtVcmwpIHtcclxuICAgICAgZGVsZXRlUmVzb2x2ZXIoY2h1bmtVcmwpXHJcblxyXG4gICAgICAvLyBUT0RPKFBBQ0stMjE0MCk6IHJlbW92ZSB0aGlzIG9uY2UgYWxsIGZpbGVuYW1lcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBlc2NhcGVkLlxyXG4gICAgICBjb25zdCBkZWNvZGVkQ2h1bmtVcmwgPSBkZWNvZGVVUkkoY2h1bmtVcmwpXHJcblxyXG4gICAgICBpZiAoaXNDc3MoY2h1bmtVcmwpKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgYGxpbmtbaHJlZj1cIiR7Y2h1bmtVcmx9XCJdLGxpbmtbaHJlZl49XCIke2NodW5rVXJsfT9cIl0sbGlua1tocmVmPVwiJHtkZWNvZGVkQ2h1bmtVcmx9XCJdLGxpbmtbaHJlZl49XCIke2RlY29kZWRDaHVua1VybH0/XCJdYFxyXG4gICAgICAgIClcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgQXJyYXkuZnJvbShsaW5rcykpIHtcclxuICAgICAgICAgIGxpbmsucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNKcyhjaHVua1VybCkpIHtcclxuICAgICAgICAvLyBVbmxvYWRpbmcgYSBKUyBjaHVuayB3b3VsZCBoYXZlIG5vIGVmZmVjdCwgYXMgaXQgbGl2ZXMgaW4gdGhlIEpTXHJcbiAgICAgICAgLy8gcnVudGltZSBvbmNlIGV2YWx1YXRlZC5cclxuICAgICAgICAvLyBIb3dldmVyLCB3ZSBzdGlsbCB3YW50IHRvIHJlbW92ZSB0aGUgc2NyaXB0IHRhZyBmcm9tIHRoZSBET00gdG8ga2VlcFxyXG4gICAgICAgIC8vIHRoZSBIVE1MIHNvbWV3aGF0IGNvbnNpc3RlbnQgZnJvbSB0aGUgdXNlcidzIHBlcnNwZWN0aXZlLlxyXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgYHNjcmlwdFtzcmM9XCIke2NodW5rVXJsfVwiXSxzY3JpcHRbc3JjXj1cIiR7Y2h1bmtVcmx9P1wiXSxzY3JpcHRbc3JjPVwiJHtkZWNvZGVkQ2h1bmtVcmx9XCJdLHNjcmlwdFtzcmNePVwiJHtkZWNvZGVkQ2h1bmtVcmx9P1wiXWBcclxuICAgICAgICApXHJcbiAgICAgICAgZm9yIChjb25zdCBzY3JpcHQgb2YgQXJyYXkuZnJvbShzY3JpcHRzKSkge1xyXG4gICAgICAgICAgc2NyaXB0LnJlbW92ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgY2FuJ3QgaW5mZXIgdHlwZSBvZiBjaHVuayBmcm9tIFVSTCAke2NodW5rVXJsfWApXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVsb2FkQ2h1bmsoY2h1bmtVcmwpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoIWlzQ3NzKGNodW5rVXJsKSkge1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGhlIERPTSBiYWNrZW5kIGNhbiBvbmx5IHJlbG9hZCBDU1MgY2h1bmtzJykpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlY29kZWRDaHVua1VybCA9IGRlY29kZVVSSShjaHVua1VybClcclxuICAgICAgICBjb25zdCBwcmV2aW91c0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgIGBsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmPVwiJHtjaHVua1VybH1cIl0sbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl49XCIke2NodW5rVXJsfT9cIl0sbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZj1cIiR7ZGVjb2RlZENodW5rVXJsfVwiXSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXj1cIiR7ZGVjb2RlZENodW5rVXJsfT9cIl1gXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAocHJldmlvdXNMaW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYE5vIGxpbmsgZWxlbWVudCBmb3VuZCBmb3IgY2h1bmsgJHtjaHVua1VybH1gKSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnXHJcblxyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdGaXJlZm94JykpIHtcclxuICAgICAgICAgIC8vIEZpcmVmb3ggd29uJ3QgcmVsb2FkIENTUyBmaWxlcyB0aGF0IHdlcmUgcHJldmlvdXNseSBsb2FkZWQgb24gdGhlIGN1cnJlbnQgcGFnZSxcclxuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcXVlcnkgcGFyYW0gdG8gbWFrZSBzdXJlIENTUyBpcyBhY3R1YWxseSByZWxvYWRlZCBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgLy8gSSBiZWxpZXZlIHRoaXMgaXMgdGhpcyBpc3N1ZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAzNzUwNlxyXG4gICAgICAgICAgLy9cclxuICAgICAgICAgIC8vIFNhZmFyaSBoYXMgYSBzaW1pbGFyIGlzc3VlLCBidXQgb25seSBpZiB5b3UgaGF2ZSBhIGA8bGluayByZWw9cHJlbG9hZCAuLi4gLz5gIHRhZ1xyXG4gICAgICAgICAgLy8gcG9pbnRpbmcgdG8gdGhlIHNhbWUgVVJMIGFzIHRoZSBzdHlsZXNoZWV0OiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2XHJcbiAgICAgICAgICBsaW5rLmhyZWYgPSBgJHtjaHVua1VybH0/dHM9JHtEYXRlLm5vdygpfWBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGluay5ocmVmID0gY2h1bmtVcmxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpbmsub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmsub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgLy8gRmlyc3QgbG9hZCB0aGUgbmV3IENTUywgdGhlbiByZW1vdmUgdGhlIG9sZCBvbmVzLiBUaGlzIHByZXZlbnRzIHZpc2libGVcclxuICAgICAgICAgIC8vIGZsaWNrZXJpbmcgdGhhdCB3b3VsZCBoYXBwZW4gaW4tYmV0d2VlbiByZW1vdmluZyB0aGUgcHJldmlvdXMgQ1NTIGFuZFxyXG4gICAgICAgICAgLy8gbG9hZGluZyB0aGUgbmV3IG9uZS5cclxuICAgICAgICAgIGZvciAoY29uc3QgcHJldmlvdXNMaW5rIG9mIEFycmF5LmZyb20ocHJldmlvdXNMaW5rcykpXHJcbiAgICAgICAgICAgIHByZXZpb3VzTGluay5yZW1vdmUoKVxyXG5cclxuICAgICAgICAgIC8vIENTUyBjaHVua3MgZG8gbm90IHJlZ2lzdGVyIHRoZW1zZWx2ZXMsIGFuZCBhcyBzdWNoIG11c3QgYmUgbWFya2VkIGFzXHJcbiAgICAgICAgICAvLyBsb2FkZWQgaW5zdGFudGx5LlxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdG8gaW5zZXJ0IHRoZSBuZXcgQ1NTIHJpZ2h0IGFmdGVyIHRoZSBwcmV2aW91cyBvbmUsIHNvIHRoYXRcclxuICAgICAgICAvLyBpdHMgcHJlY2VkZW5jZSBpcyBoaWdoZXIuXHJcbiAgICAgICAgcHJldmlvdXNMaW5rc1swXS5wYXJlbnRFbGVtZW50IS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICBsaW5rLFxyXG4gICAgICAgICAgcHJldmlvdXNMaW5rc1swXS5uZXh0U2libGluZ1xyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgcmVzdGFydDogKCkgPT4gc2VsZi5sb2NhdGlvbi5yZWxvYWQoKSxcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVJlc29sdmVyKGNodW5rVXJsOiBDaHVua1VybCkge1xyXG4gICAgY2h1bmtSZXNvbHZlcnMuZGVsZXRlKGNodW5rVXJsKVxyXG4gIH1cclxufSkoKVxyXG5cclxuZnVuY3Rpb24gX2V2YWwoeyBjb2RlLCB1cmwsIG1hcCB9OiBFY21hc2NyaXB0TW9kdWxlRW50cnkpOiBNb2R1bGVGYWN0b3J5IHtcclxuICBjb2RlICs9IGBcXG5cXG4vLyMgc291cmNlVVJMPSR7ZW5jb2RlVVJJKFxyXG4gICAgbG9jYXRpb24ub3JpZ2luICsgQ0hVTktfQkFTRV9QQVRIICsgdXJsICsgQ0hVTktfU1VGRklYX1BBVEhcclxuICApfWBcclxuICBpZiAobWFwKSB7XHJcbiAgICBjb2RlICs9IGBcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJHtidG9hKFxyXG4gICAgICAvLyBidG9hIGRvZXNuJ3QgaGFuZGxlIG5vbmxhdGluIGNoYXJhY3RlcnMsIHNvIGVzY2FwZSB0aGVtIGFzIFxceCBzZXF1ZW5jZXNcclxuICAgICAgLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG4gICAgICB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQobWFwKSlcclxuICAgICl9YFxyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcclxuICByZXR1cm4gZXZhbChjb2RlKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVELG9EQUFvRCxHQUVwRCxnREFBZ0Q7QUFDaEQsNENBQTRDO0FBQzVDLGlEQUFpRDtBQUNqRCwwREFBMEQ7QUFFMUQsSUFBSTtBQUNILENBQUM7SUFDQSxjQUFjO1FBQ1osYUFBWSxRQUFRO1lBQ2xCLGVBQWU7WUFFZixnRkFBZ0Y7WUFDaEYsTUFBTSxrQkFBa0IsVUFBVTtZQUVsQyxJQUFJLE1BQU0sV0FBVztnQkFDbkIsTUFBTSxRQUFRLFNBQVMsZ0JBQWdCLENBQ3JDLENBQUMsV0FBVyxFQUFFLFNBQVMsZUFBZSxFQUFFLFNBQVMsZUFBZSxFQUFFLGdCQUFnQixlQUFlLEVBQUUsZ0JBQWdCLEdBQUcsQ0FBQztnQkFFekgsS0FBSyxNQUFNLFFBQVEsTUFBTSxJQUFJLENBQUMsT0FBUTtvQkFDcEMsS0FBSyxNQUFNO2dCQUNiO1lBQ0YsT0FBTyxJQUFJLEtBQUssV0FBVztnQkFDekIsbUVBQW1FO2dCQUNuRSwwQkFBMEI7Z0JBQzFCLHVFQUF1RTtnQkFDdkUsNERBQTREO2dCQUM1RCxNQUFNLFVBQVUsU0FBUyxnQkFBZ0IsQ0FDdkMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRSxTQUFTLGdCQUFnQixFQUFFLGdCQUFnQixnQkFBZ0IsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDO2dCQUU3SCxLQUFLLE1BQU0sVUFBVSxNQUFNLElBQUksQ0FBQyxTQUFVO29CQUN4QyxPQUFPLE1BQU07Z0JBQ2Y7WUFDRixPQUFPO2dCQUNMLE1BQU0sSUFBSSxNQUFNLENBQUMsbUNBQW1DLEVBQUUsVUFBVTtZQUNsRTtRQUNGO1FBRUEsYUFBWSxRQUFRO1lBQ2xCLE9BQU8sSUFBSSxRQUFjLENBQUMsU0FBUztnQkFDakMsSUFBSSxDQUFDLE1BQU0sV0FBVztvQkFDcEIsT0FBTyxJQUFJLE1BQU07b0JBQ2pCO2dCQUNGO2dCQUVBLE1BQU0sa0JBQWtCLFVBQVU7Z0JBQ2xDLE1BQU0sZ0JBQWdCLFNBQVMsZ0JBQWdCLENBQzdDLENBQUMsMkJBQTJCLEVBQUUsU0FBUywrQkFBK0IsRUFBRSxTQUFTLCtCQUErQixFQUFFLGdCQUFnQiwrQkFBK0IsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDO2dCQUd6TCxJQUFJLGNBQWMsTUFBTSxLQUFLLEdBQUc7b0JBQzlCLE9BQU8sSUFBSSxNQUFNLENBQUMsZ0NBQWdDLEVBQUUsVUFBVTtvQkFDOUQ7Z0JBQ0Y7Z0JBRUEsTUFBTSxPQUFPLFNBQVMsYUFBYSxDQUFDO2dCQUNwQyxLQUFLLEdBQUcsR0FBRztnQkFFWCxJQUFJLFVBQVUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZO29CQUMzQyxrRkFBa0Y7b0JBQ2xGLHNGQUFzRjtvQkFDdEYsRUFBRTtvQkFDRixxRkFBcUY7b0JBQ3JGLEVBQUU7b0JBQ0Ysb0ZBQW9GO29CQUNwRiw2RkFBNkY7b0JBQzdGLEtBQUssSUFBSSxHQUFHLEdBQUcsU0FBUyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUk7Z0JBQzVDLE9BQU87b0JBQ0wsS0FBSyxJQUFJLEdBQUc7Z0JBQ2Q7Z0JBRUEsS0FBSyxPQUFPLEdBQUc7b0JBQ2I7Z0JBQ0Y7Z0JBQ0EsS0FBSyxNQUFNLEdBQUc7b0JBQ1osMEVBQTBFO29CQUMxRSx3RUFBd0U7b0JBQ3hFLHVCQUF1QjtvQkFDdkIsS0FBSyxNQUFNLGdCQUFnQixNQUFNLElBQUksQ0FBQyxlQUNwQyxhQUFhLE1BQU07b0JBRXJCLHVFQUF1RTtvQkFDdkUsb0JBQW9CO29CQUNwQjtnQkFDRjtnQkFFQSx3RUFBd0U7Z0JBQ3hFLDRCQUE0QjtnQkFDNUIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUUsWUFBWSxDQUMxQyxNQUNBLGFBQWEsQ0FBQyxFQUFFLENBQUMsV0FBVztZQUVoQztRQUNGO1FBRUEsU0FBUyxJQUFNLEtBQUssUUFBUSxDQUFDLE1BQU07SUFDckM7SUFFQSxTQUFTLGVBQWUsUUFBa0I7UUFDeEMsZUFBZSxNQUFNLENBQUM7SUFDeEI7QUFDRixDQUFDO0FBRUQsU0FBUyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQXlCO0lBQ3RELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxVQUMzQixTQUFTLE1BQU0sR0FBRyxrQkFBa0IsTUFBTSxvQkFDekM7SUFDSCxJQUFJLEtBQUs7UUFDUCxRQUFRLENBQUMsa0VBQWtFLEVBQUUsS0FDM0UsMEVBQTBFO1FBQzFFLDJDQUEyQztRQUMzQyxTQUFTLG1CQUFtQixRQUMzQjtJQUNMO0lBRUEsbUNBQW1DO0lBQ25DLE9BQU8sS0FBSztBQUNkIiwiaWdub3JlTGlzdCI6WzBdfX1dCn0=