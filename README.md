# typescript-workshop

Run npm start in order to start webpack-dev-server
Content is served from localhost:8080

## Intro
Vi har laget en liten app som gjør det mulig å søke i Difi sitt åpne datasett om idrettsanlegg i Norge.
Per nå er søket meget primitivt og det er kun mulig å søke på eier. For eksempel: "Oppsal".

Start med å klone ned repoet, og start appen ved å kjøre `npm run start`.

React, redux, bootstrap, webpack, babel (fjerne etterhvert)

## Bygging
Vi har satt opp en byggkonfigurasjon med webpack som benytter seg av awesome-typescript-loader for å
transpilere typescriptkoden til javascript før alt bundles sammen. Filen tsconfig.json definerer et sett
regler som transpilatoren skal forholde seg til når typescripten transpileres.

## Filtype
For at webpack skal transpilere kode som typescript må de relevante filene ende med `.tsx` og `ts`.

## Sok.jsx
I denne filen må følgende gjøres:
* Definer interface for props
* Definer interface for event 
