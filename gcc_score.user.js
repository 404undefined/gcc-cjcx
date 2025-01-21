// ==UserScript==
// @name         广商教务系统下载所有成绩
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       404_undefined
// @match        https://jwxt.gcc.edu.cn/cjcx/cjcx_cxDgXscj.html?gnmkdm=N305005&layout=default
// @icon         https://www.gcc.edu.cn/favicon.ico
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    // 创建按钮元素
    let ele = $("<button type='button' class='btn btn-default btn_dc' href='javascript:void(0);'><i class='bigger-100 glyphicon glyphicon-export'></i> 导出所有成绩</button>");

    // 按钮点击事件
    ele.click(function() {
        function downFile(blob) {
            var elementA = document.createElement('a');
            elementA.download = +new Date() + ".xlsx";
            elementA.style.display = 'none';
            elementA.href = URL.createObjectURL(blob);
            document.body.appendChild(elementA);
            elementA.click();
            document.body.removeChild(elementA);
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/cjcx/cjcx_dcXsKccjList.html', true);
        xhr.responseType = 'blob';
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function() {
            downFile(xhr.response);
        };

        xhr.send("gnmkdmKey=N305005&xnm=" + document.querySelectorAll('#xnm')[0].value + "&xqm=" + document.querySelectorAll('#xqm')[0].value + "&dcclbh=JW_N305005_GLY&exportModel.selectCol=kcmc%40%E8%AF%BE%E7%A8%8B%E5%90%8D%E7%A7%B0&exportModel.selectCol=xnmmc%40%E5%AD%A6%E5%B9%B4&exportModel.selectCol=xqmmc%40%E5%AD%A6%E6%9C%9F&exportModel.selectCol=kkbmmc%40%E5%BC%80%E8%AF%BE%E5%AD%A6%E9%99%A2&exportModel.selectCol=kch%40%E8%AF%BE%E7%A8%8B%E4%BB%A3%E7%A0%81&exportModel.selectCol=jxbmc%40%E6%95%99%E5%AD%A6%E7%8F%AD&exportModel.selectCol=xf%40%E5%AD%A6%E5%88%86&exportModel.selectCol=xmcj%40%E6%88%90%E7%BB%A9&exportModel.selectCol=xmblmc%40%E6%88%90%E7%BB%A9%E5%88%86%E9%A1%B9&exportModel.exportWjgs=xls&fileName=%E6%96%87%E4%BB%B91656485751290");
    });

    // 将按钮添加到页面中的某个位置，例如页面底部
    $('body').append(ele);
})();
