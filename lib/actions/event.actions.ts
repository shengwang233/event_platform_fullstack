"use server";
import { CreateEventParams } from "@/types";
import { handleError } from "../utils";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
    try {
        
        
    } catch (error) {
        handleError(error)
    }
};

export const getEventById = async (eventId: string) => {
    try {
        
    } catch (error) {
        handleError(error)
    }


}
