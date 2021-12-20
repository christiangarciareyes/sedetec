<template>
  <div class="main text-white">
    <div class="header"></div>
    <Nuxt />

    <div class="footer flex items-center justify-center px-5">
      <span class="text-sm md:text-lg text-center">
        © 2021
        <a href="https://www.tc.gob.pe/">Tribunal Constitucional del Perú</a> -
        Desarrollado por OTI
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: 'Raleway', sans-serif;
}
.main {
  .header {
    height: 45px;
    background: white;
    z-index: 1;
    width: 100%;
    background-image: url(/assets/images/quechua-pattern.png);
    background-size: contain;
    @media (max-width: 765px) {
      background-size: cover;
    }
  }
  background-image: url(/assets/images/cover.jpg);
  background-position: 50%;
  background-size: cover;
  min-height: 100vh;
  max-height: 1500px;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    background-color: rgba(3, 3, 3, 0.5);
    backdrop-filter: blur(10px);
  }
  .footer {
    width: 100%;
    height: 75px;
    background: #1d242a;
    z-index: 1;
  }
}
</style>
