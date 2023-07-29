<template>
  <section class="image-gallery">
    <article v-for="photo in photos" :key="photo" class="image-gallery__image">
      <img
        fetchpriority="high"
        @click="doLogic"
        height="800"
        width="800"
        :alt="photo.attributes.image.data.attributes.caption"
        :srcset="getSrcSetFromPhoto(photo)"
        sizes="(max-width: 500px) 25vw, (max-width: 1200px) 50vw, 100vw"
        :data-info="JSON.stringify(photo.attributes.metadata)"
        loading="lazy"
        decoding="async"
      />
    </article>
  </section>

  <Transition name="show" mode="in-out">
    <div
      v-if="fullScreenShown"
      @click="fullScreenShown = false"
      class="image-viewer-container"
    >
      <div class="image-viewer">
        <button class="close" @click="fullScreenShown = false">X</button>
        <img
          @click.prevent.capture="stopPropagation"
          :srcset="currentSrcset"
          :sizes="currentSizes"
          alt="nesto"
        />
        <section class="image-viewer-description">
          <h4 @click.prevent.capture="stopPropagation">{{ currentAlt }}</h4>
          <p @click.prevent.capture="stopPropagation">
            {{ currentMetaData.device }}
          </p>
        </section>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { getPhotographs } from "@/api/photographs/getPhotographs";
import { getSrcSetFromPhoto } from "@/api/photographs/getSrcSetFromPhoto";
import { onMounted, ref } from "vue";

const photos = await getPhotographs();

getSrcSetFromPhoto(photos[0]);

const currentMetaData = ref(null);
const currentSrcset = ref("");
const currentSizes = ref("");
const fullScreenShown = ref(false);
const currentAlt = ref("");

const stopPropagation = function (e) {
  e.stopPropagation();
};

const doLogic = function (e) {
  fullScreenShown.value = true;
  currentAlt.value = e.target.alt;
  currentSrcset.value = e.target.srcset; // Set the srcset based on the selected photo
  currentSizes.value =
    "(max-width: 500px) 100vw, (max-width: 1200px) 80vw, 50vw"; // Set the sizes based on the selected photo (or retrieve it from the photo object)
  currentMetaData.value = JSON.parse(e.target.getAttribute("data-info"));
  console.log(currentMetaData.value);
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
  display: grid;
  grid-template-rows: auto max-content;
  @media screen and (min-width: 1200px) {
    grid-template-rows: unset;
    grid-template-columns: auto auto;
  }
  height: 100%;
  align-content: center;
  &-container {
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 110;
    background-color: rgba(0, 0, 0, 0.914);
    padding-bottom: 2rem;
  }

  &-description {
    display: grid;
    position: initial;
    color: white;
    justify-content: center;
    height: 100%;
    width: 100%;

    align-self: start;
    align-content: center;
    h4 {
      font-family: "Montserrat Bold";
    }
  }

  width: 80%;
  margin: 0 auto;

  img {
    place-self: center start;
    max-height: 75vh;
    max-width: 90vw;
    width: 100%;
  }
  .close {
    position: absolute;
    background-color: blue;
    justify-self: center;
    bottom: 1.5rem;
    width: fit-content;
    border-radius: 3rem;
    padding: 0.5rem 0.75rem;
    color: white;
    font-family: "Montserrat Bold";
    border: none;
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
  animation: fade-out 0.4s;
}
</style>
