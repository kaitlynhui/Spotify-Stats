import { useState, useEffect } from 'react';
import { getCurrentUserProfile, getTopArtists } from "../spotify"; 
import { GlobalStyles } from "../styles";
import { ArtistsGrid, TimeRangeButtons, SectionWrapper } from '../components';

function Artists() {
    const [topArtists, setTopArtists] = useState(null);
    const [activeRange, setActiveRange] = useState('short');
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const { data } = await getTopArtists(`${activeRange}_term`);
    //     setTopArtists(data);
    //   };
  
    //   catchErrors(fetchData());
    // }, [activeRange]);


    useEffect(() => {
      const fetchData = async () => {

        const userTopArtists = await getTopArtists(`${activeRange}_term`);
        try {
          setTopArtists(userTopArtists.data);
  
        } catch (e) {
          console.error(e);
        }

        console.log(userTopArtists.data);
      };
      fetchData();
    }, [activeRange]);

    return (
      <main>
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}/>

        {topArtists && topArtists.items && (
          <ArtistsGrid artists={topArtists.items} />
        )}
      </SectionWrapper>
    </main>
  );
};
  export default Artists;