import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
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
      <Carousel defaultWait={3000}>
        <Slide right>
          <div className="first md:flex md:justify-center md:items-center">
            <div className="bg-blue-900 height-300px pr-3 w-48 bg-opacity-50">
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="second md:flex md:justify-center md:items-center">
            <div className="bg-blue-400 height-300px pr-3 w-48 float-right">
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
            </div>
          </div>
        </Slide>

        <Slide right>
          <div className="third md:flex md:justify-center md:items-center">
            <div className="bg-green-900 height-300px pr-3 w-48 float-right">
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
              <li className="text-2xl text-teal-100 text-right list-none">
                Latest Blocg
              </li>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  );
};

export default Banner;
