export interface UserData {
  firstName: string
  lastName: string
  email: string
  website: string
}

export type JsonType = {
  Integrations: {
    [key: string]: string
  }
}
