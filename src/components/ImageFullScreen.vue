<template>
  <div v-show="!showImages" class="loading"></div>

  <section v-show="showImages" @keydown="onEsc" class="image-gallery">
    <section class="headline">
      <h1>Capturing moments <span>📸</span></h1>
      <p>Leonardo Roić</p>
    </section>
    <article
      v-for="photo in photos"
      :key="photo.id"
      class="image-gallery__image"
    >
      <img
        id="single-image"
        @click="doLogic"
        height="800"
        width="800"
        :alt="photo.attributes.image.data.attributes.caption || `my photograph`"
        :srcset="getSrcSetFromPhoto(photo)"
        sizes="(max-width: 500px) 25vw, (max-width: 1200px) 50vw, 100vw"
        :data-info="JSON.stringify(photo.attributes.metadata)"
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
          <h4
            v-if="currentMetaData.caption"
            @click.prevent.capture="stopPropagation"
          >
            {{ currentMetaData.caption }}
          </h4>
          <div
            class="image-viewer-description-info"
            @click.prevent.capture="stopPropagation"
          >
            <p
              @click.prevent.capture="stopPropagation"
              v-if="currentMetaData.device"
            >
              <span> Device: </span> {{ currentMetaData.device }}
            </p>
            <p
              @click.prevent.capture="stopPropagation"
              v-if="currentMetaData.location"
            >
              <span> Location: </span> {{ currentMetaData.location }}
            </p>
            <p
              @click.prevent.capture="stopPropagation"
              v-if="currentMetaData.photodata"
            >
              <span> Sensor info: </span>
              {{ currentMetaData.photodata }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import "@/assets/sass/components/_imageFullScreen.scss";
import { getPhotographs } from "@/api/photographs/getPhotographs";
import { getSrcSetFromPhoto } from "@/api/photographs/getSrcSetFromPhoto";
import { onBeforeMount, onMounted, onUpdated, ref, watch } from "vue";
import { sortPosts } from "@/api/posts/sortedPosts";

const fetchedPhotos = await getPhotographs();
const photos = sortPosts(fetchedPhotos);

const currentMetaData = ref(null);
const currentSrcset = ref("");
const currentSizes = ref("");
const showImages = ref(false);
const fullScreenShown = ref(false);

const stopPropagation = function (e) {
  e.stopPropagation();
};

const doLogic = function (e) {
  fullScreenShown.value = true;
  currentSrcset.value = e.target.srcset; // Set the srcset based on the selected photo
  currentSizes.value =
    "(max-width: 500px) 100vw, (max-width: 1200px) 80vw, 50vw"; // Set the sizes based on the selected photo (or retrieve it from the photo object)
  currentMetaData.value = JSON.parse(e.target.getAttribute("data-info")) || "";
};

onBeforeMount(() => {
  Array.from(document.querySelectorAll(".image-gallery__image img")).forEach(
    (image) => {
      const row = JSON.parse(image.getAttribute("data-info"))?.row || "1";
      const column = JSON.parse(image.getAttribute("data-info"))?.column || "1";
      image.parentNode.style.gridRow = `span ${row}`;
      image.parentNode.style.gridColumn = `span ${column}`;
    }
  );
});

onMounted(() => {
  showImages.value = true;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullScreenShown.value === true)
      fullScreenShown.value = false;
  });
});
</script>

<style scoped></style>
