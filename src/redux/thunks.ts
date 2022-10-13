import { Dispatch } from "redux";
import { getAllContacts } from "../api/contacts";
import { getAllTickets } from "../api/tickets";
import { setTickets, setUsers, TicketActionsType, ISetUsers } from "./actionCreators";


export const getTickets = () => {
  return (dispatch: Dispatch<TicketActionsType>) => {
    getAllTickets().then((tickets) => dispatch(setTickets(tickets)));
  };
};

export const getContacts = () => {
  return (dispatch: Dispatch<ISetUsers>) => 
  getAllContacts().then(contacts => dispatch(setUsers(contacts)));
};
