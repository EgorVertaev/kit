import { IContactInitialState} from "../../types/types";
import { ADD_CONTACT, CLEAR_CONTACT_FILTER, CLEAR_SORTED, ContactActionsType, DELETE_CONTACT, FILTER_CONTACT_DATA, SET_CONTACTS, SET_CONTACT_SORT_ICON_COLOR, SET_IS_FILTERED_DATA, SORT_CONTACT_FROM_A_TO_Z, SORT_CONTACT_FROM_Z_TO_A } from "../actionCreators";



const initialState: IContactInitialState = {
  contactsData: [],
  isSorted: false,
  isSortedIconColor: false,
  isFiltered: false,
};

const contactReducer = (state = initialState, action: ContactActionsType) => {
  switch (action.type) {
    case SET_CONTACTS:
      const contacts = action.payload;

      return {
        ...state,
        contactsData: [...contacts],
      };

    case ADD_CONTACT:
      const date = new Date();
      const randomId = Date.now().toString();
      const newData = {
        id: randomId,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
        name: `${action.payload.firstNameValue} ${action.payload.lastNameValue}`,
        email: action.payload.emailValue,
        address: action.payload.adressValue,
        createData: `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`,
      };

      return {
        ...state,
        contactsData: [...state.contactsData, newData],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contactsData: state.contactsData.filter(
          (el) => el.id !== action.payload.id
        ),
      };

    case SORT_CONTACT_FROM_A_TO_Z: {
      const sortData = state.contactsData.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );

      return {
        ...state,
        contactsData: [...sortData],
        isSorted: false,
      };
    }

    case SORT_CONTACT_FROM_Z_TO_A: {
      const sortData = state.contactsData.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );

      return {
        ...state,
        contactsData: [...sortData],
        isSorted: true,
      };
    }

    case CLEAR_SORTED: {
      return {
        ...state,
        contactsData: [...state.contactsData],
        isSorted: false,
      };
    }

    case SET_CONTACT_SORT_ICON_COLOR: {
      return {
        ...state,
        isSortedIconColor: action.payload,
      };
    }

    case FILTER_CONTACT_DATA: {
      const filterValue = action.payload.value;
      if (filterValue.length === 0) {
        return {
          ...state,
          contactsData: [...state.contactsData],
        };
      }
      return {
        ...state,
        contactsData: state.contactsData.filter((el) =>
          el.name.includes(filterValue)
        ),
      };
    }

    case SET_IS_FILTERED_DATA: {
      return {
        ...state,
        isFiltered: action.payload,
      };
    }

    case CLEAR_CONTACT_FILTER: {
      return {
        ...state,
        contactsData: [...state.contactsData],
      };
    }

    default:
      return state;
  }
};


export default contactReducer;
