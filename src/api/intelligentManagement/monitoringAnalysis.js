let data = [
    { id: 1, manufacturer: "输送设备制造商" },
    { id: 2, manufacturer: "吊装设备制造商" },
    { id: 3, manufacturer: "油液加注设备制造商" },
    { id: 4, manufacturer: "预装线制造商" },
    { id: 5, manufacturer: "拧紧机制造商" },
    { id: 6, manufacturer: "打标机制造商" },
    { id: 7, manufacturer: "检测机制造商" },
    { id: 8, manufacturer: "灯光调整仪制造商" },
    { id: 9, manufacturer: "发动机分装线制造商" },
    { id: 10, manufacturer: "环⾏排烟装置制造商" },
    { id: 11, manufacturer: "轮胎抓取器制造商" },
    { id: 12, manufacturer: "稳压电源制造商" },
    { id: 13, manufacturer: "骑马螺栓拧紧机" },
    { id: 14, manufacturer: "车架翻转机制造商" },
    { id: 15, manufacturer: "侧滑实验台制造商" },
    { id: 16, manufacturer: "四轮综合定位实验台制造商" },
    { id: 17, manufacturer: "淋⾬实验间制造商" },
]

export function list(params) {
    return new Promise((res, rej) => {
        res({
            data: {
                total: 1000,
                rows: data.slice(0, params.pageSize)
            }
        })
    })
}

export function getItem(id) {
    return new Promise((res, rej) => {
        res({
            data: {
                data: data[0]
            }
        })
    })
}

export function deleteItem(ids) {
    return new Promise((res, rej) => {
        res({
            data: {

            }
        })
    })
}

export function addItem(data) {
    return new Promise((res, rej) => {
        res({
            data: {

            }
        })
    })
}

export function updateItem(data) {
    return new Promise((res, rej) => {
        res({
            data: {

            }
        })
    })
}
