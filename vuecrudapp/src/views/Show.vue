<template>
  <div>
    <h1>Ver tarea</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="tasks icon"></i>Tarea
      </div>
      <input type="text" readonly  :value="task.task1"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i>Detalle
      </div>
      <input type="text" readonly  :value="task.task2"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Editar tarea
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers';
export default {
  name: 'show',
  data() {
    return {
      task: ''
    };
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>