import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Output('viewChanged') viewChanged: EventEmitter<string> = new EventEmitter(false);
  currentView: string;

  constructor() {
  }

  ngOnInit() {
  }

  changeView(viewName) {
    this.currentView = viewName;
    this.viewChanged.emit(this.currentView);
  }


  ngOnChanges(changes: SimpleChanges): void {
  }
}
