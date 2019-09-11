import { EventEmitter } from 'events'
import HydraClient from '../HydraClient'

export interface EventOptions {
  name: string
  emitter?: EventEmitter
  once?: boolean
}

export default abstract class Event {
  public readonly name: string
  public readonly once: boolean
  public readonly emitter: EventEmitter

  constructor (client: HydraClient, options: EventOptions) {
    this.name = options.name
    this.emitter = options.emitter || client
    this.once = options.once || false
  }

  public abstract async execute (...args: any[]): Promise<void>
}
