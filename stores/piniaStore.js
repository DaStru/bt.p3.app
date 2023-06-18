import { defineStore } from 'pinia'

export const usePiniaStore = defineStore('counter', {
    state: () => ({ 
        count: 0,
        sounds: [    
            {
                "id": "TestSound1",
                "name": "Test sound 1",
                "location": "/sounds/testsound1.mp3",
                "thumbnail": "/images/relaxed_dog.jpg"
            },
            {
                "id": "TestSound2",
                "name": "Test sound 2",
                "location": "/sounds/testsound2.mp3",
                "thumbnail": "/images/sleeping_dog.jpg"
            },
            {
                "id": "TestSound3",
                "name": "Test sound 3",
                "location": "/sounds/testsound3.mp3",
                "thumbnail": "/images/sleeping_dog2.jpg"
            }
        ],
        currentSound: 'TestSound1',
        currentSoundIndex: 0,
        currentSoundInterval: null,
        currentSoundDuration: 0,
        currentSoundTime: 0,
        audio: null,
        test: 50

    }),
    getters: {
        currentSoundName(state) {
            const soundIndex = Data.map(e => e.id).indexOf(state.currentSound)
        },
    },
    actions: {
        soundPreload() {
            this.audio = new Audio(this.sounds[this.currentSoundIndex].location)

            this.audio.onloadedmetadata = (event) => {
                this.currentSoundDuration = Math.ceil(this.audio.duration)
            };
        },
        soundPlay() {
            this.audio.play();

            this.currentSoundInterval = setInterval(() => {
                this.currentSoundTime = Math.ceil(this.audio.currentTime)
            }, 1000);

        },
        soundPause() {
            this.audio.pause();

            clearInterval(this.currentSoundInterval)
        },
        soundNext() {
            if (this.currentSoundIndex != this.sounds.length-1){
                this.currentSoundIndex +=1
            }
            else {
                this.currentSoundIndex = 0
            }
            this.soundPause()
            this.soundPreload();
            this.soundPlay()
        },
        soundPrevious() {
            if (this.currentSoundIndex == 0){
                this.currentSoundIndex = this.sounds.length-1
            }
            else {
                this.currentSoundIndex -= 1
            }
            this.soundPause()
            this.soundPreload();
            this.soundPlay()
        },
        increment() {
            this.count++
        },
    },
  })