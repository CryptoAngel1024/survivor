import { StackDivider } from '@chakra-ui/layout';
import React, {PureComponent} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import AdSense from 'react-adsense';

export interface Props {
  urlParams: any;
}

interface State {
}

class Home extends PureComponent<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
            <>
              <div className="container mt-5">
                <div className="card card-custom gutter-b">
											
                  <div className="row ml-0 mr-0">

                      <div className="col-xl-8 p-0">
                        <Card className="no-border m-6">
                          <a href="/Article">
                            <Card.Img src="img/ImgArticoli/curva.jpg" className="img-home"/>
                            <Card.ImgOverlay className="p-0" >
                              <Card.Text className="font-size-h5 overlay mb-0">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                              </Card.Text>
                            </Card.ImgOverlay>
                          </a>
                        </Card>
                      </div>

                      <div className="col-xl-4 p-0">
                      <AdSense.Google
                        client='ca-pub-9129211819094049'
                        slot='4417086761'
                        style={{ display: 'block' }}
                        format='fluid'
                        layoutKey='-fb+5w+4e-db+86'
                      />
                        <ins className="adsbygoogle"
                            style={{display:'block'}}
                            data-ad-format="fluid"
                            data-ad-layout-key="-fb+5w+4e-db+86"
                            data-ad-client="ca-pub-9129211819094049"
                            data-ad-slot="4417086761"></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                        
                          
                      </div>

                  </div>

                  <div className="row ml-0 mr-0 mt-4">

                      <div className="col-xl-12 ml-3">
                        <p className="border-title-home-danger font-size-h2 font-weight-boldest pl-4">PRIMO PIANO</p>
                      </div>

                  </div>

                  <div className="row ml-0 mr-0">

                      <div className="col-xl-4 p-0">
                          <Card className="no-border m-6">
                            <a href="/Article">
                              <Card.Img src="img/ImgArticoli/nazionale.jpg" alt="Card image" className="img-card"/>
                              <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0">
                                Title Title Title title title</p>
                              <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2">
                                Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                metaphors about driving and keep you focused on the overall structure of your post</p>
                            </a>
                          </Card>
                      </div>

                      <div className="col-xl-4 p-0">
                          <Card className="no-border m-6">
                            <a href="/Article">
                              <Card.Img src="img/ImgArticoli/mancini.jpg" alt="Card image" className="img-card"/>
                              <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0">
                                Title Title Title title title</p>
                              <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2">
                                Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                metaphors about driving and keep you focused on the overall structure of your post</p>
                            </a>
                          </Card>
                      </div>

                      <div className="col-xl-4 p-0">
                          <Card className="no-border m-6">
                            <a href="/Article">
                              <Card.Img src="img/ImgArticoli/bambini.jpg" alt="Card image" className="img-card"/>
                              <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0">
                                Title Title Title title title</p>
                              <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2">
                                Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                metaphors about driving and keep you focused on the overall structure of your post</p>
                            </a>
                          </Card>
                      </div>

                  </div>

                  <div className="row ml-0 mr-0">

                    <div className="d-flex flex-row-fluid bgi-size-cover bgi-position-center bg-rubrica" >
                      <div className="container">

                        <div className="row ml-0 mr-0 pt-15">
                          <div className="col-xl-12 ml-3">
                            <p className="border-title-home-danger text-white overlay-rubrica font-size-h1 font-weight-boldest pl-4">
                              RUBRICA SPECIALE
                              </p>
                          </div>
                        </div>

                        <div className="row ml-0 mr-0 pt-5 pb-15">

                          <div className="col-xl-4 p-0">
                              <Card className="no-border m-6 pb-3 bg-white-o-110">
                                <a href="/Article">
                                  <Card.Img src="img/ImgArticoli/nazionale.jpg" alt="Card image" className="img-card"/>
                                  <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0 pl-3 pr-3">
                                    Title Title Title title title</p>
                                  <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2 pl-3 pr-3">
                                    Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post</p>
                                </a>
                              </Card>
                          </div>

                          <div className="col-xl-4 p-0">
                              <Card className="no-border m-6 pb-3 bg-white-o-110">
                                <a href="/Article">
                                  <Card.Img src="img/ImgArticoli/nazionale.jpg" alt="Card image" className="img-card"/>
                                  <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0 pl-3 pr-3">
                                    Title Title Title title title</p>
                                  <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2 pl-3 pr-3">
                                    Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post</p>
                                </a>
                              </Card>
                          </div>

                          <div className="col-xl-4 p-0">
                            
                            <ins className="adsbygoogle"
                                style={{display: 'block'}}
                                data-ad-client="ca-pub-9129211819094049"
                                data-ad-slot="5826371357"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins>
                            <script>
                                (adsbygoogle = window.adsbygoogle || []).push({});
                            </script>
                          </div>
                         

                        </div>                        
                          
                      </div>
                    </div>

                  </div>

								</div>

							</div>


            </>
    );
  }



}

export default Home;
