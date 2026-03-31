import EventsAPI from "api/EventsAPI"
import useFetchData from "./useFetchData"
import { GetEventsParams } from "models/Event.model"

export default function useEvents( params: GetEventsParams = {}) {
   return useFetchData({
      APIMethod: EventsAPI.getAll,
      debounce: true,
      params: [ params ]
   })
}