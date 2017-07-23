<template>
    <div>
        {{$route.params.loginname}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginname: this.$route.params.loginname,
            userDetail:{}
        }
    },
    created(){
        this.$http.get('https://cnodejs.org/api/v1/user/'+this.loginname)
            .then(data=>{
                var result=data.body;
                if(result.success){
                    this.userDetail=result.data;
                    console.log(this.userDetail)
                }
            })
    }
}
</script>
<style>

</style>
