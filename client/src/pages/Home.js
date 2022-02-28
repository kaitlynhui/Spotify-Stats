import { useState, useEffect } from 'react';
import { getCurrentUserProfile } from '../spotify';
import styled from 'styled-components';
import { GlobalStyle, StyledButton, StyledHeader } from '../styles';
import { HomeContainter, HomeBanner, HomeText, HomeH2, HomeTable, HomeButtonContainer }from '../styles/Home.styles';
import { useNavigate, Link } from "react-router-dom";


function Home() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await getCurrentUserProfile();
            setProfile(data);
    
          } catch (e) {
            console.error(e);
          }
        };
        fetchData();
      }, []);
    
      return (
        <>
       <HomeContainter>
         <main role="main">
           <HomeBanner>
           {profile && <HomeText className="header__name"> hello {profile.display_name}</HomeText> }
           <HomeH2>lets look at your spotify stats</HomeH2>
           <HomeButtonContainer>
           <table>
             <tbody>
               <td>
                   <StyledButton as={Link} to="/top-artists"> top artists</StyledButton>
               </td>
             </tbody>
             <tbody>
               <td>
               <StyledButton as={Link} to="/top-tracks"> top tracks</StyledButton>
               </td>
             </tbody>
           </table>
           </HomeButtonContainer>
           </HomeBanner>
         </main>
       </HomeContainter>
        </>

      )
              };

  export default Home;


  




 