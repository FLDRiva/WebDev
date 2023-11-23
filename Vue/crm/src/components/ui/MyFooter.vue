<template>
  <div class="container">
    <p>
      by Andrey Revin
    </p>
    <div class="social">
      <a href="mailto:vacifrik6767@gmail.com">
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>
      <a href="https://vk.com/anrevin" target="_blank">
        <i class="fa fa-vk" aria-hidden="true"></i>
      </a>
      <a href="https://t.me/rivasr" target="_blank">
        <i class="fa fa-telegram" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      outline: none;
      color: #bfbdbd;
      &:hover {
        color: blue;
      }
    }
    p {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      font-size: 16px;
    }
    .social {
      display: flex;
      gap: 1vw;
      @media (max-width: 767px) {
        gap: 7vw;
      }
      i {
        font-family: fontawesome !important;
      }
    }
  }

</style>