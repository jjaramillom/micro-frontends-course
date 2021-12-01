## Micro-frontends freecodecamp tutorial

The micro-frontends were created using `npx create-mf-app`, and they use React.js and TypeScript.

### Why micro-frontends?

It's the same principle micro-services is based in. If we have an application split into several applications, then different teams can work in each part in parallel, without interfering with each other. Besides, when one application is deployed, every application using it will get the updated version.

Atomic design is:

- Atoms: Buttons, Labels, Images, etc. Core components.

- Molecules: Slightly bigger components. E.g. `LabelInput` which uses a label and an input.

- Organisms: Self-contained pieces of UI which manages its own state, and is made of atoms and molecules.

- Templates and pages: Pieces you can share.

### Error handling =>

If we have our demo, and one of the micro-frontends goes down, the app would break. But since the deployment process is different, this doesn't matter.

#### Deployment process of Module federation =>

Build and deploy to a static asset store such as S3. So as long as S3 is up and running, the app is going to work.

What we should worry about is that a developer may change the API of a micro-frontend, and they might forget to update the other teams with this change, so that the usage might break.
For this reason it is important to use error boundaries. SafeComponent, or even loading a previous version of the micro-frontend.

SafeComponent
```jsx
import React from 'react';

interface State {
  hasError: false;
}

export default class SafeComponent extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### Nomenclature =>

In this example, the home is the remote (which has the remote components and functionalities). On the other hand, the PDP is the host, which hosts the `Header` and other things that are remote to it.