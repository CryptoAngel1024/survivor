import React, {PureComponent} from 'react';
import Card from 'react-bootstrap/Card';

import AdSense from 'react-adsense';

import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon
  } from "react-share";

export interface Props {
  urlParams: any;
}

interface State {
}

class Article extends PureComponent<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let urlShare = window.location.hostname + "/Article"
    return (
        <>
            <div className="container mt-5">
                <div className="card card-custom gutter-b">
											
                    <div className="row ml-0 mr-0">

                        <div className="col-xl-8 p-0">

                            <div className="col-xl-12 mt-6">
                                <p className="font-size-h2 font-weight-bold pl-4 mb-2">
                                    Titolo Articolo Titolo Articolo Titolo Articolo Titolo Articolo
                                </p>
                                <p className="font-size-h6 font-weight-bold pl-4 mb-1">
                                    Scritto da: Alias Nome   
                                </p>
                                <p className="font-size-lg font-weight-normal pl-4">
                                    <i className="la la-clock-o mr-1"></i>
                                    23/11/2021
                                </p>
                                <WhatsappShareButton className="ml-4" url={urlShare}>
                                    <WhatsappIcon size={24} round/>
                                </WhatsappShareButton>
                                <FacebookShareButton className="ml-3" url={urlShare}>
                                    <FacebookIcon size={24} round/>
                                </FacebookShareButton>
                                <TelegramShareButton className="ml-3" url={urlShare}>
                                    <TelegramIcon size={24} round/>
                                </TelegramShareButton>
                            </div>    
                        
                            <Card className="no-border mt-6 mr-6 ml-6">
                                <Card.Img src="img/ImgArticoli/curva.jpg" className="img-home"/>
                                <Card.ImgOverlay className="p-0" >
                                <Card.Text className="font-size-h6 overlay-art mb-0">
                                    Fonte IMG
                                </Card.Text>
                                </Card.ImgOverlay>
                            </Card>

                            <div className="no-border ml-6 mt-3 mr-6 mb-10">
                                <p className="text-dark font-size-h5 font-weight-bold pt-2 mb-0">
                                    Abstract Abstract Abstract Abstract Abstract Abstract Abstract Abstract Abstract Abstract</p>
                                <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2 mt-2">
                                    Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post
                                    <br/><br/>
                                    Outlines keep you honest. <b>They stop you from indulging</b> in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post
                                    Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post
                                    Outlines keep you honest. <i>They stop you from indulging in poorly thought-out 
                                    metaphors about driving and</i> keep you focused on the overall structure of your post
                                    Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post
                                    <br/>
                                    Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                    metaphors about driving and keep you focused on the overall structure of your post    
                                </p>
                            </div>

                            <div className="col-xl-12 ml-3 mt-8">
                                <p className="border-title-home-primary font-size-h2 font-weight-boldest pl-4">TAG</p>
                                <button type="button" className="btn btn-outline-secondary">Mercato</button>
                                <button type="button" className="btn btn-outline-secondary ml-3">Serie A</button>
                            </div>

                            <div className="col-xl-12 ml-3 mt-15">
                                <p className="border-title-home-green font-size-h2 font-weight-boldest pl-4">ARTICOLI COLLEGATI</p>
                            </div>

                            <div className="row ml-0 mr-0">

                                <div className="col-xl-6 p-0">
                                    <Card className="no-border m-6">
                                        <a href="#">
                                        <Card.Img src="img/ImgArticoli/nazionale.jpg" alt="Card image" className="img-card"/>
                                        <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0">
                                            Title Title Title title title</p>
                                        <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2">
                                            Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                            metaphors about driving and keep you focused on the overall structure of your post</p>
                                        </a>
                                    </Card>
                                </div>

                                <div className="col-xl-6 p-0">
                                    <Card className="no-border m-6">
                                        <a href="#">
                                        <Card.Img src="img/ImgArticoli/mancini.jpg" alt="Card image" className="img-card"/>
                                        <p className="text-dark font-size-h3 font-weight-bold pt-2 mb-0">
                                            Title Title Title title title</p>
                                        <p className="text-dark-75 font-size-lg font-weight-normal pt-1 mb-2">
                                            Outlines keep you honest. They stop you from indulging in poorly thought-out 
                                            metaphors about driving and keep you focused on the overall structure of your post</p>
                                        </a>
                                    </Card>
                                </div>

                            </div>


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

				</div>

			</div>

        </>
    );
  }



}

export default Article;
