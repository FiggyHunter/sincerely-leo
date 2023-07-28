<template>
  <section class="image-gallery">
    <article v-for="photo in photos" :key="photo" class="image-gallery__image">
      <img
        fetchpriority="high"
        @click="doLogic"
        height="800"
        width="800"
        alt="nesto"
        :srcset="getSrcSetFromPhoto(photo)"
        sizes="(max-width: 500px) 25vw, (max-width: 1200px) 50vw, 100vw"
        :data-info="JSON.stringify(photo.attributes.metadata)"
        loading="lazy"
        decoding="async"
      />
    </article>
  </section>

  <Transition name="show" mode="in-out">
    <div v-if="currentMetaData" class="image-viewer">
      <img :srcset="currentSrcset" :sizes="currentSizes" alt="nesto" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { getPhotographs } from "@/api/photographs/getPhotographs";
import { getSrcSetFromPhoto } from "@/api/photographs/getSrcSetFromPhoto";
import { onBeforeMount, onMounted, ref } from "vue";

const photos = await getPhotographs();

getSrcSetFromPhoto(photos[0]);

const currentMetaData = ref(null);
const currentSrcset = ref("");
const currentSizes = ref("");

const doLogic = function (e) {
  currentSrcset.value = e.target.srcset; // Set the srcset based on the selected photo
  currentSizes.value =
    "(max-width: 500px) 100vw, (max-width: 1200px) 80vw, 50vw"; // Set the sizes based on the selected photo (or retrieve it from the photo object)
  currentMetaData.value = JSON.parse(e.target.getAttribute("data-info"));
};

onMounted(() => {
  document.querySelectorAll(".image-gallery__image img")[0].loading = "auto";
  document.querySelectorAll(".image-gallery__image img")[1].loading = "auto";
});
</script>

<style lang="scss" scoped>
.image-gallery {
  padding: 5rem 0rem;
  width: 100%;
  display: grid;
  gap: 2rem;

  grid-template-columns: 1fr;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 375px);
    grid-auto-rows: 400px;
  }
  justify-items: center;
  &__image {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.image-viewer {
  position: fixed;
  z-index: 15;
  width: 100vw;
  min-height: 100vh;
  background-color: blueviolet;
  top: 0;
  left: 0;
  display: grid;
  img {
    place-self: center;
    max-height: 75vh;
    max-width: 85vw;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.show-enter-active {
  animation: fade-in 0.6s;
}

.show-leave-active {
  animation: fade-out 1.3s;
}
</style>
