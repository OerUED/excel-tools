function index(data) {
    var lottery = data[Object.keys(data)[0]],
        nvshentuan = data[Object.keys(data)[1]],
        aiziji = data[Object.keys(data)[2]],
        aimama = data[Object.keys(data)[3]],
        aiguimi = data[Object.keys(data)[4]],
        shopList = data[Object.keys(data)[5]]

    var result = {
        lottery: [], // 中奖名单
        nvshentuan: [], // 女神团
        aiziji: [], // 爱自己
        aimama: [], // 爱妈妈
        aiguimi: [], // 爱闺蜜
        shopList: [] // 女神店铺
    }

    result.lottery = lottery.map(item => {
        return {
            tel: item.B,
            nick: item.A.slice(0, 1) + '**' + item.A.slice(-1)
        }
    });

    result.nvshentuan = parserProduct(nvshentuan);
    result.aiziji = parserProduct(aiziji);
    result.aimama = parserProduct(aimama);
    result.aiguimi = parserProduct(aiguimi);
    result.shopList = parseShop(shopList);

    return result;
}

function parserProduct(source) {
    let data = source.map(item => {
        return {
            id: item.A,
            title: item.B,
            desc: item.C,
            price: item.D,
            oldPrice: item.E,
            imgUrl: item.F
        }
    });
    return data;
}


function parseShop(source) {
    var obj = {};
    var result = [];
    var shopId = ''; // 存储店铺名称
    source.forEach(item => {
        if (item.C !== shopId) {
            // 创建新对象
            if (Object.keys(obj).length) {
                // 如果之前对象不为空 存入结果集里面
                result.push(obj);
            }
            obj = {
                productList: []
            };
            shopId = obj.shopId = item.C;
            obj.shopImg = item.A;
            obj.shopName = item.B;
            obj.productList.push({
                "id": item.D,
                "title": item.E,
                "price": item.F,
                "oldPrice": item.G,
                "imgUrl": item.H
            });
        } else {
            //在原来对象上处理
            obj.productList.push({
                "id": item.D,
                "title": item.E,
                "price": item.F,
                "oldPrice": item.G,
                "imgUrl": item.H
            });
        }
    });
    // 最后一项需要做存储
    result.push(obj);
    return result;
}

module.exports = index;
