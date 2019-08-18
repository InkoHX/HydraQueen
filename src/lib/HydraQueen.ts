import { Client, ClientOptions } from 'discord.js'
import CommandMap from './command/CommandMap'
import HydraLogger from './utils/HydraLogger'

class HydraQueen extends Client {
  public commands: CommandMap;

  public logger: HydraLogger;

  constructor (options?: ClientOptions) {
    super(options)

    this.commands = new CommandMap()

    this.logger = new HydraLogger()
  }
}

export default HydraQueen
