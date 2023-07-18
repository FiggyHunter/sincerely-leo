<template>
  <header>
    <Transition name="slide" mode="in-out">
      <nav class="main-navigation limiter" v-if="mainNavigationVisible">
        <a href="/" :class="[`main-navigation__link`]">Sincerely, Leo. </a>
        <div class="main-navigation__mobile-ctr">
          <NavigationDarkModeButtonVue />
          <button @click="openMenu" aria-label="open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              :class="[`menu`, { 'menu--active': menuVisible }]"
            >
              <path
                d="M15.4907 0.214745C15.6935 0.35083 15.8455 0.574434 15.9115 0.833662C16.0526 1.38842 15.8896 1.94317 15.5076 2.20802L15.3482 2.31855L11.6127 2.34978C7.92354 2.38062 7.87532 2.37981 7.73204 2.28828C7.42391 2.09145 7.26487 1.75166 7.26088 1.28165C7.25707 0.834294 7.39639 0.503786 7.6829 0.280484C7.78962 0.197309 7.95591 0.191724 11.5619 0.150083L15.3294 0.106571L15.4907 0.214745ZM15.5409 6.11625C15.7436 6.2521 15.8956 6.47571 15.9616 6.73502C16.1028 7.28977 15.9398 7.84452 15.5578 8.10938L15.3984 8.21991L9.09765 8.27294C2.8278 8.32571 2.79621 8.32546 2.65183 8.23325C2.34379 8.03646 2.18473 7.69671 2.18057 7.22661C2.17671 6.7867 2.31298 6.45533 2.58678 6.23915L2.71419 6.13855L9.0469 6.0734L15.3796 6.00824L15.5409 6.11625ZM15.591 12.0176C15.7937 12.1534 15.9458 12.377 16.0118 12.6364C16.1529 13.1911 15.9899 13.7459 15.608 14.0107L15.4486 14.1213L8.12175 14.183C0.819609 14.2446 0.794445 14.2444 0.649844 14.152C0.341799 13.9553 0.182744 13.6155 0.178582 13.1454C0.174721 12.7055 0.311006 12.3741 0.584797 12.1579L0.712204 12.0573L8.07099 11.9835L15.4298 11.9097L15.591 12.0176Z"
              />
            </svg>
          </button>
        </div>
        <div class="main-navigation__desktop-ctr">
          <a href="/blog" :class="{ linkActive: postsActive }">Posts</a>
          <a href="/categories" :class="{ linkActive: categoryActive }"
            >Categories</a
          >
          <a href="/about" :class="{ linkActive: aboutActive }">About me</a>

          <NavigationDarkModeButtonVue />
        </div>
      </nav>
    </Transition>
    <Transition name="appear" mode="in-out">
      <div v-if="menuVisible" :class="[`mobile-menu`]">
        <nav class="mobile-menu__navigation">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import NavigationDarkModeButtonVue from "@/components/navigation/DarkModeButton.vue";
const aboutActive = ref(false);
const categoryActive = ref(false);
const postsActive = ref(false);
const windowWidth = ref(0);
const mainNavigationVisible = ref(true);

watch(windowWidth, () => {
  if (windowWidth.value >= 900) {
    menuVisible.value = false;
  }
});
const menuVisible = ref(false);
const openMenu = function () {
  menuVisible.value = !menuVisible.value;
};

onMounted(() => {
  const URL = window.location.pathname.slice(1).toLowerCase();
  if (URL === "about") aboutActive.value = true;
  if (URL === "categories") categoryActive.value = true;
  if (URL === "blog") postsActive.value = true;
  let lastScroll = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuVisible.value) {
      menuVisible.value = false;
    }
  });
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
  window.addEventListener("scroll", (e) => {
    if (!menuVisible.value) {
      if (window.scrollY < lastScroll) {
        mainNavigationVisible.value = true;
        lastScroll = window.scrollY;
      } else {
        mainNavigationVisible.value = false;
        lastScroll = window.scrollY;
      }
    }
  });
});
</script>

<style lang="scss" scoped>
@use "../../assets/sass/components/_navigation.scss" as *;
</style>
