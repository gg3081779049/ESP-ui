<template>
  <div :class="`theme-switch theme-switch-${theme}`"
  @click="switchTheme">
    <div class="theme-switch-icon">
      <SvgIcon :icon-class="`theme-switch-${theme}`" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'ThemeSwitch',
  created() {
    if (this.$store.state.settings.isActivateAnimation) {
      let style = document.createElement('style');
      style.innerHTML = `
        ::view-transition-new(root),
        ::view-transition-old(root) {
          animation: none;
        }`;
      document.head.appendChild(style);
    }
  },
  computed: { ...mapGetters(['theme']) },
  methods: {
    ...mapMutations(['changeTheme']),
    switchTheme() {
      this.changeTheme(this.theme === 'light' ? 'dark' : 'light');
    },
  }
}
</script>

<style scoped>
.theme-switch {
  width: 40px;
  height: 22px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.theme-switch-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.25s;
}

.theme-switch-icon svg {
  width: 12px;
  height: 12px;
  fill: var(--navbar-icon-color)
}

.theme-switch-light {
  background: #f0f0f0;
  border: 1px solid hsla(0, 0%, 33%, 0.651);
}
.theme-switch-light .theme-switch-icon {
  background: #ffffff;
  transform: translateX(2px);
}
.theme-switch-light:hover {
  border: 1px solid hsl(0, 0%, 33%);
}

.theme-switch-dark {
  background: #2f2f2f;
  border: 1px solid hsla(0, 0%, 66%, 0.651);
}
.theme-switch-dark .theme-switch-icon {
  background: #1a1a1a;
  transform: translateX(20px);
}
.theme-switch-dark:hover {
  border: 1px solid hsl(0, 0%, 66%);
}
</style>
