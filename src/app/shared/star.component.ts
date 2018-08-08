import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating = 4;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Rating ${this.rating} clicked`);
  }
}
