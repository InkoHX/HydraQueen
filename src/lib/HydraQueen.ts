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
    await this.initEvents()

    return super.login(token)
  }

  private async initEvents (): Promise<void> {
    for (const event of this.events.getEvents()) {
      await event._run()
    }
    this.logger.log(`All events have been registered. (${this.events.store.size} events)`)
  }
}
