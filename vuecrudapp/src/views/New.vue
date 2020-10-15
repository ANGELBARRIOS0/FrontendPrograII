<template>
  <div>
    <h1>Nueva tarea</h1>
    <task-form @createOrUpdate="createOrUpdate"></task-form>
  </div>
</template>

<script>
import taskForm from '../components/Taskform.vue';
import { api } from '../helpers/Helpers';
export default {
  name: 'new-task',
  components: {
    'task-form': taskForm
  },
  methods: {
    createOrUpdate: async function(task) {
      const res = await api.createtask(task);
      this.flash('Tarea creada', 'success');
      this.$router.push(`/tasks/${res._id}`);
    }
  }
};
</script>