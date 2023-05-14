<!-- @format -->

### Omio Booking Testing

Draft where I test UI and functionnalities to reproduce the omio research bar
Using Typescript for the first time

Used create-react-app as follows :
npx create-react-app obt --template typescript

installed TailwindCSS,
all packages used:

obt@0.1.0 /home/razal/projects/obt
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── @types/jest@27.5.2
├── @types/node@16.18.26
├── @types/react-dom@18.2.4
├── @types/react@18.2.6
├── react-dom@18.2.0
├── react-scripts@5.0.1
├── react@18.2.0
├── tailwindcss@3.3.2
├── typescript@4.9.5
└── web-vitals@2.1.4

I observe that the ideal documentation is no documentation, the naming,
conventions used, code structure should speak for themselves
To document the good way, I should know full vocabulary, be familiar with
what can happen in a code ? For example, I called a function that fetches
all the APIs provided, treates them and stores pushes them into arrays fetchAndStore, but it could be fetchaAndAllocate, fetchAndTreatAndPush,
extractFromApi etc...

To make the most solid software, i.e. one that doesn't beark after few clicks, consider the user as the fairly silly person that will try to action stuff that a normal user won't, or a player wants to uncover all the easter eggs hidden in your game (if there are any)
