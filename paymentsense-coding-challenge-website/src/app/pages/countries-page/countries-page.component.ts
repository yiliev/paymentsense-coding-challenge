import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from 'src/app/models/country';
import { PaymentsenseCodingChallengeApiService } from 'src/app/services';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss']
})
export class CountriesPageComponent implements OnInit {
  public term = '';
  public filteredCountries: Country[];
  public rawCountries: Country[];
  public selectedCountry: Country;

  constructor(
    private api: PaymentsenseCodingChallengeApiService,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.api.getCountries().subscribe(countries => {
      this.rawCountries = countries
      this.filterCountries();
    })

    this.countriesService.getTerm().subscribe({
      next: t => {
        this.term = t;
        this.filterCountries();
      }
    });
  }

  filterCountries() {
    if (this.term) {
      this.filteredCountries = this.rawCountries.filter(country => country.name.toLowerCase().includes(this.term.toLowerCase()))
    } else {
      this.filteredCountries = [...this.rawCountries];
    }
  }

  onCountrySelect(country) {
    this.selectedCountry = country;
  }
}
