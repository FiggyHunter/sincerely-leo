<template>
  <header>
    <Transition name="slide" mode="in-out">
      <nav class="main-navigation" v-if="mainNavigationVisible">
        <a href="/" :class="[`main-navigation__link`]">Sincerely, Leo. </a>
        <div class="main-navigation__mobile-ctr">
          <a aria-label="go to my photos" href="/photo">
            <svg
              class="camera-container"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 135.45763 114.3118"
              version="1.1"
              id="svg5"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <defs id="defs2" />
              <g id="layer1" transform="translate(158.63773,-309.44396)">
                <path
                  :class="['camera', { 'menu--active': photoActive }]"
                  style="stroke-width: 0.264583"
                  d="m
              -148.4531,423.46419 c -4.80648,-0.91658 -9.00479,-5.20823
              -9.9024,-10.12255 -0.19606,-1.0734 -0.2853,-11.86838
              -0.28216,-34.13125 0.005,-35.48322 -0.0277,-34.66463
              1.50222,-37.53027 1.10309,-2.0661 3.59353,-4.44655
              5.70431,-5.45239 1.56343,-0.74501 3.02979,-1.06028
              11.71282,-2.51822 5.4591,-0.91663 9.97198,-1.71396
              10.02862,-1.77184 0.0566,-0.0579 1.43146,-3.43899 3.05515,-7.51357
              1.62369,-4.07459 3.33127,-8.04614 3.79462,-8.82569
              1.67733,-2.82194 4.79742,-5.04592 8.04431,-5.73394
              2.62214,-0.55563 45.116751,-0.56299 47.733871,-0.008
              3.19156,0.67648 5.9466,2.54312 7.79496,5.28135 0.50085,0.74198
              2.29463,4.83357 3.98618,9.09244 2.5148,6.33156 3.17729,7.76628
              3.63351,7.86888 0.30688,0.069 4.81524,0.83527 10.01858,1.70278
              8.25107,1.37565 9.68873,1.686 11.24479,2.4275 2.10769,1.00437
              4.59897,3.38624 5.70132,5.45096 1.52997,2.86564 1.49721,2.04706
              1.50222,37.53029 0.003,22.26286 -0.0861,33.05784 -0.28216,34.13124
              -0.91965,5.035 -5.11175,9.22709 -10.14674,10.14674
              -2.03375,0.37147 -112.891651,0.34811 -114.844021,-0.0242 z m
              114.714901,-8.75733 c 0.491,-0.33089 1.16345,-1.00334
              1.49433,-1.49434 l 0.60161,-0.89273 v -32.7777 c 0,-35.79311
              0.0864,-33.82516 -1.54518,-35.19804 -1.02254,-0.86041
              -0.33217,-0.7119 -13.78778,-2.96599 l -11.23193,-1.88157
              -3.90694,-9.75902 c -2.15602,-5.38545 -4.17755,-10.04879
              -4.51078,-10.40561 -1.35614,-1.45213 -0.27172,-1.39005
              -24.28405,-1.39005 -24.012331,0 -22.927911,-0.0621
              -24.284051,1.39005 -0.33344,0.35704 -2.35347,5.01871
              -4.51097,10.41004 l -3.90712,9.76345 -11.98422,2.01743 c
              -12.63316,2.12667 -12.68349,2.14033 -13.9025,3.77296
              -0.54329,0.72763 -0.54579,0.86578 -0.61467,33.87285 l
              -0.0692,33.14225 0.60463,0.8972 c 0.33254,0.49347 1.00635,1.16793
              1.49735,1.49882 l 0.89273,0.60161 h 56.277991 56.27799 z m
              -61.13947,-8.13431 c -8.149041,-1.13407 -14.959551,-4.54451
              -20.389741,-10.2104 -4.51253,-4.70838 -7.37701,-10.12126
              -8.74521,-16.52541 -0.83495,-3.90818 -0.83349,-9.82112
              0.003,-13.74077 2.88292,-13.50268 13.29904,-23.68813
              26.966691,-26.36949 3.09917,-0.60801 9.16808,-0.60801 12.26726,0
              13.92014,2.7309 24.38413,13.19488 27.11502,27.11503
              0.60801,3.09917 0.60801,9.16808 0,12.26725 -1.32134,6.73526
              -4.24915,12.41448 -8.88057,17.22608 -4.88824,5.07842
              -10.76635,8.3433 -17.48892,9.71385 -3.13742,0.63964
              -8.24396,0.88624 -10.84791,0.52386 z m 10.31862,-8.97691 c
              4.41533,-1.15526 7.94096,-3.16362 11.3003,-6.43718
              3.68993,-3.59571 5.69055,-7.06588 7.12725,-12.36249
              0.68127,-2.51162 0.67338,-8.93721 -0.0143,-11.64167
              -1.81356,-7.13235 -6.35968,-13.07992 -12.61087,-16.49846
              -3.99126,-2.18266 -7.01555,-2.92151 -12.01997,-2.93651
              -4.32471,-0.013 -6.31249,0.33909 -9.730231,1.72332
              -7.22596,2.92662 -12.96039,9.47731 -15.04157,17.18262
              -0.87936,3.25572 -0.87936,9.444 0,12.69973 1.15421,4.27334
              3.18584,7.92349 6.09155,10.94447 4.0035,4.16231 8.3136,6.57824
              13.785451,7.72714 2.59683,0.54524 8.27969,0.34018
              11.11237,-0.40097 z m -22.139891,-22.81836 c -0.89841,-0.43435
              -1.22431,-1.54709 -1.00873,-3.44425 0.91723,-8.07213
              7.07325,-14.22741 15.156651,-15.15482 2.02078,-0.23184
              3.05446,0.12491 3.50358,1.20921 0.65176,1.57347 -0.5278,2.88421
              -2.60153,2.89086 -2.08853,0.007 -4.83073,1.03878 -6.90899,2.60036
              -2.920851,2.19469 -5.037441,6.11791 -5.047821,9.35644
              -0.004,1.2923 -0.44249,2.20169 -1.23539,2.56296 -0.77109,0.35133
              -1.09563,0.34771 -1.85777,-0.0208 z"
                  id="path302"
                />
              </g>
            </svg>
          </a>
          <NavigationDarkModeButtonVue />

          <button @click="openMenu" aria-label="open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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

          <a aria-label="go to my photos" class="camera-link" href="/photo">
            <svg
              :class="[`camera-container`]"
              viewBox="0 0 135.45763 114.3118"
              version="1.1"
              id="svg5"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <defs id="defs2" />
              <g id="layer1" transform="translate(158.63773,-309.44396)">
                <path
                  :class="['camera', { 'menu--active': photoActive }]"
                  style="stroke-width: 0.264583"
                  d="m -148.4531,423.46419 c
              -4.80648,-0.91658 -9.00479,-5.20823 -9.9024,-10.12255
              -0.19606,-1.0734 -0.2853,-11.86838 -0.28216,-34.13125
              0.005,-35.48322 -0.0277,-34.66463 1.50222,-37.53027
              1.10309,-2.0661 3.59353,-4.44655 5.70431,-5.45239 1.56343,-0.74501
              3.02979,-1.06028 11.71282,-2.51822 5.4591,-0.91663
              9.97198,-1.71396 10.02862,-1.77184 0.0566,-0.0579 1.43146,-3.43899
              3.05515,-7.51357 1.62369,-4.07459 3.33127,-8.04614
              3.79462,-8.82569 1.67733,-2.82194 4.79742,-5.04592
              8.04431,-5.73394 2.62214,-0.55563 45.116751,-0.56299
              47.733871,-0.008 3.19156,0.67648 5.9466,2.54312 7.79496,5.28135
              0.50085,0.74198 2.29463,4.83357 3.98618,9.09244 2.5148,6.33156
              3.17729,7.76628 3.63351,7.86888 0.30688,0.069 4.81524,0.83527
              10.01858,1.70278 8.25107,1.37565 9.68873,1.686 11.24479,2.4275
              2.10769,1.00437 4.59897,3.38624 5.70132,5.45096 1.52997,2.86564
              1.49721,2.04706 1.50222,37.53029 0.003,22.26286 -0.0861,33.05784
              -0.28216,34.13124 -0.91965,5.035 -5.11175,9.22709
              -10.14674,10.14674 -2.03375,0.37147 -112.891651,0.34811
              -114.844021,-0.0242 z m 114.714901,-8.75733 c 0.491,-0.33089
              1.16345,-1.00334 1.49433,-1.49434 l 0.60161,-0.89273 v -32.7777 c
              0,-35.79311 0.0864,-33.82516 -1.54518,-35.19804 -1.02254,-0.86041
              -0.33217,-0.7119 -13.78778,-2.96599 l -11.23193,-1.88157
              -3.90694,-9.75902 c -2.15602,-5.38545 -4.17755,-10.04879
              -4.51078,-10.40561 -1.35614,-1.45213 -0.27172,-1.39005
              -24.28405,-1.39005 -24.012331,0 -22.927911,-0.0621
              -24.284051,1.39005 -0.33344,0.35704 -2.35347,5.01871
              -4.51097,10.41004 l -3.90712,9.76345 -11.98422,2.01743 c
              -12.63316,2.12667 -12.68349,2.14033 -13.9025,3.77296
              -0.54329,0.72763 -0.54579,0.86578 -0.61467,33.87285 l
              -0.0692,33.14225 0.60463,0.8972 c 0.33254,0.49347 1.00635,1.16793
              1.49735,1.49882 l 0.89273,0.60161 h 56.277991 56.27799 z m
              -61.13947,-8.13431 c -8.149041,-1.13407 -14.959551,-4.54451
              -20.389741,-10.2104 -4.51253,-4.70838 -7.37701,-10.12126
              -8.74521,-16.52541 -0.83495,-3.90818 -0.83349,-9.82112
              0.003,-13.74077 2.88292,-13.50268 13.29904,-23.68813
              26.966691,-26.36949 3.09917,-0.60801 9.16808,-0.60801 12.26726,0
              13.92014,2.7309 24.38413,13.19488 27.11502,27.11503
              0.60801,3.09917 0.60801,9.16808 0,12.26725 -1.32134,6.73526
              -4.24915,12.41448 -8.88057,17.22608 -4.88824,5.07842
              -10.76635,8.3433 -17.48892,9.71385 -3.13742,0.63964
              -8.24396,0.88624 -10.84791,0.52386 z m 10.31862,-8.97691 c
              4.41533,-1.15526 7.94096,-3.16362 11.3003,-6.43718
              3.68993,-3.59571 5.69055,-7.06588 7.12725,-12.36249
              0.68127,-2.51162 0.67338,-8.93721 -0.0143,-11.64167
              -1.81356,-7.13235 -6.35968,-13.07992 -12.61087,-16.49846
              -3.99126,-2.18266 -7.01555,-2.92151 -12.01997,-2.93651
              -4.32471,-0.013 -6.31249,0.33909 -9.730231,1.72332
              -7.22596,2.92662 -12.96039,9.47731 -15.04157,17.18262
              -0.87936,3.25572 -0.87936,9.444 0,12.69973 1.15421,4.27334
              3.18584,7.92349 6.09155,10.94447 4.0035,4.16231 8.3136,6.57824
              13.785451,7.72714 2.59683,0.54524 8.27969,0.34018
              11.11237,-0.40097 z m -22.139891,-22.81836 c -0.89841,-0.43435
              -1.22431,-1.54709 -1.00873,-3.44425 0.91723,-8.07213
              7.07325,-14.22741 15.156651,-15.15482 2.02078,-0.23184
              3.05446,0.12491 3.50358,1.20921 0.65176,1.57347 -0.5278,2.88421
              -2.60153,2.89086 -2.08853,0.007 -4.83073,1.03878 -6.90899,2.60036
              -2.920851,2.19469 -5.037441,6.11791 -5.047821,9.35644
              -0.004,1.2923 -0.44249,2.20169 -1.23539,2.56296 -0.77109,0.35133
              -1.09563,0.34771 -1.85777,-0.0208 z"
                  id="path302"
                />
              </g>
            </svg>
          </a>
          <NavigationDarkModeButtonVue />
        </div>
      </nav>
    </Transition>
    <Transition name="appear" mode="in-out">
      <div v-show="menuVisible" :class="[`mobile-menu`]">
        <nav
          @touchstart.capture="handleTouchStart"
          @touchmove.prevent.capture="handleTouchMove"
          @touchend.capture="handleTouchEnd"
          class="mobile-menu__navigation"
        >
          <a href="/blog" class="box">
            <p>All posts >></p>
            <img
              height="231"
              width="222"
              alt="image for all posts"
              src="/all-posts.webp"
              loading="eager"
              decoding="auto"
              fetchpriority="high"
            />
          </a>
          <a href="/categories" class="box">
            <p>Categories >></p>
            <img
              height="166"
              width="222"
              alt="image for categories"
              src="/categories.webp"
              loading="eager"
              decoding="auto"
              fetchpriority="high"
            />
          </a>
          <a href="/about" class="box">
            <p>About me >></p>
            <img
              height="100"
              width="100"
              alt="image for about me"
              src="/about.webp"
              loading="eager"
              decoding="auto"
              fetchpriority="high"
            />
          </a>
        </nav>
      </div>
    </Transition>
  </header>
  <Transition name="ease-in" mode="in-out">
    <div @click="goTop()" v-if="goTopVisible" class="div">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 34"
        fill="none"
        class="arrow"
        height="30"
        width="30"
      >
        <path
          d="M8.91962 0.297456C8.53164 -0.0955988 7.89849 -0.0997131 7.50544 0.288267L1.10026 6.61074C0.707205 6.99872 0.703091 7.63187 1.09107 8.02492C1.47905 8.41798 2.1122 8.42209 2.50525 8.03411L8.19875 2.41414L13.8187 8.10763C14.2067 8.50068 14.8399 8.5048 15.2329 8.11682C15.626 7.72884 15.6301 7.09569 15.2421 6.70264L8.91962 0.297456ZM8.99998 33.0058L9.20791 1.00645L7.20796 0.993454L7.00002 32.9928L8.99998 33.0058Z"
        />
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import "@/assets/sass/components/_navigation.scss";
import { onMounted, ref, watch } from "vue";
import NavigationDarkModeButtonVue from "@/components/navigation/DarkModeButton.vue";

const aboutActive = ref(false);
const categoryActive = ref(false);
const postsActive = ref(false);
const photoActive = ref(false);
const windowWidth = ref(0);
const mainNavigationVisible = ref(true);
const goTopVisible = ref(false);
const menuVisible = ref(false);

watch(windowWidth, () => {
  if (windowWidth.value >= 900) {
    menuVisible.value = false;
  }
});

watch(menuVisible, () => {
  if (menuVisible.value) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";
});
const openMenu = function () {
  menuVisible.value = !menuVisible.value;
};

const goTop = () => {
  document.documentElement.scrollTop = 0;
};

onMounted(() => {
  const URL = window.location.pathname.slice(1).toLowerCase();
  if (URL === "about") aboutActive.value = true;
  if (URL === "categories") categoryActive.value = true;
  if (URL === "blog") postsActive.value = true;
  if (URL === "photo") photoActive.value = true;
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
      }
      if (window.scrollY > lastScroll) {
        mainNavigationVisible.value = false;
        lastScroll = window.scrollY;
      }
      if (!goTopVisible.value && window.scrollY > 50) {
        goTopVisible.value = true;
      }
      if (goTopVisible.value && window.scrollY < 50) {
        goTopVisible.value = false;
      }
    }
  });
});

const touchEnd = ref(0);
const touchStart = ref(0);
const touchThreshold = -50;

const handleTouchStart = function (e: Event) {
  touchStart.value = e.touches[0].clientY;
};

const handleTouchMove = function (e: Event) {
  touchEnd.value = e.touches[0].clientY;
};

const handleTouchEnd = function (e: Event) {
  const swipeDistance = touchEnd.value - touchStart.value;

  if (swipeDistance < touchThreshold) {
    menuVisible.value = false;
  }
};
</script>
