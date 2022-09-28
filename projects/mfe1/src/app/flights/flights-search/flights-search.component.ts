import {Component, ViewChild, ViewContainerRef, Inject, Injector} from '@angular/core';
import { LazyComponent } from '../lazy/lazy.component';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector:Injector) { }

  search() {
    alert('Not implemented for this demo!');
  }

  terms() : void {

    this.viewContainer.createComponent(LazyComponent,{
      index: 0,
      injector : this.injector
    })
  }


}
