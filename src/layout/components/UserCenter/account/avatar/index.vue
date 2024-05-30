<template>
  <div class="avatar-container" title="点击上传头像" @click="openDialog">
    <img class="avatar" :src="options.img" alt="avatar">
  </div>
  <el-dialog :title="title" v-model="open" width="400px" append-to-body @close="closeDialog">
    <div style="margin-top:20px;display:flex;justify-content:center;">
      <el-button>
        <SvgIcon icon-class="upload-filled" />选择
      </el-button>
      <el-button>
        <SvgIcon style="margin:0" icon-class="plus" />
      </el-button>
      <el-button>
        <SvgIcon style="margin:0" icon-class="minus" />
      </el-button>
      <el-button>
        <SvgIcon style="margin:0" icon-class="RefreshLeft" />
      </el-button>
      <el-button>
        <SvgIcon style="margin:0" icon-class="RefreshRight" />
      </el-button>
    </div>
    <template #footer>
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { VueCropper } from "vue-cropper";

export default {
  components: { VueCropper },
  data() {
    return {
      // 是否显示弹出层
      open: false,
      // 是否显示cropper
      visible: false,
      // 弹出层标题
      title: "修改头像",
      options: {
        img: this.$store.getters.avatar, // 裁剪图片的地址
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 200, // 默认生成截图框宽度
        autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        outputType: "png", // 默认生成截图为PNG格式
      },
    };
  },
  methods: {
    // 打开弹出层
    openDialog() {
      this.open = true;
    },
    // 关闭弹出层
    closeDialog() {
      this.open = false;
      this.options.img = this.$store.getters.avatar;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover::after {
    content: "+";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eee;
    font-size: 25px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
  }
}

.avatar-upload-preview {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;
}
</style>