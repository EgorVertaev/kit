import { IContactsData } from "../../types/types";
import { IaddContactProps, IaddContact, IdeleteContact, IsortContactDataFromAtoZ, IsortContactDataFromZtoA, IContactClearSorted, IsetIsSortedIconColor, IContactFilterData, IContactsetIsFiltered, ISetUsers } from "./types";

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
export const CONTACTS_FETCH_REQUESTED = "CONTACTS_FETCH_REQUESTED"

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
export const contactsFetchRequested = () => ({ type: CONTACTS_FETCH_REQUESTED })