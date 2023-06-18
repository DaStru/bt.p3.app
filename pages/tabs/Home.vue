<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Harmony</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <div class="flex flex-col justify-start items-center gap-5 mx-5">
       <h1>Hallo, Marlen & Balu! 🤗</h1>
        <div class="w-11/12">
          <div>
            <h4>
              Rückblick auf eure letzte Woche
            </h4>
          </div>
          <div class="flex flex-col">
            <media-card title="Stressige Situationen" content="Bla Bla" buttonText="Mehr Erfahren">
              <!-- <bar-chart/> -->
            </media-card>
          </div>
        </div>


        <div class="w-11/12">
          <div>
            <h4>
              Zuletzt gespielter Sound
            </h4>
          </div>
          <div class="flex flex-col">
            <basic-card title="Lerne mehr über deinen Zweibeiner" content="Bla Bla" buttonText="Zur Bibliothek"/>
          </div>
        </div>

        <div class="w-11/12">
          <div>
            <h4>
              Balu's Lieblingssongs
            </h4>
          </div>
          <div class="flex flex-col gap-4">
            <basic-card title="Top 10 Sounds" content="Bla Bla" buttonText="Mehr Erfahren"/>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>