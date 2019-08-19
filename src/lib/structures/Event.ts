import { HydraQueen } from '..'
import { EventEmitter } from 'events'

export interface EventOptions {
  eventName?: string
  name?: string
  once?: boolean
  emitter?: EventEmitter
}

export default abstract class Event {
  public client: HydraQueen;

  public name: string = this.constructor.name;

  public eventName: string = this.constructor.name;

  public once: boolean = false;

  public emmiter: EventEmitter;

  constructor (client: HydraQueen, options?: EventOptions) {
    this.client = client
    this.emmiter = client
    if (options) {
      this.name = options.name ? options.name : this.constructor.name
      this.eventName = options.eventName ? options.eventName : this.constructor.name
      this.once = options.once ? options.once : false
      this.emmiter = options.emitter ? options.emitter : client
    }
  }

  public abstract async run (...args: unknown[]): Promise<void>;

  public async _run (): Promise<void> {
    try {
      this.once ? this.emmiter.once(this.eventName, this.run) : this.emmiter.on(this.eventName, this.run)
    } catch (error) {
      this.client.logger.error(error)
    }
  }
}
