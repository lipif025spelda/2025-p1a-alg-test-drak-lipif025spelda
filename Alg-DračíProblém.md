# Dračí problém

Království sužuje zlý drak s mnoha hlavami. Král zavolal nejudatnější rytíře
v celém království, aby z nich vybral ty, které pošle do boje.

Drak bude poražen, až mu odseknou **všechny hlavy**. Každý rytíř může
odseknout právě jednu hlavu – ale jen takovou, jejíž výška je **menší nebo
rovna** výšce rytíře. Jako odměnu požaduje každý rytíř přesně tolik zlatých
mincí, kolik měří centimetrů.

**Pomozte králi zjistit nejmenší možnou částku, kterou musí zaplatit, aby
rytíři draka zabili. Pokud to není možné, vypište `-1`.**

> Každý rytíř může být nasazen nejvýše jednou. Jeden rytíř = jedna hlava.

---

## Tvar vstupu

Každý případ je reprezentován typem `Problem`:

```typescript
type Problem = {
  heads: Array<number>;    // výšky drakových hlav v cm
  knights: Array<number>;  // výšky dostupných rytířů v cm
};
```

Vstup je pole objektů typu `Problem`:

```typescript
const data: Array<Problem> = [
  { heads: [130, 140, 150], knights: [125, 131, 135, 142, 146, 153, 160] },
  { heads: [160, 170],      knights: [150, 155, 165] },
  { heads: [100, 120, 130], knights: [100, 120, 130, 140] },
  { heads: [200],           knights: [150, 180, 210, 220] },
];
```

Příklad čtení hodnot:

```typescript
let headCount   = data[0].heads.length;    // → 3
let firstHead   = data[0].heads[0];        // → 130
let firstKnight = data[0].knights[0];      // → 125
```

---

## Tvar výstupu

Funkce `solveProblem` vrací strukturovaný objekt typu `Result`:

```typescript
type Result = {
  index: number;     // pořadí případu (1-based)
  headCount: number; // počet hlav draka
  cost: number;      // minimální cena v zlatých, nebo -1
};
```

Výpis na konzoli pak vypadá takto:

```
 hlavy: 3 | cena: 426 zlatých
 hlavy: 2 | cena: -1 (nelze)
 hlavy: 3 | cena: 350 zlatých
 hlavy: 1 | cena: 210 zlatých
```

---

## Vysvětlení ukázkových případů

| \# | Hlavy | Přiřazení rytíři | Cena | Výsledek |
| :-- | :-- | :-- | --: | :--: |
| 1 | 130, 140, 150 | 131, 142, 153 | 426 | **426 zlatých** |
| 2 | 160, 170 | 165 → hlava 160 ✓, hlava 170 → nikdo | — | **-1** |
| 3 | 100, 120, 130 | 100, 120, 130 | 350 | **350 zlatých** |
| 4 | 200 | 210 | 210 | **210 zlatých** |

> Ve druhém případě je rytíř výšky 165 cm schopen odseknout hlavu 160 cm,
> ale na hlavu 170 cm již žádný rytíř nedosáhne – výsledek je `-1`.
> V prvním případě rytíř výšky 125 cm **není použit** – je příliš malý na
> jakoukoli hlavu, a proto ho král do boje neposílá.

---

## Tip k řešení

Klíčová myšlenka: pro každou hlavu chceme najít **nejlevnějšího** (nejnižšího)
rytíře, který na ni ještě dosáhne. Pomůže seřadit hlavy i rytíře vzestupně
a procházet je systematicky.

Implementujte funkci `canCut`, která rozhodne, zda rytíř na hlavu dosáhne:

```typescript
function canCut(knightHeight: number, headHeight: number): boolean {

}
```

Implementujte funkci `solveProblem`, která pro každou hlavu (od nejnižší)
najde nejlevnějšího dostupného rytíře a sečte jejich výšky. Pokud pro
některou hlavu žádný rytíř nezbývá, vrátí `-1`:

```typescript
function solveProblem(p: Problem, index: number): Result {

}
```

Implementujte funkci `formatResult`, která naformátuje výsledek do
požadovaného tvaru:

```typescript
function formatResult(r: Result): string {

}
```

> **Nápověda ke strategii:** Seřaďte kopii pole `heads` i `knights` vzestupně pomocí `.sort((a, b) => a - b)`. (Nebo prostě předpokládejte, že pole jsou už seřazená.)

> Poté pro každou hlavu (od nejmenší) projděte pole rytířů a vyberte prvního dosud nepoužitého, který splňuje podmínku `canCut`. 

> Takto vždy spotřebujete nejlevnějšího možného rytíře a ušetříte dražší pro větší hlavy.
