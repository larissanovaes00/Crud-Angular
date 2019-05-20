import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  nome: string;
  email: string;
  image: string;
  createDate: string;

  UserForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private api: ApiService, private active: ActivatedRoute) {}
  
  ngOnInit() {

    this.getUser(this.active.snapshot.params['id']);
      this.UserForm = this.formBuilder.group({
        'id' : [null, Validators.required],
        'nome' : [null, [Validators.required, Validators.minLength(4)]],
        'email' : [null, Validators.required],
        'image': 'https://media.licdn.com/dms/image/C5103AQFVQKN8XjeV6g/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=4D1xJnMOtjnxoSxVFFXcCgnEhNGafMG4sdRGbggINj0',
        'dateCreate': [null, Validators.required]
      });

  }

  getUser(id) {
    this.api.getUserOne(id).subscribe(data => {
      console.log(data)
      this.id = data.id;
      this.image = data.image;
      
      
      this.UserForm.patchValue({
        id: data.id,
        nome: data.nome,
        email: data.email,
        dateCreate: data.createDate
      });
    });
  }

  updateUser(form: NgForm) {

    this.api.updateUser(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
