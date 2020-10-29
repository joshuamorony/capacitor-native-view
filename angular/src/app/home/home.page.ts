import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Alert } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}

  showAlert() {
    Alert.present({
      message: "hello",
    });
  }
}
