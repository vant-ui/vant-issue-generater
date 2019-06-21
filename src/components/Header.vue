<template>
  <ALayoutHeader class="header">
    <a href="https://github.com/youzan/vant" target="_blank">
      <div class="logo">
        <img src="https://img.yzcdn.cn/vant/logo.png" alt="">
        <span>Vant</span>
      </div>
    </a>
    <AMenu
      :selected-keys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
      @click="switchMenu"
    >
      <AMenuItem
        v-for="menu in menus"
        :key="menu.key"
      >
        {{ menu.name }}
      </AMenuItem>
    </AMenu>
  </ALayoutHeader>
</template>
<script>
import i18n from '@/i18n'
export default {
  name: 'Header',
  data () {
    const menus = Object.keys(i18n).map(key => ({
      key,
      name: i18n[key].name
    }))
    return {
      menus
    }
  },
  computed: {
    selectedKeys () {
      return [this.$route.name]
    }
  },
  methods: {
    switchMenu ({ key }) {
      this.$router.push({
        name: key,
        query: this.$route.query
      })
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  img {
    width: 26px;
    margin-right: 5px;
    vertical-align: middle;
  }
  span {
    color: #fff;
    font-size: 22px;
    vertical-align: middle;
  }
}
</style>
