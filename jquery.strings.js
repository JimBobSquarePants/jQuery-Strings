/*!
* jQuery Strings Plugin v1.0.0
* https://github.com/JimBobSquarePants/jQuery-Strings
*
* Copyright 2012, James South
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* It is recommended that this file is minified before serving.
*/

(function($){
    $.isBoolean = function (obj) {
        /// <summary>
        ///     Checks the value of the given object to see whether it is a valid Boolean.
        /// </summary>
        /// <param name="obj" type="Object">
        ///     The object to check against.
        /// </param>
        /// <returns type="Boolean">True if the given object is a valid Boolean, otherwise false.</returns>

        return obj === true || obj === false;
    };
} (jQuery));

//#region String Extensions.
(function ($) {
    $.stringIsNullOrEmpty = function (string) {
        /// <summary>
        ///     Checks to see if a given string is null or empty.
        /// </summary>
        ///	<param name="string" type="String">
        ///		The string check against.
        ///	</param>
        ///	<returns type="Boolean">True if the string is null or empty, otherwise false.</returns>

        var empty = true;

        if (string && typeof string === "string") {
            empty = /^\s*$/.test(string);
        }

        return empty;
    };
} (jQuery));

(function ($) {
    $.stringContains = function (string, subString, ignoreCase) {
        /// <summary>
        ///     Checks to see if a given string contains the given substring.
        /// </summary>
        ///	<param name="string" type="String">
        ///		The string to check against.
        ///	</param>
        ///	<param name="subString" type="String">
        ///		The substring to check for.
        ///	</param>
        ///	<param name="ignoreCase" optional="true" type="Boolean">
        ///		A value indicating whether the case of the given string and substring is to be ignored.
        ///	</param>
        ///	<returns type="Boolean">True if the string contains the given substring, otherwise false.</returns>

        var found = false, ignore;

        if (!$.stringIsNullOrEmpty(string) && !$.stringIsNullOrEmpty(subString)) {
            ignore = $.isBoolean(ignoreCase) ? ignoreCase : false;

            // Convert to uppercase to ignore casing if required.
            if (ignore) {
                string = string.toUpperCase();
                subString = subString.toUpperCase();
            }
            found = string.indexOf(subString) >= 0;

        }

        return found;
    };
} (jQuery));

(function ($) {
    $.stringStartsWith = function (string, subString, ignoreCase) {
        /// <summary>
        ///     Checks to see if a given string starts with the given substring.
        ///     http://stackoverflow.com/questions/646628/javascript-startswith
        /// </summary>
        ///	<param name="string" type="String">
        ///		The string to check against.
        ///	</param>
        ///	<param name="subString" type="String">
        ///		The substring to check for.
        ///	</param>
        ///	<param name="ignoreCase" optional="true" type="Boolean">
        ///		A value indicating whether the case of the given string and substring is to be ignored.
        ///	</param>
        ///	<returns type="Boolean">True if the string is starts with the given substring, otherwise false.</returns>

        var found = false, ignore;

        if (!$.stringIsNullOrEmpty(string) && !$.stringIsNullOrEmpty(subString)) {
            ignore = $.isBoolean(ignoreCase) ? ignoreCase : false;

            // Convert to uppercase to ignore casing if required.
            if (ignore) {
                string = string.toUpperCase();
                subString = subString.toUpperCase();
            }
            found = string.lastIndexOf(subString, 0) === 0;
        }

        return found;
    };
} (jQuery));

(function ($) {
    $.stringEndsWith = function (string, subString, ignoreCase) {
        /// <summary>
        ///     Checks to see if a given string ends with the given substring.
        /// </summary>
        ///	<param name="string" type="String">
        ///		The string to check against.
        ///	</param>
        ///	<param name="subString" type="String">
        ///		The substring to check for.
        ///	</param>
        ///	<param name="ignoreCase" optional="true" type="Boolean">
        ///		A value indicating whether the case of the given string and substring is to be ignored.
        ///	</param>
        ///	<returns type="Boolean">True if the string ends with the given substring, otherwise false.</returns>

        var found = false, ignore;

        if (!$.stringIsNullOrEmpty(string) && !$.stringIsNullOrEmpty(subString)) {
            ignore = $.isBoolean(ignoreCase) ? ignoreCase : false;

            // Convert to uppercase to ignore casing if required.
            if (ignore) {
                string = string.toUpperCase();
                subString = subString.toUpperCase();
            }

            found = string.indexOf(subString, string.length - subString.length) !== -1;
        }

        return found;
    };
} (jQuery));

(function ($, undefined) {

    $.stringFormat = function () {
        /// <summary>
        ///     Similar to the NET string format method this function allows us to format a
        ///     string with a list of objects.
        ///     &#10; e.g. $.stringFormat({0}:{1}, A, B) becomes A : B
        ///     &#10; http://stackoverflow.com/questions/610406/javascript-printf-string-format/4673436#4673436
        ///     &#10; http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery
        /// </summary>

        // jsLint doesn't like the use of an unnamed parameter here but we need it.
        if (arguments && !$.stringIsNullOrEmpty(arguments[0])) {

            // Make a copy of the arguments array but trim of the first one as that is our string.
            var args = Array.prototype.slice.call(arguments, 1);

            return arguments[0].replace(/\{\{|\}\}|\{(\d+)\}/g, function (match, number) {
               
               if (match === "{{") { return "{"; }
               if (match === "}}") { return "}"; }

               return args[number];
             });
        }
        return undefined;
    };
} (jQuery));
//#endregion String Extensions.