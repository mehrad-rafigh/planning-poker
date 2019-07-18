import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import {LocalstorageService} from "./localstorage.service";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  constructor(@Inject(PLATFORM_ID) private platformId: object, private storageService: LocalstorageService) {}

  updateCardValues(arr: string[]) {
    if (isPlatformBrowser(this.platformId)) {
      this.storageService.updateCardValues(arr);
    }
  }

  getCardValues(): string[] {
    if (isPlatformBrowser(this.platformId)) {
      return this.storageService.getCardValues();
    }
  }
}
