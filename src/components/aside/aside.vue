<template>
    
        <div class="right-bar pull-right">
            <div class="login right-content">
                <h1>CNode：Node.js专业中文社区</h1>
                <p>您可以 <a href="#">登录</a> 或 <a href="#">注册</a> , 也可以</p>
                <button type="button">通过  Github  登录</button>
            </div>
            <div class="adv right-content ">
                <a href="#"><img src="./adv1.png" alt="fff"></a>
                <a href="#"><img src="./adv2.jpeg" alt="fff"></a>
            </div>
            <div class="topics right-content">
                <h2>无人回复的话题</h2>
                <ul class="topic-list">
                    <li><a href="#">有没有js识别二维码的插件</a></li>
                    <li><a href="#">JavaScript有这几种测试分类</a></li>
                    <li><a href="#">express.query()是什么作用？</a></li>
                    <li><a href="#">有没有js识别二维码的插件</a></li>
                    <li><a href="#">有没有js识别二维码的插件</a></li>
                    <li><a href="#">类似于百度网盘的点击右键上传文件的问题</a></li>
                </ul>
            </div>
            <div class="rank right-content">
                <h2>积分榜 &nbsp&nbsp &nbsp &nbsp <a href="#">TOP 100 >></a></h2>
                <ul class="topic-list">
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                    <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp<a href="#">i5ting</a></li>
                </ul>
            </div>
            <div class="link right-content">
                <h2>友情社区</h2>
                <a href="#"><img src="./link1.png" alt="fff"></a>
                <a href="#"><img src="./link2.png" alt="fff"></a>
                <a href="#"><img src="./link3.png" alt="fff"></a>
                <a href="#"><img src="./link4.png" alt="fff"></a>
            </div>
            <div class="code right-content">
                <h2>客户端二维码</h2>
                <img class="scan-code" src="./code.png" alt="fff">
                <p>客户端源码地址</p>
            </div>
        </div>
    
</template>
<script>
    export default {
        name: 'aside'
    }
</script>
<style lang="scss">
    .right-bar {
        display: none;
        width: 23%;
        .right-content {
            width: 100%;
            margin-bottom: 13px;
            border-radius: 2px;
            background: #fff;
        }
        .login {
            padding: 10px;
            h1 {
                margin: 19px 0 24px;
                font-size: 15px;
                color: #333;
            }
            p {
                color: #333;
                a {
                    color: #778087;
                }
            }
            button {
                width: 149px;
                height: 34px;
                margin-top: 10px;
                border: none;
                border-radius: 2px;
                background-color: #5bc0de;
                font-size: 15px;
                color: #fff;
                cursor: pointer;
            }
        }
        .adv {
            width: 100%;
            padding: 10px;
            img {
                width: 100%;
            }
            a {
                display: inline-block;
                +a {
                    margin-top: 10px;
                }
            }
        }
        .topics ul,
        .rank ul {
            padding: 0 10px 30px;
            li {
                margin-top: 20px;
                a {
                    color: #778087;
                }
            }
        }
        .rank {
            ul {
                li {
                    font-size: 13px;
                    color: #778087;
                }
            }
        }
        h2 {
            background: #f6f6f6;
            line-height: 42px;
            text-indent: 10px;
            color: #333;
            font-size: 13px;
        }
        .link {
            a {
                display: block;
                padding: 10px;
                margin-top: 5px;
            }
            img {
                width: 70%;
            }
        }
        .code {
            p {
                padding-bottom: 20px;
                text-align: center;
            }
            .scan-code {
                display: block;
                width: 60%;
                margin: 10px auto;
            }
        }
    }
</style>
