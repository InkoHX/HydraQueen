import { Model } from 'sequelize/types'

export interface UserModel extends Model {
  readonly id: string
}

export interface GuildModel extends Model {
  readonly id: string
}
