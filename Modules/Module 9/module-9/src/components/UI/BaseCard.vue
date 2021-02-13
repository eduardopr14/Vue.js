<template>
  <div>
    <header>
      <!-- Caso não deseje mostra a tag header caso ela não exista no template que a importa, utilizar: -->
      <!-- <header v-if="$slots.header"> -->
      <slot name="header">
        <!-- A tag h2 só aparece caso o arquivo que esteja utilizando o BaseCard não possua um template com v-slot:header -->
        <h2>The Default</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // Mostra se os componentes estão vindo do arquivo que utiliza o mesmo
  mounted() {
    // console.log(this.$slots);
    // console.log(this.$slots.header);
    // console.log(this.$slots.default);
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>