<template>
  <div class="container">
    <div class="flex">
      <div class="img-wrapper">
        <img 
        v-if="isCatVisible" 
        :class="imgFilters"
        :style="imgStyles"
        src="../assets/images/cats_1.jpg" 
        class="cats">
        <p v-else>Кажется я попал :D</p>
      </div>
      <div class="controls">
        <h1>Селфи с друзьями</h1>
        <h2>Фильтры</h2>
        <div class="btn_group flex">
          <button 
          type="button"
          :class="imgFilters.sepia ? 'active' : ''"
          @click="imgFilters.sepia != imgFilters.sepia"
          >
            Сепия
          </button>
          <button 
          type="button"
          :class="imgFilters.border ? 'active' : ''"
          @click="imgFilters.border != imgFilters.border"
          >
            Рамка
          </button>
          <button 
          type="button"
          :class="imgFilters.small ? 'active' : ''"
          @click="imgFilters.small != imgFilters.small"
          >
            Уменьшить
          </button>
        </div>
        <h2>Размер</h2>
        <div class="btn-group">
          <label>
            Ширина: {{ imgSizes.currentWigth }}
            <input 
            type="range"
            :value="imgSizes.currentWigth"
            @input="imgSizes.currentWigth = $event.target.value"
            :min="imgSizes.minWigth"
            :max="imgSizes.maxWigth"
            >
          </label>
          <label>
            Высота: {{ imgSizes.currentHeigth }}
            <input 
            type="range"
            :value="imgSizes.currentHeigth"
            @input="imgSizes.currentHeigth = $event.target.value"
            :min="imgSizes.minHeigth"
            :max="imgSizes.maxHeigth"
            >
          </label>
        </div>
        <button @click="isCatVisible = !isCatVisible">Показать / Спрятать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoRedactor',
  data() {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false,
      },
      imgSizes: {
        maxWigth: 600,
        maxHeigth: 480,
        currentWigth: 680,
        currentHeigth: 480,
      }
    }
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWigth}px`,
        heigth: `${this.imgSizes.currentHeigth}px`,
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .container {
    margin-top: 40px;
  }
  .controls {
    margin-left: 20px;
  }
  .img-wrapper {
    width: 640px;
    height: 480px;
    background-color: #cecece;
    .cats {
      width: 640px;
    }
  }
  img {
    transition: 0.2s ease;
    &.sepia {
      filter: sepia(100%);
    }
    &.border {
      border: 5px dashed #464646
    }
    &.small {
      width: 400px;
    }
  }
  button {
    margin-right: 10px;
    &.active {
      background-color: #dbdbdb;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  .btn-group {
    margin-bottom: 20px;
  }
  input[type="range"] {
    display: block;
  }
</style>
