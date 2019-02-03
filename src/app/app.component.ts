import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.scss"]
})
export class AppComponent {
  title = "angular-chat";
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;

  collapsed() {
    console.log("Sider is collapsed");
  }
}
