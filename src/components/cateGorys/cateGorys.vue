<template>
  <div>
    这是首页导航的页面
  </div>
</template>

<script>
export default {
    props : ["navIndex"],
    mounted() {
        console.log(this.navIndex)
    },
}
</script>

<style lang="stylus" scoped>

</style>