import React from 'react'
import { ContactSvg } from '../../data/FormData';
import { Container, Section } from '../../globalStyles';
import { Button, ContactTitle, ContainerContact, ContainerWrapper, Form, ImgSvg, Input, Inputs, Label, Message, Textarea } from './ContactStyles';
const Contact = () => {
    return (
<Container>
       <ContactTitle>Contact Us</ContactTitle>
       <ContainerWrapper>
       
         <ImgSvg src={ContactSvg.img} alt="" />
       <Form className="AppInput" >
      <Inputs>
        <React.Fragment>
          <Label>E-mail Address</Label>
          <Input type="text" id="title"   placeholder="E-mail" />
        </React.Fragment>
       
        <Message>
          <Label>Message*</Label>
          <Textarea required type="text" id="update" placeholder="Votre Message"  />
        </Message>
      </Inputs>
      <Button>Send update</Button>
    </Form>
       </ContainerWrapper>
      </Container>
    )
}

export default Contact
