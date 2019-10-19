import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Routes
import HomePage from "./HomePage";

// Bulma tutorial
import BulmaHome from "./bulma/BulmaHome";
import Project1 from "./bulma/Project1";
import Project2 from "./bulma/Project2";
import Project3 from "./bulma/Project3";
import Buttons from "./bulma/Buttons";

// Animations test
import Animations from "./animations/Animations";

import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import EmploymentPage from "./EmploymentPage";
import NotFound from "./NotFound";

export const AppRouter = props => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/animations" component={Animations} />
                    <Route path="/skills" component={SkillsPage} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/employment" component={EmploymentPage} />
                    <Route exact path="/bulma" component={BulmaHome} />
                    <Route path="/bulma/1" component={Project1} />
                    <Route path="/bulma/2" component={Project2} />
                    <Route path="/bulma/3" component={Project3} />
                    <Route path="/bulma/buttons" component={Buttons} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        </Router>
    );
};

export default AppRouter;
