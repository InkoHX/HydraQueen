import { Collection } from 'discord.js'
import Event from './Event'

export default class EventStore {
  public store: Collection<string, Event>;

  constructor () {
    this.store = new Collection()
  }

  public register (event: Event): void {
    this.store.set(event.name, event)
  }

  public registerAll (events: Event[]): void {
    for (const event of events) {
      this.store.set(event.name, event)
    }
  }

  public getEvent (name: string): Event | undefined {
    return this.store.get(name)
  }

  public getEvents (): Event[] {
    return this.store.array()
  }

  public clear (): void {
    this.store.clear()
  }
}
