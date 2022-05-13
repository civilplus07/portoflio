import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const NoMatch = () => {
    return (
        <SimpleGrid placeItems="center" w="100vw" h="100vh" bgColor="tt.offwhite">
            404 - Not Found
        </SimpleGrid>
    );
};

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to={"/dashboard"} />
                </Route>
                <Route path="/dashboard" component={Home} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
