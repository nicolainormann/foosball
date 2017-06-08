import { Component } from '@angular/core';

import { DialogueService } from '.././dialogue.component/dialogue.service';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.html',
  styleUrls: ['./dialogue.scss']
})
export class DialogueComponent {
  dialogObj;

  constructor(private dialogueService: DialogueService){}

  ngOnInit(){
    this.dialogueService.dialogueObservable.subscribe(dialogObj => {
      this.dialogObj = dialogObj;
      console.log(dialogObj);
    });
  }

}
