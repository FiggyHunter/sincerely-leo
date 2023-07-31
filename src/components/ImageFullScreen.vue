<template>
  <section @keydown="onEsc" class="image-gallery">
    <h1>Say cheese!</h1>
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
import { onMounted, ref } from "vue";

const photos = await getPhotographs();

getSrcSetFromPhoto(photos[0]);

const currentMetaData = ref(null);
const currentSrcset = ref("");
const currentSizes = ref("");
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

onMounted(() => {
  document.querySelectorAll(".image-gallery__image img")[0].loading = "auto";
  document.querySelectorAll(".image-gallery__image img")[1].loading = "auto";
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullScreenShown.value === true)
      fullScreenShown.value = false;
  });
});
</script>
