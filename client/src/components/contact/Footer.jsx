import React from "react";
import Wrapper from "../helpers/Wrapper";
import styled from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <Wrapper>
        <section className={styled["footer-content"]}>
          
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="#home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" smooth>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#menu" smooth>
                  Order
                </Link>
              </li>
              <li>
                <Link to="#contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Find us </h2>
            <article className={styled.details}>
              <p>
                Call <span>420-420-420</span>
              </p>
              <p>
                Address <span>Ammachi, Kilinochi Premises, University of Jaffna.</span>
              </p>
              <p>
                Mail Us <span>ammachi@gmail.com</span>
              </p>
            </article>

            <div className={styled.socials}>
              <ImAndroid size="25px" />
              <ImAppleinc size="25px" />
              <AiFillInstagram size="30px" />
              <AiOutlineTwitter size="30px" />
              <FaFacebookSquare size="28px" />
            </div>
          </div>
        </section>
      </Wrapper>
    </footer>
  );
};

export default Footer;
