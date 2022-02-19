import Search from "@components/common/search";
import { useUI } from "@contexts/ui.context";
import { BannerType } from "@settings/site-pages.settings";
import Image from "next/image";
import { Waypoint } from "react-waypoint";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import  NewFeatureProducts  from "../newlyArrived";
import { Button, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";

type BannerProps = {
  banner: BannerType;
  className?: string;
};
const Banner: React.FC<BannerProps> = ({ banner, className }) => {
  const { t } = useTranslation("banner");
  const { showHeaderSearch, hideHeaderSearch } = useUI();
  const onWaypointPositionChange = ({
    currentPosition,
  }: Waypoint.CallbackArgs) => {
    if (!currentPosition || currentPosition === "above") {
      showHeaderSearch();
    }
  };

  const router = useRouter();
  const customoutfitPage = (gender:string) => {
    window.sessionStorage.setItem("gender",gender);
    router.push({pathname:'/customoutfit'});
  }

  return (
      <>
    <div>
    <div id="content">
      <div id="left">
        {/* <div id="bject1">some stuff</div>
        <div id="object2">some more stuff</div> */}
        <img
        className="img"
        src="baby-with-serious-face.png" 
        // width={1300}
        // height={500}
        />
      </div>

      <div id="right">
        <div className="textalignment">
        <div id="object3" className="text">Baptism Clothing</div>
        <div id="object4" className="text mt-8" style={{fontSize: 40}}>Littile Kingdom Shoppping</div>
        <button  className="btnpurchase mt-8">
          Purchase
        </button>
        </div>
      </div>

    </div>
    <div>
        <h5 className="textify text-center py-8">And the Holy Spirit on him in a boduly form like a dove, And a voice came from heaven:<br></br>"You are my son , when i love; with  you I'm well pleased."<br></br>Luke 3.22</h5>
      </div>
    </div>

    <div>
      <div className="float-container" id="content">
        <div className="float-child left" id="leftsection" style={{width: "100%"}}>
          <img 
          className="imgalign"
          src="babyboycute.png"
          />
          {/* <div className="heads">
          <h1>Littile Kingdom Shop for Girls</h1>
          </div> */}
        </div>
        <div className="float-child right " id="rightsection" style={{width: "100%"}}>
          <img 
           className="imgalign"
          src="babygirlcutest.png"
          />
        </div>
      </div>
    </div>
    <div className="headcaption">
    <div>
          <h1  className="heads " >Little Kingdom Shop for Boys</h1>
          
      </div>
    <div >
        <h1 className="heads" >Little Kingdom Shop for Girls</h1>
    </div>
    </div>
    <div className="headcaption">
          <div>
          <button  className="btntrans headings" onClick={()=>{customoutfitPage('boys')}} >
          DESIGN YOUR OWN DRESS
          </button>
          </div>
          <div>
          <button  className="btntrans headings" onClick={()=>{customoutfitPage('girls')}}>
          DESIGN YOUR OWN DRESS
          </button>
          </div>
    </div>

    </>
  );
};

export default Banner;
