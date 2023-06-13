import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing">
    <h2 class="listing-heading">{{ housingLocation.firstname}}, {{housingLocation.lastname }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <p class="listing-location">{{ housingLocation.ssnnum}}</p>
    <p class="listing-location">{{ housingLocation.dob}}</p>
    <p class="listing-location">{{ housingLocation.confidence}}</p>
    <p class="listing-location">{{ housingLocation.klids}}</p>
    <p class="listing-location">{{ housingLocation.kliddetails}}</p>
    <p class="listing-location">{{ housingLocation.uci}}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
