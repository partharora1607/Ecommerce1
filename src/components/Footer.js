import {
  EmailOutlined,
  Facebook,
  GitHub,
  Instagram,
  LocalPhone,
  Payment,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  alig-items: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 0px; 0px
`;

const SocialContainer = styled.div`
  display: flex;
`;


const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AMAZON INDO.</Logo>
        <Desc>
          <p>
            Join us on our journey as we continue to innovate, inspire, and
            shape the future of e-commerce in India. Get to know the passion
            that drives us forward, experience the joy of exceptional products
            and services, and be a part of the Amazon Indo community where every
            customer is valued and cherished.
          </p>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="EB5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          263 Dixie Path , South Tobichester 983212
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> +1 234 56 780
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />{" "}
          contact@amazonindo.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
