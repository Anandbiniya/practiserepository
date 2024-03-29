import React from "react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import "./bodyabove.css";
function Bodyabove() {
  return (
    <div style={{ background: "rgb(44, 19, 56)" }}>
      <div className="body-above-container">
        <h1 className="body-above-title">
          Time tracking for <em>better</em> work, not overwork.
        </h1>
        <div className="body-below-container">
          <div className="header-body-left">
            <p style={{ color: "white" }}>
              Join 5 million users in using the world's best time tracking
              software
            </p>
            <div>
              <form>
                <div className="form-container">
                  <div className="form-group-email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value=""
                    />
                  </div>
                  <div className="form-group-password">
                    <div>
                      <div className="form-password-icon-wrapper">
                        <div className="form-group-password-input">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="A strong password"
                            value=""
                          />
                        </div>
                        <div className="form-group-password-icon">
                          <svg
                            width="35"
                            height="35"
                            fill="#FCE5D8"
                            viewBox="0 0 20 20"
                          >
                            <g
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g id="_Icons-/-View-Copy-3">
                                <g id="_Icons-/-Link-/-Neutral">
                                  <polygon
                                    id="Shape"
                                    points="0 0 20 0 20 20 0 20"
                                  ></polygon>
                                </g>
                                <path
                                  d="M10.0227494,4 C13.9544363,4 16.9468532,6 19,10 C17.1000377,14 14.1142326,16 10.0425847,16 C5.97093673,16 2.95674184,14 1,10 C3.08347938,6 6.09106252,4 10.0227494,4 Z M10.017694,5.8 C6.9597153,5.8 4.62048397,7.2 3,10 C4.52191032,12.8 6.86628412,14.2 10.0331214,14.2 C13.1999587,14.2 15.5222516,12.8 17,10 C15.403108,7.2 13.0756727,5.8 10.017694,5.8 Z M10,7 C11.6568542,7 13,8.34314575 13,10 C13,11.6568542 11.6568542,13 10,13 C8.34314575,13 7,11.6568542 7,10 C7,8.34314575 8.34314575,7 10,7 Z"
                                  id="Combined-Shape"
                                  fill="#7E6E85"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "40px" }}>
                    <button type="submit" className="body-signup-submit-btn">
                      Sign up with email
                    </button>
                    <div className="body-signup-icons">
                      <p style={{ color: "#FCE5D8" }}>Or sign up with:</p>
                      <button type="button" color="#FCE5D8">
                        <svg width="28" height="28" viewBox="0 0 20 20">
                          <g fill="none">
                            <path
                              d="M17.876 10.284c0-.574-.052-1.127-.147-1.657H10.1v3.134h4.36a3.726 3.726 0 01-1.617 2.444v2.033h2.618c1.531-1.41 2.415-3.487 2.415-5.954z"
                              fill="#FCE5D8"
                            ></path>
                            <path
                              d="M10.1 18.2c2.187 0 4.02-.725 5.36-1.962l-2.617-2.033c-.725.486-1.653.773-2.743.773-2.11 0-3.895-1.424-4.532-3.339H2.862v2.099A8.097 8.097 0 0010.1 18.2z"
                              fill="#FCE5D8"
                            ></path>
                            <path
                              d="M5.568 11.639a4.869 4.869 0 01-.254-1.539c0-.534.092-1.053.254-1.539V6.462H2.862A8.097 8.097 0 002 10.1c0 1.307.313 2.544.862 3.638l2.706-2.099z"
                              fill="#FCE5D8"
                            ></path>
                            <path
                              d="M10.1 5.222c1.19 0 2.257.408 3.096 1.21L15.52 4.11C14.117 2.803 12.283 2 10.1 2a8.097 8.097 0 00-7.238 4.462l2.706 2.099c.637-1.915 2.422-3.34 4.532-3.34z"
                              fill="#FCE5D8"
                            ></path>
                          </g>
                        </svg>
                      </button>
                      <button type="button" color="#FCE5D8">
                        <svg viewBox="0 0 20 20" version="1.1">
                          <g>
                            <path
                              d="M15.027 9.67a4.048 4.048 0 011.916-3.392 4.112 4.112 0 00-3.244-1.763c-1.365-.144-2.688.82-3.384.82-.709 0-1.78-.806-2.933-.782a4.317 4.317 0 00-3.636 2.229c-1.571 2.735-.399 6.756 1.107 8.967.753 1.083 1.634 2.293 2.786 2.25 1.127-.047 1.548-.723 2.91-.723 1.347 0 1.742.723 2.918.696 1.21-.02 1.972-1.088 2.699-2.181a8.975 8.975 0 001.234-2.527 3.908 3.908 0 01-2.373-3.594zm-2.285-6.826A3.873 3.873 0 0013.685 0a4.25 4.25 0 00-2.714 1.352 3.69 3.69 0 00-.968 2.739 3.523 3.523 0 002.739-1.247z"
                              fill="#FCE5D8"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <p color="#FCE5D8">
                  By signing up, you agree to our <span>terms of service</span>,{" "}
                  <span>privacy policy</span>
                  and to receiving marketing communication from Toggl Track. You
                  can opt out anytime.
                </p>
              </form>
            </div>
          </div>
          <div className="header-body-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Bodyabove;
