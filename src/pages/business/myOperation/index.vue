<template>
    <div>
    <div class="line"></div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">收益详情</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的合作</template>
            <el-menu-item index="2-1">合作1</el-menu-item>
            <el-menu-item index="2-2">合作2</el-menu-item>
            <el-menu-item index="2-3">合作3</el-menu-item>
            <el-menu-item index="2-3">合作4</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
