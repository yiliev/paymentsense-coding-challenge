import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, SortDirection } from '@angular/material';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  public displayedColumns = ['flag', 'name'];
  public dataSource = new MatTableDataSource<Country>([]);
  public selectedCountry: Country;

  @Input() countries?: Country[];

  @Output() onCountrySelect = new EventEmitter<Country>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource.data = this.countries;
    this.dataSource.paginator = this.paginator;
  }

  selectCountry(country: Country) {
    this.onCountrySelect.emit(country)
  }
}
