/** 中国大陆手机号码规则 */
export const regChineseMainland = /^((13[0-9])|(14[5,6,7,8,9])|(15[0-3,5-9])|(16[2,5,6,7])|(17[0-8])|(18[0-9])|(19[0-3,5-9]))\d{8}$/;
/** 中国香港手机号码规则 */
export const regHongkong = /^([5,6,8,9])\d{7}$/;
/** 中国澳门手机号码规则 */
export const regMacao = /^(68|66)\d{6}$/;
/** 中国台湾手机号码规则 */
export const regTaiwan = /^(09)\d{8}$/;

/** 中国移动手机号码规则 */
export const regChinaMobile = /^((13[4-9])|(14[7,8])|(15[0-2,7-9])|165|(17[2,8])|(18[2-4,7-8])|(19[5,7,8]))\d{8}$|^(170[3,5,6])\d{7}$/;
/** 中国联通手机号码规则 */
export const regChinaUnicom = /^((13[0-2])|(14[5,6])|(15[5,6])|(16[6,7])|(17[1,5,6])|(18[5,6])|196)\d{8}$|^(170[4,7,8,9])\d{7}$/;
/** 中国电信手机号码规则 */
export const regChinaTelecom = /^(133|149|153|162|(17[3,7])|(18[0,1,9])|(19[0,1,3,9]))\d{8}$|^((170[0-2])|(174[0-5]))\d{7}$/;
/** 中国电信广播手机号码规则 */
export const regChinaBroadcast = /^(192)\d{8}$/;

/**
 * @desc 判断是否为中国大陆手机号码
 * @param {String} phoneNumber 号码
 * @returns {Boolean}
 */
export function isCommonPhoneNumber(phoneNumber: string): boolean {
    return regChineseMainland.test(phoneNumber);
}

/**
 * @desc 判断是否为中国香港手机号码
 * @param {String} phoneNumber 号码
 * @returns {Boolean}
 */
export function isHonkongPhoneNumber(phoneNumber: string): boolean {
    return regHongkong.test(phoneNumber);
}

/**
 * @desc 判断是否为中国澳门手机号码
 * @param {String} phoneNumber 号码
 * @returns {Boolean}
 */
export function isMacaoPhoneNumber(phoneNumber: string): boolean {
    return regMacao.test(phoneNumber);
}

/**
 * @desc 判断是否为中国台湾手机号码
 * @param {String} phoneNumber 号码
 * @returns {Boolean}
 */
export function isTaiwanPhoneNumber(phoneNumber: string): boolean {
    return regTaiwan.test(phoneNumber);
}

/**
 * @desc 获取手机号码所属运营商
 * @param {String} phoneNumber 号码
 * @returns {String}
 */
export function getOperator(phoneNumber: string): string {
    if (regChinaMobile.test(phoneNumber)) {
        return "ChinaMobile";
    }
    if (regChinaUnicom.test(phoneNumber)) {
        return "ChinaUnicom";
    }
    if (regChinaTelecom.test(phoneNumber)) {
        return "ChinaTelecom";
    }
    if (regChinaBroadcast.test(phoneNumber)) {
        return "ChinaBroadcast";
    }
    return "";
}
