import { useState, useEffect } from 'react';
import { getCurrentUserProfile, getTopArtists, getTopTracks } from "../spotify"; 
import { StyledTrackList, StyledHeader } from '../styles';
import { SectionWrapper, TrackList, TimeRangeButtons } from '../components';


function Tracks() {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState('short');

  useEffect(() => {
    const fetchData = async () => {

      const userTopTracks = await getTopTracks(`${activeRange}_term`);
      try {
        setTopTracks(userTopTracks.data);

      } catch (e) {
        console.error(e);
      }

      console.log(userTopTracks.data);
    };
    fetchData();
  }, [activeRange]);

    return (
    <main>
      <SectionWrapper title="Top Tracks" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />

        {topTracks && topTracks.items && (
          <TrackList tracks={topTracks.items} />
        )}
      </SectionWrapper>
    </main>
  );
}

  export default Tracks;