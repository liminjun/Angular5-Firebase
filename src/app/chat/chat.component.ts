import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  uid:string;
  private sub:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.uid=params["id"];
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
