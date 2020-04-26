export class UserModel {
  constructor(public id: number,
              public userName: string,
              public firstName?: string,
              public lastName?: string,
              public email?: string,
              public workPlace?: string,
              public birthDate?: Date) {
  }
}
