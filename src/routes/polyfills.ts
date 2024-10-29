import { Buffer } from "buffer";

window.Buffer ||= Buffer;
globalThis.Buffer ||= Buffer;

"hasOwn" in Object || (Object.hasOwn = Object.call.bind(Object.hasOwnProperty));
