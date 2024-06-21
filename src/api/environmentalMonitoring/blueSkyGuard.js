let data = [
    { id: 1, location: '广东省广州市番禺区', time: '2024-05-12', pm25: 13, pm10: 3, no2: 6, o3: 12, so2: 11, humidity: 0.23, visibility: 0.6, atmosphericPressure: 17, dewPoint: 2 },
    { id: 2, location: '广东省广州市荔湾区', time: '2024-05-17', pm25: 15, pm10: 2, no2: 7, o3: 16, so2: 10, humidity: 0.41, visibility: 0.5, atmosphericPressure: 20, dewPoint: 1 },
    { id: 3, location: '广东省广州市海珠区', time: '2024-05-22', pm25: 12, pm10: 4, no2: 6, o3: 13, so2: 12, humidity: 0.32, visibility: 0.4, atmosphericPressure: 18, dewPoint: 3 },
    { id: 4, location: '广东省广州市越秀区', time: '2024-05-27', pm25: 14, pm10: 5, no2: 7, o3: 14, so2: 13, humidity: 0.35, visibility: 0.3, atmosphericPressure: 19, dewPoint: 4 },
    { id: 5, location: '广东省广州市天河区', time: '2024-05-30', pm25: 15, pm10: 6, no2: 8, o3: 15, so2: 14, humidity: 0.38, visibility: 0.6, atmosphericPressure: 18, dewPoint: 5 },
    { id: 6, location: '广东省广州市海珠区', time: '2024-05-31', pm25: 16, pm10: 7, no2: 9, o3: 16, so2: 15, humidity: 0.40, visibility: 0.7, atmosphericPressure: 17, dewPoint: 6 },
    { id: 7, location: '广东省广州市番禺区', time: '2024-06-03', pm25: 14, pm10: 7, no2: 9, o3: 16, so2: 15, humidity: 0.40, visibility: 0.7, atmosphericPressure: 17, dewPoint: 6 },
    { id: 8, location: '广东省广州市增城区', time: '2024-05-31', pm25: 21, pm10: 7, no2: 9, o3: 16, so2: 15, humidity: 0.40, visibility: 0.7, atmosphericPressure: 17, dewPoint: 6 },
    { id: 9, location: '广东省广州市从化区', time: '2024-05-31', pm25: 13, pm10: 6, no2: 8, o3: 14, so2: 14, humidity: 0.40, visibility: 0.7, atmosphericPressure: 17, dewPoint: 6 },
    { id: 10, location: '广东省广州市增城区', time: '2024-05-31', pm25: 21, pm10: 7, no2: 9, o3: 16, so2: 15, humidity: 0.40, visibility: 0.7, atmosphericPressure: 17, dewPoint: 6 },
]

export function list(params) {
    let Data = data.slice((params.pageNum - 1) * params.pageSize, params.pageNum * params.pageSize);
    if (params.location || params.time) {
        Data = data.filter(item => {
            if (params.location && params.time) {
                return item.location.includes(params.location) && item.time.includes(params.time)
            } else if (params.location) {
                return item.location.includes(params.location)
            } else if (params.time) {
                return item.time.includes(params.time)
            }
        })
    }
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                data: {
                    total: params.location || params.time ? Data.length : data.length,
                    rows: Data
                }
            })
        }, 200)
    })
}

export function getItem(id) {
    return new Promise((res, rej) => {
        res({
            data: {
                data: JSON.parse(JSON.stringify(data.find(item => item.id === id)))
            }
        })
    })
}

export function deleteItem(ids) {
    data = data.filter(item => Array.isArray(ids) ? !ids.includes(item.id) : item.id !== ids)
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
            for (let key in form) item[key] = form[key]
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
