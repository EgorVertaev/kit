export interface IChildrenProps {
  children?: React.ReactNode
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
  id: string
  image: string
  description: string
  descData: string
  name: string
  nameData: string
  date: string
  dateTime: string 
  priority: string
}

export interface IPaginationUseState {
  current: number,
  pageSize: number
}