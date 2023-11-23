<template>
  
    <div class="base-modal">
      <div class="base-modal-overlay"></div>
      <div class="base-modal-container" v-click-outside="closeModal">
        <div class="base-modal-header">
          <i @click="closeModal" class="fa fa-times" aria-hidden="true"></i>
          {{ headerText }}
        </div>
        <div class="base-modal-content">
          <slot />
        </div>
      </div>
    </div> 

</template>



<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'BaseModal',
  data() {
    return {
    }
  },
  props: {
    headerText: {
      type: String,
      default: ''
    }
  },
  directives: {
      clickOutside: vClickOutside.directive
    },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  }
}



</script>




<style lang="scss" scoped>
 .base-modal {
    position: fixed;
    .base-modal-overlay {
      width: 100vw;
      height: 100vh;
      background-color: #000;
      opacity: 0.4;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
    }
    .base-modal-container {
      width: 35%;
      height: 45%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 2;
      background: #b5b5b5;
      border: 1px solid rgba(128, 128, 128, 0.2784313725);
      border-radius: 8px;
      box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
      transition: all .4s ease-in-out;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2vh;
      @media (max-width: 1366px) {
        width: 50%;
        height: 61%;
      }
      @media (max-width: 1024px) {
        width: 68%;
      }
      @media (min-width: 320px) and (max-width: 430px) {
        width: 95%;
        height: 57%;
      }
      .base-modal-header {
        position: relative;
        i {
          position: absolute;
          margin-left: 310px;
          cursor: pointer;
        }
      }
    }
 }

</style>