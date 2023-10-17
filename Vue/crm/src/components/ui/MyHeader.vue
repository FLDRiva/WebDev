<template>
  <div class="container">
    <router-link to="/">
      <p>SYNGEN</p>
    </router-link>
    
  </div>
</template>


<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #e5e5e5;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
    p {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      font-size: 16px;
    }
  }

</style>