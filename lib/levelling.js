//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[codes]════════\\
export const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75
export function xpRange(level, multiplier = global.multiplier || 1) {
    if (level < 0)
        throw new TypeError('level cannot be negative value')
    level = Math.floor(level)
    let min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1
    let max = Math.round(Math.pow(++level, growth) * multiplier)
    return {
        min,
        max,
        xp: max - min
    }
}
export function findLevel(xp, multiplier = global.multiplier || 1) {
    if (xp === Infinity)
        return Infinity
    if (isNaN(xp))
        return NaN
    if (xp <= 0)
        return -1
    let level = 0
    do
        level++
    while (xpRange(level, multiplier).min <= xp)
    return --level
}
export function canLevelUp(level, xp, multiplier = global.multiplier || 1) {
    if (level < 0)
        return false
    if (xp === Infinity)
        return true
    if (isNaN(xp))
        return false
    if (xp <= 0)
        return false
    return level < findLevel(xp, multiplier)
}