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
  public ListadoPeliculas: Array<any> = [];
  public tituloSeleccionado: Array<any> = [];

  /* Variables Descriptor */
  public poster = '';
  public titulo = '';
  public resumen = '';
  public actores = '';
  public fechaSalida = '';
  public duracion = '';
  public idiomas = '';


  constructor(private peliculaService:PeliculasService){

  }

  getValue(id:string){
    this.id = id;
  }

  getPeliculas(){
    this.ListadoPeliculas = []
    this.peliculas = []
    this.peliculaService.getPelículas(this.id).subscribe((resp:any)=>{
      console.log(resp)
      this.peliculas = resp['Search']
      this.getListado()
      console.log(this.peliculas)
    })
  
  }

  getListado(){
    this.peliculas.forEach(element => {
      this.ListadoPeliculas.push(JSON.stringify(element['Title']))
    });
  }

  getDetalles(){
      let peliculaSeleccionada = this.tituloSeleccionado[0];
      this.peliculaService.getDetalle(peliculaSeleccionada).subscribe((resp:any)=>{
        console.log(resp);
        this.poster = resp['Poster']
        this.titulo = resp['Title']
        this.resumen = resp['Plot']
        this.fechaSalida = resp['Released']
        this.duracion = resp['Runtime']
        this.actores = resp['Actors']
        this.idiomas = resp['Language']
      })
  }

}
