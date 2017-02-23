<template>
  <div class="hello">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <el-row>
      <el-col :span="4">
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
          <el-menu-item-group title="分组一">
            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          content
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Col, Row } from 'element-ui'

export default {
  name: 'home',

  data () {
    return {
      msg: 'Welcome to gaoqi-admin-vue',
      activeIndex: "1",
    }
  },

  methods: {
    handleSelect() {

    }
  }
}
</script>

<style scoped>

</style>
