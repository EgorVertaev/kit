import { IuserInitialState } from "../../types/types";



const initialState: IuserInitialState = {
  user: {
    firstName: "Egor",
    lastName: "Vertaev",
    email: "example@test.com",
    adress: "ivanovaPavlovd 25, flat 22",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2J48SKVzm8avnAciFVnJaVPzyWHYwsGajw&usqp=CAU",
  }
}
const userReducer = (state = initialState, action: any) => {
  
  return state
}

export default userReducer;
