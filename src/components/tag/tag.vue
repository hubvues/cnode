<template>
    <div class="tag pull-left">
        <span class="active" v-if="topic.top">置顶</span>
        <span class="active" v-if="topic.good&&!topic.top">精华</span>
        <span v-if="topic.tab==='ask'&&!topic.good&&!topic.top">问答</span>
        <span v-if="topic.tab==='share'&&!topic.good&&!topic.top">分享</span>
    </div>
</template>
<script>
    export default {
        props: ['topic'],
    }
</script>
<style lang="scss">
    .tag {
        display: none;
        margin-right: 4px;
        line-height: 51px;
        span {
            padding: 2px 5px;
            border-radius: 2px;
            background-color: #e5e5e5;
            color: #999;
            &.active {
                background: #80bd01;
                color: #fff;
            }
        }
    }
</style>