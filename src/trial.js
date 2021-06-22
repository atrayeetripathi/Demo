import React, { Component } from "react";
import classNames from "classnames/bind";
import { Button, Input, Popper, Container, Grid } from "@material-ui/core";
import styles from "./trial.css";
const cx = classNames.bind(styles);

class TrialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      view: "sign_up",
      firstnameError: false,
      lastnameError: false,
      emailError: false,
      passwordError: false,
    };
  }

  changeTab = (view) => {
    if (view) {
      this.setState({
        view: view,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        passwordError: false,
      });
    }
  };

  getStarted = () => {
    if (
      !(
        this.state.firstname &&
        this.state.firstname.replace(/s/, "") &&
        this.state.firstname.replace(/s/, "").length > 0
      )
    ) {
      this.setState({
        firstnameError: true,
        errorMsg: "Fill out this Field",
      });
    }
    if (
      !(
        this.state.lastname &&
        this.state.lastname.replace(/s/, "") &&
        this.state.lastname.replace(/s/, "").length > 0
      )
    ) {
      this.setState({
        lastnameError: true,
      });
    }
    if (
      !(
        this.state.password &&
        this.state.password.replace(/s/, "") &&
        this.state.password.replace(/s/, "").length > 0
      )
    ) {
      this.setState({
        passwordError: true,
      });
    }
    if (
      !(
        this.state.email &&
        this.state.email.replace(/s/, "") &&
        this.state.email.replace(/s/, "").length > 0
      )
    ) {
      this.setState({
        emailError: true,
      });
    }
    this.checkAndSubmit();
  };

  checkAndSubmit = () => {
    if (
      !this.state.firstnameError &&
      !this.state.lastnameError &&
      !this.state.emailError &&
      !this.state.passwordError
    ) {
      //TODO: release action to submit form
    }
  };

  login = () => {
    //TODO
  };

  render() {
    return (
      <>
        <Container style={{ backgroundColor: "darkgrey", padding: 30 }}>
          <Button
            color="primary"
            onClick={() => this.changeTab("sign_up")}
            style={{
              width: "50%",
              backgroundColor: this.state.view === "sign_up" ? "green" : "grey",
            }}
          >
            Sign Up
          </Button>

          <Button
            color="primary"
            onClick={() => this.changeTab("login")}
            style={{
              width: "50%",
              backgroundColor: this.state.view === "login" ? "green" : "grey",
            }}
          >
            Login
          </Button>
          {this.state.view === "sign_up" ? (
            <div>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: 20,
                  marginBottom: 20,
                  fontSize: 20,
                }}
              >
                Sign Up For Free
              </div>

              <Input
                style={{ width: "50%", marginBottom: 20 }}
                error={this.state.firstnameError}
                required
                type="text"
                placeholder={"First Name *"}
                name={"firstname"}
                value={this.state.firstname}
                onChange={(event) => {
                  this.setState({ firstname: event.target.value });
                }}
              />

              <Input
                style={{ width: "50%", marginBottom: 20 }}
                error={this.state.lastnameError}
                required
                type="text"
                placeholder={"Last Name *"}
                name={"lastname"}
                value={this.state.lastname}
                onChange={(event) => {
                  this.setState({ lastname: event.target.value });
                }}
              />
              {/* </div> */}
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20,
                fontSize: 20,
              }}
            >
              Welcome Back
            </div>
          )}

          <Input
            style={{ marginBottom: 20 }}
            type="email"
            required
            fullWidth
            error={this.state.emailError}
            placeholder={"Email Address *"}
            name={"email"}
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />


          <Input
            style={{ marginBottom: 20 }}
            type="password"
            required
            fullWidth
            error={this.state.passwordError}
            placeholder={"Set A Password *"}
            name={"password"}
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />

          {/* </div> */}

          {/* <div> */}
          {this.state.view === "sign_up" ? (
            <Button
              color="primary"
              onClick={this.getStarted}
              style={{ width: "100%", backgroundColor: "green", marginTop: 30 }}
            >
              Get Started
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={this.login}
              style={{ width: "100%", backgroundColor: "green" }}
            >
              Login
            </Button>
          )}
        </Container>
      </>
    );
  }
}

export default TrialView;
