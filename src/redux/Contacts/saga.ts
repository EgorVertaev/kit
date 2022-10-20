import { takeEvery, call, put } from "redux-saga/effects"
import { getAllContacts } from "../../api/contacts"
import { IContactsData } from "../../types/types"
import { CONTACTS_FETCH_REQUESTED, setUsers } from "./contactActions"

function * setContactWorker() {
  const contacts: Array<IContactsData> = yield call(getAllContacts)
  yield put(setUsers(contacts))
}

export function * sagaContactWatcher() {
  yield takeEvery(CONTACTS_FETCH_REQUESTED, setContactWorker)
}