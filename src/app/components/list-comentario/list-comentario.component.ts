import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit {
  listComentarios: Comentario[] = [];

  constructor(private _comentarioService:ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioService.getListComentarios().subscribe(data => {
      this.listComentarios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarComentario(id:any){
    this._comentarioService.deleteComentario(id).subscribe(data => {
      this.getComentarios();
    }, error => {
      console.log(error);
    })

  }
}
