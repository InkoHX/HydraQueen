import { Collection } from 'discord.js'
import HydraQueen from '../HydraQueen'
import Event from './Event'

export default class EventMap {
  private events: Collection<string, Event>;

  private client: HydraQueen;

  constructor (client: HydraQueen) {
    this.events = new Collection()
    this.client = client
  }

  public register (event: Event): void {
    this.events.set(event.name, event)
    if (event.once) {
      this.client.once(event.name, event.run)
    } else {
      this.client.on(event.name, event.run)
    }
  }

  public registerAll (events: Event[]): void {
    for (const event of events) {
      this.events.set(event.name, event)
      if (event.once) {
        this.client.once(event.name, event.run)
      } else {
        this.client.on(event.name, event.run)
      }
    }
  }

  public clear (): void {
    this.events.clear()
    this.client.removeAllListeners()
  }

  public getEvent (name: string): Event | undefined {
    return this.events.get(name)
  }
}
