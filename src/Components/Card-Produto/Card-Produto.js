import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Domain } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  button: {
    width: "100%",
  },

  actionArea: {
    height: 'auto',
    display: 'inline-block'
  },
  link: {
    color: 'black'
  },

  imagem: {
    width: 'auto',
    height: 'auto',
    margin: 10,
    maxWidth: '93%'

  }
});

const CardProduto = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root}>
        <Link to='/detalhe-produto' className={classes.link}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              className={classes.imagem}
              image={props.imagem}
            />
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.tipoProduto}
              </Typography>
              <Typography variant="h5" component="h2">
                {props.titulo}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {props.quantidade}
              </Typography>
              <Typography variant="body2" component="p">
                {props.descricao}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <Link to='/cesta-produto' className={classes.link}>
          <CardActions>
            <Button size="large" className={classes.button}>Adicionar Ao Carrinho</Button>
          </CardActions>
        </Link>
      </Card>
    </>
  );
}

export default CardProduto;