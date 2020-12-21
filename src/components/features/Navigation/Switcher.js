import React from "react"
import { Switch, Route } from "react-router-dom"
import Home, { AboutPage, ContactPage, LoginPage, ProductsPage, TestimoniesPage } from "../../../pages"

const Switcher = () => (
    <Switch>
        <Route path="/about">
            <AboutPage />
        </Route>
        <Route path="/products">
            <ProductsPage />
        </Route>
        <Route path="/testimonies">
            <TestimoniesPage />
        </Route>
        <Route path="/contact">
            <ContactPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export default Switcher