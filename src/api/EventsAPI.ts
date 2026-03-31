import { CancelToken } from "axios";
import API from "./API";
import { Event, GetEventsParams } from "models/Event.model";

export default {

   getAll: async( params?: GetEventsParams, cancelToken?: CancelToken ) => {
      const { data } = await API.get<Event[]>("/events", {
         params: {
            event_name: params?.event_name || undefined,
            category: params?.category === "true" ? true : params?.category === "false" ? false : undefined, 
            type: params?.type || undefined,
            weapon: params?.weapon || undefined,
            gender: params?.gender || undefined,
            age: params?.age || undefined,
            from: params?.from || undefined, 
            to: params?.to || undefined
         }, cancelToken
      }) 
      return data;
   },

   // getById: async( id: number ) => {}
}