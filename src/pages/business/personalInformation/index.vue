<template>
    <div class="personalCenter">
        <el-container>
            <el-header>个人中心</el-header>
            <el-container>
                <el-aside width="400px">
                    <el-col :span="12">
                        <div class="sub-title"></div>
                        <div class="demo-basic--circle">
                            <div class="img">
                                <el-avatar
                                    :size="100"
                                    :src="circleUrl"
                                    align="center">
                                </el-avatar>
                            </div>
                            <div class="block">
                                <span>ADMIN</span>
                            </div>
                        </div>
                    </el-col>
                    <el-input
                        v-model="this.data.business_id"
                        type="text"
                        placeholder="商户id"
                        maxlength="6"
                        show-word-limit>
                        {{this.data.business_id}}
                    </el-input>
                    <el-input
                        v-model="this.data.business_name"
                        type="text"
                        placeholder="商户昵称"
                        show-word-limit>
                        {{this.data.business_name}}
                    </el-input>
                    <el-input
                        v-model="this.data.name"
                        type="text"
                        placeholder="商户姓名"
                        show-word-limit>
                    </el-input>
                    <el-input
                        v-model="this.data.address"
                        type="text"
                        placeholder="地址"
                        show-word-limit
                    ></el-input>
                    <el-input v-model="this.data.email" placeholder="邮箱">
                        <template slot="append">@163.com</template>
                    </el-input>
                    <el-input
                        v-model="this.data.telephone"
                        type="text"
                        placeholder="手机号码"
                        maxlength="20"
                        show-word-limit
                    ></el-input>
                    <el-input
                        v-model="this.data.fixedPhone"
                        type="text"
                        placeholder="固定电话"
                        maxlength="20"
                        show-word-limit
                    ></el-input>
                    <el-button-group style="float: right; padding: 3px 0" type="text">
                        <el-button type="primary" size="medium" round>保存</el-button>
                    </el-button-group>
                </el-aside>
                <el-container>
                    <el-main>
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span style="float: left"><b>账号绑定</b></span>
                                <el-button-group
                                    style="float: right; padding: 3px 0"
                                    type="text">
                                    <el-button
                                        type="primary"
                                        icon="el-icon-edit"
                                        size="medium"
                                        round>
                                        修改信息
                                    </el-button>
                                    <el-button
                                        type="primary"
                                        icon="el-icon-check"
                                        size="medium"
                                        round
                                    >
                                        确认修改
                                    </el-button>
                                </el-button-group>
                            </div>
                            <div v-for="o in 1" :key="o" class="text item">
                                <el-table :data="tableData" style="width: 100%">
                                    <el-table-column label="账号名" width="180">
                                        <template slot-scope="scope">
                                            <p>{{ scope.row.name1 }}</p>
                                            <div slot="reference" class="name-wrapper"></div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作" align="center">
                                        <template slot-scope="scope">
                                            <el-button
                                                size="mini"
                                                @click="handleEdit(scope.$index, scope.row)"
                                            >
                                                编辑
                                            </el-button>
                                            <el-button
                                                size="mini"
                                                type="danger"
                                                @click="handleDelete(scope.$index, scope.row)"
                                            >
                                                解绑
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="更多" align="center">
                                        <el-row>
                                            <el-button
                                                type="info"
                                                icon="el-icon-message"
                                                circle
                                            ></el-button>
                                            <el-button
                                                type="warning"
                                                icon="el-icon-star-off"
                                                circle
                                            ></el-button>
                                            <el-button
                                                type="share"
                                                icon="el-icon-share"
                                                circle
                                            ></el-button>
                                        </el-row>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div v-for="o in 1" :key="o" class="text item">
                                <el-table :data="tableData" style="width: 100%">
                                    <el-table-column label="账号名" width="180">
                                        <template slot-scope="scope">
                                            <p>{{ scope.row.name2 }}</p>
                                            <div slot="reference" class="name-wrapper"></div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作" align="center">
                                        <template slot-scope="scope">
                                            <el-button
                                                size="mini"
                                                @click="handleEdit(scope.$index, scope.row)"
                                            >
                                                编辑
                                            </el-button>
                                            <el-button
                                                size="mini"
                                                type="danger"
                                                @click="handleDelete(scope.$index, scope.row)"
                                            >
                                                解绑
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="更多" align="center">
                                        <el-row>
                                            <el-button
                                                type="info"
                                                icon="el-icon-message"
                                                circle
                                            ></el-button>
                                            <el-button
                                                type="warning"
                                                icon="el-icon-star-off"
                                                circle
                                            ></el-button>
                                            <el-button
                                                type="share"
                                                icon="el-icon-share"
                                                circle
                                            ></el-button>
                                        </el-row>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                        <el-card class="box-card">
                            <div>
                                <span style="float: left" shadow="hover"><b>个人说明</b></span>
                                <br />
                                <br />
                                <span>这是清分结算系统</span>
                                <el-divider></el-divider>
                                <span>的</span>
                                <el-divider></el-divider>
                                <span>商家界面</span>
                            </div>
                        </el-card>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'PersonalCenter',
    data() {
        return {
            data: {
                business_id: '001',
                business_name: 'admin',
                name: '',
                address: '',
                telephone: '',
                fixedPhone: '',
                email: ''
            },
            tableData: [
                {
                    date: '2016-05-03',
                    name1: 'Wechat',
                    name2: 'Github'
                }
            ]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row) {
            console.log(index, row)
        }
    }
}
</script>
<style>
.el-header {
    line-height: 60px;
    text-align: center;
    background-color: #b3c0d1;
}
.el-aside {
    line-height: 44px;
    text-align: center;
    background-color: #d3dce6;
}
.el-main {
    line-height: 36px;
    text-align: center;
    background-color: #e9eef3;
}

.demo-basic--circle {
    align: 'center';
    margin-top: 30px;
    margin-left: 150px;
}
.block {
    margin-left: 25px;
    font-weight: bold;
}
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 1368px;
    border-radius: 30px;
}
</style>
