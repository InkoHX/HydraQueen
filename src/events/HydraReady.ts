import Event from '../lib/structures/Event'
import HydraClient from '../lib/HydraClient'

export default class HydraReady extends Event {
  constructor (client: HydraClient) {
    super(client, {
      name: 'HydraReady'
    })
  }

  public async execute (client: HydraClient) {
    client.logger.info('Ready!')
  }
}
