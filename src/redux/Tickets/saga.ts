import { takeEvery, call, put } from "redux-saga/effects"
import { getAllTickets } from "../../api/tickets"
import { ITicketsData } from "../../types/types"
import { TICKET_FETCH_REQUESTED, setTickets } from "./ticketsAction"

function * setContactWorker() {
  const tickets: Array<ITicketsData> = yield call(getAllTickets)
  yield put(setTickets(tickets))
}

export function * sagaTicketWatcher() {
  yield takeEvery(TICKET_FETCH_REQUESTED, setContactWorker)
}