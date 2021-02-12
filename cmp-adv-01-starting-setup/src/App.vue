<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <h2>{{ slotProps['another-prop'] }}</h2>
      </template>
    </course-goals>
    <!--
      <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <h2>{{ slotProps['another-prop'] }}</h2>
      </course-goals>
    -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals
    // 'the-header': TheHeader
    // Pode ser escrito como TheHeader: TheHeader e ser utilizado com a tag <TheHeader /> ou <the-header>
    // Pode ser escrito apenas como TheHeader, sendo interpretado automaticamente como mostrado na linha de cima
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>