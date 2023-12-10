import { regEmail } from "./email";
import { regChineseMainland, regHongkong, regMacao, regTaiwan, regChinaMobile, regChinaUnicom, regChinaTelecom, regChinaBroadcast } from "./phone";


import { isEmail } from "./email";
import { isCommonPhoneNumber, isHonkongPhoneNumber, isMacaoPhoneNumber, isTaiwanPhoneNumber, getOperator } from "./phone";

export const reg = {
    regEmail,
    regChineseMainland,
    regHongkong,
    regMacao,
    regTaiwan,
    regChinaMobile,
    regChinaUnicom,
    regChinaTelecom,
    regChinaBroadcast
};

export const validate = {
    isEmail,
    isCommonPhoneNumber,
    isHonkongPhoneNumber,
    isMacaoPhoneNumber,
    isTaiwanPhoneNumber,
};
