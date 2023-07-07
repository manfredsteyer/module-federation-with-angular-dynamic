import {
  Component,
  Inject,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(@Inject(Injector) private injector: Injector) {}

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
