<template>
    <el-form :model="ruleForm" :rules="rules" style='text-align: center' ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div style='display: inline-block'>
            <h3 style='font-size: xx-large'>注册</h3>
            <el-form-item  label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder='请输入用户名'></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type='password' v-model='ruleForm.password' x-placement='请输入密码' auto-complete='false' placeholder='输入密码'></el-input>
            </el-form-item>
            <el-form-item label="确认密码"  prop='checkPassword'>
                <el-input type='password' v-model='ruleForm.checkPassword' x-placement='确认密码' auto-complete='false' placeholder='输入密码'></el-input>
            </el-form-item>
            <el-form-item label='电话号码' prop='tel'>
                <el-input v-model='this.ruleForm.tel' auto-complete='off' placeholder='请输入手机号'></el-input>
            </el-form-item>
            <el-form-item label='验证码' prop='smsCode'>
                <el-input v-model='this.ruleForm.smsCode' placeholder='验证码'></el-input>
                <el-button type='primary' :disabled='this.rules.isDisabled' @click="submitForm('ruleForm')" style='width: 100%'>
                    {{this.rules.buttonText}}
                </el-button>
            </el-form-item>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
        </div>
    </el-form>
</template>

<script>
import axios from '@/config/httpConfig'
export default {
    data() {
        let checkTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号码'))
            } else if (!this.checkMobile(value)) {
                callback(new Error('手机号码不合法'))
            } else {
                callback()
            }
        }
        let checkSmsCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机验证码'))
            } else {
                callback()
            }
        }
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.user.checkPassword !== '') {
                    this.$refs.ruleForm.validateField('checkPassword')
                }
                callback()
            }
        }
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致！'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '123456'
            },

            ruleForm: {
                name: '',
                password: '',
                checkPassword: '',
                tel: '',
                smsCode: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'change' },
                    { min: 6, max: 20, message: '密码需为6-20个字符', trigger: 'blur' }
                ],
                checkPassword: [
                    { required: true, validator: validatePass2, trigger: 'change' },
                    { min: 6, max: 20, message: '密码需为6-20个字符', trigger: 'blur' }
                ],
                tel: [{ required: true, validator: checkTel, trigger: 'change' }],
                smsCode: [{ required: true, validator: checkSmsCode, trigger: 'change' }],
                buttonText: '发送验证码',
                isDisabled: 'false',
                flag: 'true'
            }
        }
    },
    methods: {
        sendCode() {
            axios.post('', {
                tel: this.ruleForm.tel
            }).then(resp => {
                if (this.checkMobile(this.tel)) {
                    let time = 60
                    this.buttonText = '已发送'
                    this.isDisabled = true
                    // 每隔1000毫秒执行一次。
                    if (this.flag) {
                        this.flag = false
                        let timer = setInterval(() => {
                            time--
                            this.buttonText = time + '秒'
                            this.message('发送成功,注意查收')
                            if (time === 0) {
                                clearInterval(timer)
                                this.buttonText = '重新获取'
                                this.isDisabled = false
                                this.flag = true
                            }
                        }, 1000)
                    }
                }
            }).catch((failResponse) => {
                console.log('failResponse')
                return false
            })
        },
        submitForm(formName) {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    axios({
                        method: 'POST',
                        url: '',
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: {
                            name: this.ruleForm.name,
                            password: this.ruleForm.password,
                            checkPassword: this.ruleForm.checkPassword,
                            tel: this.ruleForm.tel,
                            smsCode: this.ruleForm.smsCode
                        }
                    })
                        .then(res => {
                            if (res.data.message === 'SUCCESS') {
                                this.$router.push('/login')
                                this.$notify({
                                    title: '提示',
                                    message: '注册成功',
                                    duration: 2000
                                })
                            } else {
                                this.$notify({
                                    title: '提示',
                                    message: '注册失败',
                                    duration: 2000
                                })
                            }
                        })
                        .catch(() => {
                            this.$notify({
                                title: '提示',
                                message: '注册失败',
                                duration: 2000
                            })
                        })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        gotoLogin() {
            this.$router.push({
                path: '/login'
            })
        },
        checkMobile(str) {
            let re = /^1\d{10}$/
            if (re.test(str)) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>

</style>
