<template>
  <div class="preview">
    <AModal
      title="Issue 预览"
      :visible="true"
      @cancel="$emit('close')"
    >
      <p>预览</p>

      <template slot="footer">
        <AButton type="primary" @click="handleCreate">
          创建
        </AButton>
      </template>
    </AModal>
  </div>
</template>
<script>
export default {
  props: {
    formValue: Object
  },
  data () {
    return {}
  },
  methods: {
    handleCreate () {

    }
  }
}
</script>
<style scoped lang="scss">
</style>
