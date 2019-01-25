(function () {
  Date.prototype.format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, // 月份
      "d+": this.getDate(), // 日
      "h+": this.getHours(), // 小时
      "m+": this.getMinutes(), // 分
      "s+": this.getSeconds(), // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      "S": this.getMilliseconds() // 毫秒
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }

    return fmt;
  };

  Number.prototype.add = function (arg) {
    var s1 = this.toString(), s2 = arg.toString();
    var r1 = 0, r2 = 0;

    try {
      if (s1.indexOf(".") >= 0) {
        r1 = s1.split(".")[1].length;
      }

      if (s2.indexOf(".") >= 0) {
        r2 = s2.split(".")[1].length;
      }
    } catch (e) {

    }

    var m = Math.pow(10, Math.max(r1, r2));

    return (this * m + arg * m) / m;
  };

  Number.prototype.div = function (arg) {
    var s1 = this.toString(), s2 = arg.toString();
    var t1 = 0, t2 = 0;

    try {
      if (s1.indexOf(".") >= 0) {
        t1 = s1.split(".")[1].length;
      }

      if (s2.indexOf(".") >= 0) {
        t2 = s2.split(".")[1].length;
      }
    } catch (e) {

    }

    var r1 = Number(this.toString().replace(".", ""));
    var r2 = Number(arg.toString().replace(".", ""));

    return (r1 / r2) * Math.pow(10, t2 - t1);
  };

  Number.prototype.formatMoney = function () {
    var s_x = "";

    try {
      if (isNaN(this)) {
        return s_x;
      }

      var f_x = Number(parseInt(this.mul(100))).div(100);
      s_x = f_x.toString();

      var pos_decimal = s_x.indexOf('.');

      if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
      }

      while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
      }

      return s_x;
    } catch (e) {

    }

    return s_x;
  };

  Number.prototype.mul = function (arg) {
    var s1 = this.toString(), s2 = arg.toString();
    var m = 0;

    try {
      if (s1.indexOf(".") >= 0) {
        m += s1.split(".")[1].length;
      }

      if (s2.indexOf(".") >= 0) {
        m += s2.split(".")[1].length;
      }
    } catch (e) {

    }

    var r1 = Number(s1.replace(".", ""));
    var r2 = Number(s2.replace(".", ""));

    return r1 * r2 / Math.pow(10, m);
  };

  Number.prototype.sub = function (arg) {
    return this.add(-arg);
  };

  Number.prototype.toPercent = function () {
    var aa = this.mul(100);
    return "" + aa + "%";
  };

  /**
   * 判断字符串是否以str结尾
   * @param str
   * @returns {boolean}
   */
  String.prototype.endWith = function (str) {
    if (Tools.data.check.isEmpty(str)) return false;
    if (this.substring(this.length - str.length) == str) return true;
    return false;
  };

  String.prototype.hideAddress = function () {
    var wArray = ["街", "路"];
    var retStr;

    var pos = 0;

    if (Tools.data.check.isEmpty(this)) {
      return "";
    }

    for (var i = 0; i < wArray.length; i++) {
      pos = this.indexOf(wArray[i]);

      if (pos > -1) {
        retStr = "*" + wArray[i] + this.substr(pos + 1);
        return retStr;
      }
    }

    if (this.length > 10) {
      retStr = "*" + this.substr(-10);
    } else {
      retStr = this.toString();
    }

    return retStr;
  };

  String.prototype.hideName = function () {

    var retStr = this.toString().substr(0);

    if (Tools.data.check.isEmpty(this)) {
      return "";
    }

    for (var i = 1; i < this.length; i++) {
      retStr += "*";
    }

    return retStr;
  };

  String.prototype.hideCenter = function () {
    if (Tools.data.check.isEmpty(this)) {
      return "";
    }

    var len = this.length - 1;
    var str = "";

    while (len > 0) {
      str = str + "X";
      len--;
    }

    return str + this.substr(-1);
  };

  /**
   * 判断字符串是否以str开头
   * @param str
   * @returns {boolean}
   */
  String.prototype.startWith = function (str) {
    if (Tools.data.check.isEmpty(str)) return false;
    if (this.substring(0, str.length) == str) return true;
    return false;
  };
})();

var Base64 = function () {
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  this.encode = function (input) {
    var output = "";

    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;

    var i = 0;

    input = _utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + _keyStr.charAt(enc1)
        + _keyStr.charAt(enc2)
        + _keyStr.charAt(enc3)
        + _keyStr.charAt(enc4);
    }

    return output;
  };

  this.decode = function (input) {
    var output = "";

    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;

    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = _utf8_decode(output);

    return output;
  };

  var _utf8_encode = function (input) {
    var output = "";

    input = input.replace(/\r\n/g, "\n");

    for (var i = 0; i < input.length; i++) {
      var chr = input.charCodeAt(i);

      if (chr < 128) {
        output += String.fromCharCode(chr);
      } else if ((chr > 127) && (chr < 2048)) {
        output += String.fromCharCode((chr >> 6) | 192);
        output += String.fromCharCode((chr & 63) | 128);
      } else {
        output += String.fromCharCode((chr >> 12) | 224);
        output += String.fromCharCode(((chr >> 6) & 63) | 128);
        output += String.fromCharCode((chr & 63) | 128);
      }
    }

    return output;
  };

  var _utf8_decode = function (input) {
    var output = "";

    var i = 0;
    var chr1 = 0, chr2 = 0, chr3 = 0;

    while (i < input.length) {
      chr1 = input.charCodeAt(i);

      if (chr1 < 128) {
        output += String.fromCharCode(chr1);
        i++;
      } else if ((chr1 > 191) && (chr1 < 224)) {
        chr2 = input.charCodeAt(i + 1);
        output += String.fromCharCode(((chr1 & 31) << 6) | (chr2 & 63));
        i += 2;
      } else {
        chr2 = input.charCodeAt(i + 1);
        chr3 = input.charCodeAt(i + 2);
        output += String.fromCharCode(((chr1 & 15) << 12) | ((chr2 & 63) << 6) | (chr3 & 63));
        i += 3;
      }
    }

    return output;
  };
};

var base64 = new Base64();

var Tools = {
  arrayToString: function (array) {
    var str = array[0] + "";
    for (var i = 1; i < array.length; i++) {
      str += "," + array[i];
    }
    return str;
  },
  data: {
    check: {
      checkCardNumber: function (cardNumber) {
        if (Tools.data.check.isEmpty(cardNumber)) {
          UmsApi.notification.toast("请输入或选择银行卡");
          return false;
        } else if ((("" + cardNumber).length < 13 || ("" + cardNumber).length > 20)) {
          UmsApi.notification.toast("银行卡卡号位数不正确，请核对后重新输入");
          return false;
        } else if (!Tools.data.check.isNumber(cardNumber)) {
          UmsApi.notification.toast("请输入正确的银行卡卡号");
          return false;
        }

        return true;
      },
      checkLength: function (obj, eqLength) {
        try {
          if (("" + obj).length === eqLength) {
            return true;
          }
        } catch (e) {

        }
        return false;
      },
      checkLengthRange: function (obj, minLength, maxLength) {
        try {
          if (("" + obj).length > minLength && ("" + obj).length < maxLength) {
            return true;
          }
        } catch (e) {

        }
        return false;
      },
      isArray: function (obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
      },
      isCellphone: function (str) {
        return Tools.data.check.isMobile(str) || Tools.data.check.isTelecom(str)
          || Tools.data.check.isUnicom(str);
      },
      isChinese: function (str) {
        var temp = Tools.data.convert.trim(str);
        if (Tools.data.check.isEmpty(temp)) return false;
        for (var i = 0; i < temp.length; i++) {
          var tempChar = temp[i];
          if (escape(tempChar).indexOf("%u") < 0) return false;
        }
        return true;
      },
      isChineseName: function (str) {
        var temp = Tools.data.convert.trim(str);
        //如果是中文，且名称是2~4位，则为正式的名称
        if (("" + temp).length > 1 && ("" + temp).length < 5 && Tools.data.check.isChinese(temp)) {
          return true;
        }
        return false;
      },
      isEmpty: function (obj) {
        if (obj == null || obj == undefined || ("" + obj) == "") {
          return true;
        }
        return false;
      },
      isInteger: function (str) {
        var reg = /^[0-9]*[1-9][0-9]*$/;
        return reg.test(str);
      },
      isMobile: function (str) {
        var reg = /^((13[5-9]|15[0-2]|15[7-9]|18(7|8|2|3|4)|147|178)\d{8})|(134[0-8]\d{7})$/;
        return reg.test(str);
      },
      isMobilePrefix: function (str) {
        var reg = /^(13[5-9]|15[0-2]|15[7-9]|18(7|8|2|3|4)|147|178)|(134[0-8])/;
        return reg.test(str);
      },
      isMoney: function (str) {
        var reg = /^[0-9]*(\.[0-9]{1,2})?$/;
        return reg.test(str);
      },
      isNumber: function (str) {
        var reg = /^[0-9][0-9]*$/;
        return reg.test(str);
      },
      isObject: function (str) {
        if (Tools.data.check.isEmpty(str)) return false;
        return (typeof(str) == "object");
      },
      isPhone: function (str) {
        var reg = /^(((\(\d{2,3}\))|(\d{3}\-))?1[0-9]\d{9})?$/;
        return reg.test(str);
      },
      isPSTN: function (obj) {
        var filter = /^(\d{3,5})-(\d{7,8})(-\d+)?$/;
        return filter.test(obj);
      },
      isRemoteDataRepeat: function (dataList, checkDetail, checkKeys) {
        for (var i = 0; i < dataList.length; i++) {
          var dataDetail = dataList[i];

          var checkBoolean = true;

          for (var j = 0; j < checkKeys.length; j++) {
            if (checkBoolean) {
              var key = checkKeys[j];

              if (dataDetail[key] != checkDetail[key]) {
                checkBoolean = false;
              } else {
                checkBoolean = true;
              }
            } else {
              break;
            }
          }

          if (checkBoolean) return true;
        }

        return false;
      },
      isTelecom: function (str) {
        var reg = /^(133|153|180|181|189|177|173|149)\d{8}$/;
        return reg.test(str);
      },
      isTelecomPrefix: function (str) {
        var reg = /^(133|153|180|181|189|177|173|149)/;
        return reg.test(str);
      },
      isUnicom: function (str) {
        var reg = /^(13[0-2]|15(5|6)|185|186|145|176|175)\d{8}$/;
        return reg.test(str);
      },
      isUnicomPrefix: function (str) {
        var reg = /^(13[0-2]|15(5|6)|185|186|145|176|175)/;
        return reg.test(str);
      },
      //身份证判断
      isIdentityCard: function (sId) {
        var aCity = {
          11: "北京",
          12: "天津",
          13: "河北",
          14: "山西",
          15: "内蒙古",
          21: "辽宁",
          22: "吉林",
          23: "黑龙江",
          31: "上海",
          32: "江苏",
          33: "浙江",
          34: "安徽",
          35: "福建",
          36: "江西",
          37: "山东",
          41: "河南",
          42: "湖北",
          43: "湖南",
          44: "广东",
          45: "广西",
          46: "海南",
          50: "重庆",
          51: "四川",
          52: "贵州",
          53: "云南",
          54: "西藏",
          61: "陕西",
          62: "甘肃",
          63: "青海",
          64: "宁夏",
          65: "新疆",
          71: "台湾",
          81: "香港",
          82: "澳门",
          91: "国外"
        };
        var sBirthday;
        var iSum = 0;
        if (!/^\d{17}(\d|x)$/i.test(sId)) {
          //输入的身份证长度或格式错误
          return false;
        }
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null) {
          //身份证地区非法
          return false;
        }
        sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
          //身份证上的出生日期非法
          return false;
        }
        for (var i = 17; i >= 0; i--) {
          iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        }
        if (iSum % 11 != 1) {
          //你输入的身份证号非法
          return false;
        }
        return true;
      },
      maxLength: function (val, comparedLength) {
        if (('' + val).length > comparedLength) {
          return false;
        }
        return true;
      },
      minLength: function (val, comparedLength) {
        if (('' + val).length < comparedLength) {
          return false;
        }
        return true;
      },
      maxLengthAndEqual: function (val, comparedLength) {
        if (('' + val).length >= comparedLength) {
          return false;
        }
        return true;
      },
      minLengthAndEqual: function (val, comparedLength) {
        if (('' + val).length <= comparedLength) {
          return false;
        }
        return true;
      },
      isEqualLength: function (val, comparedLength) {
        if (('' + val).length != comparedLength) {
          return false;
        }
        return true;
      },
      isNoEmpty: function (val) {
        if (val == null || val == undefined || ("" + val) == "") {
          return false;
        }
        return true;
      },
      maxValue: function (val, comparedVal) {
        val = Tools.data.convert.obj2NumberDefaultZero(val);
        comparedVal = Tools.data.convert.obj2NumberDefaultZero(comparedVal);
        if (val > comparedVal) {
          return false;
        }
        return true;
      },
      minValue: function (val, comparedVal) {
        val = Tools.data.convert.obj2NumberDefaultZero(val);
        comparedVal = Tools.data.convert.obj2NumberDefaultZero(comparedVal);
        if (val < comparedVal) {
          return false;
        }
        return true;
      },
      maxValueAndEqual: function (val, comparedVal) {
        val = Tools.data.convert.obj2NumberDefaultZero(val);
        comparedVal = Tools.data.convert.obj2NumberDefaultZero(comparedVal);
        if (val >= comparedVal) {
          return false;
        }
        return true;
      },
      minValueAndEqual: function (val, comparedVal) {
        val = Tools.data.convert.obj2NumberDefaultZero(val);
        comparedVal = Tools.data.convert.obj2NumberDefaultZero(comparedVal);
        if (val <= comparedVal) {
          return false;
        }
        return true;
      },
      isMultipleOfVal: function (val, comparedVal) {
        val = Tools.data.convert.obj2NumberDefaultZero(val);
        comparedVal = Tools.data.convert.obj2NumberDefaultZero(comparedVal);
        if (val % comparedVal != 0) {
          return false;
        }
        return true;
      },
      isEqual: function (val, comparedVal) {
        if (Tools.data.check.isEmpty(val) || Tools.data.check.isEmpty(comparedVal)) {
          return false;
        }

        if (val != comparedVal) {
          return false;
        }

        return true;
      }
    },
    convert: {
      /**
       * 将input转换为decimal
       * @param input 输入值
       * @param intLength整数部分的最大长度
       * @param decLength 小数部分的最大长度
       * @returns {*}
       */
      input2Decimal: function (input, intLength, decLength) {
        if (Tools.data.check.isEmpty(input)) return input;
        if (input.indexOf(".") == -1) {
          return Tools.data.convert.input2IntegerWithLength(input, intLength);
        } else {
          var arr = input.split(".");
          // 整数部分
          var intPart = Tools.data.convert.input2IntegerWithLength(arr[0], intLength);
          // 小数部分
          var decPart = Tools.data.convert.input2IntegerWithLength(arr[1], decLength);
          return intPart + "." + decPart;
        }
      },
      /**
       * 将input转换为Integer
       * @param input 输入值
       * @returns {*}
       */
      input2Integer: function (input) {
        if (Tools.data.check.isEmpty(input)) return input;
        return input.replace(/\D/, "");
      },
      /**
       * 将input转换为Integer
       * @param input 输入值
       * @param intLength 整数的最大长度
       * @returns {*}
       */
      input2IntegerWithLength: function (input, intLength) {
        if (Tools.data.check.isEmpty(input)) return input;
        var retVal = Tools.data.convert.input2Integer(input);
        if (Tools.data.check.isInteger(intLength) && retVal.length > intLength) {
          retVal = retVal.substring(0, intLength);
        }
        return retVal;
      },
      /**
       * 将input转换为money
       * @param input 输入值
       * @returns {*}
       */
      input2Money: function (input) {
        return Tools.data.convert.input2Decimal(input, 8, 2);
      },
      /**
       * 将input转换为String
       * @param input input 输入值
       * @param maxLength 字符串的最大长度
       * @returns {*}
       */
      input2StringWithLength: function (input, maxLength) {
        if (Tools.data.check.isEmpty(input)) return input;
        if (Tools.data.check.isInteger(maxLength) && input.length > maxLength) {
          return input.substring(0, maxLength);
        }
        return input;
      },
      base64Str2Json: function (str) {
        try {
          if (Tools.data.check.isEmpty(str)) {
            return null
          }
          str = base64.decode(str);
          return JSON.parse(str)
        } catch (e) {

        }
        return null
      },
      json2Base64Str: function (obj) {
        try {
          if (Tools.data.check.isEmpty(obj)) {
            return null
          }
          return base64.encode(JSON.stringify(obj))
        } catch (e) {

        }
        return null
      },
      obj2Number: function (obj) {
        //去掉空格
        var temp = Tools.data.convert.trim(obj);
        //为空或不是数字则返回空
        if (Tools.data.check.isEmpty(temp) || isNaN(temp)) {
          return "";
        }
        return Number(temp);
      },
      obj2NumberDefaultZero: function (obj) {
        var temp = this.obj2Number(obj);
        if (Tools.data.check.isEmpty(temp)) {
          temp = Number(0);
        }
        return temp;
      },
      obj2Phone: function (obj) {
        try {
          if (Tools.data.check.isEmpty(obj)) return "";
          obj = Tools.data.convert.trim(obj);
          if (obj.indexOf("+86") != -1) {
            obj = obj.replace(/\+86/g, "");
          }
          if (obj.indexOf("-") != -1) {
            obj = obj.replace(/\-/g, "");
          }
        } catch (e) {

        }
        return obj;
      },
      obj2Str: function (obj) {
        if (obj == undefined) {
          return "";
        } else if (typeof obj == "string") {
          return obj;
        } else if (typeof obj == "object") {
          return "Object " + JSON.stringify(obj);
        } else {
          return obj.toString().replace(/\"\:/g, '":""');
        }
      },
      trim: function (str) {
        if (Tools.data.check.isEmpty(str)) {
          return str;
        } else {
          return ("" + str).replace(/ /g, "");
        }
      },
      convertArray2Str: function (obj, convertColIndex) {
        if (Tools.data.check.isEmpty(obj)) {
          return ""
        } else {
          if (Tools.data.check.isArray(obj) && (Tools.data.check.isEmpty(convertColIndex) || convertColIndex <= 0)) {
            return obj.join(",")
          } else {
            if (Tools.data.check.isArray(obj) && convertColIndex >= 1) {
              var ret = new Array();
              for (var i = 0; i < obj.length; i++) {
                if (Tools.data.check.isEmpty(obj[i]) || obj[i].length < convertColIndex) {
                  continue
                }
                ret.push(obj[i][convertColIndex - 1])
              }
              return ret.join(",")
            }
          }
        }
        return obj
      },
      url: function (url, path) {
        if (url.match(/[/]$/)) {
          return "" + url + path;
        } else {
          return "" + url + "/" + path;
        }
      }
    },
    date: {
      /**
       * 获取当前日期 yyyy-MM-dd
       * @returns {string}
       */
      getCurrentDate: function () {
        var now = new Date();

        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();

        month = (month < 10) ? ("0" + month) : month;
        date = (date < 10) ? ("0" + date) : date;

        return year + "-" + month + "-" + date;
      },
      /**
       * 获取当前日期和时间 yyyy-MM-dd HH:mm:ss
       * @returns {string}
       */
      getCurrentDateTime: function () {
        var now = new Date();

        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();

        month = (month < 10) ? ("0" + month) : month;
        date = (date < 10) ? ("0" + date) : date;

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = (hours < 10) ? ("0" + hours) : hours;
        minutes = (minutes < 10) ? ("0" + minutes) : minutes;
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;

        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
      },
      /**
       * 获取当前时间 HH:mm:ss
       * @returns {string}
       */
      getCurrentTime: function () {
        var now = new Date();

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = (hours < 10) ? ("0" + hours) : hours;
        minutes = (minutes < 10) ? ("0" + minutes) : minutes;
        seconds = (seconds < 10) ? ("0" + seconds) : seconds;

        return hours + ":" + minutes + ":" + seconds;
      },
      /**
       * 获取两个日期之间的时间差, 以天为单位
       * @param sDate1
       * @param sDate2
       * @returns {Number}
       */
      getDateDiff: function (sDate1, sDate2) {
        var aDate1 = sDate1.split("-");

        var oDate1 = new Date();
        oDate1.setFullYear(parseInt(aDate1[0]));
        oDate1.setMonth(parseInt(aDate1[1]) - 1);
        oDate1.setDate(parseInt(aDate1[2]));

        var aDate2 = sDate2.split("-");

        var oDate2 = new Date();
        oDate2.setFullYear(parseInt(aDate2[0]));
        oDate2.setMonth(parseInt(aDate2[1]) - 1);
        oDate2.setDate(parseInt(aDate2[2]));

        //把相差的毫秒数转换为天数
        var diff = parseInt(Math.abs(oDate1.getTime() - oDate2.getTime()) / 1000 / 60 / 60 / 24);

        return diff;
      },
      /**
       * 获取当前时间, 以毫秒为单位
       * @returns {number}
       */
      getSystemCurrentTimeMillis: function () {
        var now = new Date();
        return now.getTime();
      }
    },
    format: {
      /**
       * 将value格式化为decimal
       * @param value 输入值
       * @param zerosToAppend 小数部分不存在时, 小数点后补0的个数, 默认=1
       * @returns {*}
       */
      decimal: function (value, zerosToAppend) {
        zerosToAppend = Tools.data.check.isEmpty(zerosToAppend) ? 1 : zerosToAppend;

        var retVal = Tools.data.convert.trim(value);
        if (retVal.startWith(".")) {
          retVal = "0" + retVal; // 以"."开头, 则在前面补0
        }
        var posOfDecimal = retVal.indexOf("."); // 取得小数点的位置
        if (posOfDecimal == -1) {
          retVal = retVal + "."; // 不存在".", 则在后面补上
        }
        posOfDecimal = retVal.indexOf("."); // 再次取得小数点的位置
        while (retVal.length <= posOfDecimal + zerosToAppend) {
          retVal = retVal + "0";
        }
        while (retVal.startWith("0") && retVal.indexOf(".") != 1) { // 去掉数字开头多余的0
          retVal = retVal.substring(1, retVal.length);
        }
        return retVal;
      },
      hideCardNumberDetail: function (cardNumber) {
        var ret = Tools.data.convert.trim(cardNumber);
        try {
          if (Tools.data.check.isEmpty(ret)) return ret;
          ret = String(ret);

          if (ret.length <= 10) return ret;
          var prefix = ret.substring(0, 6);
          var suffix = ret.substring(ret.length - 4);
          var len = 6;//ret.length - 6 - 4;

          ret = prefix;
          while ((len--) > 0) {
            ret = ret + "*";
          }
          ret = ret + suffix;
        } catch (e) {
          UmsApi.notification.toast(e.message);
        }
        ret = Tools.data.format.stringWithSpace(ret, 4);
        return ret;
      },
      /**
       * 将value格式化为money
       * @param value 输入值
       * @returns {*}
       */
      money: function (value) {
        return Tools.data.format.decimal(value, 2);
      },
      phone: function (value) {
        try {
          return Tools.data.format.stringWithSpace(value, 4, 3);
        } catch (e) {

        }
        return value;
      },
      standard: function (value) {
        try {
          return Tools.data.format.stringWithSpace(value, 4);
        } catch (e) {

        }
        return value;
      },
      stringWithSpace: function (value, splitLen, firstLen) {
        if (Tools.data.check.isEmpty(value)) return value;

        value = Tools.data.convert.trim(value);

        splitLen = Tools.data.check.isEmpty(splitLen) ? 0 : parseInt(splitLen);
        splitLen = splitLen < 0 ? 0 : splitLen;
        firstLen = Tools.data.check.isEmpty(firstLen) ? 0 : parseInt(firstLen);
        firstLen = firstLen < 0 ? 0 : firstLen;

        var retValue = "";

        for (var i = 0; i < value.length; i++) {
          retValue += value.split('')[i];
          if (firstLen > 0 && i + 1 < firstLen) {
            continue;
          } else if (firstLen > 0 && i + 1 == firstLen) {
            retValue += ' ';
          } else if ((i - firstLen + 1) % splitLen == 0) {
            retValue += ' ';
          }
        }

        return retValue.trim();
      }
    },
    phone: {
      getCurUserPhone: function () {
        var phone = "";
        try {
          phone = UmsApi.context.user.mobile;
        } catch (e) {

        }
        return phone;
      },
      getMobileType: function (phone) {
        if (Tools.data.check.isMobile(phone))
          return "01";
        else if (Tools.data.check.isUnicom(phone))
          return "02";
        else if (Tools.data.check.isTelecom(phone))
          return "03";
        else
          return "";
      },
      getMobileTypeByPrefix: function (phone) {
        if (Tools.data.check.isMobilePrefix(phone))
          return "01";
        else if (Tools.data.check.isUnicomPrefix(phone))
          return "02";
        else if (Tools.data.check.isTelecomPrefix(phone))
          return "03";
        else
          return "";
      },
      getMobileTypeName: function (phone) {
        var mobileTypeName = "未知运营商";
        var mobileType = Tools.data.phone.getMobileTypeByPrefix(phone);
        switch (mobileType) {
          case "01":
            mobileTypeName = "移动运营商";
            break;
          case "02":
            mobileTypeName = "联通运营商";
            break;
          case "03":
            mobileTypeName = "电信运营商";
            break;
        }
        return mobileTypeName;
      }
    },
  },
};


export { Tools };
