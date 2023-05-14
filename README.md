<!-- @format -->

### Omio Search Bar Testing

Draft where I test UI and functionnalities to reproduce the omio research bar

Using Typescript for the first time

Used create-react-app as follows :
npx create-react-app obt --template typescript

installed TailwindCSS, react-transition-group
all packages used:

`obt@0.1.0 /home/razal/projects/obt
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── @types/jest@27.5.2
├── @types/node@20.1.0
├── @types/react-dom@18.2.4
├── @types/react@18.2.6
├── dayjs@1.11.7
├── gh-pages@5.0.0
├── react-dom@18.2.0
├── react-scripts@5.0.1
├── react-transition-group@4.4.5
├── react@18.2.0
├── tailwindcss@3.3.2
├── ts-node@10.9.1
├── tslib@2.5.0
├── typescript@4.9.5
└── web-vitals@2.1.4`

---

#### **Idée de base** :

Se familiariser avec Typescript, utiliser React Testing Library pour React, Jest pour tout ce qui est .ts
Faire la réplique de la barre de recherche d'Omio, proposer une UI pour afficher les résultats de recherche. Le tout le + 'From scratch' que possible, pas package d'UI, ni pour les Types (TS), Sauf Tailwind et React Transition Group, mon but était de me concentrer sur TypeScript, les tests et surtout proposer un UI pour les résultats de recherche.

**Erreur :** J'étais parti biaisé, en voulant tout faire j'ai fini par me casser la gueule. J'ai eu du mal à tout typer les deux premiers jours, mais j'en ai beaucoup appris et ça va me servir pour la suite, je passerai full TypeScript au prochain projet. J'ai fini par laisser tomber les test aussi. L'UI, comment distriber les states, intéractions entre components m'ont pris du temps.

**Clean Code :** Je commence par un brouillon, pas de structure de code particulière, pas de bonne décomposition de l'UI. Mais personne ne veut subir la tâche de réanger son code par la suite, leçon apprise. C'est devenu beaucoup plus facile une fois que je décomposais bien mes elements, j'ai mieux fait ça sur la navbar pour mobile et la partie date de sélection de villes. Et j'aurais collecté avec `<from></from>` et `FormData(form)` pour submit au lieu d'utiliser useState.

**Mobile First :** L'enfer c'est de devoir repasser sur tout le code pour le rendre responsive.

**L'UI :** Un peu de mal avec le calendrier, merci `dayjs` et grid.
mon rendu n'est pas parfait évidemment, il n'est même pas fini à vrai dire. Mobile first.

J'étais content de voir le rendu sur mon tel, mais je redescends vite dès que je vois mon code chaotique. C'est un problème que je vais régler au prochains projets. Mais au final je suis content d'avoir travaillé sur ça. J'ai beaucoup appris sur React aussi, et j'aime de plus en plus. J'ai aussi hâte de mettre davantage à typescript et d'apprendre à tester.
