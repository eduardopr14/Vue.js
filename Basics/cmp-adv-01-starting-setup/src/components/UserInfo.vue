<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- <style> afeta todos os componentes, não só os de UserInfo -->
<!-- <style scoped> afeta apenas os componentes de UserInfo -->