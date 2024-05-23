let data = [
    { id: 1, location: '广东省湛江市赤坎区', manufacturer: "输送设备制造商", model: "SD-650型输送机", power: "15KW", energyLevel: "中等能耗", timeType: "连续工作", deviceRealTimePower: "12.5KW", warnThreshold: "14KW" },
    { id: 2, location: '广东省广州市珠海区', manufacturer: "吊装设备制造商", model: "ZLD-8000型电动葫芦", power: "5KW", energyLevel: "低能耗", timeType: "间歇工作", deviceRealTimePower: "4.5KW", warnThreshold: "5.5KW" },
    { id: 3, location: '广东省深圳市福田区', manufacturer: "油液加注设备制造商", model: "OYJ-200型自动加注机", power: "2KW", energyLevel: "节能型", timeType: "连续工作", deviceRealTimePower: "1.8KW", warnThreshold: "2.2KW" },
    { id: 4, location: '广东省潮汕市普宁区', manufacturer: "预装线制造商", model: "YZL-5000型预装流水线", power: "10KW", energyLevel: "中等能耗", timeType: "连续工作", deviceRealTimePower: "9.5KW", warnThreshold: "11KW" },
    { id: 5, location: '广东省深圳市盐田区', manufacturer: "拧紧机制造商", model: "JTJ-300型电动拧紧机", power: "0.5KW", energyLevel: "低能耗", timeType: "间歇工作", deviceRealTimePower: "0.45KW", warnThreshold: "0.6KW" },
    { id: 6, location: '广东省深圳市罗湖区', manufacturer: "打标机制造商", model: "DBJ-600型气动打标机", power: "1KW", energyLevel: "低能耗", timeType: "间歇工作", deviceRealTimePower: "0.9KW", warnThreshold: "1.1KW" },
    { id: 7, location: '广东省广州市白云区', manufacturer: "检测机制造商", model: "JCJ-1000型全自动检测机", power: "3KW", energyLevel: "中等能耗", timeType: "连续工作", deviceRealTimePower: "2.8KW", warnThreshold: "3.5KW" },
    { id: 8, location: '广东省湛江市麻章区', manufacturer: "灯光调整仪制造商", model: "DGZ-500型灯光调整仪", power: "0.2KW", energyLevel: "极低能耗", timeType: "间歇工作", deviceRealTimePower: "0.18KW", warnThreshold: "0.25KW" },
    { id: 9, location: '广东省湛江市遂溪县', manufacturer: "发动机分装线制造商", model: "FDJFZ-2000型发动机分装线", power: "20KW", energyLevel: "高能耗", timeType: "连续工作", deviceRealTimePower: "19KW", warnThreshold: "22KW" },
    { id: 10, location: '广东省湛江市雷州市', manufacturer: "环形排烟装置制造商", model: "HXPY-1000型环形排烟装置", power: "15KW", energyLevel: "中等能耗", timeType: "连续工作", deviceRealTimePower: "14.5KW", warnThreshold: "17KW" },
    { id: 11, location: '广东省湛江市坡头区', manufacturer: "轮胎抓取器制造商", model: "TGC-1000轮胎抓取器", power: "1.5KW", energyLevel: "中等能耗", timeType: "连续工作", deviceRealTimePower: "1.3KW", warnThreshold: "1.7KW" },
    { id: 12, location: '广东省东莞市厚街镇', manufacturer: "稳压电源制造商", model: "WPS-500稳压电源", power: "0.5KW", energyLevel: "低能耗", timeType: "持续供电", deviceRealTimePower: "0.45KW", warnThreshold: "0.6KW" },
    { id: 13, location: '广东省广州市荔湾区', manufacturer: "骑马螺栓拧紧机", model: "QTJ-800螺栓拧紧机", power: "0.8KW", energyLevel: "低能耗", timeType: "间歇工作", deviceRealTimePower: "0.7KW", warnThreshold: "0.9KW" },
    { id: 14, location: '广东省广州市越秀区', manufacturer: "车架翻转机制造商", model: "FJF-600车架翻转机", power: "2.0KW", energyLevel: "高能耗", timeType: "间歇工作", deviceRealTimePower: "1.8KW", warnThreshold: "2.2KW" },
    { id: 15, location: '广东省广州市天河区', manufacturer: "侧滑实验台制造商", model: "CST-300侧滑实验台", power: "1.0KW", energyLevel: "中等能耗", timeType: "间歇工作", deviceRealTimePower: "0.9KW", warnThreshold: "1.2KW" },
    { id: 16, location: '广东省广州市黄浦区', manufacturer: "四轮综合定位试验台制造商", model: "4WPT-700四轮综合定位试验台", power: "1.2KW", energyLevel: "中等能耗", timeType: "连续工作", deviceRealTimePower: "1.1KW", warnThreshold: "1.4KW" },
    { id: 17, location: '广东省广州市番禺区', manufacturer: "淋雨试验间制造台", model: "LYSJ-400淋雨试验间", power: "0.3KW", energyLevel: "极低能耗", timeType: "间歇工作", deviceRealTimePower: "0.25KW", warnThreshold: "0.35KW" },
    { id: 18, location: '广东省广州市花都区', manufacturer: "精工装配机械有限公司", model: "JZ-A100装配机", power: "0.6KW", energyLevel: "低能耗", timeType: "连续工作", deviceRealTimePower: "0.55KW", warnThreshold: "0.7KW" },
    { id: 19, location: '广东省广州市南沙区', manufacturer: "卓越检测仪器有限公司", model: "ZY-QC500质量检测仪", power: "0.3KW", energyLevel: "极低能耗", timeType: "间歇工作", deviceRealTimePower: "0.28KW", warnThreshold: "0.35KW" },
    { id: 20, location: '广东省广州市从化区', manufacturer: "创新科技有限公司", model: "CX-RD800研发设备", power: "1.0KW", energyLevel: "中等能耗", timeType: "灵活工作", deviceRealTimePower: "0.9KW", warnThreshold: "1.1KW" },
    { id: 21, location: '广东省广州市增城区', manufacturer: "智能仓储设备公司", model: "ZW-CS300智能货架", power: "0.1KW", energyLevel: "极低能耗", timeType: "待机", deviceRealTimePower: "0.08KW", warnThreshold: "0.12KW" },
    { id: 22, location: '广东省东莞市长安镇', manufacturer: "自动化生产线制造商", model: "ZDH-B250自动化生产线", power: "2.5KW", energyLevel: "高能耗", timeType: "连续工作", deviceRealTimePower: "2.3KW", warnThreshold: "2.7KW" },
]

export function list(params) {
    let Data = data.slice((params.pageNum - 1) * params.pageSize, params.pageNum * params.pageSize);
    if (params.location || params.timeType) {
        Data = data.filter(item => {
            if (params.location && params.timeType) {
                return item.location.includes(params.location) && item.timeType.includes(params.timeType)
            } else if (params.location) {
                return item.location.includes(params.location)
            } else if (params.timeType) {
                return item.timeType.includes(params.timeType)
            }
        })
    }
    return new Promise((res, rej) => {
        res({
            data: {
                total: data.length,
                rows: Data
            }
        })
    })
}

export function getItem(id) {
    return new Promise((res, rej) => {
        res({
            data: {
                data: data.filter(item => item.id === id)[0]
            }
        })
    })
}

export function deleteItem(ids) {
    if (Array.isArray(ids)) {
        data = data.filter(item => !ids.includes(item.id))
    } else {
        data = data.filter(item => item.id !== ids)
    }
    return new Promise((res, rej) => {
        res({
            data: {

            }
        })
    })
}

export function addItem(form) {
    data.push(form)
    return new Promise((res, rej) => {
        res({
            data: {

            }
        })
    })
}

export function updateItem(form) {
    data = data.map(item => {
        if (item.id === form.id) {
            return form
        }
        return item
    })
    return new Promise((res, rej) => {
        res({
            data: {

            }
        })
    })
}
