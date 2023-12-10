/**
 * @desc 生成随机rgb颜色值
 * @returns {String} rgb色值
*/
export function getRandomRgbColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * @desc 生成随机十六进制颜色值
 * @returns {String} 十六进制色值
*/
export function getRandomHexColor(): string {
    const r = ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);
    const g = ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);
    const b = ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);
    return `#${r}${g}${b}`;
}

/**
 * @desc 将十六进制颜色值转换为rgb色值
 * @param {String} hex 十六进制色值
 * @returns {String} rgb色值
 */
export function colorHexToRgb(hex: string): string {
    hex = hex.replace("#", "");
    if (hex.length !== 6) {
        hex = hex[0].repeat(2) + hex[1].repeat(2) + hex[2].repeat(2);
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

/**
 * @desc 将rgb色值转换为十六进制色值
 * @param {String} rgb rgb色值
 * @returns {String} 十六进制色值
 */
export function colorRgbToHex(rgb: string): string {
    const rgbArr = rgb.replace("rgb(", "").replace(")", "").split(",");
    let r = ('0' + parseInt(rgbArr[0]).toString(16)).slice(-2);
    let g = ('0' + parseInt(rgbArr[1]).toString(16)).slice(-2);
    let b = ('0' + parseInt(rgbArr[2]).toString(16)).slice(-2);
    return "#" + r + g + b;
}
