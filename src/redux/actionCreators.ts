import { IContactsData, ITicketsData } from "../types/types";

export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const ADD_TICKET = "ADD_TICKET";
export const DELETE_TICKET = "DELETE_TICKET";
export const SORT_TICKET_FROM_A_TO_Z = "SORT_TICKET_FROM_A_TO_Z";
export const SORT_TICKET_FROM_Z_TO_A = "SORT_TICKET_FROM_Z_TO_A";
export const CLEAR_SORTED_TICKET = "CLEAR_SORTED_TICKET";
export const SET_IS_TICKET_SORTED_ICON_COLOR = "SET_IS_TICKET_SORTED_ICON_COLOR";
export const FILTER_TICKET_DATA = "FILTER_TICKET_DATA";
export const SET_IS_TICKET_FILTERED = "SET_IS_TICKET_FILTERED_";
export const CLEAR_TICKET_FILTER = "CLEAR_TICKET_FILTER";
export const SET_TICKETS = "SET_TICKETS";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SORT_CONTACT_FROM_A_TO_Z = "SORT_CONTACT_FROM_A_TO_Z";
export const SORT_CONTACT_FROM_Z_TO_A = "SORT_CONTACT_FROM_Z_TO_A";
export const CLEAR_SORTED = "CLEAR_SORTED";
export const SET_CONTACT_SORT_ICON_COLOR = "SET_CONTACT_SORT_ICON_COLOR";
export const FILTER_CONTACT_DATA = "FILTER_CONTACT_DATA";
export const SET_IS_FILTERED_DATA = "SET_IS_FILTERED_DATA";
export const CLEAR_CONTACT_FILTER = "CLEAR_CONTACT_FILTER";
export const SET_CONTACTS = "SET_CONTACTS";


// Contacts actions
export type ContactActionsType = IaddContact | IsortContactDataFromAtoZ | IdeleteContact |IsortContactDataFromZtoA | IsortContactDataFromAtoZ | IsetIsSortedIconColor | IContactFilterData | IContactsetIsFiltered | IContactClearFilter | IContactClearSorted | ISetUsers

interface IaddContact {
  type: typeof ADD_CONTACT;
  payload: IaddContactProps;
}

interface IaddContactProps {
  firstNameValue: string;
  lastNameValue: string;
  emailValue: string;
  adressValue: string;
}

interface IsortContactDataFromAtoZ {
  type: typeof SORT_CONTACT_FROM_A_TO_Z; 
}
interface IsortContactDataFromZtoA {
  type: typeof SORT_CONTACT_FROM_Z_TO_A; 
}

interface IdeleteContact {
  type: typeof DELETE_CONTACT,
  payload: { id: string}
}

interface IsetIsSortedIconColor {
  type: typeof SET_CONTACT_SORT_ICON_COLOR;
  payload: { value: boolean },
}

interface IContactFilterData {
  type: typeof FILTER_CONTACT_DATA;
  payload: { value: string}
}

interface IContactsetIsFiltered {
  type: typeof SET_IS_FILTERED_DATA;
  payload: { value: boolean }
}

interface IContactClearFilter {
  type: typeof CLEAR_CONTACT_FILTER;
}

export interface ISetUsers {
  type: typeof SET_CONTACTS;
  payload: Array<IContactsData>
}

interface IContactClearSorted {
  type: typeof CLEAR_SORTED
}

// action
export const addContact = ({
  firstNameValue,
  lastNameValue,
  emailValue,
  adressValue,
}: IaddContactProps): IaddContact => ({
  type: ADD_CONTACT,
  payload: { firstNameValue, lastNameValue, emailValue, adressValue },
});

export const deleteContact = (id: string): IdeleteContact => ({
  type: DELETE_CONTACT,
  payload: {id} ,
});
export const sortDataFromAtoZ = (): IsortContactDataFromAtoZ => ({ type: SORT_CONTACT_FROM_A_TO_Z });
export const sortDataFromZtoA = (): IsortContactDataFromZtoA => ({ type: SORT_CONTACT_FROM_Z_TO_A });
export const clearSorted = (): IContactClearSorted => ({ type: CLEAR_SORTED });
export const setIsSortedIconColor = (value: boolean): IsetIsSortedIconColor  => ({
  type: SET_CONTACT_SORT_ICON_COLOR,
  payload: { value },
});
export const filterData = (value: string): IContactFilterData => ({
  type: FILTER_CONTACT_DATA,
  payload: { value },
});
export const setIsFiltered = (value: boolean): IContactsetIsFiltered => ({
  type: SET_IS_FILTERED_DATA,
  payload: { value }
});
export const clearFilter = () => ({ type: CLEAR_CONTACT_FILTER });
export const setUsers = (contacts: Array<IContactsData>): ISetUsers => ({ type: SET_CONTACTS, payload: contacts });


// Tickets actions

export type TicketActionsType = IaddTicketResult | IdeleteTicket | IsortDataFromAtoZ | IsortDataFromZtoA | IclearSorted | IsetSortIconColor | IsetIsFiltered | IfilterData | IclearTicketFilter | IsetTickets

interface IaddTicketResult {
  type: typeof ADD_TICKET,
  payload: IaddTicketProps
}

interface IaddTicketProps {
  descriptionValue: string
  castomerName: string
  dateValue: string
  priorityValue: string
}

interface IdeleteTicket {
  type: typeof DELETE_TICKET,
  payload: {
    id: string
  }
}

interface IsortDataFromAtoZ {
  type: typeof SORT_TICKET_FROM_A_TO_Z
}

interface IsortDataFromZtoA {
  type: typeof SORT_TICKET_FROM_Z_TO_A
}

interface IclearSorted {
  type: typeof CLEAR_SORTED_TICKET
}

interface IsetSortIconColor {
  type: typeof SET_IS_TICKET_SORTED_ICON_COLOR,
  payload: boolean
}

interface IsetIsFiltered {
  type:  typeof SET_IS_TICKET_FILTERED,
  payload: boolean
}

interface IfilterData {
  type:  typeof FILTER_TICKET_DATA,
  payload: string,
}

interface IclearTicketFilter {
  type: typeof CLEAR_TICKET_FILTER
}

interface IsetTickets {
  type: typeof SET_TICKETS,
  payload: Array<ITicketsData>
}

export const addTicket = (
  {
    descriptionValue,
    castomerName,
    dateValue,
    priorityValue
  }: IaddTicketProps 
  
): IaddTicketResult => ({
  type: ADD_TICKET,
  payload: { descriptionValue, castomerName, dateValue, priorityValue },
});
export const deleteTicket = (id: string): IdeleteTicket => ({ type: DELETE_TICKET, payload: { id } });
export const sortTicketDataFromAtoZ = (): IsortDataFromAtoZ => ({ type: SORT_TICKET_FROM_A_TO_Z });
export const sortTicketDataFromZtoA = (): IsortDataFromZtoA => ({ type: SORT_TICKET_FROM_Z_TO_A });
export const clearTicketSorted = (): IclearSorted => ({ type: CLEAR_SORTED_TICKET });
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
export const clearTicketFilter = (): IclearTicketFilter => ({ type: CLEAR_TICKET_FILTER });
export const setTickets = (contacts: Array<ITicketsData>): IsetTickets => ({ type: SET_TICKETS, payload: contacts });


// Auth actions

export type authActionsType = IlogOut | IlogIn

export interface IlogOut {
  type: typeof LOG_OUT
}

export interface IlogIn {
  type: typeof LOG_IN
}


export const logOut = (): IlogOut => ({type: LOG_OUT })
export const logIn = (): IlogIn  => ({type: LOG_IN })