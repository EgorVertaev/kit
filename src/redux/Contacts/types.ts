import { IContactsData } from "../../types/types";
import { ADD_CONTACT, CLEAR_CONTACT_FILTER, CLEAR_SORTED, DELETE_CONTACT, FILTER_CONTACT_DATA, SET_CONTACTS, SET_CONTACT_SORT_ICON_COLOR, SET_IS_FILTERED_DATA, SORT_CONTACT_FROM_A_TO_Z, SORT_CONTACT_FROM_Z_TO_A } from "./contactActions";

export type ContactActionsType = IaddContact | IsortContactDataFromAtoZ | IdeleteContact |IsortContactDataFromZtoA | IsortContactDataFromAtoZ | IsetIsSortedIconColor | IContactFilterData | IContactsetIsFiltered | IContactClearFilter | IContactClearSorted | ISetUsers

export interface IaddContact {
  type: typeof ADD_CONTACT;
  payload: IaddContactProps;
}

export interface IaddContactProps {
  firstNameValue: string;
  lastNameValue: string;
  emailValue: string;
  adressValue: string;
}

export interface IsortContactDataFromAtoZ {
  type: typeof SORT_CONTACT_FROM_A_TO_Z; 
}
export interface IsortContactDataFromZtoA {
  type: typeof SORT_CONTACT_FROM_Z_TO_A; 
}

export interface IdeleteContact {
  type: typeof DELETE_CONTACT,
  payload: { id: string}
}

export interface IsetIsSortedIconColor {
  type: typeof SET_CONTACT_SORT_ICON_COLOR;
  payload: { value: boolean },
}

export interface IContactFilterData {
  type: typeof FILTER_CONTACT_DATA;
  payload: { value: string}
}

export interface IContactsetIsFiltered {
  type: typeof SET_IS_FILTERED_DATA;
  payload: { value: boolean }
}

export interface IContactClearFilter {
  type: typeof CLEAR_CONTACT_FILTER;
}

export interface ISetUsers {
  type: typeof SET_CONTACTS;
  payload: Array<IContactsData>
}

export interface IContactClearSorted {
  type: typeof CLEAR_SORTED
}