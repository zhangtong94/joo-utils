
/**
 * @desc 通过已知的key-value从目标数组中筛选出对应item的其他key-value
 * @param {Array} list - 目标数组
 * @param {*} key - 已知的字段值对应的字段key
 * @param {*} value - 已知的字段值
 * @param {*} target - 需要获取的字段key
 * @returns
 */
export function filterKeyFromList(list: any[], key: string, value: any, target: string) {
    let text;
    for (let i = 0; i < list.length; i++) {
        if (list[i][key] === value) {
            text = list[i][target];
            break;
        }
    }
    return text;
}

/**
 * @desc 将数组转化为树结构
 * @param {Array} list
 * @returns
 */
export function listToTree(list: any, rootValue: string | number | null, idKey = 'id', parentKey = 'parentId', childrenKey = 'children') {
    const tree: any = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i][parentKey] === rootValue) {
            const node = {
                ...list[i],
                [childrenKey]: listToTree(list, list[i][idKey], idKey, parentKey, childrenKey),
            };
            tree.push(node);
        }
    }
    return tree;
}
