import { client } from "@/sanity/lib/client"
import Ping from "./Ping"
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const formatNumber = (totalViews: number): string => {
  return `${totalViews} view${totalViews !== 1 ? 's' : ''}`;
};

const View = async({id} : {id : string}) => {

  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id }); 

    //TODO : update no of views
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping/>
      </div>
      <p className="view-text">
        <span className="font-black">{formatNumber(totalViews)}</span>
      </p>
    </div>
  )
}

export default View