<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="logo-bar">
          <a href="index.html"><img class="logo" src="./assets/logo.svg"></a>
          <form action="/" method=''>
            <i class="search"></i>
            <input type="text" class="fa fa-search">
          </form>
        </div>
        <ul class="nav">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
           <router-link to="/">新手入门</router-link>
          </li>
          <li>
           <router-link to="/">API</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
          <li>
            <router-link to="/">注册</router-link>
           
          </li>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
        </ul>
      </div>
    </header>
    <section class="main">
      <router-view></router-view>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import footer from './components/footer/footer';
export default {
  components: {
    'my-footer': footer
  }
}

</script>

<style lang="scss">
@import './scss/_mixin.scss';
@import './scss/_common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  height: 50px;
  padding: 5px;
  background-color: #444;
  .container {
    @include clearfix;
    .logo-bar {
      float: left;
      img {
        float: left;
        width: 120px;
        height: auto;
        margin-top: 5px;
      }
      form {
        display: none;
        position: relative;
        float: left;
        input {
          width: 233px;
          height: 26px;
          margin: 6px 0 0 20px;
          padding-left: 30px;
          border: 0;
          background: #666;
          border-radius: 10px;
          outline: none;
          vertical-align: top;
          transition: all 1s ease;
        }
        .search {
          display: block;
          position: absolute;
          width: 20px;
          height: 20px;
          top: 10px;
          left: 30px;
          background: url(./assets/search.png);
        }
      }
    }
    form:hover {
      input {
        background: #fff;
      }
    }
    input:focus {
      background: #fff!important;
    }
    .nav {
      display: none;
      float: right;
      li {
        float: left;
        line-height: 20px;
        a {
          display: inline-block;
          padding: 10px 15px;
          color: #ccc;
          font-size: 13px;
        }
        a:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
