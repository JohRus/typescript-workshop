# typescript-workshop

## IDE
Vi anbefaler at du bruker en ide som støtter typescript, som f.eks. Intellij eller Visual Studio Code

## Intro
Vi har laget en liten app (React, redux, bootstrap, webpack, babel) som gjør det mulig å søke i Difi sitt åpne datasett 
om idrettsanlegg i Norge. Per nå er søket meget primitivt og det er kun mulig å søke på eier. For eksempel: "Oslo kommune".

Start med å klone ned repoet, kjør `npm install`, og start appen ved å kjøre `npm run start`. Appen serves på localhost:8080.

Typescriptdokumentasjonen finnes [her](https://www.typescriptlang.org/docs/home.html). Sjekk f.eks. ut 
[interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html) for å komme i gang.

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
4. Fiks evt. nye feil som dukker opp

## Forslag til app-utvidelse
* Flere søkeparametere
* Filtrering
* Paginering
* Detaljside for anlegg
* Legg inn kart
* Visualisering av dataen (grafer osv)
