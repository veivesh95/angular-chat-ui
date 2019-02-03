import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  message: string;
  isSpinning = false;
  loading = false;
  data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    }
  ];
  constructor() {}

  ngOnInit() {}

  clicked(): void {
    console.log(this.message);
  }

  getId(title) {
    this.isSpinning = true;
    console.log(title);
    setTimeout(() => {
      this.isSpinning = false;
    }, 1500);
  }

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: "Ant Design Title 1"
          },
          {
            title: "Ant Design Title 2"
          },
          {
            title: "Ant Design Title 3"
          },
          {
            title: "Ant Design Title 4"
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }
}
