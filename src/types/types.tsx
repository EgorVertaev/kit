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

export interface IPaginationUseState {
  current: number,
  pageSize: number
}