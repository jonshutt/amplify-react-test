import "./App.css";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  // Heading,
  // Image,
  // View,
  // Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>jons amplify test. updated 26th april....</p>
        <Button onClick={signOut}>Sign Out</Button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
// export default App;
