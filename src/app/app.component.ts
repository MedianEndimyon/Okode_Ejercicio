import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*Variables textos */
  title = 'Buscador de películas';
  searchText = 'Intdroduzca su búsqueda aquí...';
  Limpiar = '';
  avisoTextBox = "El contenido del texto de búsqueda debe ser superior a 3 letras";

  id = '';
  public peliculas: Array<any> = [];
  public titulosPeliculas: Array<any> = [];
  

  constructor(private peliculaService:PeliculasService){

  }

  getValue(id:string){
    this.id = id;
  }

  getPeliculas(){
    this.titulosPeliculas = []
    this.peliculas = []
    this.peliculaService.getPelículas(this.id).subscribe((resp:any)=>{
      this.peliculas = resp['Search']
      this.getTitulos()
    })
  
  }

  getTitulos(){
    this.peliculas.forEach(element => {
      this.titulosPeliculas.push(JSON.stringify(element['Title']))
    });
  }

}
