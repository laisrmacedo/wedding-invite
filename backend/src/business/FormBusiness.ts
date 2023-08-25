import { FormDatabase, GuestDB } from "../database/FormDatabase";
import { InsertGuestOutputDTO } from "../dto/FormDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { UnprocessableEntity } from "../errors/UnprocessableEntityError";
import { Guest } from "../model/Guest";

export interface GuestBusinessModel {
  id: string,
  tickets: number,
  createdAt: string,
  response: number | undefined,
  guestsNames: string | undefined,
  repliedAt: string | undefined
}

export class FormBusiness{
  constructor(
    private formDatabase: FormDatabase
  ){}

  public getGuests = async () => {
    return await this.formDatabase.getGuests()
  }

  public inserGuest = async (input: InsertGuestOutputDTO): Promise <void> => {
    const {id, tickets} = input

    if (id.length < 5) {
      throw new BadRequestError("ERROR: 'id' must be at least 5 characters.")
    }
    if (tickets < 1) {
      throw new BadRequestError("ERROR: 'tickets' must be at least equal to 1.")
    }

    const foundId = await this.formDatabase.findGuestById(id)
    if (foundId) {
      throw new UnprocessableEntity("ERROR: 'id' already exists.")
    }

    const guestInstance = new Guest(
      id,
      tickets,
      new Date().toISOString(),
      undefined,
      undefined,
      undefined
    )

    await this.formDatabase.insertGuest(guestInstance.toDBModel())
  }
}