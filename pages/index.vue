<template>
  <div class="page page-welcome container mx-auto">
    <div class="wrap-logo m-t-15 mb-10">
      <a href="https://www.tc.gob.pe" target="_blank" class="mb-10">
        <img
          width="250"
          src="/assets/images/tc-logo.png"
          alt="escudo"
          class="mx-auto"
        />
        <br />
        <img
          width="250"
          src="https://tc.gob.pe/intranet/iconos/txtLogoBlanco.png"
          alt="escudo"
          class="mx-auto"
        />
      </a>
    </div>
    <hr />
    <h1
      class="text-base md:text-xl font-bold mt-5 text-center mb-5 tracking-wider"
    >
      Te invitamos a conocer todos servicios.
    </h1>
    <hr />
    <div class="projects projects-list">
      <Project
        v-for="(project, index) in projects"
        :project="project"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const projects = await $axios.$get(`/assets/help/webs.json`)
    return { projects }
  },
  head: {
    title: 'Tribunal Constitucional',
  },
}
</script>

<style lang="scss" scoped>
hr {
  width: 150px;
  margin: 0 auto;
  border-color: #ffffff24;
}
.page {
  &-welcome {
    z-index: 2;
    padding: 0rem 1rem;
    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
      padding: 5rem 1rem;
    }
  }
}
.projects {
  &-list {
    display: grid;
    max-width: 65%;
    margin: 2rem auto 0;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    row-gap: 80px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 85%;
    }
  }
}
</style>
