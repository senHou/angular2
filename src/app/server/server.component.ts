import { Component } from '@angular/core';

@Component({
  	selector: 'app-server',
  	templateUrl: './server.component.html',
  	styleUrls: ['./server.component.css']
})
export class ServerComponent  {

	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverId = 10;
  serverName = "";
  serverStatus = 'offline';
  serverCreated = false;
  	constructor() { 
  		setTimeout(() => {
  			this.allowNewServer = true;
  		},2000);

      this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  	}

  	onCreateServer() {
      this.serverCreated = true;
  		this.serverCreationStatus = "Server createed. And the name is "+this.serverName;
  	}

    getColor() {
      return this.serverStatus === 'online' ? 'green' :'red';
    }
  	

    checkServerStatus() {
      return this.serverStatus === 'online' ;
    }
}
