// D5 (15/11/2026): substitui o polyfill-module do Next (next.config.mjs). Os recursos que ele cobre
// (Array.prototype.at, flat/flatMap, Object.fromEntries, Object.hasOwn, String.prototype.trimStart/trimEnd,
// Symbol.prototype.description, Promise.prototype.finally) são nativos nos navegadores do browserslist (package.json).
// URL.canParse também estava no polyfill: nem o site nem o runtime do Next o usam.
