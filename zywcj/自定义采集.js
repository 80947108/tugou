######远程订阅写入本地1
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
var 记录 = "";
if (getVar("rurl") != 'null' && getVar("rurl").indexOf(",http") > 1) {
  记录 = getVar("rurl").match(/.+?,http.+/g);
  if (readStr(filename)) {
    var 旧记录 = readStr(filename).match(/.+?,http.+/g);
    var 新记录 = 记录.concat(旧记录.filter(item=>item!=记录[0]));
  } else {
    var 新记录 = 记录;
  }
  writeStr(filename,新记录.join("\n"));
  readStr(filename);
} else {
  "请输入正确格式(支持批量):名称,地址";
}
######读取远程订阅2
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
if (readStr(filename)) {
  var code = readStr(filename).match(/.+?,.+/g);
} else {
  var data = "内置,https://api.egwang186.top/apis/my-github/egwang186/iptv/main/zywcj/资源网采集.txt";
  writeStr(filename,data);
  var code = readStr(filename).match(/.+?,.+/g);
}
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:资源采集首页?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######单一搜索读取远程订阅3
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
var code = readStr(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:单一搜索?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######侧边栏搜索读取远程订阅4
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
var code = readStr(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:侧边栏引导?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######管理订阅5
eval(readStr("QJS"));
var filename='资源采集远程索引.txt';
var code=readStr(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理订阅按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
######QJS6
KGZ1bmN0aW9uKCl7dmFyIF89e307dmFyIG09MS4wO3ZhciByPWFuZHJvaWQub3MuRW52aXJvbm1lbnQuZ2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5KCk7dmFyIHM9YW5kcm9pZC53ZWJraXQuTWltZVR5cGVNYXAuZ2V0U2luZ2xldG9uKCk7dmFyIHQ9amF2YS5pbzt2YXIgdT1qYXZhLmxhbmc7dmFyIHY9dC5GaWxlLnNlcGFyYXRvcjt2YXIgdz1wYXRoKCkrdisnRG93bmxvYWQnK3YrJ3FtJyt2K2luZm8oKS5zaWduLnN1YnN0cmluZygwLDQpKyckJCQnK2luZm8oKS5uYW1lK3Y7aXNTdHJpbmc9KHZhbCk9PnR5cGVvZiB2YWw9PT0nc3RyaW5nJztmdW5jdGlvbiBpc09iamVjdChhKXtjb25zdCB0eXBlPXR5cGVvZiBhO3JldHVybiBhIT1udWxsJiYodHlwZT09J29iamVjdCd8fHR5cGU9PSdmdW5jdGlvbicpfXZhciB5PWphdmEudXRpbC5jb25jdXJyZW50O3ZhciB6PW5ldyB5LkV4ZWN1dG9ycy5uZXdDYWNoZWRUaHJlYWRQb29sKCk7ZnVuY3Rpb24gdGhyZWFkKGEpe29iaj17Y2FsbDpmdW5jdGlvbigpe3JldHVybiBhKCl9LH07dmFyIGI9bmV3IHkuRnV0dXJlVGFzayhvYmopO3ouc3VibWl0KGIpO3JldHVybiBifWZ1bmN0aW9uIGNodW5rKGEsYil7bGV0IGluZGV4PTA7bGV0IHJlcz1bXTt3aGlsZShpbmRleDxhLmxlbmd0aCl7cmVzLnB1c2goYS5zbGljZShpbmRleCxpbmRleCtiKSk7aW5kZXgrPWJ9cmV0dXJuIHJlcy5maWx0ZXIoKG8pPT5vLmxlbmd0aD4wKX1mdW5jdGlvbiBzdWJtaXQobCxuKXtjPVtdO2xpc3Q9Y2h1bmsobCxsLmxlbmd0aC9uKTt2YXIgbj0wO3doaWxlKG48bGlzdC5sZW5ndGgpe2Z1bmN0aW9uIGwoeCl7cmV0dXJuIGZ1bmN0aW9uIG8oKXt2YXIgYT1bXTtmb3IobGV0IGk9MDtpPGxpc3RbeF0ubGVuZ3RoO2krKyl7YS5wdXNoKGxpc3RbeF1baV0oKSl9cmV0dXJuIGF9fWMucHVzaCh0aHJlYWQobChuKSkpO24rK31yZXR1cm4gY31mdW5jdGlvbiBta2RpcnMoZil7dmFyIGE9Zi5nZXRQYXJlbnRGaWxlKCk7aWYoIWEuZXhpc3RzKCkpYS5ta2RpcnMoKX1mdW5jdGlvbiB3cml0ZShhLGIpe3ZhciBjPW5ldyB0LkZpbGUodysn5pWw5o2uJyt2K2IpO21rZGlycyhjKTt2YXIgZD1uZXcgdC5GaWxlV3JpdGVyKGMsZmFsc2UpO2Qud3JpdGUoYSk7ZC5jbG9zZSgpfWZ1bmN0aW9uIHJlYWQoYSl7dmFyIGI9bmV3IHQuRmlsZSh3KyfmlbDmja4nK3YrYSk7dmFyIGM9MDtpZighYi5leGlzdHMoKXx8KGM9Yi5sZW5ndGgoKSk9PTApcmV0dXJuJyc7dmFyIGQ9dS5yZWZsZWN0LkFycmF5Lm5ld0luc3RhbmNlKHUuQnl0ZS5UWVBFLGMpO3ZhciBlPW5ldyB0LkZpbGVJbnB1dFN0cmVhbShiKTtlLnJlYWQoZCk7ZS5jbG9zZSgpO3JldHVybiBuZXcgdS5TdHJpbmcoZCl9dmFyIEE9UGFja2FnZXMub3JnLmpzb3VwO3ZhciBCPUEuQ29ubmVjdGlvbi5NZXRob2Q7ZnVuY3Rpb24gaHR0cChvKXtsZXR7dXJsLGhlYWRlcixwYXJhbXMsanNvbixjaGFyc2V0LG1ldGhvZCxyZX09bzt2YXIgYT1BLkpzb3VwLmNvbm5lY3QodXJsKTthLmlnbm9yZUNvbnRlbnRUeXBlKHRydWUpO2EucG9zdERhdGFDaGFyc2V0KGNoYXJzZXQpO2EubWF4Qm9keVNpemUoMTA0ODU3NjAwMCk7cmU9PT1mYWxzZT9hLmZvbGxvd1JlZGlyZWN0cyhyZSk6YS5mb2xsb3dSZWRpcmVjdHModHJ1ZSk7aWYoaXNPYmplY3QoaGVhZGVyKSlmb3IoeCBpbiBoZWFkZXIpYS5oZWFkZXIoeCxoZWFkZXJbeF0pO2lmKGlzT2JqZWN0KHBhcmFtcykpe2lmKGpzb249PT10cnVlKWEucmVxdWVzdEJvZHkocGFyYW1zKTtlbHNlIGZvcihwIGluIHBhcmFtcylhLmRhdGEocCxwYXJhbXNbcF0pfXZhciBiO2lmKGpzb249PT10cnVlfHxtZXRob2Q9PSdwb3N0JyliPWEubWV0aG9kKEIuUE9TVCkuZXhlY3V0ZSgpO2Vsc2UgYj1hLm1ldGhvZChCLkdFVCkuZXhlY3V0ZSgpO3JldHVybiBifWZ1bmN0aW9uIGh0dHBCb2R5KGEsYil7YS5jaGFyc2V0KGIpO3JldHVybiBhLmJvZHkoKX1mdW5jdGlvbiBodHRwQ29va2llKGEsYil7cmV0dXJuIGIrJz0nK2EuY29va2llKGIpfWZ1bmN0aW9uIGh0dHBDb29raWVzKGEpe3ZhciBiPScnO3ZhciBjPWEuY29va2llcygpLmVudHJ5U2V0KCkuaXRlcmF0b3IoKTt3aGlsZShjLmhhc05leHQoKSl7dmFyIGQ9Yy5uZXh0KCk7Yis9ZC5nZXRLZXkoKSsnPScrZC5nZXRWYWx1ZSgpKyc7J31yZXR1cm4gYn1mdW5jdGlvbiBodHRwSGVhZGVyKGEsYil7cmV0dXJuIGEuaGVhZGVyKGIpfWZ1bmN0aW9uIGh0dHBIZWFkZXJzKGEpe3ZhciBiPScnO3ZhciBjPWEuaGVhZGVycygpLmVudHJ5U2V0KCkuaXRlcmF0b3IoKTt3aGlsZShjLmhhc05leHQoKSl7dmFyIGQ9Yy5uZXh0KCk7Yis9ZC5nZXRLZXkoKSsnPScrZC5nZXRWYWx1ZSgpKyc7J31yZXR1cm4gYn1mdW5jdGlvbiB0cmltVShhKXt2YXIgYj1hLmxhc3RJbmRleE9mKCcvJyk7aWYoYS5sZW5ndGgoKT09YisxKXthPWEuc3Vic3RyaW5nKDAsYik7cmV0dXJuIHRyaW1VKGEpfXJldHVybiBhLnN1YnN0cmluZygwLGEubGFzdEluZGV4T2YoJy4nKSl9ZnVuY3Rpb24gZG93bmxvYWQobyl7dHJ5e2xldHtzZXRwYXRoLHRpcHN9PW87dmFyIGE9aHR0cChvKTt2YXIgYj10cmltVShhLnVybCgpLnRvU3RyaW5nKCkpO3ZhciBjPXMuZ2V0RXh0ZW5zaW9uRnJvbU1pbWVUeXBlKGEuY29udGVudFR5cGUoKS5zcGxpdCgnOycpWzBdKTt2YXIgZD1iLnN1YnN0cmluZyhiLmxhc3RJbmRleE9mKCcvJykrMSkrJy4nK2M7c2F2ZXBhdGg9aXNTdHJpbmcoc2V0cGF0aCk/c2V0cGF0aCt2K2Q6dysn5LiL6L29Jyt2K2Q7dmFyIGY9YS5ib2R5U3RyZWFtKCk7dmFyIGc9bmV3IHUucmVmbGVjdC5BcnJheS5uZXdJbnN0YW5jZSh1LkJ5dGUuVFlQRSw0MDk2KTt2YXIgaD0wO3ZhciBpPW5ldyB0LkJ5dGVBcnJheU91dHB1dFN0cmVhbSgpO3doaWxlKChoPWYucmVhZChnKSkhPS0xKXtpLndyaXRlKGcsMCxoKX12YXIgaj1uZXcgdC5GaWxlKHNhdmVwYXRoKTtta2RpcnMoaik7dmFyIGs9bmV3IHQuRmlsZU91dHB1dFN0cmVhbShqKTtrLndyaXRlKGkudG9CeXRlQXJyYXkoKSk7aWYodGlwcz09PWZhbHNlKXJldHVybiBzYXZlcGF0aDt0b2FzdCgn5LiL6L295oiQ5Yqf77yM6Lev5b6EOicrc2F2ZXBhdGgpO3JldHVybiBzYXZlcGF0aH1jYXRjaChlKXtlcnJvcihlKTt0b2FzdCgn5LiL6L295aSx6LSlLOivt+aJk+W8gOiwg+ivleWPsOafpeeci+WFt+S9k+W8guW4uOS/oeaBrycpfWZpbmFsbHl7aWYoaSE9bnVsbClpLmNsb3NlKCk7aWYoayE9bnVsbClrLmNsb3NlKCk7aWYoZiE9bnVsbClmLmNsb3NlKCl9fWZ1bmN0aW9uIGVycm9yKGUpe2lzU3RyaW5nKGUpP+aKpemUmShlKTrmiqXplJkoZS50b1N0cmluZygpKX1mdW5jdGlvbiB0b2FzdChhKXthbGVydChhKX1mdW5jdGlvbiBiYWNrKCl7bmV3IFBhY2thZ2VzLmFuZHJvaWQuYXBwLkluc3RydW1lbnRhdGlvbigpLnNlbmRLZXlEb3duVXBTeW5jKDQpfWZ1bmN0aW9uIHBhdGgoKXtyZXR1cm4gci5nZXRBYnNvbHV0ZVBhdGgoKS50b1N0cmluZygpfWZ1bmN0aW9uIHNsZWVwKGEpe2phdmEubGFuZy5UaHJlYWQuc2xlZXAoYSl9ZnVuY3Rpb24gaW5mbygpe289e307by5zaWduPWUyUmV4KGdldFZhcignUU1JTkZPJyksJy5nZXQoc2lnbikudCgpJyk7by52ZXJzaW9uPWUyUmV4KGdldFZhcignUU1JTkZPJyksJy5nZXQodmVyc2lvbikudCgpJyk7by5uYW1lPWUyUmV4KGdldFZhcignUU1JTkZPJyksJy5nZXQobmFtZSkudCgpJyk7cmV0dXJuIG99Xy5WRVJTSU9OPW07Xy5yZWFkPXJlYWQ7Xy53cml0ZT13cml0ZTtfLnNsZWVwPXNsZWVwO18udGhyZWFkPXRocmVhZDtfLnN1Ym1pdD1zdWJtaXQ7Xy5jaHVuaz1jaHVuaztfLmJhY2s9YmFjaztfLmlzU3RyaW5nPWlzU3RyaW5nO18uaHR0cD1odHRwO18uYmQ9aHR0cEJvZHk7Xy5jaz1odHRwQ29va2llO18uY2tzPWh0dHBDb29raWVzO18uaGQ9aHR0cEhlYWRlcjtfLmhkcz1odHRwSGVhZGVycztfLmRvd25sb2FkPWRvd25sb2FkO18uaW5mbz1pbmZvO18udG9hc3Q9dG9hc3Q7Xy5lcnJvcj1lcnJvcjt0aGlzLl89X30uY2FsbCh0aGlzKSk7
