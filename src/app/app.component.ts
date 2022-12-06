import {
  Component,
  Injector,
  OnInit,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { ExpandableRowDirective } from './directives/expandable-row.directive';
import { PROFILE_DATA } from './injection-tokens/profile.injection-token';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild(ExpandableRowDirective, { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  data = {
    name: 'Júnior',
    age: 26,
  };

  ngOnInit() {
    console.log(this.container);
  }

  createComponent() {
    const injector: Injector = Injector.create({
      providers: [{ provide: PROFILE_DATA, useValue: this.data }],
    });

    this.container.clear();
    this.container.createComponent(ProfileComponent, { injector });
  }
}
