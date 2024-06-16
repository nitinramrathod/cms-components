'use client'
import { useFormState } from 'react-dom'
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { ErrorText, TextareaInput, Wrapper } from "./StyledComponents";
import Link from "next/link";
import ImageSelector from "./ImageSelector";
import { storeProduct } from "@/utils/server-action";
import SubmitButton from "./SubmitButton";

const CreateForm = () => {

    const [state, formAction] = useFormState(storeProduct, {message: null}); 

    


  return (
    <Wrapper>
      <Container>
        <form action={formAction}>
           
          <Row className="py-4">
            <Link className="mb-4" href={"/dashboard/products"}>
              {`<-`}Product List
            </Link>

            <h2>Add Product</h2>
          </Row>
          <Row className="py-4">
            <Col>
            <ImageSelector></ImageSelector>
            {state?.image && <ErrorText>{state?.image}</ErrorText>}
            </Col>

            </Row>
          <Row>
            <Col sm={12} md={6}>
              <FloatingLabel
                controlId="name"
                label="Enter Name"
                className="mb-1"
              >
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
              </FloatingLabel>
              {state?.name && <ErrorText>{state?.name}</ErrorText>}
            </Col>

            <Col sm={12} md={6}>
              <FloatingLabel
                controlId="model"
                label="Enter Model"
                className="mb-1"
              >
                <Form.Control
                  name="model"
                  type="text"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
              {state?.model && <ErrorText>{state?.model}</ErrorText>}

            </Col>
          </Row>

          <Row className="pt-4">
            <Col sm={12} md={4}>
              <FloatingLabel controlId="ram" label="Enter Ram" className="mb-1">
                <Form.Control
                  name="ram"
                  type="text"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
              {state?.ram && <ErrorText>{state?.ram}</ErrorText>}

            </Col>
            <Col sm={12} md={4}>
              <FloatingLabel
                controlId="storage"
                label="Enter Storage"
                className="mb-1"
              >
                <Form.Control
                  name="storage"
                  type="text"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
              {state?.storage && <ErrorText>{state?.storage}</ErrorText>}

            </Col>
            <Col sm={12} md={4}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Price"
                className="mb-1"
              >
                <Form.Control
                  name="price"
                  type="number"
                  placeholder="Enter Model"
                />
              </FloatingLabel>
              {state?.price && <ErrorText>{state?.price}</ErrorText>}
              
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
              {state?.description && <ErrorText>{state?.description}</ErrorText>}

            </Col>
          </Row>
          <Row className="pt-4">
            <Col sm={12}>
            <SubmitButton></SubmitButton>
              
            </Col>
          </Row>
        </form>
      </Container>
    </Wrapper>
  );
};

export default CreateForm;
