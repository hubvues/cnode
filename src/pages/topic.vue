<template>
    <div class="container clearfix">
        <div class="content pull-left">
            <div class="user-detail">
                <div class="title">
                    <tag :topic="Detali"></tag>
                    <h1>{{Detali.title}}</h1>
                </div>
                <ul>
                    <li><span class='tag-mark'>·</span>
                        发布于
                        <create-time :time="Detali.create_at"></create-time>
                    </li>
                    <li><span class='tag-mark'>·</span>作者:
                        <router-link :to="'/user/'">
                            {{Detali.author.loginname}}
                        </router-link>
                    </li>
                    <li><span class='tag-mark'>·</span>
                        {{Detali.visit_count}}次浏览
                    </li>
                    <li><span class='tag-mark'>·</span>
                        最后一次编辑是 15 天前
                    </li>
                    <li><span class='tag-mark'>·</span>
                        来自 {{tab}}
                    </li>
                </ul>
            </div>
            <div class="inner-content" v-html="this.Detali.content">
            </div>
            <div class="panel">
                <div class="header">{{Detali.reply_count}}回复</div>
                <div class='cell' v-for="item,index in Detali.replies">
                    <div class='author_content'>
                        <router-link class="user_avatar" :to="'/user/'+item.author.loginname">
                            <img :src="item.author.avatar_url" title="tushiner">
                        </router-link>
                        <div class='user_info'>
                            <router-link class='dark reply_author' :to="'/user/'+item.author.loginname">{{item.author.loginname}}</router-link>
                            <a class="reply_time" href="#58ce8883ede0d3f71685423f">{{index+1}}楼•
                                        <create-time :time="item.create_at" class="time"></create-time>
                                    </a>
                        </div>
                        <div class='user_action'>
                            <span>
                                            <i class="fa up_btn fa-thumbs-o-up invisible" title="喜欢"></i>
                                            <span class="up-count">
                                                {{item.ups.length}}
                                            </span>
                            </span>
                        </div>
                    </div>
                    <div class='reply_content from-tushiner' v-html="item.content">
                        
                    </div>
                </div>
            </div>
        </div>
        <inner-aside class="pull-right"></inner-aside>
    </div>
</template>
<script>
    import aside from '../components/aside/aside';
    import tag from '../components/tag/tag';
    import time from '../components/time/time';
    export default {
        components: {
            'inner-aside': aside,
            tag,
            'create-time': time
        },
        data() {
            return {
                topicId: this.$route.params.id,
                Detali: {
                    author: {
                        loginname: ''
                    }
                }
            }
        },
        computed: {
            tab() {
                switch (this.Detali.tab) {
                    case 'share':
                        return '分享';
                    case 'ask':
                        return '问答';
                }
            }
        },
        created() {
            this.$http.get('https://cnodejs.org/api/v1/topic/' + this.topicId).then(function(data) {
                var result = data.body;
                if (result.success) {
                    this.Detali = result.data;
                    return this.$http.get('https://cnodejs.org/api/v1/user/' + result.data.author.loginname)
                }
            }).then(data => {
                var result = data.body;
                if (result.success) {}
            })
        }
    }
</script>
<style lang='scss'>
    .main {
        padding: 15px 0;
        background: #e1e1e1;
    }
    .content {
        width: 75%;
        .inner-content {
            padding: 10px 20px;
            background: #fff;
            .markdown-text {
                p {
                    margin-bottom: 15px;
                    img {
                        height: auto;
                        max-width: 100%;
                    }
                }
                 :first-child {
                    margin: 0;
                }
                a {
                    font-size: 15px;
                    color: #08c;
                }
                a:hover {
                    text-decoration: underline;
                }
                h1,
                h2,
                h3 {
                    line-height: 40px;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    margin: 10px 0;
                    font-family: inherit;
                    font-weight: 700;
                    color: inherit;
                    text-rendering: optimizelegibility;
                    margin: 30px 0 15px;
                    border-bottom: 1px solid #eee;
                }
                h1 {
                    font-size: 32.5px;
                }
                h2 {
                    font-size: 26px;
                    line-height: 40px;
                    a {
                        font-size: 26px;
                    }
                }
                h3 {
                    font-size: 24.5px;
                }
                p {
                    margin: 15px 0;
                    line-height: 1.7em;
                    font-size: 15px;
                }
                blockquote {
                    padding: 0 0 0 15px;
                    margin: 0 0 20px;
                    border-left: 5px solid #eee;
                }
                ul {
                    margin: 0 0 10px 25px;
                    line-height: 20px;
                    list-style-type: disc;
                    li {
                        display: list-item;
                        font-size: 14px;
                        color: #333;
                        code {
                            color: #000;
                            background-color: #fcfafa;
                            padding: 4px 6px;
                            white-space: nowrap;
                            border-radius: 3px;
                        }
                    }
                }
            }
        }
        .user-detail {
            padding: 10px;
            background: #fff;
            border-bottom: 1px solid #eee;
            .title {
                margin: 8px 0;
                h1 {
                    display: inline-block;
                    font-size: 22px;
                    font-weight: 700;
                }
                .tag {
                    margin-top: 6px;
                    line-height: 1;
                }
            }
            ul {
                list-style: disc;
                li {
                    display: inline-block;
                    margin-right: 5px;
                    color: #838383;
                   .tag-mark{
                       margin: 0 4px;
                   }
                    a {
                        color: #838383;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        .panel {
            margin-top: 15px;
            .header {
                padding: 10px;
                background-color: #f6f6f6;
                border-radius: 3px 3px 0 0;
                line-height: 28px;
                color: #333;
                font-size: 14px;
            }
            .cell {
                position: relative;
                padding: 10px 0 10px 10px;
                font-size: 14px; // background-color: #f4fcf0;
                padding-right: 10px;
                background: #fff;
                border-top: 1px solid #f0f0f0;
                a {
                    color: #08c;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 3px;
                    }
                }
                .author_content {
                    height: 20px;
                }
                .user_info {
                    display: inline-block;
                    margin-left: 10px;
                    height: 20px;
                    vertical-align: top;
                    .dark {
                        color: #666;
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .reply_time {
                        color: #08c;
                        .time{
                             line-height: 1;
                        }
                    }
                    .reply_time:hover {
                        text-decoration: underline;
                    }
                }
                .user_action {
                    float: right;
                    margin-left: 20px;
                    font-size: 15px;
                }
                .reply_content {
                    padding-left: 50px;
                    .markdown-text {
                        p {
                            margin-bottom: 1em;
                            line-height: 1.7em;
                            color: #333;
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
    .link,
    .code,
    .rank {
        display: none;
    }
</style>