import { Component } from '@angular/core';
import { DialogueService } from '.././dialogue.component/dialogue.service';

@Component({
  selector: 'start',
  templateUrl: './start.html',
  styleUrls: ['./start.scss']
})
export class StartComponent {
  constructor(private dialogueService: DialogueService){

  }

	openDialogue(){
    this.dialogueService.openDialogue({
      header: "Dialogue",
      content: `
        <div class="dialogue">
          <button>Dialogue button</button>
        </div>
      `,
      close: true
    });
  }
}
