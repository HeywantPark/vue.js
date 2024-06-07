<template>
  <div>
    <ChildSlot>
      <h1>테스트 너는 잘 가니?</h1>
      <img
        src="https://cafe24.poxo.com/ec01/bowell/S0BXe1Ab6qfFvoiA/GklKo+MHjx0tc5x+WH964JoqW5m0bghCzLUllCsU2aj6h2iM2Dq6AW+56of9MQXHSlyyw==/_/web/product/big/202304/c39ef2eb4aa6878a76fcfe7bd2142a81.jpg"
      />
    </ChildSlot>
  </div>
</template>

<script>
import ChildSlot from './ChildSlot.vue';

export default {
  name: 'ParentSlot',
  components: { ChildSlot },
};
</script>

<style lang="scss" scoped></style>
