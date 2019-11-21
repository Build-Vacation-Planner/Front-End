import React from "react";
import Styled from "styled-components";

const Nav = props => {

    const logMeOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        props.history.push("/");
    }

    return (
        <NavDiv>
            <Container>
            <Logout onClick={logMeOut}>Log out</Logout>
            </Container>
        </NavDiv>
    );
}

const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    axios
      .get("https://vacation-planner-be.herokuapp.com/api/users/")
      .then(response => {
        setUsernames(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="username">
      {users.map(user => {
        return (
          <div className="user"
            key={users.id}
            username={users.username}
          />
        );
      })}
    </div>
  );
}

  return (
    <div className="user-list">
        <p>Hello, {props.username}</p>
    </div>
  );
};

export default Nav;

const NavDiv = Styled.div`
    background: white;
    padding: 60px;
`
const Container = Styled.div`
    width: 80%;
     display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

const Logout = Styled.button`
    height: 50px;
    border-radius: 5px;
    width: 90px;
    font-size: 20px;
`
const Marketing = Styled.button`
    height: 50px;
    border-radius: 5px;
    width: 90px;
    background: blue;
    font-size: 20px;
`
