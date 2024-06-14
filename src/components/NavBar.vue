<template>
  <nav class="bg-white border-gray-200 lg:px-6 relative flex flex-wrap items-center justify-between px-2 py-3 dark:bg-gray-800">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a href="#" class="flex items-center">
          <img src="../assets/techscav.png" class="mr-0 w-6 h-12 sm:h-9" alt="techscav" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tech Scavangers</span>
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <!--  -->
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col font-medium my-2 lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center font-bold  text-white hover:opacity-75" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-centere font-bold leading-snug text-white hover:opacity-75" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75" href="/team">
              Team
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>