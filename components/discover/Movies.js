import React from 'react';
import {ScrollView} from 'react-native';
import Marvel from './Marvel';
import MarvelStudio from './MarvelStudio';
import Netflix from './Netflix';
import NetflixStudio from './NetflixStudio';
import Hulu from './Hulu';
import HuluStudio from './HuluStudio';
import Hbo from './Hbo';
import HboStudio from './HboStudio';
 
function Movies() {
  return (
    <ScrollView>
    <MarvelStudio/>
       <Marvel/>
       <NetflixStudio/>
       <Netflix/>
       <HuluStudio/>
       <Hulu/>
       <HboStudio/>
       <Hbo/>
    </ScrollView>
  )
}

export default Movies