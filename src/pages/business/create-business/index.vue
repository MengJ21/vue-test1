<template>
    <div>
       <router-view></router-view>
        <div>
            <el-upload
                name="file"
                with-credentials="ture"
                show-file-list="true"
                drag="false"
                list-type="text">
                <el-button size="small" icon="el-icon-upload2">点击上传文件</el-button>
                <div style="color: #999999; font-size: 12px; margin-top: 4px;" slot="tip">
                    <slot>
                        <!-- 提示的文字 -->
                    </slot>
                </div>
            </el-upload>
        </div>
        <div class="left_Box">
            <div class="btnTool" style="text-align:right;">
                <el-button type="primary" size="mini" @click="addDomain">新增行</el-button>
                <el-button type="primary" size="mini" @click="clear_btn">清空</el-button>
            </div>
            <div>
                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" :inline="true" class="demo_dynamic">
                    <div v-for="(domain, index) in dynamicValidateForm.domains" :key="index" class="dv_hang" >
                        <el-form-item
                            :key="domain.key"
                            :rules="{required: true, message: '不能为空', trigger: 'blur',}">
                            <label>规则类型</label>
                            <el-select v-model="domain.rule_type" size="small">
                                <el-option label="双方参与" value="PO"></el-option>
                                <el-option label="多方参与" value="UO"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item
                            :key="domain.key"
                            :rules="{required: true, message: '不能为空', trigger: 'blur',}">
                            <label>交易渠道</label>
                            <el-select v-model="domain.trans_channel" size="small">
                                <el-option label="支付宝" value="PO"></el-option>
                                <el-option label="微信" value="UO"></el-option>
                                <el-option label="银行卡" value="UO"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item
                            :key="domain.key"
                            :rules="{required: true, message: '不能为空', trigger: 'blur',}">
                            <label>交易类型</label>
                            <el-select v-model="domain.trans_channel" size="small">
                                <el-option label="互联网" value="PO"></el-option>
                                <el-option label="实体店" value="UO"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item
                            :key="domain.key"

                            :rules="{required: true, message: '不能为空', trigger: 'blur',}">
                            <label>商户id</label>
                            <el-input v-model="domain.business_id" size="small" style='width: 200px'></el-input>
                        </el-form-item>
                        <el-form-item
                            :key="domain.key"
                            :rules="{required: true, message: '不能为空', trigger: 'blur',}">
                            <label>收益占比</label>
                            <el-input-number v-model="domain.percent" :min="0" :max="1" :precision="2" :step="0.1" size="small"></el-input-number>
                        </el-form-item>
                        <el-form-item
                            :key="domain.key"
                            :rules="{required: false, message: '不能为空', trigger: 'blur',}">
                            <label>备注</label>
                            <el-input v-model="domain.business_id" size="small" style='width: 200px'></el-input>
                        </el-form-item>
                        <el-button @click.prevent='removeDomain(domain)' type='primary'>删除</el-button>
                        <el-button type='primary'>修改</el-button>
                    </div>
                </el-form>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dynamicValidateForm: {
                domains: [{
                    rule_id: '',
                    rule_type: '',
                    trans_channel: '',
                    trans_type: '',
                    business_id: '',
                    percent: '',
                    status: '', // 状态1可用，0不可用
                    create_time: '',
                    update_by: '',
                    update_time: '',
                    remark: '' // 备注
                }]
            },
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        removeDomain(item) { // 删除行
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
        addDomain() { // 新增行
            this.dynamicValidateForm.domains.push({
                rule_id: '',
                rule_type: '',
                trans_channel: '',
                trans_type: '',
                business_id: '',
                status: '', // 状态1可用，0不可用
                create_time: Date.now(),
                update_by: '',
                update_time: '',
                remark: '', // 备注
                key: Date.now()
            })
        },
        clear_btn() {
            this.$refs.dynamicValidateForm.resetFields()
        }

    }
}
</script>
