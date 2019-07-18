import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalstorageService {
  constructor() {}

  getLocalStorage(): Storage {
    return window.localStorage;
  }

  updateCardValues(cardValues: string[]): void {
    const localStorage = this.getLocalStorage();
    localStorage.setItem("card-values", cardValues.toString());
  }

  getCardValues(): string[] {
    const localStorage = this.getLocalStorage();
    const valuesAsString = localStorage.getItem("card-values");
    return valuesAsString.split(",");
  }
}
