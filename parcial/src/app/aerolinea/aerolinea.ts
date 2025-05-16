import { Flight } from "./flight";

export class Aerolinea {
    id: string;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    identityColor: string;
    slogan: string;
    flights:Array<Flight>;

    constructor(id: string,
    airlineName: string,
    country: string,
    city: string,
    address: string,
    identityColor: string,
    slogan: string,
    flights:Array<Flight>)
    {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address
        this.identityColor = identityColor;
        this.slogan = slogan;
        this.flights = flights;
    }
}
