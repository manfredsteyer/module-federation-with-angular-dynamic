import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

    home() {
      this.viewContainer.clear();
    }

    async load() {
      alert('not implemented yet!');
      // const comp = await import('mfe1/Component').then(m => {
      //   return m.AppComponent;
      // });
      // const factory = this.cfr.resolveComponentFactory(comp);
      // this.viewContainer.createComponent(factory, null, this.injector);
    }
}

