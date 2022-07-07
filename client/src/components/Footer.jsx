import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
const Container = styled.div`
  display: flex;
  @media (max-width: 596px) {
    flex-direction: column;
    margin-left: 5px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  @media (max-width: 596px) {
    flex-direction: column;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 596px) {
    flex-direction: column;
  }
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
`;
const Payment = styled.img`
  max-width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TAHAWY</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet
          totam nisi necessitatibus adipisci in dolore unde fugiat aspernatur
          explicabo voluptatem, tempore quae quo dignissimos ipsa. Molestias
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
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
          <RoomIcon style={{ marginRight: 10 }} /> Lorem ipsum dolor sit amet
          consectetur
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: 10 }} /> +201102734657
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: 10 }} /> amer.zp582@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/yqZwP3p/png-clipart-mastercard-visa-credit-card-paypal-logo-mastercard-text-display-advertising-removebg-pre.png" />
      </Right>
    </Container>
  );
};

export default Footer;
