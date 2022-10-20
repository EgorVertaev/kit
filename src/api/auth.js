
export const getAllTickets = () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        login: "admin",
        password: "admin"
      })  
    }, 500)
  })
}