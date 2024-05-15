// 修改响应状态码为200
let status = 200;

// 获取响应的原始body
let body = $response.body;

// 如果响应内容是JSON，且需要修改其内容，可以在此进行处理
try {
    let obj = JSON.parse(body);

    // 对JSON对象进行处理，如果有需要，可以替换false为true
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
} catch (e) {
    // 如果不是JSON响应，则不做处理
}

// 返回修改后的状态码和body
$done({ status, body });
