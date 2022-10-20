import { ITicketsData } from "../../types/types"
import { ADD_TICKET, DELETE_TICKET, SORT_TICKET_FROM_A_TO_Z, SORT_TICKET_FROM_Z_TO_A, CLEAR_SORTED_TICKET, SET_IS_TICKET_SORTED_ICON_COLOR, SET_IS_TICKET_FILTERED, FILTER_TICKET_DATA, CLEAR_TICKET_FILTER, SET_TICKETS } from "./ticketsAction"

export type TicketActionsType = IaddTicketResult | IdeleteTicket | IsortDataFromAtoZ | IsortDataFromZtoA | IclearSorted | IsetSortIconColor | IsetIsFiltered | IfilterData | IclearTicketFilter | IsetTickets

export  interface IaddTicketResult {
  type: typeof ADD_TICKET,
  payload: IaddTicketProps
}

export  interface IaddTicketProps {
  descriptionValue: string
  castomerName: string
  dateValue: string
  priorityValue: string
}

export  interface IdeleteTicket {
  type: typeof DELETE_TICKET,
  payload: {
    id: string
  }
}

export  interface IsortDataFromAtoZ {
  type: typeof SORT_TICKET_FROM_A_TO_Z
}

export  interface IsortDataFromZtoA {
  type: typeof SORT_TICKET_FROM_Z_TO_A
}

export  interface IclearSorted {
  type: typeof CLEAR_SORTED_TICKET
}

export  interface IsetSortIconColor {
  type: typeof SET_IS_TICKET_SORTED_ICON_COLOR,
  payload: boolean
}

export  interface IsetIsFiltered {
  type:  typeof SET_IS_TICKET_FILTERED,
  payload: boolean
}

export  interface IfilterData {
  type:  typeof FILTER_TICKET_DATA,
  payload: string,
}

export  interface IclearTicketFilter {
  type: typeof CLEAR_TICKET_FILTER
}

export  interface IsetTickets {
  type: typeof SET_TICKETS,
  payload: Array<ITicketsData>
}

