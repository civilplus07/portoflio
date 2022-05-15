import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { CivilEngeneering } from "./pages/CivilEngeneering";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { Iscode } from "./pages/Iscode";

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
                <Route path="/iscode" component={Iscode} />
                <Route path="/civilengeneering" component={CivilEngeneering} />
                {/* <Route path="/tenderobligation" component={Home} /> */}
                {/* <Route path="/importantdocuments" component={Home} /> */}
                {/* <Route path="/homestudiodrafting" component={Home} /> */}
                {/* <Route path="/variousexams" component={Home} /> */}
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
