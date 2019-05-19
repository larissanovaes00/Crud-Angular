import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../model/user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsuariosComponent implements OnInit {
  
@Input() receberFamilia;

  usuarios: User[];

  constructor(private service: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Recebendo =>  ',  this.receberFamilia);

   this.service.getUser()
      .subscribe(dados => this.usuarios = dados);
  }
  
  deleteUser(id) {
    this.service.deleteUser(id)
      .subscribe(res => this.ngOnInit());
  }
}