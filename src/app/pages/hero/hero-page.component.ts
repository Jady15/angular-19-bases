import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";



@Component({
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
    imports: [ UpperCasePipe ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {
    // Señales
    name = signal('Ironman');
    age = signal(45);

    // Señal computada (solo lectura)
    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    // Señal computada (solo lectura)
    capitalizedName = computed(() => {
        const name = this.name().toUpperCase();
        return name;
    })

    getHeroDescription(){
        return `${ this.name() } - ${ this.age() }`
    }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
    }
}