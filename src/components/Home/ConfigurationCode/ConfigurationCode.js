import React from "react";
import Configuration from "../../../assests/images/home/Configuration.png"

const ConfigurationCode = () => {
  return (
    <section className="ConfigurationCode">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div class="col-lg-5">
                    <div class="title-block">
                        <p className="mb-4">CONTINUOUS BUILD AND CONFIGURATION</p>
                        <h1 className="mb-4"><span class="gradient-text-red">Configuration </span> as Code.</h1>
                        <p>Plan, Build and manage configuration As a code.</p>
                        <p>Configure Pipelines with an easy, smooth study of the file which you decide to your Git treasury in Drone.</p>
                        <p>Perform every step of Pipeline internally a separate Docker container to downloaded at runtime automatically.</p>
                    </div>
                </div>
                <div class="col-lg-6 mt-5">
                    <img src={Configuration} alt="" />
                    {/* <div className="confg-figure">
                        <div className="showcase-figure-in">
                            <div class="chrome">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="code-block code-block__blue">
                                <ol>
                                    <li>kind: <span class="highlight__red">"pipeline"</span></li>
                                    <li>steps:</li>
                                    <li>- name: <span class="highlight__red">test</span></li>
                                    <li>  image: <span class="highlight__red">node</span></li>
                                    <li>  commands:</li>
                                    <li>  - <span class="highlight__red">yarn install</span></li>
                                    <li>  - <span class="highlight__red">yarn start</span></li>
                                    <li><br/></li>
                                    <li>services:</li>
                                    <li>- name: <span class="highlight__red">database</span></li>
                                    <li>  image: <span class="highlight__red">mysql</span></li>
                                    <li>  ports:</li>
                                    <li>  - <span class="highlight__red">3306</span></li>
                                </ol>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ConfigurationCode;
