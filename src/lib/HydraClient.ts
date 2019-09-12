import { Client, ClientOptions } from 'discord.js'
import { readFile } from 'fs-nextra'
import { safeLoad } from 'js-yaml'
import path from 'path'
import HydraError from './error/HydraError'
import CommandStore from './structures/CommandStore'
import EventStore from './structures/EventStore'
import HydraLogger from './utils/HydraLogger'

export interface HydraConfig {
  token?: string
}

export default class HydraClient extends Client {
  public readonly commands: CommandStore
  public readonly events: EventStore
  public readonly logger: HydraLogger
  public settings?: HydraConfig

  constructor (options?: ClientOptions) {
    super(options)

    this.commands = new CommandStore()

    this.events = new EventStore()

    this.logger = new HydraLogger()
  }

  public async login (token?: string): Promise<string> {
    const config = await this.loadConfig()
    this.settings = config
    this.registerEvents()

    return super.login(config.token || token)
  }

  private async loadConfig (): Promise<HydraConfig> {
    const file = path.join(process.cwd(), 'hydra-config.yml')
    const config = await readFile(file, 'utf8').catch(() => null)

    if (config === null) throw new HydraError('Config not found.')

    return safeLoad(config)
  }

  private registerEvents () {
    this.events.each((value) => {
      if (value.once) {
        value.emitter.on(value.name, value.execute)
      } else {
        value.emitter.once(value.name, value.execute)
      }
      this.logger.info(`[Event] ${value.name} has been registered.`)
    })
  }
}
