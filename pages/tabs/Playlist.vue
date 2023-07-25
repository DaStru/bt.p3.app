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
                interpret="Relaxmydog"
                songName="Peaceful Relaxation Music"
                imgLink="../images/relaxed_dog.jpg">
            </play-card>
            <play-card
                interpret="Relaxmydog"
                songName="Peaceful Relaxation Music"
                imgLink="../images/sleeping_dog.jpg">
            </play-card>
            <play-card
                interpret="Relaxmydog"
                songName="Peaceful Relaxation Music"
                imgLink="../images/sleeping_dog2.jpg">
            </play-card>
        </div>
        
        </div>
      </ion-content>
    </ion-page>
  </template>