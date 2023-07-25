import { defineStore } from 'pinia'

export const usePiniaStore = defineStore('counter', {
    state: () => ({ 
        count: 0,
        sounds: [    
            {
                "id": "TestSound1",
                "name": "Calm Universe",
                "interpret": "Soothing Dog Sounds",
                "location": "/sounds/testsound1.mp3",
                "thumbnail": "/images/relaxed_dog.jpg"
            },
            {
                "id": "TestSound2",
                "name": "Peaceful Relaxation Music",
                "interpret": "Relaxmydog",
                "location": "/sounds/testsound2.mp3",
                "thumbnail": "/images/sleeping_dog.jpg"
            },
            {
                "id": "TestSound3",
                "name": "Little Cutie",
                "interpret": "Musik Til Hunde",
                "location": "/sounds/testsound3.mp3",
                "thumbnail": "/images/sleeping_dog2.jpg"
            }
        ],
        currentSoundFile: 'TestSound1',
        currentThumbnailFile: "/images/relaxed_dog.jpg",
        currentSoundIndex: 0,
        currentSoundInterval: null,
        currentSoundDuration: 0,
        currentSoundDurationDisplayed: '0.00',
        currentSoundTime: 0,
        currentSoundTimeDisplayed: '0.00',
        audio: null,
        test: 50

    }),
    getters: {
        currentSoundName(state) {
            const soundIndex = Data.map(e => e.id).indexOf(state.currentSoundFile)
        },
    },
    setters: {
        setSong(soundFile, thumbnailFile) {
            this.currentSoundFile = soundFile;
            this.currentThumbnailFile = thumbnailFile;
        }
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
                let soundDurationSeconds = Math.ceil(this.audio.duration);
                let soundMinutes = Math.floor(soundDurationSeconds / 60);
                if (soundMinutes > 0) {
                    this.currentSoundDurationDisplayed = soundMinutes + '.' + (soundDurationSeconds - soundMinutes * 60)
                } else {
                    this.currentSoundDurationDisplayed = '0.' + soundDurationSeconds;
                }

                this.currentSoundDuration = soundDurationSeconds;
            };
        },
        soundPlay() {
            this.mqttSend({"action": "play","payload": {"sound_name": this.currentSoundFile, "thumbnail_name": this.currentThumbnailFile}})

            this.audio.play();

            this.currentSoundInterval = setInterval(() => {
                let soundDurationSeconds = Math.ceil(this.audio.currentTime);
                let soundMinutes = Math.floor(soundDurationSeconds / 60);
                let soundMinutesInSeconds = soundMinutes * 60;
                let secondsAfterDecimal = soundDurationSeconds - soundMinutesInSeconds;
                if (soundMinutes > 0) {
                    if (secondsAfterDecimal < 10) {
                        this.currentSoundTimeDisplayed = soundMinutes + '.0' + secondsAfterDecimal;
                    } else {
                        this.currentSoundTimeDisplayed = soundMinutes + '.' + secondsAfterDecimal;
                    }
                } else {
                    if (secondsAfterDecimal < 10) {
                        this.currentSoundTimeDisplayed = '0.0' + soundDurationSeconds;
                    } else {
                        this.currentSoundTimeDisplayed = '0.' + soundDurationSeconds;
                    }
                }

                this.currentSoundTime = soundDurationSeconds;
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