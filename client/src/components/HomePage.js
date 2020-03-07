import React, {useEffect} from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../utils/Auth';

const HomePage = (props) => {

  useEffect(()=> {
      props.toggleAuthenticateStatus();
  },[])

  
    return (
      <Card className="container">
        <CardTitle title="Welcome to Druggler!" subtitle="Please Login to use our application."/>
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
          ) : (
            <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
          )}
      </Card>
    )
  
};

export default HomePage;