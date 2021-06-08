import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Works</h3>
                <p className="subtitle-a">
                  Here, I have listed my Achievements, Goals and Works.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src="data:image/png;base64,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" alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Won Idea-Find Hackthon 2021</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            With 3 other team members, created a project to help solve farm laws issue
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wDX7JMKxMS8SD1hP6cAglDLY1f1ogvBw2A&usqp=CAU" alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Completed Web Scraping project</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            A project which automates downloading youtube videos as mp3 songs using web scraping.
                            Written in python. Available in github.
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src="data:image/jpeg;base64,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" alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Future</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Planning to pursue Masters in Computer Science.
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
