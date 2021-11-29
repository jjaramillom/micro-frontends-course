## Micro-frontends freecodecamp tutorial

The micro-frontends were created using `npx create-mf-app`, and they use React.js and TypeScript.

### Why micro-frontends?

It's the same principle micro-services is based in. If we have an application split into several applications, then different teams can work in each part in parallel, without interfering with each other. Besides, when one application is deployed, every application using it will get the updated version.

Atomic design is:

- Atoms: Buttons, Labels, Images, etc. Core components.

- Molecules: Slightly bigger components. E.g. `LabelInput` which uses a label and an input.

- Organisms: Self-contained pieces of UI which manages its own state, and is made of atoms and molecules.

- Templates and pages: Pieces you can share.
