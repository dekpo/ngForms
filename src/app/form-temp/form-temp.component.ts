import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-temp',
  templateUrl: './form-temp.component.html',
  styleUrls: ['./form-temp.component.css']
})
export class FormTempComponent implements OnInit {

  firstname: any;
  lastname: any;
  email: any;
  message: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit( val: any ): void{
    console.log('Formulaire Envoyé', val);
    this.http.post('http://localhost/form/post.php?var=hello', '').subscribe(
      (response) => console.log('Response', response)
    );
  }

}
