<template>
  <div>
    <FancyPhotoBox>
      <template v-slot:title>
        <h1>귀여운 강아지 왈왈왈</h1>
      </template>
      <template v-slot:photo>
        <img
          src="https://cafe24.poxo.com/ec01/bowell/S0BXe1Ab6qfFvoiA/GklKo+MHjx0tc5x+WH964JoqW5m0bghCzLUllCsU2aj6h2iM2Dq6AW+56of9MQXHSlyyw==/_/web/product/big/202304/c39ef2eb4aa6878a76fcfe7bd2142a81.jpg"
          alt="강아지 왈왈"
        />
      </template>
    </FancyPhotoBox>
  </div>
</template>

<script>
import FancyPhotoBox from './FancyPhotoBox.vue';

export default {
  name: 'ParentFancyPhotoBox',
  components: { FancyPhotoBox },
};
</script>

<style lang="scss" scoped></style>
