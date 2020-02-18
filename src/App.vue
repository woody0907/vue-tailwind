<template>
  <div id="app" class="min-h-screen w-scree bg-gray-200 flex items-center justify-center">
    <div class="w-full max-w-md text-center px-3">
      <p>List 1</p>
      <draggable ghost-class="moving-card" tag="ul" class="w-full max-w-md" :list="users" :animation="200" group="all-users">
        <UserCard v-for="user in users" :key="user.id" :user="user"></UserCard>
      </draggable>
    </div>
    <div class="w-full max-w-md ml-12 text-center">
      <p>List 2</p>
      <draggable ghost-class="moving-card" tag="ul" class="w-full max-w-md" :list="users2" :animation="200" group="all-users">
        <UserCard v-for="user in users2" :key="user.id" :user="user"></UserCard>
      </draggable>
    </div>
  </div>
</template>

<script>
import "./assets/css/tailwind.css";
import Draggable from "vuedraggable";
import UserCard from "./components/UserCard.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Draggable,
    UserCard
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "woody",
          avatar:
            "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        },
        {
          id: 2,
          name: "charliy",
          avatar:
            "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        }
      ],
      users2: [
        {
          id: 3,
          name: "woody2",
          avatar:
            "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        },
        {
          id: 4,
          name: "charliy2",
          avatar:
            "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        }
      ]
    };
  },
  mounted(){
      this.$axios({
      method: "get",
      url: "http://localhost:8080/structr/rest/PD/ui?pageSize=10&page=1", // 接口地址
      // data: {
      //   'query': "MATCH (tom:PD {name: '史亮'})-[a:manage]->(p)-[b:participate|:manage]->(s) RETURN tom.id as id,tom.name as name"   // 传接口参数
      // },
      headers: {
        'X-User':"admin",
        'X-Password':"admin",
      }
    })
      .then(response => {
        console.log(response.data.result, "success");   // 成功的返回      
        this.users = response.data.result;
      })
      .catch(error => console.log(error, "error")); // 失败的返回


  }
};
</script>

<style>
  .moving-card {

      @apply bg-blue-100 opacity-50 border border-blue-500 bg-gray-200 ;

  }
  
</style>



