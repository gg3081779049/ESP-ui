<template>
  <div :class="`theme-switch theme-switch-${theme}`" @click="switchTheme">
    <SvgIcon icon-class="theme-switch-light" :style="{ transform: theme === 'light' ? 'scale(1) rotate(360deg)' : 'scale(0)' }" />
    <SvgIcon icon-class="theme-switch-dark" :style="{ transform: theme === 'light' ? 'rotate(360deg) scale(0)' : '' }" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "ThemeSwitch",
  created() {
    if (this.$store.state.settings.isActivateAnimation) {
      let style = document.createElement("style");
      style.innerHTML = `
        ::view-transition-new(root),
        ::view-transition-old(root) {
          animation: none;
        }`;
      document.head.appendChild(style);
    }
  },
  computed: { ...mapGetters(["theme"]) },
  methods: {
    ...mapMutations(["changeTheme"]),
    switchTheme() {
      this.changeTheme(this.theme === "light" ? "dark" : "light");
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-switch {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  user-select: none;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    fill: var(--navbar-icon-color);
    transition: transform 500ms;
  }
}

.theme-switch-light {
  background: #f0f0f0;
  border: 1px solid hsla(0, 0%, 33%, 0.651);
  &:hover {
    border: 1px solid hsl(0, 0%, 33%);
  }
}

.theme-switch-dark {
  background: #2f2f2f;
  border: 1px solid hsla(0, 0%, 66%, 0.651);
  &:hover {
    border: 1px solid hsl(0, 0%, 66%);
  }
}
</style>
