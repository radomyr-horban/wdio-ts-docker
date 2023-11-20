// export function generateUserData() {
//   const randomString = (length) => {
//     let result = ''
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//     const charactersLength = characters.length
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return result
//   }

//   const randomEmail = `${randomString(8)}@gmail.com`
//   const randomFirstName = randomString(6)
//   const randomLastName = randomString(6)
//   const randomWebsite = randomString(6)

//   return {
//     firstName: randomFirstName,
//     lastName: randomLastName,
//     email: randomEmail,
//     website: randomWebsite,
//   }
// }

interface UserData {
  firstName: string
  lastName: string
  email: string
  website: string
}

export function generateUserData(): UserData {
  const randomString = (length: number): string => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const randomEmail: string = `${randomString(8)}@gmail.com`
  const randomFirstName: string = randomString(6)
  const randomLastName: string = randomString(6)
  const randomWebsite: string = randomString(6)

  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    email: randomEmail,
    website: randomWebsite,
  }
}
