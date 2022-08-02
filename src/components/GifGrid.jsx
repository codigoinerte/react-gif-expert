
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {  

    const {images, isLoading} = useFetchGifs(category);

    if(isLoading) return (<><p>Loading...</p></>);
    
    return (
      <>
          <h3>{category}</h3>
  
          <div className="card-grid">
              {              
                images.map((gif) => (<GifItem {...gif} key={gif.id} />))
              }
          </div>

      </>
    )
}
