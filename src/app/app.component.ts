import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  pageData={
    totalRows:93,
    rowsPerPage:10,
    currentPage:2
  }

  pageClick(param:any):void{
    console.log("pageClick 分页参数",param)
  }
}
