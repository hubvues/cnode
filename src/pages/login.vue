<template>
    <div class="login clearfix container">
        <div id='content'>
            <div class='panel'>
                <div class='header'>
                    <ul class='breadcrumb'>
                        <li>
                            <a href='/'>主页</a>
                            <span class='divider'>/</span>
                        </li>
                        <li class='active'>登录</li>
                    </ul>
                </div>
                <div class='inner'>
                    <form id='signin_form' class='form-horizontal' action='/signin' method='post'>
                        <div class='control-group'>
                            <label class='control-label' for='name'>用户名</label>
                            <div class='controls'>
                                <input class='input-xlarge' id='name' name='name' size='30' type='text' >
                            </div>
                        </div>
                        <div class='control-group'>
                            <label class='control-label' for='pass'>密码</label>
                            <div class='controls'>
                                <input class='input-xlarge' id='pass' name='pass' size='30' type='password' >
                            </div>
                        </div>
                        <input type='hidden' name='_csrf' value='Cr0pEWwv-CSRG4xmqe87xhGvEAIHqknJlfNQ' >
                        <div class='form-actions'>
                            <input type='submit' class='span-primary' value='登录' >
                            <a href="/auth/github">
                                <span class="span-info">
                                                                                        
                                                                                                                            通过 GitHub 登录
                                                                                        
                                                                                                                        </span>
                            </a>
                            <a id="forgot_password" href='/search_pass'>忘记密码了?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id='sidebar'>
            <div class='panel'>
                <div class='header'>
                    <span class='col_fade'>关于</span>
                </div>
                <div class='inner'>
                    <p>CNode：Node.js专业中文社区</p>
                    <p>在这里你可以：</p>
                    <ul>
                        <li>向别人提出你遇到的问题</li>
                        <li>帮助遇到问题的人</li>
                        <li>分享自己的知识</li>
                        <li>和其它人一起进步</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    body {
        background: #e1e1e1;
    }
    .container {
        width: 80%;
        .panel {
            float: left;
            width: 75%;
            .header {
                padding: 10px;
                background-color: #f6f6f6;
                border-radius: 3px 3px 0 0;
                li {
                    display: inline-block;
                    line-height: 20px;
                    color: #999;
                    a {
                        color: #80bd01;
                        font-size: 14px;
                    }
                }
            }
            .inner {
                padding: 10px;
                background: #fff;
                border-radius: 0 0 3px 3px;
                form {
                    margin-top: 40px;
                    .control-group {
                        margin-bottom: 20px;
                        .control-label {
                            float: left;
                            width: 160px;
                            padding-top: 5px;
                            text-align: right;
                        }
                        .controls {
                            margin-left: 180px;
                            input {
                                height: 30px;
                                padding: 4px 6px;
                                margin-bottom: 10px;
                                font-size: 14px;
                                line-height: 20px;
                                color: #555;
                                vertical-align: middle;
                                border-radius: 4px;
                                background: hsla(0, 0%, 0%, 0);
                                border: 1px solid #ccc;
                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
                                transition: border linear .2s, box-shadow linear .2s;
                            }
                        }
                    }
                    .form-actions {
                        display: block;
                        padding: 19px 20px 20px 180px;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        border-top: none;
                        background-color: #fff;
                        .span-primary {
                            padding: 3px 10px;
                            border: none;
                            background-color: #08c;
                            line-height: 2em;
                            color: #fff;
                            font-size: 14px;
                            vertical-align: middle;
                            transition: all .2s ease-in-out;
                            box-shadow: none;
                            border-radius: 3px;
                        }
                        .span-info {
                            display: inline-block;
                            float: none;
                            padding: 3px 10px;
                            border: none;
                            margin: 0;
                            font-size: 14px;
                            transition: all .2s ease-in-out;
                            cursor: pointer;
                            letter-spacing: 2px;
                            box-shadow: none;
                            border-radius: 3px;
                            line-height: 2em;
                            vertical-align: middle;
                            color: #fff;
                            background-color: #5bc0de;
                        }
                        #forgot_password {
                            color: #778087;
                        }
                        #forgot_password:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        #sidebar {
            width:23%;
            font-size: 14px;
            float: right;
            margin-bottom: 20px;
            .panel{
                width: 100%;
            }
            .header{
                  span{
                      line-height: 20px;
                        color: #444;
                  }
            }
            .inner {
                p {
                    margin: 0 0 10px;
                    font-size: 14px;
                    color: #333;
                }
            }
            ul {
                margin: 0 0 10px 25px;
                li {
                    font-size: 13px;
                    color: #333;
                    line-height: 2em;
                    list-style-type: disc;
                }
            }
        }
    }
</style>
