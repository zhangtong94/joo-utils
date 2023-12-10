/** 邮箱规则 */
export const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * @desc 判断是否为邮箱
 * @param {String} email 邮箱
 * @returns {Boolean}
 */
export function isEmail(email: string): boolean {
    return regEmail.test(email);
}
