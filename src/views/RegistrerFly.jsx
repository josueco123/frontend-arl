import React, { useState } from 'react';
import { Button, message, Steps, Layout } from 'antd';
import ClientForm from '../components/ClientForm';
import ListFlies from '../components/ListFlies';
const { Content, Header } = Layout;
const steps = [
    {
        title: 'Seleciona tu Vuelo',
        content: <ListFlies />,
    },
    {
        title: 'Regitra tus Datos',
        content: <ClientForm />,
    },
    {
        title: 'Revisa la Información',
        content: 'Last-content',
    },
];
const RegisterFly = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    return (
        <Layout>
            <Header>

            </Header>
            <Content style={{ margin: '20px'}}>

                <Steps current={current} items={items}  />
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>
            </Content>
        </Layout>
    );
};
export default RegisterFly;