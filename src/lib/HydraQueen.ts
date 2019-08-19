import { Client, ClientOptions } from 'discord.js'
import CommandStore from './structures/CommandStore'
import HydraLogger from './utils/HydraLogger'
import EventStore from './structures/EventStore'

export default class HydraQueen extends Client {
  public commands: CommandStore;

  public logger: HydraLogger;

  public events: EventStore;

  constructor (options?: ClientOptions) {
    super(options)

    this.commands = new CommandStore()

    this.events = new EventStore()

    this.logger = new HydraLogger()
  }

  public async login (token?: string): Promise<string> {
    for (const event of this.events.getEvents()) {
      await event._run()
    }

    return super.login(token)
  }
}
