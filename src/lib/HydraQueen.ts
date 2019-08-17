import { Client, ClientOptions } from 'discord.js'
import CommandMap from './command/CommandMap'
import EventMap from './event/EventMap'

class HydraQueen extends Client {
  public commands: CommandMap;

  public events: EventMap;

  constructor (options?: ClientOptions) {
    super(options)

    this.commands = new CommandMap()

    this.events = new EventMap(this)
  }
}

export default HydraQueen
