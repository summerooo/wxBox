<template>
  <div class="all">
    <div class="hero-bg" style="">
      <div class="gs"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.all {
  width: 100%;
  height: 100%;
  .hero-bg{
    background-image: url('https://mobike.com//cn/assets/themes/moby/img/landing/hero-bg-4.jpg');
    background-position: 38% 31%;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
}
@supports (-webkit-backdrop-filter: blur(3px)) {
  .gs {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    -webkit-backdrop-filter: blur(3px);
  }
}
@media (max-width: 1080px) {
  .all {
    height: 585px;
    .hero-bg {
      background-position: center center;
    }
  }
}
@media (max-width: 640px) {
  .all {
    height: 480px !important;
    .hero-bg {
      background-position: 77% 30%;
    }
  }
}

</style>
