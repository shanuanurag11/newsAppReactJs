import React, { useState, useCallback, useEffect } from 'react';
import Hidden from '@material-ui/core/Hidden';
import {
    Container,

    Grid, makeStyles

} from '@material-ui/core';
import NewsCard from '../Component/NewsCard'
import * as service from '../services/NewsServices'



const HomePage = ({ props, catValue }) => {
    const [newsData, setNewsData] = useState([])
    const [newsmsg, updateNewsMsg] = useState("Loading...")
    const [loader, setLoader] = useState(false)

    const allTopNews = useCallback(async () => {

        try {
            let response = await service.getTopNewsDetail();
            if (response.status === 200 && response.data.articles) {

                setNewsData(response.data.articles)


            }
        }
        catch (err) {

            updateNewsMsg(" Sorry ! No News To display.")
        }

    },
    );
    const catValueFunction = useCallback(async (data) => {

        setLoader(true)
        let response = await service.getNewsByCat(data);
        try {
            if (response.status === 200 && response.data.articles) {
                setNewsData(response.data.articles)
            }
        }
        catch (err) {
            updateNewsMsg(" Sorry ! No News To display.")
        }
        finally {
            setLoader(false)
        }
    },
    );


    useEffect(() => {
        catValue !== null ? catValueFunction(catValue) : allTopNews() //function to check which api to call according to catgories value from navbar

    }, [catValue]) //checking change in the props catValue 



    if (loader) {
        return (
            <div className="loading-msg">{"Loading News ..."}</div>
        )
    }

    return (
        <div >
            <Container component="div" maxWidth={false} >
                <Grid
                    container
                    spacing={1}
                    style={{ justifyContent: 'center' }}


                >
                    <Hidden smDown>
                        <Grid
                            item
                            lg={2}
                        >
                        </Grid>

                    </Hidden>


                    <Grid
                        item
                        lg={9}
                        xl={9}
                        xs={12}
                    >{newsData.length > 0 ?
                        <NewsCard newsData={newsData} /> : <div className="error-msg-news">{newsmsg}</div>
                        }

                    </Grid>

                </Grid>



            </Container>

        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage

