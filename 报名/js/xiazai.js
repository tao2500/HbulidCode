
location.href = 'http://www.people.com.cn/NMediaFile/2021/1106/MAIN202111061108460802928008427.jpg';




/**
 
 * 下载文件
 
 * @param {String} path - 下载地址/下载请求地址。
 
 * @param {String} name - 下载文件的名字/重命名（考虑到兼容性问题，最好加上后缀名）
 
 */
 
function downloadFile (path, name) {
 
 const xhr = new XMLHttpRequest();
 
    xhr.open('get', path);
 
    xhr.responseType = 'blob';
 
    xhr.send();
 
    xhr.onload = function () {
 
 if (this.status === 200 || this.status === 304) {
 
 // const blob = new Blob([this.response], { type: xhr.getResponseHeader('Content-Type') });
 
 // const url = URL.createObjectURL(blob);
 
 const url = URL.createObjectURL(this.response);
 
 const a = document.createElement('a');
 
            a.style.display = 'none';
 
            a.href = url;
 
            a.download = name;
            
 
            document.body.appendChild(a);
 
            a.click();
 
            document.body.removeChild(a);
 
            URL.revokeObjectURL(url);
 
 }
 
 };
 
}


/**
 
 * 下载文件
 
 * @param {String} path - 请求的地址
 
 * @param {String} fileName - 文件名
 
 */
 
function downloadFile (downloadUrl, fileName) {
 
 // 创建表单
 
 const formObj = document.createElement('form');
 
    formObj.action = downloadUrl;
 
    formObj.method = 'get';
 
    formObj.style.display = 'none';
 
 // 创建input，主要是起传参作用
 
 const formItem = document.createElement('input');
 
    formItem.value = fileName; // 传参的值
 
    formItem.name = 'fileName'; // 传参的字段名
 
 // 插入到网页中
 
    formObj.appendChild(formItem);
 
    document.body.appendChild(formObj);
 
    formObj.submit(); // 发送请求
 
    document.body.removeChild(formObj); // 发送完清除掉
 
}