/**
 * @license AngularJS v$$ANGULAR_VERSION$$
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, function () {
    'use strict';
    goog.module('_angular$http');
    var http_1 = goog.require('_angular$http$http');
    exports.Request = http_1.Request;
    exports.Response = http_1.Response;
    exports.Connection = http_1.Connection;
    exports.ConnectionBackend = http_1.ConnectionBackend;
    exports.BrowserXhr = http_1.BrowserXhr;
    exports.BaseRequestOptions = http_1.BaseRequestOptions;
    exports.RequestOptions = http_1.RequestOptions;
    exports.BaseResponseOptions = http_1.BaseResponseOptions;
    exports.ResponseOptions = http_1.ResponseOptions;
    exports.XHRBackend = http_1.XHRBackend;
    exports.XHRConnection = http_1.XHRConnection;
    exports.JSONPBackend = http_1.JSONPBackend;
    exports.JSONPConnection = http_1.JSONPConnection;
    exports.Http = http_1.Http;
    exports.Jsonp = http_1.Jsonp;
    exports.Headers = http_1.Headers;
    exports.ResponseType = http_1.ResponseType;
    exports.ReadyState = http_1.ReadyState;
    exports.RequestMethod = http_1.RequestMethod;
    exports.URLSearchParams = http_1.URLSearchParams;
    exports.HTTP_PROVIDERS = http_1.HTTP_PROVIDERS;
    exports.HTTP_BINDINGS = http_1.HTTP_BINDINGS;
    exports.JSONP_PROVIDERS = http_1.JSONP_PROVIDERS;
    exports.JSON_BINDINGS = http_1.JSON_BINDINGS;
}));
