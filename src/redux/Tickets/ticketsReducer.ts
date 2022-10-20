
import { IticketInitialState } from "../../types/types";
import {
  ADD_TICKET,
  CLEAR_SORTED_TICKET,
  CLEAR_TICKET_FILTER,
  DELETE_TICKET,
  FILTER_TICKET_DATA,
  SET_IS_TICKET_FILTERED,
  SET_IS_TICKET_SORTED_ICON_COLOR,
  SET_TICKETS,
  SORT_TICKET_FROM_A_TO_Z,
  SORT_TICKET_FROM_Z_TO_A,
} from "./ticketsAction";
import { TicketActionsType } from "./types";

const initialState: IticketInitialState = {
  ticketsData: [],
  isSorted: false,
  isSortedIconColor: false,
  isFiltered: false,
};

const ticketReducer = (
  state = initialState,
  action: TicketActionsType
): IticketInitialState => {
  switch (action.type) {
    case SET_TICKETS:
      const tickets = action.payload;

      return {
        ...state,
        ticketsData: [...tickets],
      };

    case ADD_TICKET:
      const date = new Date();
      const randomId = Date.now().toString();
      const newData = {
        id: randomId,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
        description: action.payload.descriptionValue,
        descData: `Updated ${date.getDay()} day ago`,
        name: action.payload.castomerName,
        nameData: `on ${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`,
        date: action.payload.dateValue,
        dateTime: `${date.getDay()}`,
        priority: action.payload.priorityValue,
      };
      return {
        ...state,
        ticketsData: [...state.ticketsData, newData],
      };

    case DELETE_TICKET:
      return {
        ...state,
        ticketsData: state.ticketsData.filter(
          (el) => el.id !== action.payload.id
        ),
      };

    case SORT_TICKET_FROM_A_TO_Z: {
      const sortData = state.ticketsData.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );

      return {
        ...state,
        ticketsData: [...sortData],
        isSorted: false,
      };
    }

    case SORT_TICKET_FROM_Z_TO_A: {
      const sortData = state.ticketsData.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );

      return {
        ...state,
        ticketsData: [...sortData],
        isSorted: true,
      };
    }

    case CLEAR_SORTED_TICKET: {
      return {
        ...state,
        ticketsData: [...state.ticketsData],
        isSorted: false,
      };
    }

    case SET_IS_TICKET_SORTED_ICON_COLOR: {
      return {
        ...state,
        isSortedIconColor: action.payload,
      };
    }

    case FILTER_TICKET_DATA: {
      return {
        ...state,
        ticketsData: state.ticketsData.filter(
          (item) => item.priority === action.payload
        ),
      };
    }

    case SET_IS_TICKET_FILTERED: {
      return {
        ...state,
        isFiltered: action.payload,
      };
    }

    case CLEAR_TICKET_FILTER: {
      return {
        ...state,
        ticketsData: [...state.ticketsData],
      };
    }

    default:
      return state;
  }
};

export default ticketReducer;
