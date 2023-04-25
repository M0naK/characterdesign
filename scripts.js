let partCounter = {
    head: 1,
    eye: 1,
    fuku: 1,
    accessory: 1
};

function changePart(part, maxCount) {
    // 選択したパーツのカウンターを増やす
    partCounter[part]++;

    // 最大枚数を超えたら1に戻す
    if (partCounter[part] > maxCount) {
        partCounter[part] = 1;
    }

    // 画像ファイル名を作成
    const newImageSrc = `${part}${partCounter[part]}.png`;

    // 選択したパーツの画像を変更
    document.getElementById(part).src = newImageSrc;
}
