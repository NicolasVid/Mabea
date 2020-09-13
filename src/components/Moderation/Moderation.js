import React from 'react';
import axios from "axios";
import "./Moderation.css";

class Moderation extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: {},
             username: "",
             ba: "",
             _id: "",
             end: false
        }
    }

    componentDidMount (){
        this.changeModeration();
    }

    changeModeration = () => {
      const Authaxios = axios.create({
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem('token'),
        }
      });
        Authaxios
          .get("http://localhost:5000/api/moderation")
          .then((response) => {
            if (response.data == null) {
              this.setState({end: true});
            } else {
                this.setState({ posts: response.data, username: response.data.username, ba: response.data.ba , _id: response.data._id});
            }
          }).catch((error) => {
            console.log(error);
          });
      };

      ValidationHandler = () => {
        const Authaxios = axios.create({
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem('token'),
          }
        });
          Authaxios
          .post("http://localhost:5000/api/ba", this.state)
          .then(() => {
            console.log(this.state.ba);
            axios
              .patch("http://localhost:5000/api/moderation", this.state)
              .then(() => {
                this.changeModeration();
              }).catch((error) => {
                console.log(error);
            });
          }).catch((error) => {
            console.log(error);
          });
      };

      DeleteHandler = () => {
        const Authaxios = axios.create({
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem('token'),
          }
        });
          Authaxios
              .patch("http://localhost:5000/api/moderation", this.state)
              .then(()=> {
                this.changeModeration();
              }).catch((error) => {
                console.log(error);
            });
      };
    
    render() {
        const { posts } = this.state;
        if (this.state.end) {
          return(
          <div className="DisplayBa2"><p>Plus de BA à moderer</p></div>
          )
        } else {
        return (
        <div className="BA2">
            <div className="DisplayBa2">
              <p>{posts.ba}</p>
            </div>
            <div className="Anonyme2">
              <p>{posts.username}</p>
            </div>
            <div className="Moderation">
              <button onClick={this.ValidationHandler}> Valider la BA</button>
              <button onClick={this.DeleteHandler}> Supprimer la BA</button>
            </div>
        </div>
        )
      }
    }
}

export default Moderation;
