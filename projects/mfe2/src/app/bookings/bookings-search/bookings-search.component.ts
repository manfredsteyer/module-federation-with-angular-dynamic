import {
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-bookings-search',
    templateUrl: './bookings-search.component.html',
    standalone: true,
})
export class BookingsSearchComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(private injector: Injector) {}

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(
      (m) => m.LazyComponent
    );

    this.viewContainer.createComponent(comp, { injector: this.injector });
  }
}
