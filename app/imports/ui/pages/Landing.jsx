import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
    render() {
        return (
            <div className="digits-background-image">
                <Grid container centered stackable columns='3'>

                <Grid.Column textAlign='center'>
                    <Icon size='huge' inverted name='users'/>
                    <Header as='h1' inverted>Multiple Users</Header>
                    <Header as='h3' inverted>This address book enables any number of users to register
                        and save their business contacts. You can only see the contacts you have created</Header>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                    <Icon size='huge' inverted name='file'/>
                    <Header as='h1' inverted>Conatct Details</Header>
                    <Header as='h3' inverted>For each contact, you can save their
                    name, address, and phone number</Header>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                    <Icon size='huge' inverted name='checked calendar'/>
                    <Header as='h1' inverted>Timestamp Notes</Header>
                    <Header as='h3' inverted>Eac time you make contact with a contact, you can write
                    a note that summarizes the conversation. This not is saves along with a timestamp
                    with the contact</Header>
                </Grid.Column>

            </Grid>
            </div>
        );
    }
}

export default Landing;
