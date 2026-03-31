export type EventWeapon = "E" | "S" | "F";

export type EventAge = "K" | "C" | "J" | "U23" | "A" | "V";

export interface GetEventsParams {
   region?: string;
   event_name?: string;
   category?: string;
   type?: string;
   weapon?: EventWeapon;
   gender?: "M" | "F";
   age?: EventAge
   from?: string; 
   to?: string;
}

export interface Event {
   event_id: string;
   age: EventAge;
   category: boolean;
   event_name: string;
   gender: "M" | "F";
   is_international: boolean;
   org_user_id: string;
   serie: string[];
   start: string;
   status: string;
   type: "T" | "I";
   weapon: EventWeapon;
}