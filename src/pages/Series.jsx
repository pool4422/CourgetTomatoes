import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from '../components/Moviecard';
import Searchbar from "../components/Searchbar";
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { Pagebtn } from '../components/Pagebtn';
import { Helmet } from 'react-helmet';

function Series() {

  const { loader, page, fetchSeries, trending } = useContext(Contextpage);
    
    useEffect(() => {
        fetchSeries();
    }, [page])


  return (
      <>
          <Helmet>
          <title>CourgetTomatoes | Series</title>
        </Helmet>
          
        <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
            <Header />
            <motion.div
                layout
                className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
                <AnimatePresence>
                    {
                        loader ?  <span className="loader m-10"></span>:
                            <>
                                {trending.map((tred) => (
                                    <Moviecard key={tred.id} movie={tred} />
                                ))}
                            </>
                    }
                </AnimatePresence>
            </motion.div>
            <Pagebtn/>
            
        </div>
      </>
  )
}

export default Series