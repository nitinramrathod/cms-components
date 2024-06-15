import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { TextareaInput, Wrapper } from "./StyledComponents";
import Link from "next/link";
import ImageSelector from "./ImageSelector";
import { storeProduct } from "@/utils/server-action";

const CreateForm = () => {


  return (
    <Wrapper>
      <Container>
        <form action={storeProduct}>
           
          <Row className="py-4">
            <Link className="mb-4" href={"/dashboard/products"}>
              {`<-`}Product List
            </Link>

            <h2>Add Product</h2>
          </Row>
          <Row className="py-4">
            <Col>
            <ImageSelector></ImageSelector>
            </Col>
            </Row>
          <Row>
            <Col sm={12} md={6}>
              <FloatingLabel
                controlId="name"
                label="Enter Name"
                className="mb-3"
              >
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
              </FloatingLabel>
            </Col>

            <Col sm={12} md={6}>
              <FloatingLabel
                controlId="model"
                label="Enter Model"
                className="mb-3"
              >
                <Form.Control
                  name="model"
                  type="text"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col sm={12} md={4}>
              <FloatingLabel controlId="ram" label="Enter Ram" className="mb-3">
                <Form.Control
                  name="ram"
                  type="text"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
            </Col>
            <Col sm={12} md={4}>
              <FloatingLabel
                controlId="storage"
                label="Enter Storage"
                className="mb-3"
              >
                <Form.Control
                  name="storage"
                  type="text"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
            </Col>
            <Col sm={12} md={4}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Price"
                className="mb-3"
              >
                <Form.Control
                  name="price"
                  type="number"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col sm={12}>
              <TextareaInput
                name="description"
                id=""
                cols="30"
                rows="4"
              ></TextareaInput>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col sm={12}>
              <Button type="submit" className="w-100" variant="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </Wrapper>
  );
};

export default CreateForm;
