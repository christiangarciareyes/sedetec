<template>
  <div class="project">
    <div class="project-card">
      <a class="project-icon" target="_blank" :href="project.url">
        <Icon
          :name="project.icon"
          :colorIcon="project.iconColor"
          :colorBackground="project.color"
        />
      </a>
    </div>
    <a :href="project.url" target="_blank" class="project-title text-base md:text-xl">{{ project.name }}</a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  &:hover {
    .icon-svg {
      transform: translate(-5px, -5px);
    }
  }
  &-icon {
    width: 85px;
    height: 85px;
    display: flex;
    justify-content: center;
    margin: 0 auto 1rem;
  }
  &-title {
    color: white;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
}
</style>
