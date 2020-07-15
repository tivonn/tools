(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.tools = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /**
     * 防抖
     */
    var debounce = function (fn, minDelay, scope) {
        if (minDelay === void 0) { minDelay = 300; }
        if (scope === void 0) { scope = null; }
        var timeout;
        return function () {
            timeout && clearTimeout(timeout);
            timeout = setTimeout(fn.bind.apply(fn, __spreadArrays([scope || this], arguments)), minDelay);
        };
    };
    /**
     * 节流
     */
    var throttle = function (fn, minDelay, scope) {
        if (minDelay === void 0) { minDelay = 300; }
        if (scope === void 0) { scope = null; }
        var lastCall = 0;
        var timeout;
        return function () {
            var now = Date.now();
            if (now - lastCall < minDelay) {
                timeout && clearTimeout(timeout);
                return timeout = setTimeout(fn.bind.apply(fn, __spreadArrays([scope || this], arguments)), minDelay);
            }
            lastCall = now;
            timeout && clearTimeout(timeout);
            fn.apply(scope || this, arguments);
        };
    };
    var main = {
        debounce: debounce,
        throttle: throttle
    };

    return main;

})));
