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
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
}
@media only screen and (min-device-width:768px) and (max-device-width:1024px) {

}

@media (max-width: 767px) {
  
}

</style>