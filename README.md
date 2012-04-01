#jQuery Strings

This plugin adds a few utility methods to the jQuery namespace in order to allow easier manipulation of strings.

Methods added:

##stringIsNullOrEmpty

Returns a result indicating whether the given string is null or empty.

**stringIsNullOrEmpty(object)**

***object** - The string check against.*

***Return Type** : Boolean.*

usage

    var empty = $.stringIsNullOrEmpty(object);


##stringContains
Checks to see if a given string contains the given substring.

**stringContains(string, subString, ignoreCase)**

***string** - The string to check against.*

***subString** - The substring to check for.*

***ignoreCase** - A value indicating whether the case of the given string and substring is to be ignored.*

***Return Type** : Boolean.*

usage

    var contains = $.stringContains(testString, testSubString, true);

##stringStartsWith
Checks to see if a given string starts with the given substring.

**stringStartsWith(string, subString, ignoreCase)**

***string** - The string to check against.*

***subString** - The substring to check for.*

***ignoreCase** - A value indicating whether the case of the given string and substring is to be ignored.*

***Return Type** : Boolean.*

usage

    var startsWith = $.stringStartsWith(testString, testSubString, true);

##stringEndsWith
Checks to see if a given string ends with the given substring.

**stringEndsWith(string, subString, ignoreCase)**

***string** - The string to check against.*

***subString** - The substring to check for.*

***ignoreCase** - A value indicating whether the case of the given string and substring is to be ignored.*

***Return Type** : Boolean.*

usage

    var endsWith = $.stringEndsWith(testString, testSubString, true);

##stringFormat
A very simple implimentation of the NET frameworks' String.Format method this method allows us to insert a collection of objects of unlimited length into a supplied string.

**stringFormat(string, args)**

***string** - The string to format.*

***args** - A collection of arguments to insert into the string.*

***Return Type** : String.*

usage

       var string = "This should {0} the string just like {1}.",
       first = "format",
       last = "Asp.Net",
       string2 = "This string should say banana three times. {0} {0}.",
       string3 = "This string should say banana twice. {0} {{0}}.",
       banana = "banana";

       string = $.stringFormat(string, first, last);
       // This outputted string reads:
       // This should format the string just like Asp.Net.

       string2 = $.stringFormat(string2, banana);
       // This outputted string reads:
       // This string should say banana three times. banana banana.
       // Note how supplying the same integer will cause the same value
       // to be inserted twice.

       string3 = $.stringFormat(string3, banana);
       // This outputted string reads:
       // This string should say banana twice. banana {0}.
       // Note how double bracing the value escapes it.
