import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { UserContaxt } from '../App';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 340,
    },
});

const SinglePdCard = ({ product }) => {
    const [pd, setPd] = useContext(UserContaxt);
    const history = useHistory()
    const classes = useStyles();
    const { redImage, productName, productDescription, _id} = product;
 

    const productDetails = (id) => {
        fetch(`http://localhost:5500/loadSinglePd/${id}`)
        .then(res => res.json())
        .then(item => {
            setPd(item[0]);
            history.push(`/singleProduct/${id}`)
        })

    }
    return (
        <div className="col-md-4">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={redImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {productName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {productDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => productDetails(_id)} variant="contained">Details</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default SinglePdCard;