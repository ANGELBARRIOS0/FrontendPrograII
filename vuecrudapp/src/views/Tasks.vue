<template>
  <div>
    <h1>Administrador de tareas</h1>
    <table id="tasks" class="ui green table">
      <thead>
        <tr>
         <th>  <i class="calendar plus icon"></i>Tarea</th>
          <th> <i class="info circle icon"></i>Detalle</th>
          <th> <i class="eye icon"></i></th>
          <th> <i class="edit icon"></i></th>
          <th> <i class="trash icon"></i></th>
        </tr>
      </thead>
      <tr v-for="(task, i) in tasks" :key="i">
        <td>{{ task.task1 }}</td>
        <td>{{ task.task2 }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: task._id }}" class="ui inverted green button">Ver</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: task._id }}" class="ui inverted primary button">Editar</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(task._id)">
          <a :href="`/tasks/${task._id}`" class="ui inverted red button">Eliminar</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers';
export default {
  name: 'tasks',
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Estas seguro?');
      if (!sure) return;
      await api.deletetask(id);
      this.flash('Tarea eliminada exitosamente!', 'success');
      const newtasks = this.tasks.filter(task => task._id !== id);
      this.tasks = newtasks;
    }
  },
  async mounted() {
    this.tasks = await api.gettasks();
  }
};
</script>