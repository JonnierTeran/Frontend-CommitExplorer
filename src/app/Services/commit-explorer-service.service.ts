import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCommitsModels } from '../Models/RequestCommits.models';

@Injectable({
  providedIn: 'root'
})
export class CommitExplorerServiceService { //Servicio para realizar peticiones Http

 //Rutas de EndPoints
 private Url:string;

 //Injeccion del servicios exteros e inicializacion de atributos
 constructor(private _HttpClient:HttpClient){

     this.Url = 'https://localhost:7019/CommitExplorer/ObtenerDatosDesdeGithub';
 }


 //Metodo para hacer una peticion Http a la API de tipo POST, enviando un Objeto y recibiendo la informacion Requerida
 public GetResponse(RequesBody:RequestCommitsModels):Observable<any>{
    return this._HttpClient.post(this.Url,RequesBody);
 }

}
