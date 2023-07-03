import { useMQTT } from 'mqtt-vue-hook'
const mqttHook = useMQTT()

const mqttOptions = {
    port: 9001,
    host: "3.78.96.233",
    username: "raspberrypi",
    password: "changemepls",
    keepalive: 60
}
mqttHook.connect("ws://3.78.96.233", mqttOptions); // create a client

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide("mqttPublish", (topic, payload) => {
        mqttHook.publish(topic, payload, 0)
    })
  })