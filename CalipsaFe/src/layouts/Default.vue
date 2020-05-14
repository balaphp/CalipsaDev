<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link
        class="navbar-brand"
      >
        Calipsa
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
  
      >
        <span class="navbar-toggler-icon"/>
      </button>

      <div
        :class="{ show : menuCollapsed}"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto">
         
            <a class="nav-link">
              Home
            </a>
          
        </ul>
       
      </div>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot/>
        </div>
      </div>
    </div>

       <div class="footer">
      <p>&#169; 2020 All Rights Reserverd</p>
</div>
  
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the Other pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: 'DefaultLayout',

 
  data() {
    return {
      menuCollapsed: false,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
   
  },
};
</script>
<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #343a40 ;
  color: white;
  text-align: center;
}
</style>
