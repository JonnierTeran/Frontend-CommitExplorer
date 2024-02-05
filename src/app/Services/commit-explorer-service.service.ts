import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCommitsModels } from '../Models/RequestCommits.models';
import { ResponseCommitsModels } from '../Models/ResponseCommits.models';


// Injectable que nos permite usar servicios externos en el Service que hemos creado
@Injectable({
  providedIn: 'root'
})
export class CommitExplorerServiceService { //Servicio para realizar peticiones Http

 //Rutas de EndPoints
 private Url:string;

 //Injeccion del servicios exteros e inicializacion de atributos
 constructor(private _HttpClient:HttpClient){

    //Se Ingresa la URL del API creada en .Net
     this.Url = 'http://localhost:5092/CommitExplorer/ObtenerDatosDesdeGithub';
 }


 //Metodo para hacer una peticion Http a la API de tipo POST, 
 //enviando un Objeto RequestBody y recibiendo la informacion Requerida en un Objeto ResponseCommitsModels
 public GetResponse(RequesBody:RequestCommitsModels):Observable<ResponseCommitsModels[]>{
    return this._HttpClient.post<ResponseCommitsModels[]>(this.Url,RequesBody);
 }

}
