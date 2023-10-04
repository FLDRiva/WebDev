<template>
  <div class="one-page">
    <router-link to="/login">
      <div class="page-block">
        <span>
          Go to login page
        </span>
      </div>
    </router-link>
  </div>
</template>


<script>


</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
}
.page-block {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  span {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    font-size: 20px;
  }
}


</style>