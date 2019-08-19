import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize'
import { Guild, User } from 'discord.js'
import { UserModel, GuildModel } from './model/Model'

type UserModelStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): UserModel
}

type GuildModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GuildModel
}

export default class DataBase {
  private sequelize: Sequelize;

  private guilds: GuildModelStatic;

  private users: UserModelStatic;

  constructor () {
    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: `${process.cwd()}/database.sqlite`
    })

    this.guilds = <GuildModelStatic> this.sequelize.define('guilds', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      }
    })

    this.users = <UserModelStatic> this.sequelize.define('users', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      }
    })
  }

  public async createGuild (guild: Guild) {
    await this.guilds.create({
      id: guild.id
    })
  }

  public async createUser (user: User) {
    await this.users.create({
      id: user.id
    })
  }

  public async getGuild (guild: Guild) {
    return this.guilds.findOrCreate({
      where: {
        id: guild.id
      }
    }).value()[0]
  }

  public async getUser (user: User) {
    return this.users.findOrCreate({
      where: {
        id: user.id
      }
    }).value()[0]
  }
}
