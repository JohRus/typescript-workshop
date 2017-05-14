# Typescript workshop

## IDE
Vi anbefaler at du bruker en ide som støtter typescript, som f.eks. Intellij eller Visual Studio Code

## Intro
Vi har laget en liten app (React, redux, bootstrap, webpack, babel) som gjør det mulig å søke i Difi sitt åpne datasett 
om idrettsanlegg i Norge. Per nå er søket meget primitivt og det er kun mulig å søke på eier. For eksempel: "Oslo kommune".

Start med å klone ned repoet, kjør `npm install`, og start appen ved å kjøre `npm run start`. Appen serves på localhost:8080.

Typescriptdokumentasjonen finnes [her](https://www.typescriptlang.org/docs/home.html). 

Følgende sider kan være en god start:

* [basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
* [variable declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

En liten ting som er greit å være klar over er hvordan TypeScript bruker
[type compatability](https://www.typescriptlang.org/docs/handbook/type-compatibility.html).
I motsetning til språk som f.eks. Java trenger ikke typer å være nøyaktig like, de trenger bare
å ha samme funksjonalitet for å være kompatible med hverandre.

```typescript
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
p = new Person(); // Dette går bra p.g.a. type-kompabilitet
```

TypeScript har også en god del avansert funksjonalitet som kan være veldig til hjelp. Det er derfor
også anbefalt å ta en liten titt på ting som 

* [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html):
Hvordan TypeScript ofte kan bestemme typer på ting uten at du trenger å være ekplisitt om det.
* [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html):
Mer avanserte datatyper. Som f.eks. union-types og intersection-types.

Det er greit å vite at TypeScript fint kjører side om side sammen med Javascript. I praksis
betyr bare dette at TypeScript ikke kan gi deg så mye hjelp med å kjøre statisk analyse opp
i mot javascript koden. Men når du jobber med denne workshopen vil du se at du får statisk
analyse av ting som blir importert fra f.eks. react. Årsaken til dette er at vi vi i
prosjektet har installert [typedefinisjonsfiler](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
for de ulike rammeverkene vi bruker. 

Dette er metadata-filer som beskriver typedefinisjonen til de ulike delene som blir eksponert fra
bibliotekene. I enkelte tilfeller følger disse med biblioteker (f.eks. redux gjør dette), og
andre ganger er vi avhengig av å bruke typedefinisjoner skrevet av tredjeparter. Disse blir
installert som egne npm-pakker og ligger under `@types/`.

## Bygging
Vi har satt opp en byggkonfigurasjon med webpack som benytter seg av awesome-typescript-loader for å
transpilere typescriptkoden til javascript før alt bundles sammen. Filen tsconfig.json definerer et sett
regler som transpilatoren skal forholde seg til når typescripten transpileres.

## Filtype
For at webpack skal transpilere kode som typescript må de relevante filene ende med `.tsx` og `ts`.

## Oppgave
1. Ta en komponent
2. Bytt filendelse
3. Bygger det fortsatt? Hvis ikke, fiks feil
4. Legg til typer på props og andre steder det er hensiktsmessig
5. Goto 1

Når hele prosjektet er konvertert til Typescript:
1. Fjern babel fra webpack-configen
2. Sett `allowJs` til `false` i tsconfig.json
3. Sett `noImplicitAny` til `true` i tsconfig.json
4. Sett `strictNullChecks` til `true` i tsconfig.json
5. Fiks evt. nye feil som dukker opp

## Forslag til app-utvidelse
* Flere søkeparametere
* Filtrering
* Paginering
* Detaljside for anlegg
* Legg inn kart
* Visualisering av dataen (grafer osv)

