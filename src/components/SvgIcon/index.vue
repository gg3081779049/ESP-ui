<template>
  <svg :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${iconClass}`" />
  </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconClass: { type: String, required: true },
        className: { type: String, default: 'svg-icon' }
    }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
