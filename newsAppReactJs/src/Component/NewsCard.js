import React, {

} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  makeStyles,
  Typography,
  Grid,
  Button,

} from '@material-ui/core';
import '../assets/Style/WebView.css'


const clickCard = (url) => {
  if (url !== null && url.length > 0) {
    window.open(url);
  }
  else {
    alert("Sorry ! This story cannot be viewed.")
  }

}

const NewsCard = ({ newsData }) => {



  return (
    <div style={{ margin: 'auto', marginTop: '85px', }}>
      {newsData.map((item, index) => (
        <Card className="web-view zoom-1" key={index} style={{ marginTop: '15px', backgroundColor: '#ffe39454' }}
          onClick={() => clickCard(item.url)}
        >
          <Grid
            container
            spacing={0}
            style={{ justifyContent: 'space-evenly' }}
          >

            <Grid
              item
              lg={4}
              xl={4}
              xs={12}
            >
              <img
                alt="Img not available"
                style={{ width: '100%', maxHeight: '180px', objectFit: 'cover' }}
                src={item.urlToImage}
                className="newscard-img"
              />
            </Grid>
            <Grid
              item
              lg={7}
              xl={7}
              xs={12}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
              className="mob-view-padd"
            >

              <div>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className="text-overflow-ellipses"
                  style={{ fontFamily: "Poppins-Light" }}

                >
                  <b>Title:</b> {"" + item.hasOwnProperty('title') && item.title !== null > 0 ? item.title : "N/A"}

                </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className="text-overflow-ellipses"
                  style={{ fontFamily: "Poppins-Light" }}

                >
                  <b>Source:</b> {"" + item.source.hasOwnProperty('name') && item.source.name !== null ? item.source.name : "N/A"}

                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className="text-overflow-ellipses"
                  style={{ fontFamily: "Poppins-Light" }}

                >
                  <b>Author:</b> <span style={{ color: '#eaa500' }}>{"" + item.hasOwnProperty('author') && item.author !== null ? item.author : "N/A"}</span>

                </Typography></div>
              <div>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className="text-overflow-ellipses-multi"
                  style={{ fontFamily: "Poppins-Light" }}

                >
                  <b>Summary:</b> {"" + item.hasOwnProperty('content') && item.content !== null && item.content.length > 0 ? item.content.substring(0, item.content.indexOf('[')) : item.hasOwnProperty('discription') && item.discription !== null && item.discription.length > 0 ? item.discription : "N/A"}

                </Typography>
              </div>


            </Grid>

          </Grid>
        </Card>
      ))}
      <Grid
        container
        spacing={1}
        style={{ justifyContent: 'center' }}


      >
        <Grid
          item
          lg={3}
        >
          <Button variant="contained" style={{ marginTop: '40px', marginBottom: '40px', backgroundColor: '#ffe39454', color: 'silver' }}>
            No stories to load..
</Button>
        </Grid>
      </Grid>

    </div>

  );
};

NewsCard.propTypes = {
  className: PropTypes.string
};

export default NewsCard;
