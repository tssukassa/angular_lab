import { Injectable } from '@angular/core';
import {HousingLocationInfo} from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  url = 'http://localhost:54841/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const locationJson = await data.json();
    return locationJson ?? {};
  }
}
