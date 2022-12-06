import { Component, Inject } from '@angular/core';
import { PROFILE_DATA } from '../injection-tokens/profile.injection-token';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(@Inject(PROFILE_DATA) public data: any) {
    this.name = data.name;
    this.age = data.age;
  }
  public name: string = 'Silvio Júnior';
  public age: number = 26;
}
