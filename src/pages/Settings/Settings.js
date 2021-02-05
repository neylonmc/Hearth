import React from 'react';
import { 
    Row, 
    Col,
    Panel, 
    PanelGroup,
    Form,
    FormGroup,
    FormControl,
    Button,
    ButtonToolbar,
    Toggle  
} from 'rsuite';
import "./Settings.css";

function Settings() {

    return(
        <div className="settings-container animate__animated animate__fadeIn">

            {/* ACCOUNT SETTINGS */}
            <Panel 
                id="settings-block" 
                className="acct-set-container" 
                bordered
            >
                <Row>
                    {/* NEW USERNAME FORM */}
                    <Col xs={12}>
                        <Form fluid>
                            <FormGroup>
                                <FormControl 
                                    id="input-form"
                                    className="new-username" 
                                    placeholder="new username" 
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    id="input-form"
                                    className="confirm-username" 
                                    placeholder="password" 
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button 
                                        id="account-submit"
                                        className="save-new-username"
                                        appearance="primary"
                                    > save new username</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </Col>

                    {/* NEW PASSWORD FORM */}
                    <Col xs={12}>
                        <Form fluid>
                            <FormGroup>
                                <FormControl 
                                    id="input-form"
                                    className="old-password" 
                                    placeholder="old password" 
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    id="input-form"
                                    className="new-password" 
                                    placeholder="new password" 
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button 
                                        id="account-submit"
                                        className="save-new-password"
                                        appearance="primary"
                                    > save new password</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Panel>

            {/* USER PREFERENCES */}
            {/* ALERT SETTINGS */}
            <PanelGroup
                id="settings-block" 
                className="usr-pref-container"
                header="user preferences"
            >
                <Panel 
                    id="preference-block"
                    header="mobile alerts"
                >
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            username mentions
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="username-alert-toggle" defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            friend activity
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="friend-alert-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            activity on your posts
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="post-alert-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            activity on your comments
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="comment-alert-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                </Panel>
                
                {/* NOTIFICATION SETTINGS  */}
                <Panel 
                    id="preference-block" 
                    className="notification-container"
                    header="email notifications"
                >
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            new friend requests
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="username-notif-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            activity on my topics
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="topic-notif-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            activity on your posts
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="post-notif-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={20}><h4 id="preference-label">
                            activity on topics you're following
                        </h4></Col>
                        <Col xs={4}>
                            <Toggle  className="foltop-notif-toggle"  defaultChecked/>
                        </Col>
                    </Row>
                </Panel>

                <Button 
                    className="save-new-preferences"
                    appearance="primary"
                > save preferences </Button>
            </PanelGroup>
        </div>
    )

};

export default Settings;