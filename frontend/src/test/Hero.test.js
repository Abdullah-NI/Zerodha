import React from "react";
import { render, screen } from '@testing-library/react';
// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom"
import Hero from "../landing_page/home/Hero";

describe("hero coponent",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "/media/images/homeHero.png");
    })

    test("renders signup button",()=>{
        render(<Hero/>);
        const signupButtons=screen.getByRole("button",{name:"SignUp Now"});
        expect(signupButtons).toBeInTheDocument();
        expect(signupButtons).toHaveClass("btn-primary");
    })
})