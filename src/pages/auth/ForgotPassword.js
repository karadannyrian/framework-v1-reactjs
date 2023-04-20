import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DefaultConfig from '../../config';
import logo from '../../assets/logo/png/logo-color.png'
import Avatar from '../../components/Avatar';

export default function ForgotPassword() {
    useEffect(() => {
        document.body.style.background = '#afbabe'
    }, []);

    const { colorMode } = DefaultConfig.config
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
                        maxWidth: 450,
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
                            <div className='p-3 header-text'>FORGOT PASSWORD</div>
                        </div>
                        <Form noValidate method='POST' validated={validated} onSubmit={handleSubmit}>
                            <div className='pb-3'>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className='form-label'>Email address</Form.Label>
                                    <Form.Control size="lg" required maxLength={200} type="email" name="email" placeholder="name@example.com" />
                                    <Form.Control.Feedback type="invalid">
                                        Please input registered Email
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className='pb-3'>
                                <Button type="submit" color='primary'>Send verification link</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}