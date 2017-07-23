<template>
    <li class="clearfix topic">
        <router-link class="head pull-left" :to="'/user/'+topic.author.loginname">
            <img :src="topic.author.avatar_url" alt="fff">
       </router-link>
        <div class="comment pull-left">{{topic.reply_count}}/
            <span class="total-comment">{{topic.visit_count}}</span>
        </div>
       <tag class="pull-left" :topic="topic"></tag>
        <router-link class="title pull-left" :to="'/topic/'+topic.id">{{topic.title}}</router-link>
        <div class="time pull-right">
            <img src="" alt="fff">
          <last-time :time="topic.last_reply_at"></last-time>
        </div>
         
    </li>
</template>
<script>
    import tag from '../tag/tag';
    import time from '../time/time';
    export default {
        props: ['topic'],
        components: {
            'tag': tag,
            'last-time': time
        },
    }
</script>
<style lang="scss">
    .topic {
        width: 100%;
        padding: 10px 0;
        border-top: 1px solid #f0f0f0;
        background: #fff;
        .head {
            display: inline-block;
            width: 30px;
            height: 30px;
            margin: 10px 5px 0 10px;
            img {
                width: 100%;
            }
        }
        .comment {
            margin: 0 10px;
            line-height: 51px;
            font-size: 14px;
            color: #9e78c0;
            text-align: center;
            .total-comment {
                color: #b4b4b4;
            }
        }
      
        .title {
            display: block;
            max-width: 48%;
            line-height: 55px;
            font-size: 16px;
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .title:hover {
            text-decoration: underline;
        }
        .time {
            padding-right: 1%;
            line-height: 51px;
            img {
                display: none;
                width: 18px;
                height: 18px;
                margin-right: 20px;
                vertical-align: middle;
                transform: translateY(-2px);
            }
           
        }
    }
    .topic:hover {
        background: #f6f6f6;
    }
</style>