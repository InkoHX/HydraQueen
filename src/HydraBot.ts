import Client from './lib/HydraClient'
import HydraReady from './events/HydraReady'

const client = new Client()

client.events.add(new HydraReady(client))

client.login().then(() => {
  client.emit('HydraReady', client)
})
