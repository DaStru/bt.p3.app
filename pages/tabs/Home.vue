<template>
  <head>
    
  </head>

  <ion-page>
    <ion-content>
      <div class="app-name">
        Harmony
      </div>

      <div class="flex flex-col justify-start items-center gap-5 mx-5">
       <h1 class="welcome-msg">Hallo, <span style="font-weight: bold;">Marlen & Balu!</span>🤗</h1>
        <div class="w-11/12">
          <div>
            <h4>
              Rückblick auf eure letzte Woche
            </h4>
          </div>
          <div class="flex flex-col card">
            <media-card class="bar-chart" title="Stressige Situationen">
              <bar-chart/>
              <div class="card-text">
                Balu war in der vergangenen Woche einigen stressigen Situationen ausgesetzt. Um ihn zukünftig zu beruhigen, hast du ingesamt acht mal einen Sound abgespielt - in sieben davon konntest du ihn beruhigen.
              </div>
            </media-card>
          </div>
        </div>


        <div class="w-11/12">
          <div>
            <h4>
              Zuletzt gespielter Sound
            </h4>
          </div>
          <div class="flex flex-col card">
            <basic-card class="card" title="Lerne mehr über deinen Zweibeiner" content="Bla Bla" buttonText="Zur Bibliothek"/>
          </div>
        </div>

        <div class="w-11/12">
          <div>
            <h4>
              Balu's Lieblingssongs
            </h4>
          </div>
          <div class="flex flex-col gap-4 card">
            <basic-card class="card" title="Top 10 Sounds" content="Bla Bla" buttonText="Mehr Erfahren"/>
          </div>
        </div>

        <div></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style lang="css">
@import '../../assets/css/style.css';
</style>