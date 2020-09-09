<template>
  <div id="app">
    <registration v-show="!isSubmitted"/>
    <hall v-show="isSubmitted" />
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>
<script>
import { bus } from './main';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import registration from './components/registration.vue'
import hall from './components/hall.vue'
import modal from './components/modal.vue'
export default {
  name: 'App',
  components: {
    registration, hall, modal
  },
  data () {
      return {
        isModalVisible: '',
        isFormClean: '',
        isSubmitted: ''
      };
    },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
        this.isFormClean = true;
      }
    },
  created() {
    bus.$on('submitted', (data) => {
      this.isSubmitted = data;
    }),
    bus.$on('isModalVisible', (data) => {
      this.isModalVisible = data;
    })
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.btn-confirm, .btn-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    justify-items: flex-end;
    width: 100px;
    height: 30px;
    box-shadow: 0 0 1 1 #000;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
}

.btn-confirm {
    background-color: rgba(28, 44, 78, 0.7);
    color: #fff;
    margin-left: 5px;
}

.btn-confirm:hover, .btn-confirm:active {
    background-color: rgb(216, 114, 67);
    outline: none;
}

.btn-cancel {
    background-color: rgba(139, 138, 138, 0.3);
    color: #fff;
}
</style>