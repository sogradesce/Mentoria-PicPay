// Car é uma classe, que define objetos que irão possuir os atributos e
// metodos definodos pela classe quando forem instanciados.
class Car {
    public model: string;
    public color: string;
    public isElectric: boolean;
    private password: string;

    constructor(model: string, color: string, isElectric: boolean) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
        this.password = "função que gera senha";
    }

    public drive(pwd: string): void {
        if (pwd === this.password) {
            const engineStarted: boolean = this.startEngine();

            if (this.isElectric && engineStarted) {
                console.log("Dirigindo sozinho para o local de destino");
                return;
            }

            console.log("Acelera e vamo");
        }
    }

    private startEngine(): boolean {
        console.log(`barulho do motor do ${this.model} ligando...`);

        return true;
    }
}

const carro1 = new Car("fusca", "azul", false);
carro1.color;

// Abstração
abstract class CharacterAbs {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, speed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }

    public abstract damagePerSecond(): number;
}

class GoblinAbs extends CharacterAbs {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): number {
        return this.damage * this.attackSpeed;
    }
}

const goblin = new GoblinAbs("asdf", 123, 321);

class OrcAbs extends CharacterAbs {
    constructor(damage: number, speed: number) {
        const name = "Marcelo";
        super(name, damage, speed);
    }

    public damagePerSecond(): number {
        return (this.damage * this.attackSpeed) / 2;
    }
}

const orc = new OrcAbs(9000, 2);
orc.attackSpeed;

// Encapsulação
class CharacterEncaps {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(value: string) {
        if (value.length > 10) return;
        this._name = value;
    }
}

let encaps = new CharacterEncaps("Marcel");
encaps.set_name("asdfasdfasdfasd");

// Herança
class OrcInherit {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log("Says something ...");
    }
}

const orc1 = new OrcInherit("Carlos", 123);
orc1.talk();

class OrcPequenoInherit extends OrcInherit {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}

const orcPequeno = new OrcPequenoInherit("Carlinhos", 12, "Machado");
orcPequeno.attack();

class OrcPequenoDasMontasInherit extends OrcPequenoInherit {
    public ehPeludo: boolean;

    constructor(
        name: string,
        damage: number,
        weapon: string,
        ehPeludo: boolean,
    ) {
        super(name, damage, weapon);

        this.ehPeludo = ehPeludo;
    }

    public fazer_trancas(): void {
        console.log("Uma linda trança foi feita");
    }
}

const orcPDM = new OrcPequenoDasMontasInherit(
    "Carlinhos neto",
    1,
    "Clava",
    true,
);

// Polimorfismo
class CharacterPolimorf {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log("Says something ...");
    }

    public attack(): void {
        console.log(`Attacks his target with his fists.`);
    }
}

class OrcPolimorf extends CharacterPolimorf {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public talk(): void {
        console.log("Says something but in orcish ...");
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}
