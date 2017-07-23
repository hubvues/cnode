<template>
    <span class="day">{{mytime}}</span>
</template>
<script>
    export default {
        props: ['time'],
        computed: {
            mytime() {
              
                var second = Math.floor((Date.now() - Date.parse(this.time)) / 1000);
                if (second < 60) {
                    return second + '秒前';
                } else {
                    var min = Math.floor(second / 60);
                    if (min < 60) {
                        return min + '分钟前';
                    } else {
                        var hour = Math.floor(second / 3600);
                        if (hour < 24) {
                            return hour + '小时前';
                        } else {
                            var day = Math.floor(second / (3600 * 24));
                            if (day < 30) {
                                return day + '天前';
                            } else {
                                var month = Math.floor(second / (3600 * 24 * 30));
                                if (month < 12) {
                                    return month + '个月前';
                                } else {
                                    var year = Math.floor(second / (3600 * 24 * 30 * 12));
                                    return year + '年前';
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
</style>