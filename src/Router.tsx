import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { AppLayout } from "./component/AppLayout";
import { AboutUs } from "./pages/AboutUs";
import { CivilEngeneering } from "./pages/CivilEngeneering";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { HouseCrafting } from "./pages/HouseCrafting";
import { Iscode } from "./pages/Iscode";

const NoMatch = () => {
    return (
        <AppLayout>
            <SimpleGrid placeItems="center" w="100vw" h="100vh" bgColor="tt.offwhite">
                404 - Not Found
            </SimpleGrid>
        </AppLayout>
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
                <Route path="/homestudiodrafting" component={HouseCrafting} />
                {/* <Route path="/variousexams" component={Home} /> */}
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
