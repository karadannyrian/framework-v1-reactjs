import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DefaultConfig from '../../config';
import logo from '../../assets/logo/png/logo-color.png'
import Avatar from '../../components/Avatar';
import { Col, Row } from 'react-bootstrap';

export default function LoginPage() {
    const navigate = useNavigate()
    useEffect(() => {
        document.body.style.background = '#afbabe'
    }, []);

    const { colorMode } = DefaultConfig.config
    const [passVisible, setPassVisible] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            return setValidated(true);
        }
        setValidated(true);
        const payload = {
            email: form.email.value,
            password: form.password.value
        }

        console.log(payload)
    };

    return (
        <div className='center-container' style={{ padding: 30, height: '100vh' }}>
            <div>
                <Card
                    bg={colorMode.toLowerCase() === 'dark' ? 'dark' : undefined}
                    key={colorMode}
                    text={colorMode.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{
                        maxWidth: 400,
                        margin: 'auto', padding: 'auto',
                        borderRadius: 30,
                        borderTop: '5px solid #61777F',
                        borderLeft: '5px solid #61777F',
                        borderRight: '5px solid #87979d',
                        borderBottom: '5px solid #87979d'

                    }}
                    className="p-3"
                >
                    <Card.Body>
                        <div className='d-flex flex-wrap py-3'>
                            <Avatar type={'roundedCircle'} src={logo} width={65} />
                            <div className='p-3 header-text'>SIGN IN</div>
                        </div>
                        <Form noValidate method='POST' validated={validated} onSubmit={handleSubmit}>
                            <div className='pb-3'>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className='form-label'>Email address</Form.Label>
                                    <Form.Control size="lg" required maxLength={200} type="text" name="email" placeholder="name@example.com" />
                                    <Form.Control.Feedback type="invalid">
                                        Please input registered Email
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className='form-label'>Password</Form.Label>
                                    <InputGroup >
                                        <Form.Control size="lg" required maxLength={200} type={passVisible ? "text" : "password"} name="password" />
                                        <Button variant={colorMode.toLowerCase()} id="button-visibility" onClick={() => setPassVisible(!passVisible)}>
                                            {!passVisible &&
                                                <span className="material-icons m-1">
                                                    visibility
                                                </span>}
                                            {passVisible &&
                                                <span className="material-icons m-1">
                                                    visibility_off
                                                </span>}
                                        </Button>
                                        <Form.Control.Feedback type="invalid">
                                            Please input Password
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Row className="mb-3">
                                    <Col sm={12} md={6} className='mb-2 mb-sm-0'>
                                        <Form.Group>
                                            <Form.Check type="checkbox" name="rememberMe" label="Remember me" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className='text-info' style={{ cursor: 'pointer' }} onClick={() => navigate('/auth/forgot-password')}>Forgot Password?</div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='pb-3'>
                                <Button type="submit" color='primary'>Sign in</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}