export const createData = (num: number, lngCenter: number = 120.369557, latCenter: number = 36.094406) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        const randomDistance = Math.random() * 500;
        const distanceInDegrees = randomDistance / 6500;
        const randomAngle = Math.random() * 2 * Math.PI;
        const lngOffset = distanceInDegrees * Math.cos(randomAngle);
        const latOffset = distanceInDegrees * Math.sin(randomAngle);
        const lng = lngCenter + lngOffset;
        const lat = latCenter + latOffset;
        result.push({
            id: `${Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, 9))}`,
            jinDu: lng.toFixed(6),
            weiDu: lat.toFixed(6),
            yinBaoDianWei: `-${Math.random().toFixed(3)}`,
            duanDianDianWei: `-${Math.random().toFixed(3)}`,
            jiaoLiuZaSanDianLiu: `${Math.random().toFixed(3)}`,
            yangJiKaiLuDianWei: `${Math.random().toFixed(3)}`,
            shiDu: `${Math.random().toFixed(3)}`,
            dianChiDianYa: `${Math.random().toFixed(3)}`,
            ziRanDianWei: `-${Math.random().toFixed(3)}`,
            jiaoLiuGanRaoDianYa: `${Math.random().toFixed(3)}`,
            zhiLiuDianLiu: `${Math.random().toFixed(3)}`,
            YangJiShuChuDianLiu: `${Math.random().toFixed(3)}`
        })
    }
    return result
}
