<template>
  <div class="app-container">
    <el-collapse-transition>
      <el-form :model="queryParams" ref="queryForm" size="default" :inline="true" v-show="showSearch">
        <el-form-item label="地点" prop="">
          <el-input v-model="queryParams.location" placeholder="请输入地点" clearable />
        </el-form-item>
        <el-form-item label="时间类型">
          <el-select  style="width:200px;" placeholder="请选择时间类型">
          
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleQuery"
            style="background:var(--el-color-primary-light-3);border-color:var(--el-color-primary-light-3)">
            <SvgIcon icon-class="search" />
            <span>搜索</span>
          </el-button>
          <el-button @click="resetQuery">
            <SvgIcon icon-class="refresh" />
            <span>重置</span>
          </el-button>
        </el-form-item>
      </el-form>
    </el-collapse-transition>

    <div>
      <el-button type="primary" plain size="small" @click="handleAdd"><SvgIcon icon-class="plus" />新增</el-button>
      <el-badge :value="ids.length" :max="99" :offset="[-3, 0]" :hidden="!ids.length" style="margin:0 12px">
        <el-button
          type="danger"
          plain
          size="small"
          @click="handleDelete">
          <SvgIcon icon-class="delete"/>
          <span>删除</span>
        </el-button>
      </el-badge>
      <el-button
        type="warning"
        plain
        size="small"
        @click="handleExport">
        <SvgIcon icon-class="export" />
        <span>导出</span>
      </el-button>
      <el-button
        type="info"
        plain
        size="small"
        @click="handleUpdate"
        :disabled="single"
        style="--el-color-info-light-8:none">
        <SvgIcon icon-class="edit" />
        <span>修改</span>
      </el-button>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="reflesh" />
    </div>
    <br>

    <el-table v-loading="loading" :data="list" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" prop="id" width="66"  />
      <el-table-column label="地点" align="center" prop="location" />
      <el-table-column label="生产厂家" align="center" prop="manufacturer" width="200" />
      <el-table-column label="型号" align="center" prop="model" />
      <el-table-column label="功率" align="center" prop="power" />
      <el-table-column label="能耗级别" align="center" prop="energyLevel" />
      <el-table-column label="时间类型" align="center" prop="timeType" />
      <el-table-column label="设备实时能耗值" align="center" prop="deviceRealTimePower" width="135" />
      <el-table-column label="预警阈值" align="center" prop="warnThreshold" />
      <el-table-column label="操作" align="center" min-width="100">
        <template #default="scope">
          <el-button
            size="small"
            type="info"
            plain
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="small"
            type="danger"
            plain
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
      <template #empty>没有数据</template>
    </el-table>
    <br>

    <div class="page-footer">
      <el-pagination background layout="slot, prev, pager, next"
        v-show="total > 0"
        :total="total"
        v-model:current-page="queryParams.pageNum"
        :page-size="queryParams.pageSize"
        @current-change="getList">
        <template #default>
          <span class="el-pagination__total is-first">共 {{ total }} 条</span>
        </template>
      </el-pagination>
    </div>

    <!-- 添加或修改智能管理-能耗监测与分析对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="地点" prop="location">
          <el-input v-model="form.location" placeholder="请输入地点" />
        </el-form-item>
        <el-form-item label="预警阈值" prop="warnThreshold">
          <el-input v-model="form.warnThreshold" placeholder="请输入预警阈值" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { list, getItem, deleteItem, addItem, updateItem } from "@/api/intelligentManagement/monitoringAnalysis"

export default {
  name: 'MonitoringAnalysis',
  data() {
    return {
      // 遮罩层
      loading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 智能管理-能耗监测与分析表格数据
      list: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        location: null,
        timeType: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询智能管理-能耗监测与分析列表 */
    getList() {
      this.loading = true;
      list(this.queryParams).then(res => {
        this.list = res.data.rows;
        this.total = res.data.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      for (let key in this.form) {
        if (this.form.hasOwnProperty(key)) {
            this.form[key] = '';
        }
      }
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.reset()
      this.handleQuery();
    },
    /** 刷新按钮操作 */
    reflesh() {
      this.getList();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加智能管理-能耗监测与分析";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      getItem(row.id || this.ids[0]).then(res => {
        this.form = res.data.data;
        this.open = true;
        this.title = "修改智能管理-能耗监测与分析";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id) {
            updateItem(this.form).then((res) => {
              this.$message({
                type: 'success',
                message: "修改成功"
              });
              this.open = false;
              this.getList();
            })
          } else {
            addItem(this.form).then((res) => {
              this.$message({
                type: 'success',
                message: "新增成功"
              });
              this.open = false;
              this.getList();
            })
          }
        }
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      if (Array.isArray(ids) && ids.length === 0) return
      this.$confirm('是否确认删除能耗监测与分析编号为"' + ids + '"的数据项？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteItem(ids)
      }).then(() => {
        this.getList();
        this.$message({
          type: 'success',
          message: "删除成功"
        })
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('/export', {
        ...this.queryParams
      }, `${new Date().getTime()}.xlsx`)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  display: flex;
  justify-content: end;
  ::v-deep .el-pager li.is-active {
    background-color: var(--el-color-primary-light-3);
  }
}
</style>
