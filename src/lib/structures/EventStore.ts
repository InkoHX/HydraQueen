import { Collection } from 'discord.js'
import Event from './Event'

export default class EventStore extends Collection<string, Event> {
  public add (event: Event): this {
    this.set(event.name, event)

    return this
  }
}
