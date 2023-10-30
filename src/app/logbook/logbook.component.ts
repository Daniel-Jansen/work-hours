import { Component, Input } from '@angular/core';
import { ProductService } from './logbook.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css'],
})
export class LogbookComponent {
  @Input() data: any[] = [];
  currentYear: number = new Date().getFullYear();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // calls upon the service to get the data
    this.productService
      .getProducts()
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
      });
      console.log(this.data);
  }
}
