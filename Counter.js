import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  {{counter}}
  <button (click)='increment()'>Increment</button>
  <button (click)='decrement()'>Decrement</button>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  public counter : number = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
