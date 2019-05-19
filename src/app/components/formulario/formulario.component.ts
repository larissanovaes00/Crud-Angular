import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  UserForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'nome' : [null, [Validators.required, Validators.minLength(4)]],
      'email' : [null, Validators.required],
      'image': 'https://media.licdn.com/dms/image/C5103AQFVQKN8XjeV6g/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=4D1xJnMOtjnxoSxVFFXcCgnEhNGafMG4sdRGbggINj0',
      'dateCreate': [null, Validators.required]
    });
  }

  addUser(form: NgForm){
    this.api.addUser(form) 
      .subscribe(res => this.ngOnInit());
  }

}
