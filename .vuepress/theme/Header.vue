<template>
    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">
            <b-icon-house></b-icon-house>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/create-token/" :active="page === 'Generator'">生成ERC20 Token</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" :active="page === 'Home'">首页</b-nav-item>
                <b-nav-item to="/docs/" :active="page === 'Docs'">文档</b-nav-item>
                <b-nav-item target="_blank" href="https://vittominacori.medium.com/create-an-erc20-token-in-less-than-a-minute-2a8751c4d6f4">
                    <small>关于我们</small>
                </b-nav-item>
                <b-nav-item v-b-modal.modal-feedback><small>反馈</small></b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      page: {
        type: String,
        default: null,
      },
    },
  };
</script>
