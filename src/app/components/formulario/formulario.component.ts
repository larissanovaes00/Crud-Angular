import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios/usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  selectedFile: File = null;

  onFileSelected(event){
   this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const formularioFoto = new FormData();
    formularioFoto.append('image', this.selectedFile.name)
    this.http.post('http://localhost:3000', formularioFoto)
    .subscribe (res => {
      console.log(res);
    })
  }

  form: FormGroup;
  Submitted = false;

  constructor(private fb: FormBuilder, private service: UsuariosService, private http: HttpClient) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }

  onSubmit(){
    this.Submitted = true;
    console.log(this.form.value);
    if (this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('adicionado com sucesso!'),
        error => console.error(error),
        () => console.log('request ok')
      );      
    }
  }

  onCancel(){
    this.Submitted = false;
    this.form.reset();
  }
}
