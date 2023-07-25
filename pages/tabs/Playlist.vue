<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>
            <img src="/images/Harmony.png" alt="">
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="flex flex-col h-full items-center">
            <div class="w-11/12">
          <div class="tab-heading flex flex-row align-middle">
            <div class="heading-text">
              Bibliothek
            </div>
          </div>
            <play-card
                interpret="Calm Universe"
                songName="Soothing Dog Sounds"
                imgLink="../images/relaxed_dog.jpg"
                @click="store.playSpecificSound(1)">
            </play-card>
            <play-card
                interpret="Relaxmydog"
                songName="Peaceful Relaxation Music"
                imgLink="../images/sleeping_dog.jpg"
                @click="store.playSpecificSound(2)">
            </play-card>
            <play-card
                interpret="Little Cutie"
                songName="Musik Til Hunde"
                imgLink="../images/sleeping_dog2.jpg"
                @click="store.playSpecificSound(3)">
            </play-card>
        </div>
        
        </div>
      </ion-content>
    </ion-page>
  </template>

<script setup>
import { usePiniaStore } from '@/stores/piniaStore'
const store = usePiniaStore();

</script>