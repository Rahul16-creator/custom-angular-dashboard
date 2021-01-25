import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenot-found',
  templateUrl: './pagenot-found.component.html',
  styleUrls: ['./pagenot-found.component.css']
})
export class PagenotFoundComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  error: any;
  ngOnInit(): void {

    this.router.data.subscribe(response => {
      this.error = response
    })

  }

}
