export interface IChildrenProps {
  children?: React.ReactNode;
}

export interface IContactsData {
  id: string;
  image: string;
  name: string;
  email: string;
  address: string;
  createData: string;
}

export interface ITicketsData {
  id: string;
  image: string;
  description: string;
  descData: string;
  name: string;
  nameData: string;
  date: string;
  dateTime: string;
  priority: string;
}

export interface IPaginationUseState {
  current: number;
  pageSize: number;
}

export interface IState {
  contacts: IContactInitialState;
  auth: IAuthInitialState;
  user: IuserInitialState;
  tickets: IticketInitialState;
}

export interface IContactInitialState {
  contactsData: Array<IContactsData>;
  isSorted: boolean;
  isSortedIconColor: boolean;
  isFiltered: boolean;
}

export interface Iuser {
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  image: string;
}

export interface IuserInitialState {
  user: Iuser;
}

export interface IAuthInitialState {
  login: string;
  password: string;
  isAuth: boolean;
  error: string;
}

export interface IticketInitialState {
  ticketsData: Array<ITicketsData>;
  isSorted: boolean;
  isSortedIconColor: boolean;
  isFiltered: boolean;
}
