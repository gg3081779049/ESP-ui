let data = []

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
