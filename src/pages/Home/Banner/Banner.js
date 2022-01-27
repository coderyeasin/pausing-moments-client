import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 80px);
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const Banner = () => {
  return (
    <div>
      <Carousel defaultWait={5000}>
        <Slide right>
          <div className="first md:flex md:justify-center md:items-center">
            <div className="bg-teal-700 height-300px p-3 text-white text-7xl text-center rounded-xl md:w-5/12 bg-opacity-50">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Couple Tours!")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="second md:flex md:justify-center md:items-center">
            <div className="bg-teal-700 height-300px p-3 text-white text-7xl text-center rounded-xl md:w-5/12 bg-opacity-50">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Friends Hangouts!")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </div>
          </div>
        </Slide>

        <Slide right>
          <div className="third md:flex md:justify-center md:items-center">
            <div className="bg-teal-700 height-300px p-3 text-white text-7xl text-center rounded-xl md:w-5/12 bg-opacity-50">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Adventure!")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  );
};

export default Banner;
