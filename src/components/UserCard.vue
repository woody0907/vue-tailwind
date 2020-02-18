<template>
<li class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move">
       <div class="flex items-center">
          <img class="w-10 h-10 rounded-full" :src="user.avatar" :alt="user.name">
          <p class="ml-2 text-gray-700 font-semibold font-sans tracking-wide">{{user.name}}</p>
         </div>
</li>
</template>

<script>
import {EditIcon,Trash2Icon} from "vue-feather-icons";
export default {
    name:"UserCard",
    components:{
        EditIcon,
        Trash2Icon,
    },
    props:{
        user:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>