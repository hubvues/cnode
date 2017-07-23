<template>
    <div class="container">
        <article>
             <div class="main-top">
                <router-link class="link" to="/">主页</router-link>
                <span>/ Node.js 新手入门</span>
            </div>
           <div class="about">
                <h1>Node.js 入门</h1>
                <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
               <a href="#"> http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
               <p>《Node.js 包教不包会》</p>
               <a href="#">https://github.com/alsotang/node-lessons</a>    
                <p>《ECMAScript 6入门》</p>
               <a href="#">http://es6.ruanyifeng.com/</a>    
               <p>《七天学会NodeJS》</p>
               <a href="#">https://github.com/nqdeng/7-days-nodejs</a>               
            </div>
           <div class="about">
                <h1>Node.js 入门</h1>
                <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
               <a href="#"> http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
               <p>《Node.js 包教不包会》</p>
               <a href="#">https://github.com/alsotang/node-lessons</a>    
                <p>《ECMAScript 6入门》</p>
               <a href="#">http://es6.ruanyifeng.com/</a>    
               <p>《七天学会NodeJS》</p>
               <a href="#">https://github.com/nqdeng/7-days-nodejs</a>               
            </div>
        </article>
        <haha></haha>
    </div>
</template>
<script>
import aside from '../components/aside/aside';
export default {
    name: 'about',
    components: {
        haha: aside
    }
}
</script>
<style lang="scss">
article {
    display: inline-block;
    width: 75%;
    padding-right: 20px;
    background: #fff;
    .main-top {
        width: 100%;
        padding: 10px 0 10px 20px;
        background: #F6F6F6;
        border-bottom:1px solid #ddd;
    }
    .about{
        padding: 20px 20px 30px;
        h1{
            padding-bottom: 10px;
             border-bottom:1px solid #ddd;
            font-size: 25px
        }
        p{
            padding: 10px 0;
            line-height: 25px;
            font-size: 16px;
        }
        a{
            display: block;
            margin: 10px;
            color: skyblue;
        }
    }
   
}
.rank,.adv{
    display: none;
}
</style>

