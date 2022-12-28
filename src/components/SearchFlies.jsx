import React from 'react';
import { Button, Form, Row, Select, DatePicker, Space, Dropdown, InputNumber } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

const SearchFlies = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const items = [
        {
            key: '1',
            label: (
                <Space >
                    Adultos
                    <InputNumber min={1} max={10} defaultValue={1} />
                </Space>
            ),
        },
        {
            key: '2',
            label: (
                <Space >
                    Niños
                    <InputNumber min={0} max={10} defaultValue={0} />
                </Space>
            ),
        },
        {
            key: '3',
            label: (
                <Space >
                    Infantes ( niños menores de 2 años)
                    <InputNumber min={0} max={10} defaultValue={0} />
                </Space>
            ),
        },
    ];

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row style={{
                justifyContent: 'center',
                margin: '10px'
            }}>
                <Select
                    placeholder="Seleciona Ciudad de origen">
                </Select>
                <Select
                    placeholder="Seleciona Ciudad de destino">
                </Select>
                <Space direction="vertical" size={12}>
                    <RangePicker />
                </Space>
                <Dropdown menu={{
                    items,
                }}>
                    <Button>
                        <Space>
                            Pasajeros
                            <UserOutlined />
                        </Space>
                    </Button>
                </Dropdown>
                <Button type="primary" htmlType="submit"
                    style={{
                        marginLeft: '8px',
                    }}>
                    Buscar
                </Button>
                <Button
                    style={{
                        marginLeft: '8px',
                    }}
                    onClick={() => {
                        form.resetFields();
                    }}
                >
                    Limpiar
                </Button>
            </Row>
        </Form>
    );
}

export default SearchFlies;