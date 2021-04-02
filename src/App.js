import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import store from './redux/store.redux';

import Navbar from './components/layouts/Navbar.component';
import UserTable from './components/users/UserTable.component';
import Form from './components/users/forms/Form.template';
import AddUser from './components/users/AddUser.component';
import EditUser from './components/users/EditUser.component';
// import PostsComponent from './components/posts/Posts.component';
// import LikedPostComponent from './components/posts/LikedPost.component';
// import DislikedPostComponent from './components/posts/DislikedPost.component';
// import Create from './components/posts/create/Create.component';
// import EditPost from './components/posts/create/Edit.component';

function App() {
  return (

    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          {/* <Form /> */}
          <Route exact path="/" component={UserTable} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
          {/* <Route exact path="/liked" component={LikedPostComponent} /> */}
          {/* <Route exact path="/disliked" component={DislikedPostComponent} /> */}
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
