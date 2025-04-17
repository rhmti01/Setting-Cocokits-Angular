import {
  DOCUMENT,
  DomSanitizer,
  getDOM
} from "./chunk-QRKDDEVT.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Pipe,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  TemplateRef,
  Version,
  ViewContainerRef,
  ViewEncapsulation$1,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  filter,
  firstValueFrom,
  forkJoin,
  forwardRef,
  from,
  inject,
  input,
  isPromise,
  isSignal,
  isSubscribable,
  makeEnvironmentProviders,
  map,
  model,
  output,
  pipe,
  setClassMetadata,
  share,
  signal,
  startWith,
  switchMap,
  takeUntil,
  untracked,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-NKLOH3GN.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION2 = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [["ary", WRAP_ARY_FLAG], ["bind", WRAP_BIND_FLAG], ["bindKey", WRAP_BIND_KEY_FLAG], ["curry", WRAP_CURRY_FLAG], ["curryRight", WRAP_CURRY_RIGHT_FLAG], ["flip", WRAP_FLIP_FLAG], ["partial", WRAP_PARTIAL_FLAG], ["partialRight", WRAP_PARTIAL_RIGHT_FLAG], ["rearg", WRAP_REARG_FLAG]];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _3.defaults(root.Object(), context, _3.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer = moduleExports ? context.Buffer : undefined2, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined2, symIterator = Symbol ? Symbol.iterator : undefined2, symToStringTag = Symbol ? Symbol.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject2(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject2(value)) {
            return value;
          }
          var isArr = isArray2(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer: while (++index < length) {
            var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed2 === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
              var computed2 = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger2(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger2(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer: while (++index < length && result2.length < maxLength) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject2(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject2(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject2(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray2(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject2(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray2(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return {
              "criteria": criteria,
              "index": ++index,
              "value": value
            };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject2(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed2 = array[mid];
              if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined2, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed2 <= value : computed2 < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed2, seen)) {
              var seen = computed2;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray2(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer: while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray2(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject2(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray2(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber2(value);
              other = toNumber2(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary2, arity];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber2(number);
            precision = precision == null ? 0 : nativeMin(toInteger2(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger2(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger2(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject2(objValue) && isObject2(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return {
            "start": start,
            "end": end
          };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject2(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray2(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject2(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger2(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger2(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger2(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger2(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger2(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger2(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger2(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger2(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger2(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger2(start);
            end = end === undefined2 ? length : toInteger2(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger2(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger2(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group2) {
            if (isArrayLikeObject(group2)) {
              length = nativeMax(group2.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group2) {
            return apply(iteratee2, undefined2, group2);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray2(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return {
            "done": done,
            "value": value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray2(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter2(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger2(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger2(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray2(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray2(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray2(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray2(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger2(n);
          }
          var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray2(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString2(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray2(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger2(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger2(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber2(wait) || 0;
          if (isObject2(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber2(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber2(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger2(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger2(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject2(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray2(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray2 = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean2(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject2(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger2(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject2(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber2(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber2(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString2(value) {
          return typeof value == "string" || !isArray2(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray2(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString2(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber2(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger2(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger2(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber2(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject2(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject2(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger2(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray2(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject2(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber2(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber2(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber2(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber2(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger2(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger2(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger2(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger2(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger2(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger2(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject2(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger2(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    "func": func,
                    "args": arguments,
                    "thisArg": object
                  });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger2(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger2(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray2(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter2;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray2;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray2;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean2;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber2;
        lodash.isObject = isObject2;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString2;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger2;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber2;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), {
          "chain": false
        });
        lodash.VERSION = VERSION2;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger2(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger2(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger2(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({
                "func": thru,
                "args": [interceptor],
                "thisArg": undefined2
              });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray2(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray2(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({
              "name": methodName,
              "func": lodashFunc
            });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _3 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _3;
        define(function() {
          return _3;
        });
      } else if (freeModule) {
        (freeModule.exports = _3)._ = _3;
        freeExports._ = _3;
      } else {
        root._ = _3;
      }
    }).call(exports);
  }
});

// node_modules/@cocokits/common-utils/lib/differs/array-like-differs.js
var TRACK_SELF = (e) => e;
var ArrayLikeDiff = class {
  /**
  * Sets the original array-like value for diff tracking.
  *
  * This method allows you to update the original array-like value. After setting a new original
  * value, any further diff operations will compare against this new data.
  *
  * @param original The new array-like value to be considered as the original.
  */
  setOriginal(original) {
    const {
      map: map2,
      array
    } = this.toMapAndArray(original);
    this.originalArray = array;
    this.originalMap = map2;
  }
  /**
  * Computes the differences between the original and the updated array-like value.
  *
  * This method compares the original and updated values and returns an object describing
  * the changes such as added, removed, changed, and reordered items.
  *
  * @param updated The updated array-like value to compare against the original.
  * @param updateOriginal Whether to update the original array-like value after computing the diff.
  * @returns An object detailing the changes between the original and updated values.
  *
  * @example
  * Basic usage:
  * ```
  * const changes = diff.diff([2, 3, 4]);
  * console.log(changes);
  * ```
  *
  * @example
  * Don't update the original value after diff, so we can compare a new list with the old original list:
  * ```
  * const changes = diff.diff([2, 3, 4], false);
  * console.log(changes);
  * ```
  */
  diff(updated, updateOriginal = true) {
    const {
      map: updatedMap,
      array: updatedArray
    } = this.toMapAndArray(updated);
    const changes = {
      hasChanged: false,
      added: [],
      removed: [],
      changed: [],
      reordered: []
    };
    this.originalArray.forEach((item, index) => {
      const key = this.trackBy(item);
      if (!updatedMap.has(key)) {
        changes.removed.push({
          previousIndex: index,
          newIndex: null,
          item
        });
        changes.hasChanged = true;
      }
    });
    updatedArray.forEach((item, index) => {
      const key = this.trackBy(item);
      const originalEntry = this.originalMap.get(key);
      if (!originalEntry) {
        changes.added.push({
          index: null,
          newIndex: index,
          item
        });
        changes.hasChanged = true;
      } else {
        const {
          item: originalItem,
          index: originalIndex
        } = originalEntry;
        const changed = JSON.stringify(originalItem) !== JSON.stringify(item);
        if (index !== originalIndex) {
          changes.reordered.push({
            previousIndex: originalIndex,
            newIndex: index,
            item
          });
          changes.hasChanged = true;
        }
        if (changed) {
          changes.changed.push({
            previousIndex: originalIndex,
            newIndex: index,
            item
          });
          changes.hasChanged = true;
        }
      }
    });
    if (updateOriginal) {
      this.originalMap = updatedMap;
      this.originalArray = updatedArray;
    }
    return changes;
  }
  toMapAndArray(arrayLike) {
    const array = Array.isArray(arrayLike) ? arrayLike : Array.from(arrayLike);
    const map2 = new Map(array.map((item, index) => [this.trackBy(item), {
      item,
      index
    }]));
    return {
      map: map2,
      array
    };
  }
  /**
  * Creates a new instance of ArrayLikeDiff with the provided original data.
  *
  * @param original The original array-like value to track.
  * @param options An optional object to customize the diff options, like trackBy.
  *
  * @example
  * Example with default options:
  * ```
  * const diff = new ArrayLikeDiff([1, 2, 3]);
  * ```
  *
  * @example
  * Example with custom trackBy function:
  * ```
  * const diff = new ArrayLikeDiff([1, 2, 3], { trackBy: (item) => item.id });
  * ```
  */
  constructor(original, options = {}) {
    var _options_trackBy;
    this.trackBy = (_options_trackBy = options.trackBy) != null ? _options_trackBy : TRACK_SELF;
    const {
      map: map2,
      array
    } = this.toMapAndArray(original);
    this.originalArray = array;
    this.originalMap = map2;
  }
};

// node_modules/@cocokits/common-utils/lib/differs/simple-comparator.js
function simpleComparator(previous, current) {
  if (previous === current) {
    return true;
  }
  const prevKeys = Object.keys(previous);
  const currKeys = Object.keys(current);
  if (prevKeys.length !== currKeys.length) {
    return false;
  }
  for (const key of prevKeys) {
    if (previous[key] !== current[key]) {
      return false;
    }
  }
  return true;
}
function deepComparator(previous, current) {
  if (previous === current) {
    return true;
  }
  const prevKeys = Object.keys(previous);
  const currKeys = Object.keys(current);
  if (prevKeys.length !== currKeys.length) {
    return false;
  }
  for (const key of prevKeys) {
    const prevValue = previous[key];
    const currValue = current[key];
    if (prevValue === currValue) {
      continue;
    }
    if (typeof prevValue !== typeof currValue) {
      return false;
    }
    if (typeof prevValue === "object" && prevValue !== null && currValue !== null) {
      if (!deepComparator(prevValue, currValue)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

// node_modules/@cocokits/common-utils/lib/dom/anchor-position.js
var ElementAnchorPoint;
(function(ElementAnchorPoint2) {
  ElementAnchorPoint2["TopLeft"] = "TopLeft";
  ElementAnchorPoint2["TopRight"] = "TopRight";
  ElementAnchorPoint2["BottomRight"] = "BottomRight";
  ElementAnchorPoint2["BottomLeft"] = "BottomLeft";
})(ElementAnchorPoint || (ElementAnchorPoint = {}));
function getElementAnchorPosition(targetElement, sourceElement, anchorPoint) {
  const targetReact = targetElement.getBoundingClientRect();
  const sourceRect = sourceElement.getBoundingClientRect();
  const translateXMap = {
    ["TopLeft"]: sourceRect.left - targetReact.left,
    ["TopRight"]: sourceRect.right - targetReact.right,
    ["BottomRight"]: sourceRect.right - targetReact.right,
    ["BottomLeft"]: sourceRect.left - targetReact.left
  };
  const translateYMap = {
    ["TopLeft"]: sourceRect.top - targetReact.top - targetReact.height,
    ["TopRight"]: sourceRect.top - targetReact.top - targetReact.height,
    ["BottomRight"]: sourceRect.top - targetReact.top + sourceRect.height,
    ["BottomLeft"]: sourceRect.top - targetReact.top + sourceRect.height
  };
  return {
    x: translateXMap[anchorPoint],
    y: translateYMap[anchorPoint]
  };
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-array.js
function isArray(value) {
  return Array.isArray(value);
}
function isNotArray(value) {
  return !isArray(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-blob.js
function isBlob(value) {
  return value instanceof Blob && typeof value === "object";
}
function isNotBlob(value) {
  return !isBlob(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-boolean.js
function isBoolean(value) {
  return typeof value === "boolean";
}
function isNotBoolean(value) {
  return !isBoolean(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-nullish.js
function isNullish(value) {
  return value === null || value === void 0;
}
function isNotNullish(value) {
  return !isNullish(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-number.js
function isNumberOrNaN(value) {
  return typeof value === "number";
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function isNotNumber(value) {
  return !isNumber(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-object.js
function isObject(value) {
  return typeof value === "object" && value !== null && isNotArray(value);
}
function isNutObject(value) {
  return !isObject(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-string.js
function isStringAndNotBlank(value) {
  return typeof value === "string" && value.trim() !== "";
}
function isString(value) {
  return typeof value === "string";
}
function isNotString(value) {
  return !isString(value);
}

// node_modules/@cocokits/common-utils/lib/ensure/ensure-value.js
function hasValue(value) {
  if (isNullish(value)) {
    return false;
  }
  if (isString(value)) {
    return value.trim() !== "";
  }
  if (isNumberOrNaN(value)) {
    return !isNaN(value);
  }
  if (isBlob(value)) {
    return true;
  }
  if (isArray(value)) {
    return value.length > 0;
  }
  if (isObject(value)) {
    return Object.keys(value).length > 0;
  }
  return true;
}
function hasNotValue(value) {
  return !hasValue(value);
}

// node_modules/@cocokits/common-utils/lib/event-listener/custom-event-listener.js
var CustomEventListener = class {
  /**
  * Gets the most recent value emitted by the event listener.
  *
  * @returns The last emitted value, or `undefined` if no value has been emitted yet.
  *
  * @example
  * ```typescript
  * const listener = new CustomEventListener<number>();
  * listener.emit(10);
  * console.log(listener.lastValue); // Outputs: 10
  * ```
  */
  get lastValue() {
    return this._lastValue;
  }
  set lastValue(value) {
    this._lastValue = value;
  }
  /**
  * Adds a new callback function to the event listener. When the event is emitted, the
  * provided callback is invoked synchronously with the event value.
  * If the same callback is added multiple times, it will only be called once when the event is emitted.
  *
  * @param callback The function to be executed when the event is emitted.
  *
  * @example
  * ```typescript
  * const listener = new CustomEventListener<string>();
  * listener.addEventListener((value) => console.log(value));
  * listener.emit('Hello, world!'); // Outputs: Hello, world!
  * ```
  */
  addEventListener(callback) {
    this.callbacks.add(callback);
  }
  /**
  * Removes a previously added event listener. If the callback is not present, nothing happens.
  *
  * @param callback The function to remove from the event listener.
  *
  * @example
  * ```typescript
  * const listener = new CustomEventListener<number>();
  * const callback = (value: number) => console.log(value);
  * listener.addEventListener(callback);
  * listener.removeEventListener(callback);
  * listener.emit(10); // No output
  * ```
  */
  removeEventListener(callback) {
    this.callbacks.delete(callback);
  }
  /**
  * Removes all callback functions from the event listener. After calling this, no listeners
  * will be triggered by emitted events.
  *
  * @example
  * ```typescript
  * const listener = new CustomEventListener<boolean>();
  * listener.addEventListener((value) => console.log(value));
  * listener.removeAllEventListener();
  * listener.emit(true); // No output
  * ```
  */
  removeAllEventListener() {
    this.callbacks.clear();
  }
  /**
  * Emits a new event value to all registered listeners. The event listeners will be invoked
  * synchronously and in the order they were added. If no listeners are registered, this method
  * does nothing.
  *
  * @param value The value to be emitted to all listeners.
  *
  * @example
  * ```typescript
  * const listener = new CustomEventListener<number>();
  * listener.addEventListener((value) => console.log('First:', value));
  * listener.addEventListener((value) => console.log('Second:', value));
  * listener.emit(42); // Outputs: First: 42 Second: 42
  * ```
  */
  emit(value) {
    this.lastValue = value;
    this.callbacks.forEach((callback) => callback(value));
  }
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set();
  }
};

// node_modules/@cocokits/common-utils/lib/event-listener/once-event-listener.js
function onceEventListener(element, eventName, callback) {
  const onEvent = (e) => {
    callback(e);
    element.removeEventListener(eventName, onEvent);
  };
  element.addEventListener(eventName, onEvent);
}

// node_modules/@cocokits/common-utils/lib/transform/to-array.js
function toArray(value) {
  if (isNullish(value)) {
    return [];
  }
  return isArray(value) ? value : [value];
}

// node_modules/@cocokits/common-utils/lib/observer/resize-observer.js
function resizeObserver$(elems, config) {
  const elemsList = toArray(elems);
  const onResizeChange = (subscriber) => {
    const callBack = (entries, observer) => subscriber.next({
      entries,
      observer
    });
    const onUnSubscribe = () => resizeObserver.disconnect();
    const resizeObserver = new ResizeObserver(callBack);
    elemsList.forEach((elem) => resizeObserver.observe(elem, config || {}));
    return onUnSubscribe;
  };
  return new Observable(onResizeChange).pipe(share());
}

// node_modules/@cocokits/common-utils/lib/observer/intersection-observer.js
function intersectionObserver$(elements, config) {
  const elementsList = toArray(elements);
  const onObserverChanges = (subscriber) => {
    const callBack = (entries, observer) => {
      subscriber.next({
        entries,
        observer
      });
    };
    const onSubscribe = () => intersectionObserver.disconnect();
    const intersectionObserver = new IntersectionObserver(callBack, config);
    elementsList.forEach((elem) => intersectionObserver.observe(elem));
    return onSubscribe;
  };
  return new Observable(onObserverChanges).pipe(share());
}

// node_modules/@cocokits/common-utils/lib/observer/mutation-observer.js
function mutationObserver$(elems, config) {
  const elemsList = toArray(elems);
  const onMutationChange = (subscriber) => {
    const callBack = (entries, observer) => subscriber.next({
      entries,
      observer
    });
    const onUnSubscribe = () => mutationObserver.disconnect();
    const mutationObserver = new MutationObserver(callBack);
    elemsList.forEach((elem) => mutationObserver.observe(elem, config));
    return onUnSubscribe;
  };
  return new Observable(onMutationChange).pipe(share());
}

// node_modules/@cocokits/common-utils/lib/search/fuzzysearch.js
function fuzzysearch(needle, haystack) {
  const tlen = haystack.length;
  const qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (let i = 0, j = 0; i < qlen; i++) {
    const nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

// node_modules/@cocokits/common-utils/lib/promise/lazy-promise.js
function lazyPromise() {
  let resolveFunc;
  let rejectFunc;
  const promise = new Promise((resolve, reject) => {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
  return {
    promise,
    resolve: resolveFunc,
    reject: rejectFunc
  };
}

// node_modules/@cocokits/common-utils/lib/rxjs/once-replay-subject.js
var OnceReplaySubject = class extends ReplaySubject {
  /** @ignore */
  next(value) {
    super.next(value);
    this.complete();
  }
  /** @ignore */
  constructor(_bufferSize, _windowTime, _timestampProvider) {
    super(_bufferSize, _windowTime, _timestampProvider);
  }
};

// node_modules/@cocokits/common-utils/lib/rxjs/once-subject.js
var OnceSubject = class extends Subject {
  /** @ignore */
  next(value) {
    super.next(value);
    this.complete();
  }
  /** @ignore */
  constructor() {
    super();
  }
};

// node_modules/@cocokits/common-utils/lib/rxjs/skip-nullish.js
function skipNullish() {
  return pipe(filter((value) => value !== null && value !== void 0));
}

// node_modules/@cocokits/common-utils/lib/scroll/scroll-locker.js
var ScrollLocker = class _ScrollLocker {
  /**
  * Returns the global instance of `ScrollLocker` ensuring a singleton pattern.
  *
  * @returns The global `ScrollLocker` instance.
  *
  * @example
  * ```typescript
  * const locker = ScrollLocker.globalInstance();
  * const locker2 = ScrollLocker.globalInstance();
  * locker.lock();      // Locks scrolling
  * locker2.isLocked(); // true
  * ```
  */
  static globalInstance() {
    if (!_ScrollLocker.instance) {
      _ScrollLocker.instance = new _ScrollLocker();
    }
    return _ScrollLocker.instance;
  }
  /**
  * Determines whether scrolling is currently locked on the page.
  *
  * @returns `true` if scrolling is locked, otherwise `false`.
  *
  * @example
  * ```typescript
  * const isLocked = ScrollLocker.globalInstance().isLocked;
  * console.log(isLocked);  // Outputs: true or false
  * ```
  */
  get isLocked() {
    return document.documentElement.style.position === "fixed";
  }
  /**
  * Locks the scroll on the page, optionally hiding the scrollbar.
  *
  * **Note**: Hiding the scrollbar may cause a visible shift in content due to changes in
  * the body width, particularly when the content resizes.
  *
  * @param hideScrollbar Whether to hide the scrollbar when locking.
  *
  * - If `hideScrollbar` is `false`, the scrollbar remains visible, but the user cannot scroll.
  *   This is useful when you want to avoid changing the width of the body element to ensure
  *   that all elements stay in their original position. This method is ideal for cases where
  *   the overlay has a backdrop (like a modal) with opacity or no backdrop.
  *
  * - If `hideScrollbar` is `true`, the scrollbar is hidden, and the body width changes.
  *   This is beneficial for scenarios where a fullscreen overlay is in place, and the user
  *   cannot see the content behind the overlay. The size change in the body will be hidden behind
  *   the overlay, so the user will not notice any layout shift.
  *
  * @example
  * ```typescript
  * const locker = ScrollLocker.globalInstance();
  * locker.lock();     // Locks scroll with visible scrollbar
  * locker.lock(true); // Locks scroll and hides the scrollbar
  * ```
  */
  lock(hideScrollbar = false) {
    if (this.isLocked) {
      return;
    }
    const body = document.body;
    const documentElement = document.documentElement;
    const hasBodyScrolled = body.scrollHeight > window.innerHeight || body.scrollWidth > window.innerWidth;
    if (hasBodyScrolled) {
      const documentRect = documentElement.getBoundingClientRect();
      const pageTop = 0;
      const pageLeft = 0;
      const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || pageTop;
      const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || pageLeft;
      documentElement.style.top = -top + "px";
      documentElement.style.left = -left + "px";
      documentElement.style.position = "fixed";
      documentElement.style.width = "100%";
      hideScrollbar ? documentElement.style.overflow = "hidden" : documentElement.style.overflowY = "scroll";
      this.callbacks.forEach((callback) => callback(true));
    }
  }
  /**
  * Unlocks the scroll on the page, restoring the previous scroll position.
  * If the scroll is already unlocked, this function has no effect.
  *
  * @example
  * ```typescript
  * const locker = ScrollLocker.globalInstance();
  * locker.unlock();  // Unlocks scrolling and restores scroll position
  * ```
  */
  unlock() {
    if (!this.isLocked) {
      return;
    }
    const documentElement = document.documentElement;
    documentElement.style.overflow = "";
    documentElement.style.overflowY = "";
    documentElement.style.position = "";
    documentElement.style.width = "";
    const pageTop = Math.abs(parseFloat(documentElement.style.top));
    const pageLeft = Math.abs(parseFloat(documentElement.style.left));
    documentElement.scrollTo({
      top: isNaN(pageTop) ? 0 : pageTop,
      left: isNaN(pageLeft) ? 0 : pageLeft
    });
    documentElement.style.removeProperty("top");
    documentElement.style.removeProperty("left");
    documentElement.style.removeProperty("overflow");
    this.callbacks.forEach((callback) => callback(false));
  }
  /**
  * Adds a callback function that is invoked whenever the scroll lock state changes.
  *
  * @param callback A function that receives the current lock state (`true` for locked, `false` for unlocked).
  *
  * @example
  * ```typescript
  * const locker = ScrollLocker.globalInstance();
  * locker.addLockChangeListener((isLocked) => {
  *   console.log('Scroll locked:', isLocked);
  * });
  * ```
  */
  addLockChangeListener(callback) {
    this.callbacks.add(callback);
  }
  /**
  * Removes a previously added scroll lock change listener.
  *
  * @param callback The listener function to be removed.
  *
  * @example
  * ```typescript
  * const locker = ScrollLocker.globalInstance();
  * locker.removeLockChangeListener(myCallback);
  * ```
  */
  removeLockChangeListener(callback) {
    this.callbacks.delete(callback);
  }
  /** @ignore */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set();
  }
};

// node_modules/@cocokits/common-utils/lib/transform/amount.js
function toAmountFormat(value) {
  const numericValue = parseFloat(value.replace(/,/g, ""));
  if (isNaN(numericValue)) {
    return "";
  }
  const formattedValue = numericValue.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formattedValue;
}
function removeAmountFormat(string) {
  return string.replace(/,/g, "");
}

// node_modules/@cocokits/common-utils/lib/transform/to-boolean-or-present.js
function toBooleanOrPresent(value) {
  return value !== null && value !== void 0 && `${value}`.toLowerCase() !== "false";
}

// node_modules/@cocokits/common-utils/lib/transform/to-number.js
function toNumber(value) {
  const number = Number(value);
  if (Number.isNaN(number)) {
    throw new Error(`Could not convert value to number: ${value}`);
  }
  return number;
}

// node_modules/@cocokits/common-utils/lib/uncategorized/deep-merge.js
var import_lodash2 = __toESM(require_lodash());

// node_modules/@cocokits/common-utils/lib/uncategorized/deep-clone.js
var import_lodash = __toESM(require_lodash());
function deepClone(target) {
  return import_lodash.default.cloneDeep(target);
}

// node_modules/@cocokits/common-utils/lib/uncategorized/deep-merge.js
function deepMerge(target, source, customizer = deepMergeDefaultCustomize) {
  return import_lodash2.default.mergeWith(deepClone(target), deepClone(source), customizer);
}
function deepMergeDefaultCustomize(obj, src) {
  if (import_lodash2.default.isArray(obj) && import_lodash2.default.isArray(src)) {
    const set = /* @__PURE__ */ new Set([...obj, ...src]);
    return Array.from(set);
  }
  return;
}
function deepMergeWithIdCustomizer(objValue, srcValue) {
  const isObjectWithId = (value) => {
    return import_lodash2.default.isObject(value) && "id" in value;
  };
  if (import_lodash2.default.isArray(objValue) && import_lodash2.default.isArray(srcValue)) {
    const mergedArray = import_lodash2.default.cloneDeep(objValue);
    srcValue.forEach((srcItem) => {
      const targetIndex = mergedArray.findIndex((targetItem) => isObjectWithId(targetItem) && isObjectWithId(srcItem) && targetItem.id === srcItem.id);
      if (targetIndex >= 0) {
        mergedArray[targetIndex] = import_lodash2.default.merge({}, mergedArray[targetIndex], srcItem);
      } else {
        mergedArray.push(srcItem);
      }
    });
    return mergedArray;
  }
  return;
}

// node_modules/@cocokits/common-utils/lib/uncategorized/for-each.js
function recordForEach(source, callback) {
  Object.entries(source).forEach(([currentKey, currentValue]) => {
    callback(currentValue, currentKey);
  });
}

// node_modules/@swc/helpers/esm/_extends.js
function _extends() {
  _extends = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@cocokits/common-utils/lib/uncategorized/reduce.js
function recordReduceMerge(source, callback, initValue = {}) {
  const result = Object.entries(source).reduce((previousValueMap, [currentKey, currentValue]) => {
    const newValueMap = callback(currentValue, currentKey);
    return newValueMap ? _extends({}, previousValueMap, newValueMap) : previousValueMap;
  }, initValue);
  return result;
}
function recordReduceDeepMerge(source, callback, initValue = {}) {
  const result = Object.entries(source).reduce((previousValueMap, [currentKey, currentValue]) => {
    const newValueMap = callback(currentValue, currentKey);
    return newValueMap ? deepMerge(previousValueMap, newValueMap) : previousValueMap;
  }, initValue);
  return result;
}
function recordReduceDeepMergeUniqId(source, callback, initValue = {}) {
  const result = Object.entries(source).reduce((previousValueMap, [currentKey, currentValue]) => {
    const newValueMap = callback(currentValue, currentKey);
    return newValueMap ? deepMerge(previousValueMap, newValueMap, deepMergeWithIdCustomizer) : previousValueMap;
  }, initValue);
  return result;
}
function reduceMerge(source, callback, initValue = {}) {
  const result = source.reduce((previousValueMap, currentValue) => {
    const newValueMap = callback(currentValue);
    return newValueMap ? _extends({}, previousValueMap, newValueMap) : previousValueMap;
  }, initValue);
  return result;
}
function reduceDeepMerge(source, callback, initValue = {}) {
  const result = source.reduce((previousValueMap, currentValue) => {
    const newValueMap = callback(currentValue);
    return newValueMap ? deepMerge(previousValueMap, newValueMap) : previousValueMap;
  }, initValue);
  return result;
}
function repeatReduceMerge(repeatCount, callback, initValue = {}) {
  let result = _extends({}, initValue);
  for (let i = 0; i < repeatCount; i++) {
    const newValue = callback(i);
    if (newValue) {
      result = _extends({}, result, newValue);
    }
  }
  return result;
}

// node_modules/@cocokits/common-utils/lib/uncategorized/sanitize.js
function sanitizeValue(value) {
  if (value === "null") {
    return null;
  }
  if (value === "undefined" || value === "") {
    return void 0;
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (!isNaN(Number(value)) && isNotNullish(value)) {
    return Number(value);
  }
  return value;
}

// node_modules/@cocokits/common-utils/lib/uncategorized/textarea.js
function autoResizeTextarea(textarea, minRow = 1, maxRow = 5) {
  var _textarea_parentElement;
  const parent = (_textarea_parentElement = textarea.parentElement) != null ? _textarea_parentElement : document;
  let minHeight = 0;
  let maxHeight = 0;
  let borderSize = 0;
  let paddingSize = 0;
  const recalculateValues = () => {
    const clone = textarea.cloneNode();
    clone.style.position = "absolute";
    clone.style.height = "0";
    clone.style.visibility = "none";
    parent.appendChild(clone);
    borderSize = clone.offsetHeight - clone.clientHeight;
    paddingSize = clone.clientHeight;
    clone.value = Array(minRow).fill(0).join("\n");
    minHeight = clone.scrollHeight - paddingSize + borderSize;
    clone.value = Array(maxRow).fill(0).join("\n");
    maxHeight = clone.scrollHeight - paddingSize + borderSize;
    clone.remove();
    update();
  };
  const update = () => {
    textarea.style.height = "0";
    const currentHeight = textarea.scrollHeight + paddingSize;
    const height = Math.max(minHeight, Math.min(currentHeight, maxHeight));
    textarea.style.height = height + "px";
  };
  const destroy = () => {
    textarea.removeEventListener("click", recalculateValues);
    textarea.removeEventListener("input", update);
  };
  textarea.addEventListener("click", recalculateValues);
  textarea.addEventListener("input", update);
  recalculateValues();
  update();
  return {
    recalculateValues,
    update,
    destroy
  };
}

// node_modules/@cocokits/common-utils/lib/uncategorized/string.js
function safeMergeString(...str) {
  return str.filter((s) => !!s).map((s) => `${s}`).join("");
}

// node_modules/@cocokits/common-utils/lib/uncategorized/instance-store.js
var InstanceStore = class InstanceStore2 {
  /**
  * Retrieves a single instance of the specified class.
  * If an instance of the class has already been created, it returns the same instance.
  * Otherwise, it creates a new instance and returns it.
  *
  * @template T - The type of the class instance.
  * @param classRef - A reference to the class constructor.
  * @returns The single instance of the specified class.
  *
  * @example
  * ```typescript
  * class MyClass {
  *   // class implementation
  * }
  *
  * const instance = InstanceStore.getInstance(MyClass);
  * ```
  */
  static getInstance(classRef) {
    if (!InstanceStore2.instances.has(classRef)) {
      InstanceStore2.instances.set(classRef, new classRef());
    }
    return InstanceStore2.instances.get(classRef);
  }
};
InstanceStore.instances = /* @__PURE__ */ new Map();
function getInstance(classRef) {
  return InstanceStore.getInstance(classRef);
}

// node_modules/@cocokits/common-utils/lib/selection/selection.js
var Selection = class {
  diffChangesAndEmit({
    skipEmitEvent = false,
    triggerSource
  } = {}) {
    if (skipEmitEvent) {
      this.differs.setOriginal(this.selectionSet);
    }
    const changes = this.differs.diff(this.selectionSet);
    if (changes.hasChanged || !this.onlyEmitOnValueChange) {
      this.events.emit({
        triggerSource,
        added: changes.added.map((a) => a.item),
        removed: changes.removed.map((a) => a.item)
      });
    }
  }
  /**
  * Updates the selection options (such as enabling or disabling multiple selections).
  *
  * @param options Partial selection options to update.
  *
  * @example
  * ```typescript
  * const selection = new Selection<number>([1]);
  * selection.updateOptions({ multiple: true });
  * selection.select([2, 3, 4]);
  * console.log(selection.getSelected()); // [1, 2, 3, 4]
  * ```
  */
  updateOptions(options) {
    var _options_multiple;
    this.isMultiple = (_options_multiple = options.multiple) != null ? _options_multiple : this.isMultiple;
    this.verifyValueAssignment(Array.from(this.selectionSet));
    this.differs = new ArrayLikeDiff(this.selectionSet, {
      trackBy: options.trackBy
    });
  }
  /**
  * Adds an event listener that is triggered when the selection changes.
  *
  * @param callback The callback function to be executed on selection change.
  *
  * @example
  * ```typescript
  * const selection = new Selection<string>();
  * selection.addChangeEventListener(({ added, removed }) => {
  *   console.log('Added:', added);
  *   console.log('Removed:', removed);
  * });
  *
  * selection.select('apple'); // Logs: Added: ['apple'], Removed: []
  * selection.deselect('apple'); // Logs: Added: [], Removed: ['apple']
  * ```
  */
  addChangeEventListener(callback) {
    this.events.addEventListener(callback);
  }
  /**
  * Removes a previously added event listener for selection changes.
  *
  * @param callback The listener to remove.
  */
  removeChangeEventListener(callback) {
    this.events.removeEventListener(callback);
  }
  /**
  * Removes all event listeners for selection changes.
  */
  removeAllChangeEventListener() {
    this.events.removeAllEventListener();
  }
  /**
  * Determines whether a specific value is selected.
  *
  * @param value The value to check.
  * @returns `true` if the value is selected, otherwise `false`.
  *
  * @example
  * ```typescript
  * const selection = new Selection<number>([1, 2]);
  * console.log(selection.isSelected(1)); // true
  * console.log(selection.isSelected(3)); // false
  * ```
  */
  isSelected(value) {
    return this.selectionSet.has(value);
  }
  /**
  * Get a list of selected items.
  */
  getSelected() {
    return Array.from(this.selectionSet);
  }
  /**
  * Clears all selected values.
  *
  * @param config Optional configuration for clearing the selection (e.g., skip emitting events).
  */
  clear(config) {
    this.selectionSet.clear();
    this.diffChangesAndEmit(config);
  }
  /**
  * Selects a value or an array of values.
  *
  * @param values The values to select.
  * @param config Optional configuration for selecting the values (e.g., skip emitting events).
  *
  * @example
  * ```typescript
  * const selection = new Selection<number>();
  * selection.select([1, 2, 3]);
  * console.log(selection.getSelected()); // [1, 2, 3]
  * ```
  */
  select(values, config) {
    const valuesArray = Array.isArray(values) ? values : [values];
    this.verifyValueAssignment(valuesArray);
    if (!this.isMultiple) {
      this.selectionSet.clear();
    }
    valuesArray.forEach((value) => this.selectionSet.add(value));
    this.diffChangesAndEmit(config);
  }
  /**
  * Deselects a value or an array of values.
  *
  * @param values The values to deselect.
  * @param config Optional configuration for deselecting the values (e.g., skip emitting events).
  *
  * @example
  * ```typescript
  * const selection = new Selection<number>([1, 2, 3]);
  * selection.deselect([2, 3]);
  * console.log(selection.getSelected()); // [1]
  * ```
  */
  deselect(values, config) {
    const valuesArray = Array.isArray(values) ? values : [values];
    this.verifyValueAssignment(valuesArray);
    valuesArray.forEach((value) => this.selectionSet.delete(value));
    this.diffChangesAndEmit(config);
  }
  /**
  * Sets the selected values, replacing any existing selection.
  *
  * @param values The new selected values.
  * @param config Optional configuration for setting the values (e.g., skip emitting events).
  *
  * @example
  * ```typescript
  * const selection = new Selection<number>([1, 2, 3, 4]);
  * selection.setSelection([5, 6, 7]);
  * console.log(selection.getSelected()); // [5, 6, 7]
  * ```
  */
  setSelection(values, config) {
    const valuesArray = Array.isArray(values) ? values : [values];
    this.verifyValueAssignment(valuesArray);
    this.selectionSet.clear();
    valuesArray.forEach((value) => this.selectionSet.add(value));
    this.diffChangesAndEmit(config);
  }
  /**
  * Toggles a value between selected and deselected.
  *
  * @param value The value to toggle.
  * @param config Optional configuration for toggling the value (e.g., skip emitting events).
  *
  * @example
  * ```typescript
  * const selection = new Selection<string>(['apple']);
  * selection.toggle('banana');
  * console.log(selection.getSelected()); // ['apple', 'banana']
  *
  * selection.toggle('apple');
  * console.log(selection.getSelected()); // ['banana']
  * ```
  */
  toggle(value, config) {
    return this.isSelected(value) ? this.deselect(value, config) : this.select(value, config);
  }
  /**
  * Determines whether the selection does not have a value.
  */
  isEmpty() {
    return this.selectionSet.size === 0;
  }
  /**
  * Gets whether multiple values can be selected.
  */
  isMultipleSelection() {
    return this.isMultiple;
  }
  /**
  * Determines whether the selection has a value.
  */
  hasValue() {
    return !this.isEmpty();
  }
  /**
  * Verifies the value assignment and throws an error if the specified value array is
  * including multiple values while the selection model is not supporting multiple values.
  */
  verifyValueAssignment(values) {
    if (values.length > 1 && !this.isMultiple) {
      throw new Error("Cannot pass multiple values into Selection with single-value mode.");
    }
  }
  /**
  * Creates a new `Selection` instance.
  *
  * @param selectedValues The initial values to be selected. Defaults to an empty array if no values are provided.
  * @param options An optional object to configure the selection behavior.
  *
  * - `multiple`: If `true`, allows multiple items to be selected. If `false` or omitted, only one item can be selected.
  * - `trackBy`: A function to customize how items are compared. By default, items are compared by reference.
  */
  constructor(selectedValues = [], options = {}) {
    this.events = new CustomEventListener();
    var _options_multiple;
    this.isMultiple = (_options_multiple = options.multiple) != null ? _options_multiple : false;
    var _options_onlyEmitOnValueChange;
    this.onlyEmitOnValueChange = (_options_onlyEmitOnValueChange = options.onlyEmitOnValueChange) != null ? _options_onlyEmitOnValueChange : true;
    this.selectionSet = new Set(selectedValues);
    this.differs = new ArrayLikeDiff(this.selectionSet, {
      trackBy: options.trackBy
    });
  }
};

// node_modules/@cocokits/common-utils/lib/string/case.js
function toTitleCase(str) {
  const words = str.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_-]+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ");
}
function toCamelCase(str) {
  const words = str.trim().split(/\s+|[-_]+/).map((w) => w.toLowerCase());
  return words[0] + words.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}
function toPascalCase(str) {
  return str.trim().split(/\s+|[-_]+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}
function toKebabCase(str) {
  return str.trim().split(/\s+|[-_]+/).map((w) => w.toLowerCase()).join("-");
}
function toSnakeCase(str) {
  return str.trim().split(/\s+|[--]+/).map((w) => w.toLowerCase()).join("_");
}

// node_modules/@cocokits/core/lib/ui-component-props/ui-component-props.js
function validateUiBaseComponentProps(componentName, componentProps, themeConfig) {
  if (!themeConfig) {
    throw new Error(`'ThemeConfig' has not provided in the root of application`);
  }
  const componentConfig = themeConfig.components[componentName];
  if (!componentConfig) {
    const validComponents = Object.keys(themeConfig.components).join(", ");
    throw new Error(`This theme does not support the '${componentName}' component. Please select a different theme that supports this component or choose from available components: ${validComponents}`);
  }
  Object.entries(componentConfig).filter((entry) => entry[0] !== "additional").forEach((entry) => {
    const propName = entry[0];
    const propConfig = entry[1];
    const componentPropValue = sanitizeValue(componentProps[propName]);
    if (componentPropValue !== null && componentPropValue !== void 0 && typeof componentPropValue !== typeof (propConfig == null ? void 0 : propConfig.values[0])) {
      throw new Error(`The '${componentName}' component does not support the '${propName}' property as '${typeof componentPropValue}'. Valid type is: ${typeof (propConfig == null ? void 0 : propConfig.values[0])}`);
    }
    if (propConfig === null) {
      if (hasValue(componentProps[propName])) {
        const validProps = Object.values(componentConfig).filter((config) => !!config).join(", ");
        throw new Error(`The '${componentName}' component does not support the '${propName}' property in this theme. Valid properties include: ${validProps}`);
      }
      return;
    }
    if (isNotNullish(componentPropValue) && !propConfig.values.includes(componentPropValue)) {
      throw new Error(`'${componentPropValue}' is an invalid value for '${propName}' in '${componentName}'. Accepted values in this theme are: ${propConfig.values.join(", ")}`);
    }
  });
  if (componentConfig.additional) {
    Object.entries(componentConfig.additional).forEach((entry) => {
      const propName = entry[0];
      const propConfig = entry[1];
      const componentPropValue = sanitizeValue(componentProps[propName]);
      if (componentPropValue !== null && componentPropValue !== void 0 && typeof componentPropValue !== typeof (propConfig == null ? void 0 : propConfig.values[0])) {
        throw new Error(`The '${componentName}' component does not support the '${propName}' property as '${typeof componentPropValue}'. Valid type is: ${typeof (propConfig == null ? void 0 : propConfig.values[0])}`);
      }
      if (propConfig === null) {
        if (hasValue(componentProps[propName])) {
          const validProps = Object.values(componentConfig).filter((config) => !!config).join(", ");
          throw new Error(`The '${componentName}' component does not support the '${propName}' property in this theme. Valid properties include: ${validProps}`);
        }
        return;
      }
      if (isNotNullish(componentPropValue) && !propConfig.values.includes(componentPropValue)) {
        throw new Error(`'${componentPropValue}' is an invalid value for '${propName}' in '${componentName}'. Accepted values in this theme are: ${propConfig.values.join(", ")}`);
      }
    });
  }
}
function getComponentPropsWithDefault(layoutConfig, themeConfig, componentProps) {
  var _themeConfig_components_layoutConfig_componentName, _themeConfig_components, _themeConfig_components_layoutConfig_componentName_type, _themeConfig_components_layoutConfig_componentName1, _themeConfig_components_layoutConfig_componentName_color, _themeConfig_components_layoutConfig_componentName2, _themeConfig_components_layoutConfig_componentName_size, _themeConfig_components_layoutConfig_componentName3;
  var _themeConfig_components_layoutConfig_componentName_additional;
  const additional = recordReduceMerge((_themeConfig_components_layoutConfig_componentName_additional = (_themeConfig_components = themeConfig.components) == null ? void 0 : (_themeConfig_components_layoutConfig_componentName = _themeConfig_components[layoutConfig.componentName]) == null ? void 0 : _themeConfig_components_layoutConfig_componentName.additional) != null ? _themeConfig_components_layoutConfig_componentName_additional : {}, (value, key) => {
    var _componentProps_additional;
    return {
      [key]: valueOrDefault((_componentProps_additional = componentProps.additional) == null ? void 0 : _componentProps_additional[key], value == null ? void 0 : value.default)
    };
  });
  return {
    type: valueOrDefault(componentProps.type, (_themeConfig_components_layoutConfig_componentName1 = themeConfig.components[layoutConfig.componentName]) == null ? void 0 : (_themeConfig_components_layoutConfig_componentName_type = _themeConfig_components_layoutConfig_componentName1.type) == null ? void 0 : _themeConfig_components_layoutConfig_componentName_type.default, {
      acceptNull: false
    }),
    color: valueOrDefault(componentProps.color, (_themeConfig_components_layoutConfig_componentName2 = themeConfig.components[layoutConfig.componentName]) == null ? void 0 : (_themeConfig_components_layoutConfig_componentName_color = _themeConfig_components_layoutConfig_componentName2.color) == null ? void 0 : _themeConfig_components_layoutConfig_componentName_color.default),
    size: valueOrDefault(componentProps.size, (_themeConfig_components_layoutConfig_componentName3 = themeConfig.components[layoutConfig.componentName]) == null ? void 0 : (_themeConfig_components_layoutConfig_componentName_size = _themeConfig_components_layoutConfig_componentName3.size) == null ? void 0 : _themeConfig_components_layoutConfig_componentName_size.default),
    additional
  };
}
function valueOrDefault(value, defaultValue, {
  acceptNull = true
} = {}) {
  if (acceptNull && value === null) {
    return null;
  }
  return hasValue(value) ? value : defaultValue;
}

// node_modules/@cocokits/core/lib/class-names/checkbox-class-names.js
var checkboxLayoutClassNamesConfig = {
  componentName: "checkbox",
  baseSelectorStructure: {
    block: "checkbox"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "Applied to the host element of the Checkbox component."
    },
    wrapper: {
      name: "Wrapper Element",
      selectorStructure: [{
        element: "wrapper"
      }],
      description: "Applied to a `div` element, child of the `host` element, serving as a wrapper for the checkbox input and label."
    },
    inputWrapper: {
      name: "Input Wrapper Element",
      selectorStructure: [{
        element: "input-wrapper"
      }],
      description: "Applied to a `div` element, child of the `wrapper` element, serving as a wrapper for the checkbox input and all sub-elements for styling the checkbox."
    },
    input: {
      name: "Input Element",
      selectorStructure: [{
        element: "input"
      }],
      description: "Applied to the `input` element, child of the `inputWrapper`, with type `checkbox`."
    },
    backdrop: {
      name: "Backdrop Element",
      selectorStructure: [{
        element: "backdrop"
      }],
      description: "Applied to an empty `div` element, child of the `inputWrapper`, for additional styling based on the design system concepts. Default styles include full-size `absolute` position and `display: none`. Example usage: Ripple effect."
    },
    background: {
      name: "Background Element",
      selectorStructure: [{
        element: "background"
      }],
      description: "Applied to a `div` element containing a checkmark SVG from `ThemeConfig`, child of the `inputWrapper`, to show a custom checkbox symbol based on the design system concepts."
    },
    label: {
      name: "Label Element",
      selectorStructure: [{
        element: "label"
      }],
      description: "Applied to the `label` element, child of the `wrapper`, containing the label or description of the checkbox."
    },
    checked: {
      name: "Host Element - checked status",
      selectorStructure: [{
        modifier: "checked"
      }],
      description: "Applied to the host element of the Checkbox component, when the checkbox is checked"
    },
    unchecked: {
      name: "Host Element - unchecked status",
      selectorStructure: [{
        modifier: "unchecked"
      }],
      description: "Applied to the host element of the Checkbox component, when the checkbox is unchecked"
    },
    disabled: {
      name: "Host Element - disabled status",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the Checkbox component, when the checkbox is disabled"
    },
    indeterminate: {
      name: "Host Element - indeterminate status",
      selectorStructure: [{
        modifier: "indeterminate"
      }],
      description: "Applied to the host element of the Checkbox component, when the checkbox is indeterminate"
    }
  }
};
function getCheckboxClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(checkboxLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "host", themeConfig, componentProps),
    wrapper: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "wrapper", themeConfig),
    inputWrapper: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "inputWrapper", themeConfig),
    input: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "input", themeConfig),
    backdrop: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "backdrop", themeConfig),
    background: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "background", themeConfig),
    label: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "label", themeConfig),
    checked: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "checked", themeConfig),
    unchecked: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "unchecked", themeConfig),
    disabled: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "disabled", themeConfig),
    indeterminate: generateLayoutClassNameFromElement(checkboxLayoutClassNamesConfig, "indeterminate", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/chip-class-names.js
var chipLayoutClassNamesConfig = {
  componentName: "chip",
  baseSelectorStructure: {
    block: "chip"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Chip component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the Chip component, when the chip is disabled"
    },
    removable: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "removable"
      }],
      description: "Applied to the host element of the Chip component, when the chip is removable"
    },
    contentWrapper: {
      name: "Wrapper of content",
      selectorStructure: [{
        element: "content-wrapper"
      }],
      description: "It will add to the wrapper of content element."
    },
    removeIconWrapper: {
      name: "Wrapper of remove icon",
      selectorStructure: [{
        element: "remove-icon-wrapper"
      }],
      description: "It will add to the wrapper of remove icon element."
    }
  }
};
function getChipClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(chipLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(chipLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(chipLayoutClassNamesConfig, "disabled", themeConfig),
    removable: generateLayoutClassNameFromElement(chipLayoutClassNamesConfig, "removable", themeConfig),
    contentWrapper: generateLayoutClassNameFromElement(chipLayoutClassNamesConfig, "contentWrapper", themeConfig),
    removeIconWrapper: generateLayoutClassNameFromElement(chipLayoutClassNamesConfig, "removeIconWrapper", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/chip-list-class-names.js
var chipListLayoutClassNamesConfig = {
  componentName: "chipList",
  baseSelectorStructure: {
    block: "chip-list"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of ChipList component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the ChipList component, when the ChipList is disabled"
    },
    input: {
      name: "Host Element",
      selectorStructure: [{
        element: "input"
      }],
      description: "Applied to the input element of the ChipList component, to write and add new chip"
    }
  }
};
function getChipListClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(chipListLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(chipListLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(chipListLayoutClassNamesConfig, "disabled", themeConfig),
    input: generateLayoutClassNameFromElement(chipListLayoutClassNamesConfig, "input", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/css-selector-render.js
function cssSelectorRender({
  themePrefix,
  block,
  element,
  modifier
}) {
  const cckPrefix = "cck";
  const prefix = [themePrefix, cckPrefix].filter(Boolean).join("-");
  if (hasNotValue(element) && hasNotValue(modifier)) {
    return `${prefix}-${block}`;
  }
  if (hasValue(element) && hasNotValue(modifier)) {
    return `${prefix}-${block}__${element}`;
  }
  if (hasNotValue(element) && hasValue(modifier)) {
    return `${prefix}-${block}--${modifier}`;
  }
  return `${prefix}-${block}__${element}--${modifier}`;
}

// node_modules/@cocokits/core/lib/class-names/divider-class-names.js
var dividerLayoutClassNamesConfig = {
  componentName: "divider",
  baseSelectorStructure: {
    block: "divider"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Divider component."
    }
  }
};
function getDividerClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(dividerLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(dividerLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/error-class-names.js
var errorLayoutClassNamesConfig = {
  componentName: "error",
  baseSelectorStructure: {
    block: "error"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Error component."
    }
  }
};
function getErrorClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(errorLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(errorLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/form-field-class-names.js
var formFieldLayoutClassNamesConfig = {
  componentName: "formField",
  baseSelectorStructure: {
    block: "form-field"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of FormField component."
    },
    wrapper: {
      name: "Wrapper Element",
      selectorStructure: [{
        element: "wrapper"
      }],
      description: "It contains a wrapper element for `leading`, `trailing`, `input-wrapper` elements"
    },
    inputWrapper: {
      name: "Input Wrapper Element",
      selectorStructure: [{
        element: "input-wrapper"
      }],
      description: "It contains a wrapper element for `prefix`, `suffix`, `input` or `chip-list` elements"
    },
    feedbackWrapper: {
      name: "Feedback Wrapper Element",
      selectorStructure: [{
        element: "feedback-wrapper"
      }],
      description: "It contains a wrapper element for `hint` and `error` elements"
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "It will add to the host element of FormField component, the component is disabled"
    },
    required: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "required"
      }],
      description: "It will add to the host element of FormField component, when the value of input tag is required"
    },
    focused: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "focused"
      }],
      description: "It will add to the host element of FormField component, when the input tag is focused"
    },
    untouched: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "untouched"
      }],
      description: "Angular Only: It will add to the host element of FormField component, when the value of input tag is untouched"
    },
    touched: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "touched"
      }],
      description: "Angular Only:It will add to the host element of FormField component, when the value of input tag is touched"
    },
    pristine: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "pristine"
      }],
      description: "Angular Only: It will add to the host element of FormField component, when the value of input tag is pristine"
    },
    dirty: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "dirty"
      }],
      description: "Angular Only: It will add to the host element of FormField component, when the value of input tag is dirty"
    },
    valid: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "valid"
      }],
      description: "Angular Only:It will add to the host element of FormField component, when the value of input tag is valid"
    },
    invalid: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "invalid"
      }],
      description: "Angular Only: It will add to the host element of FormField component, when the value of input `reactiveForm` is invalid.\n\nReact Only: It will add then the component has invalid prop or the react-hook-form has invalid"
    },
    pending: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "pending"
      }],
      description: "Angular Only: It will add to the host element of FormField component, when the value of input tag is pending"
    },
    error: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "error"
      }],
      description: "Angular Only: It will add to the host element of FormField component, when the value of input is invalid and touched or error component is present/\n\nReact Only: It will add then the component has invalid prop or the react-hook-form has invalid or error component is present"
    },
    withInput: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "with-input"
      }],
      description: "It will add to the host element of FormField component, when the formFiled component contains input component"
    },
    withTextarea: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "with-textarea"
      }],
      description: "It will add to the host element of FormField component, when the formFiled component contains textarea component"
    },
    withSelect: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "with-select"
      }],
      description: "It will add to the host element of FormField component, when the formFiled component contains select component"
    },
    withChipList: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "with-chip-list"
      }],
      description: "It will add to the host element of FormField component, when the formFiled component contains ChipList component"
    }
  }
};
function getFormFieldClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(formFieldLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "host", themeConfig, componentProps),
    wrapper: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "wrapper", themeConfig),
    inputWrapper: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "inputWrapper", themeConfig),
    feedbackWrapper: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "feedbackWrapper", themeConfig),
    disabled: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "disabled", themeConfig),
    required: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "required", themeConfig),
    focused: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "focused", themeConfig),
    untouched: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "untouched", themeConfig),
    touched: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "touched", themeConfig),
    pristine: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "pristine", themeConfig),
    dirty: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "dirty", themeConfig),
    valid: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "valid", themeConfig),
    invalid: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "invalid", themeConfig),
    pending: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "pending", themeConfig),
    error: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "error", themeConfig),
    withInput: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "withInput", themeConfig),
    withTextarea: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "withTextarea", themeConfig),
    withSelect: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "withSelect", themeConfig),
    withChipList: generateLayoutClassNameFromElement(formFieldLayoutClassNamesConfig, "withChipList", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/hint-class-names.js
var hintLayoutClassNamesConfig = {
  componentName: "hint",
  baseSelectorStructure: {
    block: "hint"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Hint component."
    }
  }
};
function getHintClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(hintLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(hintLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/icon-button-class-names.js
var iconButtonLayoutClassNamesConfig = {
  componentName: "iconButton",
  baseSelectorStructure: {
    block: "icon-button"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of IconButton component. The default style has `relative` position."
    },
    backdrop: {
      name: "Backdrop Element",
      selectorStructure: [{
        element: "backdrop"
      }],
      description: "It is an empty `div` added to the host element to add more style based on the design system concepts. (For example the Ripple effect). The default styles are full size `absolute` position and `display: none`"
    }
  }
};
function getIconButtonClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(iconButtonLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(iconButtonLayoutClassNamesConfig, "host", themeConfig, componentProps),
    backdrop: generateLayoutClassNameFromElement(iconButtonLayoutClassNamesConfig, "backdrop", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/icon-class-names.js
var svgIconLayoutClassNamesConfig = {
  componentName: "svgIcon",
  baseSelectorStructure: {
    block: "svg-icon"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: `It will add to the host element of SvgIcon component and it's a wrapper of svg element`
    },
    svg: {
      name: "Svg Element",
      selectorStructure: [{
        element: "svg"
      }],
      description: `It will add to the svg element inside of SvgIcon component`
    }
  }
};
function getSvgIconClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(svgIconLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(svgIconLayoutClassNamesConfig, "host", themeConfig, componentProps),
    svg: generateLayoutClassNameFromElement(svgIconLayoutClassNamesConfig, "svg", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/input-class-names.js
var inputLayoutClassNamesConfig = {
  componentName: "input",
  baseSelectorStructure: {
    block: "input"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Input component."
    },
    disabled: {
      name: "Disabled Modifier",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "It will add to the host element of Input component when the component is disabled"
    }
  }
};
function getInputClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(inputLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(inputLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(inputLayoutClassNamesConfig, "disabled", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/label-class-names.js
var labelLayoutClassNamesConfig = {
  componentName: "label",
  baseSelectorStructure: {
    block: "label"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Label component."
    },
    labelTag: {
      name: "Label Element",
      selectorStructure: [{
        element: "label-tag"
      }],
      description: "It will add to the `label` element of html tag"
    },
    requiredMarker: {
      name: "Required Marker Element",
      selectorStructure: [{
        element: "required-marker"
      }],
      description: "It will add to the required marker element, when the `hideRequiredMarker` of `FormField` component is `false`. It will show the `*` at end of label text"
    }
  }
};
function getLabelClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(labelLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(labelLayoutClassNamesConfig, "host", themeConfig, componentProps),
    labelTag: generateLayoutClassNameFromElement(labelLayoutClassNamesConfig, "labelTag", themeConfig),
    requiredMarker: generateLayoutClassNameFromElement(labelLayoutClassNamesConfig, "requiredMarker", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/leading-class-names.js
var leadingLayoutClassNamesConfig = {
  componentName: "leading",
  baseSelectorStructure: {
    block: "leading"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Hint component."
    },
    clickable: {
      name: "Clickable Host Element",
      selectorStructure: [{
        modifier: "clickable"
      }],
      description: "It will add to the host element of Leading component, when the element is clickable"
    }
  }
};
function getLeadingClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(leadingLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(leadingLayoutClassNamesConfig, "host", themeConfig, componentProps),
    clickable: generateLayoutClassNameFromElement(leadingLayoutClassNamesConfig, "clickable", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/menu-class-names.js
var menuLayoutClassNamesConfig = {
  componentName: "menu",
  baseSelectorStructure: {
    block: "menu"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Menu component."
    },
    overlay: {
      name: "Menu Overlay Element",
      selectorStructure: [{
        element: "overlay"
      }],
      description: "It will add to the overlay element, when the menu is opened"
    }
  }
};
function getMenuClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(menuLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(menuLayoutClassNamesConfig, "host", themeConfig, componentProps),
    overlay: generateLayoutClassNameFromElement(menuLayoutClassNamesConfig, "overlay", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/menu-item-class-names.js
var menuItemLayoutClassNamesConfig = {
  componentName: "menuItem",
  baseSelectorStructure: {
    block: "menu-item"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of MenuItem component."
    },
    disabled: {
      name: "Disabled Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the MenuItem component, when the menu item or menu group is disabled"
    }
  }
};
function getMenuItemClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(menuItemLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(menuItemLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(menuItemLayoutClassNamesConfig, "disabled", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/option-class-names.js
var optionLayoutClassNamesConfig = {
  componentName: "option",
  baseSelectorStructure: {
    block: "option"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Option component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "It will add to the host element of Option component, the component is disabled"
    },
    selected: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "selected"
      }],
      description: "It will add to the host element of Option component, the option is selected"
    },
    multiple: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "multiple"
      }],
      description: "It will add to the host element of option component, when the selection is multi"
    },
    single: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "single"
      }],
      description: "It will add to the host element of option component, when the selection is single"
    },
    multipleWrapper: {
      name: "Multiple Wrapper Element",
      selectorStructure: [{
        element: "multiple-wrapper"
      }],
      description: "It will add to the multiple wrapper element, and this element will be visible when the select is multiple selection"
    },
    contentWrapper: {
      name: "Wrapper of content",
      selectorStructure: [{
        element: "content-wrapper"
      }],
      description: "It will add to the wrapper of option content"
    },
    selectedCheckmark: {
      name: "Checkmark element",
      selectorStructure: [{
        element: "selected-checkmark"
      }],
      description: "It will add to the selected checkmark element, and this element will be visible when the option is selected"
    }
  }
};
function getOptionClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(optionLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "disabled", themeConfig),
    selected: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "selected", themeConfig),
    multiple: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "multiple", themeConfig),
    single: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "single", themeConfig),
    multipleWrapper: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "multipleWrapper", themeConfig),
    contentWrapper: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "contentWrapper", themeConfig),
    selectedCheckmark: generateLayoutClassNameFromElement(optionLayoutClassNamesConfig, "selectedCheckmark", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/option-group-class-names.js
var optionGroupLayoutClassNamesConfig = {
  componentName: "optionGroup",
  baseSelectorStructure: {
    block: "option-group"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of OptionGroup component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "It will add to the host element of OptionGroup component, the component is disabled"
    },
    label: {
      name: "Label Element",
      selectorStructure: [{
        modifier: "label"
      }],
      description: "It will add to the label element of OptionGroup component"
    }
  }
};
function getOptionGroupClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(optionGroupLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(optionGroupLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(optionGroupLayoutClassNamesConfig, "disabled", themeConfig),
    label: generateLayoutClassNameFromElement(optionGroupLayoutClassNamesConfig, "label", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/overlay-class-names.js
var overlayLayoutClassNamesConfig = {
  componentName: "overlay",
  baseSelectorStructure: {
    block: "overlay"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "Applied to the host element of the Overlay component."
    },
    backdrop: {
      name: "Backdrop Element",
      selectorStructure: [{
        element: "backdrop"
      }],
      description: "Applied to the backdrop element of the Overlay component."
    },
    contentWrapper: {
      name: "Content Wrapper Element",
      selectorStructure: [{
        element: "content-wrapper"
      }],
      description: "Applied to the wrapper element of the Overlay content."
    }
  }
};
function getOverlayClassNames(_componentProps, themeConfig) {
  return {
    host: generateLayoutClassNameFromElement(overlayLayoutClassNamesConfig, "host", themeConfig, null),
    backdrop: generateLayoutClassNameFromElement(overlayLayoutClassNamesConfig, "backdrop", themeConfig),
    contentWrapper: generateLayoutClassNameFromElement(overlayLayoutClassNamesConfig, "contentWrapper", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/prefix-class-names.js
var prefixLayoutClassNamesConfig = {
  componentName: "prefix",
  baseSelectorStructure: {
    block: "prefix"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Prefix component."
    }
  }
};
function getPrefixClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(prefixLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(prefixLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/radio-button-class-names.js
var radioButtonLayoutClassNamesConfig = {
  componentName: "radioButton",
  baseSelectorStructure: {
    block: "radio-button"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "Applied to the host element of the Radio Button component."
    },
    wrapper: {
      name: "Wrapper Element",
      selectorStructure: [{
        element: "wrapper"
      }],
      description: "Applied to a `div` element, child of the `host` element, serving as a wrapper for the radio input and label."
    },
    inputWrapper: {
      name: "Input Wrapper Element",
      selectorStructure: [{
        element: "input-wrapper"
      }],
      description: "Applied to a `div` element, child of the `wrapper` element, serving as a wrapper for the radio input and all sub-elements for styling the radio button."
    },
    input: {
      name: "Input Element",
      selectorStructure: [{
        element: "input"
      }],
      description: "Applied to the `input` element, child of the `inputWrapper`, with type `radio`."
    },
    backdrop: {
      name: "Backdrop Element",
      selectorStructure: [{
        element: "backdrop"
      }],
      description: "Applied to an empty `div` element, child of the `inputWrapper`, for additional styling based on the design system concepts. Default styles include full-size `absolute` position and `display: none`. Example usage: Ripple effect."
    },
    background: {
      name: "Background Element",
      selectorStructure: [{
        element: "background"
      }],
      description: "Applied to a `div` element containing a `radioButtonBackground` from `ThemeConfig`, child of the `inputWrapper`, to show a custom radio symbol based on the design system concepts."
    },
    label: {
      name: "Label Element",
      selectorStructure: [{
        element: "label"
      }],
      description: "Applied to the `label` element, child of the `wrapper`, containing the label or description of the radio."
    },
    checked: {
      name: "Host Element - checked status",
      selectorStructure: [{
        modifier: "checked"
      }],
      description: "Applied to the host element of the Radio button component, when the the radio is checked"
    },
    unchecked: {
      name: "Host Element - unchecked status",
      selectorStructure: [{
        modifier: "unchecked"
      }],
      description: "Applied to the host element of the Radio button component, when the the radio is unchecked"
    },
    disabled: {
      name: "Host Element - disabled status",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the Radio Button component, when the the radio is disabled"
    }
  }
};
function getRadioButtonClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(radioButtonLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "host", themeConfig, componentProps),
    wrapper: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "wrapper", themeConfig),
    inputWrapper: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "inputWrapper", themeConfig),
    input: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "input", themeConfig),
    backdrop: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "backdrop", themeConfig),
    background: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "background", themeConfig),
    label: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "label", themeConfig),
    checked: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "checked", themeConfig),
    unchecked: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "unchecked", themeConfig),
    disabled: generateLayoutClassNameFromElement(radioButtonLayoutClassNamesConfig, "disabled", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/radio-group-class-names.js
var radioGroupLayoutClassNamesConfig = {
  componentName: "radioGroup",
  baseSelectorStructure: {
    block: "radio-group"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Radio Group component."
    },
    disabled: {
      name: "Host Element - disabled status",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the Radio Group component, when the all radio group is disabled"
    }
  }
};
function getRadioGroupClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(radioGroupLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(radioGroupLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(radioGroupLayoutClassNamesConfig, "disabled", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/select-class-names.js
var selectLayoutClassNamesConfig = {
  componentName: "select",
  baseSelectorStructure: {
    block: "select"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Select component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "It will add to the host element of Select component, when the component is disabled"
    },
    multiple: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "multiple"
      }],
      description: "It will add to the host element of Select component, when the selection is multi"
    },
    opened: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "opened"
      }],
      description: "It will add to the host element of Select component, when overlay to select an option has been opened"
    },
    closed: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "closed"
      }],
      description: "It will add to the host element of Select component, when overlay to select an option is closed"
    },
    single: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "single"
      }],
      description: "It will add to the host element of Select component, when the selection is single"
    },
    placeholder: {
      name: "Placeholder Element",
      selectorStructure: [{
        element: "placeholder"
      }],
      description: "It will add to the placeholder element of Select component"
    },
    triggerWrapper: {
      name: "Trigger Wrapper Element",
      selectorStructure: [{
        element: "trigger-wrapper"
      }],
      description: "It will add to the element that wrap placeholder, triggerPreview and triggerValue"
    },
    triggerValue: {
      name: "Trigger Value Element",
      selectorStructure: [{
        element: "trigger-value"
      }],
      description: "It will add to the element that contains triggerPreview or triggerValue"
    },
    dropdownIconWrapper: {
      name: "Dropdown Icon Wrapper Element",
      selectorStructure: [{
        element: "dropdown-icon-wrapper"
      }],
      description: "It will add to the element that contains the dropdown icon"
    },
    optionsWrapper: {
      name: "Options Wrapper Element",
      selectorStructure: [{
        element: "options-wrapper"
      }],
      description: "It will add to the options wrapper element that contains the options and optionGroup"
    },
    overlay: {
      name: "Options Overlay Element",
      selectorStructure: [{
        element: "overlay"
      }],
      description: "It will add to the overlay element, the the selection overlay is opened"
    }
  }
};
function getSelectClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(selectLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "disabled", themeConfig),
    opened: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "opened", themeConfig),
    closed: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "closed", themeConfig),
    multiple: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "multiple", themeConfig),
    single: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "single", themeConfig),
    placeholder: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "placeholder", themeConfig),
    triggerWrapper: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "triggerWrapper", themeConfig),
    triggerValue: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "triggerValue", themeConfig),
    dropdownIconWrapper: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "dropdownIconWrapper", themeConfig),
    optionsWrapper: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "optionsWrapper", themeConfig),
    overlay: generateLayoutClassNameFromElement(selectLayoutClassNamesConfig, "overlay", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/select-preview-class-names.js
var selectPreviewLayoutClassNamesConfig = {
  componentName: "selectPreview",
  baseSelectorStructure: {
    block: "select-preview"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of SelectPreview component."
    }
  }
};
function getSelectPreviewClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(selectPreviewLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(selectPreviewLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/suffix-class-names.js
var suffixLayoutClassNamesConfig = {
  componentName: "suffix",
  baseSelectorStructure: {
    block: "suffix"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Suffix component."
    }
  }
};
function getSuffixClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(suffixLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(suffixLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/tab-class-names.js
var tabLayoutClassNamesConfig = {
  componentName: "tab",
  baseSelectorStructure: {
    block: "tab"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "Applied to the host element of the Tab component."
    },
    indicator: {
      name: "Indicator Element",
      selectorStructure: [{
        element: "indicator"
      }],
      description: "Applied to the indicator element inside the Tab component, visible only for the selected tab."
    },
    content: {
      name: "Content Element",
      selectorStructure: [{
        element: "content"
      }],
      description: "Applied to the element that contains the content of the Tab component."
    },
    selected: {
      name: "Selected Tab",
      selectorStructure: [{
        modifier: "selected"
      }],
      description: "Applied to the host element of the Tab button component, when the the tab is selected."
    },
    unselected: {
      name: "Unselected Tab",
      selectorStructure: [{
        modifier: "unselected"
      }],
      description: "Applied to the host element of the Tab button component, when the the tab is NOT selected."
    }
  }
};
function getTabClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(tabLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(tabLayoutClassNamesConfig, "host", themeConfig, componentProps),
    indicator: generateLayoutClassNameFromElement(tabLayoutClassNamesConfig, "indicator", themeConfig),
    content: generateLayoutClassNameFromElement(tabLayoutClassNamesConfig, "content", themeConfig),
    selected: generateLayoutClassNameFromElement(tabLayoutClassNamesConfig, "selected", themeConfig),
    unselected: generateLayoutClassNameFromElement(tabLayoutClassNamesConfig, "unselected", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/tab-label-class-names.js
var tabLabelLayoutClassNamesConfig = {
  componentName: "tabLabel",
  baseSelectorStructure: {
    block: "tab-label"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of tabLabel component."
    }
  }
};
function getTabLabelClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(tabLabelLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(tabLabelLayoutClassNamesConfig, "host", themeConfig, componentProps)
  };
}

// node_modules/@cocokits/core/lib/class-names/tabs-class-names.js
var tabsLayoutClassNamesConfig = {
  componentName: "tabs",
  baseSelectorStructure: {
    block: "tabs"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "This will be added to the host element of the Tabs component."
    },
    labelsWrapper: {
      name: "Labels Wrapper Element",
      selectorStructure: [{
        element: "labels-wrapper"
      }],
      description: "This selector is applied to the wrapper element that contains all the tab labels."
    },
    contentWrapper: {
      name: "Content Wrapper Element",
      selectorStructure: [{
        element: "content-wrapper"
      }],
      description: "This selector is applied to the wrapper element that contains the tab contents."
    }
  }
};
function getTabsClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(tabsLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(tabsLayoutClassNamesConfig, "host", themeConfig, componentProps),
    labelsWrapper: generateLayoutClassNameFromElement(tabsLayoutClassNamesConfig, "labelsWrapper", themeConfig),
    contentWrapper: generateLayoutClassNameFromElement(tabsLayoutClassNamesConfig, "contentWrapper", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/textarea-class-names.js
var textareaClassNamesConfig = {
  componentName: "textarea",
  baseSelectorStructure: {
    block: "textarea"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of textarea component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "It will add to the host element of textarea component, the component is disabled"
    },
    autoResize: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "auto-resize"
      }],
      description: "It will add to the host element of textarea component, the height of textarea will automatically change based on content"
    }
  }
};
function getTextareaClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(textareaClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(textareaClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(textareaClassNamesConfig, "disabled", themeConfig),
    autoResize: generateLayoutClassNameFromElement(textareaClassNamesConfig, "autoResize", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/toggle-class-names.js
var toggleLayoutClassNamesConfig = {
  componentName: "toggle",
  baseSelectorStructure: {
    block: "toggle"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Toggle component."
    },
    disabled: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "disabled"
      }],
      description: "Applied to the host element of the Toggle component, when the toggle is disabled"
    },
    label: {
      name: "Label Element",
      selectorStructure: [{
        element: "label"
      }],
      description: "Applied to the `label` element, containing the label or description of the toggle."
    },
    checked: {
      name: "Host Element - checked status",
      selectorStructure: [{
        modifier: "checked"
      }],
      description: "Applied to the host element of the Toggle component, when the toggle is checked"
    },
    unchecked: {
      name: "Host Element - unchecked status",
      selectorStructure: [{
        modifier: "unchecked"
      }],
      description: "Applied to the host element of the Toggle component, when the toggle is unchecked"
    },
    labelBefore: {
      name: "Host Element",
      selectorStructure: [{
        modifier: "label-before"
      }],
      description: "Applied to the host element of the Toggle component, when the label position is `before`"
    },
    sliderWrapper: {
      name: "Slider Wrapper Element",
      selectorStructure: [{
        element: "slider-wrapper"
      }],
      description: "It will add to the slider-wrapper element which contains input, thumb and backdrop."
    },
    input: {
      name: "Input element",
      selectorStructure: [{
        element: "input"
      }],
      description: "It will add to the input element with typeof checkbox, to track if the toggle is selected or not."
    },
    thumb: {
      name: "Knobs Element",
      selectorStructure: [{
        element: "thumb"
      }],
      description: "It will add to the thumb element to style the thumb of toggle."
    },
    backdrop: {
      name: "Backdrop Element",
      selectorStructure: [{
        element: "backdrop"
      }],
      description: "It will add to the backdrop element to style the backdrop such as background color."
    }
  }
};
function getToggleClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(toggleLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "host", themeConfig, componentProps),
    disabled: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "disabled", themeConfig),
    label: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "label", themeConfig),
    checked: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "checked", themeConfig),
    unchecked: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "unchecked", themeConfig),
    labelBefore: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "labelBefore", themeConfig),
    sliderWrapper: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "sliderWrapper", themeConfig),
    input: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "input", themeConfig),
    thumb: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "thumb", themeConfig),
    backdrop: generateLayoutClassNameFromElement(toggleLayoutClassNamesConfig, "backdrop", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/trailing-class-names.js
var trailingLayoutClassNamesConfig = {
  componentName: "trailing",
  baseSelectorStructure: {
    block: "trailing"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Trailing component."
    },
    clickable: {
      name: "Clickable Host Element",
      selectorStructure: [{
        modifier: "clickable"
      }],
      description: "It will add to the host element of Trailing component, when the element is clickable"
    }
  }
};
function getTrailingClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(trailingLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(trailingLayoutClassNamesConfig, "host", themeConfig, componentProps),
    clickable: generateLayoutClassNameFromElement(trailingLayoutClassNamesConfig, "clickable", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/class-names.js
var CLASS_NAMES_FN_MAP = {
  // formField
  formField: getFormFieldClassNames,
  label: getLabelClassNames,
  error: getErrorClassNames,
  hint: getHintClassNames,
  prefix: getPrefixClassNames,
  suffix: getSuffixClassNames,
  trailing: getTrailingClassNames,
  leading: getLeadingClassNames,
  input: getInputClassNames,
  textarea: getTextareaClassNames,
  select: getSelectClassNames,
  option: getOptionClassNames,
  optionGroup: getOptionGroupClassNames,
  selectPreview: getSelectPreviewClassNames,
  chip: getChipClassNames,
  chipList: getChipListClassNames,
  // menu
  menu: getMenuClassNames,
  menuItem: getMenuItemClassNames,
  // divider
  divider: getDividerClassNames,
  // toggle
  toggle: getToggleClassNames,
  // radio
  radioButton: getRadioButtonClassNames,
  radioGroup: getRadioGroupClassNames,
  // checkbox
  checkbox: getCheckboxClassNames,
  // button
  button: getButtonClassNames,
  iconButton: getIconButtonClassNames,
  // icon
  svgIcon: getSvgIconClassNames,
  // tabs
  tabs: getTabsClassNames,
  tab: getTabClassNames,
  tabLabel: getTabLabelClassNames,
  overlay: getOverlayClassNames
};
function getClassNames(componentName, componentProps, themeConfig) {
  return CLASS_NAMES_FN_MAP[componentName](componentProps, themeConfig);
}
function getHostClassNamesFromProps(layoutConfig, themeConfig, componentProps) {
  const classNames = [];
  const {
    type,
    color,
    size,
    additional
  } = getComponentPropsWithDefault(layoutConfig, themeConfig, componentProps);
  const block = safeMergeString(layoutConfig.baseSelectorStructure.block, ...layoutConfig.elements.host.selectorStructure.map((s) => s.block));
  if (isNotNullish(type)) {
    classNames.push(cssSelectorRender({
      block,
      element: type,
      themePrefix: themeConfig.cssSelectorPrefix
    }));
  }
  if (isNotNullish(type) && componentProps.type !== type) {
    classNames.push(cssSelectorRender({
      block,
      modifier: "default-type",
      themePrefix: themeConfig.cssSelectorPrefix
    }));
  }
  if (color) {
    classNames.push(cssSelectorRender({
      block,
      element: "color",
      modifier: color,
      themePrefix: themeConfig.cssSelectorPrefix
    }));
  }
  if (color && componentProps.color !== color) {
    classNames.push(cssSelectorRender({
      block,
      modifier: "default-color",
      themePrefix: themeConfig.cssSelectorPrefix
    }));
  }
  if (size) {
    classNames.push(cssSelectorRender({
      block,
      element: "size",
      modifier: size,
      themePrefix: themeConfig.cssSelectorPrefix
    }));
  }
  if (size && componentProps.size !== size) {
    classNames.push(cssSelectorRender({
      block,
      modifier: "default-size",
      themePrefix: themeConfig.cssSelectorPrefix
    }));
  }
  if (additional) {
    recordForEach(additional, (value, key) => {
      classNames.push(cssSelectorRender({
        block,
        element: key,
        modifier: value,
        themePrefix: themeConfig.cssSelectorPrefix
      }));
    });
  }
  return classNames;
}
function generateLayoutClassNameFromElement(layoutConfig, elementName, themeConfig, componentProps) {
  const classNames = generateLayoutBaseClassName(layoutConfig, elementName, themeConfig);
  if (elementName === "host" && !isCDKComponent(layoutConfig.componentName)) {
    if (!componentProps) {
      throw new Error("componentProps is required when elementName is host by generating class names");
    }
    classNames.push(...getHostClassNamesFromProps(layoutConfig, themeConfig, componentProps));
  }
  return classNames.join(" ");
}
function generateLayoutBaseClassName(layoutConfig, elementName, themeConfig) {
  const elementConfig = layoutConfig.elements[elementName];
  const classNames = [cssSelectorRender({
    themePrefix: themeConfig.cssSelectorPrefix,
    block: safeMergeString(layoutConfig.baseSelectorStructure.block, ...elementConfig.selectorStructure.map((s) => s.block)),
    element: safeMergeString(layoutConfig.baseSelectorStructure.element, ...elementConfig.selectorStructure.map((s) => s.element)),
    modifier: safeMergeString(layoutConfig.baseSelectorStructure.modifier, ...elementConfig.selectorStructure.map((s) => s.modifier))
  })];
  return classNames;
}
function isCDKComponent(componentName) {
  const CDK_COMPONENTS = ["overlay"];
  return CDK_COMPONENTS.includes(componentName);
}

// node_modules/@cocokits/core/lib/class-names/button-class-names.js
var buttonLayoutClassNamesConfig = {
  componentName: "button",
  baseSelectorStructure: {
    block: "button"
  },
  elements: {
    host: {
      name: "Host Element",
      selectorStructure: [],
      description: "It will add to the host element of Button component. The default style has `relative` position."
    },
    backdrop: {
      name: "Backdrop Element",
      selectorStructure: [{
        element: "backdrop"
      }],
      description: "It is an empty `div` added to the host element to add more style based on the design system concepts. (For example the Ripple effect). The default styles are full size `absolute` position and `display: none`"
    }
  }
};
function getButtonClassNames(componentProps, themeConfig) {
  validateUiBaseComponentProps(buttonLayoutClassNamesConfig.componentName, componentProps, themeConfig);
  return {
    host: generateLayoutClassNameFromElement(buttonLayoutClassNamesConfig, "host", themeConfig, componentProps),
    backdrop: generateLayoutClassNameFromElement(buttonLayoutClassNamesConfig, "backdrop", themeConfig)
  };
}

// node_modules/@cocokits/core/lib/class-names/layout-class-names-config.js
var layoutClassNamesConfigRecord = {
  // icon
  svgIcon: svgIconLayoutClassNamesConfig,
  // button
  button: buttonLayoutClassNamesConfig,
  iconButton: iconButtonLayoutClassNamesConfig,
  // checkbox
  checkbox: checkboxLayoutClassNamesConfig,
  // radio
  radioGroup: radioGroupLayoutClassNamesConfig,
  radioButton: radioButtonLayoutClassNamesConfig,
  // form-field
  formField: formFieldLayoutClassNamesConfig,
  label: labelLayoutClassNamesConfig,
  error: errorLayoutClassNamesConfig,
  hint: hintLayoutClassNamesConfig,
  prefix: prefixLayoutClassNamesConfig,
  suffix: suffixLayoutClassNamesConfig,
  trailing: trailingLayoutClassNamesConfig,
  leading: leadingLayoutClassNamesConfig,
  input: inputLayoutClassNamesConfig,
  textarea: textareaClassNamesConfig,
  select: selectLayoutClassNamesConfig,
  option: optionLayoutClassNamesConfig,
  optionGroup: optionGroupLayoutClassNamesConfig,
  selectPreview: selectPreviewLayoutClassNamesConfig,
  chip: chipLayoutClassNamesConfig,
  chipList: chipListLayoutClassNamesConfig,
  // menu
  menu: menuLayoutClassNamesConfig,
  menuItem: menuItemLayoutClassNamesConfig,
  // divider
  divider: dividerLayoutClassNamesConfig,
  // toggle
  toggle: toggleLayoutClassNamesConfig,
  // tabs
  tabs: tabsLayoutClassNamesConfig,
  tab: tabLayoutClassNamesConfig,
  tabLabel: tabLabelLayoutClassNamesConfig,
  // overlay
  overlay: overlayLayoutClassNamesConfig
};

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state2;
  if (options?.requireSync) {
    state2 = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state2 = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state2.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state2.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state2().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state2();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_3) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.ɵfac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
        return (ɵBuiltInControlValueAccessor_BaseFactory || (ɵBuiltInControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BuiltInControlValueAccessor,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
        return (ɵCheckboxControlValueAccessor_BaseFactory || (ɵCheckboxControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.ɵfac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [ɵɵProvidersFeature([DEFAULT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.ɵfac = function NgControlStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatus)(ɵɵdirectiveInject(NgControl, 2));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.ɵfac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatusGroup)(ɵɵdirectiveInject(ControlContainer, 10));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_3, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group2 = new FormGroup({});
      setUpFormContainer(group2, dir);
      container.registerControl(dir.name, group2);
      group2.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.ɵfac = function NgForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgForm)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [0, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [ɵɵProvidersFeature([formDirectiveProvider$1]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
        return (ɵAbstractFormGroupDirective_BaseFactory || (ɵAbstractFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractFormGroupDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.ɵfac = function NgModelGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModelGroup)(ɵɵdirectiveInject(ControlContainer, 5), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [0, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [ɵɵProvidersFeature([modelGroupProvider]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.ɵfac = function NgModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModel)(ɵɵdirectiveInject(ControlContainer, 9), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(ChangeDetectorRef, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"],
        options: [0, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [ɵɵProvidersFeature([formControlBinding$1]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var ɵNgNoValidate = class _ɵNgNoValidate {
  static {
    this.ɵfac = function ɵNgNoValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ɵNgNoValidate)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ɵNgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(__ngFactoryType__) {
        return (ɵNumberValueAccessor_BaseFactory || (ɵNumberValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [ɵɵProvidersFeature([NUMBER_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.ɵfac = function RadioControlRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static {
    this.ɵfac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RadioControlRegistry), ɵɵdirectiveInject(Injector));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(__ngFactoryType__) {
        return (ɵRangeValueAccessor_BaseFactory || (ɵRangeValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [ɵɵProvidersFeature([RANGE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.ɵfac = function FormControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [0, "formControl", "form"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [ɵɵProvidersFeature([formControlBinding]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.ɵfac = function FormGroupDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [0, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [ɵɵProvidersFeature([formDirectiveProvider]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.ɵfac = function FormGroupName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [0, "formGroupName", "name"]
      },
      features: [ɵɵProvidersFeature([formGroupNameProvider]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.ɵfac = function FormArrayName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormArrayName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [0, "formArrayName", "name"]
      },
      features: [ɵɵProvidersFeature([formArrayNameProvider]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.ɵfac = function FormControlName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [0, "formControlName", "name"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [ɵɵProvidersFeature([controlNameBinding]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
        return (ɵSelectControlValueAccessor_BaseFactory || (ɵSelectControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.ɵfac = function NgSelectOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
        return (ɵSelectMultipleControlValueAccessor_BaseFactory || (ɵSelectMultipleControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [ɵɵProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var ɵNgSelectMultipleOption = class _ɵNgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.ɵfac = function ɵNgSelectMultipleOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ɵNgSelectMultipleOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ɵNgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input2) {
    return input2 != null;
  }
  static {
    this.ɵfac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractValidatorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractValidatorDirective,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input2) => toFloat(input2);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMaxValidator_BaseFactory;
      return function MaxValidator_Factory(__ngFactoryType__) {
        return (ɵMaxValidator_BaseFactory || (ɵMaxValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [ɵɵProvidersFeature([MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input2) => toFloat(input2);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMinValidator_BaseFactory;
      return function MinValidator_Factory(__ngFactoryType__) {
        return (ɵMinValidator_BaseFactory || (ɵMinValidator_BaseFactory = ɵɵgetInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [ɵɵProvidersFeature([MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input2) => requiredValidator;
  }
  /** @nodoc */
  enabled(input2) {
    return input2;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(__ngFactoryType__) {
        return (ɵRequiredValidator_BaseFactory || (ɵRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [ɵɵProvidersFeature([REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input2) => requiredTrueValidator;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (ɵCheckboxRequiredValidator_BaseFactory || (ɵCheckboxRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [ɵɵProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input2) => emailValidator;
  }
  /** @nodoc */
  enabled(input2) {
    return input2;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵEmailValidator_BaseFactory;
      return function EmailValidator_Factory(__ngFactoryType__) {
        return (ɵEmailValidator_BaseFactory || (ɵEmailValidator_BaseFactory = ɵɵgetInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [ɵɵProvidersFeature([EMAIL_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input2) => toInteger(input2);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(__ngFactoryType__) {
        return (ɵMinLengthValidator_BaseFactory || (ɵMinLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [ɵɵProvidersFeature([MIN_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input2) => toInteger(input2);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(__ngFactoryType__) {
        return (ɵMaxLengthValidator_BaseFactory || (ɵMaxLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [ɵɵProvidersFeature([MAX_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input2) => input2;
    this.createValidator = (input2) => patternValidator(input2);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPatternValidator_BaseFactory;
      return function PatternValidator_Factory(__ngFactoryType__) {
        return (ɵPatternValidator_BaseFactory || (ɵPatternValidator_BaseFactory = ɵɵgetInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [ɵɵProvidersFeature([PATTERN_VALIDATOR]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var ɵInternalFormsSharedModule = class _ɵInternalFormsSharedModule {
  static {
    this.ɵfac = function ɵInternalFormsSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ɵInternalFormsSharedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ɵInternalFormsSharedModule,
      declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
      exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵInternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.ɵfac = function FormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormBuilder)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.ɵfac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NonNullableFormBuilder)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(__ngFactoryType__) {
        return (ɵUntypedFormBuilder_BaseFactory || (ɵUntypedFormBuilder_BaseFactory = ɵɵgetInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("18.2.13");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.ɵfac = function FormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormsModule,
      declarations: [NgModel, NgModelGroup, NgForm],
      exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ɵInternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.ɵfac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactiveFormsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReactiveFormsModule,
      declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
      exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ɵInternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-utils/fesm2022/cocokits-angular-utils.mjs
function runInsideNgZone(zone = inject(NgZone)) {
  return (source) => new Observable((observer) => source.subscribe({
    next: (x) => zone.run(() => observer.next(x)),
    error: (err) => zone.run(() => observer.error(err)),
    complete: () => zone.run(() => observer.complete())
  }));
}
var TrustHtmlPipe = class _TrustHtmlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  /** @ignore */
  transform(htmlString) {
    return htmlString ? this.sanitizer.bypassSecurityTrustHtml(htmlString) : "";
  }
  static {
    this.ɵfac = function TrustHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrustHtmlPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "trustHtml",
      type: _TrustHtmlPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrustHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "trustHtml",
      standalone: true
    }]
  }], null, null);
})();
var ObjToKeysPipe = class _ObjToKeysPipe {
  transform(value) {
    if (!value || typeof value !== "object") {
      return [];
    }
    return Object.keys(value);
  }
  static {
    this.ɵfac = function ObjToKeysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObjToKeysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "objToKeys",
      type: _ObjToKeysPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObjToKeysPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "objToKeys"
    }]
  }], null, null);
})();
function fromAttrByName(name) {
  const host = inject(ElementRef);
  const value = signal(host.nativeElement.attributes.getNamedItem(name)?.value);
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const attrName = mutation.attributeName;
      if (mutation.type === "attributes" && attrName && attrName === name) {
        value.set(host.nativeElement.attributes.getNamedItem(name)?.value);
      }
    });
  });
  observer.observe(host.nativeElement, {
    attributes: true
  });
  inject(DestroyRef).onDestroy(() => observer.disconnect());
  return value.asReadonly();
}
function fromAttrByNameToBoolean(name) {
  const host = inject(ElementRef);
  const getValue = () => {
    const rawValue = host.nativeElement.attributes.getNamedItem(name)?.value;
    if (rawValue === void 0) {
      return void 0;
    }
    if (rawValue === "") {
      return true;
    }
    return !!rawValue;
  };
  const value = signal(getValue());
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const attrName = mutation.attributeName;
      if (mutation.type === "attributes" && attrName && attrName === name) {
        value.set(getValue());
      }
    });
  });
  observer.observe(host.nativeElement, {
    attributes: true
  });
  inject(DestroyRef).onDestroy(() => observer.disconnect());
  return value.asReadonly();
}
function fromAttrWithPrefix(prefix) {
  const host = inject(ElementRef);
  const value = signal(generateResult(host, prefix));
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const attrName = mutation.attributeName;
      if (mutation.type === "attributes" && attrName && attrName.startsWith(prefix)) {
        value.set(generateResult(host, prefix));
      }
    });
  });
  observer.observe(host.nativeElement, {
    attributes: true
  });
  inject(DestroyRef).onDestroy(() => observer.disconnect());
  return value.asReadonly();
}
function generateResult(host, prefix) {
  const attrs = Object.values(host.nativeElement.attributes).filter((attrName) => attrName.name.startsWith(prefix));
  const result = reduceMerge(attrs, (attr) => ({
    [attr.name.replace(prefix, "")]: attr.value
  }));
  return result;
}
function fromControl(control, options = {}) {
  const states = {
    value: signal(control.value),
    dirty: signal(control.dirty),
    disabled: signal(control.disabled),
    enabled: signal(control.enabled),
    invalid: signal(control.invalid),
    pending: signal(control.pending),
    pristine: signal(control.pristine),
    status: signal(control.status),
    touched: signal(control.touched),
    untouched: signal(control.untouched),
    valid: signal(control.valid),
    errors: signal(control.errors),
    required: signal(control.hasValidator(Validators.required))
  };
  control.events.pipe(takeUntilDestroyed(options.destroyRef)).subscribe(() => {
    states.value.set(control.value);
    states.dirty.set(control.dirty);
    states.disabled.set(control.disabled);
    states.enabled.set(control.enabled);
    states.invalid.set(control.invalid);
    states.pending.set(control.pending);
    states.pristine.set(control.pristine);
    states.status.set(control.status);
    states.touched.set(control.touched);
    states.untouched.set(control.untouched);
    states.valid.set(control.valid);
    states.errors.set(control.errors);
    states.required.set(control.hasValidator(Validators.required));
  });
  return states;
}
function isRecord(value) {
  return value?.constructor === Object;
}
function toDeepSignal(signal2) {
  const value = untracked(() => signal2());
  if (!isRecord(value)) {
    return signal2;
  }
  return new Proxy(signal2, {
    get(target, prop) {
      if (!(prop in value)) {
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => {
            return target()[prop];
          }),
          configurable: true
        });
      }
      return toDeepSignal(target[prop]);
    }
  });
}

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-core/fesm2022/cocokits-angular-core.mjs
var ThemeConfigToken = new InjectionToken("UI_COMPONENT_CONFIG");
var _UiBaseComponent = class __UiBaseComponent {
  constructor() {
    this.themeConfig = inject(ThemeConfigToken);
    this._type = input(void 0, {
      alias: "type"
    });
    this._size = input(void 0, {
      alias: "size"
    });
    this._color = input(void 0, {
      alias: "color"
    });
    this._additional = fromAttrWithPrefix("data-cck-");
    this.type = computed(() => this._type());
    this.size = computed(() => this._size());
    this.color = computed(() => this._color());
    this.additional = computed(() => this._additional());
    this.classNames = computed(() => {
      return getClassNames(this.componentName, {
        type: this.baseClassOptions.skipType ? null : this.type(),
        size: this.baseClassOptions.skipSize ? null : this.size(),
        color: this.baseClassOptions.skipColor ? null : this.color(),
        additional: this.baseClassOptions.skipAdditional ? void 0 : this.additional()
      }, this.themeConfig);
    });
    this.hostClassNames = computed(() => [this.classNames().host, ...this.extraHostElementClassConditions().filter((condition) => condition.if).map((condition) => condition.classes)].join(" "));
    this.baseClassOptions = {
      skipType: false,
      skipColor: false,
      skipSize: false,
      skipAdditional: false
    };
  }
  static {
    this.ɵfac = function _UiBaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __UiBaseComponent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: __UiBaseComponent,
      inputs: {
        _type: [1, "type", "_type"],
        _size: [1, "size", "_size"],
        _color: [1, "color", "_color"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_UiBaseComponent, [{
    type: Directive
  }], null, null);
})();
function provideCocokits(config) {
  return makeEnvironmentProviders([{
    provide: ThemeConfigToken,
    useValue: config
  }]);
}

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-icon/fesm2022/cocokits-angular-icon.mjs
function SvgIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 1);
    ɵɵpipe(1, "trustHtml");
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.classNames().svg);
    ɵɵproperty("innerHtml", ɵɵpipeBind1(1, 4, (tmp_2_0 = ctx_r0.legacyIcon()) == null ? null : tmp_2_0.content), ɵɵsanitizeHtml);
    ɵɵattribute("viewBox", (tmp_3_0 = ctx_r0.legacyIcon()) == null ? null : tmp_3_0.viewBox);
  }
}
var SvgIconComponent = class _SvgIconComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "svgIcon";
    this.extraHostElementClassConditions = computed(() => []);
    this.elemRef = inject(ElementRef);
    this.icon = input.required();
    this.legacyIcon = computed(() => {
      const icon = this.icon();
      if (typeof icon === "string") {
        return null;
      }
      return icon;
    });
    this.__updateDOMSvg = effect((onCleanup) => {
      const svgString = this.icon();
      const classNames = this.classNames().svg;
      if (typeof svgString !== "string") {
        return;
      }
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgString, "image/svg+xml");
      if (doc.getElementsByTagName("parsererror").length) {
        throw new Error("Error parsing SVG string");
      }
      const svgElement = doc.getElementsByTagName("svg")[0];
      svgElement.classList.add(...classNames.split(" "));
      this.elemRef.nativeElement.appendChild(svgElement);
      onCleanup(() => {
        this.elemRef.nativeElement.removeChild(svgElement);
      });
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSvgIconComponent_BaseFactory;
      return function SvgIconComponent_Factory(__ngFactoryType__) {
        return (ɵSvgIconComponent_BaseFactory || (ɵSvgIconComponent_BaseFactory = ɵɵgetInheritedFactory(_SvgIconComponent)))(__ngFactoryType__ || _SvgIconComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SvgIconComponent,
      selectors: [["cck-svg-icon"]],
      hostVars: 2,
      hostBindings: function SvgIconComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      inputs: {
        icon: [1, "icon"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["xmlns", "http://www.w3.org/2000/svg", 3, "class", "innerHtml"], ["xmlns", "http://www.w3.org/2000/svg", 3, "innerHtml"]],
      template: function SvgIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SvgIconComponent_Conditional_0_Template, 2, 6, ":svg:svg", 0);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.legacyIcon() ? 0 : -1);
        }
      },
      dependencies: [TrustHtmlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgIconComponent, [{
    type: Component,
    args: [{
      selector: "cck-svg-icon",
      standalone: true,
      imports: [TrustHtmlPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: '@if(legacyIcon()) {\r\n  <svg\r\n    xmlns="http://www.w3.org/2000/svg"\r\n    [attr.viewBox]="legacyIcon()?.viewBox"\r\n    [class]="classNames().svg"\r\n    [innerHtml]="legacyIcon()?.content | trustHtml">\r\n  </svg>\r\n}\r\n'
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-button/fesm2022/cocokits-angular-button.mjs
var _c0 = ["cck-button", ""];
var _c1 = ["*"];
var _c2 = ["cck-icon-button", ""];
var ButtonComponent = class _ButtonComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "button";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵButtonComponent_BaseFactory;
      return function ButtonComponent_Factory(__ngFactoryType__) {
        return (ɵButtonComponent_BaseFactory || (ɵButtonComponent_BaseFactory = ɵɵgetInheritedFactory(_ButtonComponent)))(__ngFactoryType__ || _ButtonComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ButtonComponent,
      selectors: [["button", "cck-button", ""]],
      hostVars: 2,
      hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 2,
      vars: 2,
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelement(1, "div");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().backdrop);
        }
      },
      styles: [".cck-button{position:relative}.cck-button__backdrop{position:absolute;width:100%;height:100%;display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "button[cck-button]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: '<ng-content></ng-content>\r\n\r\n<div [class]="classNames().backdrop"></div>\r\n',
      styles: [".cck-button{position:relative}.cck-button__backdrop{position:absolute;width:100%;height:100%;display:none}\n"]
    }]
  }], null, null);
})();
var IconButtonComponent = class _IconButtonComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "iconButton";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵIconButtonComponent_BaseFactory;
      return function IconButtonComponent_Factory(__ngFactoryType__) {
        return (ɵIconButtonComponent_BaseFactory || (ɵIconButtonComponent_BaseFactory = ɵɵgetInheritedFactory(_IconButtonComponent)))(__ngFactoryType__ || _IconButtonComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _IconButtonComponent,
      selectors: [["button", "cck-icon-button", ""]],
      hostVars: 2,
      hostBindings: function IconButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c2,
      ngContentSelectors: _c1,
      decls: 2,
      vars: 2,
      template: function IconButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelement(1, "div");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().backdrop);
        }
      },
      styles: [".cck-icon-button{position:relative}.cck-icon-button__backdrop{position:absolute;width:100%;height:100%;display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconButtonComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "button[cck-icon-button]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: '<ng-content></ng-content>\r\n\r\n<div [class]="classNames().backdrop"></div>\r\n',
      styles: [".cck-icon-button{position:relative}.cck-icon-button__backdrop{position:absolute;width:100%;height:100%;display:none}\n"]
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-checkbox/fesm2022/cocokits-angular-checkbox.mjs
var _c02 = ["*"];
var NEXT_ID = 1;
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};
var CheckboxComponent = class _CheckboxComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "checkbox";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.indeterminate(),
      classes: this.classNames().indeterminate
    }, {
      if: this.checked() && !this.indeterminate(),
      classes: this.classNames().checked
    }, {
      if: !this.checked() && !this.indeterminate(),
      classes: this.classNames().unchecked
    }, {
      if: this.disabled(),
      classes: this.classNames().disabled
    }]);
    this.cd = inject(ChangeDetectorRef);
    this.checked = model();
    this._disabled = model(void 0, {
      alias: "disabled"
    });
    this.disabled = computed(() => toBooleanOrPresent(this._disabled()));
    this.indeterminate = model();
    this.id = input(`cck-checkbox-${NEXT_ID++}`);
    this.value = input("");
    this.name = input(null);
    this.change = output();
    this.indeterminateChange = output();
    this._onTouched = () => {
    };
    this._controlValueAccessorChangeFn = () => {
    };
  }
  // endregion
  // region ---------------- PUBLIC METHODS ----------------
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.updateCheck(!this.checked());
    this._controlValueAccessorChangeFn(this.checked());
    this.updateIndeterminate(false);
  }
  // endregion
  // region ---------------- PRIVATE METHODS ----------------
  updateCheck(checked) {
    const hasChanged = this.checked() !== checked;
    this.checked.set(checked);
    if (hasChanged) {
      this.change.emit({
        source: this,
        checked
      });
    }
  }
  updateIndeterminate(indeterminate) {
    const hasChanged = this.indeterminate() !== indeterminate;
    this.indeterminate.set(indeterminate);
    if (hasChanged) {
      this.indeterminateChange.emit(indeterminate);
    }
  }
  onInputClick() {
    this.toggle();
  }
  onInteractionEvent(event) {
    event.stopPropagation();
  }
  onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this.cd.markForCheck();
    });
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  preventBubblingFromLabel(event) {
    event.stopPropagation();
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  writeValue(value) {
    this.checked.set(!!value);
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  setDisabledState(isDisabled) {
    this._disabled.set(isDisabled);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCheckboxComponent_BaseFactory;
      return function CheckboxComponent_Factory(__ngFactoryType__) {
        return (ɵCheckboxComponent_BaseFactory || (ɵCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(_CheckboxComponent)))(__ngFactoryType__ || _CheckboxComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckboxComponent,
      selectors: [["cck-checkbox"]],
      hostVars: 2,
      hostBindings: function CheckboxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function CheckboxComponent_click_HostBindingHandler($event) {
            return ctx.preventBubblingFromLabel($event);
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        checked: [1, "checked"],
        _disabled: [1, "disabled", "_disabled"],
        indeterminate: [1, "indeterminate"],
        id: [1, "id"],
        value: [1, "value"],
        name: [1, "name"]
      },
      outputs: {
        checked: "checkedChange",
        _disabled: "disabledChange",
        indeterminate: "indeterminateChange",
        change: "change",
        indeterminateChange: "indeterminateChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([CHECKBOX_CONTROL_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c02,
      decls: 9,
      vars: 22,
      consts: [["input", ""], ["type", "checkbox", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id"], [3, "innerHtml"], [3, "for"]],
      template: function CheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div")(1, "div")(2, "input", 1, 0);
          ɵɵlistener("blur", function CheckboxComponent_Template_input_blur_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onBlur());
          })("click", function CheckboxComponent_Template_input_click_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInputClick());
          })("change", function CheckboxComponent_Template_input_change_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInteractionEvent($event));
          });
          ɵɵelementEnd();
          ɵɵelement(4, "div")(5, "div", 2);
          ɵɵpipe(6, "trustHtml");
          ɵɵelementEnd();
          ɵɵelementStart(7, "label", 3);
          ɵɵprojection(8);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().wrapper);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().inputWrapper);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().input);
          ɵɵproperty("checked", ctx.checked())("indeterminate", ctx.indeterminate())("disabled", ctx._disabled())("id", ctx.id());
          ɵɵattribute("name", ctx.name())("value", ctx.value());
          ɵɵadvance(2);
          ɵɵclassMap(ctx.classNames().backdrop);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().background);
          ɵɵproperty("innerHtml", ɵɵpipeBind1(6, 20, ctx.themeConfig.components.checkbox == null ? null : ctx.themeConfig.components.checkbox.templates == null ? null : ctx.themeConfig.components.checkbox.templates.checkboxCheckmark), ɵɵsanitizeHtml);
          ɵɵadvance(2);
          ɵɵclassMap(ctx.classNames().label);
          ɵɵproperty("for", ctx.id());
        }
      },
      dependencies: [TrustHtmlPipe],
      styles: [":host{display:inline-flex;align-items:center;vertical-align:middle}.cck-checkbox__backdrop{position:absolute;display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [TrustHtmlPipe],
      selector: "cck-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR],
      host: {
        "[class]": "hostClassNames()",
        "(click)": "preventBubblingFromLabel($event)"
      },
      template: '<div [class]="classNames().wrapper">\r\n\r\n  <div [class]="classNames().inputWrapper">\r\n    <input\r\n      #input\r\n      type="checkbox"\r\n      [class]="classNames().input"\r\n      [attr.name]="name()"\r\n      [attr.value]="value()"\r\n      [checked]="checked()"\r\n      [indeterminate]="indeterminate()"\r\n      [disabled]="_disabled()"\r\n      [id]="id()"\r\n      (blur)="onBlur()"\r\n      (click)="onInputClick()"\r\n      (change)="onInteractionEvent($event)"/>\r\n\r\n    <div [class]="classNames().backdrop"></div>\r\n    <div [class]="classNames().background" [innerHtml]="themeConfig.components.checkbox?.templates?.checkboxCheckmark | trustHtml"></div>\r\n\r\n  </div>\r\n\r\n  <label [class]="classNames().label" [for]="id()">\r\n    <ng-content></ng-content>\r\n  </label>\r\n\r\n</div>',
      styles: [":host{display:inline-flex;align-items:center;vertical-align:middle}.cck-checkbox__backdrop{position:absolute;display:none}\n"]
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-radio/fesm2022/cocokits-angular-radio.mjs
var _c03 = ["*"];
var NEXT_ID2 = 1;
var RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};
var RadioGroupComponent = class _RadioGroupComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "radioGroup";
    this.extraHostElementClassConditions = computed(() => []);
    this.selectedRadio = signal(null);
    this.name = input(`cck-radio-group-${NEXT_ID2++}`);
    this.selected = model();
    this._disabled = model(null, {
      alias: "disabled"
    });
    this.disabled = computed(() => toBooleanOrPresent(this._disabled()));
    this.change = output();
    this.__onSelectedRadioChanged = effect(() => {
      const selectedRadio = this.selectedRadio();
      if (selectedRadio) {
        this.change.emit({
          source: selectedRadio,
          value: selectedRadio.value()
        });
      }
    });
    this.onTouched = () => {
    };
    this._controlValueAccessorChangeFn = () => {
    };
  }
  /**
   * Will be called by radioButton component to set the selected.
   * @internal
   */
  _setSelectedRadio(radio) {
    this.selectedRadio.set(radio);
    this.selected.set(radio.value());
    this._controlValueAccessorChangeFn(radio.value());
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @internal
   */
  writeValue(value) {
    this.selected.set(value);
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   * @internal
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   * @internal
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   * @internal
   */
  setDisabledState(isDisabled) {
    this._disabled.set(isDisabled);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRadioGroupComponent_BaseFactory;
      return function RadioGroupComponent_Factory(__ngFactoryType__) {
        return (ɵRadioGroupComponent_BaseFactory || (ɵRadioGroupComponent_BaseFactory = ɵɵgetInheritedFactory(_RadioGroupComponent)))(__ngFactoryType__ || _RadioGroupComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RadioGroupComponent,
      selectors: [["cck-radio-group"]],
      hostVars: 2,
      hostBindings: function RadioGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        name: [1, "name"],
        selected: [1, "selected"],
        _disabled: [1, "disabled", "_disabled"]
      },
      outputs: {
        selected: "selectedChange",
        _disabled: "disabledChange",
        change: "change"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([RADIO_GROUP_CONTROL_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function RadioGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioGroupComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-radio-group",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
      host: {
        "[class]": "hostClassNames()"
      }
    }]
  }], null, null);
})();
var RadioButtonComponent = class _RadioButtonComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "radioButton";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.checked(),
      classes: this.classNames().checked
    }, {
      if: !this.checked(),
      classes: this.classNames().unchecked
    }, {
      if: this.disabled(),
      classes: this.classNames().disabled
    }]);
    this.radioGroup = inject(RadioGroupComponent, {
      optional: true
    });
    this.size = computed(() => this._size() ?? this.radioGroup?.size());
    this.color = computed(() => this._color() ?? this.radioGroup?.color());
    this.additional = computed(() => __spreadValues(__spreadValues({}, this._additional()), this.radioGroup?.additional()));
    this._name = input(void 0, {
      alias: "name"
    });
    this.name = computed(() => this._name() || this.radioGroup?.name());
    this._checked = model(void 0, {
      alias: "checked"
    });
    this.checked = computed(() => this.radioGroup ? this.radioGroup.selected() === this.value() : this._checked());
    this.value = input.required();
    this._disabled = input(void 0, {
      alias: "disabled"
    });
    this.disabled = computed(() => this._disabled() ?? this.radioGroup?.disabled());
    this.id = input(`cck-radio-${NEXT_ID2++}`);
    this.change = output();
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputChange(event) {
    event.stopPropagation();
    this.change.emit({
      source: this,
      value: this.value()
    });
    this.radioGroup?._setSelectedRadio(this);
    this._checked.set(true);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRadioButtonComponent_BaseFactory;
      return function RadioButtonComponent_Factory(__ngFactoryType__) {
        return (ɵRadioButtonComponent_BaseFactory || (ɵRadioButtonComponent_BaseFactory = ɵɵgetInheritedFactory(_RadioButtonComponent)))(__ngFactoryType__ || _RadioButtonComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RadioButtonComponent,
      selectors: [["cck-radio-button"]],
      hostVars: 2,
      hostBindings: function RadioButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        _name: [1, "name", "_name"],
        _checked: [1, "checked", "_checked"],
        value: [1, "value"],
        _disabled: [1, "disabled", "_disabled"],
        id: [1, "id"]
      },
      outputs: {
        _checked: "checkedChange",
        change: "change"
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c03,
      decls: 9,
      vars: 21,
      consts: [["input", ""], ["type", "radio", 3, "change", "id", "checked", "disabled"], [3, "innerHtml"], [3, "for"]],
      template: function RadioButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div")(1, "div")(2, "input", 1, 0);
          ɵɵlistener("change", function RadioButtonComponent_Template_input_change_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx._onInputChange($event));
          });
          ɵɵelementEnd();
          ɵɵelement(4, "div")(5, "div", 2);
          ɵɵpipe(6, "trustHtml");
          ɵɵelementEnd();
          ɵɵelementStart(7, "label", 3);
          ɵɵprojection(8);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_11_0;
          ɵɵclassMap(ctx.classNames().wrapper);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().inputWrapper);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().input);
          ɵɵproperty("id", ctx.id())("checked", ctx.checked())("disabled", ctx.disabled());
          ɵɵattribute("name", ctx.name())("value", ctx.value());
          ɵɵadvance(2);
          ɵɵclassMap(ctx.classNames().backdrop);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().background);
          ɵɵproperty("innerHtml", ɵɵpipeBind1(6, 19, (tmp_11_0 = ctx.themeConfig.components.radioButton == null ? null : ctx.themeConfig.components.radioButton.templates == null ? null : ctx.themeConfig.components.radioButton.templates.radioCheckmark) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ""), ɵɵsanitizeHtml);
          ɵɵadvance(2);
          ɵɵclassMap(ctx.classNames().label);
          ɵɵproperty("for", ctx.id());
        }
      },
      dependencies: [TrustHtmlPipe],
      styles: [".cck-radio-button__backdrop{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [TrustHtmlPipe],
      selector: "cck-radio-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: `<div [class]="classNames().wrapper">\r
  <div [class]="classNames().inputWrapper">\r
    <input\r
      #input\r
      [class]="classNames().input"\r
      type="radio"\r
      [id]="id()"\r
      [checked]="checked()"\r
      [disabled]="disabled()"\r
      [attr.name]="name()"\r
      [attr.value]="value()"\r
      (change)="_onInputChange($event)">\r
\r
    <div [class]="classNames().backdrop"></div>\r
    <div [class]="classNames().background" [innerHtml]="themeConfig.components.radioButton?.templates?.radioCheckmark ?? '' | trustHtml"></div>\r
\r
  </div>\r
  <label [class]="classNames().label" [for]="id()">\r
    <ng-content></ng-content>\r
  </label>\r
</div>`,
      styles: [".cck-radio-button__backdrop{display:none}\n"]
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function group(steps, options = null) {
  return {
    type: AnimationMetadataType.Group,
    steps,
    options
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function state(name, styles, options) {
  return {
    type: AnimationMetadataType.State,
    name,
    styles,
    options
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
function query(selector, animation, options = null) {
  return {
    type: AnimationMetadataType.Query,
    selector,
    animation,
    options
  };
}
var AnimationBuilder = class _AnimationBuilder {
  static {
    this.ɵfac = function AnimationBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnimationBuilder)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnimationBuilder,
      factory: () => (() => inject(BrowserAnimationBuilder))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static {
    this.ɵfac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BrowserAnimationBuilder,
      factory: _BrowserAnimationBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-overlay/fesm2022/cocokits-angular-overlay.mjs
var _c04 = ["contentWrapper"];
var _c12 = ["contentViewContainerRef"];
function OverlayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function OverlayComponent_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBackdropClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.classNames.backdrop);
    ɵɵproperty("@overlayAnimBackdrop", ctx_r1.animationState);
  }
}
var BACKDROP_DURATION = "100ms";
var CONTENT_DURATION = "200ms";
var FROM_BOTTOM_TO_CENTER_TRANSFORM_START_ANIM = "translateY(30%) rotateX(-5deg)";
var FROM_BOTTOM_TO_CENTER_TRANSFORM_END_ANIM = "translateY(0) rotateX(0)";
function backdrop() {
  return trigger("overlayAnimBackdrop", [state("*", style({
    opacity: "1"
  }))]);
}
function content() {
  return trigger("overlayAnimContent", []);
}
function overlay() {
  return trigger("overlayAnim", [transition(":enter", [group([
    // Backdrop - Enter Animation
    query("@overlayAnimBackdrop", [style({
      opacity: 0
    }), animate(BACKDROP_DURATION, style({
      opacity: "*"
    }))], {
      optional: true
    })
    // Content - Enter Animation
    // Must be with css, because we need to calculate the position of wrapper element, when overlay is connected to other element
  ])], {
    // Default Params
    params: {
      transformStart: FROM_BOTTOM_TO_CENTER_TRANSFORM_START_ANIM,
      transformEnd: FROM_BOTTOM_TO_CENTER_TRANSFORM_END_ANIM
    }
  }), transition(":leave", [group([
    // Backdrop - Leave Animation
    query("@overlayAnimBackdrop", [style({
      opacity: "*"
    }), animate(BACKDROP_DURATION, style({
      opacity: 0
    }))], {
      optional: true
    }),
    // Content - Leave Animation
    // Must be with angular, to keep the component alive until the exist animation has done, otherwise we can not dispatch the close event
    query("@overlayAnimContent", [style({
      opacity: 1,
      transform: "{{transformEnd}}"
    }), animate(CONTENT_DURATION, style({
      opacity: 0,
      transform: "{{transformStart}}"
    }))], {
      optional: true
    })
  ])], {
    // Default Params
    params: {
      transformStart: FROM_BOTTOM_TO_CENTER_TRANSFORM_START_ANIM,
      transformEnd: FROM_BOTTOM_TO_CENTER_TRANSFORM_END_ANIM
    }
  })]);
}
var overlayAnimation = {
  backdrop,
  content,
  overlay
};
var OverlayConnectElemOrigin;
(function(OverlayConnectElemOrigin2) {
  OverlayConnectElemOrigin2["TopLeft"] = "top-left";
  OverlayConnectElemOrigin2["TopRight"] = "top-right";
  OverlayConnectElemOrigin2["BottomRight"] = "bottom-right";
  OverlayConnectElemOrigin2["BottomLeft"] = "bottom-left";
})(OverlayConnectElemOrigin || (OverlayConnectElemOrigin = {}));
var OverlayAnimationType;
(function(OverlayAnimationType2) {
  OverlayAnimationType2["None"] = "none";
  OverlayAnimationType2["TopToCenter"] = "top-to-center";
  OverlayAnimationType2["RightToCenter"] = "right-to-center";
  OverlayAnimationType2["BottomToCenter"] = "bottom-to-center";
  OverlayAnimationType2["LeftToCenter"] = "left-to-center";
  OverlayAnimationType2["ToTopLeft"] = "to-top-left";
  OverlayAnimationType2["ToTopRight"] = "to-top-right";
  OverlayAnimationType2["ToBottomLeft"] = "to-bottom-left";
  OverlayAnimationType2["ToBottomRight"] = "to-bottom-right";
  OverlayAnimationType2["ToTopCenter"] = "to-top-center";
  OverlayAnimationType2["ToRightCenter"] = "to-right-center";
  OverlayAnimationType2["ToBottomCenter"] = "to-bottom-center";
  OverlayAnimationType2["ToLeftCenter"] = "to-left-center";
})(OverlayAnimationType || (OverlayAnimationType = {}));
function getAnimationEnd(contentWrapper, overlayConfig) {
  const {
    translateX,
    translateY,
    rotateX,
    rotateY,
    scale
  } = overlayConfig.positionStrategy.type === "connectToElement" ? getConnectedToElemAnimationEnd(contentWrapper, overlayConfig.positionStrategy.connectTo, overlayConfig.positionStrategy.origin) : getAutoAnimationEnd();
  return `translateX(${translateX}) translateY(${translateY}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
}
function getAnimationStart(contentWrapper, overlayConfig) {
  const {
    translateX,
    translateY,
    rotateX,
    rotateY,
    scale
  } = overlayConfig.positionStrategy.type === "connectToElement" ? getConnectedToElemAnimationStart(contentWrapper, overlayConfig.positionStrategy.connectTo, overlayConfig.positionStrategy.origin) : getAutoAnimationStart(overlayConfig.positionStrategy.animationType);
  return `translateX(${translateX}) translateY(${translateY}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
}
function getAutoAnimationStart(animationType) {
  switch (animationType) {
    case OverlayAnimationType.TopToCenter:
    case OverlayAnimationType.ToTopLeft:
    case OverlayAnimationType.ToTopRight:
    case OverlayAnimationType.ToTopCenter:
      return {
        translateX: "0px",
        translateY: "-30%",
        rotateX: 10,
        rotateY: 0,
        scale: 1
      };
    case OverlayAnimationType.RightToCenter:
    case OverlayAnimationType.ToRightCenter:
      return {
        translateX: "30%",
        translateY: "0px",
        rotateX: 0,
        rotateY: 10,
        scale: 1
      };
    case OverlayAnimationType.BottomToCenter:
    case OverlayAnimationType.ToBottomLeft:
    case OverlayAnimationType.ToBottomRight:
    case OverlayAnimationType.ToBottomCenter:
      return {
        translateX: "0px",
        translateY: "30%",
        rotateX: -10,
        rotateY: 0,
        scale: 1
      };
    case OverlayAnimationType.LeftToCenter:
    case OverlayAnimationType.ToLeftCenter:
      return {
        translateX: "-30%",
        translateY: "0px",
        rotateX: 0,
        rotateY: -10,
        scale: 1
      };
    default:
      return {
        translateX: "0px",
        translateY: "0px",
        rotateX: 0,
        rotateY: 0,
        scale: 1
      };
  }
}
function getAutoAnimationEnd() {
  return {
    translateX: "0%",
    translateY: "0%",
    rotateX: 0,
    rotateY: 0,
    scale: 1
  };
}
function getConnectedToElemAnimationEnd(wrapperElem, connectToElem, origin) {
  const {
    x,
    y
  } = getConnectedToElemAnimationTransform(wrapperElem, connectToElem, origin);
  return {
    translateX: `${x}px`,
    translateY: `${y}px`,
    rotateX: 0,
    rotateY: 0,
    scale: 1
  };
}
function getConnectedToElemAnimationStart(wrapperElem, connectToElem, origin) {
  const {
    x,
    y
  } = getConnectedToElemAnimationTransform(wrapperElem, connectToElem, origin);
  return {
    translateX: `${x}px`,
    translateY: `${y}px`,
    rotateX: 0,
    rotateY: 0,
    scale: 0.8
  };
}
function getConnectedToElemAnimationTransform(wrapperElem, connectToElem, origin) {
  const connectToElemReact = connectToElem.getBoundingClientRect();
  const wrapperElementRect = wrapperElem.getBoundingClientRect();
  switch (origin) {
    case OverlayConnectElemOrigin.TopLeft:
      return {
        x: connectToElemReact.left - wrapperElementRect.left,
        y: connectToElemReact.top - wrapperElementRect.top - wrapperElementRect.height
      };
    case OverlayConnectElemOrigin.TopRight:
      return {
        x: connectToElemReact.right - wrapperElementRect.right,
        y: connectToElemReact.top - wrapperElementRect.top - wrapperElementRect.height
      };
    case OverlayConnectElemOrigin.BottomRight:
      return {
        x: connectToElemReact.right - wrapperElementRect.right,
        y: connectToElemReact.top - wrapperElementRect.top + connectToElemReact.height
      };
    case OverlayConnectElemOrigin.BottomLeft:
      return {
        x: connectToElemReact.left - wrapperElementRect.left,
        y: connectToElemReact.top - wrapperElementRect.top + connectToElemReact.height
      };
    default:
      return {
        x: 0,
        y: 0
      };
  }
}
function setConnectedToElemAnimationStyle(wrapperElem, origin) {
  const transformOrigin = getConnectedToElemTransformOrigin(origin);
  wrapperElem.style.position = "absolute";
  wrapperElem.style.transformOrigin = transformOrigin;
}
function getConnectedToElemTransformOrigin(origin) {
  switch (origin) {
    case OverlayConnectElemOrigin.TopLeft:
      return "bottom left";
    case OverlayConnectElemOrigin.TopRight:
      return "bottom right";
    case OverlayConnectElemOrigin.BottomLeft:
      return "top left";
    case OverlayConnectElemOrigin.BottomRight:
      return "top right";
    default:
      return "";
  }
}
var OverlayRef = class {
  get data() {
    return this.config.data;
  }
  // eslint-disable-next-line no-empty-function
  constructor(componentOrTemplate, config) {
    this.componentOrTemplate = componentOrTemplate;
    this.config = config;
    this.closeReplaySubject$ = new OnceReplaySubject();
    this.close$ = this.closeReplaySubject$.asObservable();
  }
  close(result) {
    this.closeReplaySubject$.next(result);
  }
};
var OverlayComponent = class _OverlayComponent {
  constructor() {
    this.injector = inject(Injector);
    this.overlayRef = inject(OverlayRef);
    this.classNames = getClassNames("overlay", {}, inject(ThemeConfigToken));
    this.hostClassNames = [this.classNames.host, ...this.overlayRef.config.panelClass].join(" ");
    this.disableAnimation = this.overlayRef.config.positionStrategy.type === "auto" && this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.None;
    this.closeAnimationDoneSubject$ = new OnceSubject();
    this.closeAnimationDone$ = this.closeAnimationDoneSubject$.asObservable();
    this.OverlayAnimationType = OverlayAnimationType;
    this.animationState = {
      value: true
    };
    this.contentWrapper = viewChild.required("contentWrapper");
    this.contentViewContainerRef = viewChild.required("contentViewContainerRef", {
      read: ViewContainerRef
    });
  }
  get isTopAlignment() {
    if (this.overlayRef.config.positionStrategy.type !== "auto") {
      return false;
    }
    return this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToTopCenter || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToTopLeft || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToTopRight;
  }
  get isRightAlignment() {
    if (this.overlayRef.config.positionStrategy.type !== "auto") {
      return false;
    }
    return this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToRightCenter || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToTopRight || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToBottomRight;
  }
  get isBottomAlignment() {
    if (this.overlayRef.config.positionStrategy.type !== "auto") {
      return false;
    }
    return this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToBottomCenter || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToBottomRight || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToBottomLeft;
  }
  get isLeftAlignment() {
    if (this.overlayRef.config.positionStrategy.type !== "auto") {
      return false;
    }
    return this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToLeftCenter || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToTopLeft || this.overlayRef.config.positionStrategy.animationType === OverlayAnimationType.ToBottomLeft;
  }
  ngOnInit() {
    isTemplateRef(this.overlayRef.componentOrTemplate) ? this.contentViewContainerRef().createEmbeddedView(this.overlayRef.componentOrTemplate, {}, {
      injector: this.injector
    }) : this.contentViewContainerRef().createComponent(this.overlayRef.componentOrTemplate);
    if (this.overlayRef.config.positionStrategy.type === "connectToElement") {
      setConnectedToElemAnimationStyle(this.contentWrapper().nativeElement, this.overlayRef.config.positionStrategy.origin);
    }
  }
  onBackdropClick() {
    return __async(this, null, function* () {
      if (!this.overlayRef.config.disableBackdropClose) {
        this.overlayRef.close();
      }
    });
  }
  onBackdropAnimationDone(event) {
    return __async(this, null, function* () {
      if (event.toState === "void") {
        const dialogResult = yield firstValueFrom(this.overlayRef.close$);
        this.closeAnimationDoneSubject$.next(dialogResult);
      }
    });
  }
  /**
   * Enter animation must be with css, because we need to calculate the position of wrapper element, when overlay is connected to other element
   */
  onBackdropAnimationStart(event) {
    if (event.fromState !== "void") {
      return;
    }
    const TRANSITION = "transform 150ms";
    const contentWrapperElem = this.contentWrapper().nativeElement;
    const transformStart = getAnimationStart(contentWrapperElem, this.overlayRef.config);
    const transformEnd = getAnimationEnd(contentWrapperElem, this.overlayRef.config);
    contentWrapperElem.style.transform = transformStart;
    onceEventListener(contentWrapperElem, "transitionend", () => __async(this, null, function* () {
      contentWrapperElem.style.transition = "";
    }));
    requestAnimationFrame(() => {
      contentWrapperElem.style.transition = TRANSITION;
      contentWrapperElem.style.transform = transformEnd;
    });
    this.animationState = {
      value: true,
      params: {
        transformStart,
        transformEnd
      }
    };
  }
  static {
    this.ɵfac = function OverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OverlayComponent,
      selectors: [["cck-overlay"]],
      viewQuery: function OverlayComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.contentWrapper, _c04, 5);
          ɵɵviewQuerySignal(ctx.contentViewContainerRef, _c12, 5, ViewContainerRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 12,
      hostBindings: function OverlayComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵsyntheticHostListener("@overlayAnim.done", function OverlayComponent_animation_overlayAnim_done_HostBindingHandler($event) {
            return ctx.onBackdropAnimationDone($event);
          })("@overlayAnim.start", function OverlayComponent_animation_overlayAnim_start_HostBindingHandler($event) {
            return ctx.onBackdropAnimationStart($event);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@overlayAnim", ctx.animationState)("@.disabled", ctx.disableAnimation);
          ɵɵclassMap(ctx.hostClassNames);
          ɵɵclassProp("cck-overlay--top-alignment", ctx.isTopAlignment)("cck-overlay--right-alignment", ctx.isRightAlignment)("cck-overlay--bottom-alignment", ctx.isBottomAlignment)("cck-overlay--left-alignment", ctx.isLeftAlignment);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 5,
      vars: 16,
      consts: [["contentWrapper", ""], ["contentViewContainerRef", ""], [3, "class"], [3, "click"]],
      template: function OverlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OverlayComponent_Conditional_0_Template, 1, 3, "div", 2);
          ɵɵelementStart(1, "div", null, 0);
          ɵɵelementContainer(3, null, 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵconditional(ctx.overlayRef.config.hasBackdrop ? 0 : -1);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames.contentWrapper);
          ɵɵstyleProp("width", ctx.overlayRef.config.size == null ? null : ctx.overlayRef.config.size.width)("min-width", ctx.overlayRef.config.size == null ? null : ctx.overlayRef.config.size.minWidth)("max-width", ctx.overlayRef.config.size == null ? null : ctx.overlayRef.config.size.maxWidth)("height", ctx.overlayRef.config.size == null ? null : ctx.overlayRef.config.size.height)("min-height", ctx.overlayRef.config.size == null ? null : ctx.overlayRef.config.size.minHeight)("max-height", ctx.overlayRef.config.size == null ? null : ctx.overlayRef.config.size.maxHeight);
          ɵɵproperty("@overlayAnimContent", ctx.animationState);
        }
      },
      styles: [".cck-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;display:flex;justify-content:center;align-items:center;perspective:1000px}.cck-overlay--top-alignment{align-items:flex-start}.cck-overlay--right-alignment{justify-content:flex-end}.cck-overlay--bottom-alignment{align-items:flex-end}.cck-overlay--left-alignment{justify-content:flex-start}.cck-overlay__backdrop{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.cck-overlay__content-wrapper{position:relative;top:0;left:0}\n"],
      encapsulation: 2,
      data: {
        animation: [overlayAnimation.backdrop(), overlayAnimation.content(), overlayAnimation.overlay()]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-overlay",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [overlayAnimation.backdrop(), overlayAnimation.content(), overlayAnimation.overlay()],
      host: {
        "[class]": "hostClassNames",
        "[class.cck-overlay--top-alignment]": "isTopAlignment",
        "[class.cck-overlay--right-alignment]": "isRightAlignment",
        "[class.cck-overlay--bottom-alignment]": "isBottomAlignment",
        "[class.cck-overlay--left-alignment]": "isLeftAlignment",
        "[@overlayAnim]": "animationState",
        "(@overlayAnim.done)": "onBackdropAnimationDone($event)",
        "(@overlayAnim.start)": "onBackdropAnimationStart($event)",
        "[@.disabled]": "disableAnimation"
      },
      template: '<!-- BACKDROP -->\r\n@if(overlayRef.config.hasBackdrop) {\r\n  <div [@overlayAnimBackdrop]="animationState" [class]="classNames.backdrop" (click)="onBackdropClick()"></div>\r\n}\r\n\r\n<!-- CONTENT -->\r\n<div\r\n  #contentWrapper\r\n  [@overlayAnimContent]="animationState"\r\n  [class]="classNames.contentWrapper"\r\n\r\n  [style.width]="overlayRef.config.size?.width"\r\n  [style.min-width]="overlayRef.config.size?.minWidth"\r\n  [style.max-width]="overlayRef.config.size?.maxWidth"\r\n\r\n  [style.height]="overlayRef.config.size?.height"\r\n  [style.min-height]="overlayRef.config.size?.minHeight"\r\n  [style.max-height]="overlayRef.config.size?.maxHeight"\r\n>\r\n  <ng-container #contentViewContainerRef></ng-container>\r\n</div>',
      styles: [".cck-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;display:flex;justify-content:center;align-items:center;perspective:1000px}.cck-overlay--top-alignment{align-items:flex-start}.cck-overlay--right-alignment{justify-content:flex-end}.cck-overlay--bottom-alignment{align-items:flex-end}.cck-overlay--left-alignment{justify-content:flex-start}.cck-overlay__backdrop{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.cck-overlay__content-wrapper{position:relative;top:0;left:0}\n"]
    }]
  }], null, null);
})();
function isTemplateRef(ref) {
  return ref instanceof TemplateRef;
}
var DEFAULT_CONFIG = {
  panelClass: [],
  hasBackdrop: true,
  disableBackdropClose: false,
  positionStrategy: {
    type: "auto",
    animationType: OverlayAnimationType.BottomToCenter
  },
  data: null
};
var OverlayService = class _OverlayService {
  constructor() {
    this.applicationRef = inject(ApplicationRef);
  }
  /**
   * Open an overlay with given component or template
   */
  open(componentOrTemplate, partialConfig = {}) {
    const config = __spreadValues(__spreadValues({}, DEFAULT_CONFIG), partialConfig);
    const rootComponentRef = this.applicationRef.components[0];
    const viewContainerRef = config.viewContainerRef || rootComponentRef.injector.get(ViewContainerRef);
    const overlayRef = new OverlayRef(componentOrTemplate, config);
    const providers = [{
      provide: OverlayRef,
      useValue: overlayRef
    }];
    const overlayComponentRef = viewContainerRef.createComponent(OverlayComponent, {
      injector: Injector.create({
        providers
      })
    });
    if (config.appendTo) {
      const appendTo = config.appendTo === "body" ? document.body : config.appendTo;
      appendTo.appendChild(overlayComponentRef.injector.get(ElementRef).nativeElement);
    }
    const afterClose = this.closeHandler(overlayRef, viewContainerRef, overlayComponentRef);
    return {
      overlayComponentRef,
      viewContainerRef,
      overlayRef,
      afterClose
    };
  }
  closeHandler(overlayRef, viewContainerRef, overlayComponentRef) {
    return new Promise((resolve) => {
      overlayRef.close$.subscribe(() => {
        const indexView = viewContainerRef.indexOf(overlayComponentRef.hostView);
        viewContainerRef.remove(indexView);
      });
      overlayComponentRef.instance.closeAnimationDone$.subscribe((dialogResult) => {
        resolve(dialogResult);
      });
    });
  }
  static {
    this.ɵfac = function OverlayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayService,
      factory: _OverlayService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-form-field/fesm2022/cocokits-angular-form-field.mjs
var _c05 = ["wrapperElem"];
var _c13 = [[["cck-label"]], [["cck-leading"]], [["cck-prefix"]], "*", [["cck-suffix"]], [["cck-trailing"]], [["cck-hint"]], [["cck-error"]]];
var _c22 = ["cck-label", "cck-leading", "cck-prefix", "*", "cck-suffix", "cck-trailing", "cck-hint", "cck-error"];
var _c3 = ["*"];
function LabelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "*");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.classNames().requiredMarker);
  }
}
function ErrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c4 = ["cck-input", ""];
var _c5 = ["cck-textarea", ""];
var _c6 = ["optionsTemp"];
var _c7 = [[["cck-select-preview"]], "*"];
var _c8 = ["cck-select-preview", "*"];
function SelectComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.classNames().placeholder);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.placeholder());
  }
}
function SelectComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function SelectComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r0.triggerValue(), " ");
  }
}
function SelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, SelectComponent_Conditional_2_Conditional_1_Template, 1, 0)(2, SelectComponent_Conditional_2_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.classNames().triggerValue);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.customTrigger() ? 1 : 2);
  }
}
function SelectComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.classNames().optionsWrapper);
  }
}
var _c9 = ["*", [["cck-option"]]];
var _c10 = ["*", "cck-option"];
function OptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "cck-checkbox", 1);
    ɵɵlistener("change", function OptionComponent_Conditional_0_Template_cck_checkbox_change_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCheckboxClick($event.checked));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.classNames().multipleWrapper);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.isSelected());
  }
}
function OptionComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cck-svg-icon", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r1.themeConfig.components.option == null ? null : ctx_r1.themeConfig.components.option.templates.optionSelectedIcon);
  }
}
function OptionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, OptionComponent_Conditional_3_Conditional_1_Template, 1, 1, "cck-svg-icon", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.classNames().selectedCheckmark);
    ɵɵadvance();
    ɵɵconditional((ctx_r1.themeConfig.components.option == null ? null : ctx_r1.themeConfig.components.option.templates == null ? null : ctx_r1.themeConfig.components.option.templates.optionSelectedIcon) ? 1 : -1);
  }
}
function ChipComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 1);
    ɵɵlistener("click", function ChipComponent_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRemoveBtnClick());
    });
    ɵɵelement(2, "cck-svg-icon", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.classNames().removeIconWrapper);
    ɵɵadvance(2);
    ɵɵproperty("icon", ctx_r1.removeIcon);
  }
}
var _c11 = ["input"];
function ChipListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cck-chip", 3);
    ɵɵlistener("remove", function ChipListComponent_For_1_Template_cck_chip_remove_0_listener() {
      const chip_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onChipRemove(chip_r3));
    })("click", function ChipListComponent_For_1_Template_cck_chip_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onChipClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const chip_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("removable", true)("size", ctx_r3.size());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", chip_r3, " ");
  }
}
var FormFieldStore = new InjectionToken("FORM_FIELD_STORE_SERVICE");
function injectFormFieldStore() {
  return inject(FormFieldStore, {
    optional: true
  }) ?? new FormFieldStoreService();
}
var FormFieldStoreService = class {
  constructor() {
    this.compRef = {};
    this.has = {
      formField: signal(false),
      input: signal(false),
      textarea: signal(false),
      select: signal(false),
      chipList: signal(false)
    };
    this.changeDetectorRefs = /* @__PURE__ */ new Set();
    this.controllerReadySubject$ = new Subject();
    this.__markForCheckOnControlStatusChange = this.controllerReadySubject$.pipe(switchMap((control) => control.events), takeUntilDestroyed()).subscribe(() => {
      this.changeDetectorRefs.forEach((cd) => cd.markForCheck());
    });
    this.controlStatus$ = this.controllerReadySubject$.pipe(switchMap((control) => control.events.pipe(startWith({
      source: this.ngControl
    }))), map((event) => {
      const control = event.source;
      return {
        value: control.value,
        dirty: control.dirty,
        enabled: control.enabled,
        disabled: control.disabled,
        invalid: control.invalid,
        pending: control.pending,
        pristine: control.pristine,
        status: control.status,
        touched: control.touched,
        untouched: control.untouched,
        valid: control.valid,
        errors: control.errors,
        required: control.hasValidator(Validators.required)
      };
    }), takeUntilDestroyed());
    this.control = toDeepSignal(toSignal(this.controlStatus$, {
      initialValue: {
        value: null,
        dirty: null,
        enabled: null,
        disabled: null,
        invalid: null,
        pending: null,
        pristine: null,
        status: null,
        touched: null,
        untouched: null,
        valid: null,
        errors: null,
        required: null
      }
    }));
    this.error = {
      components: signal([])
    };
    this.chipList = {
      disabled: computed(() => this.has.chipList() && this.compRef.chipList ? this.compRef.chipList.disabled() : null),
      size: computed(() => this.has.chipList() && this.compRef.chipList ? this.compRef.chipList._size() : null)
    };
    this.select = {
      disabled: computed(() => this.has.select() && this.compRef.select ? this.compRef.select.disabled() : null),
      required: computed(() => this.has.select() && this.compRef.select ? this.compRef.select._required() : null)
    };
    this.textarea = {
      disabled: computed(() => this.has.textarea() && this.compRef.textArea ? this.compRef.textArea.disabled() : null),
      required: computed(() => this.has.textarea() && this.compRef.textArea ? this.compRef.textArea._required() : null),
      focused: computed(() => this.has.textarea() && this.compRef.textArea ? this.compRef.textArea._focused() : null)
    };
    this.input = {
      disabled: computed(() => this.has.input() && this.compRef.input ? this.compRef.input.disabled() : null),
      required: computed(() => this.has.input() && this.compRef.input ? this.compRef.input._required() : null),
      focused: computed(() => this.has.input() && this.compRef.input ? this.compRef.input._focused() : null)
    };
    this.formField = {
      disabled: computed(() => this.has.formField() && this.compRef.formField ? this.compRef.formField.disabled() : null),
      hideRequiredMarker: computed(() => this.has.formField() && this.compRef.formField ? this.compRef.formField.hideRequiredMarker() : null),
      wrapperElem: computed(() => this.has.formField() && this.compRef.formField ? this.compRef.formField._wrapperElemRef() : null),
      size: computed(() => this.has.formField() && this.compRef.formField ? this.compRef.formField._size() : null)
    };
    this.disabled = computed(() => this.input.disabled() ?? this.textarea.disabled() ?? this.select.disabled() ?? this.chipList.disabled() ?? this.formField.disabled() ?? this.control.disabled() ?? false);
    this.state = {
      disabled: this.disabled,
      hasInput: this.has.input.asReadonly(),
      hasTextarea: this.has.textarea.asReadonly(),
      hasSelect: this.has.select.asReadonly(),
      hasChipList: this.has.chipList.asReadonly(),
      hideRequiredMarker: computed(() => this.formField.hideRequiredMarker() ?? false),
      required: computed(() => this.input.required() ?? this.textarea.required() ?? this.select.required() ?? this.control.required() ?? false),
      focused: computed(() => {
        return this.disabled() ? false : this.input.focused() ?? this.textarea.focused();
      }),
      hasError: computed(() => {
        if (this.control.invalid() && this.control.touched()) {
          return true;
        }
        return this.error.components().some((component) => component.force());
      })
    };
  }
  // Control
  setController(ngControl) {
    this.ngControl = ngControl;
    this.controllerReadySubject$.next(ngControl);
  }
  // Error Component
  registerErrorComponent(errorComp) {
    this.error.components.update((components) => [...components, errorComp]);
  }
  unregisterErrorComponent(errorComp) {
    this.error.components.update((components) => components.filter((component) => component !== errorComp));
  }
  registerComponent(name, componentRef, cd) {
    this.compRef = __spreadProps(__spreadValues({}, this.compRef), {
      [name]: componentRef
    });
    this.has[name].set(true);
    if (cd) {
      this.changeDetectorRefs.add(cd);
    }
  }
  unregisterComponent(componentRef, cd) {
    this.compRef = recordReduceMerge(this.compRef, (ref, name) => {
      return ref === componentRef ? null : {
        [name]: ref
      };
    });
    if (cd) {
      this.changeDetectorRefs.delete(cd);
    }
  }
};
var FormFieldComponent = class _FormFieldComponent extends _UiBaseComponent {
  constructor() {
    super();
    this.componentName = "formField";
    this.store = injectFormFieldStore();
    this.cd = inject(ChangeDetectorRef);
    this.extraHostElementClassConditions = computed(() => [
      // TODO: Add required (https://github.com/orgs/coco-base/projects/1/views/7?filterQuery=&pane=issue&itemId=95567898)
      {
        if: this.store.state.disabled(),
        classes: this.classNames().disabled
      },
      {
        if: this.store.state.focused(),
        classes: this.classNames().focused
      },
      {
        if: this.store.state.hasError(),
        classes: this.classNames().error
      },
      {
        if: this.store.state.hasInput(),
        classes: this.classNames().withInput
      },
      {
        if: this.store.state.hasTextarea(),
        classes: this.classNames().withTextarea
      },
      {
        if: this.store.state.hasSelect(),
        classes: this.classNames().withSelect
      },
      {
        if: this.store.state.hasChipList(),
        classes: this.classNames().withChipList
      },
      {
        if: this.store.control.untouched(),
        classes: this.classNames().untouched
      },
      {
        if: this.store.control.touched(),
        classes: this.classNames().touched
      },
      {
        if: this.store.control.pristine(),
        classes: this.classNames().pristine
      },
      {
        if: this.store.control.dirty(),
        classes: this.classNames().dirty
      },
      {
        if: this.store.control.valid(),
        classes: this.classNames().valid
      },
      {
        if: this.store.control.invalid(),
        classes: this.classNames().invalid
      },
      {
        if: this.store.control.pending(),
        classes: this.classNames().pending
      }
    ]);
    this._wrapperElemRef = viewChild.required("wrapperElem");
    this.hideRequiredMarker = input();
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this.store.registerComponent("formField", this, this.cd);
  }
  ngOnDestroy() {
    this.store.unregisterComponent(this, this.cd);
  }
  static {
    this.ɵfac = function FormFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormFieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormFieldComponent,
      selectors: [["cck-form-field"]],
      viewQuery: function FormFieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx._wrapperElemRef, _c05, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 2,
      hostBindings: function FormFieldComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        hideRequiredMarker: [1, "hideRequiredMarker"],
        disabled: [1, "disabled"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: FormFieldStore,
        useClass: FormFieldStoreService
      }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c22,
      decls: 12,
      vars: 6,
      consts: [["wrapperElem", ""]],
      template: function FormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c13);
          ɵɵprojection(0);
          ɵɵelementStart(1, "div", null, 0);
          ɵɵprojection(3, 1);
          ɵɵelementStart(4, "div");
          ɵɵprojection(5, 2);
          ɵɵprojection(6, 3);
          ɵɵprojection(7, 4);
          ɵɵelementEnd();
          ɵɵprojection(8, 5);
          ɵɵelementEnd();
          ɵɵelementStart(9, "div");
          ɵɵprojection(10, 6);
          ɵɵprojection(11, 7);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().wrapper);
          ɵɵadvance(3);
          ɵɵclassMap(ctx.classNames().inputWrapper);
          ɵɵadvance(5);
          ɵɵclassMap(ctx.classNames().feedbackWrapper);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-form-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: FormFieldStore,
        useClass: FormFieldStoreService
      }],
      host: {
        "[class]": "hostClassNames()"
      },
      template: `<ng-content select='cck-label'></ng-content>\r
\r
<div #wrapperElem [class]="classNames().wrapper">\r
\r
  <ng-content select='cck-leading'></ng-content>\r
\r
  <div [class]="classNames().inputWrapper">\r
    <ng-content select='cck-prefix'></ng-content>\r
    <ng-content></ng-content>\r
    <ng-content select='cck-suffix'></ng-content>\r
  </div>\r
\r
  <ng-content select='cck-trailing'></ng-content>\r
</div>\r
\r
<div [class]="classNames().feedbackWrapper">\r
  <ng-content select='cck-hint'></ng-content>\r
  <ng-content select='cck-error'></ng-content>\r
</div>\r
`
    }]
  }], () => [], null);
})();
var LabelComponent = class _LabelComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "label";
    this.extraHostElementClassConditions = computed(() => []);
    this.store = injectFormFieldStore();
    this.for = input();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵLabelComponent_BaseFactory;
      return function LabelComponent_Factory(__ngFactoryType__) {
        return (ɵLabelComponent_BaseFactory || (ɵLabelComponent_BaseFactory = ɵɵgetInheritedFactory(_LabelComponent)))(__ngFactoryType__ || _LabelComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LabelComponent,
      selectors: [["cck-label"]],
      hostVars: 2,
      hostBindings: function LabelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        for: [1, "for"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 3,
      vars: 4,
      consts: [[3, "for"], [3, "class"]],
      template: function LabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "label", 0);
          ɵɵprojection(1);
          ɵɵtemplate(2, LabelComponent_Conditional_2_Template, 2, 2, "span", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().labelTag);
          ɵɵproperty("for", ctx.for());
          ɵɵadvance(2);
          ɵɵconditional(!ctx.store.state.hideRequiredMarker() && ctx.store.state.required() ? 2 : -1);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: '<label [class]="classNames().labelTag" [for]="for()">\r\n  <ng-content></ng-content>\r\n\r\n  @if(!store.state.hideRequiredMarker() && store.state.required()) {\r\n    <span [class]="classNames().requiredMarker">*</span>\r\n  }\r\n</label>'
    }]
  }], null, null);
})();
var HintComponent = class _HintComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "hint";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵHintComponent_BaseFactory;
      return function HintComponent_Factory(__ngFactoryType__) {
        return (ɵHintComponent_BaseFactory || (ɵHintComponent_BaseFactory = ɵɵgetInheritedFactory(_HintComponent)))(__ngFactoryType__ || _HintComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _HintComponent,
      selectors: [["cck-hint"]],
      hostVars: 2,
      hostBindings: function HintComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function HintComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HintComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-hint",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var ErrorComponent = class _ErrorComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "error";
    this.extraHostElementClassConditions = computed(() => []);
    this.store = injectFormFieldStore();
    this.force = input(false);
  }
  ngOnInit() {
    this.store.registerErrorComponent(this);
  }
  ngOnDestroy() {
    this.store.unregisterErrorComponent(this);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵErrorComponent_BaseFactory;
      return function ErrorComponent_Factory(__ngFactoryType__) {
        return (ɵErrorComponent_BaseFactory || (ɵErrorComponent_BaseFactory = ɵɵgetInheritedFactory(_ErrorComponent)))(__ngFactoryType__ || _ErrorComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ErrorComponent,
      selectors: [["cck-error"]],
      hostVars: 2,
      hostBindings: function ErrorComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      inputs: {
        force: [1, "force"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 1,
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, ErrorComponent_Conditional_0_Template, 1, 0);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.force() || ctx.store.state.hasError() ? 0 : -1);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-error",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: "@if(force() || store.state.hasError()) {\r\n  <ng-content></ng-content>\r\n}\r\n"
    }]
  }], null, null);
})();
var LeadingComponent = class _LeadingComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "leading";
    this.store = injectFormFieldStore();
    this.clickable = input(false);
    this.extraHostElementClassConditions = computed(() => [{
      if: this.clickable() && !this.store.state.disabled(),
      classes: this.classNames().clickable
    }]);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵLeadingComponent_BaseFactory;
      return function LeadingComponent_Factory(__ngFactoryType__) {
        return (ɵLeadingComponent_BaseFactory || (ɵLeadingComponent_BaseFactory = ɵɵgetInheritedFactory(_LeadingComponent)))(__ngFactoryType__ || _LeadingComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LeadingComponent,
      selectors: [["cck-leading"]],
      hostVars: 2,
      hostBindings: function LeadingComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        clickable: [1, "clickable"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function LeadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeadingComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-leading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var TrailingComponent = class _TrailingComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "trailing";
    this.store = injectFormFieldStore();
    this.extraHostElementClassConditions = computed(() => [{
      if: this.clickable() && !this.store.state.disabled(),
      classes: this.classNames().clickable
    }]);
    this.clickable = input(false);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTrailingComponent_BaseFactory;
      return function TrailingComponent_Factory(__ngFactoryType__) {
        return (ɵTrailingComponent_BaseFactory || (ɵTrailingComponent_BaseFactory = ɵɵgetInheritedFactory(_TrailingComponent)))(__ngFactoryType__ || _TrailingComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TrailingComponent,
      selectors: [["cck-trailing"]],
      hostVars: 2,
      hostBindings: function TrailingComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        clickable: [1, "clickable"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function TrailingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrailingComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-trailing",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var SuffixComponent = class _SuffixComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "suffix";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSuffixComponent_BaseFactory;
      return function SuffixComponent_Factory(__ngFactoryType__) {
        return (ɵSuffixComponent_BaseFactory || (ɵSuffixComponent_BaseFactory = ɵɵgetInheritedFactory(_SuffixComponent)))(__ngFactoryType__ || _SuffixComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SuffixComponent,
      selectors: [["cck-suffix"]],
      hostVars: 2,
      hostBindings: function SuffixComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function SuffixComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuffixComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-suffix",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var PrefixComponent = class _PrefixComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "prefix";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPrefixComponent_BaseFactory;
      return function PrefixComponent_Factory(__ngFactoryType__) {
        return (ɵPrefixComponent_BaseFactory || (ɵPrefixComponent_BaseFactory = ɵɵgetInheritedFactory(_PrefixComponent)))(__ngFactoryType__ || _PrefixComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PrefixComponent,
      selectors: [["cck-prefix"]],
      hostVars: 2,
      hostBindings: function PrefixComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().host);
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function PrefixComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-prefix",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "classNames().host"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var InputComponent = class _InputComponent extends _UiBaseComponent {
  // endregion
  constructor() {
    super();
    this.componentName = "input";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.store.state.disabled(),
      classes: this.classNames().disabled
    }]);
    this.cd = inject(ChangeDetectorRef);
    this.store = injectFormFieldStore();
    this.ngControl = inject(NgControl, {
      optional: true,
      self: true
    });
    this._focused = signal(false);
    this._type = input(void 0, {
      alias: "type"
    });
    this._required = input(void 0, {
      transform: toBooleanOrPresent,
      alias: "required"
    });
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this.baseClassOptions.skipType = true;
    this.store.registerComponent("input", this, this.cd);
  }
  ngOnInit() {
    if (this.ngControl?.control) {
      this.store.setController(this.ngControl.control);
    }
  }
  onFocus() {
    this._focused.set(true);
  }
  onBlur() {
    this._focused.set(false);
  }
  ngOnDestroy() {
    this.store.unregisterComponent(this, this.cd);
  }
  static {
    this.ɵfac = function InputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _InputComponent,
      selectors: [["input", "cck-input", ""], ["input", "cckInput", ""]],
      hostVars: 4,
      hostBindings: function InputComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focus", function InputComponent_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function InputComponent_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.store.state.disabled())("type", ctx.type());
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        _type: [1, "type", "_type"],
        _required: [1, "required", "_required"],
        disabled: [1, "disabled"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c4,
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "input[cck-input], input[cckInput]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()",
        "[disabled]": "store.state.disabled()",
        "[type]": "type()",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()"
      },
      template: "<ng-content></ng-content>"
    }]
  }], () => [], null);
})();
var TextareaComponent = class _TextareaComponent extends _UiBaseComponent {
  constructor() {
    super();
    this.componentName = "textarea";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.store.state.disabled(),
      classes: this.classNames().disabled
    }, {
      if: this.autoResize(),
      classes: this.classNames().autoResize
    }]);
    this.cd = inject(ChangeDetectorRef);
    this.store = injectFormFieldStore();
    this.ngControl = inject(NgControl, {
      optional: true,
      self: true
    });
    this.elemRef = inject(ElementRef);
    this._focused = signal(false);
    this._required = input(void 0, {
      transform: toBooleanOrPresent,
      alias: "required"
    });
    this.autoResize = input(false);
    this.minRows = input(2, {
      transform: toNumber
    });
    this.maxRows = input(5, {
      transform: toNumber
    });
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this.__onAutoResizeChanged = effect((onCleanup) => {
      if (this.autoResize()) {
        const {
          destroy,
          update
        } = autoResizeTextarea(this.elemRef.nativeElement, this.minRows(), this.maxRows());
        this.autoResizeUpdate = update;
        onCleanup(() => destroy());
      }
    });
    this.autoResizeUpdate = () => {
      throw new Error(`'autoResize' for textarea is no enabled or it has not initialized jet`);
    };
    this.baseClassOptions.skipType = true;
    this.store.registerComponent("textarea", this, this.cd);
  }
  ngOnInit() {
    if (this.ngControl?.control) {
      this.store.setController(this.ngControl.control);
    }
  }
  onFocus() {
    this._focused.set(true);
  }
  onBlur() {
    this._focused.set(false);
  }
  ngOnDestroy() {
    this.store.unregisterComponent(this, this.cd);
  }
  static {
    this.ɵfac = function TextareaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextareaComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TextareaComponent,
      selectors: [["textarea", "cck-textarea", ""], ["textarea", "cckTextarea", ""]],
      hostVars: 3,
      hostBindings: function TextareaComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focus", function TextareaComponent_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function TextareaComponent_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.store.state.disabled());
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        _required: [1, "required", "_required"],
        autoResize: [1, "autoResize"],
        minRows: [1, "minRows"],
        maxRows: [1, "maxRows"],
        disabled: [1, "disabled"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c5,
      decls: 0,
      vars: 0,
      template: function TextareaComponent_Template(rf, ctx) {
      },
      styles: [".cck-textarea--auto-resize{resize:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "textarea[cck-textarea], textarea[cckTextarea]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()",
        "[disabled]": "store.state.disabled()",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()"
      },
      template: "",
      styles: [".cck-textarea--auto-resize{resize:none}\n"]
    }]
  }], () => [], null);
})();
var SelectTriggerSource;
(function(SelectTriggerSource2) {
  SelectTriggerSource2["FromControl"] = "fromControl";
  SelectTriggerSource2["FromOption"] = "fromOption";
})(SelectTriggerSource || (SelectTriggerSource = {}));
var SelectStore = new InjectionToken("SELECT_STORE_SERVICE");
function injectSelectStore() {
  return inject(SelectStore, {
    optional: true
  }) ?? new SelectStoreService();
}
var SelectStoreService = class _SelectStoreService {
  get selectedItems() {
    if (!this._selectedItems) {
      this._selectedItems = signal(this.selection.getSelected());
    }
    return this._selectedItems.asReadonly();
  }
  set selectedItems(items) {
    this._selectedItems?.set(items);
  }
  get isEmpty() {
    if (!this._isEmpty) {
      this._isEmpty = signal(this.selection.isEmpty());
    }
    return this._isEmpty.asReadonly();
  }
  set isEmpty(isEmpty) {
    this._isEmpty?.set(isEmpty);
  }
  get hasValue() {
    if (!this._hasValue) {
      this._hasValue = signal(this.selection.hasValue());
    }
    return this._hasValue.asReadonly();
  }
  set hasValue(hasValue2) {
    this._hasValue?.set(hasValue2);
  }
  get isMultiple() {
    if (!this._isMultiple) {
      this._isMultiple = signal(this.selection.isMultipleSelection());
    }
    return this._isMultiple.asReadonly();
  }
  set isMultiple(isMultiple) {
    this._isMultiple?.set(isMultiple);
  }
  constructor() {
    this.selection = new Selection();
    this.selectionSignalMap = /* @__PURE__ */ new Map();
    this.changesSubject$ = new Subject();
    this.changes$ = this.changesSubject$.asObservable();
    this.selection.addChangeEventListener((changes) => {
      changes.added.forEach((item) => {
        const itemSignal = this.selectionSignalMap.get(item);
        itemSignal?.set(true);
      });
      changes.removed.forEach((item) => {
        const itemSignal = this.selectionSignalMap.get(item);
        itemSignal?.set(false);
      });
      this.changesSubject$.next({
        selected: this.selection.getSelected(),
        triggerSource: changes.triggerSource
      });
      this.syncValuesWithSelection();
    });
  }
  syncValuesWithSelection() {
    this.selectedItems = this.selection.getSelected();
    this.isEmpty = this.selection.isEmpty();
    this.hasValue = this.selection.hasValue();
  }
  resetWithOption(options = {}) {
    this.selection.clear();
    this.selection.updateOptions(options);
    this.isMultiple = this.selection.isMultipleSelection();
    this.syncValuesWithSelection();
  }
  isSelected(item) {
    const itemSignal = this.selectionSignalMap.get(item);
    if (itemSignal) {
      return itemSignal.asReadonly();
    }
    const newSignal = signal(this.selection.isSelected(item));
    this.selectionSignalMap.set(item, newSignal);
    return newSignal.asReadonly();
  }
  clear(config) {
    this.selection.clear(config);
  }
  select(items, config) {
    this.selection.select(items, config);
  }
  deselect(items, config) {
    this.selection.deselect(items, config);
  }
  setSelection(items, config) {
    this.selection.setSelection(items, config);
  }
  toggle(items, config) {
    this.selection.toggle(items, config);
  }
  ngOnDestroy() {
    this.selection.removeAllChangeEventListener();
    this.selectionSignalMap.clear();
  }
  static {
    this.ɵfac = function SelectStoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectStoreService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SelectStoreService,
      factory: _SelectStoreService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectStoreService, [{
    type: Injectable
  }], () => [], null);
})();
var SelectPreviewComponent = class _SelectPreviewComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "selectPreview";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelectPreviewComponent_BaseFactory;
      return function SelectPreviewComponent_Factory(__ngFactoryType__) {
        return (ɵSelectPreviewComponent_BaseFactory || (ɵSelectPreviewComponent_BaseFactory = ɵɵgetInheritedFactory(_SelectPreviewComponent)))(__ngFactoryType__ || _SelectPreviewComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectPreviewComponent,
      selectors: [["cck-select-preview"]],
      hostVars: 2,
      hostBindings: function SelectPreviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function SelectPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPreviewComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-select-preview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var SELECT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
var SelectComponent = class _SelectComponent extends _UiBaseComponent {
  /**
   * Whether the user should be allowed to select multiple options.
   */
  set multiple(multiple) {
    this.selectStore.resetWithOption({
      multiple
    });
  }
  /**
   * Value of the select control.
   */
  set value(value) {
    this.selectStore.setSelection(value);
  }
  // endregion
  constructor() {
    super();
    this.componentName = "select";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.formFieldStore.state.disabled(),
      classes: this.classNames().disabled
    }, {
      if: this.selectStore.isMultiple(),
      classes: this.classNames().multiple
    }, {
      if: !this.selectStore.isMultiple(),
      classes: this.classNames().single
    }, {
      if: this.isOpened(),
      classes: this.classNames().opened
    }, {
      if: !this.isOpened(),
      classes: this.classNames().closed
    }]);
    this.size = computed(() => this._size() ?? this.formFieldStore.formField.size?.());
    this.formFieldStore = injectFormFieldStore();
    this.selectStore = injectSelectStore();
    this.cd = inject(ChangeDetectorRef);
    this.elemRef = inject(ElementRef);
    this.overlay = inject(OverlayService);
    this.injector = inject(Injector);
    this.ngControl = null;
    this.customTrigger = contentChild(SelectPreviewComponent);
    this.optionsTemp = viewChild("optionsTemp", {
      read: TemplateRef
    });
    this.triggerValue = computed(() => this.selectStore.selectedItems().join(", "));
    this.selected = this.selectStore.selectedItems;
    this.__onSelectedItemsChangedFromOption = this.selectStore.changes$.pipe(takeUntilDestroyed()).subscribe(({
      selected,
      triggerSource
    }) => {
      if (triggerSource === SelectTriggerSource.FromOption) {
        this._controlValueAccessorChangeFn(selected);
        this._onTouched();
        this.selectionChange.emit(selected);
      }
    });
    this.isOpened = signal(false);
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this._required = input(void 0, {
      transform: toBooleanOrPresent,
      alias: "required"
    });
    this.maxOptionsHeight = input(220);
    this.placeholder = input("");
    this.appendTo = input();
    this.openedChange = output();
    this.selectionChange = output();
    this._onTouched = () => {
    };
    this._controlValueAccessorChangeFn = () => {
    };
    const dropdownIcon = this.themeConfig.components.select?.templates?.dropdownIcon;
    if (!dropdownIcon) {
      throw new Error("`dropdownIcon` has not defined in `ThemeConfigToken` of selected theme");
    }
    this.dropdownIcon = dropdownIcon;
    this.formFieldStore.registerComponent("select", this, this.cd);
  }
  ngOnInit() {
    this.ngControl = this.injector.get(NgControl, null);
    if (this.ngControl?.control) {
      this.formFieldStore.setController(this.ngControl.control);
    }
  }
  onHostClick(e) {
    return __async(this, null, function* () {
      e.stopPropagation();
      if (this.formFieldStore.state.disabled()) {
        return;
      }
      const optionsTemp = this.optionsTemp();
      if (!optionsTemp) {
        throw new Error(`No options available for select component`);
      }
      const connectTo = this.formFieldStore.formField.wrapperElem?.()?.nativeElement ?? this.elemRef.nativeElement;
      this.selectStore.renderedOverlay = this.overlay.open(optionsTemp, {
        panelClass: [this.classNames().overlay],
        appendTo: this.appendTo(),
        size: {
          minWidth: connectTo.getBoundingClientRect().width + "px",
          maxHeight: this.maxOptionsHeight() ? this.maxOptionsHeight() + "px" : ""
        },
        positionStrategy: {
          type: "connectToElement",
          connectTo,
          origin: OverlayConnectElemOrigin.BottomLeft
        }
      });
      this.isOpened.set(true);
      this.openedChange.emit(true);
      this._onTouched();
      yield firstValueFrom(this.selectStore.renderedOverlay.overlayRef.close$);
      this.openedChange.emit(false);
      this.isOpened.set(false);
    });
  }
  ngOnDestroy() {
    this.formFieldStore.unregisterComponent(this, this.cd);
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  writeValue(value) {
    isNullish(value) ? this.selectStore.clear({
      triggerSource: SelectTriggerSource.FromControl
    }) : this.selectStore.setSelection(value, {
      triggerSource: SelectTriggerSource.FromControl
    });
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  setDisabledState(_isDisabled) {
  }
  static {
    this.ɵfac = function SelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectComponent,
      selectors: [["cck-select"]],
      contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.customTrigger, SelectPreviewComponent, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      viewQuery: function SelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.optionsTemp, _c6, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 2,
      hostBindings: function SelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function SelectComponent_click_HostBindingHandler($event) {
            return ctx.onHostClick($event);
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        disabled: [1, "disabled"],
        _required: [1, "required", "_required"],
        multiple: "multiple",
        maxOptionsHeight: [1, "maxOptionsHeight"],
        value: "value",
        placeholder: [1, "placeholder"],
        appendTo: [1, "appendTo"]
      },
      outputs: {
        openedChange: "openedChange",
        selectionChange: "selectionChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([SELECT_CONTROL_VALUE_ACCESSOR, {
        provide: SelectStore,
        useClass: SelectStoreService
      }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c8,
      decls: 7,
      vars: 6,
      consts: [["optionsTemp", ""], [3, "class"], [3, "icon"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c7);
          ɵɵelementStart(0, "div");
          ɵɵtemplate(1, SelectComponent_Conditional_1_Template, 2, 3, "div", 1)(2, SelectComponent_Conditional_2_Template, 3, 3, "div", 1);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div");
          ɵɵelement(4, "cck-svg-icon", 2);
          ɵɵelementEnd();
          ɵɵtemplate(5, SelectComponent_ng_template_5_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().triggerWrapper);
          ɵɵadvance();
          ɵɵconditional(ctx.selectStore.isEmpty() ? 1 : 2);
          ɵɵadvance(2);
          ɵɵclassMap(ctx.classNames().dropdownIconWrapper);
          ɵɵadvance();
          ɵɵproperty("icon", ctx.dropdownIcon);
        }
      },
      dependencies: [SvgIconComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [SvgIconComponent],
      selector: "cck-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [SELECT_CONTROL_VALUE_ACCESSOR, {
        provide: SelectStore,
        useClass: SelectStoreService
      }],
      host: {
        "[class]": "hostClassNames()",
        "(click)": "onHostClick($event)"
      },
      template: '\r\n<div [class]="classNames().triggerWrapper">\r\n\r\n  @if(selectStore.isEmpty()) {\r\n    <div [class]="classNames().placeholder">{{placeholder()}}</div>\r\n\r\n  } @else {\r\n    <div [class]="classNames().triggerValue">\r\n\r\n      @if(customTrigger()) {\r\n        <ng-content select="cck-select-preview"></ng-content>\r\n      } @else {\r\n        {{triggerValue()}}\r\n      }\r\n    </div>\r\n  }\r\n\r\n</div>\r\n\r\n<div [class]="classNames().dropdownIconWrapper">\r\n  <cck-svg-icon [icon]="dropdownIcon"></cck-svg-icon>\r\n</div>\r\n\r\n<ng-template #optionsTemp>\r\n  <div [class]="classNames().optionsWrapper">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>'
    }]
  }], () => [], {
    multiple: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var OptionGroupComponent = class _OptionGroupComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "optionGroup";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.disabled() ?? false,
      classes: this.classNames().disabled
    }]);
    this.size = computed(() => this._size() ?? this.selectComp?.size());
    this.selectComp = inject(SelectComponent, {
      optional: true
    });
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this.label = input();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOptionGroupComponent_BaseFactory;
      return function OptionGroupComponent_Factory(__ngFactoryType__) {
        return (ɵOptionGroupComponent_BaseFactory || (ɵOptionGroupComponent_BaseFactory = ɵɵgetInheritedFactory(_OptionGroupComponent)))(__ngFactoryType__ || _OptionGroupComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OptionGroupComponent,
      selectors: [["cck-option-group"]],
      hostVars: 2,
      hostBindings: function OptionGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        disabled: [1, "disabled"],
        label: [1, "label"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c10,
      decls: 4,
      vars: 3,
      template: function OptionGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c9);
          ɵɵelementStart(0, "div");
          ɵɵtext(1);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵprojection(3, 1);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().label);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.label(), " ");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionGroupComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-option-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: '<div [class]="classNames().label">\r\n  {{label()}}\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<ng-content select="cck-option"></ng-content>'
    }]
  }], null, null);
})();
var OptionComponent = class _OptionComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "option";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.disabled(),
      classes: this.classNames().disabled
    }, {
      if: this.isSelected(),
      classes: this.classNames().selected
    }, {
      if: this.selectStore.isMultiple(),
      classes: this.classNames().multiple
    }, {
      if: !this.selectStore.isMultiple(),
      classes: this.classNames().single
    }]);
    this.size = computed(() => this._size() ?? this.selectComp?.size());
    this.isSelected = computed(() => {
      const value = this.value();
      return isNotNullish(value) ? this.selectStore.isSelected(value)() : false;
    });
    this.optionGroupComp = inject(OptionGroupComponent, {
      optional: true
    });
    this.selectComp = inject(SelectComponent, {
      optional: true
    });
    this.selectStore = injectSelectStore();
    this._disabled = input(void 0, {
      alias: "disabled",
      transform: toBooleanOrPresent
    });
    this.disabled = computed(() => this._disabled() ?? this.optionGroupComp?.disabled() ?? false);
    this.value = input();
  }
  // endregion
  onHostClick(e) {
    e.stopPropagation();
    if (this.disabled()) {
      return;
    }
    const value = this.value();
    if (this.selectStore.isMultiple()) {
      if (isNullish(value)) {
        return;
      }
      this.selectStore.toggle(value, {
        triggerSource: SelectTriggerSource.FromOption
      });
      return;
    }
    isNullish(value) ? this.selectStore.clear({
      triggerSource: SelectTriggerSource.FromOption
    }) : this.selectStore.select(value, {
      triggerSource: SelectTriggerSource.FromOption
    });
    this.selectStore.renderedOverlay?.overlayRef.close();
  }
  onCheckboxClick(checked) {
    const value = this.value();
    if (isNullish(value)) {
      return;
    }
    checked ? this.selectStore.select(value, {
      triggerSource: SelectTriggerSource.FromOption
    }) : this.selectStore.deselect(value, {
      triggerSource: SelectTriggerSource.FromOption
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOptionComponent_BaseFactory;
      return function OptionComponent_Factory(__ngFactoryType__) {
        return (ɵOptionComponent_BaseFactory || (ɵOptionComponent_BaseFactory = ɵɵgetInheritedFactory(_OptionComponent)))(__ngFactoryType__ || _OptionComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OptionComponent,
      selectors: [["cck-option"]],
      hostVars: 2,
      hostBindings: function OptionComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function OptionComponent_click_HostBindingHandler($event) {
            return ctx.onHostClick($event);
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        _disabled: [1, "disabled", "_disabled"],
        value: [1, "value"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 4,
      vars: 4,
      consts: [[3, "class"], [3, "change", "checked"], [3, "icon"]],
      template: function OptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, OptionComponent_Conditional_0_Template, 2, 3, "div", 0);
          ɵɵelementStart(1, "div");
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵtemplate(3, OptionComponent_Conditional_3_Template, 2, 3, "div", 0);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.selectStore.isMultiple() ? 0 : -1);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().contentWrapper);
          ɵɵadvance(2);
          ɵɵconditional(ctx.isSelected() && !ctx.selectStore.isMultiple() && (ctx.themeConfig.components.option == null ? null : ctx.themeConfig.components.option.templates == null ? null : ctx.themeConfig.components.option.templates.optionSelectedIcon) ? 3 : -1);
        }
      },
      dependencies: [CheckboxComponent, SvgIconComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [CheckboxComponent, SvgIconComponent],
      selector: "cck-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()",
        "(click)": "onHostClick($event)"
      },
      template: '@if(selectStore.isMultiple()) {\r\n  <div [class]="classNames().multipleWrapper">\r\n    <cck-checkbox [checked]="isSelected()" (change)="onCheckboxClick($event.checked)"></cck-checkbox>\r\n  </div>\r\n\r\n}\r\n\r\n<div [class]="classNames().contentWrapper">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n\r\n\r\n@if(isSelected() && !selectStore.isMultiple() && themeConfig.components.option?.templates?.optionSelectedIcon) {\r\n  <div [class]="classNames().selectedCheckmark">\r\n    @if(themeConfig.components.option?.templates?.optionSelectedIcon) {\r\n      <cck-svg-icon [icon]="themeConfig.components.option?.templates!.optionSelectedIcon!"></cck-svg-icon>\r\n    }\r\n  </div>\r\n}\r\n'
    }]
  }], null, null);
})();
var ChipComponent = class _ChipComponent extends _UiBaseComponent {
  // endregion
  constructor() {
    super();
    this.componentName = "chip";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.disabled() ?? this.formFieldStore.state.disabled(),
      classes: this.classNames().disabled
    }, {
      if: this.removable(),
      classes: this.classNames().removable
    }]);
    this.formFieldStore = injectFormFieldStore();
    this.removable = input();
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this.remove = output();
    const removeIcon = this.themeConfig.components.chip?.templates?.chipRemoveIcon;
    if (!removeIcon) {
      throw new Error("`chipRemoveIcon` has not defined in `ThemeConfig` of selected theme");
    }
    this.removeIcon = removeIcon;
  }
  onRemoveBtnClick() {
    this.remove.emit();
  }
  static {
    this.ɵfac = function ChipComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChipComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ChipComponent,
      selectors: [["cck-chip"]],
      hostVars: 2,
      hostBindings: function ChipComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        removable: [1, "removable"],
        disabled: [1, "disabled"]
      },
      outputs: {
        remove: "remove"
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 3,
      vars: 3,
      consts: [[3, "class"], ["cck-icon-button", "", "type", "null", "size", "null", "color", "null", 3, "click"], [3, "icon"]],
      template: function ChipComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div");
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, ChipComponent_Conditional_2_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().contentWrapper);
          ɵɵadvance(2);
          ɵɵconditional(ctx.removable() ? 2 : -1);
        }
      },
      dependencies: [SvgIconComponent, IconButtonComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [SvgIconComponent, IconButtonComponent],
      selector: "cck-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: '<div [class]="classNames().contentWrapper">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n@if(removable()) {\r\n  <div [class]="classNames().removeIconWrapper">\r\n    <button cck-icon-button type="null" size="null" color="null" (click)="onRemoveBtnClick()">\r\n      <cck-svg-icon [icon]="removeIcon"></cck-svg-icon>\r\n    </button>\r\n  </div>\r\n}'
    }]
  }], () => [], null);
})();
var ChipListComponent = class _ChipListComponent extends _UiBaseComponent {
  // region ---------------- INPUTS ----------------
  /**
   * Sets the list of chips to be displayed in the component.
   * When this input is updated, the selection store is updated with the new chips.
   */
  set chips(chips) {
    this.selectionStore.setSelection(chips);
  }
  // endregion
  constructor() {
    super();
    this.componentName = "chipList";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.formFieldStore.state.disabled(),
      classes: this.classNames().disabled
    }]);
    this.size = computed(() => this._size() ?? this.formFieldStore.formField.size?.());
    this.inputRef = viewChild.required("input");
    this.formFieldStore = injectFormFieldStore();
    this.selectionStore = inject(SelectStore);
    this.cd = inject(ChangeDetectorRef);
    this.separatorKeysCodes = ["Enter"];
    this.__onFormFieldWrapperClick = effect((onCleanup) => {
      const callback = () => this.onFormFieldHostClick();
      this.formFieldStore.formField.wrapperElem()?.nativeElement.addEventListener("click", callback);
      onCleanup(() => {
        this.formFieldStore.formField.wrapperElem()?.nativeElement.removeEventListener("click", callback);
      });
    });
    this.addOnBlur = input(true);
    this.placeholder = input("");
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
    this.chipRemove = output();
    this.chipsChange = output();
    this.chipAdd = output();
    this.selectionStore.resetWithOption({
      multiple: true
    });
    this.formFieldStore.registerComponent("chipList", this, this.cd);
  }
  onFormFieldHostClick() {
    this.inputRef().nativeElement.focus();
  }
  onChipClick(e) {
    e.stopPropagation();
  }
  onInputBlur() {
    const inputElem = this.inputRef().nativeElement;
    const value = inputElem.value.trim();
    if (this.addOnBlur() && hasValue(value)) {
      this.selectionStore.select(value);
      inputElem.value = "";
    }
  }
  onKeyup(e) {
    const inputElem = this.inputRef().nativeElement;
    const value = inputElem.value.trim();
    if (this.separatorKeysCodes.includes(e.key) && hasValue(value)) {
      this.selectionStore.select(value);
      inputElem.value = "";
    }
  }
  onChipRemove(chip) {
    this.selectionStore.deselect(chip);
  }
  ngOnDestroy() {
    this.formFieldStore.unregisterComponent(this, this.cd);
  }
  static {
    this.ɵfac = function ChipListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChipListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ChipListComponent,
      selectors: [["cck-chip-list"]],
      viewQuery: function ChipListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.inputRef, _c11, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 2,
      hostBindings: function ChipListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ChipListComponent_click_HostBindingHandler() {
            return ctx.onHostClick();
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        chips: "chips",
        addOnBlur: [1, "addOnBlur"],
        placeholder: [1, "placeholder"],
        disabled: [1, "disabled"]
      },
      outputs: {
        chipRemove: "chipRemove",
        chipsChange: "chipsChange",
        chipAdd: "chipAdd"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: SelectStore,
        useClass: SelectStoreService
      }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 4,
      consts: [["input", ""], [3, "removable", "size"], ["type", "text", 3, "keyup", "blur", "disabled", "placeholder"], [3, "remove", "click", "removable", "size"]],
      template: function ChipListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵrepeaterCreate(0, ChipListComponent_For_1_Template, 2, 3, "cck-chip", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementStart(2, "input", 2, 0);
          ɵɵlistener("keyup", function ChipListComponent_Template_input_keyup_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onKeyup($event));
          })("blur", function ChipListComponent_Template_input_blur_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInputBlur());
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.selectionStore.selectedItems());
          ɵɵadvance(2);
          ɵɵclassMap(ctx.classNames().input);
          ɵɵproperty("disabled", ctx.formFieldStore.state.disabled())("placeholder", ctx.placeholder());
        }
      },
      dependencies: [ChipComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [ChipComponent],
      selector: "cck-chip-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: SelectStore,
        useClass: SelectStoreService
      }],
      host: {
        "[class]": "hostClassNames()",
        "(click)": "onHostClick()"
      },
      template: '@for (chip of selectionStore.selectedItems(); track chip) {\r\n  <cck-chip [removable]="true" [size]="size()" (remove)="onChipRemove(chip)" (click)="onChipClick($event)">\r\n    {{chip}}\r\n  </cck-chip>\r\n}\r\n\r\n<input\r\n  #input\r\n  type="text"\r\n  [disabled]="formFieldStore.state.disabled()"\r\n  [class]="classNames().input"\r\n  [placeholder]="placeholder()"\r\n  (keyup)="onKeyup($event)"\r\n  (blur)="onInputBlur()"\r\n/>'
    }]
  }], () => [], {
    chips: [{
      type: Input
    }]
  });
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-divider/fesm2022/cocokits-angular-divider.mjs
var DividerComponent = class _DividerComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "divider";
    this.extraHostElementClassConditions = computed(() => []);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDividerComponent_BaseFactory;
      return function DividerComponent_Factory(__ngFactoryType__) {
        return (ɵDividerComponent_BaseFactory || (ɵDividerComponent_BaseFactory = ɵɵgetInheritedFactory(_DividerComponent)))(__ngFactoryType__ || _DividerComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DividerComponent,
      selectors: [["cck-divider"]],
      hostVars: 2,
      hostBindings: function DividerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function DividerComponent_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: ""
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-menu/fesm2022/cocokits-angular-menu.mjs
var _c06 = ["*"];
var MenuComponent = class _MenuComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "menu";
    this.extraHostElementClassConditions = computed(() => []);
    this.closeOnSelectItem = input(false);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMenuComponent_BaseFactory;
      return function MenuComponent_Factory(__ngFactoryType__) {
        return (ɵMenuComponent_BaseFactory || (ɵMenuComponent_BaseFactory = ɵɵgetInheritedFactory(_MenuComponent)))(__ngFactoryType__ || _MenuComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MenuComponent,
      selectors: [["cck-menu"]],
      hostVars: 2,
      hostBindings: function MenuComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        closeOnSelectItem: [1, "closeOnSelectItem"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c06,
      decls: 1,
      vars: 0,
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var MenuItemComponent = class _MenuItemComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "menuItem";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.disabled(),
      classes: this.classNames().disabled
    }]);
    this.menuComp = inject(MenuComponent, {
      optional: true
    });
    this.overlayRef = inject(OverlayRef, {
      optional: true
    });
    this.type = computed(() => this._type() ?? this.menuComp?._type());
    this.size = computed(() => this._size() ?? this.menuComp?._size());
    this.color = computed(() => this._color() ?? this.menuComp?._color());
    this.disabled = input(void 0, {
      transform: toBooleanOrPresent
    });
  }
  onHostClick() {
    if (this.menuComp?.closeOnSelectItem()) {
      this.overlayRef?.close();
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMenuItemComponent_BaseFactory;
      return function MenuItemComponent_Factory(__ngFactoryType__) {
        return (ɵMenuItemComponent_BaseFactory || (ɵMenuItemComponent_BaseFactory = ɵɵgetInheritedFactory(_MenuItemComponent)))(__ngFactoryType__ || _MenuItemComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MenuItemComponent,
      selectors: [["cck-menu-item"]],
      hostVars: 2,
      hostBindings: function MenuItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function MenuItemComponent_click_HostBindingHandler() {
            return ctx.onHostClick();
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        disabled: [1, "disabled"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c06,
      decls: 1,
      vars: 0,
      template: function MenuItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-menu-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": "hostClassNames()",
        "(click)": "onHostClick()"
      },
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var MenuTriggerDirective = class _MenuTriggerDirective {
  constructor() {
    this.menuOverlayClassNames = getClassNames("menu", {}, inject(ThemeConfigToken)).overlay;
    this.overlay = inject(OverlayService);
    this.elemRef = inject(ElementRef);
    this.renderedOverlay = signal(null);
    this.menuOpen = computed(() => this.renderedOverlay() !== null);
    this.menuSizes = input();
    this.menuOrigin = input(OverlayConnectElemOrigin.BottomRight);
    this.menuTemplate = input.required({
      alias: "cckMenuTrigger"
    });
    this.menuOpened = output();
    this.menuClosed = output();
  }
  onHostClick() {
    this.openMenu();
  }
  /**
   * Closes the menu.
   */
  closeMenu() {
    if (!this.menuOpen()) {
      return;
    }
    this.renderedOverlay()?.overlayRef.close();
    this.renderedOverlay.set(null);
  }
  /**
   * Opens the menu.
   */
  openMenu() {
    if (this.menuOpen()) {
      return;
    }
    const renderedOverlay = this.overlay.open(this.menuTemplate(), {
      panelClass: [this.menuOverlayClassNames],
      size: this.menuSizes(),
      positionStrategy: {
        type: "connectToElement",
        origin: this.menuOrigin(),
        connectTo: this.elemRef.nativeElement
      }
    });
    this.renderedOverlay.set(renderedOverlay);
    this.menuOpened.emit();
    renderedOverlay.afterClose.then(() => {
      this.renderedOverlay.set(null);
      this.menuClosed.emit();
    });
  }
  /**
   * Toggles the menu between the open and closed states.
   */
  toggleMenu() {
    this.menuOpen() ? this.closeMenu() : this.openMenu();
  }
  static {
    this.ɵfac = function MenuTriggerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuTriggerDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MenuTriggerDirective,
      selectors: [["", "cckMenuTrigger", ""]],
      hostBindings: function MenuTriggerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function MenuTriggerDirective_click_HostBindingHandler() {
            return ctx.onHostClick();
          });
        }
      },
      inputs: {
        menuSizes: [1, "menuSizes"],
        menuOrigin: [1, "menuOrigin"],
        menuTemplate: [1, "cckMenuTrigger", "menuTemplate"]
      },
      outputs: {
        menuOpened: "menuOpened",
        menuClosed: "menuClosed"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuTriggerDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[cckMenuTrigger]",
      host: {
        "(click)": "onHostClick()"
      }
    }]
  }], null, null);
})();

// node_modules/@cocokits/angular-components/node_modules/@cocokits/angular-toggle/fesm2022/cocokits-angular-toggle.mjs
var _c07 = ["*"];
var NEXT_ID3 = 1;
var TOGGLE_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleComponent),
  multi: true
};
var ToggleComponent = class _ToggleComponent extends _UiBaseComponent {
  constructor() {
    super(...arguments);
    this.componentName = "toggle";
    this.extraHostElementClassConditions = computed(() => [{
      if: this.disabled(),
      classes: this.classNames().disabled
    }, {
      if: this.checked(),
      classes: this.classNames().checked
    }, {
      if: !this.checked(),
      classes: this.classNames().unchecked
    }, {
      if: this.labelPosition() === "before",
      classes: this.classNames().labelBefore
    }]);
    this.cd = inject(ChangeDetectorRef);
    this.elemRef = inject(ElementRef);
    this.id = input(`TOGGLE_${NEXT_ID3++}`);
    this.labelPosition = input("after");
    this.checked = model(false);
    this._disabled = model(void 0, {
      alias: "disabled"
    });
    this.disabled = computed(() => toBooleanOrPresent(this._disabled()));
    this.change = output();
    this.onTouched = () => {
    };
    this.controlValueAccessorChangeFn = () => {
    };
  }
  /**
   * Toggles the checked state of the slide-toggle.
   */
  toggle() {
    this.setChecked(!this.checked());
  }
  /**
   * Set the checked state of the slide-toggle.
   */
  setChecked(checked) {
    const hasChanged = this.checked() !== checked;
    if (hasChanged) {
      this.checked.set(checked);
      this.controlValueAccessorChangeFn(checked);
      this.change.emit({
        checked
      });
    }
  }
  /**
   *  Skip click events that didn't come from the `<label/>` element and accept only the host element.
   *  For example click on padding part of host element.
   *  This prevents the click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  onHostClick(event) {
    if (event.target !== this.elemRef.nativeElement) {
      return;
    }
    this.toggle();
  }
  onInputClick() {
    this.toggle();
  }
  onInteractionEvent(event) {
    event.stopPropagation();
  }
  onBlur() {
    Promise.resolve().then(() => {
      this.onTouched();
      this.cd.markForCheck();
    });
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  writeValue(value) {
    this.checked.set(!!value);
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  registerOnChange(fn) {
    this.controlValueAccessorChangeFn = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @internal
   */
  setDisabledState(isDisabled) {
    this._disabled.set(isDisabled);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵToggleComponent_BaseFactory;
      return function ToggleComponent_Factory(__ngFactoryType__) {
        return (ɵToggleComponent_BaseFactory || (ɵToggleComponent_BaseFactory = ɵɵgetInheritedFactory(_ToggleComponent)))(__ngFactoryType__ || _ToggleComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToggleComponent,
      selectors: [["cck-toggle"]],
      hostVars: 2,
      hostBindings: function ToggleComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ToggleComponent_click_HostBindingHandler($event) {
            return ctx.onHostClick($event);
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.hostClassNames());
        }
      },
      inputs: {
        id: [1, "id"],
        labelPosition: [1, "labelPosition"],
        checked: [1, "checked"],
        _disabled: [1, "disabled", "_disabled"]
      },
      outputs: {
        checked: "checkedChange",
        _disabled: "disabledChange",
        change: "change"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TOGGLE_CONTROL_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c07,
      decls: 6,
      vars: 14,
      consts: [[3, "for"], ["type", "checkbox", 3, "blur", "click", "change", "checked", "disabled", "id"]],
      template: function ToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "label", 0)(1, "div")(2, "input", 1);
          ɵɵlistener("blur", function ToggleComponent_Template_input_blur_2_listener() {
            return ctx.onBlur();
          })("click", function ToggleComponent_Template_input_click_2_listener() {
            return ctx.onInputClick();
          })("change", function ToggleComponent_Template_input_change_2_listener($event) {
            return ctx.onInteractionEvent($event);
          });
          ɵɵelementEnd();
          ɵɵelement(3, "div")(4, "div");
          ɵɵelementEnd();
          ɵɵprojection(5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.classNames().label);
          ɵɵproperty("for", ctx.id());
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().sliderWrapper);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().input);
          ɵɵproperty("checked", ctx.checked())("disabled", ctx.disabled())("id", ctx.id());
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().thumb);
          ɵɵadvance();
          ɵɵclassMap(ctx.classNames().backdrop);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [],
      selector: "cck-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [TOGGLE_CONTROL_VALUE_ACCESSOR],
      host: {
        "[class]": "hostClassNames()",
        "(click)": "onHostClick($event)"
      },
      template: '<label [class]="classNames().label" [for]="id()">\r\n  <div [class]="classNames().sliderWrapper">\r\n    <input\r\n      type="checkbox"\r\n      [class]="classNames().input"\r\n      [checked]="checked()"\r\n      [disabled]="disabled()"\r\n      [id]="id()"\r\n      (blur)="onBlur()"\r\n      (click)="onInputClick()"\r\n      (change)="onInteractionEvent($event)" />\r\n\r\n    <div [class]="classNames().thumb"></div>\r\n    <div [class]="classNames().backdrop"></div>\r\n  </div>\r\n\r\n  <ng-content></ng-content>\r\n</label>\r\n'
    }]
  }], null, null);
})();
export {
  ArrayLikeDiff,
  ButtonComponent,
  CLASS_NAMES_FN_MAP,
  CheckboxComponent,
  ChipComponent,
  ChipListComponent,
  CustomEventListener,
  DividerComponent,
  ElementAnchorPoint,
  ErrorComponent,
  FormFieldComponent,
  FormFieldStore,
  FormFieldStoreService,
  HintComponent,
  IconButtonComponent,
  InputComponent,
  LabelComponent,
  LeadingComponent,
  MenuComponent,
  MenuItemComponent,
  MenuTriggerDirective,
  ObjToKeysPipe,
  OnceReplaySubject,
  OnceSubject,
  OptionComponent,
  OptionGroupComponent,
  PrefixComponent,
  RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
  RadioButtonComponent,
  RadioGroupComponent,
  ScrollLocker,
  SelectComponent,
  SelectPreviewComponent,
  Selection,
  SuffixComponent,
  SvgIconComponent,
  TextareaComponent,
  ThemeConfigToken,
  ToggleComponent,
  TrailingComponent,
  TrustHtmlPipe,
  _UiBaseComponent,
  autoResizeTextarea,
  buttonLayoutClassNamesConfig,
  checkboxLayoutClassNamesConfig,
  chipLayoutClassNamesConfig,
  chipListLayoutClassNamesConfig,
  cssSelectorRender,
  deepClone,
  deepComparator,
  deepMerge,
  deepMergeDefaultCustomize,
  deepMergeWithIdCustomizer,
  dividerLayoutClassNamesConfig,
  errorLayoutClassNamesConfig,
  formFieldLayoutClassNamesConfig,
  fromAttrByName,
  fromAttrByNameToBoolean,
  fromAttrWithPrefix,
  fromControl,
  fuzzysearch,
  generateLayoutBaseClassName,
  generateLayoutClassNameFromElement,
  getButtonClassNames,
  getCheckboxClassNames,
  getChipClassNames,
  getChipListClassNames,
  getClassNames,
  getComponentPropsWithDefault,
  getDividerClassNames,
  getElementAnchorPosition,
  getErrorClassNames,
  getFormFieldClassNames,
  getHintClassNames,
  getHostClassNamesFromProps,
  getIconButtonClassNames,
  getInputClassNames,
  getInstance,
  getLabelClassNames,
  getLeadingClassNames,
  getMenuClassNames,
  getMenuItemClassNames,
  getOptionClassNames,
  getOptionGroupClassNames,
  getPrefixClassNames,
  getRadioButtonClassNames,
  getRadioGroupClassNames,
  getSelectClassNames,
  getSelectPreviewClassNames,
  getSuffixClassNames,
  getSvgIconClassNames,
  getTextareaClassNames,
  getToggleClassNames,
  getTrailingClassNames,
  hasNotValue,
  hasValue,
  hintLayoutClassNamesConfig,
  iconButtonLayoutClassNamesConfig,
  injectFormFieldStore,
  inputLayoutClassNamesConfig,
  intersectionObserver$,
  isArray,
  isBlob,
  isBoolean,
  isNotArray,
  isNotBlob,
  isNotBoolean,
  isNotNullish,
  isNotNumber,
  isNotString,
  isNullish,
  isNumber,
  isNumberOrNaN,
  isNutObject,
  isObject,
  isString,
  isStringAndNotBlank,
  labelLayoutClassNamesConfig,
  layoutClassNamesConfigRecord,
  lazyPromise,
  leadingLayoutClassNamesConfig,
  menuItemLayoutClassNamesConfig,
  menuLayoutClassNamesConfig,
  mutationObserver$,
  onceEventListener,
  optionGroupLayoutClassNamesConfig,
  optionLayoutClassNamesConfig,
  prefixLayoutClassNamesConfig,
  provideCocokits,
  radioButtonLayoutClassNamesConfig,
  radioGroupLayoutClassNamesConfig,
  recordForEach,
  recordReduceDeepMerge,
  recordReduceDeepMergeUniqId,
  recordReduceMerge,
  reduceDeepMerge,
  reduceMerge,
  removeAmountFormat,
  repeatReduceMerge,
  resizeObserver$,
  runInsideNgZone,
  safeMergeString,
  sanitizeValue,
  selectLayoutClassNamesConfig,
  selectPreviewLayoutClassNamesConfig,
  simpleComparator,
  skipNullish,
  suffixLayoutClassNamesConfig,
  svgIconLayoutClassNamesConfig,
  textareaClassNamesConfig,
  toAmountFormat,
  toArray,
  toBooleanOrPresent,
  toCamelCase,
  toDeepSignal,
  toKebabCase,
  toNumber,
  toPascalCase,
  toSnakeCase,
  toTitleCase,
  toggleLayoutClassNamesConfig,
  trailingLayoutClassNamesConfig,
  validateUiBaseComponentProps
};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@cocokits_angular-components.js.map
