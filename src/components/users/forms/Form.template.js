import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { addNewUser, editUser } from '../../../redux/actions/users.action';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const generateId = () => {
    return Date.now()
}



function Form(props) {
    const classes = useStyles();
    const [userId, setUserId] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [website, setWebsite] = useState();

    let id;
    if (window.location.pathname === '/adduser') {
        id = generateId();
        // setUserId(id)
    } else {
        id = +window.location.pathname.substr(1).split("/")[1]
        // setUserId(id)
    }
    // // console.log(id);

    useEffect(() => {

        if (props.users.users.length > 0) {
            props.users.users.map(user => {
                if (user.id === id) {
                    setName(user.name);
                    setUsername(user.username);
                    setEmail(user.email);
                    setPhone(user.phone);
                    setWebsite(user.website)
                }
            })
        }
    }, [])

    function submitForm(e) {
        e.preventDefault();
        if (window.location.pathname === '/adduser') {
            const userData = { id: generateId(), name, username, email, phone, website }
            props.addNewUser(userData)
        } else {
            const userData = { id, name, username, email, phone, website }
            props.editUser(userData)
        }
        props.history.push('/')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {window.location.pathname === '/adduser'
                        ? <PersonAddIcon />
                        : <EditIcon />
                    }
                </Avatar>
                <Typography component="h1" variant="h5">
                    {window.location.pathname === '/adduser'
                        ? 'Add New User'
                        : 'Edit User'
                    }
                </Typography>
                <form className={classes.form} noValidate onSubmit={submitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                                name="phone"
                                autoComplete="phone"
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="website"
                                label="Website"
                                name="website"
                                autoComplete="website"
                                onChange={e => setWebsite(e.target.value)}
                                value={website}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {window.location.pathname === '/adduser'
                            ? 'Add User'
                            : 'Update User'
                        }
                    </Button>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, { addNewUser, editUser })(withRouter(Form));