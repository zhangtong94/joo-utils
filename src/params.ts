/**
 * @desc 对象转为query string
 * @param params
 * @returns {String}
 */
export function objectToQueryString(params: any): string {
    const keys = Object.keys(params);
    if (!keys.length) {
        return '';
    } else {
        let url = '?';
        for (let i = 0; i < keys.length; i++) {
            if (params[keys[i]] !== null && params[keys[i]] !== undefined) {
                url += `${keys[i]}=${params[keys[i]]}&`;
            }
        }
        return url.slice(0, -1);
    }
}

/** 
 * @desc query string转为对象
 * @param {String} queryString
 * @returns {Object}
 */
export function queryStringToObject(queryString: string): Object {
    const params: any = {};
    const query = queryString.substring(1);
    const pairs = query.split("&");
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split("=");
        if (pair.length < 2) continue;
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return params;
}

/**
 * @desc 去除对象中值为空的key
 * @param  params
 * @returns {Object}
 */
export function removeEmptyKey(params: any): Object {
    const newParams: any = {};
    Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
            newParams[key] = params[key];
        }
    });
    return newParams;
}
