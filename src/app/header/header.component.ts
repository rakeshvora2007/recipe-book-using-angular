import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onNavigationSelect(value: string) {
    this.selectedValue.emit(value);
  }
}
