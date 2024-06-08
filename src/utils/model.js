import { ElLoading } from 'element-plus'

let loadingInstance;

export default {
    loading(content) {
        loadingInstance = ElLoading.service({
            lock: true,
            text: content,
            background: "rgba(0, 0, 0, 0.7)",
        })
    },
    closeLoading() {
        loadingInstance.close();
    },
}