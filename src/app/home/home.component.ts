import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

      public data = [
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'Himesh', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'Anant', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
        {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    ];
        dtOptions: DataTables.Settings = {};
          constructor() { }
          isChecked = false;
          checkuncheckall()
          {
            if(this.isChecked == true)
          {
          this.isChecked = false;
          }
          else
          {
          this.isChecked = true;
          }
          
          }
          
      ngOnInit(): void {
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 8,
          processing: true
        };
      }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
