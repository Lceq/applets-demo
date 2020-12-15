// 转换时间格式，精确到秒
const formatTime = d => {
let filZero = n => n < 10 ? '0' + n : '' + n;
 let date = Number(d)
  var time = new Date(date);
var y = time.getFullYear();
console.log(new Date(d));
var m = time.getMonth()+1;
var d = time.getDate();
var h = time.getHours();
var mm = time.getMinutes();
var s = time.getSeconds();
return y+'-'+filZero(m)+'-'+filZero(d)+' '+filZero(h)+':'+filZero(mm)+':'+filZero(s);
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
