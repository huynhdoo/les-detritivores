import React from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { TemplatePages } from '../components/TemplatePages';
const Compost = () => {
  /*const [Text, setText] = useState('');
  axios
    .get(
      'https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460',
      {}
    )
    .then((response) => {
      setText(response.data.story.content);
    })
    .catch((e) => console.error(e)); */
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Compostage</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <TemplatePages link="/">
        <FadeIn>
          <div className="container-fluid p-slide">
            <div className="row">
              <div className="col">
                <div className="ml-2">
                  <h1 className="orange big-font-size-xxl rotate pb-2 text-start">
                    COMPOST
                    <span className="linesmall-2 bg-black" />
                  </h1>

                  <div>
                    <p className="bold text-start big-font-size-md pb-2 mb-3">
                      Mais que deviennent les restes alimentaires <br /> collectés auprès de nos
                      usagers ?
                    </p>
                  </div>
                  <div className="negative">
                    <p className="light big-font-size-md m-12 text-start">
                      Nous compostons vos déchets à proximité de leurs lieux de collecte afin de
                      limiter la pollution liée au transport. Bichonnés et choyés, vos déchets sont
                      recyclés pour enrichir les sols.Apporter du compost à la Terre permet de la
                      fertiliser et de la structurer pour l’épanouissement de vos plantations.
                      Mettre une dose de compsot dans vos fleurs c’est également participer à la
                      végétalisation de notre territoire
                    </p>
                  </div>
                  <div>
                    <p className="light big-font-size-md m-12 text-start">
                      Apporter du compost à la Terre permet de la fertiliser et de la structurer
                      pour l’épanouissement de vos plantations. Mettre une dose de compsot dans vos
                      fleurs c’est également participer à la végétalisation de notre territoire.
                    </p>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col slider">
                      <StaticImage
                        className="slider-imgs rounded"
                        src="../../public/images/pic1.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="col slider">
                      <StaticImage
                        className="slider-imgs rounded"
                        src="../../public/images/pic1.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="col slider">
                      <StaticImage
                        className="slider-imgs rounded"
                        src="../../public/images/pic1.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="compost-btns">
                  <h1 className="orange bold font-size-md">
                    Vous souhaitez acheter du compost auprès de <br /> la SCIC SA LES DETRITIVORES ?
                  </h1>
                  <div className="fleex">
                    <Link className="bg-green buttons" to="/devis">
                      COMMANDEZ-LE ICI
                    </Link>
                    <span className="big-font-size-md orange bold">ou</span>
                    <button className="bg-green buttons-b">
                      RETROUVEZ-LE DANS NOS MAGASINS PARTENAIRES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </TemplatePages>
    </>
  );
};
export default Compost;
