// 获取响应的原始body
let body = $response.body;

// 将body解析为JSON对象
let obj = JSON.parse(body);

// 定义一个递归函数来遍历对象并替换false值为true
function replaceFalseWithTrue(obj) {
    for (let key in obj) {
        if (obj[key] === false) {
            obj[key] = true;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            replaceFalseWithTrue(obj[key]);
        }
    }
}

// 调用递归函数
replaceFalseWithTrue(obj);

// 将修改后的对象重新转换为JSON字符串
body = JSON.stringify(obj);

// 返回修改后的body
$done({ body });

//
// ^https://ab.chatgpt.com/v1/initialize$ url script-response-body crack_chatgpt_macos.js
