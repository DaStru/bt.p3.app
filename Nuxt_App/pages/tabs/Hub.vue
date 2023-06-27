<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Harmony</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="flex flex-col justify-start items-center gap-5 mx-5">
        <div class="w-11/12">
          <div>
            <h4>
              Dein Lernfortschritt
            </h4>
          </div>
          <div class="flex flex-col">
            <media-card title="Übung: Calm your buddy" buttonText="Lernen fortsetzen">
              4/7 Lernziele erreicht
              <ion-progress-bar :value="4/7" />
            </media-card>
          </div>
        </div>


        <div class="w-11/12">
          <div>
            <h4>
              Bibliothek
            </h4>
          </div>
          <div class="flex flex-col">
            <basic-card title="Lerne mehr über deinen Zweibeiner" content="Bla Bla" buttonText="Zur Bibliothek"/>
          </div>
        </div>

        <div class="w-11/12">
          <div>
            <h4>
              News
            </h4>
          </div>
          <div class="flex flex-col gap-4">
            <basic-card title="Revolutionäres Hundetraining: Neue Methoden zeigen Erfolge" imageLink="images/dog_training.jpg" content="Bla Bla" buttonText="Mehr Erfahren"/>
            <basic-card title="Hundetraining 2.0: Die neuesten Techniken und Trends" imageLink="images/dog_training2.jpg" content="Bla Bla" buttonText="Mehr Erfahren"/>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
