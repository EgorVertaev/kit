import { getAllTickets } from "../../api/tickets";

const ADD_TICKET = "ADD_TICKET";
const DELETE_TICKET = "DELETE_TICKET";
const SORT_TICKET_FROM_A_TO_Z = "SORT_TICKET_FROM_A_TO_Z";
const SORT_TICKET_FROM_Z_TO_A = "SORT_TICKET_FROM_Z_TO_A";
const CLEAR_SORTED_TICKET = "CLEAR_SORTED_TICKET";
const SET_IS_TICKET_SORTED_ICON_COLOR = "SET_IS_TICKET_SORTED_ICON_COLOR";
const FILTER_TICKET_DATA = "FILTER_TICKET_DATA";
const SET_IS_TICKET_FILTERED = "SET_IS_TICKET_FILTERED_";
const CLEAR_TICKET_FILTER = "CLEAR_TICKET_FILTER";
const SET_TICKETS = "SET_TICKETS";

const initialState = {
  ticketsData: [],
  isSorted: false,
  isSortedIconColor: false,
  isFiltered: false,
};

const ticketReducer = (state = initialState, action) => {
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

// action
export const addTicket = (
  descriptionValue,
  castomerName,
  dateValue,
  priorityValue
) => ({
  type: ADD_TICKET,
  payload: { descriptionValue, castomerName, dateValue, priorityValue },
});
export const deleteTicket = (id) => ({ type: DELETE_TICKET, payload: { id } });
export const sortDataFromAtoZ = () => ({ type: SORT_TICKET_FROM_A_TO_Z });
export const sortDataFromZtoA = () => ({ type: SORT_TICKET_FROM_Z_TO_A });
export const clearSorted = () => ({ type: CLEAR_SORTED_TICKET });
export const setSortIconColor = (value) => ({
  type: SET_IS_TICKET_SORTED_ICON_COLOR,
  payload: value,
});
export const filterData = (value) => ({
  type: FILTER_TICKET_DATA,
  payload: value,
});
export const setIsFiltered = (value) => ({
  type: SET_IS_TICKET_FILTERED,
  payload: value,
});
export const clearTicketFilter = () => ({ type: CLEAR_TICKET_FILTER });
const setUsers = (contacts) => ({ type: SET_TICKETS, payload: contacts });

// thunks

export const getTickets = () => {
  return (dispatch) => {
    getAllTickets().then((contacts) => dispatch(setUsers(contacts)));
  };
};
 

export default ticketReducer;
