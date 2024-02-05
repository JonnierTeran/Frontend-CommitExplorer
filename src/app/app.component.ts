import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommitExplorerServiceService } from './Services/commit-explorer-service.service';
import { RequestCommitsModels } from './Models/RequestCommits.models';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  private RequestBody:RequestCommitsModels;
  constructor(private _CommitService:CommitExplorerServiceService){

    this.RequestBody = new RequestCommitsModels("Angular",2);
    
    console.log("AQUI ESTA ANGULAR BRO")
    this._CommitService.GetResponse(this.RequestBody)
    .subscribe( Response => console.log(Response)
              , Err=> console.log(Err))
  }
}
