<template>
  <div class="container">
    <div class="title">新建图书</div>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" @submit.native.prevent>
            <el-form-item label="编号" prop="book_no">
              <el-input size="medium" v-model="form.book_no" placeholder="请填写编号"></el-input>
            </el-form-item>
            <el-form-item label="书名" prop="book_name">
              <el-input size="medium" v-model="form.book_name" placeholder="请填写书名"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
              <el-input size="medium" v-model="form.state" placeholder="请填写状态"></el-input>
            </el-form-item>
            <el-form-item label="借阅人" prop="borrower_name">
              <el-input size="medium" v-model="form.borrower_name" placeholder="请填写借阅人"></el-input>
            </el-form-item>
            <el-form-item label="借阅人电话" prop="borrower_iphone">
              <el-input size="medium" v-model="form.borrower_iphone" placeholder="请填借阅人电话"></el-input>
            </el-form-item>
            <el-form-item label="封面" prop="book_images_url">
              <el-input size="medium" v-model="form.book_images_url" placeholder="请填写封面地址"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="summary">
              <el-input
                size="medium"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8 }"
                placeholder="请输入简介"
                v-model="form.describle"
              >
              </el-input>
            </el-form-item>

            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bookregister from '@/model/bookregister'

export default {
  data() {
    return {
      form: {
        book_no: '',
        book_name: '',
        state: '',
        borrower_name: '',
        borrower_iphone: '',
        book_images_url: '',
        describle: '',
      },
    }
  },
  methods: {
    async submitForm(formName) {
      try {
        const res = await bookregister.createBookRegister(this.form)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.$message.success(`${res.message}`)
          this.resetForm(formName)
        }
      } catch (error) {
        this.$message.error('图书添加失败，请检测填写信息')
        console.log(error)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    border-bottom: 1px solid #dae1ec;
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
