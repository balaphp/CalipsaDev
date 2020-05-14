<template>
  <v-layout>
      <div>
        <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Source</th>
                <th>Response Time</th>
                <th>Message</th>
                <th>Processed</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="item in tableData">
               <td>{{item.source}}</td>
               <td>{{item.duration}} ms</td>
                <td>{{item.message}}</td>
                
                <td>{{item.processed}}</td>
            </tr>

        </tbody>
      
    </table>
      </div>
  </v-layout>
</template>

<script>

import VLayout from './layouts/Default.vue';

export default {
 components: {
    VLayout
  },
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
      this.axios.get('http://localhost/dashboard').then(res => {
          this.tableData = res.data
      })
  }
};
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>