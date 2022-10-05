import { createSlice } from "@reduxjs/toolkit";

const contactsData = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Mandeep Walton",
    email: "mandeep.walton@gmail.com",
    address:
      'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate",B98 9PA',
    createData: "May 26, 2019",
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Elena Sheldon",
    email: "elena.sheldon@gmail.com",
    address: "South Lodge, Reddish Lane, Lymm,WA13 9PY",
    createData: "May 26, 2019",
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Kim Gould",
    email: "kim.gould@gmail.com",
    address: "15 Romilly Street, Liverpool,L6 9JL",
    createData: "May 26, 2019",
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Lucas Harrington",
    email: "harringtonl@gmail.com",
    address: "13 Balfour Crescent, Bracknell, RG12 7JA",
    createData: "May 25, 2019",
  },
  {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Carlton Blackmore",
    email: "carlton.blackmore@gmail.com",
    address: "267 Rundells, Harlow,CM18 7HH",
    createData: "May 25, 2019",
  },
  {
    id: "6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Yasir Stein",
    email: "yasir.stein@gmail.com",
    address: "47 Chelmsford Close, Hull,HU9 5DR",
    createData: "May 25, 2019",
  },
  {
    id: "7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Danika Bass",
    email: "danika.bass@gmail.com",
    address: "65 Chapel Street, Salford,M3 5BZ",
    createData: "May 25, 2019",
  },
  {
    id: "8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
    name: "Shayna Tierney",
    email: "shayna.tierney@gmail.com",
    address: '16 Cedar Avenue, Poulton-Le-Fylde",FY6 8DQ',
    createData: "May 24, 2019",
  },
];

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contactsData: [...contactsData],
    isSorted: false,
    isSortedIconColor: false,
    isFiltered: false,
  },

  reducers: {
    addContact(state, action) {
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

      state.contactsData.push(newData);
    },

    deleteContact(state, action) {
      state.contactsData = state.contactsData.filter(
        (el) => el.id !== action.payload
      );
    },

    sortDataFromAtoZ(state) {
      state.contactsData = state.contactsData.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );
      state.isSorted = false;
    },
    
    sortDataFromZtoA(state) {
      state.contactsData = state.contactsData.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
      state.isSorted = true;
    },

    clearSorted(state) {
      state.contactsData = [...contactsData]
      state.isSorted = false;
    },

    setIsSortedIconColor(state, action) {
      state.isSortedIconColor = action.payload
    },

    filterData(state, action) {
      const FilterValue = action.payload
      if(FilterValue.length === 0) {
        state.contactsData = [...contactsData]
      }
      state.contactsData = state.contactsData.filter(el => el.name.includes(FilterValue))
    },

    setIsFiltered(state, action) {
      state.isFiltered = action.payload  
    },

    clearFilter(state) {
      state.contactsData = [...contactsData]
    }
  },
});

export const {
  addContact,
  deleteContact,
  sortDataFromAtoZ,
  sortDataFromZtoA,
  clearSorted,
  setIsSortedIconColor,
  filterData,
  setIsFiltered,
  clearFilter,
} = contactSlice.actions;
export default contactSlice.reducer;
