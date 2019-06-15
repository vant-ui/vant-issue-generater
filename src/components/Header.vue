<template>
  <ALayoutHeader>
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
        name: key
      })
    }
  }
}
</script>
<style scoped lang="scss">
</style>
