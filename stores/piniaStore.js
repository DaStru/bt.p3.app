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
        currentSoundFile: 'TestSound1',
        currentThumbnailFile: "/images/relaxed_dog.jpg",
        currentSoundIndex: 0,
        currentSoundInterval: null,
        currentSoundDuration: 0,
        currentSoundTime: 0,
        audio: null,
        test: 50

    }),
    getters: {
        currentSoundName(state) {
            const soundIndex = Data.map(e => e.id).indexOf(state.currentSoundFile)
        },
    },
    actions: {
        mqttSend(payload) {
            const { $mqttPublish } = useNuxtApp();
            $mqttPublish('raspberry/topic', JSON.stringify(payload))
        },
        soundPreload() {
            this.audio = new Audio(this.sounds[this.currentSoundIndex].location)
            this.currentSoundFile = this.sounds[this.currentSoundIndex].location.split("/").pop()
            this.currentThumbnailFile = this.sounds[this.currentSoundIndex].thumbnail.split("/").pop()

            this.audio.onloadedmetadata = (event) => {
                this.currentSoundDuration = Math.ceil(this.audio.duration)
            };
        },
        soundPlay() {
            this.mqttSend({"action": "play","payload": {"sound_name": this.currentSoundFile, "thumbnail_name": this.currentThumbnailFile}})

            this.audio.play();

            this.currentSoundInterval = setInterval(() => {
                this.currentSoundTime = Math.ceil(this.audio.currentTime)
            }, 1000);

        },
        soundPause() {
            this.mqttSend({"action": "pause", "payload": {}})

            this.audio.pause();

            clearInterval(this.currentSoundInterval)
        },
        soundStop() {
            this.mqttSend({"action": "stop", "payload": {}})

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
            this.soundStop()
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
            this.soundStop()
            this.soundPreload();
            this.soundPlay()
        },
        increment() {
            this.count++
        },
    },
  })