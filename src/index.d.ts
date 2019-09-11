import HydraClient from './lib/HydraClient'
import EventStore from './lib/structures/EventStore'
import CommandStore from './lib/structures/CommandStore'
import HydraLogger from './lib/utils/HydraLogger'

declare module 'discord.js' {
  interface Client {
    constructor: typeof HydraClient
    readonly events: EventStore
    readonly commands: CommandStore
    readonly logger: HydraLogger
  }
}
