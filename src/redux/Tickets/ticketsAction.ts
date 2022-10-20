import { ITicketsData } from "../../types/types";
import {
  IaddTicketProps,
  IaddTicketResult,
  IdeleteTicket,
  IsortDataFromAtoZ,
  IsortDataFromZtoA,
  IclearSorted,
  IsetSortIconColor,
  IfilterData,
  IsetIsFiltered,
  IclearTicketFilter,
  IsetTickets,
} from "./types";

export const ADD_TICKET = "ADD_TICKET";
export const DELETE_TICKET = "DELETE_TICKET";
export const SORT_TICKET_FROM_A_TO_Z = "SORT_TICKET_FROM_A_TO_Z";
export const SORT_TICKET_FROM_Z_TO_A = "SORT_TICKET_FROM_Z_TO_A";
export const CLEAR_SORTED_TICKET = "CLEAR_SORTED_TICKET";
export const SET_IS_TICKET_SORTED_ICON_COLOR =
  "SET_IS_TICKET_SORTED_ICON_COLOR";
export const FILTER_TICKET_DATA = "FILTER_TICKET_DATA";
export const SET_IS_TICKET_FILTERED = "SET_IS_TICKET_FILTERED_";
export const CLEAR_TICKET_FILTER = "CLEAR_TICKET_FILTER";
export const SET_TICKETS = "SET_TICKETS";
export const TICKET_FETCH_REQUESTED = "TICKET_FETCH_REQUESTED"


export const addTicket = ({
  descriptionValue,
  castomerName,
  dateValue,
  priorityValue,
}: IaddTicketProps): IaddTicketResult => ({
  type: ADD_TICKET,
  payload: { descriptionValue, castomerName, dateValue, priorityValue },
});
export const deleteTicket = (id: string): IdeleteTicket => ({
  type: DELETE_TICKET,
  payload: { id },
});
export const sortTicketDataFromAtoZ = (): IsortDataFromAtoZ => ({
  type: SORT_TICKET_FROM_A_TO_Z,
});
export const sortTicketDataFromZtoA = (): IsortDataFromZtoA => ({
  type: SORT_TICKET_FROM_Z_TO_A,
});
export const clearTicketSorted = (): IclearSorted => ({
  type: CLEAR_SORTED_TICKET,
});
export const setSortIconColor = (value: boolean): IsetSortIconColor => ({
  type: SET_IS_TICKET_SORTED_ICON_COLOR,
  payload: value,
});
export const filterTicketData = (value: string): IfilterData => ({
  type: FILTER_TICKET_DATA,
  payload: value,
});
export const setTicketIsFiltered = (value: boolean): IsetIsFiltered => ({
  type: SET_IS_TICKET_FILTERED,
  payload: value,
});
export const clearTicketFilter = (): IclearTicketFilter => ({
  type: CLEAR_TICKET_FILTER,
});
export const setTickets = (contacts: Array<ITicketsData>): IsetTickets => ({
  type: SET_TICKETS,
  payload: contacts,
});

export const ticketFetchRequested = () => ({type: TICKET_FETCH_REQUESTED})
