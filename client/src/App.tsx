import React, { Fragment, useContext } from "react";

import AppRouter from "./routes/Router";
import { Store } from "./store/Store";

export const App = (): JSX.Element => {
    const [state, dispatch] = useContext(Store);
    return <AppRouter />;
};

export default App;
