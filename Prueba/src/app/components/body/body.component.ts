
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Persona } from '../../modells/Persona';

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [HeaderComponent]
})
export class BodyComponent {
    personas : Array<Persona>
    
    constructor(){
        this.personas = new Array<Persona>()
    }
}
