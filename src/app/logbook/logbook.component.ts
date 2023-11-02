import { Component, Input } from '@angular/core';
import { DataService } from './logbook.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css'],
})
export class LogbookComponent {
  @Input() data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // calls upon the service to get the data
    this.dataService
      .getUserData()
      .pipe(
        catchError((error: any) => {
          alert(error.message);
          throw error;
        })
      )
      .subscribe((data: any) => {
        if (data.data && Array.isArray(data.data)) {
          this.data = data.data;
        } else if (Array.isArray(data)) {
          this.data = data;
        } else {
          this.data = [data];
        }
        this.data.forEach((data) => {
          data.sliceddate = this.sliceDate(data.startdate);
        });
      });
  }

  // slices the date to only get YYYY-MM-DD
  public sliceDate(startDate: string): string {
    if (startDate) {
      return startDate.slice(0, 10);
    }
    return '';
  }
}
